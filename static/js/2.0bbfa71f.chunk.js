(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{103:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),l=a(25),s=a(169),i=a(117),o=a.n(i),m=a(51),u=a(5),d=function(e){return function(t){return localStorage.setItem("lang",e),t({type:u.r,payload:e})}},p=a(179),f=a(6),E=(a(127),a(29)),h=[{url:"/sportsbetting",title:"Sports Betting"},{url:"/inplay",title:"In-Play"},{url:"/outrights",title:"Outrights"},{url:"/results",title:"Results"}],v={content:{position:"fixed",border:"1px solid rgba(0,0,0,.2)",width:"300px",height:"415px",inset:"calc(15%) calc(50% - 150px)",padding:"10px",overflow:"unset"}},g=function(e){localStorage.setItem("path",window.location.pathname)};var N=function(e){var t=Object(l.b)(),a=Object(r.useState)(""),i=Object(n.a)(a,2),u=i[0],N=i[1],b=Object(r.useState)(""),y=Object(n.a)(b,2),w=y[0],x=y[1],j=Object(r.useState)(!1),O=Object(n.a)(j,2),C=O[0],L=O[1],S=Object(r.useState)(),k=Object(n.a)(S,2),T=k[0],F=k[1],A=Object(s.a)().i18n,P=Object(l.c)(function(e){return e.authReducers});return Object(E.c)(function(){if(localStorage.lang){var e=localStorage.getItem("lang");f.d.forEach(function(t){t.name===e&&F(t)}),A.changeLanguage(e)}}),P&&null!==P.user&&P.user.role,c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"top"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"",alt:""})),c.a.createElement("form",{className:"login_form"},P.isAuthenticated?c.a.createElement("div",{className:"logined d-flex"},c.a.createElement("div",null,c.a.createElement("a",{href:"/myaccount",className:"text-white "},"My Account")),c.a.createElement("div",{className:"text-white"},"|"),c.a.createElement("div",null,c.a.createElement("a",{href:"/changepass",className:"text-white"},"Change Password")),c.a.createElement("div",{className:"text-white"},"|"),c.a.createElement("div",null,c.a.createElement("label",{className:"text-white"},P.user.name," : ",P.user.balance)),c.a.createElement("div",{className:"text-white"},"|"),c.a.createElement("div",{className:"logoutbtn d-flex text-white",onClick:function(){return t(Object(m.b)())}},c.a.createElement("p",null,"Logout"),c.a.createElement("svg",{"aria-hidden":"true","data-fa-processed":"","data-prefix":"fas","data-icon":"sign-out-alt",className:"svg-inline--fa fa-sign-out-alt fa-w-16 fa-center",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{fill:"currentColor",d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"})))):c.a.createElement("div",null,c.a.createElement("div",{className:"textbox"},c.a.createElement("input",{type:"text",className:"inputbox",placeholder:"Username",name:"name",defaultValue:u,onChange:function(e){return N(e.target.value)}})),c.a.createElement("div",{className:"textbox"},c.a.createElement("input",{type:"text",className:"inputbox",placeholder:"Password",name:"password",defaultValue:w,onChange:function(e){return x(e.target.value)}})),c.a.createElement("input",{className:"login_btn",type:"button",defaultValue:"Login",onClick:function(){return function(){var e={name:u,password:w};t(Object(m.a)(e))}()}})))),c.a.createElement("div",{className:"bottom border-top"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"menu"},h.map(function(e,t){return c.a.createElement("a",{key:t,href:e.url,className:window.location.pathname===e.url?"menu-item active":"/"===window.location.pathname&&0===t?"menu-item active":"menu-item",onClick:g},c.a.createElement(p.a,null,e.title))})),c.a.createElement("div",{className:"dropdownbtn"},c.a.createElement("p",{className:"dropbtn1",onClick:function(){return L(!0)}},c.a.createElement("img",{src:T?T.icon:"assets/images/flags/en_US.png",className:"language",alt:"flag"}),c.a.createElement("span",null," ",T?T.title:"English"))),c.a.createElement("div",{className:"clearfix"}),c.a.createElement(o.a,{isOpen:C,onRequestClose:function(){return L(!1)},style:v,shouldCloseOnOverlayClick:!1,overlayClassName:"overlay",ariaHideApp:!1},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title"},"LANGUAGE SELECTOR"),c.a.createElement("button",{type:"button",className:"close",onClick:function(){return L(!1)}},c.a.createElement("span",null,"\xd7"))),c.a.createElement("div",{className:"modal-body form-horizontal"},c.a.createElement("div",{className:"col-12 p-0"},c.a.createElement("div",{className:"language-list"},c.a.createElement("ul",null,f.d?f.d.map(function(e,a){return c.a.createElement("li",{key:a,onClick:function(){return function(e,a){if(L(!1),A.changeLanguage(e),F(f.d[a]),P&&P.user){var n={userId:P.user.userId,lang:a};t(Object(m.e)(n))}else t(d(e))}(e.name,a)}},c.a.createElement("div",null,c.a.createElement("img",{src:e.icon,className:"language",alt:""}),e.title))}):c.a.createElement(c.a.Fragment,null)),c.a.createElement("div",{className:"clearfix"})))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("div",{className:"col-12 d-flex justify-content-center text-center",onClick:function(){return L(!1)}},c.a.createElement("p",{id:"closeModal",className:"btn-cancel"},"Close"))),c.a.createElement("div",{className:"clearfix"})))))},b=a(26),y=(a(139),function(){Object(r.useRef)();var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)((0).toFixed(2)),m=Object(n.a)(o,2),u=m[0],d=m[1],f=Object(r.useState)((0).toFixed(2)),h=Object(n.a)(f,2),v=h[0],g=h[1],N=Object(r.useState)((0).toFixed(2)),y=Object(n.a)(N,2),w=y[0],x=y[1],j=Object(r.useState)((0).toFixed(2)),O=Object(n.a)(j,2),C=O[0],L=O[1],S=Object(r.useState)((0).toFixed(2)),k=Object(n.a)(S,2),T=k[0],F=k[1],A=Object(r.useState)(0),P=Object(n.a)(A,2),M=P[0],_=(P[1],Object(r.useState)((0).toFixed(2))),U=Object(n.a)(_,2),G=U[0],I=U[1],R=Object(r.useState)(!0),V=Object(n.a)(R,2),H=V[0],z=V[1],B=Object(l.c)(function(e){return e.authReducers}),D=Object(s.a)().i18n;Object(r.useEffect)(function(){B&&B.user}),Object(E.c)(function(){if(localStorage.lang){var e=localStorage.getItem("lang");D.changeLanguage(e)}});var W=function(e){var t=1===e?1*Number(v)+1:v>1?1*Number(v)-1:1;g(t.toFixed(2)),d(t.toFixed(2)),x(t.toFixed(2))};return c.a.createElement("div",{className:"betpanel"},B.isAuthenticated?c.a.createElement("div",{className:"row chashoutbtn"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("svg",{"aria-hidden":"true","data-fa-processed":"","data-prefix":"fas","data-icon":"dollar-sign",className:"svg-inline--fa fa-dollar-sign fa-w-10 fa-2x",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},c.a.createElement("path",{fill:"currentColor",d:"M113.411 169.375c0-23.337 21.536-38.417 54.865-38.417 26.726 0 54.116 12.263 76.461 28.333 5.88 4.229 14.13 2.354 17.575-4.017l23.552-43.549c2.649-4.898 1.596-10.991-2.575-14.68-24.281-21.477-59.135-34.09-91.289-37.806V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v49.832c-58.627 13.29-97.299 55.917-97.299 108.639 0 123.533 184.765 110.81 184.765 169.414 0 19.823-16.311 41.158-52.124 41.158-30.751 0-62.932-15.88-87.848-35.887-5.31-4.264-13.082-3.315-17.159 2.14l-30.389 40.667c-3.627 4.854-3.075 11.657 1.302 15.847 24.049 23.02 59.249 41.255 98.751 47.973V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-47.438c65.72-10.215 106.176-59.186 106.176-116.516.001-119.688-184.764-103.707-184.764-166.671z"}))),c.a.createElement("div",{className:"d-flex justify-content-center pb-1"},c.a.createElement("p",null,"Cashout"))):c.a.createElement(c.a.Fragment,null),c.a.createElement("div",{className:"bet-type-btn d-flex"},c.a.createElement("p",{className:a?"bet-type-btn-child":"bet-type-btn-child focus",onClick:function(){return i(!1)}},c.a.createElement(p.a,null,"Single/Multiple")),c.a.createElement("p",{className:a?"bet-type-btn-child focus":"bet-type-btn-child",onClick:function(){return i(!0)}},c.a.createElement(p.a,null,"SYSTEM"))),c.a.createElement("div",{className:"bet-slip"},c.a.createElement("div",{className:"selected-bets selected-bets-l"}),a?c.a.createElement("div",{className:"comb"},c.a.createElement("label",null,c.a.createElement(p.a,null,"Combinations:"))):c.a.createElement(c.a.Fragment,null),c.a.createElement("div",{className:"bet-totals d-flex"},c.a.createElement("p",{className:"btn-reset",onClick:function(){d((0).toFixed(2)),x((0).toFixed(2)),g((0).toFixed(2)),L((0).toFixed(2)),F((0).toFixed(2)),I((0).toFixed(2))}},c.a.createElement(p.a,null,"Reset")),c.a.createElement("div",{className:"totals px-2 pt-2"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{className:"push-left"},c.a.createElement(p.a,null,"Stake:")),c.a.createElement("div",{className:"push-right"},v)),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{className:"push-left"},c.a.createElement(p.a,null,"Tax:")),c.a.createElement("div",{className:"push-right"},C)),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{className:"push-left"},c.a.createElement(p.a,null,"Total stake:")),c.a.createElement("div",{className:"push-right"},w)),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{className:"push-left"},c.a.createElement(p.a,null,"Stake per bet:")),c.a.createElement("div",{className:"push-right"},T)),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{className:"push-left"},c.a.createElement(p.a,null,"Number of bets:")),c.a.createElement("div",{className:"push-right"},M)),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{className:"push-left"},c.a.createElement(p.a,null,"Max Winning:")),c.a.createElement("div",{className:"push-right"},G)))),c.a.createElement("div",{className:"place-bet show"},c.a.createElement("div",{className:"d-flex justify-content-around"},c.a.createElement("div",null,c.a.createElement("p",{onClick:function(){return W(0)}},"-")),c.a.createElement("div",{className:"align-self-center col-8"},c.a.createElement("form",null,c.a.createElement("input",{className:"payingamount py-1",id:"PayingAmount",type:"number",step:"0.1",onChange:function(e){d(e.target.value)},value:u}),c.a.createElement("span",{className:"text-danger"}))),c.a.createElement("div",null,c.a.createElement("p",{onClick:function(){return W(1)}},"+"))),H?c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"btn-place-bet py-1",onClick:function(){B.isAuthenticated?z(!1):Object(b.a)("Please Login","error")}},c.a.createElement(p.a,null,"Place bet"))):c.a.createElement("div",{className:"instead d-flex"},c.a.createElement("div",{className:"col-6"},c.a.createElement("p",{className:"btn-place-bet py-1",onClick:function(){Object(b.a)("betConfirm","success")}},c.a.createElement(p.a,null,"Confirm"))),c.a.createElement("div",{className:"col-6"},c.a.createElement("p",{className:"btn-place-bet cancel py-1",onClick:function(){return z(!0)}},c.a.createElement(p.a,null,"Cancel"))))),c.a.createElement("div",{className:"hide"},c.a.createElement("div",{className:"row"},c.a.createElement("label",{className:"col-9"},"Success. Would you like to have bet slip?"),c.a.createElement("label",{className:"col-3 t-a-r"},"0sn")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("button",{type:"button",className:"btn-confirm"},"Ok")),c.a.createElement("div",{className:"col-6"},c.a.createElement("button",{type:"button",id:"closeModal",className:"btn-cancel"},"Cancel"))))))}),w=a(8),x=a(32),j=a(20);function O(){O=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(L){s=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof u?t:u,c=Object.create(r.prototype),l=new x(n||[]);return c._invoke=function(e,t,a){var n="suspendedStart";return function(r,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw c;return C()}for(a.method=r,a.arg=c;;){var l=a.delegate;if(l){var s=b(l,a);if(s){if(s===m)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=o(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,l),c}function o(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=i;var m={};function u(){}function d(){}function p(){}var f={};s(f,r,function(){return this});var E=Object.getPrototypeOf,h=E&&E(E(j([])));h&&h!==t&&a.call(h,r)&&(f=h);var v=p.prototype=u.prototype=Object.create(f);function g(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function N(e,t){var n;this._invoke=function(r,c){function l(){return new t(function(n,l){!function n(r,c,l,s){var i=o(e[r],e,c);if("throw"!==i.type){var m=i.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,l,s)},function(e){n("throw",e,l,s)}):t.resolve(u).then(function(e){m.value=e,l(m)},function(e){return n("throw",e,l,s)})}s(i.arg)}(r,c,n,l)})}return n=n?n.then(l,l):l()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=o(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function y(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(y,this),this.reset(!0)}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,c=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return c.next=c}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=p,s(v,"constructor",p),s(p,"constructor",d),d.displayName=s(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,l,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(N.prototype),s(N.prototype,c,function(){return this}),e.AsyncIterator=N,e.async=function(t,a,n,r,c){void 0===c&&(c=Promise);var l=new N(i(t,a,n,r),c);return e.isGeneratorFunction(a)?l:l.next().then(function(e){return e.done?e.value:l.next()})},g(v),s(v,l,"Generator"),s(v,r,function(){return this}),s(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return l.type="throw",l.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],l=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var s=a.call(c,"catchLoc"),i=a.call(c,"finallyLoc");if(s&&i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var l=c?c.completion:{};return l.type=e,l.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;w(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var C={headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}},L=function(){return function(){var e=Object(x.a)(O().mark(function e(t){var a;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get(f.g+"/sports/getAllMatches",C);case 3:return a=e.sent,e.abrupt("return",t({type:u.b,payload:a}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t({type:u.d,payload:e.t0}));case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},S=function(){return function(){var e=Object(x.a)(O().mark(function e(t){return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get(f.g+"/sports/getMatches",C);case 3:return e.sent,e.abrupt("return",t({type:u.h,payload:f.i}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t({type:u.d,payload:e.t0}));case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};a(141);var k=function(e){var t=Object(l.c)(function(e){return e.sportsReducers.getTypeList}),a=Object(l.c)(function(e){return e.sportsReducers.getAllMatches}),i=Object(l.b)();Object(s.a)().i18n,Object(r.useEffect)(function(){i(S()),i(L())},[i]);var o=Object(r.useState)([]),m=Object(n.a)(o,2),u=m[0],d=m[1],f=Object(r.useState)([]),E=Object(n.a)(f,2),h=E[0],v=E[1],g=Object(r.useState)(void 0),N=Object(n.a)(g,2),b=N[0],y=N[1],x="";return a.data&&(x=a.data.availableSportTypes),c.a.createElement("div",null,c.a.createElement("div",{className:"menu-header"},c.a.createElement(p.a,null,"Sports Betting")),c.a.createElement("div",{className:"menu-content bordered-top"},c.a.createElement("div",{className:"menu_main"},x&&x.map(function(e,n){return e&&t?c.a.createElement("div",{key:n,className:"sportstypes"},c.a.createElement("p",{className:u[n]?"collapsed first-lists":"first-lists",onClick:function(){return function(e){void 0===u[e]&&(u[e]=!1);for(var t=Object(w.a)(u),a=0;a<t.length;a++)t[a]=!1;t[e]=!u[e],d(t),y(void 0)}(n)}},c.a.createElement("img",{className:"leftmenu-icon",src:u[n]?"assets/images/icons/caret-down-solid-yellow.svg":"assets/images/icons/caret-right-solid-black.svg",alt:""}),c.a.createElement("img",{className:"sport-icon",src:(r=e-1,t&&t[r]?t[r].icon:""),alt:""}),t[e-1]?t[e-1].name:""),c.a.createElement("ul",{className:u[n]?"show":"hide"},a.data.leagues&&a.data.leagues.map(function(t,a){return t.betradarSportId===e?c.a.createElement("li",{key:a},c.a.createElement("p",{className:h[a]?"collapsed lists":"lists",onClick:function(){return function(e){void 0===h[e]&&(h[e]=!1);for(var t=Object(w.a)(h),a=0;a<t.length;a++)t[a]=!1;t[e]=!h[e],v(t),y(void 0)}(a)}},c.a.createElement("img",{className:"leftmenu-icon",src:h[a]?"assets/images/icons/caret-down-solid-white.svg":"assets/images/icons/caret-right-solid-white.svg",alt:""}),t.name),c.a.createElement("ul",{className:h[a]?"show":"hide"},t.leagueList.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("p",{className:b===t?"collapsed lists last-lists":"lists last-lists",onClick:function(){return y(t)}},e.name))}))):c.a.createElement("div",{key:a})}))):c.a.createElement("div",{key:n});var r}))))},T=function(e){var t=e;return c.a.createElement("div",{className:"divider"},c.a.createElement("span",null,t.title))},F=function(e){var t=Object(r.useState)(!0),a=Object(n.a)(t,2),l=a[0],s=a[1],i=Object(r.useState)(!1),o=Object(n.a)(i,2),m=o[0],u=(o[1],Object(r.useState)(!0)),d=Object(n.a)(u,2),p=d[0],f=d[1];return c.a.createElement("div",{className:"event"},c.a.createElement("div",{className:"date"},c.a.createElement("p",null,e.date)),m?c.a.createElement("div",{className:"time live-score"},c.a.createElement("p",null,e.time)):c.a.createElement("div",{className:"time"},c.a.createElement("p",null,e.time)),l?c.a.createElement("div",{className:"slideout"},c.a.createElement("div",{className:"fade-in"})):c.a.createElement("div",{className:"slideout open"},c.a.createElement("div",{className:"fade-in show-in"},c.a.createElement("img",{src:"../assets/images/icons/analytic-icon.svg",alt:"img"}),c.a.createElement("img",{src:"../assets/images/icons/chart-icon.svg",alt:"img"}))),l?c.a.createElement("div",{className:"detail-caret detail-caret-right",onClick:function(){return s(!l)}}):c.a.createElement("div",{className:"detail-caret detail-caret-left",onClick:function(){return s(!l)}}),c.a.createElement("div",{className:"team-name"},c.a.createElement("p",null,e.homeTeam," - ",e.awayTeam)),c.a.createElement("div",{className:"more-odds"},c.a.createElement("p",{onClick:function(){return f(!p)}},p?"+":"-")),c.a.createElement("div",{className:"odds"},c.a.createElement("div",{className:"treshold"},c.a.createElement("p",null,"3.5")),c.a.createElement("div",{className:"odd"},c.a.createElement("span",{className:"odd-type"},c.a.createElement("p",null,"0")),c.a.createElement("span",{className:"odd-value"},c.a.createElement("p",null,"1.50"))),c.a.createElement("div",{className:"odd"},c.a.createElement("span",{className:"odd-type"},c.a.createElement("p",null,"1")),c.a.createElement("span",{className:"odd-value"},c.a.createElement("p",null,"1.30")))),c.a.createElement("div",{className:"odds"},c.a.createElement("div",{className:"odd"},c.a.createElement("span",{className:"odd-type"},c.a.createElement("p",null,"1")),c.a.createElement("span",{className:"odd-value"},c.a.createElement("p",null,"1.30"))),c.a.createElement("div",{className:"odd"},c.a.createElement("span",{className:"odd-type"},c.a.createElement("p",null,"1")),c.a.createElement("span",{className:"odd-value"},c.a.createElement("p",null,"1.30"))),c.a.createElement("div",{className:"odd"},c.a.createElement("span",{className:"odd-type"},c.a.createElement("p",null,"1")),c.a.createElement("span",{className:"odd-value"},c.a.createElement("p",null,"1.30")))),c.a.createElement("div",{className:p?"match-details d-none":"match-details"},c.a.createElement("div",{className:"match-bets"},c.a.createElement("div",{className:"bet-group"},c.a.createElement("div",{className:"header"},"Winner"),c.a.createElement("div",{className:"bets"},c.a.createElement("div",{className:"bet"},c.a.createElement("div",{className:"odds"},c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"changeable-odd "},c.a.createElement("span",{className:"push-left"},e.homeTeam),c.a.createElement("span",{className:"push-right"},"3.30"))),c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"changeable-odd "},c.a.createElement("span",{className:"push-left"},"Draw"),c.a.createElement("span",{className:"push-right"},"3.30"))),c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"changeable-odd "},c.a.createElement("span",{className:"push-left"},e.awayTeam),c.a.createElement("span",{className:"push-right"},"3.30"))))))),c.a.createElement("div",{className:"bet-group"},c.a.createElement("div",{className:"header"},"Handicap"),c.a.createElement("div",{className:"bets"},c.a.createElement("div",{className:"bet"},c.a.createElement("div",{className:"odds"},c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"changeable-odd selected"},c.a.createElement("span",{className:"push-left"},e.homeTeam),c.a.createElement("span",{className:"push-right"},"3.30"))),c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"changeable-odd "},c.a.createElement("span",{className:"push-left"},"Draw"),c.a.createElement("span",{className:"push-right"},"3.30"))),c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"changeable-odd "},c.a.createElement("span",{className:"push-left"},e.awayTeam),c.a.createElement("span",{className:"push-right"},"3.30"))))))),c.a.createElement("div",{className:"bet-group"},c.a.createElement("div",{className:"header"},"Over/Under"),c.a.createElement("div",{className:"bets"},c.a.createElement("div",{className:"bet"},c.a.createElement("div",{className:"odds"},c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"changeable-odd"},c.a.createElement("span",{className:"push-left"},e.homeTeam),c.a.createElement("span",{className:"push-right"},"3.30"))),c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"changeable-odd "},c.a.createElement("span",{className:"push-left"},"Draw"),c.a.createElement("span",{className:"push-right"},"3.30"))),c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"changeable-odd "},c.a.createElement("span",{className:"push-left"},e.awayTeam),c.a.createElement("span",{className:"push-right"},"3.30"))))))))))},A=(a(143),function(e){var t=Object(l.b)(),a=e;Object(r.useEffect)(function(){t(function(){var e=Object(x.a)(O().mark(function e(t){var a;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.post(f.g+"/sports/getMatches",C);case 3:return a=e.sent,e.abrupt("return",t({type:u.e,payload:a}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t({type:u.d,payload:e.t0}));case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())},[t]);var n=Object(l.c)(function(e){return e.sportsReducers.getMatches}),s=[];return n.data&&(s=n.data.matches,console.log("matches",s[6])),c.a.createElement("div",{className:"match-group border-top"},c.a.createElement("div",{className:"table-header"},c.a.createElement("div",{className:"table-title"},a.title),c.a.createElement("div",{className:"table-menu"}),c.a.createElement("div",{className:"clearfix"})),c.a.createElement("div",{className:"table-content"},c.a.createElement("div",{className:"event-list"},s?s.map(function(t,a){return e.isTop===t.isTop?c.a.createElement(F,{key:a,id:t.id,date:"16.10",time:"12:20",homeTeam:t.match.homeTeam,awayTeam:t.match.awayTeam,europeanStartTime:"",isTop:e.isTop}):c.a.createElement("div",{key:a})}):c.a.createElement(c.a.Fragment,null)),c.a.createElement("div",{className:"clearfix"})))}),P=function(e){var t=Object(r.useState)(!0),a=Object(n.a)(t,2),l=a[0];a[1];return c.a.createElement("div",{className:"outevent d-flex justify-content-between"},c.a.createElement("div",{className:"national pl-3"},c.a.createElement("p",null,e.national),e.info?c.a.createElement("img",{src:"assets/images/icons/info-icon.svg",alt:"img"}):c.a.createElement(c.a.Fragment,null)),c.a.createElement("div",{className:"d-flex teams"},c.a.createElement("div",{className:"border-left d-flex justify-content-between px-2 py-2 one"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("p",null,e.teamname1)),c.a.createElement("span",{className:""},c.a.createElement("p",null,"1.50"))),c.a.createElement("div",{className:"border-left d-flex justify-content-between px-2 py-2 two"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("p",null,e.teamname2)),c.a.createElement("span",{className:""},c.a.createElement("p",null,"1.30"))),c.a.createElement("div",{className:"border-left d-flex justify-content-center align-items-center px-2 py-2 three "},l?c.a.createElement("span",null,"+"):c.a.createElement("span",null,"-"))))},M=(a(145),function(e){var t=e;return c.a.createElement("div",{className:"match-group border-top"},c.a.createElement("div",{className:"table-header"},c.a.createElement("div",{className:"table-title"},t.title),c.a.createElement("div",{className:"table-menu"}),c.a.createElement("div",{className:"clearfix"})),c.a.createElement("div",{className:"table-content"},c.a.createElement("div",{className:"event-list"},c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - Top 2",teamname1:"Manchester City",teamname2:"Paris St. Germain",teamscore1:"1.90",teamscore2:"3.50",info:!0}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - To reach last 16",teamname1:"FC Porto",teamname2:"Atletico Madrid",teamscore1:"1.90",teamscore2:"3.50",info:!1}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - To reach last 16",teamname1:"Liverpool FC",teamname2:"Ajax Amsterdam",teamscore1:"1.90",teamscore2:"3.50",info:!1}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - Top 2",teamname1:"Manchester City",teamname2:"Paris St. Germain",teamscore1:"1.90",teamscore2:"3.50",info:!1}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - To reach last 16",teamname1:"FC Porto",teamname2:"Atletico Madrid",teamscore1:"1.90",teamscore2:"3.50",info:!1}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - To reach last 16",teamname1:"Liverpool FC",teamname2:"Ajax Amsterdam",teamscore1:"1.90",teamscore2:"3.50",info:!1}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - Top 2",teamname1:"Manchester City",teamname2:"Paris St. Germain",teamscore1:"1.90",teamscore2:"3.50",info:!0}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - To reach last 16",teamname1:"FC Porto",teamname2:"Atletico Madrid",teamscore1:"1.90",teamscore2:"3.50",info:!1}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - To reach last 16",teamname1:"Liverpool FC",teamname2:"Ajax Amsterdam",teamscore1:"1.90",teamscore2:"3.50",info:!1}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - Top 2",teamname1:"Manchester City",teamname2:"Paris St. Germain",teamscore1:"1.90",teamscore2:"3.50",info:!1}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - To reach last 16",teamname1:"FC Porto",teamname2:"Atletico Madrid",teamscore1:"1.90",teamscore2:"3.50",info:!1}),c.a.createElement(P,{national:"UEFA Champions League 2022/2023 - To reach last 16",teamname1:"Liverpool FC",teamname2:"Ajax Amsterdam",teamscore1:"1.90",teamscore2:"3.50",info:!1})),c.a.createElement("div",{className:"clearfix"})))});a.d(t,"d",function(){return N}),a.d(t,"f",function(){return y}),a.d(t,"c",function(){return k}),a.d(t,"b",function(){return T}),a.d(t,"a",function(){return A}),a.d(t,"e",function(){return M})},127:function(e,t,a){},139:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){},145:function(e,t,a){}}]);
//# sourceMappingURL=2.0bbfa71f.chunk.js.map