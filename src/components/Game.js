import React, {Component} from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import Song from './Song'
import "../styles/Game.scss"
import Sidebar from './Sidebar'
import Search from './Search'
import Playlist from './Playlist'
import Artist from './Artist'


class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlist: {name: "My Playlist", contents: []},
        }
        this.addSong = this.addSong.bind(this)
        this.removeSong = this.removeSong.bind(this)
        this.updatePlaylist = this.updatePlaylist.bind(this)
        this.songInPlaylist = this.songInPlaylist.bind(this)
        this.getArtist = this.getArtist.bind(this)
    }

    componentDidMount() {
        this.checkCookie();
    }

    setCookie(name, value, exdays=0) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = (exdays===0) ? "" : "expires="+d.toUTCString() + ";path=/";
        document.cookie = name + "=" + JSON.stringify(value) + ";" + expires;
    }

    getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    checkCookie() {
        let playlist_str = this.getCookie("playlist");
        if (playlist_str !== "") {
            let playlist = JSON.parse(playlist_str);
            if(!playlist.contents) this.updatePlaylist(playlist.name, []);
            else this.updatePlaylist(playlist.name, playlist.contents);
        }
    }


    getArtist(artist) {
        this.setState({ artist: artist}, ()=> console.log(this.state.artist))
    }

    songInPlaylist(song) {
        return this.state.playlist.contents.map((s)=>JSON.stringify(s)).includes(JSON.stringify(song))
    }

    updatePlaylist(name, contents) {
        this.setState({playlist: {name: name, contents: contents}}, () => this.setCookie("playlist", this.state.playlist))
    }

    addSong(song) {
        if(this.songInPlaylist(song)) return;
        var contents = this.state.playlist.contents;
        contents.push(song);
        this.updatePlaylist(this.state.playlist.name, contents);
    }

    removeSong(index) {
        var contents = this.state.playlist.contents;
        contents.splice(index, 1);
        this.updatePlaylist(this.state.playlist.name, contents);
    }

    render() {
        return (
            <div id="game">
                <Sidebar title={<div id="apptitle" onClick={()=>{window.location.href="/#/"; window.location.reload()}} title="a lyric guessing game">Versed</div>}>
                    <Search addSong={this.addSong} songInPlaylist={this.songInPlaylist} getArtist={this.getArtist}/>
                    <Playlist playlist={this.state.playlist} removeSong={this.removeSong} updatePlaylist={this.updatePlaylist} location={this.props.location} getArtist={this.getArtist}/>
                </Sidebar>
                {this.state.artist!==undefined && <Artist artist={this.state.artist} getArtist={this.getArtist} addSong={this.addSong} songInPlaylist={this.songInPlaylist} />}
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => 
                            <div id="home">
                                <div className="big">How well do you know your favorite songs?</div>
                                <div>Start by expanding the sidebar and searching for a song to play.</div>
                                <div>Add songs to a playlist and randomize if you like a challenge.</div>
                            </div>}
                    />
                    <Route
                        path="/songs/:genius_id"
                        render={(props) => <Song {...props}/>}
                    />
                </Switch> 
            </div>
        );
    
    }
} export default withRouter(Game);