import React, {Component} from 'react'
import "../styles/Artist.scss"

import { FaPlusSquare as Add, FaCheckSquare as Check} from 'react-icons/fa'
import { token } from '../resources/genius_token'

class Artist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            page: 1,
            loading: true
        }
        this.getSongs = this.getSongs.bind(this)
        this.cleanUp = this.cleanUp.bind(this)
    }

    componentDidMount() {
        console.log(this.props.artist_id, this.props.artist_id===undefined)
        if(this.props.artist === undefined || this.state.songs.length !== 0) return
        else {
            console.log("get artist songs")
            this.getArtistSongs();
        }
    }

    getArtistSongs() {
        // if(page===null) {
        //     this.setState({loading: false})
        //     return;
        // }
        this.setState({loading: true})
        const getSongs = this.getSongs
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.genius.com/artists/' + this.props.artist.id + '/songs?per_page=15&page=' + this.state.page + '&access_token=' + token, true);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                var type = request.getResponseHeader('Content-Type');
                if (type.indexOf("text") !== 1) {
                    getSongs(JSON.parse(request.responseText).response)
                }
            }
        }
        request.send();
    }

    getSongs(response) {
        console.log(response)
        var results = response.songs.map((hit) => { return {title: hit.title, artist: {name: hit.primary_artist.name, id: hit.primary_artist.id}, lyrics_path: hit.path, song_path: hit.api_path, image: hit.song_art_image_url}})
        this.setState({songs: results, loading: false, nextPage: response.next_page}, ()=>console.log(this.state.nextPage, !this.state.nextPage))
    }

    cleanUp(e) {
        console.log(e)
        this.setState({songs: []}, this.props.getArtist, ()=>console.log(this.state.songs))
    }
    
    setPage(page) {
        if(page === this.state.page || page < 1 || (page > this.state.page && !this.state.nextPage)) return;
        this.setState({page: page}, this.getArtistSongs)
    }

    stopPropagation(e) {
        e.stopPropagation()
    }

    render(){
        
        return ( 
            <div id="modal" onClick={this.cleanUp}>
                <div id="body" onClick={this.stopPropagation}>
                    <div id="title">{this.props.artist.name}</div>
                    <div id="songs">
                        {this.state.loading ? <div id="loading">Loading...</div> : this.state.songs.map((result) => 
                            <div className="result" key={result.song_path}>
                                <div className="info">
                                    <img src={result.image} alt=""/>
                                    <div className="text">
                                        <a className="song" title="Play this song" href={"/#" +result.song_path}>{result.title}</a> 
                                        <i>{result.artist.name}</i>
                                    </div>
                                </div>
                                {this.props.songInPlaylist(result) 
                            ? <Check className="static" title="Already in playlist"/>
                            : <Add  className="button" title="Add to playlist" onClick={()=>this.props.addSong(result)}/>}
                            </div>)}
                    </div>
                    <div id="pagination">
                        <div className="link" onClick={()=>this.setPage(1)}>First</div>
                        <div className={"link " + (this.state.page===1 ? "disabled" : "")} onClick={()=>this.setPage(this.state.page-1)}> {"<<"} Previous</div>
                        <div>{this.state.page}</div>
                        <div className={"link " + (!this.state.nextPage ? "disabled" : "")} onClick={()=>this.setPage(this.state.page+1)}> Next {">>"}</div>
                    </div>
                </div>
            </div>
        );
    }
} export default Artist;