(this.webpackJsonpgol=this.webpackJsonpgol||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),c=n.n(r),i=(n(10),n(2)),l=n(1),u=(n(11),n(12),[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]]);var s=function(){var e=Object(o.useState)((function(){for(var e=[],t=0;t<25;t++)e.push(Array.from(Array(25),(function(){return 0})));return e})),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(!1),s=Object(i.a)(c,2),d=s[0],p=s[1],f=Object(o.useRef)(d);f.current=d;for(var m=Object(o.useCallback)((function(){f.current&&(r((function(e){return Object(l.a)(e,(function(t){for(var n=function(n){for(var o=function(o){var a=0;u.forEach((function(t){var r=Object(i.a)(t,2),c=r[0],l=r[1],u=n+c,s=o+l;u>=0&&u<25&&s>=0&&s<25&&(a+=e[u][s])})),a<2||a>3?t[n][o]=0:0===e[n][o]&&3===a&&(t[n][o]=1)},a=0;a<25;a++)o(a)},o=0;o<25;o++)n(o)}))})),setTimeout(m,100))}),[]),g=[];g.length<10;){var h=Math.floor(10*Math.random())+1;-1===g.indexOf(h)&&g.push(h)}return console.log(g),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{backgroundColor:"black",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",color:"white",textAlign:"center"}},a.a.createElement("h1",{style:{width:"100%"}},"Game of Life"),a.a.createElement("p",{style:{width:"100%",padding:"0px",margin:"0px 0px 20px 0px"}},"Select a grouping of cells then click START.",a.a.createElement("br",null),"Once it stops, click on nearby cells to watch it keep growing,",a.a.createElement("br",null)," or click STOP to start over.",a.a.createElement("br",null),a.a.createElement("a",{style:{textDecoration:"none",color:"yellow"},href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Click here for full description and rules.")),a.a.createElement("div",{style:{padding:"0px 0px 20px 0px"}},a.a.createElement("button",{onClick:function(){p(!d),d||(f.current=!0,m())}},d?"STOP":"START"))),a.a.createElement("div",{style:{backgroundColor:"black",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",color:"white",textAlign:"center"}},a.a.createElement("div",{style:{padding:"0px 0px 20px 0px"}},a.a.createElement("button",{onClick:function(){var e=Object(l.a)(n,(function(e){e[g[0]][g[0]]="purple"}));r(e)}},"Random"))),a.a.createElement("div",{id:"grid container",style:{width:"100%",height:"auto"}},a.a.createElement("div",{className:"App",style:{display:"grid",gridTemplateColumns:"repeat(".concat(25,", 20px)"),backgroundColor:"black",paddingBottom:"100px"}},n.map((function(e,t){return e.map((function(e,o){return a.a.createElement("div",{key:"".concat(t,"-").concat(o),onClick:function(){var e=Object(l.a)(n,(function(e){e[t][o]=n[t][o]?0:1}));r(e)},style:{width:20,height:20,backgroundColor:n[t][o]?"purple":void 0,border:"1px solid grey"}})}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.9dfedcb7.chunk.js.map