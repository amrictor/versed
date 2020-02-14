import React, {Component} from 'react'
// import { Input } from 'reactstrap'

import { FaTimesCircle as Remove, FaRandom as Shuffle, FaSave as Save, FaUpload as Upload, FaTimes as Clear } from 'react-icons/fa'

import '../styles/Search.scss'

class Playlist extends Component {

    constructor(props){
        super(props)
        this.state = {
            history: []
        }
        this.saveToFile = this.saveToFile.bind(this)
        this.loadFile = this.loadFile.bind(this)
        this.clearPlaylist = this.clearPlaylist.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.loadRandomSong = this.loadRandomSong.bind(this)
        this.getRandomSong = this.getRandomSong.bind(this)
    }

    loadFile(event){
        let reader = new FileReader();
        reader.onload = function(event) {
            let fileContent = event.target.result;
            let playlist = JSON.parse(fileContent);
            this.props.updatePlaylist(playlist.name, playlist.contents);
        }.bind(this);
        reader.readAsText(event.target.files[0]);
    }

    saveToFile(){
        let source = JSON.stringify(this.props.playlist);
        let filename = this.props.playlist.name.toLowerCase().replace(/ /g, "_") +".json";
        let contentType = "application/json;charset=utf-8;";

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            let blob = new Blob([decodeURIComponent(encodeURI(source))], { type: contentType });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            let a = document.createElement('a');
            a.download = filename;
            a.href = 'data:' + contentType + ',' + encodeURIComponent(source);
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }

    updateTitle(event) {
        this.props.updatePlaylist(event.target.value, this.props.playlist.contents)
    }

    clearPlaylist() {
        this.props.updatePlaylist(this.props.playlist.name, []);
    }

    getRandomSong() {
        var options = this.props.playlist.contents.map((s) => s.song_path).filter((song)=>!this.state.history.includes(song))

        if(options.length===0) {
            this.setState({history: [this.props.location.pathname]})
            var index = Math.floor(Math.random() * (this.props.playlist.contents.length-1));
            return this.props.playlist.contents.filter((song)=>song.song_path!==this.props.location.pathname)[index].song_path
        }
        return options[Math.floor(Math.random() * options.length)]
    }

    loadRandomSong() {
        if(this.props.playlist.contents.length===0) return;
        let history = this.state.history;
        history.push(this.props.location.pathname)
        window.location.href = "/#" + this.getRandomSong()
    }

    render(){
        return (
            <div id="playlist">
                <div id="heading">
                    <input id="playlist_title" onChange={this.updateTitle} value={this.props.playlist.name} title="Name your playlist"/>
                    <div id="toolbar">
                        <Shuffle title="Load random song" className={"button" + (this.props.playlist.contents.length === 0 ? " disabled": "")} onClick={this.loadRandomSong}/>
                        <Clear title="Clear playlist" className={"button" + (this.props.playlist.contents.length === 0 ? " disabled": "")} onClick={this.clearPlaylist}/>
                        <Save title="Save playlist" className={"button" + (this.props.playlist.contents.length === 0 ? " disabled": "")} onClick={this.saveToFile}/>
                        {<Upload title="Load a saved playlist" className="button" onClick={()=> {document.getElementById('fileinput').click()}}/>}
                        <input type="file" id="fileinput" onChange={(event)=>{console.log("Upload");this.loadFile(event);}}/>
                    </div>
                </div>
                <div id="search_results">
                    {this.props.playlist.contents.length > 0 ? this.props.playlist.contents.map((result, index)=>
                        <div className="result" key={result.song_path}>
                            <div className="info">
                                <img src={result.image} alt=""/>
                                <div className="text">
                                    <a className="song" title="Play this song" href={"/#" +result.song_path}>{result.title}</a> 
                                    <div className="artist" title="View more from this artist" onClick={() => this.props.getArtist(result.artist)}><i>{result.artist.name}</i></div>
                                </div>
                            </div>
                            <Remove title="Add to playlist" className="button" onClick={()=>{this.props.removeSong(index)}}/>
                        </div>
                    ) : <div id="alt">Search for songs to add to your playlist!</div>}
                </div>

            </div>
        );
    
    }
} export default Playlist;