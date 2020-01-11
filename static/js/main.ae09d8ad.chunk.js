(this["webpackJsonplyrics-quiz"]=this["webpackJsonplyrics-quiz"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,i){t.exports=i(25)},,,,,function(t,e,i){},function(t,e,i){},,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),r=i(9),s=i.n(r),o=(i(17),i(3)),l=i(4),d=i(7),u=i(5),c=i(2),h=i(6),f=i(27),M=(i(18),function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={forfeit:!1},i.checkWord=i.checkWord.bind(Object(c.a)(i)),i.lyricDiscovered=i.lyricDiscovered.bind(Object(c.a)(i)),i}return Object(h.a)(e,t),Object(l.a)(e,[{key:"wordsEquivalent",value:function(t,e){return t.toLowerCase().replace("'","").trim()===e.toLowerCase().replace("'","").trim()}},{key:"lyricDiscovered",value:function(t){var e=this;return this.props.discoveredWords.map((function(i){return e.wordsEquivalent(i,t)})).includes(!0)}},{key:"checkWord",value:function(t){var e=this,i=t.target.value;this.lyricDiscovered(i)||(this.props.song.lyrics.forEach((function(a,n){e.wordsEquivalent(a,i)&&(e.props.discover(a,n),t.target.value="")})),this.gameWon()&&alert("Congratulations!"))}},{key:"gameWon",value:function(){return JSON.stringify(this.props.discoveredWords)===JSON.stringify(this.props.song.lyrics)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{id:"outer_display"},"undefined"!=typeof this.props.song?n.a.createElement("div",{id:"display"},n.a.createElement(f.a,{disabled:this.props.forfeit_status||this.gameWon(),onChange:this.checkWord}),n.a.createElement("div",{id:"info"},this.props.discoveredWords.filter((function(t){return t})).length," / ",this.props.song.lyrics.length,n.a.createElement("button",{disabled:this.props.forfeit_status||this.gameWon(),onClick:this.props.forfeit},"Forfeit")),(this.props.forfeit_status||this.gameWon())&&n.a.createElement("div",{id:"song_title",className:this.props.forfeit_status?"forfeit":"won"},this.props.song.title),n.a.createElement("div",{id:"lyrics"},this.props.song.lyrics.map((function(e,i){return n.a.createElement("div",{key:i,className:"word "+(t.lyricDiscovered(e)?"":t.props.forfeit_status?"forfeit":"undiscovered")},e)})))):"")}}]),e}(a.Component)),p=(i(21),i(11)),v=(i(22),function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={expanded:!1},i.toggle=i.toggle.bind(Object(c.a)(i)),i}return Object(h.a)(e,t),Object(l.a)(e,[{key:"toggle",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){return n.a.createElement("div",{id:"sidebar",className:this.state.expanded?" expanded":""},n.a.createElement("div",{id:"header"},this.state.expanded?n.a.createElement("div",{id:"title"},' "Title Goes Here"'):"",n.a.createElement(p.a,{id:"icon",onClick:this.toggle})),this.state.expanded?this.props.children:"")}}]),e}(a.Component)),m=(i(23),function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(d.a)(this,Object(u.a)(e).call(this,t))).readText=i.readText.bind(Object(c.a)(i)),i}return Object(h.a)(e,t),Object(l.a)(e,[{key:"processLyrics",value:function(t){var e=[];return t.forEach((function(t){t.split(/[, ?!:;()."-]/).forEach((function(t){0!==t.length&&e.push(t)}))})),e}},{key:"readFile",value:function(t){var e=t.split("\n"),i={};return i.title=e[0],i.artist=e[1],i.album=e[2],i.lyrics=this.processLyrics(e.slice(3)),i}},{key:"getFile",value:function(t){var e=new FileReader;e.onload=function(t){var e=t.target.result,i=this.readFile(e);this.props.setSong(i)}.bind(this),e.readAsText(t.target.files[0])}},{key:"readText",value:function(t){var e=JSON.parse(t),i=e.result.track.text.trim().replace(/\u2019/g,"'"),a={};a.title=e.result.track.name,a.artist=e.result.artist,a.lyrics=i.split(/[\r\n, ?!:;()."-]+/).filter((function(t){return""!==t&&t})),this.props.setSong(a)}},{key:"getText",value:function(t,e){var i=new XMLHttpRequest;i.open("GET","https://orion.apiseeds.com/api/music/lyric/"+t.artist+"/"+t.title+"?apikey=W5i0ZMfUmju2xbXNRZbsjpNYzGOMZiavxY4Vz6VlVatxFi8f9wdLAIofgwOP75TK",!0),i.onreadystatechange=function(){4===i.readyState&&200===i.status&&(1!==i.getResponseHeader("Content-Type").indexOf("text")&&e(i.responseText))},i.send()}},{key:"renderSearch",value:function(){var t=this;return[{album:"Hamilton",tracks:[{title:"Alexander Hamilton",artist:"Lin-Manuel Miranda"},{title:"Aaron Burr, Sir",artist:"Lin-Manuel Miranda"},{title:"My Shot",artist:"Lin-Manuel Miranda"},{title:"The Story of Tonight",artist:"Lin-Manuel Miranda"},{title:"The Schuyler Sisters",artist:"Lin-Manuel Miranda"},{title:"Farmer Refuted",artist:"Lin-Manuel Miranda"},{title:"You'll Be Back",artist:"Lin-Manuel Miranda"},{title:"Right Hand Man",artist:"Lin-Manuel Miranda"},{title:"A Winter's Ball",artist:"Lin-Manuel Miranda"},{title:"Helpless",artist:"Lin-Manuel Miranda"},{title:"Satisfied",artist:"Lin-Manuel Miranda"},{title:"The Story of Tonight - Reprise",artist:"Lin-Manuel Miranda"},{title:"Wait for It",artist:"Lin-Manuel Miranda"},{title:"Stay Alive",artist:"Lin-Manuel Miranda"},{title:"Ten Duel Commandments",artist:"Lin-Manuel Miranda"},{title:"Meet Me Inside",artist:"Lin-Manuel Miranda"},{title:"That Would Be Enough",artist:"Lin-Manuel Miranda"},{title:"Guns And Ships",artist:"Lin-Manuel Miranda"},{title:"History Has Its Eyes On You",artist:"Lin-Manuel Miranda"},{title:"Yorktown (The World Turned Upside Down)",artist:"Lin-Manuel Miranda"},{title:"What Comes Next?",artist:"Lin-Manuel Miranda"},{title:"Dear Theodosia",artist:"Lin-Manuel Miranda"},{title:"Non-Stop",artist:"Lin-Manuel Miranda"},{title:"What'd I Miss",artist:"Lin-Manuel Miranda"},{title:"Cabinet Battle #1",artist:"Lin-Manuel Miranda"},{title:"Take a Break",artist:"Lin-Manuel Miranda"},{title:"Say No To This",artist:"Lin-Manuel Miranda"},{title:"The Room Where It Happens",artist:"Lin-Manuel Miranda"},{title:"Schuyler Defeated",artist:"Lin-Manuel Miranda"},{title:"Cabinet Battle #2",artist:"Lin-Manuel Miranda"},{title:"Washington on Your Side",artist:"Lin-Manuel Miranda"},{title:"One Last Time",artist:"Lin-Manuel Miranda"},{title:"I Know Him",artist:"Lin-Manuel Miranda"},{title:"The Adams Administration",artist:"Lin-Manuel Miranda"},{title:"We Know",artist:"Lin-Manuel Miranda"},{title:"Hurricane",artist:"Lin-Manuel Miranda"},{title:"The Reynolds Pamphlet",artist:"Lin-Manuel Miranda"},{title:"Burn",artist:"Lin-Manuel Miranda"},{title:"Blow Us All Away",artist:"Lin-Manuel Miranda"},{title:"Stay Alive - Reprise",artist:"Lin-Manuel Miranda"},{title:"It's Quiet Uptown",artist:"Lin-Manuel Miranda"},{title:"The Election of 1800",artist:"Lin-Manuel Miranda"},{title:"Your Obedient Servant",artist:"Lin-Manuel Miranda"},{title:"Best of Wives and Best of Women",artist:"Lin-Manuel Miranda"},{title:"The World Was Wide Enough",artist:"Lin-Manuel Miranda"},{title:"Who Lives, Who Dies, Who Tells Your Story",artist:"Lin-Manuel Miranda"}]}].map((function(e){return n.a.createElement("button",{key:e.album,onClick:function(){return t.getText(e.tracks[Math.floor(Math.random()*e.tracks.length)],t.readText)}},e.album)}))}},{key:"render",value:function(){return n.a.createElement("div",{id:"upload"},this.renderSearch())}}]),e}(a.Component)),g=function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={discoveredWords:[],forfeit:!1},i.setSong=i.setSong.bind(Object(c.a)(i)),i.discover=i.discover.bind(Object(c.a)(i)),i.forfeit=i.forfeit.bind(Object(c.a)(i)),i}return Object(h.a)(e,t),Object(l.a)(e,[{key:"forfeit",value:function(){this.setState({forfeit:!0})}},{key:"setSong",value:function(t){this.setState({song:t,discoveredWords:[],forfeit:!1})}},{key:"discover",value:function(t,e){var i=this.state.discoveredWords;i[e]=t,this.setState({discoveredWords:i})}},{key:"render",value:function(){return n.a.createElement("div",{id:"game"},n.a.createElement(v,null,n.a.createElement("div",{id:"menu"},n.a.createElement(m,{setSong:this.setSong}))),n.a.createElement(M,{forfeit_status:this.state.forfeit,forfeit:this.forfeit,setSong:this.setSong,song:this.state.song,discoveredWords:this.state.discoveredWords,discover:this.discover}))}}]),e}(a.Component);i(24);var y=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.ae09d8ad.chunk.js.map