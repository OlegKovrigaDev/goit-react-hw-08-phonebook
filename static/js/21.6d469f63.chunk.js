"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[21],{864:function(e,n,t){t.d(n,{W:function(){return a}});var o,r=t(168),a=t(5685).ZP.div(o||(o=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 90vh;\n  text-align: center;\n"])))},8021:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var o=t(3050),r=t(4420),a=t(8526),c=t(7989),i=t(4942),l=t(9439),s=t(2791),d=t(1418),u=t.n(d),p=t(7462),f=t(1413),b=t(4925),m=t(5179),v=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],h=(0,s.forwardRef)((function(e,n){var t,o=e.prefixCls,r=void 0===o?"rc-checkbox":o,a=e.className,c=e.style,d=e.checked,h=e.disabled,g=e.defaultChecked,x=void 0!==g&&g,y=e.type,Z=void 0===y?"checkbox":y,C=e.title,k=e.onChange,j=(0,b.Z)(e,v),O=(0,s.useRef)(null),w=(0,m.Z)(x,{value:d}),S=(0,l.Z)(w,2),E=S[0],I=S[1];(0,s.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=O.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=O.current)||void 0===e||e.blur()},input:O.current}}));var N=u()(r,a,(t={},(0,i.Z)(t,"".concat(r,"-checked"),E),(0,i.Z)(t,"".concat(r,"-disabled"),h),t));return s.createElement("span",{className:N,title:C,style:c},s.createElement("input",(0,p.Z)({},j,{className:"".concat(r,"-input"),ref:O,onChange:function(n){h||("checked"in e||I(n.target.checked),null===k||void 0===k||k({target:(0,f.Z)((0,f.Z)({},e),{},{type:Z,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:h,checked:!!E,type:Z})),s.createElement("span",{className:"".concat(r,"-inner")}))})),g=h,x=t(117),y=t(417),Z=t(1929),C=t(9125),k=t(7838),j=t(1940),O=s.createContext(null),w=t(9724),S=t(7521),E=t(9922),I=t(6562),N=function(e){var n,t,o,r,a,c,l,s,d=e.checkboxCls,u="".concat(d,"-wrapper");return[(o={},(0,i.Z)(o,"".concat(d,"-group"),Object.assign(Object.assign({},(0,S.Wf)(e)),(0,i.Z)({display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS},"> ".concat(e.antCls,"-row"),{flex:1}))),(0,i.Z)(o,u,Object.assign(Object.assign({},(0,S.Wf)(e)),(n={display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"}},(0,i.Z)(n,"& + ".concat(u),{marginInlineStart:0}),(0,i.Z)(n,"&".concat(u,"-in-form-item"),{'input[type="checkbox"]':{width:14,height:14}}),n))),(0,i.Z)(o,d,Object.assign(Object.assign({},(0,S.Wf)(e)),(t={position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center"},(0,i.Z)(t,"".concat(d,"-input"),(0,i.Z)({position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0},"&:focus-visible + ".concat(d,"-inner"),Object.assign({},(0,S.oN)(e)))),(0,i.Z)(t,"".concat(d,"-inner"),{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:"".concat((0,w.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:"all ".concat(e.motionDurationSlow),"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:"".concat((0,w.bf)(e.lineWidthBold)," solid ").concat(e.colorWhite),borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:"all ".concat(e.motionDurationFast," ").concat(e.motionEaseInBack,", opacity ").concat(e.motionDurationFast)}}),(0,i.Z)(t,"& + span",{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}),t))),o),(a={},(0,i.Z)(a,"\n        ".concat(u,":not(").concat(u,"-disabled),\n        ").concat(d,":not(").concat(d,"-disabled)\n      "),(0,i.Z)({},"&:hover ".concat(d,"-inner"),{borderColor:e.colorPrimary})),(0,i.Z)(a,"".concat(u,":not(").concat(u,"-disabled)"),(r={},(0,i.Z)(r,"&:hover ".concat(d,"-checked:not(").concat(d,"-disabled) ").concat(d,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}),(0,i.Z)(r,"&:hover ".concat(d,"-checked:not(").concat(d,"-disabled):after"),{borderColor:e.colorPrimaryHover}),r)),a),(c={},(0,i.Z)(c,"".concat(d,"-checked"),(0,i.Z)({},"".concat(d,"-inner"),{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:"all ".concat(e.motionDurationMid," ").concat(e.motionEaseOutBack," ").concat(e.motionDurationFast)}})),(0,i.Z)(c,"\n        ".concat(u,"-checked:not(").concat(u,"-disabled),\n        ").concat(d,"-checked:not(").concat(d,"-disabled)\n      "),(0,i.Z)({},"&:hover ".concat(d,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"})),c),(0,i.Z)({},d,{"&-indeterminate":(0,i.Z)({},"".concat(d,"-inner"),{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}})}),(s={},(0,i.Z)(s,"".concat(u,"-disabled"),{cursor:"not-allowed"}),(0,i.Z)(s,"".concat(d,"-disabled"),(l={},(0,i.Z)(l,"&, ".concat(d,"-input"),{cursor:"not-allowed",pointerEvents:"none"}),(0,i.Z)(l,"".concat(d,"-inner"),{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}}),(0,i.Z)(l,"&:after",{display:"none"}),(0,i.Z)(l,"& + span",{color:e.colorTextDisabled}),(0,i.Z)(l,"&".concat(d,"-indeterminate ").concat(d,"-inner::after"),{background:e.colorTextDisabled}),l)),s)]};function P(e,n){var t=(0,E.TS)(n,{checkboxCls:".".concat(e),checkboxSize:n.controlInteractiveSize});return[N(t)]}var z=(0,I.I$)("Checkbox",(function(e,n){return[P(n.prefixCls,e)]})),B=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},D=function(e,n){var t,o,r=e.prefixCls,a=e.className,c=e.rootClassName,d=e.children,p=e.indeterminate,f=void 0!==p&&p,b=e.style,m=e.onMouseEnter,v=e.onMouseLeave,h=e.skipGroup,w=void 0!==h&&h,S=e.disabled,E=B(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),I=s.useContext(Z.E_),N=I.getPrefixCls,P=I.direction,D=I.checkbox,M=s.useContext(O),R=s.useContext(j.aM).isFormItemInput,_=s.useContext(C.Z),q=null!==(o=(null===M||void 0===M?void 0:M.disabled)||S)&&void 0!==o?o:_,V=s.useRef(E.value);s.useEffect((function(){null===M||void 0===M||M.registerValue(E.value)}),[]),s.useEffect((function(){if(!w)return E.value!==V.current&&(null===M||void 0===M||M.cancelValue(V.current),null===M||void 0===M||M.registerValue(E.value),V.current=E.value),function(){return null===M||void 0===M?void 0:M.cancelValue(E.value)}}),[E.value]);var W=N("checkbox",r),T=(0,k.Z)(W),L=z(W,T),G=(0,l.Z)(L,3),H=G[0],F=G[1],X=G[2],A=Object.assign({},E);M&&!w&&(A.onChange=function(){E.onChange&&E.onChange.apply(E,arguments),M.toggleOption&&M.toggleOption({label:d,value:E.value})},A.name=M.name,A.checked=M.value.includes(E.value));var K=u()("".concat(W,"-wrapper"),(t={},(0,i.Z)(t,"".concat(W,"-rtl"),"rtl"===P),(0,i.Z)(t,"".concat(W,"-wrapper-checked"),A.checked),(0,i.Z)(t,"".concat(W,"-wrapper-disabled"),q),(0,i.Z)(t,"".concat(W,"-wrapper-in-form-item"),R),t),null===D||void 0===D?void 0:D.className,a,c,X,T,F),$=u()((0,i.Z)({},"".concat(W,"-indeterminate"),f),y.A,F),J=f?"mixed":void 0;return H(s.createElement(x.Z,{component:"Checkbox",disabled:q},s.createElement("label",{className:K,style:Object.assign(Object.assign({},null===D||void 0===D?void 0:D.style),b),onMouseEnter:m,onMouseLeave:v},s.createElement(g,Object.assign({"aria-checked":J},A,{prefixCls:W,className:$,disabled:q,ref:n})),void 0!==d&&s.createElement("span",null,d))))};var M=s.forwardRef(D),R=t(3433),_=t(1818),q=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},V=function(e,n){var t=e.defaultValue,o=e.children,r=e.options,a=void 0===r?[]:r,c=e.prefixCls,d=e.className,p=e.rootClassName,f=e.style,b=e.onChange,m=q(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),v=s.useContext(Z.E_),h=v.getPrefixCls,g=v.direction,x=s.useState(m.value||t||[]),y=(0,l.Z)(x,2),C=y[0],j=y[1],w=s.useState([]),S=(0,l.Z)(w,2),E=S[0],I=S[1];s.useEffect((function(){"value"in m&&j(m.value||[])}),[m.value]);var N=s.useMemo((function(){return a.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))}),[a]),P=h("checkbox",c),B="".concat(P,"-group"),D=(0,k.Z)(P),V=z(P,D),W=(0,l.Z)(V,3),T=W[0],L=W[1],G=W[2],H=(0,_.Z)(m,["value","disabled"]),F=a.length?N.map((function(e){return s.createElement(M,{prefixCls:P,key:e.value.toString(),disabled:"disabled"in e?e.disabled:m.disabled,value:e.value,checked:C.includes(e.value),onChange:e.onChange,className:"".concat(B,"-item"),style:e.style,title:e.title,id:e.id,required:e.required},e.label)})):o,X={toggleOption:function(e){var n=C.indexOf(e.value),t=(0,R.Z)(C);-1===n?t.push(e.value):t.splice(n,1),"value"in m||j(t),null===b||void 0===b||b(t.filter((function(e){return E.includes(e)})).sort((function(e,n){return N.findIndex((function(n){return n.value===e}))-N.findIndex((function(e){return e.value===n}))})))},value:C,disabled:m.disabled,name:m.name,registerValue:function(e){I((function(n){return[].concat((0,R.Z)(n),[e])}))},cancelValue:function(e){I((function(n){return n.filter((function(n){return n!==e}))}))}},A=u()(B,(0,i.Z)({},"".concat(B,"-rtl"),"rtl"===g),d,p,G,D,L);return T(s.createElement("div",Object.assign({className:A,style:f},H,{ref:n}),s.createElement(O.Provider,{value:X},F)))},W=s.forwardRef(V),T=s.memo(W),L=M;L.Group=T,L.__ANT_CHECKBOX=!0;var G=L,H=t(2641),F=t(9529),X=t(8999),A=t(8724),K=t(3329),$=function(){var e=(0,r.I0)();return(0,K.jsxs)(a.Z,{name:"normal_login",className:"login-form",initialValues:{remember:!1},onFinish:function(n){e((0,A.Ib)(n))},children:[(0,K.jsx)(a.Z.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:(0,K.jsx)(c.Z,{prefix:(0,K.jsx)(F.Z,{className:"site-form-item-icon"}),placeholder:"Email",size:"large"})}),(0,K.jsx)(a.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:(0,K.jsx)(c.Z,{prefix:(0,K.jsx)(X.Z,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",size:"large"})}),(0,K.jsx)(a.Z.Item,{children:(0,K.jsx)(a.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,K.jsx)(G,{children:"Remember me"})})}),(0,K.jsx)(a.Z.Item,{children:(0,K.jsx)(H.ZP,{block:!0,size:"large",type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})})]})},J=t(864);function Q(){return(0,K.jsx)(o.B6,{children:(0,K.jsxs)("div",{children:[(0,K.jsx)(o.ql,{children:(0,K.jsx)("title",{children:"Login"})}),(0,K.jsx)(J.W,{children:(0,K.jsx)($,{})})]})})}}}]);
//# sourceMappingURL=21.6d469f63.chunk.js.map