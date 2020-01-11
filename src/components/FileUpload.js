import React, {Component} from 'react'
import '../styles/FileUpload.scss'

class FileUpload extends Component {

    constructor(props){
        super(props)
        this.readText = this.readText.bind(this)
    }

    processLyrics(raw) {
        let lyrics = []
        raw.forEach( line => {
            line.split(/[, ?!:;()."-]/).forEach ( word => {
                if(word.length!==0) {
                   lyrics.push(word)
                }
            });
        });
        return lyrics
    }

    readFile(raw) {
        let raw_arr = raw.split("\n")
        let song = {}
        song["title"] = raw_arr[0]
        song["artist"] = raw_arr[1]
        song["album"] = raw_arr[2]
        song["lyrics"] = this.processLyrics(raw_arr.slice(3))

        return song;
    }
    
    getFile(event) {
        let reader = new FileReader();
        reader.onload = function(event) {
            let fileContent = event.target.result;
            // let contents = JSON.parse(fileContent);
            let song = this.readFile(fileContent)
            this.props.setSong(song)
        }.bind(this);
        reader.readAsText(event.target.files[0]);
    }

    readText(text) {
        let obj = JSON.parse(text)
        let lyrics = obj.result.track.text.trim().replace(/’/g, '\'')
        let song = {}
        song["title"] = obj.result.track.name
        song["artist"] = obj.result.artist
        song["lyrics"] = lyrics.split((/[\r\n, ?!:;()."-]+/)).filter((word) => word !== "" && word)
        this.props.setSong(song)
    }

    getText(song, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://orion.apiseeds.com/api/music/lyric/'+ song.artist + '/' + song.title +'?apikey=W5i0ZMfUmju2xbXNRZbsjpNYzGOMZiavxY4Vz6VlVatxFi8f9wdLAIofgwOP75TK', true);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                var type = request.getResponseHeader('Content-Type');
                if (type.indexOf("text") !== 1) {
                    callback(request.responseText)
                }
            }
        }
        request.send();
    }

    renderSearch(){
        const music = [
            {
            "album" : "Hamilton",
            "tracks" : [
                            {
                                "title": "Alexander Hamilton",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Aaron Burr, Sir",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "My Shot",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "The Story of Tonight",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "The Schuyler Sisters",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Farmer Refuted",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "You'll Be Back",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Right Hand Man",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "A Winter's Ball",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Helpless",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Satisfied",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "The Story of Tonight - Reprise",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Wait for It",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Stay Alive",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Ten Duel Commandments",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Meet Me Inside",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "That Would Be Enough",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Guns And Ships",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "History Has Its Eyes On You",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Yorktown (The World Turned Upside Down)",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "What Comes Next?",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Dear Theodosia",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Non-Stop",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "What'd I Miss",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Cabinet Battle #1",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Take a Break",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Say No To This",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "The Room Where It Happens",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Schuyler Defeated",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Cabinet Battle #2",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Washington on Your Side",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "One Last Time",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "I Know Him",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "The Adams Administration",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "We Know",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Hurricane",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "The Reynolds Pamphlet",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Burn",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Blow Us All Away",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Stay Alive - Reprise",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "It's Quiet Uptown",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "The Election of 1800",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Your Obedient Servant",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Best of Wives and Best of Women",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "The World Was Wide Enough",
                                "artist": "Lin-Manuel Miranda"
                            },
                            {
                                "title": "Who Lives, Who Dies, Who Tells Your Story",
                                "artist": "Lin-Manuel Miranda"
                            }
                        ]
        }]

        return(
            music.map((album)=><button key={album.album} onClick={() => this.getText(album.tracks[Math.floor(Math.random() * album.tracks.length)], this.readText)}>{album.album}</button>)
        )

    }

    render(){
        return (
            

            <div id="upload">
                {/* 
                <div id="search">
                    <input></input>
                </div> 
                */}
                {this.renderSearch()}
                {/* <button onClick={()=>this.getText(this.readText)}>Get Text</button> */}
                {/* <p>Upload a song file:</p>
                <form>
                    <input type="file" name="myFile" id="example" onChange={(event) => {this.getFile(event)}}/>
                </form> */}
            </div>
            
        );
    
    }
} export default FileUpload;