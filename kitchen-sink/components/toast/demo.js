webpackJsonp([20,94],{2:function(n,t,a){"use strict";a(13),a(12)},12:function(n,t){},13:function(n,t){},14:function(n,t,a){"use strict";a(19)},17:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(4),o=s(e),p=a(5),c=s(p),l=a(7),u=s(l),i=a(6),r=s(i),f=a(1),k=s(f),d=a(3),m=s(d),g=function(n){function t(){return(0,c["default"])(this,t),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,p=t.style,c=t.onClick,l=(0,m["default"])((n={},(0,o["default"])(n,""+a,!0),(0,o["default"])(n,a+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return k["default"].createElement("div",{className:l,style:p,onClick:c})},t}(k["default"].Component);t["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=t["default"]},18:function(n,t,a){"use strict";a(2),a(23)},19:function(n,t){},23:function(n,t){},27:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function o(n){return e(n.type)&&T(n.props.children)?h["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(T(n)&&(n=n.split("").join(" ")),h["default"].createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0});var p=a(10),c=s(p),l=a(4),u=s(l),i=a(5),r=s(i),f=a(7),k=s(f),d=a(6),m=s(d),g=a(1),h=s(g),y=a(3),C=s(y),v=a(21),w=s(v),b=a(36),x=s(b),F=function(n,t){var a={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(a[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,s=Object.getOwnPropertySymbols(n);e<s.length;e++)t.indexOf(s[e])<0&&(a[s[e]]=n[s[e]]);return a},_=/^[\u4e00-\u9fa5]{2}$/,T=_.test.bind(_),E=function(n){function t(){return(0,r["default"])(this,t),(0,k["default"])(this,n.apply(this,arguments))}return(0,m["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.children,s=t.className,e=t.prefixCls,p=t.type,l=t.size,i=t.inline,r=t.across,f=t.disabled,k=t.icon,d=t.loading,m=t.activeStyle,g=t.onClick,y=F(t,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle","onClick"]),v=(n={},(0,u["default"])(n,s,s),(0,u["default"])(n,e,!0),(0,u["default"])(n,e+"-primary","primary"===p),(0,u["default"])(n,e+"-ghost","ghost"===p),(0,u["default"])(n,e+"-warning","warning"===p),(0,u["default"])(n,e+"-small","small"===l),(0,u["default"])(n,e+"-inline",i),(0,u["default"])(n,e+"-across",r),(0,u["default"])(n,e+"-disabled",f),(0,u["default"])(n,e+"-loading",d),n),b=d?"loading":k,_=h["default"].Children.map(a,o);return b&&(v[e+"-icon"]=!0),h["default"].createElement(x["default"],{activeClassName:m?e+"-active":void 0,disabled:f,activeStyle:m,onPress:f?function(){}:g},h["default"].createElement("a",(0,c["default"])({role:"button",className:(0,C["default"])(v)},y),b?h["default"].createElement(w["default"],{type:b}):null,_))},t}(h["default"].Component);E.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},t["default"]=E,n.exports=t["default"]},28:function(n,t,a){"use strict";a(2),a(14),a(35)},29:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(4),o=s(e),p=a(5),c=s(p),l=a(7),u=s(l),i=a(6),r=s(i),f=a(1),k=s(f),d=a(3),m=s(d),g=function(n){function t(){return(0,c["default"])(this,t),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,p=t.children,c=t.style,l=(0,m["default"])((n={},(0,o["default"])(n,""+a,!0),(0,o["default"])(n,a+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return k["default"].createElement("div",{className:l,style:c},p)},t}(k["default"].Component);t["default"]=g,g.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=t["default"]},30:function(n,t,a){"use strict";a(2),a(38)},35:function(n,t){},38:function(n,t){},118:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return f&&(f.destroy(),f=null),f=u["default"].newInstance({prefixCls:k,style:{top:n?0:"50%"},transitionName:"am-fade",className:n?k+"-mask":""})}function o(n,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=arguments[3],p=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],l={info:"",success:a(171),fail:a(170),offline:a(169),loading:"loading"}[t],u=e(p);u.notice({duration:s,style:{},content:l?c["default"].createElement("div",{className:k+"-text "+k+"-text-icon"},c["default"].createElement(r["default"],{type:l,size:"lg"}),c["default"].createElement("div",{className:k+"-text-info"},n)):c["default"].createElement("div",{className:k+"-text"},c["default"].createElement("div",null,n)),onClose:function(){o&&o(),u.destroy(),u=null,f=null}})}Object.defineProperty(t,"__esModule",{value:!0});var p=a(1),c=s(p),l=a(152),u=s(l),i=a(21),r=s(i),f=void 0,k="am-toast";t["default"]={SHORT:3,LONG:8,show:function(n,t,a){return o(n,"info",t,function(){},a)},info:function(n,t,a,s){return o(n,"info",t,a,s)},success:function(n,t,a,s){return o(n,"success",t,a,s)},fail:function(n,t,a,s){return o(n,"fail",t,a,s)},offline:function(n,t,a,s){return o(n,"offline",t,a,s)},loading:function(n,t,a,s){return o(n,"loading",t,a,s)},hide:function(){f&&(f.destroy(),f=null)}},n.exports=t["default"]},119:function(n,t,a){"use strict";a(2),a(14),a(139)},139:function(n,t){},150:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),p=s(o),c=a(3),l=s(c),u=p["default"].createClass({displayName:"Notice",propTypes:{duration:o.PropTypes.number,onClose:o.PropTypes.func,children:o.PropTypes.any},getDefaultProps:function(){return{onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}}},componentDidMount:function(){var n=this;this.props.duration&&(this.closeTimer=setTimeout(function(){n.close()},1e3*this.props.duration))},componentWillUnmount:function(){this.clearCloseTimer()},clearCloseTimer:function(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close:function(){this.clearCloseTimer(),this.props.onClose()},render:function(){var n,t=this.props,a=t.prefixCls+"-notice",s=(n={},e(n,""+a,1),e(n,a+"-closable",t.closable),e(n,t.className,!!t.className),n);return p["default"].createElement("div",{className:(0,l["default"])(s),style:t.style},p["default"].createElement("div",{className:a+"-content"},t.children),t.closable?p["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:a+"-close"},p["default"].createElement("span",{className:a+"-close-x"})):null)}});t["default"]=u,n.exports=t["default"]},151:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function o(){return"rcNotification_"+v+"_"+C++}Object.defineProperty(t,"__esModule",{value:!0});var p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},c=a(1),l=s(c),u=a(8),i=s(u),r=a(109),f=s(r),k=a(164),d=s(k),m=a(3),g=s(m),h=a(150),y=s(h),C=0,v=Date.now(),w=l["default"].createClass({displayName:"Notification",propTypes:{prefixCls:c.PropTypes.string,transitionName:c.PropTypes.string,animation:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.object]),style:c.PropTypes.object},getDefaultProps:function(){return{prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}}},getInitialState:function(){return{notices:[]}},getTransitionName:function(){var n=this.props,t=n.transitionName;return!t&&n.animation&&(t=n.prefixCls+"-"+n.animation),t},add:function(n){var t=n.key=n.key||o();this.setState(function(a){var s=a.notices;if(!s.filter(function(n){return n.key===t}).length)return{notices:s.concat(n)}})},remove:function(n){this.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==n})}})},render:function(){var n,t=this,a=this.props,s=this.state.notices.map(function(n){var s=(0,d["default"])(t.remove.bind(t,n.key),n.onClose);return l["default"].createElement(y["default"],p({prefixCls:a.prefixCls},n,{onClose:s}),n.content)}),o=(n={},e(n,a.prefixCls,1),e(n,a.className,!!a.className),n);return l["default"].createElement("div",{className:(0,g["default"])(o),style:a.style},l["default"].createElement(f["default"],{transitionName:this.getTransitionName()},s))}});w.newInstance=function(n){var t=n||{},a=document.createElement("div");document.body.appendChild(a);var s=i["default"].render(l["default"].createElement(w,t),a);return{notice:function(n){s.add(n)},removeNotice:function(n){s.remove(n)},component:s,destroy:function(){i["default"].unmountComponentAtNode(a),document.body.removeChild(a)}}},t["default"]=w,n.exports=t["default"]},152:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(151),o=s(e);t["default"]=o["default"],n.exports=t["default"]},164:function(n,t){"use strict";function a(){var n=arguments;return function(){for(var t=0;t<n.length;t++)n[t]&&n[t].apply&&n[t].apply(this,arguments)}}n.exports=a},169:function(n,t,a){var s=a(16),e='<symbol viewBox="0 0 72 72" id="dislike" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --> <title>&#x54ED;&#x8138;</title> <desc>Created with Sketch.</desc> <defs/> <g id="dislike_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="dislike_&#x54ED;&#x8138;"> <path d="M36,72 C55.882251,72 72,55.882251 72,36 C72,16.117749 55.882251,0 36,0 C16.117749,0 0,16.117749 0,36 C0,55.882251 16.117749,72 36,72 Z M36,70 C54.7776815,70 70,54.7776815 70,36 C70,17.2223185 54.7776815,2 36,2 C17.2223185,2 2,17.2223185 2,36 C2,54.7776815 17.2223185,70 36,70 Z" id="dislike_Combined-Shape" fill="#FFFFFF"/> <rect id="dislike_Rectangle-483" fill="#FFFFFF" x="47" y="22" width="2" height="6"/> <rect id="dislike_Rectangle-483" fill="#FFFFFF" x="23" y="22" width="2" height="6"/> <path d="M21,51 C21,51 25.5997148,44 36,44 C46.4002852,44 51,51 51,51" id="dislike_Path-534" stroke="#FFFFFF" stroke-width="2"/> </g> </g> </symbol>';n.exports=s.add(e,"dislike")},170:function(n,t,a){var s=a(16),e='<symbol viewBox="0 0 72 72" id="fail" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --> <title>&#x5931;&#x8D25;</title> <desc>Created with Sketch.</desc> <defs/> <g id="fail_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="fail_&#x5931;&#x8D25;"> <path d="M36,72 C55.882251,72 72,55.882251 72,36 C72,16.117749 55.882251,0 36,0 C16.117749,0 0,16.117749 0,36 C0,55.882251 16.117749,72 36,72 Z M36,70 C54.7776815,70 70,54.7776815 70,36 C70,17.2223185 54.7776815,2 36,2 C17.2223185,2 2,17.2223185 2,36 C2,54.7776815 17.2223185,70 36,70 Z" id="fail_Combined-Shape" fill="#FFFFFF"/> <path d="M22,22 L50.3038735,50.3038735" id="fail_Path-530" stroke="#FFFFFF" stroke-width="2"/> <path d="M22,50.3038735 L50.3038735,22" id="fail_Path-530" stroke="#FFFFFF" stroke-width="2"/> </g> </g> </symbol>';n.exports=s.add(e,"fail")},171:function(n,t,a){var s=a(16),e='<symbol viewBox="0 0 72 72" id="success" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --> <title>&#x6210;&#x529F;</title> <desc>Created with Sketch.</desc> <defs/> <g id="success_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="success_&#x6210;&#x529F;"> <path d="M36,72 C55.882251,72 72,55.882251 72,36 C72,16.117749 55.882251,0 36,0 C16.117749,0 0,16.117749 0,36 C0,55.882251 16.117749,72 36,72 Z M36,70 C54.7776815,70 70,54.7776815 70,36 C70,17.2223185 54.7776815,2 36,2 C17.2223185,2 2,17.2223185 2,36 C2,54.7776815 17.2223185,70 36,70 Z" id="success_Combined-Shape" fill="#FFFFFF"/> <polyline id="success_Path-529" stroke="#FFFFFF" stroke-width="2" points="19 34.5404212 30.5454644 46.4633152 52.8136936 24"/> </g> </g> </symbol>';n.exports=s.add(e,"success")},558:function(n,t,a){n.exports={content:[["p","\u7eaf\u6587\u5b57\u3001\u7eaf\u56fe\u6807\u3001\u6210\u529f\u3001\u5931\u8d25\u3001\u79bb\u7ebf\u3001loading"]],meta:{order:0,title:"\u666e\u901a",filename:"components/toast/demo/basic.md",id:"components-toast-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'\u8fd9\u662f\u4e00\u4e2a toast \u63d0\u793a!!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">showToastNoMask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'\u65e0 mask \u7684 toast !!!\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">successToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u6210\u529f!!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">failToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u5931\u8d25!!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">offline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">offline</span><span class="token punctuation">(</span><span class="token string">\'\u7f51\u7edc\u8fde\u63a5\u5931\u8d25!!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadingToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u4e2d...\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u5b8c\u6210!!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> ToastExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u7eaf\u6587\u5b57 toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToastNoMask<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u65e0 mask<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>successToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u6210\u529f toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>failToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5931\u8d25 toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>offline<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u7f51\u7edc toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loadingToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u52a0\u8f7d\u4e2d toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function t(){g["default"].info("\u8fd9\u662f\u4e00\u4e2a toast \u63d0\u793a!!!",1)}function s(){g["default"].info("\u65e0 mask \u7684 toast !!!",2,null,!1)}function e(){g["default"].success("\u52a0\u8f7d\u6210\u529f!!!",1)}function o(){g["default"].fail("\u52a0\u8f7d\u5931\u8d25!!!",1)}function p(){g["default"].offline("\u7f51\u7edc\u8fde\u63a5\u5931\u8d25!!!",1)}function c(){g["default"].loading("\u52a0\u8f7d\u4e2d...",1,function(){console.log("\u52a0\u8f7d\u5b8c\u6210!!!")})}var l=a(1),u=(a(8),a(30),a(29)),i=n(u),r=(a(28),a(27)),f=n(r),k=(a(18),a(17)),d=n(k),m=(a(119),a(118)),g=n(m),h=function(){return l.createElement(i["default"],null,l.createElement(d["default"],null),l.createElement(f["default"],{onClick:t},"\u7eaf\u6587\u5b57 toast"),l.createElement(d["default"],null),l.createElement(f["default"],{onClick:s},"\u65e0 mask"),l.createElement(d["default"],null),l.createElement(f["default"],{onClick:e},"\u6210\u529f toast"),l.createElement(d["default"],null),l.createElement(f["default"],{onClick:o},"\u5931\u8d25 toast"),l.createElement(d["default"],null),l.createElement(f["default"],{onClick:p},"\u7f51\u7edc toast"),l.createElement(d["default"],null),l.createElement(f["default"],{onClick:c},"\u52a0\u8f7d\u4e2d toast"),l.createElement(d["default"],null))};return l.createElement(h,null)}}},626:function(n,t,a){n.exports={basic:a(558)}}});