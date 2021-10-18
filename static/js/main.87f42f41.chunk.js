(this.webpackJsonpteste_conect=this.webpackJsonpteste_conect||[]).push([[0],{47:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var r,c,a,i=t(0),o=t.n(i),d=t(20),s=t.n(d),p=(t(47),t(7)),b=(t(42),t(3)),x=t(19),u=t(12),l=t.n(u),j=t(16),h=t(18),g=t(37),f=t.n(g).a.create({baseURL:"http://localhost:3333"}),O=t(4),m=t(5),v=m.b.div(r||(r=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  background: linear-gradient(to right, rgba(0, 0, 150, 8), transparent);\n"]))),y=m.b.div(c||(c=Object(O.a)(["\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  display: grid;\n  justify-items: center;\n  padding: 30px;\n  width: 30%;\n  min-height: 40%;\n  /* gap: 10px; */\n"]))),w=m.b.label(a||(a=Object(O.a)(["\n  text-align: center;\n  font-size: 1.8rem;\n"]))),k=t(21),S=t(22),C=Object(S.b)({name:"login",initialState:{loading:!1,data:null,error:null},reducers:{fetchStarted:function(e){e.loading=!0},fetchSuccess:function(e,n){e.loading=!1,e.data=n.payload,e.error=null},fetchError:function(e,n){e.loading=!1,e.data=null,e.error=n.payload}}}),z=C.actions,E=z.fetchStarted,I=z.fetchSuccess,L=z.fetchError,R=C.reducer,D=t(1),J={name:"",password:""};var M,N,_,B,F,P,T,U,q=function(){var e=o.a.useState(J),n=Object(h.a)(e,2),t=n[0],r=n[1],c=o.a.useState(""),a=Object(h.a)(c,2),i=a[0],d=a[1],s=Object(b.g)(),u=Object(k.b)();function g(){return(g=Object(j.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(E()),e.prev=1,e.next=4,f.post("/login",t);case 4:n=e.sent,d(""),console.log(n.data),localStorage.setItem("token",n.data),u(I(n.data)),s.push("/view"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),u(L(e.t0.message)),d("Dados invalidos");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(D.jsx)(v,{children:Object(D.jsxs)(y,{children:[Object(D.jsx)(w,{children:"Login"}),Object(D.jsx)("input",{onChange:function(e){return r(Object(p.a)(Object(p.a)({},t),{},{name:e.target.value}))},style:{width:"100%"},type:"text",value:t.name}),Object(D.jsx)(w,{children:"Password"}),Object(D.jsx)("input",{onChange:function(e){return r(Object(p.a)(Object(p.a)({},t),{},{password:e.target.value}))},type:"password",style:{width:"100%"},value:t.password}),i,Object(D.jsx)("button",{onClick:function(){return g.apply(this,arguments)},style:{background:"#0066ff",borderRadius:"10px",fontSize:"1.8rem",listStyle:"none",marginTop:"10px",width:"30%"},children:Object(D.jsx)(x.b,{to:"/view",children:"Enter"})})]})})},A=m.b.div(M||(M=Object(O.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n  @media (max-width: 1024px) {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n"]))),G=m.b.div(N||(N=Object(O.a)(["\n  background-color: #000;\n  border: 3px solid #000;\n  display: flex;\n  grid-column: 1/-1;\n  justify-content: flex-end;\n  margin-bottom: 40px;\n  padding: 10px;\n  width: 100%;\n  @media (max-width: 1024px) {\n    justify-content: center;\n    margin-bottom: 20px;\n  }\n"]))),H=m.b.button(_||(_=Object(O.a)(["\n  background-color: #ff0000;\n  border-color: #000;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  font-size: 1.8rem;\n  padding: 5px;\n"]))),K=m.b.div(B||(B=Object(O.a)(["\n  align-items: center;\n  background-color: #0066ff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  justify-items: stretch;\n  padding: 30px;\n"]))),Q=m.b.h1(F||(F=Object(O.a)(["\n  grid-column: 1/-1;\n  text-align: center;\n"]))),V=m.b.button(P||(P=Object(O.a)(["\n  background-color: ",";\n  border-color: #000;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  color: #000;\n  font-size: 1rem;\n  margin: 10px;\n  padding: 10px 25px;\n"])),(function(e){return e.color})),W=m.b.table(T||(T=Object(O.a)(["\n  background-color: #0066ff;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  font-size: 1.8rem;\n  @media (max-width: 1024px) {\n    margin: 0 10px;\n  }\n"]))),X=m.b.input(U||(U=Object(O.a)(["\n  padding: 10px;\n"]))),Y={id:void 0,nome:"",cidade:""};var Z,$=function(){var e=o.a.useState(Y),n=Object(h.a)(e,2),t=n[0],r=n[1],c=o.a.useState([]),a=Object(h.a)(c,2),i=a[0],d=a[1],s=Object(b.g)();function x(){return u.apply(this,arguments)}function u(){return(u=Object(j.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/teste");case 2:n=e.sent,d(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id){e.next=7;break}return e.next=3,f.put("/edit/".concat(t.id),{nome:t.nome,cidade:t.cidade});case 3:x(),r(Y),e.next=12;break;case 7:return e.next=9,f.post("/cadastro",t);case 9:console.log(t),x(),r(Y);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.delete("/delete/".concat(n));case 2:x();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(n);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o.a.useEffect((function(){x()}),[]),Object(D.jsxs)(A,{children:[Object(D.jsx)(G,{children:Object(D.jsx)(H,{onClick:function(){localStorage.removeItem("token"),s.push("/")},children:"Logout"})}),Object(D.jsx)("div",{children:Object(D.jsxs)(K,{children:[Object(D.jsx)(Q,{children:"Make your registration"}),Object(D.jsx)(X,{type:"name",value:t.nome,onChange:function(e){return r(Object(p.a)(Object(p.a)({},t),{},{nome:e.target.value}))},placeholder:"Name"}),Object(D.jsx)(X,{type:"name",value:t.cidade,onChange:function(e){return r(Object(p.a)(Object(p.a)({},t),{},{cidade:e.target.value}))},placeholder:"City"}),Object(D.jsx)(V,{onClick:function(){return g.apply(this,arguments)},style:{background:"#b3b3b3"},children:"Send"})]})}),Object(D.jsx)("div",{children:Object(D.jsxs)(W,{children:[Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"Id"}),Object(D.jsx)("th",{children:"Name"}),Object(D.jsx)("th",{children:"City"})]}),i.map((function(e){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:e.id}),Object(D.jsx)("td",{children:e.nome}),Object(D.jsx)("td",{children:e.cidade}),Object(D.jsx)("td",{children:Object(D.jsx)(V,{onClick:function(){return function(e){return m.apply(this,arguments)}(e)},color:"#b3b3b3",children:"Edit"})}),Object(D.jsx)("td",{children:Object(D.jsx)(V,{onClick:function(){return function(e){return O.apply(this,arguments)}(e.id)},color:"#b3b3b3",children:"Delete"})})]},e.id)}))]})})]})},ee=function(){return Object(D.jsx)(x.a,{basename:"/React-login-and-crud",children:Object(D.jsxs)(b.d,{children:[Object(D.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(D.jsx)(q,{})}}),Object(D.jsx)(b.b,{exact:!0,path:"/view",render:function(){return Object(D.jsx)($,{})}})]})})},ne=Object(m.a)(Z||(Z=Object(O.a)(["\n *{margin: 0;\n padding: 0;\n box-sizing: border-box;\n }\n body{\n    background: linear-gradient(to right, rgba(0, 0, 150, 8), transparent);\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100vh;\n }\n\n\n"]))),te=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ne,{}),Object(D.jsx)(ee,{})]})},re=t(13),ce=Object(re.b)({login:R}),ae=Object(S.a)({reducer:ce});s.a.render(Object(D.jsx)(o.a.StrictMode,{children:Object(D.jsx)(k.a,{store:ae,children:Object(D.jsx)(te,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.87f42f41.chunk.js.map