(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{67:function(e,n,t){},68:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(10),o=t.n(r),s=(t(67),t(14)),i=t(13),l=t(104),j=t(42),u=t(116),d=(t(68),t(5)),b=Object(l.a)({balance:{fontSize:25,marginBottom:20}}),x=function(e){var n=e.transactions,t=Object(a.useState)(0),c=Object(i.a)(t,2),r=(c[0],c[1],b()),o=n.map((function(e){return e.amount})).reduce((function(e,n){return e+n}),0).toFixed(2);return Object(d.jsx)(u.a,{children:Object(d.jsxs)(j.a,{className:r.balance,children:["Balance: \u20b9",o]})})},O=t(107),f=t(108),m=Object(l.a)({container:{display:"flex","& > *":{flex:1,padding:10}},income:{color:"green"},expense:{color:"red"}}),h=function(e){var n=e.transactions,t=m(),a=n.map((function(e){return e.amount})),c=a.filter((function(e){return e>0})).reduce((function(e,n){return e+n}),0).toFixed(2),r=(-1*a.filter((function(e){return e<0})).reduce((function(e,n){return e+n}),0)).toFixed(2);return Object(d.jsxs)(u.a,{className:t.container,children:[Object(d.jsx)(O.a,{children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)(j.a,{children:"Income"}),Object(d.jsxs)(j.a,{className:t.income,children:["+\u20b9",c]})]})}),Object(d.jsx)(O.a,{children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)(j.a,{children:"Expense"}),Object(d.jsxs)(j.a,{className:t.expense,children:["-\u20b9",r]})]})})]})},p=t(112),g=t(113),v=t(109),T=t(110),F=t(111),N=t(51),k=t.n(N),y=Object(l.a)({list:{display:"flex",marginTop:10,border:"1px solid #F6F6F6"}}),S=function(e){var n=e.transaction,t=e.deleteTransaction,a=(n.amount>=0?"\u20b9":"-\u20b9")+Math.abs(n.amount),c=n.amount>=0?"Green":"Red",r=y();return Object(d.jsxs)(v.a,{style:{background:"".concat(c),color:"#fff"},className:r.list,children:[Object(d.jsx)(T.a,{children:Object(d.jsx)(k.a,{onClick:function(){return t(n.id)}})}),Object(d.jsx)(F.a,{primary:n.text}),Object(d.jsx)(F.a,{primary:a})]})},B=Object(l.a)({component:{"& > *":{marginBottom:10}},heading:{}}),C=function(e){var n=e.transactions,t=e.deleteTransaction,a=B();return Object(d.jsxs)(u.a,{className:a.component,children:[Object(d.jsx)(j.a,{variant:"h5",children:"Transaction History"}),Object(d.jsx)(p.a,{style:{width:"100%"}}),Object(d.jsx)(g.a,{children:n.map((function(e){return Object(d.jsx)(S,{transaction:e,deleteTransaction:t},e.id)}))})]})},w=t(115),E=t(114),M=Object(l.a)({container:{display:"flex",flexDirection:"column","& > *":{marginTop:30}},button:{background:"#445A6F",color:"#fff"}}),A=function(e){var n=e.addTransaction,t=M(),c=Object(a.useState)(""),r=Object(i.a)(c,2),o=r[0],s=r[1],l=Object(a.useState)(),b=Object(i.a)(l,2),x=b[0],O=b[1];return Object(d.jsxs)(u.a,{className:t.container,children:[Object(d.jsx)(j.a,{variant:"h5",children:"New Transaction"}),Object(d.jsx)(w.a,{value:o,label:"Enter Expense",onChange:function(e){return s(e.target.value)}}),Object(d.jsx)(w.a,{value:x,label:"Enter Amount",onChange:function(e){return O(e.target.value)}}),Object(d.jsx)(E.a,{className:t.button,variant:"contained",onClick:function(e){var t={id:Math.floor(1e8*Math.random()),text:o,amount:+x};n(t)},children:"Add Transaction"})]})},I=Object(l.a)({header:{margin:"10px 0",color:"blue",fontSize:36,textTransform:"uppercase"},component:{background:"#FFF",padding:10,borderRadius:20,display:"flex",width:800,"& > *":{padding:10,width:"50%",height:"70vh"}}});var z=function(){var e=I(),n=Object(a.useState)([{id:1,text:"Momos",amount:-20},{id:2,text:"Salary",amount:3e3},{id:3,text:"Book",amount:-100},{id:4,text:"Bonus",amount:1500}]),t=Object(i.a)(n,2),c=t[0],r=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j.a,{className:e.header,children:"Expense Tracker"}),Object(d.jsxs)(u.a,{className:e.component,children:[Object(d.jsxs)(u.a,{children:[Object(d.jsx)(x,{transactions:c}),Object(d.jsx)(h,{transactions:c}),Object(d.jsx)(A,{addTransaction:function(e){r((function(n){return[e].concat(Object(s.a)(n))})),console.log(e),console.log(c)}})]}),Object(d.jsx)(u.a,{children:Object(d.jsx)(C,{transactions:c,deleteTransaction:function(e){console.log(e),r(c.filter((function(n){return n.id!==e}))),console.log(c)}})})]})]})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,119)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),D()}},[[77,1,2]]]);
//# sourceMappingURL=main.d35e07c1.chunk.js.map