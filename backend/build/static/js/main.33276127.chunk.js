(this.webpackJsonpsplat=this.webpackJsonpsplat||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),s=n(41),a=n.n(s),i=(n(53),n(29)),r=n(6),l=(n(54),n(3)),u=n(38),d=(n(55),n.p+"static/media/inkee-logo.b7363c11.png"),j=n(0),m=c.a.createContext(),b=function(e){var t=e.children,n=e.socket,c=void 0===n?null:n,s=Object(o.useRef)(null),a=Object(o.useRef)(null),i=Object(o.useState)(!1),l=Object(r.a)(i,2),u=l[0],d=l[1],b=Object(o.useState)({x:0,y:0,color:"black",lineThickness:5}),v=Object(r.a)(b,2),f=v[0],h=v[1],g=function(){if(!c){var e=s.current,t=e.getContext("2d"),n=new Image(e.width,e.height);n.crossOrigin="anonymous",n.onload=function(){t.drawImage(n,0,0,e.width/2,e.height/2)},n.src="https://i.ibb.co/z4Gb7Sw/output-onlinepngtools-1.png"}},O=function(e,t,n,o,s,i,r){a.current.beginPath(),a.current.moveTo(e,t),a.current.lineTo(n,o),a.current.strokeStyle=i,a.current.lineWidth=s,a.current.stroke(),a.current.closePath(),c&&r&&c.emit("drawingEvent",{x0:e,y0:t,x1:n,y1:o,lineThickness:s,color:i})},x=function(e){console.log("clearCanvas");var t=s.current;t.getContext("2d").clearRect(0,0,t.width,t.height),document.getElementById("canvas").changed=!1,c&&e&&c.emit("clearCanvas")};return Object(j.jsx)(m.Provider,{value:{canvasRef:s,prepareCanvas:function(){var e=s.current;e.style.width="100%",e.style.height="100%",e.width=2*e.offsetWidth,e.height=2*e.offsetHeight;var t=e.getContext("2d");t.scale(2,2),t.lineCap="round",t.strokeStyle="black",t.lineWidth=5,a.current=t,g(),document.getElementById("canvas").changed=!1},startDrawing:function(e){var t=e.nativeEvent,n=t.offsetX,o=t.offsetY;c||x(!1),d(!0),document.getElementById("canvas").changed=!0;var s=f;s.x=n,s.y=o,h(s)},inDrawing:function(e){var t=e.nativeEvent;if(u){var n=t.offsetX,o=t.offsetY;O(f.x,f.y,n,o,f.lineThickness,f.color,!0);var c=f;c.x=n,c.y=o,h(c)}},finishDrawing:function(e){var t=e.nativeEvent;if(u){var n=t.offsetX,o=t.offsetY;O(f.x,f.y,n,o,f.lineThickness,f.color,!0),d(!1)}},clearCanvas:x,changeColor:function(e){return function(){var t=f;t.color=e,h(t)}},changeLineWidth:function(e){var t=f;t.lineThickness=e,h(t)},draw:O,undoStroke:function(e){a.current.undo(),e&&c&&c.emit("undo")},redoStroke:function(e){a.current.undo(),e&&c&&c.emit("redo")}},children:t})},v=function(){return Object(o.useContext)(m)};var f=function(e){var t=e.socket,n=void 0===t?null:t,c=v(),s=c.canvasRef,a=c.prepareCanvas,i=c.startDrawing,r=c.finishDrawing,l=c.inDrawing,u=c.draw,d=c.clearCanvas;return Object(o.useEffect)((function(){a()}),[]),Object(o.useEffect)((function(){var e=function(e){u(e.x0,e.y0,e.x1,e.y1,e.lineThickness,e.color,!1)},t=function(){d(!1)};return n&&(n.on("drawingEvent",e),n.on("clearCanvas",t)),function(){n&&(n.off("drawingEvent",e),n.off("clearCanvas",t))}}),[n]),Object(j.jsx)("canvas",{id:"canvas",onMouseDown:i,onMouseUp:r,onMouseMove:l,ref:s})},h=n(83),g=function(){var e=v().clearCanvas;return Object(j.jsx)("button",{className:"btn2",onClick:e,children:"Clear"})};var O=function(e){var t=e.socket,n=e.history,c=new URLSearchParams(window.location.search).get("gameId");null!==c&&sessionStorage.setItem("inviteCode",c),Object(o.useEffect)((function(){var e=function(e){sessionStorage.setItem("inviteCode",e),n.push({pathname:"/game"})},o=function(){sessionStorage.setItem("inviteCode",c),n.push({pathname:"/prestartLobby"})};return t&&(t.on("startGame",e),t.on("inviteCode",o)),function(){t&&(t.off("startGame",e),t.off("inviteCode",o))}}),[t]);var s=function(){var e=document.getElementById("canvas"),t=e.toDataURL("image/png");return!1===e.changed?(console.log("You haven't drawn an avatar! Drawing something nice!"),!1):(sessionStorage.setItem("avatar",t),!0)},a=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c=document.getElementById("username_input");""!==c.value?(sessionStorage.setItem("username",c.value),console.log(c.value),s()&&(o?t.emit("joinRoom",{userData:{uid:sessionStorage.getItem("username"),avatar:sessionStorage.getItem("avatar")},inviteCode:sessionStorage.getItem("inviteCode")}):n.push({pathname:e}))):alert("Username cannot be empty!")};return Object(j.jsx)("div",{className:"root",children:Object(j.jsx)(b,{children:Object(j.jsx)("div",{className:"purpleSplat",children:Object(j.jsxs)("div",{className:"orangeSplat",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("img",{className:"logo",src:d,alt:"inkee-logo"})}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"username",id:"username_input",type:"text",placeholder:"enter username..."})}),Object(j.jsxs)("div",{align:"center",children:[Object(j.jsx)("div",{className:"homeDrawArea",children:Object(j.jsx)(f,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(g,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(h.a,{onClick:function(){a("/joinLobby",sessionStorage.getItem("inviteCode"))},className:"btn",variant:"secondary",size:"lg",children:"join game"})}),Object(j.jsx)("div",{children:!sessionStorage.getItem("inviteCode")&&Object(j.jsx)(h.a,{onClick:function(){a("/createLobby")},className:"btn",variant:"outline-primary",size:"lg",children:"create game"})})]})]})})})})};var x=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("img",{className:"logo",src:d,alt:"inkee-logo"})})};n(57);var p=function(e){var t=e.socket,n=e.history,c=Object(o.useState)(2),s=Object(r.a)(c,2),a=s[0],i=s[1],l=Object(o.useState)(30),u=Object(r.a)(l,2),d=u[0],m=u[1],b=Object(o.useState)(""),v=Object(r.a)(b,2),f=v[0],g=v[1],O=Object(o.useState)(null),x=Object(r.a)(O,2),p=x[0],y=x[1];window.history.replaceState(null,"Inkee Create Lobby","/"),Object(o.useEffect)((function(){return t.on("inviteCode",(function(e){console.log(e),sessionStorage.setItem("inviteCode",e),n.push({pathname:"/prestartLobby"})})),function(){t.off("inviteCode")}}),[t,n]);var w=function(e){e.preventDefault();var n={numRounds:a,roundLength:d,customWords:[],onlyCustomWords:null!==p&&"no"!==p},o=document.getElementById("custom_words").value.split(/[ ,]+/);if("yes"===p){if(!(o.length>10))return void alert("There must be more than 10 custom words!");n.customWords=o}else o.length>0&&(n.customWords=o);var c={uid:sessionStorage.getItem("username"),avatar:sessionStorage.getItem("avatar")};console.log(c.avatar),t.emit("createGame",{gameConfiguration:n,userData:c}),console.log("socket emit invite code")};return Object(j.jsx)("div",{className:"lobbyRoot",children:Object(j.jsxs)("form",{onSubmit:w,className:"form",children:[Object(j.jsxs)("select",{id:"numRounds",name:"numRounds",onChange:function(e){i(e.target.value)},value:a,className:"select",children:[Object(j.jsx)("option",{hidden:!0,children:"choose rounds"}),Object(j.jsx)("option",{value:"1rounds",children:"1"}),Object(j.jsx)("option",{value:"2rounds",children:"2"}),Object(j.jsx)("option",{value:"3rounds",children:"3"}),Object(j.jsx)("option",{value:"4rounds",children:"4"}),Object(j.jsx)("option",{value:"5rounds",children:"5"}),Object(j.jsx)("option",{value:"6rounds",children:"6"}),Object(j.jsx)("option",{value:"7rounds",children:"7"}),Object(j.jsx)("option",{value:"8rounds",children:"8"}),Object(j.jsx)("option",{value:"9rounds",children:"9"}),Object(j.jsx)("option",{value:"10rounds",children:"10"})]}),Object(j.jsxs)("select",{id:"roundLength",name:"roundLength",onChange:function(e){m(e.target.value)},value:d,className:"select",children:[Object(j.jsx)("option",{hidden:!0,children:"drawing time"}),Object(j.jsx)("option",{value:"30seconds",children:"30"}),Object(j.jsx)("option",{value:"40seconds",children:"40"}),Object(j.jsx)("option",{value:"50seconds",children:"50"}),Object(j.jsx)("option",{value:"60seconds",children:"60"}),Object(j.jsx)("option",{value:"70seconds",children:"70"}),Object(j.jsx)("option",{value:"80seconds",children:"80"}),Object(j.jsx)("option",{value:"90seconds",children:"90"}),Object(j.jsx)("option",{value:"120seconds",children:"120"}),Object(j.jsx)("option",{value:"180seconds",children:"180"})]}),Object(j.jsxs)("select",{id:"exclusiveCustomWords",name:"customWords",onChange:function(e){y(e.target.value)},value:p,className:"select",children:[Object(j.jsx)("option",{hidden:!0,children:"use custom words only"}),Object(j.jsx)("option",{value:"yes",children:"yes"}),Object(j.jsx)("option",{value:"no",children:"no"})]}),Object(j.jsx)("div",{className:"wordlist",children:Object(j.jsx)("textarea",{className:"words",id:"custom_words",placeholder:"enter comma-separated custom words...",value:f,onChange:function(e){var t=e.target.value;g(t)}})}),Object(j.jsx)(h.a,{variant:"primary",onClick:w,children:"start game"})]})})};n(58);var y=function(e){var t=e.socket,n=e.history;window.history.replaceState(null,"Inkee Join Lobby","/"),Object(o.useEffect)((function(){var e=function(e){sessionStorage.setItem("inviteCode",e),n.push({pathname:"/game"})},o=function(e){sessionStorage.setItem("inviteCode",e),n.push({pathname:"/prestartLobby"})};return t.on("startGame",e),t.on("inviteCode",o),function(){t.off("startGame",e),t.off("inviteCode",o)}}),[t,n]);var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0,o={userData:{uid:sessionStorage.getItem("username"),avatar:sessionStorage.getItem("avatar")},inviteCode:e};n&&""===e?alert("Game ID text box is empty!"):n&&""!==e?(o.inviteCode=e,t.emit("joinRoom",o)):n||t.emit("joinRandomRoom",o)};return Object(j.jsx)("div",{className:"root",children:Object(j.jsx)("div",{className:"greenSplat",children:Object(j.jsxs)("div",{className:"orangeSplatTwo",children:[Object(j.jsx)(x,{}),Object(j.jsxs)("form",{className:"form-group",children:[Object(j.jsx)("input",{id:"id_input",className:"username",type:"text",placeholder:"enter game ID..."}),Object(j.jsx)("br",{}),Object(j.jsx)(h.a,{variant:"primary",onClick:function(){c(document.getElementById("id_input").value,!0)},children:"join with ID"})]}),Object(j.jsx)(h.a,{variant:"primary",onClick:function(){c(document.getElementById("id_input").value,!1)},children:"join random game"})]})})})},w=n(24),C=(n(59),n(73)),k=n(75),N=n(77),S=n(79),I=n(81),E=n(74),L=n(76),B=n(78),D=n(80),G=n(82);var R=function(e){var t=e.socket,n=e.history,c=Object(o.useState)(""),s=Object(r.a)(c,2),a=s[0],i=s[1],l=Object(o.useState)(window.location.origin),u=Object(r.a)(l,2),d=u[0],m=u[1],b=Object(o.useState)([]),v=Object(r.a)(b,2),f=(v[0],v[1]),g=Object(o.useState)({}),O=Object(r.a)(g,2),x=(O[0],O[1]);return window.history.replaceState(null,"Inkee Prestart Lobby","/".concat(sessionStorage.getItem("inviteCode"))),Object(o.useEffect)((function(){var e=document.querySelector("#copy.copyBtn"),t=function(e){e.preventDefault();var t=document.getElementById("gameLink").value;navigator.clipboard.writeText(t)};return e.addEventListener("click",t),function(){e.removeEventListener("click",t)}}),[]),Object(o.useEffect)((function(){var e=function(e){f((function(t){return[].concat(Object(w.a)(t),[e])}))},n=function(e){f((function(t){return t.filter((function(t){return t.uid!==e}))}))},o=function(e){f(e)};return t.on("getPlayers",o),t.on("newUser",e),t.on("disconnection",n),t.emit("getPlayers"),function(){t.off("getPlayers",o),t.off("newUser",e),t.off("disconnection",n)}}),[t]),Object(o.useEffect)((function(){var e=function(e){x((function(t){var n=e.key,o=e.value;return t[n]=o,t}))},n=function(e){x(e.settings)};return t.on("settingUpdate",e),t.on("loadSettings",n),t.emit("getSettings"),function(){t.off("settingUpdate",e),t.off("loadSettings",n)}}),[t]),Object(o.useEffect)((function(){var e=function(){n.push({pathname:"/game"})};return t.on("startGame",e),function(){t.off("startGame",e)}}),[t,n]),Object(o.useEffect)((function(){i(sessionStorage.getItem("inviteCode")),m(d+"/"+a)}),[n]),Object(j.jsx)("div",{className:"prestartRoot",children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsxs)("p",{className:"gameId",children:["game ID: ",a]}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"linkBox",type:"text",id:"gameLink",value:window.location.origin+"/"+a,readOnly:!0})}),Object(j.jsxs)("div",{className:"shareContainer",children:[Object(j.jsx)("button",{className:"copyBtn",type:"button",id:"copy",children:"Copy Link"}),Object(j.jsxs)("div",{className:"shareBtn",children:[Object(j.jsx)(C.a,{url:d,quote:"Join my Inkee.io game!",children:Object(j.jsx)(E.a,{size:43})}),Object(j.jsx)(k.a,{url:window.location.origin+"/"+a,quote:"Join my Inkee.io game!",children:Object(j.jsx)(L.a,{size:43})}),Object(j.jsx)(N.a,{url:window.location.origin+"/"+a,quote:"Join my Inkee.io game!",children:Object(j.jsx)(B.a,{size:43})}),Object(j.jsx)(S.a,{url:window.location.origin+"/"+a,quote:"Join my Inkee.io game!",children:Object(j.jsx)(D.a,{size:43})}),Object(j.jsx)(I.a,{url:window.location.origin+"/"+a,quote:"Join my Inkee.io game!",children:Object(j.jsx)(G.a,{size:43})})]})]}),Object(j.jsx)(h.a,{onClick:function(){t.emit("startGame")},variant:"primary",children:"ready"})]})})},M=(n(60),function(){var e=v().changeColor;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("blue")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("red")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("green")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("yellow")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("pink")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("orange")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("purple")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("brown")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("black")})]})});function T(e){var t=e.users,n=(void 0===t?[]:t).map((function(e){return Object(j.jsxs)("div",{className:"userProfile",children:[Object(j.jsx)("canvas",{className:"avatar",id:e.uid+"-avatar"}),Object(j.jsxs)("div",{className:"userText",children:[Object(j.jsx)("div",{children:Object(j.jsx)("b",{children:e.uid})}),Object(j.jsxs)("div",{children:["Score: ",e.score]})]})]},e.uid)}));return Object(j.jsx)("div",{className:"profiles",children:n})}var P=function(){var e=v().changeLineWidth;return Object(j.jsx)("div",{children:Object(j.jsx)("input",{id:"typeinp",type:"range",min:"1",max:"15",defaultValue:"5",step:"1",onChange:function(t){var n=parseInt(t.target.value);e(n)}})})};var W=function(e){var t=e.name,n=void 0===t?"":t,o=e.message,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=c.correctGuess,a=void 0!==s&&s,i=c.closeGuess,r=void 0!==i&&i,l=c.guessedMessage,u=void 0!==l&&l,d=document.createElement("p"),j=document.createTextNode("".concat(o)),m=document.getElementById("chat");if(""!==n){var b=document.createElement("span");b.textContent="".concat(n,": "),b.classList.add("fw-bold"),d.append(b)}d.classList.add("p-2","mb-0"),d.append(j),r&&d.classList.add("closeAnswer"),a&&d.classList.add("correctAnswer"),u&&d.classList.add("guessedMessage"),m.appendChild(d),m.scrollTop=m.scrollHeight},U=function(e){var t=e.socket,n=(e.history,Object(o.useState)([])),c=Object(r.a)(n,2),s=c[0],a=c[1],i=Object(o.useState)([]),l=Object(r.a)(i,2),u=l[0],d=l[1];return window.history.replaceState(null,"Inkee","/".concat(sessionStorage.getItem("inviteCode"))),Object(o.useEffect)((function(){var e=function(e){var t=document.getElementById("".concat(e.uid,"-avatar")),n=t.getContext("2d"),o=new Image;o.src=e.avatar,o.onload=function(){n.drawImage(o,0,0,t.width,t.height)}},n=function(t){d(t),function(t){t.map((function(t){e(t)}))}(t)};t.on("getPlayers",n);var o=function(t){d((function(e){return[].concat(Object(w.a)(e),[t])})),console.log(t),e(t)};t.on("newPlayer",o);var c=function(e){d((function(t){return t.filter((function(t){return t.uid!==e}))}))};return t.on("disconnection",c),t.emit("getPlayers"),function(){t.off("getPlayers",n),t.off("newPlayer",o),t.off("disconnection",c)}}),[t]),Object(o.useEffect)((function(){var e=document.querySelector("#sendMessage"),n=function(n){if("Enter"===n.key){n.preventDefault();var o=e.value;e.value="",t.emit("chatMessage",{message:o}),console.log(o)}};e.addEventListener("keypress",n);var o=function(e){console.log(e),a([].concat(Object(w.a)(s),[e])),W({name:e.uid,message:e.message})};t.on("chatMessage",o);var c=function(e){console.log(e),a([].concat(Object(w.a)(s),[e])),W({name:e.uid,message:e.message},{closeGuess:!0})};t.on("closeGuess",c);var i=function(e){console.log(e),a([].concat(Object(w.a)(s),[e])),W({name:e.uid,message:e.message},{correctGuess:!0})};t.on("correctGuess",i);var r=function(e){var t=e/60,n=e%60,o=Math.round(100*n)/100;document.getElementById("timer").innerHTML=" ".concat(t,":").concat(o," ")};t.on("timer",r);var l=function(e){a([].concat(Object(w.a)(s),[e])),W({message:e.message},{correctGuess:!0})};t.on("userCorrectGuess",l);var j=function(e){a([].concat(Object(w.a)(s),[e])),W({name:e.uid,message:e.message},{guessedMessage:!0})};t.on("guessedMessage",j);var m=function(e){var t=e.uid,n=e.score,o=u,c=o.findIndex((function(e){return e.uid===t}));o[c].score=n,d(o)};return t.on("scoreUpdate",m),function(){t.off("correctGuess",i),t.off("closeGuess",c),t.off("chatMessage",o),t.off("guessedMessage",j),t.off("timer",r),t.off("userCorrectGuess",l),t.off("scoreUpdate",m),e.removeEventListener("keypress",n)}}),[t,s]),Object(j.jsx)("div",{className:"gameRoot",children:Object(j.jsx)(b,{socket:t,children:Object(j.jsx)("div",{className:"purpleSplatTwo",children:Object(j.jsx)("div",{className:"limeSplat",children:Object(j.jsxs)("div",{className:"inkeeLogo",children:[Object(j.jsxs)("div",{className:"topContainer",children:[Object(j.jsx)("div",{className:"word",children:"word"}),Object(j.jsx)("div",{className:"time",id:"timer",children:" 3:19 "})]}),Object(j.jsxs)("div",{className:"middleContainer",children:[Object(j.jsx)(T,{users:u}),Object(j.jsx)("div",{className:"drawArea",children:Object(j.jsx)(f,{socket:t})}),Object(j.jsx)("div",{className:"chat",id:"chat"})]}),Object(j.jsxs)("div",{className:"bottomContainer",children:[Object(j.jsx)("div",{className:"sendMessage",children:Object(j.jsx)("input",{type:"text",id:"sendMessage",placeholder:"enter guess..."})}),Object(j.jsx)(g,{}),Object(j.jsx)(P,{}),Object(j.jsx)(M,{})]})]})})})})})},z=n(47);var J=function(){var e=Object(o.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(l.f)();return Object(o.useEffect)((function(){var e;e="localhost"===window.location.hostname?"http://".concat(window.location.hostname,":8080"):"wss://".concat(window.location.hostname,"/");var t=Object(z.a)(e,{transports:["websocket","polling"],upgrade:!0,secure:!0});return t.on("connect_error",(function(){t.io.opts.transports=["polling","websocket"]})),t.on("ERROR",(function(e){console.log(e)})),c(t),function(){t.removeAllListeners(),t.close()}}),[c]),Object(j.jsx)(u.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,render:function(e){return Object(j.jsx)(O,Object(i.a)({socket:n,history:s},e))}}),Object(j.jsx)(l.a,{path:"/createLobby",render:function(e){return Object(j.jsx)(p,Object(i.a)({socket:n,history:s},e))}}),Object(j.jsx)(l.a,{path:"/joinLobby",render:function(e){return Object(j.jsx)(y,Object(i.a)({socket:n,history:s},e))}}),Object(j.jsx)(l.a,{path:"/prestartLobby",render:function(e){return Object(j.jsx)(R,Object(i.a)({socket:n,history:s},e))}}),Object(j.jsx)(l.a,{path:"/game",render:function(e){return Object(j.jsx)(U,Object(i.a)({socket:n,history:s},e))}})]})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root")),_()}},[[72,1,2]]]);
//# sourceMappingURL=main.33276127.chunk.js.map