(this.webpackJsonpmovierama=this.webpackJsonpmovierama||[]).push([[0],{15:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(8),a=n(0),i=n(2),s=Object(a.createContext)();t.b=function(e){var t=e.children,n=Object(a.useState)([]),o=Object(c.a)(n,2),r=o[0],u=o[1],b=Object(a.useState)(!0),j=Object(c.a)(b,2),l=j[0],m=j[1],d=Object(a.useState)(1),h=Object(c.a)(d,2),p=h[0],O=h[1],x=Object(a.useState)(""),v=Object(c.a)(x,2),f=v[0],g=v[1],S=Object(a.useState)({movieTitle:"naruto"}),P=Object(c.a)(S,2),w=P[0],y=P[1];return Object(i.jsx)(s.Provider,{value:{movies:r,setMovies:u,page:p,setPage:O,open:l,setOpen:m,input:w,setInput:y,chosenTitle:f,setChosenTitle:g},children:t})}},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(2),a=function(){return Object(c.jsx)("div",{className:"grid place-items-center h-screen",children:Object(c.jsxs)("button",{type:"button",className:"bg-transparent text-white text-2xl",disabled:!0,children:[Object(c.jsx)("svg",{className:"animate-spin h-5 w-5 mr-3",viewBox:"0 0 24 24"}),"Loading..."]})})}},27:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(20),s=n.n(i),o=(n(27),n(17)),r=n(14),u=n(1),b=n(15),j=(n(29),a.a.lazy((function(){return n.e(3).then(n.bind(null,42))}))),l=a.a.lazy((function(){return n.e(4).then(n.bind(null,45))})),m=[{path:"/",exact:!0,name:"HomePage",component:l},{path:"/movies",exact:!0,name:"Movies",component:j},{path:"/movies/:imdbID",exact:!0,name:"Movie Details",component:a.a.lazy((function(){return n.e(5).then(n.bind(null,43))}))},{path:"*",exact:!0,name:"Page Not Found",component:l}],d=n(18),h=n(2);var p=function(){return Object(h.jsx)(b.b,{children:Object(h.jsx)(r.a,{children:Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(d.a,{}),children:Object(h.jsx)(u.c,{children:m.map((function(e,t){return e.component&&Object(h.jsx)(u.a,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(h.jsx)(e.component,Object(o.a)({},t))}},t)}))})})})})},O=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},x=n(16);s.a.render(Object(h.jsxs)(a.a.StrictMode,{children:[Object(h.jsx)(x.a,{}),Object(h.jsx)(p,{})]}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.05e15ab6.chunk.js.map