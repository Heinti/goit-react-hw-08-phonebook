"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{3323:function(e,t,n){n.d(t,{Z:function(){return s}});var a="Footer_footer__kXlYa",r=n(184),s=function(){return(0,r.jsx)("div",{className:a,children:"Copyright \xa9 2023. Created by heint."})}},9493:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var a=n(2791),r=n(4270),s=n(9434),c=n(3634),i=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},o=function(e){return e.contacts.error},u=function(e){return e.filter.query},m="Section_section__Z2PLw",d="Section_title__SLHvV",_=n(184),h=function(e){var t=e.title,n=e.children;return(0,_.jsxs)("section",{className:m,children:[(0,_.jsx)("h2",{className:d,children:t}),n]})},f=n(1686),x="ContactForm_form__dhl+T",p="ContactForm_label__-cVXI",j="ContactForm_title__jZguf",v="ContactForm_input__Bl93P",b="ContactForm_btn__wll+u";function N(){var e=(0,s.v9)(i),t=(0,s.I0)();return(0,_.jsxs)("form",{className:x,onSubmit:function(n){n.preventDefault();var a=n.currentTarget.elements,r=a.name,s=a.number;if(e.find((function(e){return e.name===r.value})))return f.Notify.failure('Sorry, a contact with that name: "'.concat(r.value,'" already exists. Try a different name.'));var i={name:r.value,number:s.value};t((0,c.uK)(i)),n.target.reset()},children:[(0,_.jsxs)("label",{className:p,children:[(0,_.jsx)("span",{className:j,children:"Name"}),(0,_.jsx)("input",{className:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{className:p,children:[(0,_.jsx)("span",{className:j,children:"Number"}),(0,_.jsx)("input",{className:v,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{className:b,type:"submit",children:"Add contact"})]})}f.Notify.init({width:"320px",closeButton:!1,timeout:5e3});var C=n(1634),y="Filter_label__vEd1E",F="Filter_description__pfMKW",g="Filter_input__N7T3z",w=function(){var e=(0,s.I0)(),t=(0,s.v9)(u);return(0,_.jsxs)("label",{className:y,children:[(0,_.jsx)("p",{className:F,children:"Find contacts by name"}),(0,_.jsx)("input",{className:g,type:"text",value:t,onChange:function(t){return function(t){e((0,C.x)(t))}(t.target.value)},placeholder:"Enter the search name"})]})},k=n(5067),I="ContactItem_item__gxreB",Z="ContactItem_description__dB9EZ",A="ContactItem_name__XjpNK",E="ContactItem_btn__1h5dG",L=function(e){var t=e.contact,n=t.id,a=t.name,r=t.number,i=(0,s.I0)();return(0,_.jsxs)("li",{className:I,children:[(0,_.jsxs)("p",{className:Z,children:[(0,_.jsxs)("span",{className:A,children:[a,":"]}),r]}),(0,_.jsx)("button",{className:E,type:"button",onClick:function(){i((0,c.GK)(n))},children:"Delete"})]},n)},z="ContactList_list__csErn",B=function(){var e=(0,s.v9)(i),t=(0,s.v9)((function(e){return e.filter})),n=function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,_.jsx)("ul",{className:z,children:n.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,_.jsx)(L,{contact:{id:t,name:n,number:a}},t)}))})},S=n(3323),q=function(){var e=(0,s.I0)(),t=(0,s.v9)(l),n=(0,s.v9)(o);return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r.q,{children:(0,_.jsx)("title",{children:"User Contacts"})}),(0,_.jsxs)("div",{children:[(0,_.jsx)(h,{title:"Phonebook",children:(0,_.jsx)(N,{})}),(0,_.jsxs)(h,{title:"Contacts",children:[(0,_.jsx)(w,{}),t&&!n&&(0,_.jsx)(k.Z,{}),(0,_.jsx)(B,{})]})]}),(0,_.jsx)(S.Z,{})]})}}}]);
//# sourceMappingURL=493.c8e5027c.chunk.js.map