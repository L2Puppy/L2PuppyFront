(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[12],{137:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var o=/iPhone/i,a=/iPod/i,c=/iPad/i,i=/\biOS-universal(?:.+)Mac\b/i,r=/\bAndroid(?:.+)Mobile\b/i,l=/Android/i,s=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,u=/Silk/i,f=/Windows Phone/i,d=/\bWindows(?:.+)ARM\b/i,m=/BlackBerry/i,p=/BB10/i,b=/Opera Mini/i,g=/\b(CriOS|Chrome)(?:.+)Mobile/i,v=/Mobile(?:.+)Firefox\b/i,O=function(t){return"undefined"!==typeof t&&"MacIntel"===t.platform&&"number"===typeof t.maxTouchPoints&&t.maxTouchPoints>1&&"undefined"===typeof MSStream};function y(t){var e={userAgent:"",platform:"",maxTouchPoints:0};t||"undefined"===typeof navigator?"string"===typeof t?e.userAgent=t:t&&t.userAgent&&(e={userAgent:t.userAgent,platform:t.platform,maxTouchPoints:t.maxTouchPoints||0}):e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var n=e.userAgent,y=n.split("[FBAN");"undefined"!==typeof y[1]&&(n=y[0]),"undefined"!==typeof(y=n.split("Twitter"))[1]&&(n=y[0]);var h=function(t){return function(e){return e.test(t)}}(n),j={apple:{phone:h(o)&&!h(f),ipod:h(a),tablet:!h(o)&&(h(c)||O(e))&&!h(f),universal:h(i),device:(h(o)||h(a)||h(c)||h(i)||O(e))&&!h(f)},amazon:{phone:h(s),tablet:!h(s)&&h(u),device:h(s)||h(u)},android:{phone:!h(f)&&h(s)||!h(f)&&h(r),tablet:!h(f)&&!h(s)&&!h(r)&&(h(u)||h(l)),device:!h(f)&&(h(s)||h(u)||h(r)||h(l))||h(/\bokhttp\b/i)},windows:{phone:h(f),tablet:h(d),device:h(f)||h(d)},other:{blackberry:h(m),blackberry10:h(p),opera:h(b),firefox:h(v),chrome:h(g),device:h(m)||h(p)||h(b)||h(v)||h(g)},any:!1,phone:!1,tablet:!1};return j.any=j.apple.device||j.android.device||j.windows.device||j.other.device,j.phone=j.apple.phone||j.android.phone||j.windows.phone,j.tablet=j.apple.tablet||j.android.tablet||j.windows.tablet,j}},191:function(t,e,n){"use strict";var o=n(8),a=n(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"},i=n(111),r=function(t,e){return a.createElement(i.a,Object(o.a)(Object(o.a)({},t),{},{ref:e,icon:c}))};r.displayName="CloseCircleFilled";e.a=a.forwardRef(r)},192:function(t,e,n){"use strict";var o=n(8),a=n(0),c={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},i=n(111),r=function(t,e){return a.createElement(i.a,Object(o.a)(Object(o.a)({},t),{},{ref:e,icon:c}))};r.displayName="LoadingOutlined";e.a=a.forwardRef(r)},413:function(t,e,n){"use strict";var o,a=n(6),c=(n(9),n(13),n(11)),i=n(8),r=n(79),l=Object(i.a)({},r),s=l.version,u=l.render;l.unmountComponentAtNode;try{Number((s||"").split(".")[0])>=18&&(o=l.createRoot)}catch(dt){}function f(t){var e=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e&&"object"===Object(c.a)(e)&&(e.usingClientEntryPoint=t)}var d="__rc_react_root__";function m(t,e){o?function(t,e){f(!0);var n=e[d]||o(e);f(!1),n.render(t),e[d]=n}(t,e):function(t,e){u(t,e)}(t,e)}var p=n(0),b=n(100),g=n(7),v=n(192),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},y=n(111),h=function(t,e){return p.createElement(y.a,Object(i.a)(Object(i.a)({},t),{},{ref:e,icon:O}))};h.displayName="ExclamationCircleFilled";var j=p.forwardRef(h),x=n(191),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},E=function(t,e){return p.createElement(y.a,Object(i.a)(Object(i.a)({},t),{},{ref:e,icon:C}))};E.displayName="CheckCircleFilled";var w=p.forwardRef(E),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},k=function(t,e){return p.createElement(y.a,Object(i.a)(Object(i.a)({},t),{},{ref:e,icon:S}))};k.displayName="InfoCircleFilled";var N=p.forwardRef(k),I=n(190),P=n(3),M=n(24),R=n(32),z=n(163),B=n(106),_=n.n(B),L=n(141),A=p.forwardRef((function(t,e){var n=t.prefixCls,o=t.style,c=t.className,i=t.duration,r=void 0===i?4.5:i,l=t.eventKey,s=t.content,u=t.closable,f=t.closeIcon,d=void 0===f?"x":f,m=t.props,b=t.onClick,v=t.onNoticeClose,O=t.times,y=p.useState(!1),h=Object(a.a)(y,2),j=h[0],x=h[1],C=function(){v(l)};p.useEffect((function(){if(!j&&r>0){var t=setTimeout((function(){C()}),1e3*r);return function(){clearTimeout(t)}}}),[r,j,O]);var E="".concat(n,"-notice");return p.createElement("div",Object(R.a)({},m,{ref:e,className:_()(E,c,Object(g.a)({},"".concat(E,"-closable"),u)),style:o,onMouseEnter:function(){x(!0)},onMouseLeave:function(){x(!1)},onClick:b}),p.createElement("div",{className:"".concat(E,"-content")},s),u&&p.createElement("a",{tabIndex:0,className:"".concat(E,"-close"),onKeyDown:function(t){"Enter"!==t.key&&"Enter"!==t.code&&t.keyCode!==L.a.ENTER||C()},onClick:function(t){t.preventDefault(),t.stopPropagation(),C()}},d))}));var T=p.forwardRef((function(t,e){var n=t.prefixCls,o=void 0===n?"rc-notification":n,c=t.container,l=t.motion,s=t.maxCount,u=t.className,f=t.style,d=t.onAllRemoved,m=p.useState([]),b=Object(a.a)(m,2),g=b[0],v=b[1],O=function(t){var e,n=g.find((function(e){return e.key===t}));null===n||void 0===n||null===(e=n.onClose)||void 0===e||e.call(n),v((function(e){return e.filter((function(e){return e.key!==t}))}))};p.useImperativeHandle(e,(function(){return{open:function(t){v((function(e){var n,o=Object(P.a)(e),a=o.findIndex((function(e){return e.key===t.key})),c=Object(i.a)({},t);a>=0?(c.times=((null===(n=e[a])||void 0===n?void 0:n.times)||0)+1,o[a]=c):(c.times=0,o.push(c));return s>0&&o.length>s&&(o=o.slice(-s)),o}))},close:function(t){O(t)},destroy:function(){v([])}}}));var y=p.useState({}),h=Object(a.a)(y,2),j=h[0],x=h[1];p.useEffect((function(){var t={};g.forEach((function(e){var n=e.placement,o=void 0===n?"topRight":n;o&&(t[o]=t[o]||[],t[o].push(e))})),Object.keys(j).forEach((function(e){t[e]=t[e]||[]})),x(t)}),[g]);var C=p.useRef(!1);if(p.useEffect((function(){Object.keys(j).length>0?C.current=!0:C.current&&(null===d||void 0===d||d(),C.current=!1)}),[j]),!c)return null;var E=Object.keys(j);return Object(r.createPortal)(p.createElement(p.Fragment,null,E.map((function(t){var e=j[t].map((function(t){return{config:t,key:t.key}})),n="function"===typeof l?l(t):l;return p.createElement(z.a,Object(R.a)({key:t,className:_()(o,"".concat(o,"-").concat(t),null===u||void 0===u?void 0:u(t)),style:null===f||void 0===f?void 0:f(t),keys:e,motionAppear:!0},n,{onAllRemoved:function(){!function(t){x((function(e){var n=Object(i.a)({},e);return(n[t]||[]).length||delete n[t],n}))}(t)}}),(function(t,e){var n=t.config,a=t.className,c=t.style,r=n.key,l=n.times,s=n.className,u=n.style;return p.createElement(A,Object(R.a)({},n,{ref:e,prefixCls:o,className:_()(a,s),style:Object(i.a)(Object(i.a)({},c),u),times:l,key:r,eventKey:r,onNoticeClose:O}))}))}))),c)})),F=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],H=function(){return document.body},D=0;function G(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.getContainer,n=void 0===e?H:e,o=t.motion,c=t.prefixCls,i=t.maxCount,r=t.className,l=t.style,s=t.onAllRemoved,u=Object(M.a)(t,F),f=p.useState(),d=Object(a.a)(f,2),m=d[0],b=d[1],g=p.useRef(),v=p.createElement(T,{container:m,ref:g,prefixCls:c,motion:o,maxCount:i,className:r,style:l,onAllRemoved:s}),O=p.useState([]),y=Object(a.a)(O,2),h=y[0],j=y[1],x=p.useMemo((function(){return{open:function(t){var e=function(){for(var t={},e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return n.forEach((function(e){e&&Object.keys(e).forEach((function(n){var o=e[n];void 0!==o&&(t[n]=o)}))})),t}(u,t);null!==e.key&&void 0!==e.key||(e.key="rc-notification-".concat(D),D+=1),j((function(t){return[].concat(Object(P.a)(t),[{type:"open",config:e}])}))},close:function(t){j((function(e){return[].concat(Object(P.a)(e),[{type:"close",key:t}])}))},destroy:function(){j((function(t){return[].concat(Object(P.a)(t),[{type:"destroy"}])}))}}}),[]);return p.useEffect((function(){b(n())})),p.useEffect((function(){g.current&&h.length&&(h.forEach((function(t){switch(t.type){case"open":g.current.open(t.config);break;case"close":g.current.close(t.key);break;case"destroy":g.current.destroy()}})),j([]))}),[h]),[x,v]}var W=n(26),K=n(63),U=n(81),V=n(56),X=function(t){var e,n=t.componentCls,o=t.width,a=t.notificationMarginEdge,c=new W.a("antNotificationTopFadeIn",{"0%":{marginTop:"-100%",opacity:0},"100%":{marginTop:0,opacity:1}}),i=new W.a("antNotificationBottomFadeIn",{"0%":{marginBottom:"-100%",opacity:0},"100%":{marginBottom:0,opacity:1}}),r=new W.a("antNotificationLeftFadeIn",{"0%":{right:{_skip_check_:!0,value:o},opacity:0},"100%":{right:{_skip_check_:!0,value:0},opacity:1}});return e={},Object(g.a)(e,"&".concat(n,"-top, &").concat(n,"-bottom"),{marginInline:0}),Object(g.a)(e,"&".concat(n,"-top"),Object(g.a)({},"".concat(n,"-fade-enter").concat(n,"-fade-enter-active, ").concat(n,"-fade-appear").concat(n,"-fade-appear-active"),{animationName:c})),Object(g.a)(e,"&".concat(n,"-bottom"),Object(g.a)({},"".concat(n,"-fade-enter").concat(n,"-fade-enter-active, ").concat(n,"-fade-appear").concat(n,"-fade-appear-active"),{animationName:i})),Object(g.a)(e,"&".concat(n,"-topLeft, &").concat(n,"-bottomLeft"),Object(g.a)({marginInlineEnd:0,marginInlineStart:a},"".concat(n,"-fade-enter").concat(n,"-fade-enter-active, ").concat(n,"-fade-appear").concat(n,"-fade-appear-active"),{animationName:r})),e},J=function(t){var e,n,o,a=t.iconCls,c=t.componentCls,i=t.boxShadow,r=t.fontSizeLG,l=t.notificationMarginBottom,s=t.borderRadiusLG,u=t.colorSuccess,f=t.colorInfo,d=t.colorWarning,m=t.colorError,p=t.colorTextHeading,b=t.notificationBg,v=t.notificationPadding,O=t.notificationMarginEdge,y=t.motionDurationMid,h=t.motionEaseInOut,j=t.fontSize,x=t.lineHeight,C=t.width,E=t.notificationIconSize,w="".concat(c,"-notice"),S=new W.a("antNotificationFadeIn",{"0%":{left:{_skip_check_:!0,value:C},opacity:0},"100%":{left:{_skip_check_:!0,value:0},opacity:1}}),k=new W.a("antNotificationFadeOut",{"0%":{maxHeight:t.animationMaxHeight,marginBottom:l,opacity:1},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}}),N=(n={position:"relative",width:C,maxWidth:"calc(100vw - ".concat(2*O,"px)"),marginBottom:l,marginInlineStart:"auto",padding:v,overflow:"hidden",lineHeight:x,wordWrap:"break-word",background:b,borderRadius:s,boxShadow:i},Object(g.a)(n,"".concat(c,"-close-icon"),{fontSize:j,cursor:"pointer"}),Object(g.a)(n,"".concat(w,"-message"),{marginBottom:t.marginXS,color:p,fontSize:r,lineHeight:t.lineHeightLG}),Object(g.a)(n,"".concat(w,"-description"),{fontSize:j}),Object(g.a)(n,"&".concat(w,"-closable ").concat(w,"-message"),{paddingInlineEnd:t.paddingLG}),Object(g.a)(n,"".concat(w,"-with-icon ").concat(w,"-message"),{marginBottom:t.marginXS,marginInlineStart:t.marginSM+E,fontSize:r}),Object(g.a)(n,"".concat(w,"-with-icon ").concat(w,"-description"),{marginInlineStart:t.marginSM+E,fontSize:j}),Object(g.a)(n,"".concat(w,"-icon"),(e={position:"absolute",fontSize:E,lineHeight:0},Object(g.a)(e,"&-success".concat(a),{color:u}),Object(g.a)(e,"&-info".concat(a),{color:f}),Object(g.a)(e,"&-warning".concat(a),{color:d}),Object(g.a)(e,"&-error".concat(a),{color:m}),e)),Object(g.a)(n,"".concat(w,"-close"),{position:"absolute",top:t.notificationPaddingVertical,insetInlineEnd:t.notificationPaddingHorizontal,color:t.colorIcon,outline:"none",width:t.notificationCloseButtonSize,height:t.notificationCloseButtonSize,borderRadius:t.borderRadiusSM,transition:"background-color ".concat(t.motionDurationMid,", color ").concat(t.motionDurationMid),display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.wireframe?"transparent":t.colorFillContent}}),Object(g.a)(n,"".concat(w,"-btn"),{float:"right",marginTop:t.marginSM}),n);return[Object(g.a)({},c,Object.assign(Object.assign(Object.assign(Object.assign({},Object(K.f)(t)),(o={position:"fixed",zIndex:t.zIndexPopup,marginInlineEnd:O},Object(g.a)(o,"".concat(c,"-hook-holder"),{position:"relative"}),Object(g.a)(o,"&".concat(c,"-top, &").concat(c,"-bottom"),Object(g.a)({},w,{marginInline:"auto auto"})),Object(g.a)(o,"&".concat(c,"-topLeft, &").concat(c,"-bottomLeft"),Object(g.a)({},w,{marginInlineEnd:"auto",marginInlineStart:0})),Object(g.a)(o,"".concat(c,"-fade-enter, ").concat(c,"-fade-appear"),{animationDuration:t.motionDurationMid,animationTimingFunction:h,animationFillMode:"both",opacity:0,animationPlayState:"paused"}),Object(g.a)(o,"".concat(c,"-fade-leave"),{animationTimingFunction:h,animationFillMode:"both",animationDuration:y,animationPlayState:"paused"}),Object(g.a)(o,"".concat(c,"-fade-enter").concat(c,"-fade-enter-active, ").concat(c,"-fade-appear").concat(c,"-fade-appear-active"),{animationName:S,animationPlayState:"running"}),Object(g.a)(o,"".concat(c,"-fade-leave").concat(c,"-fade-leave-active"),{animationName:k,animationPlayState:"running"}),o)),X(t)),{"&-rtl":Object(g.a)({direction:"rtl"},"".concat(w,"-btn"),{float:"left"})})),Object(g.a)({},c,Object(g.a)({},w,Object.assign({},N))),Object(g.a)({},"".concat(w,"-pure-panel"),Object.assign(Object.assign({},N),{margin:0}))]},Y=Object(U.a)("Notification",(function(t){var e=t.paddingMD,n=t.paddingLG,o=Object(V.b)(t,{notificationBg:t.colorBgElevated,notificationPaddingVertical:e,notificationPaddingHorizontal:n,notificationPadding:"".concat(t.paddingMD,"px ").concat(t.paddingContentHorizontalLG,"px"),notificationMarginBottom:t.margin,notificationMarginEdge:t.marginLG,animationMaxHeight:150,notificationIconSize:t.fontSizeLG*t.lineHeightLG,notificationCloseButtonSize:.55*t.controlHeightLG});return[J(o)]}),(function(t){return{zIndexPopup:t.zIndexPopupBase+50,width:384}})),q=n(22),Q=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]])}return n};x.a,v.a;function Z(t,e){return e||p.createElement("span",{className:"".concat(t,"-close-x")},p.createElement(I.a,{className:"".concat(t,"-close-icon")}))}var $={success:w,info:N,error:x.a,warning:j};function tt(t){var e=t.prefixCls,n=t.icon,o=t.type,a=t.message,c=t.description,i=t.btn,r=null;return n?r=p.createElement("span",{className:"".concat(e,"-icon")},n):o&&(r=p.createElement($[o]||null,{className:_()("".concat(e,"-icon"),"".concat(e,"-icon-").concat(o))})),p.createElement("div",{className:_()(Object(g.a)({},"".concat(e,"-with-icon"),r)),role:"alert"},r,p.createElement("div",{className:"".concat(e,"-message")},a),p.createElement("div",{className:"".concat(e,"-description")},c),i&&p.createElement("div",{className:"".concat(e,"-btn")},i))}var et=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]])}return n},nt=p.forwardRef((function(t,e){var n=t.top,o=t.bottom,c=t.prefixCls,i=t.getContainer,r=t.maxCount,l=t.rtl,s=t.onAllRemoved,u=p.useContext(q.a),f=u.getPrefixCls,d=u.getPopupContainer,m=c||f("notification"),b=Y(m),v=Object(a.a)(b,2)[1],O=G({prefixCls:m,style:function(t){return function(t,e,n){var o;switch(t){case"top":o={left:"50%",transform:"translateX(-50%)",right:"auto",top:e,bottom:"auto"};break;case"topLeft":o={left:0,top:e,bottom:"auto"};break;case"topRight":o={right:0,top:e,bottom:"auto"};break;case"bottom":o={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:n};break;case"bottomLeft":o={left:0,top:"auto",bottom:n};break;default:o={right:0,top:"auto",bottom:n}}return o}(t,null!==n&&void 0!==n?n:24,null!==o&&void 0!==o?o:24)},className:function(){return _()(v,Object(g.a)({},"".concat(m,"-rtl"),l))},motion:function(){return function(t){return{motionName:"".concat(t,"-fade")}}(m)},closable:!0,closeIcon:Z(m),duration:4.5,getContainer:function(){return(null===i||void 0===i?void 0:i())||(null===d||void 0===d?void 0:d())||document.body},maxCount:r,onAllRemoved:s}),y=Object(a.a)(O,2),h=y[0],j=y[1];return p.useImperativeHandle(e,(function(){return Object.assign(Object.assign({},h),{prefixCls:m,hashId:v})})),j}));function ot(t){var e=p.useRef(null);return[p.useMemo((function(){var t=function(t){if(e.current){var n=e.current,o=n.open,a=n.prefixCls,c=n.hashId,i="".concat(a,"-notice"),r=t.message,l=t.description,s=t.icon,u=t.type,f=t.btn,d=t.className,m=et(t,["message","description","icon","type","btn","className"]);return o(Object.assign(Object.assign({placement:"topRight"},m),{content:p.createElement(tt,{prefixCls:i,icon:s,type:u,message:r,description:l,btn:f}),className:_()(u&&"".concat(i,"-").concat(u),c,d)}))}},n={open:t,destroy:function(t){var n,o;void 0!==t?null===(n=e.current)||void 0===n||n.close(t):null===(o=e.current)||void 0===o||o.destroy()}};return["success","info","warning","error"].forEach((function(e){n[e]=function(n){return t(Object.assign(Object.assign({},n),{type:e}))}})),n}),[]),p.createElement(nt,Object.assign({key:"notification-holder"},t,{ref:e}))]}var at=null,ct=function(t){return t()},it=[],rt={};var lt=p.forwardRef((function(t,e){var n=p.useState(),o=Object(a.a)(n,2),c=o[0],i=o[1],r=p.useState(),l=Object(a.a)(r,2),s=l[0],u=l[1],f=p.useState(),d=Object(a.a)(f,2),m=d[0],g=d[1],v=p.useState(),O=Object(a.a)(v,2),y=O[0],h=O[1],j=p.useState(),x=Object(a.a)(j,2),C=x[0],E=x[1],w=p.useState(),S=Object(a.a)(w,2),k=S[0],N=S[1],I=ot({prefixCls:c,getContainer:function(){return s},maxCount:m,rtl:y,top:C,bottom:k}),P=Object(a.a)(I,2),M=P[0],R=P[1],z=Object(b.b)(),B=z.getRootPrefixCls(),_=z.getIconPrefixCls(),L=function(){var t=function(){var t=rt,e=t.prefixCls,n=t.getContainer,o=t.rtl,a=t.maxCount,c=t.top,i=t.bottom;return{prefixCls:null!==e&&void 0!==e?e:Object(b.b)().getPrefixCls("notification"),container:(null===n||void 0===n?void 0:n())||document.body,rtl:o,maxCount:a,top:c,bottom:i}}(),e=t.prefixCls,n=t.container,o=t.maxCount,a=t.rtl,c=t.top,r=t.bottom;i(e),u(n),g(o),h(a),E(c),N(r)};return p.useEffect(L,[]),p.useImperativeHandle(e,(function(){var t=Object.assign({},M);return Object.keys(t).forEach((function(e){t[e]=function(){return L(),M[e].apply(M,arguments)}})),{instance:t,sync:L}})),p.createElement(b.a,{prefixCls:B,iconPrefixCls:_},R)}));function st(){if(!at){var t=document.createDocumentFragment(),e={fragment:t};return at=e,void ct((function(){m(p.createElement(lt,{ref:function(t){var n=t||{},o=n.instance,a=n.sync;Promise.resolve().then((function(){!e.instance&&o&&(e.instance=o,e.sync=a,st())}))}}),t)}))}at.instance&&(it.forEach((function(t){switch(t.type){case"open":ct((function(){at.instance.open(Object.assign(Object.assign({},rt),t.config))}));break;case"destroy":ct((function(){null===at||void 0===at||at.instance.destroy(t.key)}))}})),it=[])}function ut(t){it.push({type:"open",config:t}),st()}var ft={open:ut,destroy:function(t){it.push({type:"destroy",key:t}),st()},config:function(t){rt=Object.assign(Object.assign({},rt),t),ct((function(){var t;null===(t=null===at||void 0===at?void 0:at.sync)||void 0===t||t.call(at)}))},useNotification:function(t){return ot(t)},_InternalPanelDoNotUseOrYouWillBeFired:function(t){var e=t.prefixCls,n=t.className,o=t.icon,c=t.type,i=t.message,r=t.description,l=t.btn,s=t.closable,u=void 0===s||s,f=t.closeIcon,d=Q(t,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon"]),m=p.useContext(q.a).getPrefixCls,b=e||m("notification"),g="".concat(b,"-notice"),v=Y(b),O=Object(a.a)(v,2)[1];return p.createElement(A,Object.assign({},d,{prefixCls:b,className:_()(n,O,"".concat(g,"-pure-panel")),eventKey:"pure",duration:null,closable:u,closeIcon:Z(b,f),content:p.createElement(tt,{prefixCls:g,icon:o,type:c,message:i,description:r,btn:l})}))}};["success","info","warning","error"].forEach((function(t){ft[t]=function(e){return ut(Object.assign(Object.assign({},e),{type:t}))}}));e.a=ft}}]);