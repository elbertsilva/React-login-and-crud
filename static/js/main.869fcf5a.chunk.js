(this.webpackJsonpteste_conect=this.webpackJsonpteste_conect||[]).push([[0],{47:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var r,c,a,o=t(0),i=t.n(o),s=t(19),d=t.n(s),p=(t(47),t(7)),b=t(42),x=t(3),u=t(20),l=t(12),j=t.n(l),h=t(16),g=t(18),f=t(37),O=t.n(f).a.create({baseURL:"http://localhost:3333"}),m=t(4),v=t(5),k=v.b.div(r||(r=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  background: linear-gradient(to right, rgba(0, 0, 150, 8), transparent);\n"]))),y=v.b.div(c||(c=Object(m.a)(["\n  background: #fff;\n  /* border: 3px solid #000; */\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  display: grid;\n  padding: 10px;\n  width: 30%;\n  height: 40%;\n  gap: 10px;\n"]))),w=v.b.h1(a||(a=Object(m.a)(["\n  text-align: center;\n  font-size: 1.8rem;\n"]))),S=t(21),C=t(22),z=Object(C.b)({name:"login",initialState:{loading:!1,data:null,error:null},reducers:{fetchStarted:function(e){e.loading=!0},fetchSuccess:function(e,n){e.loading=!1,e.data=n.payload,e.error=null},fetchError:function(e,n){e.loading=!1,e.data=null,e.error=n.payload}}}),E=z.actions,I=E.fetchStarted,L=E.fetchSuccess,D=E.fetchError,J=z.reducer,M=t(1),N={name:"",password:""};var R,_,B,F,P,U,q,A,G=function(){var e=i.a.useState(N),n=Object(g.a)(e,2),t=n[0],r=n[1],c=i.a.useState(""),a=Object(g.a)(c,2),o=a[0],s=a[1],d=Object(x.g)(),b=Object(S.b)();function u(){return(u=Object(h.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(I()),e.prev=1,e.next=4,O.post("/login",t);case 4:n=e.sent,s(""),console.log(n.data),localStorage.setItem("token",n.data),b(L(n.data)),d.push("/view"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),b(D(e.t0.message)),s("Dados invalidos");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(M.jsx)(k,{children:Object(M.jsxs)(y,{children:[Object(M.jsx)(w,{children:"Login"}),Object(M.jsx)("input",{type:"text",onChange:function(e){return r(Object(p.a)(Object(p.a)({},t),{},{name:e.target.value}))},value:t.name}),Object(M.jsx)(w,{children:"Password"}),Object(M.jsx)("input",{type:"password",onChange:function(e){return r(Object(p.a)(Object(p.a)({},t),{},{password:e.target.value}))},value:t.password}),o,Object(M.jsx)("button",{onClick:function(){return u.apply(this,arguments)},style:{background:"#0066ff",fontSize:"1.8rem"},children:"Enter"})]})})},H=v.b.div(R||(R=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n  @media (max-width: 1024px) {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n"]))),K=v.b.div(_||(_=Object(m.a)(["\n  background-color: #000;\n  border: 3px solid #000;\n  display: flex;\n  grid-column: 1/-1;\n  justify-content: flex-end;\n  margin-bottom: 40px;\n  padding: 10px;\n  width: 100%;\n  @media (max-width: 1024px) {\n    justify-content: center;\n    margin-bottom: 20px;\n  }\n"]))),Q=v.b.button(B||(B=Object(m.a)(["\n  background-color: #ff0000;\n  border-color: #000;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  font-size: 1.8rem;\n  padding: 5px;\n"]))),T=v.b.div(F||(F=Object(m.a)(["\n  align-items: center;\n  background-color: #0066ff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  justify-items: stretch;\n  padding: 30px;\n"]))),V=v.b.h1(P||(P=Object(m.a)(["\n  grid-column: 1/-1;\n  text-align: center;\n"]))),W=v.b.button(U||(U=Object(m.a)(["\n  background-color: ",";\n  border-color: #000;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  color: #000;\n  font-size: 1rem;\n  margin: 10px;\n  padding: 10px 25px;\n"])),(function(e){return e.color})),X=v.b.table(q||(q=Object(m.a)(["\n  background-color: #0066ff;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  font-size: 1.8rem;\n  @media (max-width: 1024px) {\n    margin: 0 10px;\n  }\n"]))),Y=v.b.input(A||(A=Object(m.a)(["\n  padding: 10px;\n"]))),Z={id:void 0,nome:"",cidade:""};var $,ee=function(){var e=i.a.useState(Z),n=Object(g.a)(e,2),t=n[0],r=n[1],c=i.a.useState([]),a=Object(g.a)(c,2),o=a[0],s=a[1],d=Object(x.g)();function b(){return u.apply(this,arguments)}function u(){return(u=Object(h.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/teste");case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id){e.next=7;break}return e.next=3,O.put("/edit/".concat(t.id),{nome:t.nome,cidade:t.cidade});case 3:b(),r(Z),e.next=12;break;case 7:return e.next=9,O.post("/cadastro",t);case 9:console.log(t),b(),r(Z);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(h.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.delete("/delete/".concat(n));case 2:b();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(h.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(n);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.useEffect((function(){b()}),[]),Object(M.jsxs)(H,{children:[Object(M.jsx)(K,{children:Object(M.jsx)(Q,{onClick:function(){localStorage.removeItem("token"),d.push("/")},children:"Logout"})}),Object(M.jsx)("div",{children:Object(M.jsxs)(T,{children:[Object(M.jsx)(V,{children:"Make your registration"}),Object(M.jsx)(Y,{type:"name",value:t.nome,onChange:function(e){return r(Object(p.a)(Object(p.a)({},t),{},{nome:e.target.value}))},placeholder:"Name"}),Object(M.jsx)(Y,{type:"name",value:t.cidade,onChange:function(e){return r(Object(p.a)(Object(p.a)({},t),{},{cidade:e.target.value}))},placeholder:"City"}),Object(M.jsx)(W,{onClick:function(){return l.apply(this,arguments)},style:{background:"#b3b3b3"},children:"Send"})]})}),Object(M.jsx)("div",{children:Object(M.jsxs)(X,{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"Id"}),Object(M.jsx)("th",{children:"Name"}),Object(M.jsx)("th",{children:"City"})]}),o.map((function(e){return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:e.id}),Object(M.jsx)("td",{children:e.nome}),Object(M.jsx)("td",{children:e.cidade}),Object(M.jsx)("td",{children:Object(M.jsx)(W,{onClick:function(){return function(e){return m.apply(this,arguments)}(e)},color:"#b3b3b3",children:"Edit"})}),Object(M.jsx)("td",{children:Object(M.jsx)(W,{onClick:function(){return function(e){return f.apply(this,arguments)}(e.id)},color:"#b3b3b3",children:"Delete"})})]},e.id)}))]})})]})},ne=function(e){var n=e.component,t=Object(b.a)(e,["component"]);return Object(M.jsx)(x.b,Object(p.a)(Object(p.a)({},t),{},{render:function(e){return localStorage.getItem("token")?Object(M.jsx)(n,Object(p.a)({},e)):Object(M.jsx)(x.a,{to:{pathname:"/",state:{from:e.location}}})}}))},te=function(){return Object(M.jsx)(u.a,{basename:"/React-login-and-crud",children:Object(M.jsxs)(x.d,{children:[Object(M.jsx)(x.b,{exact:!0,path:"/",render:function(){return Object(M.jsx)(G,{})}}),Object(M.jsx)(ne,{exact:!0,path:"/view",component:function(){return Object(M.jsx)(ee,{})}})]})})},re=Object(v.a)($||($=Object(m.a)(["\n *{margin: 0;\n padding: 0;\n box-sizing: border-box;\n }\n body{\n    background: linear-gradient(to right, rgba(0, 0, 150, 8), transparent);\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100vh;\n }\n\n\n"]))),ce=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(re,{}),Object(M.jsx)(te,{})]})},ae=t(13),oe=Object(ae.b)({login:J}),ie=Object(C.a)({reducer:oe});d.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(S.a,{store:ie,children:Object(M.jsx)(ce,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.869fcf5a.chunk.js.map