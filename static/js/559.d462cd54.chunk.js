"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[559],{3559:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(3050),a=t(9439),c=t(2791),o=t(4420),i=t(208),s=t(1686),u=t.n(s),l=t(3553),d=function(e){return e.contacts.items},m=function(e){return e.filter},h=function(e){return e.contacts.error},f=function(e){return e.contacts.isLoading},x=(0,l.P1)([d,m],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),p=t(3329),b=function(){var e=(0,o.I0)(),n=(0,o.v9)(d),t=(0,c.useState)(""),r=(0,a.Z)(t,2),s=r[0],l=r[1],m=(0,c.useState)(""),h=(0,a.Z)(m,2),f=h[0],x=h[1];return(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r={name:s,number:f};if(n.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})))u().Report.warning("Alert","Contact with name ".concat(r.name," already exists!"),"Ok");else{var a=n.find((function(e){var n=e.number;return r.number.replace(/\D/g,"")===n.replace(/\D/g,"")}));a?u().Report.warning("Alert","Number ".concat(r.number," is already in contacts!"),"Ok"):(e((0,i.uK)(r)),l(""),x(""))}},children:[(0,p.jsxs)("label",{children:["Name:",(0,p.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:s,onChange:function(e){return l(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("label",{children:["Number:",(0,p.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",value:f,onChange:function(e){return x(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("br",{}),(0,p.jsx)("button",{type:"submit",children:"Add contact"})]})},j=t(5819),v=t(5722),C=t(5820),g=t(1056),Z=t(2641),y=t(7989);var k=function(e){var n=e.contact,t=(0,o.I0)(),r=(0,c.useState)(!1),s=(0,a.Z)(r,2),u=s[0],l=s[1],d=(0,c.useState)(n.name),m=(0,a.Z)(d,2),h=m[0],f=m[1],x=(0,c.useState)(n.number),b=(0,a.Z)(x,2),j=b[0],k=b[1],A=function(){return t((0,i.GK)(n.id))},w=function(){return l(!1)};return(0,p.jsxs)("li",{children:[(0,p.jsx)("span",{children:n.name}),(0,p.jsx)("a",{href:"tel:".concat(n.number),children:n.number}),(0,p.jsx)("button",{onClick:function(){return l(!0)},children:"Edit"}),(0,p.jsx)(C.Z,{title:"Delete the contact",description:"Are you sure to delete this contact?",onConfirm:function(e){A(e.target.value),v.ZP.success("Click on Yes")},onCancel:function(e){return v.ZP.error("Click on No")},okText:"Yes",cancelText:"No",children:(0,p.jsx)("button",{danger:!0,children:"Add"})}),(0,p.jsx)(g.Z,{open:u,onCancel:w,footer:[(0,p.jsx)(Z.ZP,{onClick:w,children:"Cancel"},"cancel"),(0,p.jsx)(Z.ZP,{onClick:function(){l(!1),t((0,i.xt)({id:n.id,name:h,number:j}))},children:"Save"},"save")],children:(0,p.jsxs)("div",{className:"modal-content",children:[(0,p.jsx)("label",{children:"New Name:"}),(0,p.jsx)(y.Z,{type:"text",value:h,onChange:function(e){return f(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,p.jsx)("label",{children:"New Number:"}),(0,p.jsx)(y.Z,{type:"text",value:j,onChange:function(e){return k(e.target.value)},pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number format could be: +1 555 1234567 or 555 1234567.",required:!0})]})})]})};function A(){var e=(0,o.v9)(x),n=(0,o.v9)(h),t=(0,o.v9)(f),r=(0,o.I0)();return(0,c.useEffect)((function(){r((0,i.yF)())}),[r]),(0,p.jsx)("ul",{children:t&&!n?(0,p.jsx)(j.a,{}):0!==e.length||n?e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,p.jsx)(k,{contact:{id:n,name:t,number:r}},n)})):(0,p.jsx)("p",{children:"The Phonebook is empty. Add your first contact."})})}var w=t(6895);function N(){var e=(0,o.I0)(),n=(0,o.v9)(m);return(0,p.jsx)("div",{children:(0,p.jsxs)("label",{children:["Filter contacts by name:",(0,p.jsx)("input",{type:"text",name:"filter",placeholder:"Search by name",value:n,onChange:function(n){return e((0,w.T)(n.target.value.trim()))},disabled:0===(0,o.v9)(d).length})]})})}var P=function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(r.B6,{children:[(0,p.jsx)(r.ql,{children:(0,p.jsx)("title",{children:"Phonebook\ud83d\udcf1"})}),(0,p.jsx)(b,{}),(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(N,{}),(0,p.jsx)(A,{})]})})}}}]);
//# sourceMappingURL=559.d462cd54.chunk.js.map