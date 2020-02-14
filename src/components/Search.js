import React, {Component} from 'react'
import { Input } from 'reactstrap'

import { FaPlusSquare as Add, FaCheckSquare as Check } from 'react-icons/fa'

import '../styles/Search.scss'



class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            search: "",
            results: []
        }
        this.updateInput = this.updateInput.bind(this)
        this.getSearchResults = this.getSearchResults.bind(this)
        this.search = this.search.bind(this)
        this.listenForEnter = this.listenForEnter.bind(this)
    }

    getSearchResults(obj) {
        console.log(obj)
        let results = obj.response.hits.map((hit) => {return {title: hit.result.title, artist: {name: hit.result.primary_artist.name, id: hit.result.primary_artist.id}, lyrics_path: hit.result.path, song_path: hit.result.api_path, image: hit.result.song_art_image_url}})
        console.log(results)
        this.setState({results: results})
    }

    getGenius(endpoint, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.genius.com' + endpoint + '&access_token=4qtBMiQeR5pD1zFm-vGmFV6j5khGAiRQskTCLXyuGbxeYGbnXrTnXIyA5n2iXjdg', true);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                var type = request.getResponseHeader('Content-Type');
                if (type.indexOf("text") !== 1) {
                    console.log(JSON.parse(request.responseText))
                    callback(JSON.parse(request.responseText))
                }
            }
        }
        request.send();
    }

    // renderSearch(){
    //     return(
    //         this.state.results.map((result)=><div><a href={"/#" +result.song_path}><button>{result.title} by <i>{result.artist}</i></button></a></div>)
    //     )

    // }
    updateInput(event) {
        this.setState({search: event.target.value})
    }

    search() {
        this.getGenius('/search?per_page=35&q='+encodeURI(this.state.search), this.getSearchResults)
    }

    

    listenForEnter(event) {
        if (event.keyCode === 13) {
            this.search();
        }
    }

    render(){
        return (
            <div id="search">
                
                <div id="search_bar">
                    <Input placeholder="Search music..." onChange={this.updateInput}  onKeyDown={this.listenForEnter}/>
                    <button onClick={this.search}>Search</button>
                </div>

                <div id="search_results" className={this.state.results.length === 0 ? "empty": ""}>
                    {this.state.results.map((result)=>
                        <div className="result" key={result.song_path}>
                            <div className="info">
                                <img src={result.image} alt=""/>
                                <div className="text">
                                    <a className="song" title="Play this song" href={"/#" +result.song_path}>{result.title}</a> 
                                    <div className="artist" title="View more from this artist" onClick={() => this.props.getArtist(result.artist)}><i>{result.artist.name}</i></div>
                                </div>
                            </div>
                            {this.props.songInPlaylist(result) 
                            ? <Check className="static" title="Already in playlist"/>
                            : <Add  className="button" title="Add to playlist" onClick={()=>this.props.addSong(result)}/>}
                        </div>
                    )}
                </div>

            </div>
        );
    
    }
} export default Search;