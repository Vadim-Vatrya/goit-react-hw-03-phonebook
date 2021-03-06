(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{20:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=(n(20),n(10)),l=n(4),s=n(14),u=n.n(s),b=n(3),m=n(1),d=Object(b.a)({button:{width:120,padding:[5,10],backgroundColor:"rgb(104, 166, 218)",color:"#fff",fontWeight:700,border:"none",borderRadius:4,boxShadow:"0 6px 6px -6px black",cursor:"pointer",display:" inline-block",marginRight:20}}),f=function(){var e=d();return Object(m.jsx)("button",{type:"submit",className:e.button,children:"Add contact"})},j=n(5),p=n.n(j),h=function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(l.a)(n,2),o=r[0],c=r[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),u=s[0],b=s[1],d=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":b(a);break;default:return}},j=function(){c(""),b("")};return Object(m.jsxs)("form",{className:p.a.form,onSubmit:function(e){e.preventDefault(),t({name:o,number:u}),j()},children:[Object(m.jsxs)("label",{className:p.a.formLabel,children:["Name",Object(m.jsx)("input",{type:"text",value:o,name:"name",className:p.a.formInput,placeholder:"Enter name",onChange:d})]}),Object(m.jsxs)("label",{className:p.a.formLabel,children:["Number",Object(m.jsx)("input",{type:"tel",value:u,name:"number",className:p.a.formInput,placeholder:"Enter contact",onChange:d})]}),Object(m.jsx)(f,{})]})},x=Object(b.a)({list:{marginTop:20},listItem:{display:"flex",justifyContent:"space-between",minWidth:200,"&:not(last-child)":{marginBottom:5}},name:{marginRight:10},number:{color:"cornflowerblue",marginRight:10,fontSize:14},deleteButton:{backgroundColor:"#fff",color:"rgba(118, 138, 177, 0.952)",border:["1px","solid","rgb(173, 70, 70)"],borderRadius:4,cursor:"pointer","&:hover":{backgroundColor:"red",color:"#fff"}}}),g=function(e){var t=e.contacts,n=e.onDeleteContact,a=x();return Object(m.jsx)("ul",{className:a.list,children:t.map((function(e){var t=e.id,r=e.name,o=e.number;return Object(m.jsxs)("li",{className:a.listItem,children:[Object(m.jsxs)("span",{className:a.name,children:[r,":"]}),Object(m.jsx)("span",{className:a.number,children:o}),Object(m.jsx)("button",{className:a.deleteButton,onClick:function(){return n(t)},children:"Delete"})]},t)}))})},O=Object(b.a)({label:{display:"flex",flexDirection:"column",fontSize:17,marginBottom:15,fontWeight:500},input:{padding:2,marginTop:5,maxWidth:190,height:30,outline:"none",textAlign:"center",border:["1px","solid","gray"],borderRadius:5}}),v=function(e){var t=e.value,n=e.onChange,a=O();return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:a.label,children:"Find contacts by name"}),Object(m.jsx)("input",{className:a.input,type:"text",placeholder:"Search",name:"filter",value:t,onChange:n})]})};v.defaultProps={value:""};var C=v,w=Object(b.a)({container:{padding:"30px",width:"400px",margin:{left:"auto",top:"40px",right:"auto",bottom:"40px"},backgroundColor:"#ece6f2 "}}),N=function(e){var t=e.children,n=w();return Object(m.jsx)("div",{className:n.container,children:t})},S=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],k=function(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[].concat(S)})),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),c=Object(l.a)(o,2),s=c[0],b=c[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(m.jsxs)(N,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(h,{onSubmit:function(e){var t=e.name,a=e.number;if(t&&a)if(n.map((function(e){return e.name.toLowerCase()})).includes(t.toLowerCase()))alert("".concat(t," is already in contacts."));else{var o={id:u()(),name:t,number:a};r((function(e){return[].concat(Object(i.a)(e),[o])}))}}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(C,{value:s,onChange:function(e){b(e.target.value)}}),Object(m.jsx)(g,{contacts:function(){var e=s.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"ContactForm_form__1udCi",formLabel:"ContactForm_formLabel__2Ld9z",formInput:"ContactForm_formInput__2skHL"}}},[[37,1,2]]]);
//# sourceMappingURL=main.589a72c6.chunk.js.map