(this.webpackJsonpsplat=this.webpackJsonpsplat||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},72:function(e,t){},74:function(e,t){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(53),s=n.n(a),r=(n(66),n(28)),i=n(4),l=(n(67),n(3)),u=n(44),d=(n(68),n.p+"static/media/inkee-logo.b7363c11.png"),j=n(0),b=o.a.createContext(),f=function(e){var t=e.children,n=e.socket,o=void 0===n?null:n,a=Object(c.useState)(!1),s=Object(i.a)(a,2),r=s[0],l=s[1],u=Object(c.useRef)(null),d=Object(c.useRef)(null),f=Object(c.useState)(!0),h=Object(i.a)(f,2),m=h[0],v=h[1];return Object(j.jsx)(b.Provider,{value:{canvasRef:u,contextRef:d,prepareCanvas:function(){var e=u.current;e.style.width="100%",e.style.height="100%",e.width=2*e.offsetWidth,e.height=2*e.offsetHeight;var t=e.getContext("2d");t.scale(2,2),t.lineCap="round",t.strokeStyle="black",t.lineWidth=5,d.current=t},startDrawing:function(e){var t=e.nativeEvent,n=t.offsetX,c=t.offsetY;d.current.beginPath(),d.current.moveTo(n,c),l(!0),v(!1),o&&o.emit("startDrawing",{x:n,y:c})},finishDrawing:function(){d.current.closePath(),l(!1),o&&o.emit("finishDrawing")},clearCanvas:function(){var e=u.current,t=e.getContext("2d");t.fillStyle="white",t.fillRect(0,0,e.width,e.height),v(!0),o&&o.emit("clearCanvas")},changeColor:function(e){return function(){u.current.getContext("2d").strokeStyle=e}},changeLineWidth:function(e){u.current.getContext("2d").lineWidth=e},exportImage:function(){var e=u.current,t=(e.getContext("2d"),e.toDataURL("image/png"));if(m)throw"Canvas is empty!";console.log(t)},startDrawingSocket:function(e){d.current.beginPath(),d.current.moveTo(e.x,e.y),l(!0),v(!1)},finishDrawingSocket:function(){d.current.closePath(),l(!1)},drawSocket:function(e){var t=u.current.getContext("2d");t.lineWidth=e.thickness,t.strokeStyle=e.color,d.current.lineTo(e.x,e.y),d.current.stroke()},clearCanvasSocket:function(){var e=u.current,t=e.getContext("2d");t.fillStyle="white",t.fillRect(0,0,e.width,e.height),v(!0)},draw:function(e){var t=e.nativeEvent;if(r){console.log("drawing");var n=t.offsetX,c=t.offsetY;d.current.lineTo(n,c);var a=u.current.getContext("2d");d.current.stroke(),o&&o.emit("drawingEvent",{x:n,y:c,thickness:a.lineWidth,color:a.strokeStyle})}}},children:t})},h=function(){return Object(c.useContext)(b)};var m=function(e){var t=e.socket,n=void 0===t?null:t,o=h(),a=o.canvasRef,s=o.prepareCanvas,r=o.startDrawing,i=o.finishDrawing,l=o.draw,u=o.startDrawingSocket,d=o.finishDrawingSocket,b=o.drawSocket,f=o.clearCanvasSocket;return Object(c.useEffect)((function(){s()}),[]),Object(c.useEffect)((function(){return n&&(n.on("drawingEvent",b),n.on("clearCanvas",f),n.on("startDrawing",u),n.on("finishDrawing",d)),function(){n&&(n.off("drawingEvent",b),n.off("clearCanvas",f),n.off("startDrawing",u),n.off("finishDrawing",d))}}),[n]),Object(j.jsx)("canvas",{onMouseDown:r,onMouseUp:i,onMouseMove:l,ref:a})},v=n(95),O=function(){var e=h().clearCanvas;return Object(j.jsx)("button",{className:"btn2",onClick:e,children:"Clear"})};var g=function(e){var t=e.socket,n=e.history,o=(Object(c.useRef)(),Object(c.useState)(!0)),a=Object(i.a)(o,2),s=(a[0],a[1],new URLSearchParams(window.location.search).get("gameId"));null!==s&&localStorage.setItem("inviteCode",s);var r=function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=document.getElementById("username_input");""!==o.value?(localStorage.setItem("username",o.value),console.log(o.value),c?(t.on("startGame",(function(e){localStorage.setItem("inviteCode",e),n.push({pathname:"/game"})})),t.on("inviteCode",(function(){localStorage.setItem("inviteCode",c),n.push({pathname:"/prestartLobby"})})),t.emit("joinRoom",{userData:{uid:localStorage.getItem("username"),avatar:"tempAvatar"},inviteCode:localStorage.getItem("inviteCode")})):n.push({pathname:e})):alert("Username cannot be empty!")};return Object(j.jsx)("div",{className:"root",children:Object(j.jsx)(f,{children:Object(j.jsx)("div",{className:"purpleSplat",children:Object(j.jsxs)("div",{className:"orangeSplat",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("img",{className:"logo",src:d,alt:"inkee-logo"})}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"username",id:"username_input",type:"text",placeholder:"enter username..."})}),Object(j.jsxs)("div",{align:"center",children:[Object(j.jsx)("div",{className:"homeDrawArea",children:Object(j.jsx)(m,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{onClick:function(){r("/joinLobby",localStorage.getItem("inviteCode"))},className:"btn",variant:"secondary",size:"lg",children:"join game"})}),Object(j.jsx)("div",{children:!localStorage.getItem("inviteCode")&&Object(j.jsx)(v.a,{onClick:function(){r("/createLobby")},className:"btn",variant:"outline-primary",size:"lg",children:"create game"})})]})]})})})})};var x=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("img",{className:"logo",src:d,alt:"inkee-logo"})})},p=n(54);n(83);var C=function(e){var t=e.socket,n=e.history,o=Object(c.useState)(2),a=Object(i.a)(o,2),s=a[0],r=a[1],l=Object(c.useState)(30),u=Object(i.a)(l,2),d=u[0],b=u[1],f=Object(c.useState)(""),h=Object(i.a)(f,2),m=h[0],O=h[1],g=Object(c.useState)(null),x=Object(i.a)(g,2),C=x[0],y=x[1];Object(c.useEffect)((function(){return t.on("inviteCode",(function(e){console.log(e),localStorage.setItem("inviteCode",e),n.push({pathname:"/prestartLobby"})})),function(){t.off("inviteCode")}}),[t,n]);var w=function(e){e.preventDefault();var n=function(e,t){console.log("Parse Custom Words");var n=[];if(e.length>0){for(var c=e.split(/\r\n|\r|\n/),o=0;o<c.length;o++)for(var a=c[o].split(/[ ,]+/).filter(Boolean),s=0;s<a.length;s++){var r=a[s].toLowerCase();n.includes(r)||n.push(r)}console.log("textAreaContent Created")}if(null!=t){for(var i=0;i<t.length;i++){var l=t[i];l=l.toLowerCase(),n.includes(l)||n.push(l)}console.log("csvContent Created")}return n.length<10&&n.length>0&&alert("Entered less than 10 custom words"),n}(m,C),c={num_rounds:s,round_length:d,custom_words:[]};n.length>0&&(c.custom_words=n);var o={uid:localStorage.getItem("username"),avatar:"tempAvatar"};t.emit("createGame",{gameConfiguration:c,userData:o}),console.log("socket emit invite code")};return Object(j.jsx)("div",{className:"lobbyRoot",children:Object(j.jsxs)("form",{onSubmit:w,className:"form",children:[Object(j.jsxs)("select",{id:"numRounds",name:"numRounds",onChange:function(e){r(e.target.value)},value:s,className:"select",children:[Object(j.jsx)("option",{hidden:!0,children:"choose rounds"}),Object(j.jsx)("option",{value:"1rounds",children:"1"}),Object(j.jsx)("option",{value:"2rounds",children:"2"}),Object(j.jsx)("option",{value:"3rounds",children:"3"}),Object(j.jsx)("option",{value:"4rounds",children:"4"}),Object(j.jsx)("option",{value:"5rounds",children:"5"}),Object(j.jsx)("option",{value:"6rounds",children:"6"}),Object(j.jsx)("option",{value:"7rounds",children:"7"}),Object(j.jsx)("option",{value:"8rounds",children:"8"}),Object(j.jsx)("option",{value:"9rounds",children:"9"}),Object(j.jsx)("option",{value:"10rounds",children:"10"})]}),Object(j.jsxs)("select",{id:"roundLength",name:"roundLength",onChange:function(e){b(e.target.value)},value:d,className:"select",children:[Object(j.jsx)("option",{hidden:!0,children:"drawing time"}),Object(j.jsx)("option",{value:"30seconds",children:"30"}),Object(j.jsx)("option",{value:"40seconds",children:"40"}),Object(j.jsx)("option",{value:"50seconds",children:"50"}),Object(j.jsx)("option",{value:"60seconds",children:"60"}),Object(j.jsx)("option",{value:"70seconds",children:"70"}),Object(j.jsx)("option",{value:"80seconds",children:"80"}),Object(j.jsx)("option",{value:"90seconds",children:"90"}),Object(j.jsx)("option",{value:"120seconds",children:"120"}),Object(j.jsx)("option",{value:"180seconds",children:"180"})]}),Object(j.jsxs)("div",{className:"wordlist",children:[Object(j.jsx)("label",{children:"Custom Words:"}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{placeholder:"Enter Custom Words...",value:m,onChange:function(e){var t=e.target.value;O(t)}}),Object(j.jsxs)("div",{className:"csvReader",children:[Object(j.jsx)("h5",{children:"Or Upload a CSV File"}),Object(j.jsx)(p.a,{onDrop:function(e){for(var t=[],n=0;n<e.length;n++){var c=e[n].data;t.includes(c[0])||t.push(c[0])}y(t)},onError:function(e,t,n,c){console.log(e)},addRemoveButton:!0,onRemoveFile:function(e){y(null)},children:Object(j.jsx)("span",{children:"Drop CSV file here or click to upload."})})]})]}),Object(j.jsx)(v.a,{variant:"primary",onClick:w,children:"start game"})]})})};n(84);var y=function(e){var t=e.socket,n=e.history;Object(c.useEffect)((function(){t.on("startGame",(function(e){localStorage.setItem("inviteCode",e),n.push({pathname:"/game"})})),t.on("inviteCode",(function(e){localStorage.setItem("inviteCode",e),n.push({pathname:"/prestartLobby"})}))}),[t,n]);var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0,c={userData:{uid:localStorage.getItem("username"),avatar:"tempAvatar"},inviteCode:e};n&&""===e?alert("Game ID text box is empty!"):n&&""!==e?(c.inviteCode=e,t.emit("joinRoom",c)):n||t.emit("joinRandomRoom",c)};return Object(j.jsx)("div",{className:"root",children:Object(j.jsx)("div",{className:"greenSplat",children:Object(j.jsxs)("div",{className:"orangeSplatTwo",children:[Object(j.jsx)(x,{}),Object(j.jsxs)("form",{className:"form-group",children:[Object(j.jsx)("input",{id:"id_input",className:"username",type:"text",placeholder:"enter game ID..."}),Object(j.jsx)("br",{}),Object(j.jsx)(v.a,{variant:"primary",onClick:function(){o(document.getElementById("id_input").value,!0)},children:"join with ID"})]}),Object(j.jsx)(v.a,{variant:"primary",onClick:function(){o(document.getElementById("id_input").value,!1)},children:"join random game"})]})})})},w=n(23);n(85);var k=function(e){var t=e.socket,n=e.history,o=Object(c.useState)(""),a=Object(i.a)(o,2),s=a[0],r=a[1],l=Object(c.useState)([]),u=Object(i.a)(l,2),d=(u[0],u[1]),b=Object(c.useState)({}),f=Object(i.a)(b,2),h=(f[0],f[1]);return Object(c.useEffect)((function(){var e=document.querySelector("#copy.copyBtn"),t=function(e){e.preventDefault(),document.querySelector("#gameLink").select(),document.execCommand("copy")};return e.addEventListener("click",t),function(){e.removeEventListener("click",t)}}),[]),Object(c.useEffect)((function(){var e=function(e){d((function(t){return[].concat(Object(w.a)(t),[e])}))},n=function(e){d((function(t){return t.filter((function(t){return t.uid!==e}))}))};return t.on("newUser",e),t.on("disconnection",n),t.emit("getPlayers"),function(){t.off("newUser",e),t.off("disconnection",n)}}),[t]),Object(c.useEffect)((function(){var e=function(e){h((function(t){var n=e.key,c=e.value;return t[n]=c,t}))},n=function(e){h(e.settings)};return t.on("settingUpdate",e),t.on("loadSettings",n),t.emit("getSettings"),function(){t.off("settingUpdate",e),t.off("loadSettings",n)}}),[t]),Object(c.useEffect)((function(){var e=function(){n.push({pathname:"/game"})};return t.on("startGame",e),function(){t.off("startGame",e)}}),[t,n]),Object(c.useEffect)((function(){r(localStorage.getItem("inviteCode"))}),[n]),Object(j.jsxs)("div",{className:"root",children:[Object(j.jsx)(x,{}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("div",{className:"game-id",children:Object(j.jsxs)("p",{children:["Game ID: ",s]})}),Object(j.jsxs)("div",{className:"mt-5",children:[Object(j.jsx)("h1",{className:"text-white text-center",children:"Invite your friends!"}),Object(j.jsxs)("div",{className:"input-group mb-3",children:[Object(j.jsx)("input",{type:"text",id:"gameLink",className:"form-control text-center fw-bold bg-white",defaultValue:window.location.origin+"/"+s,readOnly:!0}),Object(j.jsx)("button",{className:"copyBtn",type:"button",id:"copy",children:"Copy Link"})]})]}),Object(j.jsx)("div",{className:"lobby-players",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Coffee"}),Object(j.jsx)("li",{children:"Tea"}),Object(j.jsx)("li",{children:"Milk"})]})}),Object(j.jsx)(v.a,{onClick:function(){t.emit("startGame")},variant:"primary",children:"Ready"})]})]})},S=(n(86),function(){var e=h().changeColor;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("blue")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("red")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("green")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("yellow")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("pink")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("orange")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("purple")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("brown")}),Object(j.jsx)("button",{id:"colorButton",className:"color",onClick:e("black")})]})});function N(e){var t=e.users,n=(void 0===t?[]:t).map((function(e){return Object(j.jsxs)("div",{className:"userProfile",children:[Object(j.jsx)("div",{children:Object(j.jsx)("b",{children:e.uid})}),Object(j.jsxs)("div",{children:["Score: ",e.score]})]},e.uid)}));return Object(j.jsx)("div",{className:"profiles",children:n})}var E=function(){var e=h().changeLineWidth;return Object(j.jsx)("div",{children:Object(j.jsx)("input",{id:"typeinp",type:"range",min:"1",max:"15",defaultValue:"5",step:"1",onChange:function(t){var n=parseInt(t.target.value);e(n)}})})};var D=function(e){var t=e.name,n=void 0===t?"":t,c=e.message,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.correctGuess,s=void 0!==a&&a,r=o.closeGuess,i=void 0!==r&&r,l=document.createElement("p"),u=document.createTextNode("".concat(c)),d=document.getElementById("chat");if(""!==n){var j=document.createElement("span");j.textContent="".concat(n,": "),j.classList.add("fw-bold"),l.append(j)}l.classList.add("p-2","mb-0"),l.append(u),i&&l.classList.add("closeAnswer"),s&&l.classList.add("correctAnswer"),d.appendChild(l),d.scrollTop=d.scrollHeight},L=function(e){var t=e.socket,n=(e.history,Object(c.useState)([])),o=Object(i.a)(n,2),a=o[0],s=o[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),u=l[0],d=l[1];return Object(c.useEffect)((function(){var e=function(e){d(e)};t.on("getPlayers",e);var n=function(e){d((function(t){return[].concat(Object(w.a)(t),[e])}))};t.on("newPlayer",n);var c=function(e){d((function(t){return t.filter((function(t){return t.uid!==e}))}))};return t.on("disconnection",c),t.emit("getPlayers"),function(){t.off("getPlayers",e),t.off("newPlayer",n),t.off("disconnection",c)}}),[t]),Object(c.useEffect)((function(){var e=document.querySelector("#sendMessage"),n=function(n){if("Enter"===n.key){n.preventDefault();var c=e.value;e.value="",t.emit("chatMessage",{message:c}),console.log(c)}};return e.addEventListener("keypress",n),t.on("chatMessage",(function(e){console.log(e),s([].concat(Object(w.a)(a),[e])),D({name:e.uid,message:e.message})})),t.on("closeGuess",(function(e){console.log(e),s([].concat(Object(w.a)(a),[e])),D({name:e.uid,message:e.message},{closeGuess:!0})})),t.on("correctGuess",(function(e){console.log(e),s([].concat(Object(w.a)(a),[e])),D({name:e.uid,message:e.message},{correctGuess:!0})})),function(){t.off("ERROR"),t.off("correctGuess"),t.off("closeGuess"),t.off("chatMessage"),e.removeEventListener("keypress",n)}}),[t,a]),Object(j.jsx)("div",{className:"gameRoot",children:Object(j.jsx)(f,{socket:t,children:Object(j.jsx)("div",{className:"purpleSplatTwo",children:Object(j.jsx)("div",{className:"limeSplat",children:Object(j.jsxs)("div",{className:"inkeeLogo",children:[Object(j.jsxs)("div",{className:"topContainer",children:[Object(j.jsx)("div",{className:"word",children:"word"}),Object(j.jsx)("div",{className:"time",children:" 3:19 "})]}),Object(j.jsxs)("div",{className:"middleContainer",children:[Object(j.jsx)(N,{users:u}),Object(j.jsx)("div",{className:"drawArea",children:Object(j.jsx)(m,{socket:t})}),Object(j.jsx)("div",{className:"chat",id:"chat"})]}),Object(j.jsxs)("div",{className:"bottomContainer",children:[Object(j.jsx)("div",{className:"sendMessage",children:Object(j.jsx)("input",{type:"text",id:"sendMessage",placeholder:"enter guess..."})}),Object(j.jsx)(O,{}),Object(j.jsx)(E,{}),Object(j.jsx)(S,{})]})]})})})})})};var I=function(e){return console.log(e.stuff),Object(j.jsxs)("ul",{className:"goal-list",children:[" ",e.stuff.map((function(e){return Object(j.jsx)("li",{children:e.text},e.id)}))]})},R=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),o=n[0],a=n[1];return Object(j.jsxs)("form",{className:"new-goal",onSubmit:function(t){t.preventDefault();var n={id:Math.random().toString(),text:o};e.onAddGoal(n),console.log("@addGoalHandler: ".concat(n.id)),a("")},children:[Object(j.jsx)("input",{type:"text",value:o,onChange:function(e){a(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Add Goal"})]})};var G=function(){var e=Object(c.useState)([{id:"cg1",text:"Finish CS 490"},{id:"cg2",text:"Start STAT 417"}]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)("h3",{children:" Testing with input "}),Object(j.jsx)(R,{onAddGoal:function(e){o((function(t){return t.concat(e)}))}}),Object(j.jsx)("h3",{children:"Prop a list into page"}),Object(j.jsx)(I,{stuff:n})]})})},B=n(61);var P=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(l.f)();return Object(c.useEffect)((function(){return localStorage.clear(),function(){localStorage.clear()}}),[]),Object(c.useEffect)((function(){var e;e="localhost"===window.location.hostname?"http://".concat(window.location.hostname,":3001"):"wss://".concat(window.location.hostname,"/");var t=Object(B.a)(e,{transports:["websocket","polling"],upgrade:!0,secure:!0});return t.on("connect_error",(function(){t.io.opts.transports=["polling","websocket"]})),t.on("ERROR",(function(e){console.log(e)})),o(t),function(){t.removeAllListeners(),t.close()}}),[o]),Object(j.jsx)(u.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,render:function(e){return Object(j.jsx)(g,Object(r.a)({socket:n,history:a},e))}}),Object(j.jsx)(l.a,{path:"/createLobby",render:function(e){return Object(j.jsx)(C,Object(r.a)({socket:n,history:a},e))}}),Object(j.jsx)(l.a,{path:"/joinLobby",render:function(e){return Object(j.jsx)(y,Object(r.a)({socket:n,history:a},e))}}),Object(j.jsx)(l.a,{path:"/prestartLobby",render:function(e){return Object(j.jsx)(k,Object(r.a)({socket:n,history:a},e))}}),Object(j.jsx)(l.a,{path:"/game",render:function(e){return Object(j.jsx)(L,Object(r.a)({socket:n,history:a},e))}}),Object(j.jsx)(l.a,{path:"/testPage",component:G})]})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),A()}},[[94,1,2]]]);
//# sourceMappingURL=main.43b613a8.chunk.js.map