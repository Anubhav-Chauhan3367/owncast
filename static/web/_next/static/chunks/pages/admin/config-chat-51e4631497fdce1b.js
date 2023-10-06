(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{83514:function(e,t,n){"use strict";var s=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),r=a(n(38416)),i=a(n(94184)),o=s(n(67294)),c=n(31929),__rest=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)0>t.indexOf(s[a])&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(n[s[a]]=e[s[a]]);return n};t.default=function(e){var t,n=e.prefixCls,s=e.className,a=e.checked,d=e.onChange,u=e.onClick,f=__rest(e,["prefixCls","className","checked","onChange","onClick"]),g=(0,o.useContext(c.ConfigContext).getPrefixCls)("tag",n),h=(0,i.default)(g,(t={},(0,r.default)(t,"".concat(g,"-checkable"),!0),(0,r.default)(t,"".concat(g,"-checkable-checked"),a),t),s);return o.createElement("span",(0,l.default)({},f,{className:h,onClick:function(e){null==d||d(!a),null==u||u(e)}}))}},59361:function(e,t,n){"use strict";var s=n(75263).default,a=n(64836).default;t.Z=void 0;var l=a(n(38416)),r=a(n(10434)),i=a(n(27424)),o=a(n(40753)),c=a(n(94184)),d=a(n(18475)),u=s(n(67294)),f=n(31929),g=n(45471),h=a(n(61539));a(n(13594));var m=a(n(83514)),__rest=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)0>t.indexOf(s[a])&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(n[s[a]]=e[s[a]]);return n},p=new RegExp("^(".concat(g.PresetColorTypes.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(g.PresetStatusColorTypes.join("|"),")$")),v=u.forwardRef(function(e,t){var n,s=e.prefixCls,a=e.className,g=e.style,m=e.children,v=e.icon,C=e.color,x=e.onClose,j=e.closeIcon,N=e.closable,S=void 0!==N&&N,k=__rest(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),y=u.useContext(f.ConfigContext),E=y.getPrefixCls,U=y.direction,w=u.useState(!0),P=(0,i.default)(w,2),O=P[0],_=P[1];u.useEffect(function(){"visible"in k&&_(k.visible)},[k.visible]);var isPresetColor=function(){return!!C&&(p.test(C)||b.test(C))},T=(0,r.default)({backgroundColor:C&&!isPresetColor()?C:void 0},g),F=isPresetColor(),D=E("tag",s),I=(0,c.default)(D,(n={},(0,l.default)(n,"".concat(D,"-").concat(C),F),(0,l.default)(n,"".concat(D,"-has-color"),C&&!F),(0,l.default)(n,"".concat(D,"-hidden"),!O),(0,l.default)(n,"".concat(D,"-rtl"),"rtl"===U),n),a),handleCloseClick=function(e){e.stopPropagation(),null==x||x(e),!e.defaultPrevented&&("visible"in k||_(!1))},Z="onClick"in k||m&&"a"===m.type,M=(0,d.default)(k,["visible"]),A=v||null,J=A?u.createElement(u.Fragment,null,A,u.createElement("span",null,m)):m,V=u.createElement("span",(0,r.default)({},M,{ref:t,className:I,style:T}),J,S?j?u.createElement("span",{className:"".concat(D,"-close-icon"),onClick:handleCloseClick},j):u.createElement(o.default,{className:"".concat(D,"-close-icon"),onClick:handleCloseClick}):null);return Z?u.createElement(h.default,null,V):V});v.CheckableTag=m.default,t.Z=v},13882:function(e,t,n){"use strict";function requiredArgs(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return requiredArgs}})},19013:function(e,t,n){"use strict";n.d(t,{Z:function(){return toDate}});var s=n(71002),a=n(13882);function toDate(e){(0,a.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,s.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},42011:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-chat",function(){return n(351)}])},62642:function(e,t,n){"use strict";n.d(t,{Q:function(){return d},Y:function(){return EditValueArray}});var s=n(85893),a=n(67294),l=n(53740),r=n(59361),i=n(34568),o=n(50988);let{Title:c}=l.default,d="#5a67d8",EditValueArray=e=>{let{title:t,description:n,placeholder:l,maxLength:u,values:f,handleDeleteIndex:g,handleCreateString:h,submitStatus:m,continuousStatusMessage:p}=e,[b,v]=(0,a.useState)("");return(0,s.jsxs)("div",{className:"edit-string-array-container",children:[(0,s.jsx)(c,{level:3,className:"section-title",children:t}),(0,s.jsx)("p",{className:"description",children:n}),(0,s.jsx)("div",{className:"edit-current-strings",children:null==f?void 0:f.map((e,t)=>(0,s.jsx)(r.Z,{closable:!0,onClose:()=>{g(t)},color:d,children:e},"tag-".concat(e,"-").concat(t)))}),p&&(0,s.jsx)("div",{className:"continuous-status-section",children:(0,s.jsx)(o.E,{status:p})}),(0,s.jsx)("div",{className:"add-new-string-section",children:(0,s.jsx)(i.nv,{fieldName:"string-input",value:b,onChange:e=>{let{value:t}=e;v(t)},onPressEnter:()=>{let e=b.trim();h(e),v("")},maxLength:u,placeholder:l,status:m})})]})};EditValueArray.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},80910:function(e,t,n){"use strict";n.d(t,{Z:function(){return ToggleSwitch}});var s=n(85893),a=n(67294),l=n(40987),r=n(24770),i=n(50988),o=n(42124),c=n(3273);let ToggleSwitch=e=>{let{apiPath:t,checked:n,reversed:d=!1,configPath:u="",disabled:f=!1,fieldName:g,label:h,tip:m,useSubmit:p,onChange:b}=e,[v,C]=(0,a.useState)(null),x=null,j=(0,a.useContext)(c.a),{setFieldInConfigState:N}=j||{},resetStates=()=>{C(null),clearTimeout(x),x=null},handleChange=async e=>{if(p){C((0,r.kg)(r.Jk));let n=d?!e:e;await (0,o.Si)({apiPath:t,data:{value:n},onSuccess:()=>{N({fieldName:g,value:n,path:u}),C((0,r.kg)(r.zv))},onError:e=>{C((0,r.kg)(r.Un,"There was an error: ".concat(e)))}}),x=setTimeout(resetStates,o.sI)}b&&b(e)},S=null!==v&&v.type===r.Jk;return(0,s.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[h&&(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:h})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)(l.Z,{className:"switch field-".concat(g),loading:S,onChange:handleChange,defaultChecked:n,checked:n,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:f}),(0,s.jsx)(i.E,{status:v})]}),(0,s.jsx)("p",{className:"field-tip",children:m})]})]})};ToggleSwitch.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},351:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ConfigChat}});var s=n(85893),a=n(53740),l=n(67294),r=n(34568),i=n(28567),o=n(80910),c=n(62642),d=n(24770),u=n(42124),f=n(3273),g=n(90695);function ConfigChat(){var e;let{Title:t}=a.default,[n,g]=(0,l.useState)(null),[h,m]=(0,l.useState)(null),[p,b]=(0,l.useState)(null),v=(0,l.useContext)(f.a),{serverConfig:C,setFieldInConfigState:x}=v||{},{chatDisabled:j,chatJoinMessagesEnabled:N,forbiddenUsernames:S,instanceDetails:k,suggestedUsernames:y,chatEstablishedUserMode:E}=C,{welcomeMessage:U}=k,handleFieldChange=e=>{let{fieldName:t,value:s}=e;g({...n,[t]:s})};function resetForbiddenUsernameState(){m(null)}function saveForbiddenUsernames(){(0,u.Si)({apiPath:u.CJ,data:{value:n.forbiddenUsernames},onSuccess:()=>{x({fieldName:"forbiddenUsernames",value:n.forbiddenUsernames}),m((0,d.kg)(d.zv)),setTimeout(resetForbiddenUsernameState,u.sI)},onError:e=>{m((0,d.kg)(d.Un,e)),setTimeout(resetForbiddenUsernameState,u.sI)}})}function resetSuggestedUsernameState(){b(null)}function saveSuggestedUsernames(){(0,u.Si)({apiPath:u.cf,data:{value:n.suggestedUsernames},onSuccess:()=>{x({fieldName:"suggestedUsernames",value:n.suggestedUsernames}),b((0,d.kg)(d.zv)),setTimeout(resetSuggestedUsernameState,u.sI)},onError:e=>{m((0,d.kg)(d.Un,e)),setTimeout(resetSuggestedUsernameState,u.sI)}})}return((0,l.useEffect)(()=>{g({chatDisabled:j,chatJoinMessagesEnabled:N,forbiddenUsernames:S,suggestedUsernames:y,welcomeMessage:U,chatEstablishedUserMode:E})},[C]),n)?(0,s.jsxs)("div",{className:"config-server-details-form",children:[(0,s.jsx)(t,{children:"Chat Settings"}),(0,s.jsxs)("div",{className:"form-module config-server-details-container",children:[(0,s.jsx)(o.Z,{fieldName:"chatDisabled",...u.yj,checked:!n.chatDisabled,reversed:!0,onChange:function(e){handleFieldChange({fieldName:"chatDisabled",value:!e})}}),(0,s.jsx)(o.Z,{fieldName:"chatJoinMessagesEnabled",...u.kB,checked:n.chatJoinMessagesEnabled,onChange:function(e){handleFieldChange({fieldName:"chatJoinMessagesEnabled",value:e})}}),(0,s.jsx)(o.Z,{fieldName:"chatEstablishedUserMode",...u.dj,checked:n.chatEstablishedUserMode,onChange:function(e){handleFieldChange({fieldName:"chatEstablishedUserMode",value:e})}}),(0,s.jsx)(i.$7,{fieldName:"welcomeMessage",...u.IX,type:r.Sk,value:n.welcomeMessage,initialValue:U,onChange:handleFieldChange}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(c.Y,{title:u.Dg.label,placeholder:u.Dg.placeholder,description:u.Dg.tip,values:n.forbiddenUsernames,handleDeleteIndex:function(e){n.forbiddenUsernames.splice(e,1),saveForbiddenUsernames()},handleCreateString:function(e){n.forbiddenUsernames.push(e),handleFieldChange({fieldName:"forbiddenUsernames",value:n.forbiddenUsernames}),saveForbiddenUsernames()},submitStatus:h}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(c.Y,{title:u.AN.label,placeholder:u.AN.placeholder,description:u.AN.tip,values:n.suggestedUsernames,handleDeleteIndex:function(e){n.suggestedUsernames.splice(e,1),saveSuggestedUsernames()},handleCreateString:function(e){n.suggestedUsernames.push(e),handleFieldChange({fieldName:"suggestedUsernames",value:n.suggestedUsernames}),saveSuggestedUsernames()},submitStatus:p,continuousStatusMessage:0===(e=n.suggestedUsernames.length)?(0,d.kg)("success",u.AN.no_entries):e>0&&e<10?(0,d.kg)("warning",u.AN.min_not_reached):null})]})]}):null}ConfigChat.getLayout=function(e){return(0,s.jsx)(g.l,{page:e})}}},function(e){e.O(0,[5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,4938,695,9774,2888,179],function(){return e(e.s=42011)}),_N_E=e.O()}]);