(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/face.f97c97c0.jpg"},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/C64_Pro_Mono-STYLE.8057d431.woff"},function(e,t,a){e.exports=a.p+"static/media/C64_Pro_Mono-STYLE.2712b79c.woff2"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),l=(a(16),a(1)),s=a(2),o=a(5),m=a(3),u=a(4),d=(a(17),a(6)),h=(a(18),a(19),a(20),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"face-container"},r.a.createElement("div",{className:"face",onClick:this.props.handler}))}}]),t}(r.a.Component)),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).fontWidth=20,a.maxCharCount=27,a.introTextLines=[],a.introTextRef=r.a.createRef(),a.temperatures=[],a.state={introtext:"",displayStats:!1,milliseconds:Math.abs(new Date,new Date(1985,5,28)),temperature:"36.51",tempIndex:0},a.handler=a.handler.bind(Object(d.a)(Object(d.a)(a))),a.updateStats=a.updateStats.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handler",value:function(){var e=this;console.log("handler"),this.setState(function(e){return{displayStats:!e.displayStats}},function(){e.state.displayStats?e.updateStatsTimerId=setInterval(function(){return e.updateStats()},500):clearInterval(e.updateStatsTimerId),console.log("displayStats: "+e.state.displayStats)})}},{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}},{key:"makeIntroTextLines",value:function(){var e="Hello, I\u2019m Henrik! A developer living in Oslo currently working as a consultant at ITverket.",t=this.introTextRef.current.offsetWidth,a=window.innerWidth>900?20:17,n=Math.floor(t/a);for(console.log("width : "+t),console.log("fontSize : "+a),console.log("letterPrLineCount : "+n);""!==e;){console.log("wile");var r=this.getLineEndIndex(n,e),c=e.substring(0,r);this.introTextLines.push(c),e=e.substring(r)}}},{key:"getLineEndIndex",value:function(e,t){if(t.length<=e)return t.length;for(var a=e;a>0;a--)if(" "===t[a])return a+1}},{key:"setTemperatures",value:function(){for(var e=0;e<=109;e++)if(0!==e){var t=this.temperatures[e-1],a=(parseFloat(t)+.01).toFixed(2);this.temperatures[e]=a}else this.temperatures[e]="36.50";this.temperatures=this.shuffle(this.temperatures)}},{key:"componentDidMount",value:function(){this.makeIntroTextLines(),this.forceUpdate(),this.setTemperatures()}},{key:"getTemperature",value:function(){return this.temperatures[this.state.tempIndex]}},{key:"updateStats",value:function(){var e=this;this.setState(function(t){return{milliseconds:Math.abs(new Date,new Date(1985,5,28)),tempIndex:t.tempIndex+1===e.temperatures.length?0:++t.tempIndex,temperature:e.getTemperature()}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(h,{handler:this.handler}),this.state.displayStats?r.a.createElement("div",{className:"header-text"},r.a.createElement("div",{className:"stats"},r.a.createElement("div",{className:"line-0"},"Carbon based lifeform"),r.a.createElement("div",{className:"line-1"},"Species: Homo Sapiens"),r.a.createElement("div",{className:"line-3"},"Subsistence: ",r.a.createElement("a",{href:"https://www.google.com/search?q=C8H10N4O2",target:"_blank",rel:"noopener noreferrer"},"C",r.a.createElement("sub",null,"8"),"H",r.a.createElement("sub",null,"10"),"N",r.a.createElement("sub",null,"4"),"O",r.a.createElement("sub",null,"2"))),r.a.createElement("div",{className:"line-4"},"Age: ",this.state.milliseconds," ms"),r.a.createElement("div",{className:"line-5"},"Height: 1900 mm"),r.a.createElement("div",{className:"line-6"},"Core temperature: ",this.state.temperature," \xb0C"))):r.a.createElement("div",{className:"header-text"},r.a.createElement("div",{className:"intro",ref:this.introTextRef},this.introTextLines.map(function(e,t){return r.a.createElement("div",{className:["intro-line","line-"+t].join(" "),key:t},e)}))))}}]),t}(r.a.Component),f=(a(21),a(22),a(7)),v=a.n(f),b=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).maxLevel=10,a.dark=[],a.light=[],a.levelArray=[r.a.createElement("div",{className:"cursor-light",key:"0"}),r.a.createElement("div",{className:"cursor-light",key:"1"}),r.a.createElement("div",{className:"cursor-light",key:"2"}),r.a.createElement("div",{className:"cursor-light",key:"3"}),r.a.createElement("div",{className:"cursor-light",key:"4"}),r.a.createElement("div",{className:"cursor-light",key:"5"}),r.a.createElement("div",{className:"cursor-light",key:"6"}),r.a.createElement("div",{className:"cursor-light",key:"7"}),r.a.createElement("div",{className:"cursor-light",key:"8"}),r.a.createElement("div",{className:"cursor-light",key:"9"})],a.maxlength=13,a.getId=function(){return(new Date).getTime()},a.state={counter:0},a.onMouseInteraction=a.onMouseInteraction.bind(Object(d.a)(Object(d.a)(a)));for(var n=0;n<a.props.level;n++)a.levelArray[n]=r.a.createElement("div",{className:"cursor-dark",key:n});return a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getNameWithDots",value:function(e){if(e.length===this.maxlength)return e;for(var t=this.maxlength-e.length,a=0;a<t;a++)e+=".";return e}},{key:"onMouseInteraction",value:function(){this.setState(function(e){return{counter:e.counter+1}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tech-item",onClick:this.onMouseInteraction,onMouseEnter:this.onMouseInteraction,key:this.getId()},r.a.createElement("div",{className:"name"},this.getNameWithDots(this.props.name)),r.a.createElement(v.a,{className:"track-visibility-container"},function(t){return t.isVisible?r.a.createElement("div",{className:"level"},e.levelArray):r.a.createElement("div",{className:"level-empty"})}))}}]),t}(r.a.Component),E=(a(29),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,this.props.text))}}]),t}(r.a.Component)),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).display={display:"none"},e.isVisible&&(a.display={display:"block"}),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Technologies"},r.a.createElement(E,{text:"Technologies"}),r.a.createElement("div",{className:"techitems-container"},r.a.createElement("div",{className:"tech-items-column"},r.a.createElement(b,{name:"dotnet/c#",level:"9"}),r.a.createElement(b,{name:"python",level:"3"}),r.a.createElement(b,{name:"angular",level:"7"}),r.a.createElement(b,{name:"react",level:"5"}),r.a.createElement(b,{name:"linux",level:"5"}),r.a.createElement(b,{name:"windows",level:"9"}),r.a.createElement(b,{name:"git",level:"7"}),r.a.createElement(b,{name:"html/css",level:"7"})),r.a.createElement("div",{className:"tech-items-column"},r.a.createElement(b,{name:"ms-sqlserver",level:"9"}),r.a.createElement(b,{name:"mongodb",level:"5"}),r.a.createElement(b,{name:"docker",level:"4"}),r.a.createElement(b,{name:"azure",level:"6"}),r.a.createElement(b,{name:"google-cloud",level:"5"}),r.a.createElement(b,{name:"nservicebus",level:"8"}),r.a.createElement(b,{name:"powershell",level:"8"}),r.a.createElement(b,{name:"java",level:"2"}))))}}]),t}(r.a.Component),k=(a(30),a(31),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"customer-container"},r.a.createElement("div",{className:"customer-lead"}),r.a.createElement("div",{className:"customer"},this.props.dateend?r.a.createElement("a",{href:this.props.url},this.props.customer):this.props.customer)),r.a.createElement("div",{className:"date-start-container"},r.a.createElement("span",{className:"calendar-icon"}),r.a.createElement("div",{className:"date-start"},this.props.datestart," "),this.props.dateend&&r.a.createElement("div",{className:"date-end"},r.a.createElement("span",{className:"date-seperator"},"\u2013"),this.props.dateend)),r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{className:"about-lead"}),r.a.createElement("div",{className:"about"},this.props.about)))}}]),t}(r.a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Projects"},r.a.createElement(E,{text:"Projects"}),r.a.createElement(k,{customer:"Confidential",datestart:"01/09/2016",about:"Working with creating a new CRM system for a business in a niche market. "}),r.a.createElement(k,{customer:"The norwegian goverment pension fund (SPK)",datestart:"01/09/2015",dateend:"31/08/2016",about:"Bacon capicola pastrami burgdoggen filet mignon, chuck corned beef. Jerky corned beef buffalo, rump fatback kevin pig chicken ball tip drumstick pancetta. "}),r.a.createElement(k,{customer:"The norwegian goverment (Regjeringen)",datestart:"01/03/2014",dateend:"01/04/2015",about:"Bacon capicola pastrami burgdoggen filet mignon, chuck corned beef. Jerky corned beef buffalo, rump fatback kevin pig chicken ball tip drumstick pancetta. "}),r.a.createElement(k,{customer:"The norwegian parliament (Stortinget)",datestart:"01/08/2012",dateend:"01/03/2014",about:"Bacon capicola pastrami burgdoggen filet mignon, chuck corned beef. Jerky corned beef buffalo, rump fatback kevin pig chicken ball tip drumstick pancetta. "}))}}]),t}(r.a.Component),j=(a(32),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-item"},r.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},this.props.text))}}]),t}(r.a.Component)),O=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getAge",value:function(){return(new Date).getFullYear()-1985}},{key:"render",value:function(){return r.a.createElement("div",{className:"contactinfo"},r.a.createElement(E,{text:"About"}),r.a.createElement("p",null,"I'm ",this.getAge()," years old and live in Oslo with my two sons and girlfriend. After finishing a bachelor's degree in informatics the year 2012, I started working as a consultant for Making Waves. I worked on three projects with them, before I made the switch in 2016 to join ITverket where I am now."),r.a.createElement(j,{text:"Mail",url:"mailto:molnes@gmail.com"}),r.a.createElement(j,{text:"LinkedIn",url:"https://www.linkedin.com/in/henrikmolnes/"}),r.a.createElement(j,{text:"Github",url:"https://github.com/hmol"}),r.a.createElement("div",{className:"resume-container"},r.a.createElement("a",{href:"https://github.com/hmol/Curriculum-Vitae/raw/master/molnes_cv.pdf",className:"resume-link"},r.a.createElement("span",{className:"pdf-icon"}),"Download resume")))}}]),t}(r.a.Component),N=(a(33),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).bottomElement=r.a.createRef(),a.scrollToBottom=function(){a.bottomElement.current.scrollIntoView({behavior:"smooth"})},a.state={displayMusic:!1},a.handleMusicClick=a.handleMusicClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleMusicClick",value:function(){var e=this;this.setState(function(e){return{displayMusic:!e.displayMusic}},function(){e.scrollToBottom()})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"music"},r.a.createElement("div",{className:"music-container"},this.state.displayMusic?r.a.createElement("div",{className:"spotify"},r.a.createElement("p",null,"I also like music. Here are some of my favourites ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\ude0e")),r.a.createElement("iframe",{src:"https://open.spotify.com/embed/user/hmol_/playlist/4o8JeOveTdtRBXFGFmeKxY",width:"300",height:"380",allowtransparency:"true",title:"spotify-iframe",allow:"encrypted-media"})):r.a.createElement(v.a,{className:"track-visibility-container"},function(t){return t.isVisible?r.a.createElement("span",{className:"tone",onClick:e.handleMusicClick}):r.a.createElement("span",{className:"tone-empty"})}),r.a.createElement("div",{ref:this.bottomElement})))}}]),t}(r.a.Component)),w=(a(34),a(35),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(p,null),r.a.createElement(y,null),r.a.createElement(g,null),r.a.createElement(O,null),r.a.createElement(N,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.28d9faaf.chunk.js.map