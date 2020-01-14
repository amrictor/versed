(this["webpackJsonplyrics-quiz"]=this["webpackJsonplyrics-quiz"]||[]).push([[0],{167:function(e,t,a){},175:function(e,t,a){e.exports=a(395)},180:function(e,t,a){},204:function(e,t){},218:function(e,t){},220:function(e,t){},386:function(e,t,a){},387:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){},394:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(169),r=a.n(i),o=(a(180),a(7)),l=a(8),c=a(10),u=a(9),d=a(2),h=a(11),m=a(23),p=a(396),g=a(170),f=a.n(g),v=(a(386),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={time:0},a.passTime=a.passTime.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.passTime,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"passTime",value:function(){this.props.forfeit_status||this.props.gameWon()||this.setState({time:this.state.time+1})}},{key:"padNumber",value:function(e){if(e<100)return("0"+e).slice(-2)}},{key:"render",value:function(){return s.a.createElement("div",{id:"timer",className:this.props.forfeit_status?"forfeit":this.props.gameWon()?"won":""},this.padNumber(Math.floor(this.state.time/3600)%24),":",this.padNumber(Math.floor(this.state.time/60)%60),":",this.padNumber(this.state.time%60))}}]),t}(n.Component)),y=(a(387),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={discoveredWords:[],forfeit_status:!1},a.getLyrics=a.getLyrics.bind(Object(d.a)(a)),a.setSong=a.setSong.bind(Object(d.a)(a)),a.discover=a.discover.bind(Object(d.a)(a)),a.forfeit=a.forfeit.bind(Object(d.a)(a)),a.checkWord=a.checkWord.bind(Object(d.a)(a)),a.gameWon=a.gameWon.bind(Object(d.a)(a)),a.lyricDiscovered=a.lyricDiscovered.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getSong()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.genius_id!==e.match.params.genius_id&&(this.setState({song:void 0,forfeit_status:!1,discoveredWords:[]}),this.getSong())}},{key:"getSong",value:function(){var e=this.getLyrics,t=new XMLHttpRequest;t.open("GET","https://api.genius.com/songs/"+this.props.match.params.genius_id+"?access_token=4qtBMiQeR5pD1zFm-vGmFV6j5khGAiRQskTCLXyuGbxeYGbnXrTnXIyA5n2iXjdg",!0),t.onreadystatechange=function(){4===t.readyState&&200===t.status&&(1!==t.getResponseHeader("Content-Type").indexOf("text")&&e(JSON.parse(t.responseText).response.song))},t.send()}},{key:"getLyrics",value:function(e){console.log(e);var t=this.setSong,a=new XMLHttpRequest;a.open("GET","https://cors-anywhere.herokuapp.com/"+e.url,!0),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status&&1!==a.getResponseHeader("Content-Type").indexOf("text")){var n=f.a.load(a.responseText),s={};s.title=e.title?e.title:"N/A",s.album=e.album?e.album.name:"N/A",s.artist=e.primary_artist?e.primary_artist.name:"N/A",s.url=e.url,s.lyrics=n(".lyrics").text().replace(/\[.*\]/g,"").trim().replace(/[\u2019\u2018]/g,"'").split(/[\r\n, ?!:;().\u2026"\u2014-]+/).filter((function(e){return""!==e&&e})),t(s)}},a.send()}},{key:"forfeit",value:function(){this.setState({forfeit_status:!0})}},{key:"setSong",value:function(e){this.setState({song:e,discoveredWords:[],forfeit:!1})}},{key:"discover",value:function(e,t){var a=this.state.discoveredWords;a[t]=e,this.setState({discoveredWords:a})}},{key:"wordsEquivalent",value:function(e,t){return e.toLowerCase().replace(/'/g,"").trim()===t.toLowerCase().replace(/'/g,"").trim()}},{key:"lyricDiscovered",value:function(e){var t=this;return this.state.discoveredWords.map((function(a){return t.wordsEquivalent(a,e)})).includes(!0)}},{key:"checkWord",value:function(e){var t=this,a=e.target.value;this.lyricDiscovered(a)||this.state.song.lyrics.forEach((function(n,s){t.wordsEquivalent(n,a)&&(t.discover(n,s),e.target.value="")}))}},{key:"gameWon",value:function(){return"undefined"!==typeof this.state.song&&JSON.stringify(this.state.discoveredWords)===JSON.stringify(this.state.song.lyrics)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"outer_display"},"undefined"!=typeof this.state.song?s.a.createElement("div",{id:"display"},this.gameWon()&&s.a.createElement("div",{id:"winner"},"You won!"),s.a.createElement(p.a,{type:"search",disabled:this.state.forfeit_status||this.gameWon(),onChange:this.checkWord}),s.a.createElement("div",{id:"info"},s.a.createElement("div",null,this.state.discoveredWords.filter((function(e){return e})).length," / ",this.state.song.lyrics.length),s.a.createElement(v,{forfeit_status:this.state.forfeit_status,gameWon:this.gameWon}),s.a.createElement("button",{disabled:this.state.forfeit_status||this.gameWon(),onClick:this.forfeit},"Forfeit")),(this.state.forfeit_status||this.gameWon())&&s.a.createElement("div",{id:"song_title",className:this.state.forfeit_status?"forfeit":"won"},this.state.song.title),s.a.createElement("div",{id:"lyrics"},this.state.song.lyrics.map((function(t,a){return s.a.createElement("div",{key:a,className:"word "+(e.lyricDiscovered(t)?"":e.state.forfeit_status?"forfeit":"undiscovered")},t)}))),(this.state.forfeit_status||this.gameWon())&&s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.song.url},"Notice something wrong with these lyrics? ",s.a.createElement("br",null),"Help fix them by following this link and suggesting a change!")):"Loading...")}}]),t}(n.Component)),b=(a(390),a(22)),E=(a(391),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={expanded:!1},a.toggle=a.toggle.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){return s.a.createElement("div",{id:"sidebar",className:this.state.expanded?" expanded":""},s.a.createElement("div",{id:"header"},s.a.createElement("div",{id:"title",className:this.state.expanded?" expanded":"hidden"}),s.a.createElement(b.a,{id:"icon",onClick:this.toggle})),s.a.createElement("div",{id:"children",className:this.state.expanded?" expanded":"hidden"},this.props.children))}}]),t}(n.Component)),k=(a(167),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={search:"",results:[]},a.updateInput=a.updateInput.bind(Object(d.a)(a)),a.getSearchResults=a.getSearchResults.bind(Object(d.a)(a)),a.search=a.search.bind(Object(d.a)(a)),a.listenForEnter=a.listenForEnter.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getSearchResults",value:function(e){console.log(e);var t=e.response.hits.map((function(e){return{title:e.result.title,artist:{name:e.result.primary_artist.name,id:e.result.primary_artist.id},lyrics_path:e.result.path,song_path:e.result.api_path,image:e.result.song_art_image_url}}));console.log(t),this.setState({results:t})}},{key:"getGenius",value:function(e,t){var a=new XMLHttpRequest;a.open("GET","https://api.genius.com"+e+"&access_token=4qtBMiQeR5pD1zFm-vGmFV6j5khGAiRQskTCLXyuGbxeYGbnXrTnXIyA5n2iXjdg",!0),a.onreadystatechange=function(){4===a.readyState&&200===a.status&&(1!==a.getResponseHeader("Content-Type").indexOf("text")&&(console.log(JSON.parse(a.responseText)),t(JSON.parse(a.responseText))))},a.send()}},{key:"renderSearch",value:function(){return this.state.results.map((function(e){return s.a.createElement("div",null,s.a.createElement("a",{href:"/#"+e.song_path},s.a.createElement("button",null,e.title," by ",s.a.createElement("i",null,e.artist))))}))}},{key:"updateInput",value:function(e){this.setState({search:e.target.value})}},{key:"search",value:function(){this.getGenius("/search?per_page=15&q="+encodeURI(this.state.search),this.getSearchResults)}},{key:"listenForEnter",value:function(e){13===e.keyCode&&this.search()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"search"},s.a.createElement("div",{id:"search_bar"},s.a.createElement(p.a,{placeholder:"Search music...",onChange:this.updateInput,onKeyDown:this.listenForEnter}),s.a.createElement("button",{onClick:this.search},"Search")),this.state.results.length>0&&s.a.createElement("div",{id:"search_results"},this.state.results.map((function(t){return s.a.createElement("div",{className:"result",key:t.song_path},s.a.createElement("div",{className:"info"},s.a.createElement("img",{src:t.image,alt:""}),s.a.createElement("div",{className:"text"},s.a.createElement("a",{className:"song",title:"Play this song",href:"/#"+t.song_path},t.title),s.a.createElement("a",{className:"artist",title:"View more from this artist",href:"/#"+t.artist.id},s.a.createElement("i",null,t.artist.name)))),e.props.songInPlaylist(t)?s.a.createElement(b.b,{className:"static",title:"Already in playlist"}):s.a.createElement(b.c,{className:"button",title:"Add to playlist",onClick:function(){return e.props.addSong(t)}}))}))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={search:"",results:[]},a.updateInput=a.updateInput.bind(Object(d.a)(a)),a.getSearchResults=a.getSearchResults.bind(Object(d.a)(a)),a.search=a.search.bind(Object(d.a)(a)),a.listenForEnter=a.listenForEnter.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getSearchResults",value:function(e){console.log(e);var t=e.response.hits.map((function(e){return{title:e.result.title,artist:{name:e.result.primary_artist.name,id:e.result.primary_artist.id},lyrics_path:e.result.path,song_path:e.result.api_path,image:e.result.song_art_image_url}}));console.log(t),this.setState({results:t})}},{key:"getGenius",value:function(e,t){var a=new XMLHttpRequest;a.open("GET","https://api.genius.com"+e+"&access_token=4qtBMiQeR5pD1zFm-vGmFV6j5khGAiRQskTCLXyuGbxeYGbnXrTnXIyA5n2iXjdg",!0),a.onreadystatechange=function(){4===a.readyState&&200===a.status&&(1!==a.getResponseHeader("Content-Type").indexOf("text")&&(console.log(JSON.parse(a.responseText)),t(JSON.parse(a.responseText))))},a.send()}},{key:"renderSearch",value:function(){return this.state.results.map((function(e){return s.a.createElement("div",null,s.a.createElement("a",{href:"/#"+e.song_path},s.a.createElement("button",null,e.title," by ",s.a.createElement("i",null,e.artist))))}))}},{key:"updateInput",value:function(e){this.setState({search:e.target.value})}},{key:"search",value:function(){this.getGenius("/search?per_page=15&q="+encodeURI(this.state.search),this.getSearchResults)}},{key:"listenForEnter",value:function(e){13===e.keyCode&&this.search()}},{key:"getRandomSong",value:function(){var e=this;return this.props.playlist.filter((function(t){return JSON.stringify(t)!==JSON.stringify(e.state.song)}))[Math.floor(Math.random()*this.props.playlist.length)].song_path}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"playlist"},s.a.createElement("div",{id:"heading"},"My Playlist",this.props.playlist.length>0&&s.a.createElement(b.d,{className:"button",onClick:function(){window.location.href="/#"+e.getRandomSong()}})),s.a.createElement("div",{id:"search_results"},this.props.playlist.length>0?this.props.playlist.map((function(t,a){return s.a.createElement("div",{className:"result",key:t.song_path},s.a.createElement("div",{className:"info"},s.a.createElement("img",{src:t.image,alt:""}),s.a.createElement("div",{className:"text"},s.a.createElement("a",{className:"song",title:"Play this song",href:"/#"+t.song_path},t.title),s.a.createElement("a",{className:"artist",title:"View more from this artist",href:"/#"+t.artist.id},s.a.createElement("i",null,t.artist.name)))),s.a.createElement(b.e,{title:"Add to playlist",className:"button",onClick:function(){e.props.removeSong(a)}}))})):s.a.createElement("div",{id:"alt"},"Search for songs to add to your playlist!")))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={playlist:[]},a.addSong=a.addSong.bind(Object(d.a)(a)),a.removeSong=a.removeSong.bind(Object(d.a)(a)),a.songInPlaylist=a.songInPlaylist.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.checkCookie()}},{key:"setCookie",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var s=0===a?"":"expires="+n.toUTCString()+";path=/";document.cookie=e+"="+JSON.stringify(t)+";"+s}},{key:"getCookie",value:function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var s=a[n];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""}},{key:"checkCookie",value:function(){var e=this.getCookie("playlist");if(""!==e){var t=JSON.parse(e);this.setState({playlist:t})}}},{key:"songInPlaylist",value:function(e){return this.state.playlist.slice().map((function(e){return JSON.stringify(e)})).includes(JSON.stringify(e))}},{key:"addSong",value:function(e){var t=this;if(!this.songInPlaylist(e)){var a=this.state.playlist;a.push(e),this.setState({playlist:a},(function(){return t.setCookie("playlist",t.state.playlist)}))}}},{key:"removeSong",value:function(e){var t=this,a=this.state.playlist;a.splice(e,1),this.setState({playlist:a},(function(){return t.setCookie("playlist",t.state.playlist)}))}},{key:"render",value:function(){return s.a.createElement("div",{id:"game"},s.a.createElement(E,null,s.a.createElement(k,{addSong:this.addSong,songInPlaylist:this.songInPlaylist}),s.a.createElement(O,{playlist:this.state.playlist,removeSong:this.removeSong})),s.a.createElement(m.c,null,s.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return s.a.createElement("div",{id:"home"},s.a.createElement("div",{className:"big"},"How well do you know your favorite songs?"),s.a.createElement("div",null,"Start by expanding the sidebar and searching for a song to play."),s.a.createElement("div",null,"Randomization coming soon."))}}),s.a.createElement(m.a,{path:"/songs/:genius_id",render:function(e){return s.a.createElement(y,e)}})))}}]),t}(n.Component),j=Object(m.f)(S);a(394);var _=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(99);r.a.render(s.a.createElement(N.a,null,s.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[175,1,2]]]);
//# sourceMappingURL=main.3f279981.chunk.js.map