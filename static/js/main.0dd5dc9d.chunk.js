(this["webpackJsonpgithub-page"]=this["webpackJsonpgithub-page"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),o=n.n(l),c=(n(27),n(7),n(3));var i=function(){var e={color:"white"};return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("a",{className:"link",href:"/github-page/EdwinTorres.pdf",download:!0},r.a.createElement("img",{className:"icon",src:"/github-page/WhiteCV2.png",alt:"github",height:"25",width:"25"})),r.a.createElement("a",{className:"link",href:"https://github.com/edwin-torres",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"icon",src:"/github-page/images/github.png",alt:"github",height:"25",width:"25"}))),r.a.createElement("ul",{className:"nav-links"},r.a.createElement(c.b,{style:e,to:"/home"},r.a.createElement("li",null,"Home")),r.a.createElement(c.b,{style:e,to:"/projects"},r.a.createElement("li",null,"Cool Stuff"))))};var u=function(){var e={color:"blue",fontSize:"2rem",textAlign:"center",listStyle:"none"};return r.a.createElement("div",null,r.a.createElement("h1",null,"Below is my free time"),r.a.createElement("div",null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"Card"},r.a.createElement(c.b,{style:e,to:"/projects/cost"},r.a.createElement("li",null,"Cost Matrix")),r.a.createElement("a",{className:"link-card",href:"https://github.com/edwin-torres/github-page/blob/master/src/Projects/CostMatrix.js",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"btn-card"},r.a.createElement("button",null,"Code")))),r.a.createElement("div",{className:"Card"},r.a.createElement(c.b,{style:e,to:"/projects/genalg"},r.a.createElement("li",null,"Genetic Algorithm")),r.a.createElement("a",{className:"link-card",href:"https://github.com/edwin-torres/github-page/blob/master/src/Projects/GeneticAlgorithm.js",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"btn-card"},r.a.createElement("button",null,"Code")))),r.a.createElement("div",{className:"Card"},r.a.createElement(c.b,{style:e,to:"/projects/chaos"},r.a.createElement("li",null,"Chaos")),r.a.createElement("a",{className:"link-card",href:"https://github.com/edwin-torres/github-page/blob/master/src/Projects/ChaosTriangle.js",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"btn-card"},r.a.createElement("button",null,"Code")))),r.a.createElement("div",{className:"Card"},r.a.createElement(c.b,{style:e,to:"/projects/bubble"},r.a.createElement("li",null,"Bubble Sort")),r.a.createElement("a",{className:"link-card",href:"https://github.com/edwin-torres/github-page/blob/master/src/Projects/Bubble.js",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"btn-card"},r.a.createElement("button",null,"Code")))),r.a.createElement("div",{className:"Card"},r.a.createElement(c.b,{style:e,to:"/projects/breakout"},r.a.createElement("li",null,"Breakout Game")),r.a.createElement("a",{className:"link-card",href:"https://github.com/edwin-torres/github-page/blob/master/src/Projects/BreakoutGame.js",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"btn-card"},r.a.createElement("button",null,"Code")))),r.a.createElement("div",{className:"Card"},r.a.createElement(c.b,{style:e,to:"/projects/gol"},r.a.createElement("li",null,"Game of Life")),r.a.createElement("a",{className:"link-card",href:"https://github.com/edwin-torres/github-page/blob/master/src/Projects/GameOfLife.js",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"btn-card"},r.a.createElement("button",null,"Code")))),r.a.createElement("div",{className:"Card"},r.a.createElement(c.b,{style:e,to:"/projects/pokemon"},r.a.createElement("li",null,"Catch a Pokemon")),r.a.createElement("a",{className:"link-card",href:"https://github.com/edwin-torres/github-page/blob/master/src/Projects/RandomPokemon.js",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"btn-card"},r.a.createElement("button",null,"Code")))),r.a.createElement("div",{className:"Card"},r.a.createElement(c.b,{style:e,to:"/projects/sine"},r.a.createElement("li",null,"Sine Function")),r.a.createElement("a",{className:"link-card",href:"https://github.com/edwin-torres/github-page/blob/master/src/Projects/Sine.js",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"btn-card"},r.a.createElement("button",null,"Code")))))))};var s=function(){var e=Object(a.useRef)(),t=Object(a.useRef)();Object(a.useEffect)((function(){return n(),console.log("Breakout MOUNTED"),function(){cancelAnimationFrame(t.current),console.log("Breakout UNMONUNTED")}}));var n=function(){var n=e.current.getContext("2d"),a={},r=0,l=3,o=e.current.width/2,c=e.current.height-30,i=-2,u=-2;var s=e.current.width/2-42.5;for(var m=[],f=0,h=0,d=0;d<5;d++){m[d]=[];for(var E=0;E<3;E++)m[d][E]={x:0,y:0,status:1}}var v=!1,b=!1;document.addEventListener("keydown",(function(e){"Right"===e.key||"ArrowRight"===e.key?v=!0:"Left"!==e.key&&"ArrowLeft"!==e.key||(b=!0)}),!1),document.addEventListener("keyup",(function(e){"Right"===e.key||"ArrowRight"===e.key?v=!1:"Left"!==e.key&&"ArrowLeft"!==e.key||(b=!1)}),!1),e.current.addEventListener("mousemove",(function(t){var n=t.clientX-e.current.offsetLeft;n>85/4&&n<e.current.width-85/4&&(s=n-42.5)}),!1),function d(){n.clearRect(0,0,e.current.width,e.current.height),n.beginPath(),n.arc(o,c,10,0,2*Math.PI),n.fillStyle="white",n.fill(),n.closePath(),n.beginPath(),n.rect(s,e.current.height-10,85,85),n.fillStyle="white",n.fill(),n.closePath(),n.font="15px Arial",n.fillStyle="white",n.fillText("Score: "+r,8,20),n.font="15px Arial",n.fillStyle="white",n.fillText("Lives: "+l,e.current.width-65,20),function(){for(var e=0;e<5;e++)for(var t=0;t<3;t++)1===m[e][t].status&&(f=85*e+165,h=20*t+55,m[e][t].x=f,m[e][t].y=h,n.beginPath(),n.rect(f,h,75,10),n.fillStyle="white",n.fill())}(),function(){for(var e=0;e<5;e++)for(var t=0;t<3;t++)1===(a=m[e][t]).status&&(o>a.x&&o<a.x+75&&c>a.y&&c<a.y+10&&(u=-u,a.status=0,r++),15===r&&(alert("USER WINS!\nScore: "+r),document.location.reload()))}(),(o+i-10<0||o+i+10>e.current.width)&&(i=-i),c+u-10<0?u=-u:c+u+10>e.current.height&&(o>s&&o<s+85?u*=-1.03:0===--l?(alert("Game Over!"),document.location.reload()):(o=e.current.width/2,c=e.current.height-30,i=-2,u=-2,s=e.current.width/2-42.5)),o+=i,c+=u,!0===v&&(s+=7)+85>e.current.width&&(s=e.current.width-85),!0===b&&(s-=7)<0&&(s=0),t.current=requestAnimationFrame(d)}()};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Breakout")),r.a.createElement("div",{style:{color:"NavajoWhite"}},r.a.createElement("ul",{style:{listStyle:"none",textAlign:"left",fontSize:"1.75rem"}},r.a.createElement("li",null," ","Following this"," ",r.a.createElement("a",{className:"link",href:"https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript",target:"_blank",rel:"noopener noreferrer"}," ","canvas tutorial"),"."))),r.a.createElement("canvas",{style:{size:"100%",border:"10px solid #333030"},ref:e,width:"750",height:"500"}))};var m=function(){Object(a.useEffect)((function(){return function(){clearInterval(n.current)}}));var e=Object(a.useRef)(),t=function(){var t=e.current.getContext("2d");e.current.width=window.innerWidth,e.current.height=.8*window.innerHeight;var a={x:e.current.width/2,y:e.current.height/10},r={x:e.current.width/2-6*e.current.height/10/Math.sqrt(3),y:7*e.current.height/10},l={x:e.current.width/2+6*e.current.height/10/Math.sqrt(3),y:7*e.current.height/10},o=[a,r,l];function c(e,n){t.beginPath(),t.arc(e,n,4,0,2*Math.PI),t.fillStyle="white",t.fill()}t.beginPath(),t.moveTo(a.x,a.y),t.lineTo(r.x,r.y),t.lineTo(l.x,l.y),t.closePath(),t.strokeStyle="#ff5100",t.lineWidth=5,t.stroke(),t.closePath();var i=0,u=[];!function e(t){u.push(t);var n=t[0],a=t[1],r=o[Math.floor(Math.random()*o.length)],l=function(e,t,n,a){return[(e+n)/2,(t+a)/2]}(n,a,r.x,r.y);for(u.push(l);3500!==i;)i++,e(l)}(function(){for(var e=r.y-a.y,t=Math.random()*e,n=a.y+t,o=n-a.y,i=l.x*Math.random();i<a.x-o/Math.sqrt(3)||i>a.x+o/Math.sqrt(3);)i=l.x*Math.random();return c(i,n),[i,n]}());var s=0,m=setInterval((function(){c(u[s][0],u[s][1]),s+=2,console.log("Hello"),s>3500&&clearInterval(m)}),25);n.current=m},n=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Chaos Game"),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:function(){t()}},"Start Chaos"),r.a.createElement("button",{onClick:function(){clearInterval(n.current)}},"Stop"))),r.a.createElement("div",{style:{color:"NavajoWhite"}},r.a.createElement("ul",{style:{listStyle:"none",textAlign:"left",fontSize:"1.75rem"}},r.a.createElement("li",null," I made this after watching ",r.a.createElement("a",{className:"link",href:"https://www.youtube.com/watch?v=IGlGvSXkRGI",target:"_blank",rel:"noopener noreferrer"}," this video"),"."),r.a.createElement("li",null," You can find more information here: ",r.a.createElement("a",{className:"link",href:"https://en.wikipedia.org/wiki/Chaos_game",target:"_blank",rel:"noopener noreferrer"}," Chaos game"),". "))),r.a.createElement("canvas",{style:{size:"100%",border:"10px solid black"},ref:e,width:"1",height:"1"}))},f=n(2);var h=function(){var e=Object(a.useState)((function(){return function(){var e=[];!function(e){for(var t,n=0;n<35;n++){for(t=d(1,6);n>0&&e[n-1]===t;)t=d(1,5);e.push(t)}}(v);for(var t=function(t){var n=v[t],a=0;e.push(Array.from(Array(5),(function(){return a<n?(a++,1):0})))},n=0;n<35;n++)t(n);return e}()})),t=Object(f.a)(e,2),n=t[0],l=t[1];Object(a.useRef)().current=n;var o=Object(a.useRef)(0),c=v,i=Object(a.useRef)(0),u=Object(a.useRef)(0),s=Object(a.useRef)();function m(){console.log(v);var e=33,t=-1,n=setInterval((function(){var a,r;i.current=i.current%35,t++,E(c)||(a=c[i.current],r=c[i.current+1],a>r&&(!function(e,t,n){var a=e[t];e[t]=e[n],e[n]=a}(c,i.current,i.current+1),l(function(e){for(var t=[],n=function(n){var a=e[n],r=0;t.push(Array.from(Array(5),(function(){return r<a?(r++,1):0})))},a=0;a<35;a++)n(a);return t}(c)))),t<e?i.current++:(t=-1,e--,i.current=0),E(c)&&clearInterval(n),o.current++,u.current++,1225===u.current&&clearInterval(n)}),25);s.current=n}return Object(a.useEffect)((function(){return console.log("BUBBLE MONUNTED"),function(){console.log("RN at UNMOUNT",v),v=[],clearInterval(s.current),console.log("BUBBLE UNMONUNTED")}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Bubble Sort")),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:function(){m()}},"Sort!"),r.a.createElement("button",{onClick:function(){clearInterval(s.current),window.location.reload()}},"Refresh")),r.a.createElement("div",{className:"gol-grid-container"},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(5,",20px)")}},n.map((function(e,t){return e.map((function(e,a){return r.a.createElement("div",{key:t-a,style:{width:20,height:20,backgroundColor:n[t][a]?"#7FFFD4":void 0,border:"solid 1px sienna"}})}))})))),r.a.createElement("div",{style:{color:"NavajoWhite"}},r.a.createElement("ul",{style:{listStyle:"none",textAlign:"left",fontSize:"1.75rem"}},r.a.createElement("li",null," ","This is a visualization of the"," ",r.a.createElement("a",{className:"link",href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank",rel:"noopener noreferrer"},"Bubble Sort")," ","algorithm."," "),r.a.createElement("li",null," With luck, you'll be able to see some bubbles go up. "))))};function d(e,t){return Math.floor(Math.random()*(t-e)+e)}function E(e){for(var t=0;t<e.length-1;t++)if(e[t]>e[t+1])return!1;return!0}var v=[];var b=n(15),g=[[0,-1],[0,1],[-1,0],[1,0],[1,1],[-1,-1],[-1,1],[1,-1]];var p=function(){var e=Object(a.useState)((function(){return y()})),t=Object(f.a)(e,2),n=t[0],l=t[1],o=Object(a.useRef)();function c(e,t){var n=function(e,t,n){return Object(b.a)(e,(function(e){e[t][n]=e[t][n]?0:1}))}(o.current,e,t);l(n)}function i(){var e=function(e){return Object(b.a)(e,(function(t){for(var n=function(n){for(var a=function(a){var r=0;g.forEach((function(t){var l=Object(f.a)(t,2),o=l[0],c=l[1],i=n+o,u=a+c;i>=0&&u>=0&&i<10&&u<15&&(r+=e[i][u])})),r<2||r>3?t[n][a]=0:0===e[n][a]&&3===r&&(t[n][a]=1)},r=0;r<15;r++)a(r)},a=0;a<10;a++)n(a)}))}(o.current);l(e)}o.current=n;var u=Object(a.useRef)();return Object(a.useEffect)((function(){var e=setInterval((function(){i()}),750);u.current=e}),[]),Object(a.useEffect)((function(){return function(){clearInterval(u.current)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Conway's Game of Life"),r.a.createElement("div",{style:{color:"NavajoWhite"}},r.a.createElement("ul",{style:{listStyle:"none",textAlign:"left",fontSize:"1.75rem"}},r.a.createElement("li",{style:{color:"#ff5100"}},"Rules: "),r.a.createElement("li",null,"Any live cell with two or three live neighbors survives."),r.a.createElement("li",null,"Any dead cell with three live neighbors becomes a live cell."),r.a.createElement("li",null,"All other live cells die in the next generation. Similarly, all other dead cells stay dead.")))),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:function(){l(y())}},"Restart")),r.a.createElement("div",{className:"gol-grid-container"},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(15,",60px)")}},n.map((function(e,t){return e.map((function(e,a){return r.a.createElement("div",{key:t-a,style:{width:60,height:60,backgroundColor:n[t][a]?"#7FFFD4":void 0,border:"solid 1px sienna"},onClick:function(e){c(t,a)}})}))})))),r.a.createElement("div",{style:{color:"NavajoWhite"}},r.a.createElement("ul",{style:{listStyle:"none",textAlign:"left",fontSize:"1.75rem"}},r.a.createElement("li",null," You can find more info   ",r.a.createElement("a",{className:"link",href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank",rel:"noopener noreferrer"},"here"),". "),r.a.createElement("li",null," I used ",r.a.createElement("a",{className:"link",href:"https://www.youtube.com/watch?v=DvVt11mPuM0",target:"_blank",rel:"noopener noreferrer"}," this tutorial"),"  by Ben Awad."))))};function y(){for(var e=[],t=0;t<10;t++)e.push(Array.from(Array(15),(function(){return Math.random()<.5?0:1})));return e}var w=n(11),k=n.n(w),j=n(16);var N=function(e){var t=e.pokemon;return r.a.createElement("div",{className:"Pokemon__Card"},r.a.createElement("div",{className:" Pokemon__name"},t.name),r.a.createElement("div",{className:"Pokemon__img"},r.a.createElement("img",{src:t.sprites.front_default,alt:""})),r.a.createElement("div",{className:"Pokemon__types"},t.types.map((function(e,t){return r.a.createElement("div",{className:"Pokemon__type",key:t},e.type.name)}))),r.a.createElement("div",{className:"Pokemon__info"},r.a.createElement("div",{className:"Pokemon__data  "},r.a.createElement("div",{className:"Pokemon__detail"},r.a.createElement("p",{className:"title"},"Weight: "),r.a.createElement("p",{className:"stat"},t.weight)),r.a.createElement("div",{className:"Pokemon__detail"},r.a.createElement("p",{className:"title"},"Height: "),r.a.createElement("p",{className:"stat"},t.height))),r.a.createElement("div",{className:"Pokemon__data"},r.a.createElement("div",{className:"Pokemon__detail "},r.a.createElement("p",{className:"title"},"Abilities: "),t.abilities.map((function(e,t){return r.a.createElement("p",{className:"stat",key:t},e.ability.name)}))))))};var x=function(){var e=Object(a.useState)(!0),t=Object(f.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),c=Object(f.a)(o,2),i=c[0],u=c[1],s=Object(a.useState)((function(){return Math.floor(700*Math.random()+1)})),m=Object(f.a)(s,2),h=m[0],d=m[1];function E(e){return v.apply(this,arguments)}function v(){return(v=Object(j.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){return e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("https://pokeapi.co/api/v2/pokemon/".concat(h));case 2:t=e.sent,u((function(){return t})),l(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log("Pokemon Mounted"),function(){e.apply(this,arguments)}(),function(){console.log("Pokemon UNMONUNTED")}}),[h]),r.a.createElement("div",null,n?r.a.createElement("h1",null,"Loading...."):r.a.createElement("div",null,r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:function(){var e=Math.floor(700*Math.random()+1);d(e)}}," ","Catch another!"," ")),r.a.createElement("div",{className:"grid-container"},r.a.createElement(N,{pokemon:i}))))},O=[],S=[],C=[],M=[],A="",_=0,P=0;var R=function(){var e=Object(a.useState)(0),t=Object(f.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),c=Object(f.a)(o,2),i=c[0],u=c[1],s=Object(a.useState)(""),m=Object(f.a)(s,2),h=m[0],d=m[1],E=Object(a.useState)(""),v=Object(f.a)(E,2),b=v[0],g=v[1],p=Object(a.useState)("visible"),y=Object(f.a)(p,2),w=y[0],k=y[1],j=Object(a.useState)("flex"),N=Object(f.a)(j,2),x=N[0],R=N[1],I=Object(a.useRef)();return Object(a.useEffect)((function(){return console.log("Genetic Algorithm MOUNTED"),function(){clearInterval(I.current),window.location.reload()}}),[]),r.a.createElement("div",{style:{textAlign:"center",color:"NavajoWhite"}},r.a.createElement("h1",null,"Genetic Algorithm "),r.a.createElement("p",{style:{fontSize:"1.2rem"}},"Enter a short phrase.",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(e){g(e.target.value),e.preventDefault()},name:"Hola",type:"text",value:b,style:{visibility:"".concat(w)}})),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{className:"btn",onClick:function(){d("Working on it....."),function(e){_=(A=e).length<10?250:A.length<15?550:A.length<25?1e3:A.length<35?2500:5e3;for(var t=[],n=0;n<_;n++)t=G(A.length),O.push(t);C=B(O,A),S=U(O,C);for(var a=z(C),r="",o=0,c=0;1!==a[0];){r=O[a[1]].join(""),M.push(r),O=[];for(var i=0;i<_;i++)o=Math.floor(Math.random()*S.length),c=Math.floor(Math.random()*S.length),O.push(F(S,o,c));C=B(O,A),S=U(O,C),a=z(C)}r=O[a[1]].join(""),M.push(r);var s=0;s=M.length<100?200:M.length<500?100:M.length<1e3?25:M.length<5e3?10:M.length<25e3?5:1;var m=setInterval((function(){u(M[P]),l(P),M[P]===A&&(d("Finished! Refresh the page to try again."),clearInterval(m)),P++}),s);I.current=m}(b),k("hidden"),R("none")},style:{display:"".concat(x)}},"Submit"," "),r.a.createElement("button",{className:"btn",onClick:function(){window.location.reload()}},"Refresh"," ")),r.a.createElement("p",{style:{textAlign:"center",color:"#ffffff",fontSize:"1.7rem"}}," ",h),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"Your phrase is:"," ",r.a.createElement("p",{style:{textAlign:"center",color:"#00bfff"}}," ",A)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{best:i,genNum:n}),M.map((function(e,t){return r.a.createElement("p",{key:t,style:{textAlign:"left",color:"NavajoWhite",fontSize:"1.2rem"}}," ","Fittest member from generation #",t+1,":"," ",r.a.createElement("span",{style:{color:"#00ff80",fontSize:"1.2rem"}}," ",e," ")," ")})))};function T(e){return r.a.createElement("div",null,r.a.createElement("h2",null," ","Phrase Evolving:"," ",r.a.createElement("p",{style:{textAlign:"center",color:"#00ff80"}},e.best," ")," "),r.a.createElement("h2",null," ","Number of Generations:"," ",r.a.createElement("p",{style:{textAlign:"center",color:"#00ff80"}},e.genNum+1," ")," "))}function F(e,t,n){var a=e[t],r=e[n];a===r&&(L(a),L(r));for(var l=[],o=Math.floor(Math.random()*a.length),c=0;c<a.length;c++)c<o?l.push(a[c]):l.push(r[c]);return Math.random()<.01?L(l):l}function I(e,t){for(var n=0,a=0;a<e.length;a++)e[a]===t[a]&&n++;return n/e.length}function B(e,t){for(var n=t.split(""),a=[],r=0,l=0;l<e.length;l++)r=I(e[l],n),a.push(r);return a}function U(e,t){for(var n=[],a=0,r=0;r<e.length;r++){a=Math.floor(100*t[r]);for(var l=0;l<a;l++)n.push(e[r])}return n}function W(){var e=90*Math.random()+32,t=Math.floor(e);return String.fromCharCode(t)}function G(e){for(var t=e,n=[],a="",r=0;r<t;r++)a=W(),n.push(a);return n}function L(e){return e[Math.floor(Math.random()*e.length)]=W(),W}function z(e){for(var t=0,n=0,a=0;a<e.length;a++)e[a]>=t&&(t=e[a],n=a);return[t,n]}var D=n(21),q={y:window.innerHeight/3.5,period:.01,amplitude:-175,shift:.001};var H=function(){var e=Object(a.useRef)(),t=Object(a.useRef)();Object(a.useEffect)((function(){return l(),console.log("Sine MOUNTED"),function(){cancelAnimationFrame(e.current),q.y=window.innerHeight/3.5,q.period=.01,q.amplitude=-175,t.current.destroy(),console.log("Sine UNMONUNTED")}}));var n=Object(a.useRef)(),l=function(){var a=new D.a,r=a.addFolder("WaveControls");r.add(q,"y",0,window.innerHeight),r.add(q,"period",-.01,.01),r.add(q,"amplitude",-300,300),r.open(),t.current=a;var l=n.current.getContext("2d");n.current.width=window.innerWidth,n.current.height=.75*window.innerHeight,function t(){e.current=requestAnimationFrame(t),l.fillStyle="rgba(0,0,0,0.1)",l.fillRect(0,0,n.current.width,n.current.height),l.beginPath(),l.moveTo(0,n.current.height/2);for(var a=0;a<n.current.width;a++)l.lineTo(a,q.y+q.amplitude*Math.sin(q.period*a+q.shift));l.strokeStyle="hsl(200,50%,100%)",l.stroke(),q.shift+=.01}()};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Sine Function"),r.a.createElement("div",{style:{color:"NavajoWhite"}},r.a.createElement("ul",{style:{listStyle:"none",textAlign:"left",fontSize:"1.75rem"}},r.a.createElement("li",null," Use the sliders to manipulate the function. ")))),r.a.createElement("canvas",{style:{size:"100%",border:"10px solid black"},ref:n}))},J=[],V=[],Y=[],X=[],$=[],K=[];var Q=function(){var e=Object(a.useState)((function(){return Z()})),t=Object(f.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)((function(){return ee()})),c=Object(f.a)(o,2),i=c[0],u=c[1];return Object(a.useEffect)((function(){return console.log("Cost Mounted"),function(){console.log("Cost Unmounted")}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Cost Matrix")),r.a.createElement("div",{style:{color:"NavajoWhite"}},r.a.createElement("ul",{style:{listStyle:"none",textAlign:"left",fontSize:"1.55rem"}},r.a.createElement("li",null," ","The first position is [0][0]. Movement is restricted to Right or Down."," ",r.a.createElement("span",{role:"img","aria-label":"right-arrow"},"\u27a1\ufe0f")," ",r.a.createElement("span",{role:"img","aria-label":"right-arrow"},"\u2b07\ufe0f")," "),r.a.createElement("li",null,r.a.createElement("strong",null,r.a.createElement("em",null,"Price")," ")," ","represents the cost for stepping on a square. For instance, it costs"," ",n[1][3]," to step on [1][3]."),r.a.createElement("br",null),r.a.createElement("li",null," ",r.a.createElement("strong",null,"Total")," represents the total cost to arrive at a square by following the ",r.a.createElement("em",null,"most expensive "),"possible path."),r.a.createElement("li",null,"Ex: "),r.a.createElement("li",null,"Total to arrive at [0][1] is ",Y[0][1]," = ",n[0][0]," +"," ",n[0][1],"."," "),r.a.createElement("li",null,"Total to arrive at [1][1] is ",Y[1][1]," = ",n[0][0]," +"," ",te(n[0][1],n[1][0])," + ",n[1][1],"."," "),r.a.createElement("li",{style:{textAlign:"center"}}," ","Click on a squre to get its path."," "))),r.a.createElement("div",{className:"gol-grid-container"},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(8,",85px)")}},n.map((function(e,t){return e.map((function(e,a){return r.a.createElement("div",{key:t-a,style:{width:85,height:85,backgroundColor:i[t][a],border:"solid 1px sienna",color:"Black"},onClick:function(e){!function(e,t){(K=[]).push([e,t]);for(var n=e+t,a=0;a<n;a++)K.push([X[e][t][0],X[e][t][1]]),e=K[a+1][0],t=K[a+1][1]}(t,a),u((function(){return ee()}))}},"[",t,"] [",a,"]",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("em",null,"Price:")," "),n[t][a],r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,"Total: ",Y[t][a]))}))})))),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:function(){l(Z()),window.location.reload()}},"Change Values")))};function Z(){V=[],J=[];for(var e=0;e<5;e++)V.push(Array.from(Array(8),(function(){return Math.floor(25*Math.random())+1})));for(var t=0;t<5;t++)for(var n=0;n<8;n++)J.push(V[t][n]);return function(e){Y=[];for(var t=0;t<5;t++)Y.push(Array.from(Array(8),(function(){return 0})));for(var n=0;n<5;n++)for(var a=0;a<8;a++)n>0&&a>0?Y[n][a]=te(Y[n][a-1],Y[n-1][a])+e[n][a]:n>0?Y[n][a]=Y[n-1][a]+e[n][a]:a>0?Y[n][a]=Y[n][a-1]+e[n][a]:0===n&&0===a&&(Y[n][a]=e[n][a]);!function(e){X=[];for(var t=0;t<5;t++)X.push(Array.from(Array(8),(function(){return[0,0]})));for(var n=0;n<5;n++)for(var a=0;a<8;a++)n>0&&a>0?e[n-1][a]<e[n][a-1]?X[n][a]=[n,a-1]:X[n][a]=[n-1,a]:n>0?X[n][a]=[n-1,a]:a>0?X[n][a]=[n,a-1]:0===n&&0===a&&(X[n][a]=[0,0])}(Y)}(V),V}function ee(){$=[];for(var e=0;e<5;e++)$.push(Array.from(Array(8),(function(){return"#E0FFFF"})));return null!==K&&K.forEach((function(e){$[e[0]][e[1]]="#008080"})),$}function te(e,t){return e>t?e:t}var ne=n(1);var ae=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{marginTop:"1.5%"}},r.a.createElement("img",{src:"/github-page/images/Edwin.jpg",className:"responsive",alt:"me"}),r.a.createElement("p",null,"My name is Edwin.  I'm learning how to code. "),r.a.createElement("p",null,"I also teach math at Laredo College. ")))},re=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(ne.d,null,r.a.createElement(ne.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(ne.b,{path:"/home",exact:!0,component:ae}),r.a.createElement(ne.b,{path:"/projects",exact:!0,component:u}),r.a.createElement(ne.b,{path:"/projects/breakout",exact:!0,component:s}),r.a.createElement(ne.b,{path:"/projects/chaos",exact:!0,component:m}),r.a.createElement(ne.b,{path:"/projects/bubble",exact:!0,component:h}),r.a.createElement(ne.b,{path:"/projects/gol",exact:!0,component:p}),r.a.createElement(ne.b,{path:"/projects/pokemon",exact:!0,component:x}),r.a.createElement(ne.b,{path:"/projects/genalg",exact:!0,component:R}),r.a.createElement(ne.b,{path:"/projects/sine",exact:!0,component:H}),r.a.createElement(ne.b,{path:"/projects/cost",exact:!0,component:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.0dd5dc9d.chunk.js.map