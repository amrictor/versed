import React, {Component} from 'react'
import { Input } from 'reactstrap'
import cheerio from 'cheerio';
import Timer from './Timer'
import "../styles/Display.scss"
import "../resources/latinise_compact"
import { token } from '../resources/genius_token'


class Song extends Component {
    constructor(props) {
        super(props)
        this.state = {
            discoveredWords : [],
            forfeit_status: false,
        }
        this.getLyrics = this.getLyrics.bind(this);
        this.setSong = this.setSong.bind(this);
        this.discover = this.discover.bind(this)
        this.forfeit = this.forfeit.bind(this)
        this.checkWord = this.checkWord.bind(this)
        this.gameWon = this.gameWon.bind(this)
        this.lyricDiscovered = this.lyricDiscovered.bind(this)
    }

    componentDidMount() {
        this.getSong();
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.match.params.genius_id !== prevProps.match.params.genius_id) {
            this.setState({song: undefined, forfeit_status: false, discoveredWords: []});
            this.getSong();
        }
    }

    getSong() {
        const getLyrics = this.getLyrics;
        var request = new XMLHttpRequest();
       
        request.open('GET', 'https://api.genius.com/songs/' + this.props.match.params.genius_id + '?access_token=' + token, true);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                var type = request.getResponseHeader('Content-Type');
                if (type.indexOf("text") !== 1) {
                    getLyrics(JSON.parse(request.responseText).response.song)
                }
            }
        }
        request.send();
    }

    getLyrics(song) {
        const setSong = this.setSong;
        var request = new XMLHttpRequest();
        request.open('GET', 'https://cors-anywhere.herokuapp.com/'+ song.url, true);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                var type = request.getResponseHeader('Content-Type');
                if (type.indexOf("text") !== 1) {
                    const $ = cheerio.load(request.responseText)
                    let s = {}
                    s["title"] = song.title ? song.title : "N/A"
                    s["album"] = song.album ? song.album.name : "N/A"
                    s["artist"] = song.primary_artist ? song.primary_artist.name : "N/A"
                    s["url"] = song.url
                    s["lyrics"]= $('.lyrics').text().replace(/\[.*\]/g, "").trim().replace(/[’‘]/g, '\'').split((/[\u200B\r\n\s,?!:;().…"“”—-]+/)).filter((word) => !word.match(/^[\s']+$/) && word)
                    setSong(s)
                }
            }
        }
        request.send();
    }

    forfeit() {
        this.setState({forfeit_status: true})
    }
    
    setSong(song) {
        this.setState({song: song, discoveredWords: [], forfeit: false})
    }

    discover(word, index) {
        let temp = this.state.discoveredWords
        temp[index]=word;
        this.setState({discoveredWords : temp})
    }

    wordsEquivalent(lyric, word) {
        return lyric.toLowerCase().replace(/'/g, "").latinise().trim() === word.toLowerCase().replace(/'/g, "").latinise().trim()
    }

    lyricDiscovered(word) {
        return (this.state.discoveredWords.map((w) => this.wordsEquivalent(w, word)).includes(true))
    }

    checkWord(event) {
        let word = event.target.value
        if (this.lyricDiscovered(word)) return;
        this.state.song.lyrics.forEach((w, index) => {
            if(this.wordsEquivalent(w, word)) {
                this.discover(w, index);
                event.target.value = ""
            }
        })
    }

    gameWon(){
        if (typeof this.state.song === "undefined") return false;
        return JSON.stringify(this.state.discoveredWords) === JSON.stringify(this.state.song.lyrics)
    }
    
    render(){
        return ( 
            <div id="outer_display">
                
                {typeof this.state.song != "undefined"
                ? <div id="display">
                    {this.gameWon() && <div id="winner">You won!</div>}
                    <Input type="search" disabled={this.state.forfeit_status || this.gameWon()} onChange={this.checkWord}/> 
                    <div id="info">
                        <div>{this.state.discoveredWords.filter((word) => word).length} / {this.state.song.lyrics.length}</div>
                        <Timer forfeit_status={this.state.forfeit_status} gameWon={this.gameWon}/>
                        <button disabled={this.state.forfeit_status || this.gameWon()} onClick={this.forfeit}>Forfeit</button>
                    </div>
                    {(this.state.forfeit_status || this.gameWon()) && <div id="song_title" className={this.state.forfeit_status ? "forfeit" : "won"}>{this.state.song.title}</div>}
                    <div id="lyrics">
                        {this.state.song.lyrics.map((word, index) => <div key={index} className={"word " + (this.lyricDiscovered(word) ? "" : this.state.forfeit_status ? "forfeit" : "undiscovered")}>{word}</div>)}
                    </div>
                    {(this.state.forfeit_status || this.gameWon()) && <a target="_blank" rel="noopener noreferrer" href={this.state.song.url}>Notice something wrong with these lyrics? <br/>Help fix them by following this link and suggesting a change!</a>}
                    
                </div>
                : "Loading..."
                }
            </div>
        );
    }
} export default Song;