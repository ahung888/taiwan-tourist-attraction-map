(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(3249)}])},6009:function(n,e,o){"use strict";var t=o(5893),i=(o(7294),o(1163));function r(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}e.Z=function(n){var e=(0,i.useRouter)();return(0,t.jsx)("img",function(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})))),t.forEach((function(e){r(n,e,o[e])}))}return n}({},n,{src:"".concat(e.basePath).concat(null===n||void 0===n?void 0:n.src)}))}},3249:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return pn}});var t=o(5893),i=o(7294),r=o(5617),a=o(5785),c=o(9437),s=o(6893),l=o(9583),u=o(3990),d=o(7516),v=function(n){var e=n.onMenuClick,o=n.onProfileClick,i=n.showReturnButton,v=n.onReturnButtonClick,f=n.onCrossButtonClick,m=(0,r.I0)(),h=(0,r.v9)((0,a.br)("searchText")),p=(0,r.v9)((0,a.br)("device")),x=p.isMobile,j=p.isTablet,g=p.isDesktop;return(0,t.jsx)("header",{className:"header",children:(0,t.jsxs)("div",{className:"header-container",children:[i?(0,t.jsx)(d.YiX,{className:"menu-icon",onClick:v}):(0,t.jsx)(s.cur,{className:"menu-icon",onClick:e}),(0,t.jsx)("div",{className:"slot left",children:(0,t.jsx)("input",{className:"search-input",type:"text",placeholder:"\u5c0b\u627e\u65c5\u904a\u666f\u9ede",value:h,onChange:function(n){m((0,a.FD)(n.target.value))},onKeyDown:function(n){"Enter"===n.key&&m((0,c.d)(h))}})}),h?(0,t.jsx)(u.sQZ,{className:"menu-icon",size:"1.5rem",color:"#999",onClick:function(){m((0,a.IY)()),m((0,a.al)()),f()}}):"",g||(x||j)&&!h?(0,t.jsx)("div",{className:"profile",onClick:o,children:(0,t.jsx)(l.OXn,{})}):""]})})},f=o(7379);function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function h(){var n=m(["\n  font-size: 1.2rem;\n  padding: .5rem;\n  background-color: #fff;\n  border: 1px solid #42b883;\n  border-radius: 5px;\n  color: #35495e;\n  cursor: pointer;\n\n  &.active {\n    background-color: rgba(66, 184, 131, .15);\n  }\n"]);return h=function(){return n},n}function p(){var n=m(["\n  font-size: 1rem;\n  padding: .2rem .5rem;\n  background-color: rgba(66, 184, 131, .15);\n  border: 1px solid #42b883;\n  border-radius: 5px;\n  color: #35495e;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n\n  &.active {\n    background-color: rgba(66, 184, 131, .15);\n  }\n"]);return p=function(){return n},n}var x=f.ZP.button(h()),j=f.ZP.button(p()),g=o(8193),b=[{name:"\u5317\u5317\u57fa\u5b9c",locations:["Taipei","NewTaipei","Keelung","YilanCounty"]},{name:"\u6843\u7af9\u82d7",locations:["Taoyuan","Hsinchu","HsinchuCounty","MiaoliCounty"]},{name:"\u4e2d\u5f70\u6295",locations:["Taichung","ChanghuaCounty","NantouCounty"]},{name:"\u96f2\u5609\u5357",locations:["YunlinCounty","Chiayi","ChiayiCounty","Tainan"]},{name:"\u9ad8\u5c4f",locations:["Kaohsiung","PingtungCounty"]},{name:"\u82b1\u6771",locations:["HualienCounty","TaitungCounty"]},{name:"\u6f8e\u91d1\u99ac",locations:["PenghuCounty","KinmenCounty","LienchiangCounty"]}],C={Taipei:"\u81fa\u5317\u5e02",NewTaipei:"\u65b0\u5317\u5e02",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02",Tainan:"\u81fa\u5357\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Keelung:"\u57fa\u9686\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",LienchiangCounty:"\u9023\u6c5f\u7e23"};function y(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function P(){var n=y(["\n  bottom: 0;\n  height: 60vh;\n  transition: bottom 0.26s ease;\n  z-index: 500;\n  flex-direction: column;\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0 -2px 2px 0 rgb(0 0 0 / 15%);\n\n  &.hide {\n    bottom: -60vh;\n    box-shadow: none;\n  }\n"]);return P=function(){return n},n}function _(){var n=y(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-bottom: .5rem;\n"]);return _=function(){return n},n}function w(){var n=y(["\n  color: #333;\n  font-weight: 700;\n  margin: 1rem 0 .5rem;\n"]);return w=function(){return n},n}function N(){var n=y(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: .5rem;\n"]);return N=function(){return n},n}function k(){var n=y(["\n  width: 8rem;\n  font-size: 1rem;\n  padding: .5rem;\n  background-color: rgba(66, 184, 131, .15);\n  border: 1px solid #42b883;\n  color: #35495e;\n  cursor: pointer;\n"]);return k=function(){return n},n}function T(){var n=y(["\n  position: absolute;\n  bottom: .5rem;\n"]);return T=function(){return n},n}function O(){var n=y(["\n  position: absolute;\n  top: .5rem;\n  right: .5rem;\n  color: #42b883;\n"]);return O=function(){return n},n}var S=f.ZP.footer(P()),z=f.ZP.section(_()),I=f.ZP.div(w()),L=f.ZP.div(N()),E=f.ZP.button(k()),A=f.ZP.div(T()),Z=f.ZP.div(O()),D=function(n){var e=n.active,o=n.onClose,s=(0,r.I0)(),l=(0,i.useState)(null),u=l[0],d=l[1],v=(0,i.useState)(null),f=v[0],m=v[1],h=b.map((function(n,e){return(0,t.jsx)(x,{className:"area ".concat(e===u?"active":""),onClick:function(){d(e),m(null)},children:n.name},e)})),p=(null!==u?b[u].locations:[]).map((function(n,e){return(0,t.jsx)(x,{className:"location ".concat(n===f?"active":""),onClick:function(){return m(n)},children:C[n]},e)})),j=function(){d(null),m(null),o()};(0,i.useEffect)((function(){if(void 0!==("undefined"===typeof document?"undefined":(n=document)&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n))return document.addEventListener("onmapclick",j),function(){return document.removeEventListener("onmapclick",j)};var n}),[]);return(0,t.jsxs)(S,{className:"footer footer-pane ".concat(e?"":"hide"),children:[(0,t.jsx)(Z,{onClick:j,children:(0,t.jsx)(g.SV5,{size:"1.5rem"})}),(0,t.jsxs)(z,{className:"locations",children:[(0,t.jsx)(I,{children:"\u5340\u57df"}),(0,t.jsx)(L,{className:"areas",children:h}),null!==u?(0,t.jsx)(I,{children:"\u7e23\u5e02"}):(0,t.jsx)(t.Fragment,{}),(0,t.jsx)(L,{className:"locations",children:p})]}),(0,t.jsx)(A,{children:(0,t.jsx)(E,{onClick:function(){null!==f&&(s((0,c.c)(f)),s((0,a.FD)(C[f])),j())},children:"\u67e5\u8a62"})})]})},R=o(5434),M=o(5155),B=function(n){var e=n.onFooterPaneClosed,o=n.showItemList,c=n.showMap,s=(0,r.v9)((0,a.br)("entities")),l=(0,i.useState)(!1),u=l[0],d=l[1],v=(0,i.useState)(!0),f=v[0],m=v[1],h=Object.values(s),p=(0,t.jsxs)(j,{onClick:function(){m(!1),o(f)},children:[(0,t.jsx)(g.N8n,{}),"\u67e5\u770b\u6e05\u55ae"]}),x=(0,t.jsxs)(j,{onClick:function(){m(!0),c()},children:[(0,t.jsx)(M.OHW,{}),"\u67e5\u770b\u5730\u5716"]}),b=f?p:x;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("footer",{className:"footer",children:[(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("div",{className:"icon",onClick:function(){return d(!0)},children:(0,t.jsx)(R.rWj,{size:"1.5rem"})}),(0,t.jsx)("p",{onClick:function(){return d(!0)},children:"\u5feb\u901f\u67e5\u8a62"})]}),(0,t.jsx)("div",{className:"flex",children:h.length>0?b:""})]}),(0,t.jsx)(D,{active:u,onClose:function(){d(!1),e()}})]})},H=o(1664),X=o(6009),F=o(2585),J=o(943),K=o.n(J),W=function(n){var e=n.show,o=n.onNavClose;return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"nav-panel ".concat(e?"active":""," ").concat(K().navInfo),children:[(0,t.jsxs)("header",{children:[(0,t.jsx)(F.Ijk,{className:K().logo,size:"5rem"}),(0,t.jsx)("h1",{children:"\u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd\u5730\u5716"})]}),(0,t.jsxs)("main",{children:[(0,t.jsx)("div",{children:"\u8cc7\u6599\u4ecb\u63a5\u300c\u4ea4\u901a\u90e8PTX\u5e73\u81fa\u300d"}),(0,t.jsx)("a",{href:"https://ptx.transportdata.tw/PTX/",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(X.Z,{src:"/images/PTX_logo.png",alt:"\u8cc7\u6599\u4ecb\u63a5\u300c\u4ea4\u901a\u90e8PTX\u5e73\u81fa\u300d"})})]}),(0,t.jsx)(H.default,{href:"/intro",children:"\u5730\u5716\u7c21\u4ecb"}),(0,t.jsx)("footer",{children:(0,t.jsxs)("div",{children:["ver: ","0.1.6"]})})]}),(0,t.jsx)("div",{className:"screen-mask ".concat(e?"active":""),onClick:o})]})},Y=o(3410),G=o.n(Y);function U(n){if(!n)return[];var e=n.City,o=n.Class1,t=n.Class2,i=n.Class3,r=n.Level,a=[e,o,t,i].reduce((function(n,e){return e?n.concat(e):n}),[]);return r&&"\u975e\u53e4\u8e5f"!==r&&a.push("".concat(r,"\u53e4\u8e5f")),a}var V=o(3750),Q=function(n){var e=n.data,o=n.onCardClick,i=(0,r.I0)(),c=U(e).map((function(n,e){return(0,t.jsx)("div",{className:G().tag,children:n},e)})),s=null===e||void 0===e?void 0:e.Picture,l=s.PictureUrl1,u=s.PictureDescription1;return(0,t.jsxs)("div",{className:G().card,onClick:function(){o(e);var n=new Event("flytospot");n.data=e,document.dispatchEvent(n),i((0,a.Ao)(e))},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:G().title,children:null===e||void 0===e?void 0:e.Name}),(0,t.jsxs)("div",{className:G().iconRow,children:[(0,t.jsx)(V.xNm,{size:"1.2rem"}),(0,t.jsx)("span",{children:c})]})]}),l?(0,t.jsx)("img",{className:G().img,src:l,alt:u}):(0,t.jsx)(t.Fragment,{})]})},q=o(4614),$=o.n(q),nn=function(n){var e=n.show,o=n.onSelectItem,i=(0,r.v9)((0,a.br)("entities")),c=Object.values(i).map((function(n,e){return(0,t.jsx)(Q,{data:n,onCardClick:o},e)})),s="".concat($().slidePane," ").concat($().posBottom," ").concat($().layer1);return s+=e?" ".concat($().posBottomActive):"",(0,t.jsx)("div",{className:s,children:c})},en=function(n){var e=n.show,o=n.data,i="";if(void 0!==o){var r,a,c=U(o).map((function(n,e){return(0,t.jsx)("div",{className:G().tag,children:n},e)})),s=null===o||void 0===o||null===(r=o.Picture)||void 0===r?void 0:r.PictureUrl1,u=null===o||void 0===o||null===(a=o.Picture)||void 0===a?void 0:a.PictureDescription1,v=void 0!==s?(0,t.jsx)("div",{className:G().thumbnails,children:(0,t.jsx)("img",{src:s,alt:u})}):"";i=(0,t.jsxs)(t.Fragment,{children:[v,(0,t.jsx)("div",{className:G().articleTitle,children:null===o||void 0===o?void 0:o.Name}),(0,t.jsxs)("div",{className:G().iconRow,children:[(0,t.jsx)(V.xNm,{size:"1.2rem"}),(0,t.jsx)("span",{children:c})]}),(0,t.jsx)("p",{children:null===o||void 0===o?void 0:o.Description}),(0,t.jsx)("p",{children:null===o||void 0===o?void 0:o.DescriptionDetail}),(null===o||void 0===o?void 0:o.WebsiteUrl)?(0,t.jsxs)("div",{className:G().iconRow,children:[(0,t.jsx)(g.HmR,{size:"1.2rem"}),(0,t.jsx)("a",{href:null===o||void 0===o?void 0:o.WebsiteUrl,target:"_blank",rel:"noreferrer",children:null===o||void 0===o?void 0:o.WebsiteUrl})]}):"",(null===o||void 0===o?void 0:o.OpenTime)?(0,t.jsxs)("div",{className:G().iconRow,children:[(0,t.jsx)(g.QRz,{size:"1.2rem"}),(0,t.jsx)("span",{children:null===o||void 0===o?void 0:o.OpenTime})]}):"",(null===o||void 0===o?void 0:o.Phone)?(0,t.jsxs)("div",{className:G().iconRow,children:[(0,t.jsx)(V.UL8,{size:"1.2rem"}),(0,t.jsx)("span",{children:null===o||void 0===o?void 0:o.Phone})]}):"",(null===o||void 0===o?void 0:o.TravelInfo)?(0,t.jsxs)("div",{className:G().iconRow,children:[(0,t.jsx)(d.LVk,{size:"1.2rem"}),(0,t.jsx)("span",{children:null===o||void 0===o?void 0:o.TravelInfo})]}):"",(null===o||void 0===o?void 0:o.ParkingInfo)?(0,t.jsxs)("div",{className:G().iconRow,children:[(0,t.jsx)(l.mxg,{size:"1.2rem"}),(0,t.jsx)("span",{children:null===o||void 0===o?void 0:o.ParkingInfo})]}):""]})}var f="".concat($().slidePane," ").concat($().posLeft," ").concat($().layer2);return f+=e?" ".concat($().posLeftActive):"",(0,t.jsx)("div",{className:f,children:i})},on=o(8747);function tn(n){var e=n.data,o=n.onClick;return e.map((function(n,e){return(0,t.jsx)(on.Jx,{longitude:n.Position.PositionLon,latitude:n.Position.PositionLat,children:(0,t.jsxs)("svg",{height:20,viewBox:"0 0 24 24",style:{cursor:"pointer",fill:"#d00",stroke:"none",transform:"translate(".concat(-10,"px,").concat(-20,"px)")},onClick:function(){console.log(n),o(n)},children:[(0,t.jsx)("path",{fill:"#f84d4d",stroke:"#951212",strokeWidth:"0.5",d:"M19.25,10.4a13.0663,13.0663,0,0,1-1.4607,5.2235,41.5281,41.5281,0,0,1-3.2459,5.5483c-1.1829,1.7369-2.3662,3.2784-3.2541,4.3859-.4438.5536-.8135.9984-1.0721,1.3046-.0844.1-.157.1852-.2164.2545-.06-.07-.1325-.1564-.2173-.2578-.2587-.3088-.6284-.7571-1.0723-1.3147-.8879-1.1154-2.0714-2.6664-3.2543-4.41a42.2677,42.2677,0,0,1-3.2463-5.5535A12.978,12.978,0,0,1,.75,10.4,9.4659,9.4659,0,0,1,10,.75,9.4659,9.4659,0,0,1,19.25,10.4Z"}),(0,t.jsx)("path",{fill:"#fff",stroke:"#951212",strokeWidth:"0.5",d:"M13.55,10A3.55,3.55,0,1,1,10,6.45,3.5484,3.5484,0,0,1,13.55,10Z"})]})},"marker-".concat(e))}))}var rn=i.memo(tn),an=o(9123),cn=o.n(an);function sn(n){var e,o,i=n.info,r=null===i||void 0===i||null===(e=i.Picture)||void 0===e?void 0:e.PictureUrl1,a=null===i||void 0===i||null===(o=i.Picture)||void 0===o?void 0:o.PictureDescription1,c="".concat(i.Name,", ").concat(i.City),s=r?(0,t.jsx)("img",{className:cn().img,src:r,alt:a}):"";return(0,t.jsxs)("div",{className:cn().wrapper,children:[(0,t.jsx)("div",{className:"title",children:c}),(0,t.jsx)("div",{className:"thumbnail",children:s})]})}var ln=i.memo(sn),un=[23.5042966,120.9583613];var dn=8,vn=13;function fn(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function mn(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})))),t.forEach((function(e){fn(n,e,o[e])}))}return n}var hn=function(n){n=null!==n?n:function(n){throw n}(new TypeError("Cannot destructure undefined"));var e=(0,r.I0)(),o=(0,r.v9)((0,a.br)("device")).isMobile,c=(0,r.v9)((0,a.br)("entities")),s=(0,r.v9)((0,a.br)("status")),l=(0,r.v9)((0,a.br)("popupInfo")),u=(0,i.useState)({latitude:un[0],longitude:un[1],zoom:6.5,bearing:0,pitch:0}),d=u[0],v=u[1],f=o?-.015:0,m=Object.values(c);(0,i.useEffect)((function(){if(void 0!==("undefined"===typeof document?"undefined":(n=document)&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n))return document.addEventListener("flytospot",p),function(){return document.removeEventListener("flytospot",p)};var n}),[]);var h=(0,i.useCallback)((function(n){var e=n.Position,o=e.PositionLon,t=e.PositionLat;v({latitude:t,longitude:o,zoom:vn,transitionInterpolator:new on.Cf({speed:1.2}),transitionDuration:"auto"})}),[]),p=function(n){var e=n.data.Position,o=e.PositionLon,t=e.PositionLat;v({latitude:t,longitude:o+f,zoom:vn,transitionInterpolator:new on.Cf({speed:1.2}),transitionDuration:"auto"})};return"loaded"===s&&m.length>0&&(setTimeout((function(){m.length>0&&v(mn({},function(n){var e=void 0===n?[]:n,o={latitude:0,longitude:0};return e.length>0&&(e.map((function(n){var e,t;o.latitude+=(null===n||void 0===n||null===(e=n.Position)||void 0===e?void 0:e.PositionLat)||0,o.longitude+=(null===n||void 0===n||null===(t=n.Position)||void 0===t?void 0:t.PositionLon)||0})),o.latitude/=e.length,o.longitude/=e.length),o}(m),{zoom:dn,transitionInterpolator:new on.Cf({speed:1.2}),transitionDuration:"auto"}))}),500),e((0,a.vN)())),(0,t.jsx)("div",{children:(0,t.jsxs)(on.ZP,mn({className:"map"},d,{width:"100vw",height:"100vh",mapStyle:"mapbox://styles/mapbox/streets-v11",onViewportChange:v,mapboxApiAccessToken:"pk.eyJ1IjoieXVuaHVuZyIsImEiOiJja3ZvaG95d3c3dnA4Mm5xd25mNzQ0MGJ4In0.VA6hdK0vkpkP_ruoevenuw",onClick:function(){return document.dispatchEvent(new Event("onmapclick"))},children:[(0,t.jsx)(rn,{data:m,onClick:function(n){h(n),e((0,a.Ao)(n))}}),l&&(0,t.jsx)(on.GI,{tipSize:5,anchor:"top",longitude:l.Position.PositionLon,latitude:l.Position.PositionLat,closeOnClick:!1,onClose:function(){e((0,a.al)())},children:(0,t.jsx)(ln,{info:l})})]}))})};function pn(){var n=(0,r.I0)(),e=(0,i.useState)(!1),o=e[0],c=e[1],s=(0,i.useState)(!1),l=s[0],u=s[1],d=(0,i.useState)(!1),f=d[0],m=d[1],h=(0,i.useState)(null),p=h[0],x=h[1];(0,i.useEffect)((function(){var e=function(){n((0,a.hG)({width:window.innerWidth,height:window.innerHeight}))};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);return(0,t.jsxs)("div",{children:[(0,t.jsx)(v,{onMenuClick:function(){return c(!0)},onProfileClick:function(){return m(!f)},showReturnButton:f,onReturnButtonClick:function(){return m(!1)},onCrossButtonClick:function(){u(!1),m(!1),x(null),n((0,a.DI)())}}),(0,t.jsx)(W,{show:o,onNavClose:function(){return c(!1)}}),(0,t.jsx)(nn,{show:l,onSelectItem:function(n){x(n),m(!0)}}),(0,t.jsx)(en,{show:f,data:p}),(0,t.jsx)(hn,{}),(0,t.jsx)(B,{onFooterPaneClosed:function(){u(!1),m(!1)},showItemList:function(n){return u(n)},showMap:function(){u(!1),m(!1)}})]})}},3410:function(n){n.exports={card:"Card_card__2cXDm",title:"Card_title__1A-34",articleTitle:"Card_articleTitle__1VGcJ",tag:"Card_tag__FWTGo",img:"Card_img__1Arhv",thumbnails:"Card_thumbnails__x5LIj",iconRow:"Card_iconRow__1xM1t"}},943:function(n){n.exports={navInfo:"Nav_navInfo__1gGJR",logo:"Nav_logo__11byI"}},4614:function(n){n.exports={slidePane:"SlidePane_slidePane__1YYCz",posTop:"SlidePane_posTop__rYK-3",posTopActive:"SlidePane_posTopActive__23DfQ",posLeft:"SlidePane_posLeft__3zoIJ",posLeftActive:"SlidePane_posLeftActive__23TlA",posBottom:"SlidePane_posBottom__1mzJa",posBottomActive:"SlidePane_posBottomActive__37j52",layer1:"SlidePane_layer1__2iz2y",layer2:"SlidePane_layer2__2rOz9",layer3:"SlidePane_layer3__3ZN7j"}},9123:function(n){n.exports={wrapper:"SpotInfo_wrapper__1rQ6J",img:"SpotInfo_img__3ZMML"}}},function(n){n.O(0,[228,609,158,980,445,13,874,617,634,159,774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);