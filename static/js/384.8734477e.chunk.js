"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[384],{3323:function(e,t,n){n.d(t,{Z:function(){return s}});var a="Footer_footer__kXlYa",r=n(184),s=function(){return(0,r.jsx)("div",{className:a,children:"Copyright \xa9 2023. Created by heint."})}},7384:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(2791),r=n(4270),s=n(9434),c=n(235),i=function(e){return e.contacts.contacts},o=function(e){return e.filter},l=function(e){return e.contacts.error},u=function(e){return e.contacts.isLoadding},d="Section_section__Z2PLw",m="Section_title__SLHvV",h=n(184),f=function(e){var t=e.title,n=e.children;return(0,h.jsxs)("section",{className:d,children:[(0,h.jsx)("h2",{className:m,children:t}),n]})},_=n(9439),x="ContactForm_form__Btn__x3KnN",p="ContactForm_form__Label__gaSNY";function v(){var e=(0,s.I0)(),t=(0,a.useState)(""),n=(0,_.Z)(t,2),r=n[0],i=n[1],o=(0,a.useState)(""),l=(0,_.Z)(o,2),u=l[0],d=l[1],m=function(e){var t=e.target,n=t.value;switch(t.name){case"name":i(n);break;case"number":d(n);break;default:alert("invalid values")}};return(0,h.jsx)("section",{children:(0,h.jsxs)("form",{action:"submit",onSubmit:function(t){t.preventDefault(),function(t,n){e((0,c.uK)(t,Number(n)))}({name:r,phone:u}),i(""),d("")},children:[(0,h.jsxs)("label",{htmlFor:"Name",className:p,children:["Name",(0,h.jsx)("input",{autoComplete:"off",type:"text",name:"name",value:r,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("label",{htmlFor:"Phone",className:p,children:["Number",(0,h.jsx)("input",{type:"tel",name:"number",value:u,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{className:x,type:"submit",children:"Add contact"})]})})}var j="Filter_label__vEd1E",b=n(6895),C=function(){var e=(0,s.I0)(),t=(0,s.v9)(o);return(0,h.jsxs)("label",{className:j,htmlFor:"find",children:["Find contact by name",(0,h.jsx)("input",{type:"text",value:t,onChange:function(t){var n=t.target.value;e((0,b.B)(n))}})]})},N=n(5067),k="ContactItem_list__li__XyIkm",y="ContactItem_list__Btn__xEfZq",g=function(e){var t=e.data,n=t.id,a=t.name,r=t.phone,s=e.onDelete;return(0,h.jsx)("li",{className:k,children:(0,h.jsxs)("p",{children:[a,": ",r,(0,h.jsx)("button",{className:y,type:"button",onClick:function(){return s(n)},children:"Delete"})]})},n)},F=function(){var e=(0,s.I0)(),t=(0,s.v9)(i),n=(0,s.v9)(o),a=function(t){e((0,c.GK)(t))},r=function(){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return(0,h.jsx)("section",{children:(0,h.jsx)("ul",{children:r.map((function(e){var t=e.id,n=e.name,r=e.phone;return(0,h.jsx)(g,{data:{id:t,name:n,phone:r},onDelete:a},t)}))})})},Z=n(3323),w=function(){var e=(0,s.I0)(),t=(0,s.v9)(u),n=(0,s.v9)(l);return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.q,{children:(0,h.jsx)("title",{children:"User Contacts"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)(f,{title:"Phonebook",children:(0,h.jsx)(v,{})}),(0,h.jsxs)(f,{title:"Contacts",children:[(0,h.jsx)(C,{}),t&&!n&&(0,h.jsx)(N.Z,{}),(0,h.jsx)(F,{})]})]}),(0,h.jsx)(Z.Z,{})]})}}}]);
//# sourceMappingURL=384.8734477e.chunk.js.map