"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(5861),a=r(9439),c=r(7757),u=r.n(c),s=r(7689),i=r(2791),o=r(9014),p=r(8866),f=r(3243),h=r(184);function l(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,i.useState)(!1),d=(0,a.Z)(l,2),v=d[0],m=d[1],x=(0,i.useState)(!1),g=(0,a.Z)(x,2),k=g[0],w=g[1],y=(0,s.UO)().movieId;return(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.xc)(y);case 3:if(0!==(t=e.sent).length){e.next=7;break}return m(!0),e.abrupt("return",(0,o.Am)("Ooops, there are no cast! Please, try again later"));case 7:c(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}w(!0),function(){e.apply(this,arguments)}()}),[y]),(0,h.jsxs)(h.Fragment,{children:[r&&(0,h.jsx)("ul",{children:r.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):"https://via.placeholder.com/300x500?text=Photo+Not+Found",alt:e.name,width:"100"}),(0,h.jsx)("h4",{children:e.name}),(0,h.jsxs)("p",{children:["Character: ",e.character]})]},e.cast_id)}))}),v&&(0,h.jsx)("p",{children:"We don't have cast for this movie "}),k&&(0,h.jsx)(p.a,{})]})}},3243:function(e,t,r){r.d(t,{Ai:function(){return l},Hx:function(){return h},Y5:function(){return p},_k:function(){return o},xc:function(){return f}});var n=r(5861),a=r(7757),c=r.n(a),u=r(2388),s="https://api.themoviedb.org/3/",i="2f44dbe234f7609a16da7327d83f3eb3",o=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"trending/movie/day"),{params:{api_key:i,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(t),{params:{api_key:i,language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(t,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(t,"/reviews"),{params:{api_key:i,language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"search/movie"),{params:{api_key:i,language:"en-US",query:t}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.51bceb6c.chunk.js.map