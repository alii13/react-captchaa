(this["webpackJsonpreact-captchaa-example"]=this["webpackJsonpreact-captchaa-example"]||[]).push([[0],{422:function(e,t,c){"use strict";c.r(t);var n=c(1),a=(c(81),c(2)),s=c.n(a),r=c(71),i=c.n(r),d=c(76),j=c(77),l=(c(100),c(41)),o=c.n(l),h=c(426),b=c(425),x=c(6);const p="https://github.com",O={float:"left",outline:"none",padding:"2px 10px",fontWeight:"bold",lineHeight:"20px",fontSize:"13px",color:"#333",verticalAlign:"middle",cursor:"pointer",border:"1px solid #d5d5d5",borderRadius:"3px",borderTopRightRadius:"0",borderBottomRightRadius:"0",backgroundImage:"linear-gradient(#fcfcfc, #eee)"},u={textDecoration:"none",backgroundColor:"#ddd",backgroundImage:"linear-gradient(#eee, #ddd)",borderColor:"#ccc"},m=(e,t,c)=>class extends a.Component{constructor(e){super(e),this.state={hover:!1}}render(){return Object(n.jsx)("span",{onMouseEnter:()=>this.setState({hover:!0}),onMouseLeave:()=>this.setState({hover:!1}),children:Object(n.jsx)(c,Object(x.a)(Object(x.a)({},this.props),{},{style:Object.assign({},e,this.state.hover?t:{})}))})}},g=({style:e,label:t,path:c,width:a,height:s})=>Object(n.jsxs)("button",{style:e,children:[Object(n.jsx)("svg",{style:{verticalAlign:"text-top"},"aria-hidden":"true",height:s,role:"img",version:"1.1",viewBox:"0 0 ".concat(a," ").concat(s),width:a,children:Object(n.jsx)("path",{d:c})}),"\xa0",t]});g.defaultProps={width:"14",height:"16"};const f=m(O,u,(({style:e})=>Object(n.jsx)(g,{style:e,label:"Star",path:"M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"}))),N=m(O,u,(({style:e})=>Object(n.jsx)(g,{style:e,label:"Fork",path:"M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"}))),v=m(O,u,(({style:e})=>Object(n.jsx)(g,{style:e,width:"16",label:"Watch",path:"M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"}))),C=m({textDecoration:"none",padding:"2px 7px",fontSize:"11px",fontWeight:"bold",lineHeight:"20px",color:"#333",verticalAlign:"middle",backgroundColor:"#fff",border:"1px solid #ddd",borderLeft:"0",borderTopRightRadius:"3px",borderBottomRightRadius:"3px",float:"left"},{cursor:"pointer",color:"#4078c0"},"span"),w=({count:e,repo:t,buttonLink:c,countLink:a,type:r})=>Object(n.jsxs)("div",{style:{font:"13px / 1.4 Helvetica, Arial, sans-serif"},children:[Object(n.jsx)("a",{href:c||"".concat(p,"/").concat(t),children:s.a.createElement(r)}),Object(n.jsx)("a",{href:a||"".concat(p,"/").concat(t,"/stargazers"),children:Object(n.jsx)(C,{children:e})})]});class S extends a.Component{constructor(e){super(e),this.state={count:0}}componentDidMount(){!function(e,t){const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(c.readyState!==XMLHttpRequest.DONE||200!==c.status)return t(new Error("Failed to load stars"));try{const e=JSON.parse(c.responseText);return t(null,e)}catch(e){return t(e)}},c.open("GET","".concat("https://api.github.com","/repos/").concat(e)),c.send()}(this.props.repo,((e,t)=>e||this.setState({count:this.props.countFn(t)})))}render(){return Object(n.jsx)(w,Object(x.a)(Object(x.a)({},this.props),{},{count:this.state.count}))}}const k=e=>Object(n.jsx)(S,Object(x.a)(Object(x.a)({buttonLink:"".concat(p,"/").concat(e.repo),countLink:"".concat(p,"/").concat(e.repo,"/stargazers")},e),{},{type:f,countFn:e=>e.stargazers_count})),F=e=>Object(n.jsx)(S,Object(x.a)(Object(x.a)({buttonLink:"".concat(p,"/").concat(e.repo),countLink:"".concat(p,"/").concat(e.repo,"/network")},e),{},{type:N,countFn:e=>e.forks_count})),y=e=>Object(n.jsx)(S,Object(x.a)(Object(x.a)({buttonLink:"".concat(p,"/").concat(e.repo,"/subscription"),countLink:"".concat(p,"/").concat(e.repo,"/watchers")},e),{},{type:v,countFn:e=>e.watchers_count}));var z=function(){return Object(n.jsx)("div",{className:"props-table",children:Object(n.jsxs)("table",{id:"table",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Props"}),Object(n.jsx)("th",{children:"Type"}),Object(n.jsx)("th",{children:"Required"}),Object(n.jsx)("th",{children:"Default"}),Object(n.jsx)("th",{children:"Description"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"captchaText"}),Object(n.jsx)("td",{children:"Func"}),Object(n.jsx)("td",{children:"True"}),Object(n.jsx)("td",{children:"-"}),Object(n.jsx)("td",{children:"callback function for returning the captcha text"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"captchaLength"}),Object(n.jsx)("td",{children:"Number"}),Object(n.jsx)("td",{children:"True"}),Object(n.jsx)("td",{children:"6"}),Object(n.jsx)("td",{children:"length of captcha"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"captchaButtonClick"}),Object(n.jsx)("td",{children:"Func"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"-"}),Object(n.jsx)("td",{children:"callback function for captcha button click"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"onCanvasClick"}),Object(n.jsx)("td",{children:"Func"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"-"}),Object(n.jsx)("td",{children:"callback function for canvas button click"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"height"}),Object(n.jsx)("td",{children:"Number"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"50"}),Object(n.jsx)("td",{children:"height of captcha container in px"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"width"}),Object(n.jsx)("td",{children:"Number"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"100"}),Object(n.jsx)("td",{children:"width of captcha container in px"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"iconName"}),Object(n.jsx)("td",{children:"String"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"FiRefreshCw"}),Object(n.jsx)("td",{children:"Icon Name ( Use only react-icons library icons) url https://react-icons.github.io/react-icons/"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"iconColor"}),Object(n.jsx)("td",{children:"String"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"#fff"}),Object(n.jsx)("td",{children:"color of button icon"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"iconSize"}),Object(n.jsx)("td",{children:"String"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"1em"}),Object(n.jsx)("td",{children:"size of icon"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"fontSize"}),Object(n.jsx)("td",{children:"String"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"4em"}),Object(n.jsx)("td",{children:"size of font inside of captcha container"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"containerClassName"}),Object(n.jsx)("td",{children:"String"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"react-captcha"}),Object(n.jsx)("td",{children:"className for whole captcha container"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"iconWrapperClassName"}),Object(n.jsx)("td",{children:"String"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"react-captcha-icon-wrapper"}),Object(n.jsx)("td",{children:"className for button"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"canvasClassName"}),Object(n.jsx)("td",{children:"String"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"react-captcha-canvas"}),Object(n.jsx)("td",{children:"className for captcha canvas element"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"iconWrapperClassName"}),Object(n.jsx)("td",{children:"String"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"react-captcha-icon-wrapper"}),Object(n.jsx)("td",{children:"className for button"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"iconClassName"}),Object(n.jsx)("td",{children:"String"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"react-captcha-icon"}),Object(n.jsx)("td",{children:"className for icon"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"charactersInclude"}),Object(n.jsx)("td",{children:"String"}),Object(n.jsx)("td",{children:"False"}),Object(n.jsx)("td",{children:"0123456789abcdefghijklmnopqrstuvwxz ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%^&"}),Object(n.jsx)("td",{children:"string from which captcha will generate"})]})]})})};const L={code:({language:e,value:t})=>Object(n.jsx)(h.a,{style:b.a,language:e,children:t})};var R=()=>{const e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],r="Sample Component Code \u2705:\n\n~~~js\nimport React, { Component } from 'react'\nimport ReactCaptchaa from 'react-captchaa'\nimport 'react-captchaa/dist/index.css'\n\nclass Example extends Component {\n  render() {\n    return ( \n      <ReactCaptchaa\n      captchaText= {(captchaText) => {\n        console.log(captchaText)\n        // captcha text ".concat(c,"\n      }}\n      captchaLength= {6}\n      captchaButtonClick= {(e)=> {console.log(e)}}\n      onCanvasClick= {(e)=> {console.log(e)}}\n      height= {150}\n      width= {280}\n      iconName= {'FiRefreshCw'}\n      iconColor= {'#fff'}\n      fontSize= {'4em'}\n      iconSize= {'1em'}\n      containerClassName= {'react-captcha'}\n      iconWrapperClassName= {'react-captcha-icon-wrapper'}\n      canvasClassName= {'react-captcha-canvas'}\n      iconClassName= {'react-captcha-icon'}\n      charactersInclude= { \"0123456789abcdefghijklmnopqrs\n      tuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%^&\" }\n       />\n       \n       )\n  }\n}\n~~~\n");return Object(n.jsxs)("div",{className:"root-wrapper",children:[Object(n.jsxs)("div",{className:"github-badges-wrapper",children:[Object(n.jsx)(k,{className:"github-badge",repo:"alii13/react-captchaa"}),Object(n.jsx)(y,{className:"github-badge",repo:"alii13/react-captchaa"}),Object(n.jsx)(F,{className:"github-badge",repo:"alii13/react-captchaa"})]}),Object(n.jsxs)("div",{className:"parent-captcha-wrapper",children:[Object(n.jsxs)("div",{className:"sub-parent-captcha-wrapper",children:[Object(n.jsxs)("div",{className:"text-content",children:[Object(n.jsx)("h1",{className:"h1-heading title",children:"React Captchaa \u2764\ufe0f"}),Object(n.jsx)("p",{className:"text-grey",children:"A simple lightweight react component for generating captchas."})]}),Object(n.jsx)("div",{className:"captcha-wrapper",children:Object(n.jsx)(j.a,{captchaText:e=>{s(e)},captchaLength:6,height:150,width:280,iconColor:"#fff",iconName:"FiRefreshCw",iconSize:"1em",fontSize:"4em",containerClassName:"react-captcha",iconWrapperClassName:"react-captcha-icon-wrapper",canvasClassName:"react-captcha-canvas",iconClassName:"react-captcha-icon"})}),Object(n.jsx)("div",{className:"installation-code",children:Object(n.jsx)(o.a,{renderers:L,children:"To install, Hit this in terminal \ud83d\udc31\u200d\ud83c\udfcd:\n\n~~~js\nnpm install react-captchaa\n~~~\n"})})]}),Object(n.jsx)("div",{className:"component-code",children:Object(n.jsx)(o.a,{renderers:L,children:r})})]}),Object(n.jsx)(z,{}),Object(n.jsx)("footer",{className:"footer",children:Object(n.jsxs)("p",{children:["Made with \u2764\ufe0f by"," ",Object(n.jsx)("a",{className:"footer-link",href:"https://github.com/alii13",children:"Ali"})]})})]})};i.a.render(Object(n.jsx)(R,{}),document.getElementById("root"))},81:function(e,t,c){}},[[422,1,2]]]);
//# sourceMappingURL=main.d6bba2eb.chunk.js.map