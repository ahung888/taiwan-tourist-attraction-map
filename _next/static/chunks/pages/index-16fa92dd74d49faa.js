(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4459)}])},6009:function(n,e,i){"use strict";var o=i(5893),t=(i(7294),i(1163));function r(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}e.Z=function(n){var e=(0,t.useRouter)();return(0,o.jsx)("img",function(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})))),o.forEach((function(e){r(n,e,i[e])}))}return n}({},n,{src:"".concat(e.basePath).concat(null===n||void 0===n?void 0:n.src)}))}},4459:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return yn}});var o=i(5893),t=i(7294),r=i(5617),a=i(5785),c=i(1917),s=i(6893),l=i(9583),u=i(3990),d=i(7516),v=function(n){var e=n.onMenuClick,i=(n.onProfileClick,(0,r.I0)()),v=(0,t.useContext)(c.GS),f=(0,r.v9)((0,a.br)("searchText")),m=(0,r.v9)((0,a.br)("showItemPage")),h=(0,r.v9)((0,a.br)("device")),p=h.isMobile,x=h.isTablet,j=h.isDesktop;return(0,o.jsx)("header",{className:"header",children:(0,o.jsxs)("div",{className:"header-container",children:[m?(0,o.jsx)(d.YiX,{className:"menu-icon",onClick:function(){i((0,a.tk)(!1))}}):(0,o.jsx)(s.cur,{className:"menu-icon",onClick:e}),(0,o.jsx)("div",{className:"slot left",children:(0,o.jsx)("input",{className:"search-input",type:"text",placeholder:"\u5c0b\u627e\u65c5\u904a\u666f\u9ede",value:f,onChange:function(n){i((0,a.FD)(n.target.value))},onKeyDown:function(n){"Enter"===n.key&&(v.set(c.gQ.spotKeyword,{keyword:f}),i(v.get()()))}})}),f?(0,o.jsx)(u.sQZ,{className:"menu-icon",size:"1.5rem",color:"#999",onClick:function(){i((0,a.IY)()),i((0,a.al)()),i((0,a.DI)()),i((0,a.tk)(!1)),i((0,a.RZ)(!1)),i((0,a.bZ)(!1))}}):"",j||(p||x)&&!f?(0,o.jsx)("div",{className:"profile",onClick:function(){},children:(0,o.jsx)(l.OXn,{})}):""]})})},f=i(7379);function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function h(){var n=m(["\n  font-size: 1.2rem;\n  padding: .5rem;\n  background-color: #fff;\n  border: 1px solid var(--primary-color);\n  border-radius: 5px;\n  color: #35495e;\n  cursor: pointer;\n\n  &.active {\n    background-color: var(--primary-background-color);\n  }\n"]);return h=function(){return n},n}function p(){var n=m(["\n  font-size: 1rem;\n  padding: .2rem .5rem;\n  background-color: var(--primary-background-color);\n  border: 1px solid var(--primary-color);\n  border-radius: 5px;\n  color: #35495e;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n\n  &.active {\n    background-color: var(--primary-background-color);\n  }\n"]);return p=function(){return n},n}var x=f.ZP.button(h()),j=f.ZP.button(p()),g=i(8193),b=[{name:"\u5317\u5317\u57fa\u5b9c",locations:["Taipei","NewTaipei","Keelung","YilanCounty"]},{name:"\u6843\u7af9\u82d7",locations:["Taoyuan","Hsinchu","HsinchuCounty","MiaoliCounty"]},{name:"\u4e2d\u5f70\u6295",locations:["Taichung","ChanghuaCounty","NantouCounty"]},{name:"\u96f2\u5609\u5357",locations:["YunlinCounty","Chiayi","ChiayiCounty","Tainan"]},{name:"\u9ad8\u5c4f",locations:["Kaohsiung","PingtungCounty"]},{name:"\u82b1\u6771",locations:["HualienCounty","TaitungCounty"]},{name:"\u6f8e\u91d1\u99ac",locations:["PenghuCounty","KinmenCounty","LienchiangCounty"]}],y={Taipei:"\u81fa\u5317\u5e02",NewTaipei:"\u65b0\u5317\u5e02",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02",Tainan:"\u81fa\u5357\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Keelung:"\u57fa\u9686\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",LienchiangCounty:"\u9023\u6c5f\u7e23"};function P(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function _(){var n=P(["\n  bottom: 0;\n  height: 60vh;\n  transition: bottom 0.26s ease;\n  z-index: 500;\n  flex-direction: column;\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0 -2px 2px 0 rgb(0 0 0 / 15%);\n\n  &.hide {\n    bottom: -60vh;\n    box-shadow: none;\n  }\n"]);return _=function(){return n},n}function C(){var n=P(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-bottom: .5rem;\n"]);return C=function(){return n},n}function k(){var n=P(["\n  color: #333;\n  font-weight: 700;\n  margin: 1rem 0 .5rem;\n"]);return k=function(){return n},n}function N(){var n=P(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: .5rem;\n"]);return N=function(){return n},n}function w(){var n=P(["\n  width: 8rem;\n  font-size: 1rem;\n  padding: .5rem;\n  background-color: var(--primary-background-color);\n  border: 1px solid var(--primary-color);\n  color: #35495e;\n  cursor: pointer;\n"]);return w=function(){return n},n}function O(){var n=P(["\n  position: absolute;\n  bottom: .5rem;\n"]);return O=function(){return n},n}function S(){var n=P(["\n  position: absolute;\n  top: .5rem;\n  right: .5rem;\n  color: var(--primary-color);\n"]);return S=function(){return n},n}var I=f.ZP.footer(_()),L=f.ZP.section(C()),T=f.ZP.div(k()),z=f.ZP.div(N()),E=f.ZP.button(w()),Z=f.ZP.div(O()),B=f.ZP.div(S()),M=function(n){var e=n.active,i=n.onClose,s=(0,r.I0)(),l=(0,t.useContext)(c.GS),u=(0,t.useState)(null),d=u[0],v=u[1],f=(0,t.useState)(null),m=f[0],h=f[1],p=b.map((function(n,e){return(0,o.jsx)(x,{className:"area ".concat(e===d?"active":""),onClick:function(){v(e),h(null)},children:n.name},e)})),j=(null!==d?b[d].locations:[]).map((function(n,e){return(0,o.jsx)(x,{className:"location ".concat(n===m?"active":""),onClick:function(){return P(n)},children:y[n]},e)})),P=function(n){h(n)},_=function(){v(null),h(null),i()};(0,t.useEffect)((function(){if(void 0!==("undefined"===typeof document?"undefined":(n=document)&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n))return document.addEventListener("onmapclick",_),function(){return document.removeEventListener("onmapclick",_)};var n}),[]);return(0,o.jsxs)(I,{className:"footer footer-pane ".concat(e?"":"hide"),children:[(0,o.jsx)(B,{onClick:_,children:(0,o.jsx)(g.SV5,{size:"1.5rem"})}),(0,o.jsxs)(L,{className:"locations",children:[(0,o.jsx)(T,{children:"\u5340\u57df"}),(0,o.jsx)(z,{className:"areas",children:p}),null!==d?(0,o.jsx)(T,{children:"\u7e23\u5e02"}):(0,o.jsx)(o.Fragment,{}),(0,o.jsx)(z,{className:"locations",children:j})]}),(0,o.jsx)(Z,{children:(0,o.jsx)(E,{onClick:function(){null!==m&&(l.set(c.gQ.spotCity,{city:m}),s(l.get()()),s((0,a.FD)(y[m])),_())},children:"\u67e5\u8a62"})})]})},A=i(5434),R=i(5155),D=function(){var n=(0,r.I0)(),e=(0,r.v9)((0,a.br)("entities")),i=(0,r.v9)((0,a.br)("showItemListPage")),c=(0,t.useState)(!1),s=c[0],l=c[1],u=Object.values(e),d=(0,o.jsxs)(j,{onClick:function(e){e.stopPropagation(),n((0,a.RZ)(!0)),n((0,a.tk)(!1))},children:[(0,o.jsx)(g.N8n,{}),"\u67e5\u770b\u6e05\u55ae"]}),v=(0,o.jsxs)(j,{onClick:function(e){e.stopPropagation(),n((0,a.RZ)(!1)),n((0,a.tk)(!1))},children:[(0,o.jsx)(R.OHW,{}),"\u67e5\u770b\u5730\u5716"]}),f=i?v:d;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("footer",{className:"footer",onClick:function(n){l(!0)},children:[(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("div",{className:"icon",children:(0,o.jsx)(A.rWj,{size:"1.5rem"})}),(0,o.jsx)("p",{className:"text-unselectable",children:"\u5feb\u901f\u67e5\u8a62"})]}),(0,o.jsx)("div",{className:"flex",children:u.length>0?f:""})]}),(0,o.jsx)(M,{active:s,onClose:function(){l(!1)}})]})},H=i(1664),W=i(6009),X=i(2585),G=i(943),K=i.n(G),Y=function(n){var e=n.show,i=n.onNavClose;return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"nav-panel ".concat(e?"active":""," ").concat(K().navInfo),children:[(0,o.jsxs)("header",{children:[(0,o.jsx)(X.Ijk,{className:K().logo,size:"5rem"}),(0,o.jsx)("h1",{children:"\u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd\u5730\u5716"})]}),(0,o.jsxs)("main",{children:[(0,o.jsx)("div",{children:"\u8cc7\u6599\u4ecb\u63a5\u300c\u4ea4\u901a\u90e8PTX\u5e73\u81fa\u300d"}),(0,o.jsx)("a",{href:"https://ptx.transportdata.tw/PTX/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(W.Z,{src:"/images/PTX_logo.png",alt:"\u8cc7\u6599\u4ecb\u63a5\u300c\u4ea4\u901a\u90e8PTX\u5e73\u81fa\u300d"})})]}),(0,o.jsx)(H.default,{href:"/intro",children:"\u5730\u5716\u7c21\u4ecb"}),(0,o.jsx)("footer",{children:(0,o.jsxs)("div",{children:["ver: ","0.2.1"]})})]}),(0,o.jsx)("div",{className:"screen-mask ".concat(e?"active":""),onClick:i})]})},J=i(8747);function U(n){var e=n.data,i=n.onClick;return e.filter((function(n){var e,i;return void 0!==(null===n||void 0===n||null===(e=n.Position)||void 0===e?void 0:e.PositionLon)&&void 0!==(null===n||void 0===n||null===(i=n.Position)||void 0===i?void 0:i.PositionLon)})).map((function(n,e){return(0,o.jsx)(J.Jx,{longitude:n.Position.PositionLon,latitude:n.Position.PositionLat,children:(0,o.jsxs)("svg",{height:20,viewBox:"0 0 24 24",style:{cursor:"pointer",fill:"#d00",stroke:"none",transform:"translate(".concat(-10,"px,").concat(-20,"px)")},onClick:function(){i(n)},children:[(0,o.jsx)("path",{fill:"#f84d4d",stroke:"#951212",strokeWidth:"0.5",d:"M19.25,10.4a13.0663,13.0663,0,0,1-1.4607,5.2235,41.5281,41.5281,0,0,1-3.2459,5.5483c-1.1829,1.7369-2.3662,3.2784-3.2541,4.3859-.4438.5536-.8135.9984-1.0721,1.3046-.0844.1-.157.1852-.2164.2545-.06-.07-.1325-.1564-.2173-.2578-.2587-.3088-.6284-.7571-1.0723-1.3147-.8879-1.1154-2.0714-2.6664-3.2543-4.41a42.2677,42.2677,0,0,1-3.2463-5.5535A12.978,12.978,0,0,1,.75,10.4,9.4659,9.4659,0,0,1,10,.75,9.4659,9.4659,0,0,1,19.25,10.4Z"}),(0,o.jsx)("path",{fill:"#fff",stroke:"#951212",strokeWidth:"0.5",d:"M13.55,10A3.55,3.55,0,1,1,10,6.45,3.5484,3.5484,0,0,1,13.55,10Z"})]})},"marker-".concat(e))}))}var F=t.memo(U),Q=i(9123),V=i.n(Q);function q(n){var e,i,t=n.info,r=null===t||void 0===t||null===(e=t.Picture)||void 0===e?void 0:e.PictureUrl1,a=null===t||void 0===t||null===(i=t.Picture)||void 0===i?void 0:i.PictureDescription1,c="".concat(t.ScenicSpotName,", ").concat(t.City),s=r?(0,o.jsx)("img",{className:V().img,src:r,alt:a}):"";return(0,o.jsxs)("div",{className:V().wrapper,children:[(0,o.jsx)("div",{className:"title",children:c}),(0,o.jsx)("div",{className:"thumbnail",children:s})]})}var $=t.memo(q),nn=[23.5042966,120.9583613];var en=8,on=13;function tn(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function rn(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})))),o.forEach((function(e){tn(n,e,i[e])}))}return n}function an(n,e){if(null==n)return{};var i,o,t=function(n,e){if(null==n)return{};var i,o,t={},r=Object.keys(n);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||(t[i]=n[i]);return t}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}var cn=function(n){n=null!==n?n:function(n){throw n}(new TypeError("Cannot destructure undefined"));var e,i,c=(0,r.I0)(),s=(0,r.v9)((0,a.br)("device")).isMobile,l=(0,r.v9)((0,a.br)("entities")),u=(0,r.v9)((0,a.br)("status")),d=(0,r.v9)((0,a.br)("popupInfo")),v=(0,r.v9)((0,a.br)("showItemPage")),f=(0,r.v9)((0,a.br)("showItemListPage")),m=(0,t.useState)({latitude:nn[0],longitude:nn[1],zoom:6.5,bearing:0,pitch:0}),h=m[0],p=m[1],x=s?-.015:0,j=Object.values(l);(0,t.useEffect)((function(){if(void 0!==("undefined"===typeof document?"undefined":(n=document)&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n))return document.addEventListener("flytospot",b),function(){return document.removeEventListener("flytospot",b)};var n}),[]);var g=(0,t.useCallback)((function(n){var e=n.Position,i=e.PositionLon,o=void 0===i?0:i,t=e.PositionLat,r=void 0===t?0:t;0!==o&&0!==r&&p({latitude:r,longitude:o,zoom:Math.max(h.zoom,on),transitionInterpolator:new J.Cf({speed:1.2}),transitionDuration:"auto"})}),[h]),b=function(n){var e=n.entity;if(void 0!==e){var i=e.Position,o=i.PositionLon,t=void 0===o?0:o,r=i.PositionLat,s=void 0===r?0:r;0!==t&&0!==s&&(p({latitude:s,longitude:t+x,zoom:Math.max(h.zoom,on),transitionInterpolator:new J.Cf({speed:1.2}),transitionDuration:"auto"}),c((0,a.Ao)(e)))}}.bind(h);"loaded"===u&&j.length>0&&(setTimeout((function(){j.length>0&&p(rn({},function(n){var e=void 0===n?[]:n,i={latitude:0,longitude:0};return e.length>0&&(e.map((function(n){var e,o;i.latitude+=(null===n||void 0===n||null===(e=n.Position)||void 0===e?void 0:e.PositionLat)||0,i.longitude+=(null===n||void 0===n||null===(o=n.Position)||void 0===o?void 0:o.PositionLon)||0})),i.latitude/=e.length,i.longitude/=e.length),i}(j),{zoom:en,transitionInterpolator:new J.Cf({speed:1.2}),transitionDuration:"auto"}))}),10),c((0,a.vN)()),s||setTimeout((function(){return c((0,a.RZ)(!0))}),500));var y="map ".concat(v||f?"showItemPages":"");return(0,o.jsx)("div",{className:y,children:(0,o.jsxs)(J.ZP,rn({},h,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/streets-v11",onViewportChange:function(n){return function(n){n.width,n.height;var e=an(n,["width","height"]);p(e)}(n)},mapboxApiAccessToken:"pk.eyJ1IjoieXVuaHVuZyIsImEiOiJja3ZvaG95d3c3dnA4Mm5xd25mNzQ0MGJ4In0.VA6hdK0vkpkP_ruoevenuw",onClick:function(){return document.dispatchEvent(new Event("onmapclick"))},children:[(0,o.jsx)(F,{data:j,onClick:function(n){g(n),c((0,a.yy)(n)),c((0,a.Ao)(n)),s||c((0,a.tk)(!0))}}),d&&(0,o.jsx)(J.GI,{tipSize:5,anchor:"top",longitude:(null===d||void 0===d||null===(e=d.Position)||void 0===e?void 0:e.PositionLon)||0,latitude:(null===d||void 0===d||null===(i=d.Position)||void 0===i?void 0:i.PositionLat)||0,closeOnClick:!1,onClick:function(){c((0,a.tk)(!0))},onClose:function(){c((0,a.al)())},children:(0,o.jsx)($,{info:d})})]}))})},sn=function(n){var e=new Event("flytospot");e.entity=n,document.dispatchEvent(e)},ln=i(3410),un=i.n(ln),dn=i(2694),vn=i(3750),fn=function(n){var e,i,t=n.data,r=n.onCardClick,a=(0,dn.N)(t).map((function(n,e){return(0,o.jsx)("div",{className:un().tag,children:n},e)})),c=(null===t||void 0===t||null===(e=t.Picture)||void 0===e?void 0:e.PictureUrl1)||"",s=(null===t||void 0===t||null===(i=t.Picture)||void 0===i?void 0:i.PiPictureDescription1ctureUrl1)||"";return(0,o.jsxs)("div",{className:un().card,onClick:function(){r(t),sn(t)},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:un().title,children:null===t||void 0===t?void 0:t.Name}),(0,o.jsxs)("div",{className:un().shortCardIconRow,children:[(0,o.jsx)(vn.xNm,{size:"1.2rem"}),(0,o.jsx)("span",{children:a})]})]}),c?(0,o.jsx)("img",{className:un().img,src:c,alt:s}):(0,o.jsx)(o.Fragment,{})]})},mn=function(n){var e=n.onClick;return(0,o.jsx)("div",{className:un().cardLoadMore,onClick:e,children:(0,o.jsx)(g.xOH,{size:"3rem"})})},hn=i(4614),pn=i.n(hn),xn=function(){var n=(0,r.I0)(),e=(0,t.useContext)(c.GS),i=(0,r.v9)((0,a.br)("entities")),s=(0,r.v9)((0,a.br)("showItemListPage")),l=function(e){n((0,a.yy)(e)),n((0,a.tk)(!0))},u=Object.values(i).map((function(n,e){return(0,o.jsx)(fn,{data:n,onCardClick:l},e)})),d="".concat(pn().slidePane," ").concat(pn().posBottom," ").concat(pn().layer1);d+=s?" ".concat(pn().posBottomActive):"";return(0,o.jsxs)("div",{className:d,id:"scrollContainer",children:[u,e.hasMore()?(0,o.jsx)(mn,{onClick:function(){n(e.get()())}}):""]})},jn=i(1872),gn=function(){var n=(0,r.I0)(),e=(0,t.useContext)(c.GS),i=(0,r.v9)((0,a.br)("showItemPage")),u=(0,r.v9)((0,a.br)("currentEntity")),v=(0,r.v9)((0,a.br)("previousEntity")),f=(0,r.v9)((0,a.br)("nextEntity")),m=(0,r.v9)((0,a.br)("status")),h=(0,r.v9)((0,a.br)("device")).isMobile,p=u,x="";if(null!==p){var j,b,y=(0,dn.N)(p).map((function(n,e){return(0,o.jsx)("div",{className:un().tag,children:n},e)})),P=null===p||void 0===p||null===(j=p.Picture)||void 0===j?void 0:j.PictureUrl1,_=null===p||void 0===p||null===(b=p.Picture)||void 0===b?void 0:b.PictureDescription1,C=void 0!==P?(0,o.jsx)("div",{className:un().thumbnails,children:(0,o.jsx)("img",{src:P,alt:_})}):"";x=(0,o.jsxs)(o.Fragment,{children:[C,(0,o.jsx)("div",{className:un().articleTitle,children:null===p||void 0===p?void 0:p.Name}),(0,o.jsxs)("div",{className:un().iconRow,children:[(0,o.jsx)(vn.xNm,{size:"1.2rem"}),(0,o.jsx)("span",{children:y})]}),(0,o.jsx)("p",{children:null===p||void 0===p?void 0:p.Description}),(0,o.jsx)("p",{children:null===p||void 0===p?void 0:p.DescriptionDetail}),(null===p||void 0===p?void 0:p.WebsiteUrl)?(0,o.jsxs)("div",{className:un().iconRow,children:[(0,o.jsx)(g.HmR,{size:"1.2rem"}),(0,o.jsx)("a",{href:null===p||void 0===p?void 0:p.WebsiteUrl,target:"_blank",rel:"noreferrer",children:null===p||void 0===p?void 0:p.WebsiteUrl})]}):"",(null===p||void 0===p?void 0:p.OpenTime)?(0,o.jsxs)("div",{className:un().iconRow,children:[(0,o.jsx)(g.QRz,{size:"1.2rem"}),(0,o.jsx)("span",{children:null===p||void 0===p?void 0:p.OpenTime})]}):"",(null===p||void 0===p?void 0:p.Phone)?(0,o.jsxs)("div",{className:un().iconRow,children:[(0,o.jsx)(vn.UL8,{size:"1.2rem"}),(0,o.jsx)("a",{href:"tel:".concat(null===p||void 0===p?void 0:p.Phone),rel:"noreferrer",children:null===p||void 0===p?void 0:p.Phone})]}):"",(null===p||void 0===p?void 0:p.TravelInfo)?(0,o.jsxs)("div",{className:un().iconRow,children:[(0,o.jsx)(d.LVk,{size:"1.2rem"}),(0,o.jsx)("span",{children:null===p||void 0===p?void 0:p.TravelInfo})]}):"",(null===p||void 0===p?void 0:p.ParkingInfo)?(0,o.jsxs)("div",{className:un().iconRow,children:[(0,o.jsx)(l.mxg,{size:"1.2rem"}),(0,o.jsx)("span",{children:null===p||void 0===p?void 0:p.ParkingInfo})]}):""]})}var k=function(){document.getElementById("item-page-content").scrollTop=0},N="".concat(pn().slidePane," ").concat(pn().posLeft," ").concat(pn().layer2);return N+=i?" ".concat(pn().posLeftActive):"",(0,o.jsxs)("div",{className:N,children:[(0,o.jsx)("div",{className:pn().content,id:"item-page-content",children:x}),(0,o.jsxs)("div",{className:pn().nav,children:[v?(0,o.jsx)("div",{className:pn().navBtn,onClick:function(){n((0,a.l2)()),setTimeout((function(){return k()}),10)},children:(0,o.jsx)(jn.lq4,{})}):(0,o.jsx)("div",{className:pn().navBtnEmpty}),(0,o.jsx)("div",{className:pn().navBtnLight,onClick:function(){h&&(n((0,a.RZ)(!1)),n((0,a.tk)(!1))),sn(p)},children:(0,o.jsx)(s.i63,{size:"1.5rem"})}),f?(0,o.jsx)("div",{className:pn().navBtn,onClick:function(){n((0,a.Cu)()),setTimeout((function(){return k()}),10)},children:(0,o.jsx)(jn.UXX,{})}):e.hasMore()?"loading"===m?(0,o.jsx)("div",{className:pn().navBtnLoading,children:(0,o.jsx)(A.k4Q,{})}):(0,o.jsx)("div",{className:pn().navBtnLoading,onClick:function(){n(e.get()())},children:(0,o.jsx)(g.xOH,{})}):(0,o.jsx)("div",{className:pn().navBtnEmpty})]})]})},bn=function(){var n=(0,r.I0)(),e=(0,r.v9)((0,a.br)("splashMessage"));(0,t.useEffect)((function(){null!==e&&setTimeout((function(){return n((0,a.Wr)())}),2e3)}),[e]);var i="".concat(pn().slidePane," ").concat(pn().slidePaneSearch," ").concat(pn().posTop," ").concat(pn().layer3);return i+=e?" ".concat(pn().posTopActive):"",(0,o.jsx)("div",{className:i,id:"search page",children:e})};function yn(){var n=(0,r.I0)(),e=(0,t.useState)(!1),i=e[0],c=e[1];return(0,t.useEffect)((function(){var e=function(){n((0,a.hG)({width:window.innerWidth,height:window.innerHeight}))};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(v,{onMenuClick:function(){return c(!0)},onProfileClick:function(){}}),(0,o.jsx)(Y,{show:i,onNavClose:function(){return c(!1)}}),(0,o.jsx)(xn,{}),(0,o.jsx)(gn,{}),(0,o.jsx)(bn,{}),(0,o.jsx)(cn,{}),(0,o.jsx)(D,{})]})}},3410:function(n){n.exports={card:"Card_card__2cXDm",title:"Card_title__1A-34",articleTitle:"Card_articleTitle__1VGcJ",tag:"Card_tag__FWTGo",img:"Card_img__1Arhv",thumbnails:"Card_thumbnails__x5LIj",shortCardIconRow:"Card_shortCardIconRow__bFdPv",iconRow:"Card_iconRow__1xM1t",cardLoadMore:"Card_cardLoadMore__Yydrb"}},943:function(n){n.exports={navInfo:"Nav_navInfo__1gGJR",logo:"Nav_logo__11byI"}},4614:function(n){n.exports={slidePane:"SlidePane_slidePane__1YYCz",posTop:"SlidePane_posTop__rYK-3",posTopActive:"SlidePane_posTopActive__23DfQ",posLeft:"SlidePane_posLeft__3zoIJ",posLeftActive:"SlidePane_posLeftActive__23TlA",posBottom:"SlidePane_posBottom__1mzJa",posBottomActive:"SlidePane_posBottomActive__37j52",slidePaneSearch:"SlidePane_slidePaneSearch__1x6mh",layer1:"SlidePane_layer1__2iz2y",layer2:"SlidePane_layer2__2rOz9",layer3:"SlidePane_layer3__3ZN7j",content:"SlidePane_content__WsIHb",nav:"SlidePane_nav__2dztW",navBtn:"SlidePane_navBtn__2Wm0o",navBtnLight:"SlidePane_navBtnLight__2WPbk",navBtnLoading:"SlidePane_navBtnLoading__1EBOH",navBtnEmpty:"SlidePane_navBtnEmpty__8uxbO"}},9123:function(n){n.exports={wrapper:"SpotInfo_wrapper__1rQ6J",img:"SpotInfo_img__3ZMML"}}},function(n){n.O(0,[228,609,158,980,994,445,13,874,617,634,159,774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);