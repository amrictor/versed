import React, {Component} from 'react'
import { Input } from 'reactstrap'

import "../styles/Display.scss"

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            forfeit: false
        }
        this.checkWord = this.checkWord.bind(this)
        this.lyricDiscovered = this.lyricDiscovered.bind(this)
    }

    wordsEquivalent(lyric, word) {
        return lyric.toLowerCase().replace("'", "").trim() === word.toLowerCase().replace("'", "").trim()
    }

    lyricDiscovered(word) {
        return (this.props.discoveredWords.map((w) => this.wordsEquivalent(w, word)).includes(true))
    }

    checkWord(event) {
        let word = event.target.value
        if (this.lyricDiscovered(word)) return;
        this.props.song.lyrics.forEach((w, index) => {
            if(this.wordsEquivalent(w, word)) {
                this.props.discover(w, index);
                event.target.value = ""
            }
        })

        // if (this.props.song.lyrics.map((w) => this.wordsEquivalent(w, word)).includes(true)) {
        //     this.props.discover(word)
        //     event.target.value = ""
        // }
        //check set lengths to check for win
        if(this.gameWon()) alert("Congratulations!")
    }

    gameWon(){
        return JSON.stringify(this.props.discoveredWords) === JSON.stringify(this.props.song.lyrics)
    }
    
    render(){
        return ( 
            <div id="outer_display">
                {typeof this.props.song != "undefined"
                ? <div id="display">
                    <Input disabled={this.props.forfeit_status || this.gameWon()} onChange={this.checkWord}/> 
                    <div id="info">
                        {this.props.discoveredWords.filter((word) => word).length} / {this.props.song.lyrics.length}
                        <button disabled={this.props.forfeit_status || this.gameWon()} onClick={this.props.forfeit}>Forfeit</button>
                    </div>
                    <div id="lyrics">
                        {this.props.song.lyrics.map((word, index) => <div key={index} className={"word " + (this.lyricDiscovered(word) ? "" : this.props.forfeit_status ? "forfeit" : "undiscovered")}>{word}</div>)}
                    </div>
                </div>
                : ""}
            </div>
        );
    
    }
} export default Display;