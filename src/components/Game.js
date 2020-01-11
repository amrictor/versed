import React, {Component} from 'react'
import Display from './Display'
import "../styles/Game.scss"
import Sidebar from './Sidebar'
import FileUpload from './FileUpload'
class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            discoveredWords : [],
            forfeit: false
        }
        this.setSong = this.setSong.bind(this);
        this.discover = this.discover.bind(this)
        this.forfeit = this.forfeit.bind(this)
    }
    forfeit() {
        this.setState({forfeit: true})
    }

    setSong(song) {
        this.setState({song: song, discoveredWords: [], forfeit: false})
    }
    
    discover(word, index) {
        let temp = this.state.discoveredWords
        temp[index]=word;
        this.setState({discoveredWords : temp})
    }

    render() {
        return (
            <div id="game">
                <Sidebar>
                    <div id="menu">
                        <FileUpload setSong={this.setSong}/>
                    </div>
                </Sidebar>
                   
                <Display forfeit_status={this.state.forfeit} forfeit={this.forfeit} setSong={this.setSong} song={this.state.song} discoveredWords={this.state.discoveredWords} discover={this.discover}/> 
            </div>
        );
    
    }
} export default Game;