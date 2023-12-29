"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[559],{3559:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r=t(3050),a=t(9439),i=t(2791),c=t(4420),o=t(208),s=t(1686),l=t.n(s),u=t(3553),d=function(e){return e.contacts.items},m=function(e){return e.filter},h=function(e){return e.contacts.error},f=function(e){return e.contacts.isLoading},x=(0,u.P1)([d,m],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),p=t(7989),j=t(2641),g=t(9529),v=t(292),b=t(3329),y=function(){var e=(0,c.I0)(),n=(0,c.v9)(d),t=(0,i.useState)(""),r=(0,a.Z)(t,2),s=r[0],u=r[1],m=(0,i.useState)(""),h=(0,a.Z)(m,2),f=h[0],x=h[1],y=function(t){t.preventDefault();var r={name:s,number:f};if(n.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})))l().Report.warning("Alert","Contact with name ".concat(r.name," already exists!"),"Ok");else{var a=n.find((function(e){var n=e.number;return r.number.replace(/\D/g,"")===n.replace(/\D/g,"")}));a?l().Report.warning("Alert","Number ".concat(r.number," is already in contacts!"),"Ok"):(e((0,o.uK)(r)),u(""),x(""))}};return(0,b.jsxs)("form",{onSubmit:y,children:[(0,b.jsx)("label",{children:"Name:"}),(0,b.jsx)(p.Z,{type:"text",name:"name",placeholder:"Enter name",size:"large",value:s,onChange:function(e){return u(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,prefix:(0,b.jsx)(g.Z,{})}),(0,b.jsx)("label",{children:"Number:"}),(0,b.jsx)(p.Z,{type:"tel",name:"number",placeholder:"Enter phone number",size:"large",value:f,onChange:function(e){return x(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,prefix:(0,b.jsx)(v.Z,{})}),(0,b.jsx)(j.ZP,{size:"large",type:"primary",onClick:y,style:{margin:12},children:"Add contact"})]})},Z=t(1234),C=t(4664),w=t(5496),k=t(5722),A=t(1082),z=t(8656),P=w.Z.Meta;var N=function(e){var n=e.contact,t=(0,c.I0)(),r=(0,i.useState)(!1),s=(0,a.Z)(r,2),l=s[0],u=s[1],d=(0,i.useState)(n.name),m=(0,a.Z)(d,2),h=m[0],f=m[1],x=(0,i.useState)(n.number),g=(0,a.Z)(x,2),v=g[0],y=g[1],Z=function(){return t((0,o.GK)(n.id))},C=function(){return u(!1)};return(0,b.jsxs)(w.Z,{title:n.name,extra:(0,b.jsx)(j.ZP,{type:"primary",onClick:function(){return u(!0)},children:"Edit"}),style:{width:300,marginBottom:16},children:[(0,b.jsx)(P,{title:"Contact Number",description:(0,b.jsx)("a",{href:"tel:".concat(n.number),children:n.number}),style:{marginBottom:12,fontSize:24}}),(0,b.jsx)(A.Z,{title:"Delete the contact",description:"Are you sure to delete this contact?",onConfirm:function(){Z(),k.ZP.success("Contact deleted")},onCancel:function(){return k.ZP.error("Canceled")},okText:"Yes",cancelText:"No",children:(0,b.jsx)(j.ZP,{danger:!0,children:"Delete"})}),(0,b.jsx)(z.Z,{visible:l,onCancel:C,footer:[(0,b.jsx)(j.ZP,{onClick:C,children:"Cancel"},"cancel"),(0,b.jsx)(j.ZP,{type:"primary",onClick:function(){u(!1),t((0,o.xt)({id:n.id,name:h,number:v}))},children:"Save"},"save")],children:(0,b.jsxs)("div",{className:"modal-content",children:[(0,b.jsx)("label",{children:"New Name:"}),(0,b.jsx)(p.Z,{type:"text",value:h,onChange:function(e){return f(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,b.jsx)("label",{children:"New Number:"}),(0,b.jsx)(p.Z,{type:"text",value:v,onChange:function(e){return y(e.target.value)},pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number format could be: +1 555 1234567 or 555 1234567.",required:!0})]})})]})},S=t(2732),B=function(){var e=(0,c.v9)(x),n=(0,c.v9)(h),t=(0,c.v9)(f),r=(0,c.I0)();return(0,i.useEffect)((function(){r((0,o.yF)())}),[r]),(0,b.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12},children:[e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,b.jsx)(N,{contact:{id:n,name:t,number:r}},n)})),t&&!n&&(0,b.jsx)(S.a,{size:"large"}),n&&(0,b.jsx)(Z.Z,{message:"Error fetching contacts",type:"error"}),!t&&0===e.length&&(0,b.jsx)(C.Z,{description:"The Phonebook is empty. Add your first contact."})]})},q=t(6895),D=p.Z.Search,E=function(){var e=(0,c.I0)(),n=(0,c.v9)(m);return(0,b.jsx)("div",{style:{marginBottom:12},children:(0,b.jsxs)("label",{children:["Filter contacts by name:",(0,b.jsx)(D,{type:"text",name:"filter",placeholder:"Search by name",size:"large",value:n,onChange:function(n){return e((0,q.T)(n.target.value.trim()))},disabled:0===(0,c.v9)(d).length})]})})},F=t(864);var L=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(r.B6,{children:[(0,b.jsx)(r.ql,{children:(0,b.jsx)("title",{children:"Phonebook"})}),(0,b.jsxs)(F.W,{children:[(0,b.jsx)(y,{}),(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsx)(E,{}),(0,b.jsx)(B,{})]})]})})}},864:function(e,n,t){t.d(n,{W:function(){return i}});var r,a=t(168),i=t(5685).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 90vh;\n  text-align: center;\n"])))}}]);
//# sourceMappingURL=559.01222a17.chunk.js.map