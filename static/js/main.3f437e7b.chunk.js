(this["webpackJsonpproximity-stocksapp"]=this["webpackJsonpproximity-stocksapp"]||[]).push([[0],{19:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(2),a=c.n(r),s=c(20),o=c.n(s),i=(c(30),c(5)),l=(c(31),c(11));c(32),c(34);l.a.initializeApp({apiKey:"AIzaSyCmNuF-UVMfEKdZBact1xrfVEIG4GMIKCI",authDomain:"proximity-stocksapp.firebaseapp.com",databaseURL:"https://proximity-stocksapp.firebaseio.com",projectId:"proximity-stocksapp",storageBucket:"proximity-stocksapp.appspot.com",messagingSenderId:"149848156867",appId:"1:149848156867:web:060d43020c505bc54ed076",measurementId:"G-BDVRFKWMTE"});var j=l.a.auth(),u=(l.a.firestore(),new l.a.auth.GoogleAuthProvider);u.setCustomParameters({prompt:"select_account"});var d=function(){return j.signInWithPopup(u)},b=(l.a,c(24)),h=[],O=function(e,t){switch(t.type){case"newPrices":return t.value;default:console.log("some error occurred")}},m=function(e,t){return t},p=[],x=function(e,t){return t},f=[],k=function(e,t){return t},v={},g=function(e,t){var c=t.value.stock;switch(t.type){case"add":e[c]=t.value;break;default:console.log("some error occurred")}return e},N=Object(r.createContext)(),D=function(e){var t=e.children,c=Object(r.useReducer)(O,h),a=Object(r.useReducer)(m,""),s=Object(r.useReducer)(x,p),o=Object(r.useReducer)(k,f),i=Object(r.useReducer)(g,v);return Object(n.jsx)(N.Provider,{value:{stateAndDispatcher:c,stockNameAndDispatcher:a,stockPriceDataDispatcher:s,stockHistoryDispatcher:o,watchListStockDataDispatcher:i},children:t})},S=(c(36),function(){return Object(n.jsx)("div",{className:"sign-out-btn-container",children:Object(n.jsx)("button",{type:"button",className:"sign-out-btn",onClick:function(){return j.signOut()},children:"SignOut"})})}),w=c(14),y=c.n(w),C=(c(19),function(e){var t=e.stockname;return Object(n.jsx)("td",{className:"stock-name",children:t.toUpperCase()})}),T=function(e){var t=e.formattedTime;return Object(n.jsx)("td",{children:t})},P=function(e){var t=e.currentStockPrice,c=Object(r.useState)(!1),a=Object(i.a)(c,2),s=a[0],o=a[1];return Object(r.useEffect)((function(){o(!0),setTimeout((function(){o(!1)}),2e3)}),[t]),Object(n.jsxs)("td",{className:s?"flickClass ":"",children:["$",t," USD"]})},A=c.p+"static/media/up-chevron.5f5a3fcb.svg",I=c.p+"static/media/down-arrow.676521e0.svg",L=function(e){var t=e.percentCalc;return Object(n.jsx)("td",{children:t<0?Object(n.jsx)("img",{src:I,alt:"down arrow"}):Object(n.jsx)("img",{src:A,alt:"up arrow"})})},W=function(e){var t=e.percentCalc;return Object(n.jsx)("td",{className:t>0?"green-color":t<0?"red-color":"white-color",children:Object(n.jsxs)("b",{children:[t,"%"]})})},E=function(e){var t=e.priceData,c=e.nameOfStock,a=Object(r.useContext)(N),s=a.stockNameAndDispatcher,o=a.stockPriceDataDispatcher,l=Object(i.a)(s,2),j=l[0],u=l[1],d=Object(i.a)(o,2),b=d[0],h=d[1];console.log(j,b);return Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){return u(c),void h(t)},children:"See Chart"})})},F=function(e){var t=e.priceData,c=Object(r.useContext)(N).stockHistoryDispatcher,a=Object(i.a)(c,2),s=a[0],o=a[1];console.log(s);return Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){o(t)},children:"Stock History"})})},U=(c(38),function(e){var t=Object(r.useContext)(N).watchListStockDataDispatcher,c=Object(i.a)(t,2),a=c[0],s=c[1];console.log(a);var o=e.stock,l=e.percentCalc,j=e.formattedTime,u=e.currentStockPrice,d=e.stockDataWithTimeStamp;return s({type:"add",value:{stock:o,percentCalc:l,formattedTime:j,currentStockPrice:u}}),Object(n.jsx)(r.Fragment,{children:Object(n.jsx)("div",{draggable:!0,onDragStart:function(e){return function(e,t){e.dataTransfer.setData("text/plain",t)}(e,o)},children:Object(n.jsxs)("tr",{id:o,className:"stock-table-row",children:[Object(n.jsx)("span",{className:"stock-StockName",children:Object(n.jsx)(C,{stockname:o})}),Object(n.jsx)("span",{className:"stock-StockLastUpadateTime",children:Object(n.jsx)(T,{formattedTime:j})}),Object(n.jsx)("span",{className:"stock-StockPrice",children:Object(n.jsx)(P,{currentStockPrice:u})}),Object(n.jsx)("span",{className:"stock-StockTrendArrow",children:Object(n.jsx)(L,{percentCalc:l})}),Object(n.jsx)("span",{className:"stock-StockTrendPercent",children:Object(n.jsx)(W,{percentCalc:l})}),Object(n.jsxs)("span",{className:"stock-buttons",children:[Object(n.jsx)(E,{priceData:d[o],nameOfStock:o}),Object(n.jsx)(F,{priceData:d[o],nameOfStock:o})]})]})})},o)}),M=(c(39),function(e){var t=e.filteredStockDataWithTimeStampArray,c=e.stockDataWithTimeStampCache,r=e.stockDataWithTimeStamp;return Object(n.jsxs)("div",{className:"stock-wrapper",children:[Object(n.jsx)("table",{className:"label-table-row",children:Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Stock Name"}),Object(n.jsx)("td",{children:"Last Update Time"}),Object(n.jsx)("td",{children:"Current Price"}),Object(n.jsx)("td",{children:"Percent Profit/Loss"}),Object(n.jsx)("td",{children:"Options"})]})})}),Object(n.jsx)("div",{className:"stocks-table",children:Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:t.length?t.map((function(e){var t=Object.keys(c[e]),a=new Date(Number(t[t.length-1])),s=new Date(Number(t[t.length-2])),o=a.getTime()-s.getTime();console.log(a,s,o);var i,l,j=(i=c[e][t[t.length-1]],l=c[e][t[t.length-2]],{percentCalc:i&&l?((i-l)/l*100).toFixed(2):0}).percentCalc,u=c[e][t[t.length-1]];return Object(n.jsx)(U,{formattedTime:function e(t){switch(e){case Number(t)<=5e3:return"A few seconds ago";case Number(t)>5e3&&Number(t)<6e4:return"Updated ".concat(Number(t)," seconds ago");case Number(t)>=6e4&&Number(t)<36e5:return"".concat(Number(t)/1e3/60);default:return"record not available"}}(o),percentCalc:j,stock:e,currentStockPrice:u,stockDataWithTimeStamp:r})})):Object(n.jsx)("tr",{children:Object(n.jsx)("td",{children:"Please wait while stocks load."})},"random 1")})})})]})}),R={},B={},G=function(){var e=Object(r.useContext)(N).stateAndDispatcher,t=Object(i.a)(e,1)[0],c=Object(r.useState)(""),a=Object(i.a)(c,2),s=a[0],o=a[1],l=Object.fromEntries(t);for(var j in l){var u=[y.a.unix(Math.floor(new Date/1e3))._i,Number(l[j].toFixed(2))];j in R?(R[j].push(u),R[j].length>=100&&R[j].splice(0,50)):R[j]=[u]}for(var d in R)B[d]=Object.fromEntries(R[d]);var b=Object.keys(B).filter((function(e){return e.toLowerCase().includes(s.toLowerCase())}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"stocks-wrapper",children:[Object(n.jsx)("h5",{children:"Stocks"}),Object(n.jsx)("div",{className:"search-container",children:Object(n.jsx)("input",{placeholder:"Search stocks here",onChange:function(e){o(e.target.value)}})}),Object(n.jsx)(M,{filteredStockDataWithTimeStampArray:b,stockDataWithTimeStampCache:B,appState:t,stockDataWithTimeStamp:R})]})})},H=c(16),z=c(21),K=c.n(z),Y=function(e){var t,c=e.priceData,r=e.name,a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),s=(t={yAxis:[{offset:20,labels:{formatter:function(){return a.format(this.value)},x:-15,style:{color:"#000",position:"absolute"},align:"left"}}],tooltip:{shared:!0,formatter:function(){return a.format(this.y,0)+"</b><br/>"+y()(this.x).format("MMMM Do YYYY, h:mm")}},plotOptions:{series:{showInNavigator:!0,gapSize:6}},rangeSelector:{selected:1},title:{text:"".concat(r.toUpperCase()," Changes")},chart:{height:600},credits:{enabled:!1},legend:{enabled:!0},xAxis:{type:"date"}},Object(H.a)(t,"rangeSelector",{buttons:[{type:"day",count:1,text:"1d"},{type:"day",count:7,text:"7d"},{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"all",text:"All"}],selected:4}),Object(H.a)(t,"series",[{name:"Price",type:"spline",data:c,tooltip:{valueDecimals:2}}]),t);return Object(n.jsx)("div",{className:"chart-container",children:Object(n.jsx)(K.a,{config:s})})},J=function(){var e=Object(r.useContext)(N),t=e.stockNameAndDispatcher,c=e.stockPriceDataDispatcher,a=Object(i.a)(t,1)[0],s=Object(i.a)(c,1)[0];return Object(n.jsx)("div",{className:"chartview-main",children:Object(n.jsx)(Y,{name:a,priceData:s})})},V=(c(41),function(){var e=Object(r.useContext)(N).stockHistoryDispatcher,t=Object(i.a)(e,1)[0],c=Object.fromEntries(t);return Object(n.jsx)("div",{className:"stocks-history-wrapper",children:Object(n.jsx)("table",{className:"history-table",children:Object(n.jsx)("tbody",{children:Object.keys(c).map((function(e){var t=new Date(Number(e)),r=t.getHours(),a="0"+t.getMinutes(),s="0"+t.getSeconds(),o=r+":"+a.substr(-2)+":"+s.substr(-2),i="$".concat(c[e]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Time"}),Object(n.jsx)("td",{children:"Price"})]}),Object(n.jsxs)("tr",{className:"history-table-row",children:[Object(n.jsx)("td",{className:"history-table-row-element",children:o}),Object(n.jsx)("td",{className:"history-table-row-element",children:i})]})]})}))})})})}),$=c(22),Z=c(23),_=(c(46),{}),q=function(){var e=Object(r.useState)("watch-stocks-container"),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(r.useContext)(N).watchListStockDataDispatcher,o=Object(i.a)(s,1)[0];return Object(n.jsxs)("div",{className:"watchlist-container",onDragEnter:function(){a("dropzone-hovered")},onDragLeave:function(){return a("watch-stocks-container")},children:[Object(n.jsx)("div",{children:"Watch List"}),Object(n.jsxs)("div",{className:c,onDragOver:function(e){return function(e){e.preventDefault()}(e)},onDrop:function(e){return function(e){var t=e.dataTransfer.getData("text");_[t]=1,a("watch-stocks-container")}(e)},children:["DROPZONE",Object.keys(_).map((function(e){var t=o[e],c=t.formattedTime,r=t.percentCalc,a=t.currentStockPrice;return Object(n.jsx)("div",{className:"stock-row",children:Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{className:"stock-table-row",children:[Object(n.jsx)("td",{children:e.toUpperCase()}),Object(n.jsx)("td",{children:c}),Object(n.jsxs)("td",{children:["$",a,"USD"]}),Object(n.jsxs)("td",{className:r>0?"green-color":r<0?"red-color":"white-color",children:[r,"%"]}),Object(n.jsx)("td",{children:Object(n.jsx)($.a,{className:"arrow",onClick:function(){return function(e){delete _[e]}(e)},icon:Z.a})})]})})})})}))]})]})},Q=(c(47),function(){var e=Object(r.useRef)(null),t=Object(r.useContext)(N).stateAndDispatcher,c=Object(i.a)(t,2),a=c[0],s=c[1];Object(b.a)(a);return Object(r.useEffect)((function(){return e.current=new WebSocket("ws://stocks.mnet.website"),e.current.onopen=function(){console.log("connection opened")},e.current.onerror=function(e){console.log(e)},e.current.onmessage=function(e){var t=JSON.parse(e.data);s({type:"newPrices",value:t})},e.current.onclose=function(){e.current.close()},e.current.onerror=function(e){console.log(e)},function(){return e.current.close()}}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(S,{}),Object(n.jsxs)("div",{className:"main",children:[Object(n.jsxs)("div",{className:"watchlist-history-container",children:[Object(n.jsx)(q,{}),Object(n.jsx)(V,{})]}),Object(n.jsx)("div",{className:"stockTable-container",children:Object(n.jsx)(G,{})}),Object(n.jsx)("div",{className:"chartview-container",children:Object(n.jsx)(J,{})})]})]})}),X=(c(48),function(){return Object(n.jsx)("div",{className:"sign-in-btn-container",children:Object(n.jsx)("button",{type:"button",className:"sign-in-btn",onClick:d,children:"Sign In With Google"})})});var ee=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){j.onAuthStateChanged((function(e){a(e)}))}),[c]),Object(n.jsx)("div",{className:"App",children:c?Object(n.jsx)(D,{children:Object(n.jsx)(Q,{})}):Object(n.jsx)(X,{})})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(ee,{})}),document.getElementById("root")),te()}},[[49,1,2]]]);
//# sourceMappingURL=main.3f437e7b.chunk.js.map