(this["webpackJsonpcv-creator"]=this["webpackJsonpcv-creator"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),r=n.n(i),c=n(11),l=n.n(c),s=(n(17),n(6)),o=n(7),u=n(8),d=n(2),j=n(3),h=n(5),b=n(4),p=(n(18),n(23)),x=function(e){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:e.title})})},O=(n(19),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.props.onInputChange(e.props.parentKey,a,i)},e.handleValidation=function(t){e.props.validateOnBlur(t)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.personalData,n="";return n=e.editing?Object(a.jsx)(f,{personalData:t,onChange:this.handleChange,onblur:this.handleValidation}):Object(a.jsx)(m,{personalData:t}),Object(a.jsxs)("div",{className:"personal-info section",children:[Object(a.jsx)("h3",{children:"Personal Information"}),n]})}}]),n}(r.a.Component)),m=function(e){var t=e.personalData;return Object(a.jsxs)("div",{className:"preview-text",children:[Object(a.jsxs)("div",{className:"name",children:[Object(a.jsx)("p",{children:t.name}),Object(a.jsx)("p",{children:t.lastName})]}),Object(a.jsxs)("div",{className:"contact",children:[Object(a.jsx)("p",{children:t.email}),Object(a.jsx)("p",{className:"text-align-right",children:t.phone})]})]})},f=function(e){var t=e.personalData;return Object(a.jsx)("div",{className:"form-wrapper",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)("input",{type:"text",value:t.name,name:"name",onChange:e.onChange,onBlur:e.onBlur,required:!0}),Object(a.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)("input",{type:"text",name:"lastName",value:t.lastName,onChange:e.onChange,onBlur:e.onBlur,required:!0}),Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",name:"email",value:t.email,onChange:e.onChange,onBlur:e.onBlur,required:!0}),Object(a.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(a.jsx)("input",{type:"tel",name:"phone",value:t.phone,onChange:e.onChange,onBlur:e.onBlur,required:!0})]})})},v=O,g=(n(20),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){console.log(a.props),a.state.value&&a.setState((function(t){var n=[].concat(Object(u.a)(t.list),[t.value]);return a.props.onSkillUpdate(n),e.preventDefault(),{list:n,value:""}}))},a.handleRemove=function(e){console.log(e),a.setState((function(t){var n=t.list.filter((function(t,n){return n!==e}));return a.props.onSkillUpdate(n),{list:n}}))},a.skillFormatting=function(e){var t=0,n=0;return e%4===0?(t=4,n=e/4):e%3===0?(t=3,n=e/3):5===e||10===e?(t=5,n=e/5):2===e&&(t=2,n=1),{gridTemplateColumns:"repeat(".concat(t,", 1fr)"),gridTemplateRows:"repeat(".concat(n,", 1fr)")}},a.state={list:a.props.skills,value:""},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.list,i=t.value,r=this.props.editing,c="",l=this.skillFormatting(n.length),s=n.map((function(t,n){return Object(a.jsx)("li",{onClick:function(){return e.handleRemove(n)},children:Object(a.jsx)("span",{className:"delete-skill",children:t})},t.toString())}));return r&&(c=Object(a.jsx)("form",{className:"skill-form",onSubmit:this.handleSubmit,children:Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"text",name:"content",value:i,onChange:this.handleChange,placeholder:"Press enter to add a skill",required:!0})})})),Object(a.jsxs)("div",{className:"skill-list section",children:[Object(a.jsx)("h3",{children:"Technical Skills and Capalilities"}),c,Object(a.jsx)("div",{children:Object(a.jsx)("ul",{style:l,children:s})})]})}}]),n}(r.a.Component)),C=(n(10),function(e){var t=e.education,n=t.institution,i=t.degree,r=t.graduationDate,c=e.index,l=(e.parentKey,function(t){var n=t.target,a=n.name,i=n.value,r=Object(o.a)(Object(o.a)({},e.education),{},Object(s.a)({},a,i));e.handleChange(c,r)});return Object(a.jsxs)("div",{className:"form-wrapper",children:[Object(a.jsx)("button",{className:"button delete-section",type:"button",onClick:function(){return e.onClick()},children:"Delete"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{htmlFor:"institution",children:"Institution"}),Object(a.jsx)("input",{type:"text",name:"institution",value:n,onChange:function(e){return l(e)},onBlur:e.onBlur,required:!0}),Object(a.jsx)("label",{htmlFor:"degree",children:"Degree"}),Object(a.jsx)("input",{type:"text",name:"degree",value:i,onChange:function(e){return l(e)},onBlur:e.onBlur,required:!0}),Object(a.jsx)("label",{htmlFor:"graduationDate",children:"Graduation Date"}),Object(a.jsx)("input",{type:"date",name:"graduationDate",value:r,onChange:function(e){return l(e)},required:!0})]}),Object(a.jsx)("br",{})]})}),k=function(e){var t=e.education,n=t.graduationDate.replaceAll("-","/");return Object(a.jsxs)("div",{className:"preview-text",children:[Object(a.jsx)("p",{className:"bold",children:t.institution}),Object(a.jsxs)("div",{className:"title-and-date",children:[Object(a.jsx)("p",{children:t.degree}),Object(a.jsx)("p",{children:n})]})]})},y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.education,i=t.parentKey,r="";return r=t.editing?n.map((function(t,n){return Object(a.jsx)(C,{education:t,index:n,onClick:function(){return e.props.onClick(n)},handleChange:function(t,n){return e.props.onInputChange(i,t,n)},parentKey:i},t.id)})):n.map((function(e){return Object(a.jsx)(k,{education:e})})),console.log(r),Object(a.jsxs)("div",{className:"education section",children:[Object(a.jsx)("h3",{children:"Education"}),r]})}}]),n}(r.a.Component),N=function(e){var t=e.experience,n=t.company,i=t.title,r=t.tenureStart,c=t.tenureEnd,l=t.experience,u=e.index,d=(e.parentKey,function(t){var n=t.target,a=n.name,i=n.value,r=Object(o.a)(Object(o.a)({},e.experience),{},Object(s.a)({},a,i));console.log(r),e.handleChange(u,r)});return Object(a.jsxs)("div",{className:"form-wrapper",children:[Object(a.jsx)("button",{className:"button delete-section",type:"button",onClick:e.onClick,children:"Delete"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{htmlFor:"company",children:"Company Name"}),Object(a.jsx)("input",{type:"text",name:"company",value:n,onChange:function(e){return d(e)},required:!0}),Object(a.jsx)("label",{htmlFor:"title",children:"Job Title"}),Object(a.jsx)("input",{type:"text",name:"title",value:i,onChange:function(e){return d(e)},required:!0}),Object(a.jsx)("label",{htmlFor:"tenureStart",children:"Start Day"}),Object(a.jsx)("input",{type:"date",name:"tenureStart",value:r,onChange:function(e){return d(e)},required:!0}),Object(a.jsx)("label",{htmlFor:"tenureEnd",children:"End Date"}),Object(a.jsx)("input",{type:"date",name:"tenureEnd",value:c,onChange:function(e){return d(e)},required:!0}),Object(a.jsx)("label",{htmlFor:"experience",children:"Experience"}),Object(a.jsx)("textarea",{name:"experience",cols:"30",rows:"10",value:l,onChange:function(e){return d(e)}})]}),Object(a.jsx)("br",{})]})},S=function(e){var t=e.experience,n=t.tenureStart.replaceAll("-","/"),i=t.tenureEnd.replaceAll("-","/");return Object(a.jsxs)("div",{className:"preview-text",children:[Object(a.jsx)("p",{className:"bold",children:t.company}),Object(a.jsxs)("div",{className:"title-and-date",children:[Object(a.jsx)("p",{children:t.title}),Object(a.jsx)("p",{children:n+" - "+i})]}),Object(a.jsx)("pre",{children:t.experience})]})},E=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.experience,i=t.parentKey,r="";return r=t.editing?n.map((function(t,n){return Object(a.jsx)(N,{experience:t,index:n,onClick:function(){return e.props.onClick(n)},onBlur:function(t){return e.props.validateOnBlur(t)},handleChange:function(t,n){return e.props.onInputChange(i,t,n)},parentKey:i},t.id)})):n.map((function(e){return Object(a.jsx)(S,{experience:e})})),Object(a.jsxs)("div",{className:"experience section",children:[Object(a.jsx)("h3",{children:"Experience"}),r]})}}]),n}(r.a.Component),D=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).addAnotherSection=function(e){var t=e.target.dataset.id;if(""!==t)switch(t){case"education":a.setState((function(e){var t={instiution:"",degree:"",graduationDate:"",id:Object(p.a)()};return{education:[].concat(Object(u.a)(e.education),[t])}}));break;case"experience":a.setState((function(e){var t={company:"",title:"",tenureStart:"",tenureEnd:"",id:Object(p.a)()};return{experience:[].concat(Object(u.a)(e.experience),[t])}}));break;default:return}},a.handleChange=function(e){console.log(e)},a.deleteEducation=function(e){var t=a.state.education.filter((function(t,n){return n!==e}));a.setState({education:t})},a.deleteExperience=function(e){var t=a.state.experience.filter((function(t,n){return n!==e}));a.setState({experience:t})},a.handleChange=function(e,t,n){a.setState(Object(s.a)({},e,Object(o.a)(Object(o.a)({},a.state[e]),{},Object(s.a)({},t,n))))},a.handleEducationChange=function(e,t,n){a.setState((function(a){var i=a[e].map((function(e,a){return a===t?n:e}));return Object(s.a)({},e,i)}))},a.handleSkillChange=function(e){a.setState({skills:e})},a.editCV=function(){a.setState({edit:!0})},a.submitForm=function(){a.setState({edit:!1})},a.state={edit:!0,errors:{},personal:{name:"",lastName:"",email:"",phone:""},skills:[],education:[{institution:"",degree:"",graduationDate:"",id:Object(p.a)(),errors:{}}],experience:[{company:"",title:"",tenureStart:"",tenureEnd:"",id:Object(p.a)()}]},a}return Object(j.a)(n,[{key:"render",value:function(){var e="add-button button";return this.state.edit||(e+=" viewing"),Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{title:"Resume Creator"}),Object(a.jsxs)("div",{className:"resume",children:[Object(a.jsx)(v,{personalData:this.state.personal,onInputChange:this.handleChange,parentKey:"personal",editing:this.state.edit}),Object(a.jsx)(g,{skills:this.state.skills,onSkillUpdate:this.handleSkillChange,onSkillSubmit:this.handleSkillSubmit,editing:this.state.edit}),Object(a.jsx)(y,{education:this.state.education,onClick:this.deleteEducation,onInputChange:this.handleEducationChange,parentKey:"education",editing:this.state.edit}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:e,"data-id":"education",onClick:this.addAnotherSection,children:"Add"})}),Object(a.jsx)(E,{experience:this.state.experience,onClick:this.deleteExperience,onInputChange:this.handleEducationChange,parentKey:"experience",editing:this.state.edit}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:e,"data-id":"experience",onClick:this.addAnotherSection,children:"Add"})}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"footer-buttons",children:[Object(a.jsx)("button",{className:this.state.edit?"button submit":"button submit active",onClick:this.submitForm,children:"Submit"}),Object(a.jsx)("button",{className:this.state.edit?"button edit active":"button edit",onClick:this.editCV,children:"Edit"})]})]})]})}}]),n}(r.a.Component);l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.42a07f84.chunk.js.map