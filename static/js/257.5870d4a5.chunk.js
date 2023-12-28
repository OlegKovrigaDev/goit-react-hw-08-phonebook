"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{2257:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var o=t(3050),a=t(4420),r=t(8526),c=t(7989),i=t(4942),l=t(9439),s=t(2791),d=t(1418),u=t.n(d),p=t(7462),f=t(1413),b=t(4925),m=t(5179),v=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],h=(0,s.forwardRef)((function(e,n){var t,o=e.prefixCls,a=void 0===o?"rc-checkbox":o,r=e.className,c=e.style,d=e.checked,h=e.disabled,g=e.defaultChecked,x=void 0!==g&&g,y=e.type,Z=void 0===y?"checkbox":y,C=e.title,k=e.onChange,j=(0,b.Z)(e,v),w=(0,s.useRef)(null),O=(0,m.Z)(x,{value:d}),S=(0,l.Z)(O,2),E=S[0],I=S[1];(0,s.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=w.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=w.current)||void 0===e||e.blur()},input:w.current}}));var N=u()(a,r,(t={},(0,i.Z)(t,"".concat(a,"-checked"),E),(0,i.Z)(t,"".concat(a,"-disabled"),h),t));return s.createElement("span",{className:N,title:C,style:c},s.createElement("input",(0,p.Z)({},j,{className:"".concat(a,"-input"),ref:w,onChange:function(n){h||("checked"in e||I(n.target.checked),null===k||void 0===k||k({target:(0,f.Z)((0,f.Z)({},e),{},{type:Z,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:h,checked:!!E,type:Z})),s.createElement("span",{className:"".concat(a,"-inner")}))})),g=h,x=t(117),y=t(417),Z=t(1929),C=t(9125),k=t(7838),j=t(1940),w=s.createContext(null),O=t(9724),S=t(7521),E=t(9922),I=t(6562),N=function(e){var n,t,o,a,r,c,l,s,d=e.checkboxCls,u="".concat(d,"-wrapper");return[(o={},(0,i.Z)(o,"".concat(d,"-group"),Object.assign(Object.assign({},(0,S.Wf)(e)),(0,i.Z)({display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS},"> ".concat(e.antCls,"-row"),{flex:1}))),(0,i.Z)(o,u,Object.assign(Object.assign({},(0,S.Wf)(e)),(n={display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"}},(0,i.Z)(n,"& + ".concat(u),{marginInlineStart:0}),(0,i.Z)(n,"&".concat(u,"-in-form-item"),{'input[type="checkbox"]':{width:14,height:14}}),n))),(0,i.Z)(o,d,Object.assign(Object.assign({},(0,S.Wf)(e)),(t={position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center"},(0,i.Z)(t,"".concat(d,"-input"),(0,i.Z)({position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0},"&:focus-visible + ".concat(d,"-inner"),Object.assign({},(0,S.oN)(e)))),(0,i.Z)(t,"".concat(d,"-inner"),{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:"".concat((0,O.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:"all ".concat(e.motionDurationSlow),"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:"".concat((0,O.bf)(e.lineWidthBold)," solid ").concat(e.colorWhite),borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:"all ".concat(e.motionDurationFast," ").concat(e.motionEaseInBack,", opacity ").concat(e.motionDurationFast)}}),(0,i.Z)(t,"& + span",{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}),t))),o),(r={},(0,i.Z)(r,"\n        ".concat(u,":not(").concat(u,"-disabled),\n        ").concat(d,":not(").concat(d,"-disabled)\n      "),(0,i.Z)({},"&:hover ".concat(d,"-inner"),{borderColor:e.colorPrimary})),(0,i.Z)(r,"".concat(u,":not(").concat(u,"-disabled)"),(a={},(0,i.Z)(a,"&:hover ".concat(d,"-checked:not(").concat(d,"-disabled) ").concat(d,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}),(0,i.Z)(a,"&:hover ".concat(d,"-checked:not(").concat(d,"-disabled):after"),{borderColor:e.colorPrimaryHover}),a)),r),(c={},(0,i.Z)(c,"".concat(d,"-checked"),(0,i.Z)({},"".concat(d,"-inner"),{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:"all ".concat(e.motionDurationMid," ").concat(e.motionEaseOutBack," ").concat(e.motionDurationFast)}})),(0,i.Z)(c,"\n        ".concat(u,"-checked:not(").concat(u,"-disabled),\n        ").concat(d,"-checked:not(").concat(d,"-disabled)\n      "),(0,i.Z)({},"&:hover ".concat(d,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"})),c),(0,i.Z)({},d,{"&-indeterminate":(0,i.Z)({},"".concat(d,"-inner"),{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}})}),(s={},(0,i.Z)(s,"".concat(u,"-disabled"),{cursor:"not-allowed"}),(0,i.Z)(s,"".concat(d,"-disabled"),(l={},(0,i.Z)(l,"&, ".concat(d,"-input"),{cursor:"not-allowed",pointerEvents:"none"}),(0,i.Z)(l,"".concat(d,"-inner"),{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}}),(0,i.Z)(l,"&:after",{display:"none"}),(0,i.Z)(l,"& + span",{color:e.colorTextDisabled}),(0,i.Z)(l,"&".concat(d,"-indeterminate ").concat(d,"-inner::after"),{background:e.colorTextDisabled}),l)),s)]};function P(e,n){var t=(0,E.TS)(n,{checkboxCls:".".concat(e),checkboxSize:n.controlInteractiveSize});return[N(t)]}var z=(0,I.I$)("Checkbox",(function(e,n){return[P(n.prefixCls,e)]})),M=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},V=function(e,n){var t,o,a=e.prefixCls,r=e.className,c=e.rootClassName,d=e.children,p=e.indeterminate,f=void 0!==p&&p,b=e.style,m=e.onMouseEnter,v=e.onMouseLeave,h=e.skipGroup,O=void 0!==h&&h,S=e.disabled,E=M(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),I=s.useContext(Z.E_),N=I.getPrefixCls,P=I.direction,V=I.checkbox,B=s.useContext(w),D=s.useContext(j.aM).isFormItemInput,R=s.useContext(C.Z),_=null!==(o=(null===B||void 0===B?void 0:B.disabled)||S)&&void 0!==o?o:R,q=s.useRef(E.value);s.useEffect((function(){null===B||void 0===B||B.registerValue(E.value)}),[]),s.useEffect((function(){if(!O)return E.value!==q.current&&(null===B||void 0===B||B.cancelValue(q.current),null===B||void 0===B||B.registerValue(E.value),q.current=E.value),function(){return null===B||void 0===B?void 0:B.cancelValue(E.value)}}),[E.value]);var H=N("checkbox",a),T=(0,k.Z)(H),L=z(H,T),W=(0,l.Z)(L,3),G=W[0],F=W[1],X=W[2],A=Object.assign({},E);B&&!O&&(A.onChange=function(){E.onChange&&E.onChange.apply(E,arguments),B.toggleOption&&B.toggleOption({label:d,value:E.value})},A.name=B.name,A.checked=B.value.includes(E.value));var K=u()("".concat(H,"-wrapper"),(t={},(0,i.Z)(t,"".concat(H,"-rtl"),"rtl"===P),(0,i.Z)(t,"".concat(H,"-wrapper-checked"),A.checked),(0,i.Z)(t,"".concat(H,"-wrapper-disabled"),_),(0,i.Z)(t,"".concat(H,"-wrapper-in-form-item"),D),t),null===V||void 0===V?void 0:V.className,r,c,X,T,F),$=u()((0,i.Z)({},"".concat(H,"-indeterminate"),f),y.A,F),J=f?"mixed":void 0;return G(s.createElement(x.Z,{component:"Checkbox",disabled:_},s.createElement("label",{className:K,style:Object.assign(Object.assign({},null===V||void 0===V?void 0:V.style),b),onMouseEnter:m,onMouseLeave:v},s.createElement(g,Object.assign({"aria-checked":J},A,{prefixCls:H,className:$,disabled:_,ref:n})),void 0!==d&&s.createElement("span",null,d))))};var B=s.forwardRef(V),D=t(3433),R=t(1818),_=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},q=function(e,n){var t=e.defaultValue,o=e.children,a=e.options,r=void 0===a?[]:a,c=e.prefixCls,d=e.className,p=e.rootClassName,f=e.style,b=e.onChange,m=_(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),v=s.useContext(Z.E_),h=v.getPrefixCls,g=v.direction,x=s.useState(m.value||t||[]),y=(0,l.Z)(x,2),C=y[0],j=y[1],O=s.useState([]),S=(0,l.Z)(O,2),E=S[0],I=S[1];s.useEffect((function(){"value"in m&&j(m.value||[])}),[m.value]);var N=s.useMemo((function(){return r.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))}),[r]),P=h("checkbox",c),M="".concat(P,"-group"),V=(0,k.Z)(P),q=z(P,V),H=(0,l.Z)(q,3),T=H[0],L=H[1],W=H[2],G=(0,R.Z)(m,["value","disabled"]),F=r.length?N.map((function(e){return s.createElement(B,{prefixCls:P,key:e.value.toString(),disabled:"disabled"in e?e.disabled:m.disabled,value:e.value,checked:C.includes(e.value),onChange:e.onChange,className:"".concat(M,"-item"),style:e.style,title:e.title,id:e.id,required:e.required},e.label)})):o,X={toggleOption:function(e){var n=C.indexOf(e.value),t=(0,D.Z)(C);-1===n?t.push(e.value):t.splice(n,1),"value"in m||j(t),null===b||void 0===b||b(t.filter((function(e){return E.includes(e)})).sort((function(e,n){return N.findIndex((function(n){return n.value===e}))-N.findIndex((function(e){return e.value===n}))})))},value:C,disabled:m.disabled,name:m.name,registerValue:function(e){I((function(n){return[].concat((0,D.Z)(n),[e])}))},cancelValue:function(e){I((function(n){return n.filter((function(n){return n!==e}))}))}},A=u()(M,(0,i.Z)({},"".concat(M,"-rtl"),"rtl"===g),d,p,W,V,L);return T(s.createElement("div",Object.assign({className:A,style:f},G,{ref:n}),s.createElement(w.Provider,{value:X},F)))},H=s.forwardRef(q),T=s.memo(H),L=B;L.Group=T,L.__ANT_CHECKBOX=!0;var W=L,G=t(2641),F=t(9529),X={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},A=t(4291),K=function(e,n){return s.createElement(A.Z,(0,p.Z)({},e,{ref:n,icon:X}))};var $=s.forwardRef(K),J=t(8724),Q=t(3329),U=function(){var e=(0,a.I0)();return(0,Q.jsxs)(r.Z,{name:"normal_login",className:"login-form",initialValues:{remember:!1},onFinish:function(n){e((0,J.Ib)(n))},children:[(0,Q.jsx)(r.Z.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:(0,Q.jsx)(c.Z,{prefix:(0,Q.jsx)(F.Z,{className:"site-form-item-icon"}),placeholder:"Email"})}),(0,Q.jsx)(r.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:(0,Q.jsx)(c.Z,{prefix:(0,Q.jsx)($,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),(0,Q.jsx)(r.Z.Item,{children:(0,Q.jsx)(r.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,Q.jsx)(W,{children:"Remember me"})})}),(0,Q.jsx)(r.Z.Item,{children:(0,Q.jsx)(G.ZP,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})})]})};function Y(){return(0,Q.jsx)(o.B6,{children:(0,Q.jsxs)("div",{children:[(0,Q.jsx)(o.ql,{children:(0,Q.jsx)("title",{children:"Login"})}),(0,Q.jsx)(U,{})]})})}}}]);
//# sourceMappingURL=257.5870d4a5.chunk.js.map