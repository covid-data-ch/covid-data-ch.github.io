!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{k5eQ:function(n,i,a){"use strict";a.r(i),a.d(i,"ion_route",(function(){return d})),a.d(i,"ion_route_redirect",(function(){return p})),a.d(i,"ion_router",(function(){return N})),a.d(i,"ion_router_link",(function(){return A}));var c=a("+9FH"),l=a("ntsc"),h=a("gHap"),f=a("KwJk"),d=function(){function t(e){u(this,t),Object(c.l)(this,e),this.url="",this.ionRouteDataChanged=Object(c.f)(this,"ionRouteDataChanged",7)}return s(t,[{key:"onUpdate",value:function(t){this.ionRouteDataChanged.emit(t)}},{key:"onComponentProps",value:function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length){var i,a=o(n);try{for(a.s();!(i=a.n()).done;){var u=i.value;if(t[u]!==e[u])return void this.onUpdate(t)}}catch(c){a.e(c)}finally{a.f()}}else this.onUpdate(t)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),t}(),p=function(){function t(e){u(this,t),Object(c.l)(this,e),this.ionRouteRedirectChanged=Object(c.f)(this,"ionRouteRedirectChanged",7)}return s(t,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),t}(),v=function(t){return"/"+t.filter((function(t){return t.length>0})).join("/")},g=function(t){if(null==t)return[""];var e=t.split("?")[0].split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));return 0===e.length?[""]:e},m=function(){var t=r(regeneratorRuntime.mark((function t(e,n,r,o){var i,a,u,c,s=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=s.length>4&&void 0!==s[4]&&s[4],t.prev=1,a=y(e),!(o>=n.length)&&a){t.next=5;break}return t.abrupt("return",i);case 5:return t.next=7,a.componentOnReady();case 7:return u=n[o],t.next=10,a.setRouteId(u.id,u.params,r);case 10:return(c=t.sent).changed&&(r="root",i=!0),t.next=14,m(c.element,n,r,o+1,i);case 14:if(i=t.sent,t.t0=c.markVisible,!t.t0){t.next=19;break}return t.next=19,c.markVisible();case 19:return t.abrupt("return",i);case 22:return t.prev=22,t.t1=t.catch(1),t.abrupt("return",(console.error(t.t1),!1));case 25:case"end":return t.stop()}}),t,null,[[1,22]])})));return function(e,n,r,o){return t.apply(this,arguments)}}(),b=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",y=function(t){if(t)return t.matches(b)?t:t.querySelector(b)||void 0},w=function(t,e){return e.find((function(e){return function(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}(t,e)}))},k=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r},R=function(t,e){for(var n,r=new O(t),i=!1,a=0;a<e.length;a++){var u=e[a].path;if(""===u[0])i=!0;else{var c,s=o(u);try{for(s.s();!(c=s.n()).done;){var l=c.value,h=r.next();if(":"===l[0]){if(""===h)return null;((n=n||[])[a]||(n[a]={}))[l.slice(1)]=h}else if(h!==l)return null}}catch(f){s.e(f)}finally{s.f()}i=!1}}return i&&i!==(""===r.next())?null:n?e.map((function(t,e){return{id:t.id,path:t.path,params:x(t.params,n[e])}})):e},x=function(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0},C=function(t){var e,n=1,r=1,i=o(t);try{for(i.s();!(e=i.n()).done;){var a,u=o(e.value.path);try{for(u.s();!(a=u.n()).done;){var c=a.value;":"===c[0]?n+=Math.pow(1,r):""!==c&&(n+=Math.pow(2,r)),r++}}catch(s){u.e(s)}finally{u.f()}}}catch(s){i.e(s)}finally{i.f()}return n},O=function(){function t(e){u(this,t),this.path=e.slice()}return s(t,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),t}(),j=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=E(t,"to");return{from:g(E(t,"from")),to:null==e?void 0:g(e)}}))},P=function(t){return D(S(t))},S=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return Array.from(n.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(n){var r=E(n,"component");if(null==r)throw new Error("component missing in ion-route");return{path:g(E(n,"url")),id:r.toLowerCase(),params:n.componentProps,children:t(e,n)}}))},E=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},D=function(t){var e,n=[],r=o(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;U([],n,i)}}catch(a){r.e(a)}finally{r.f()}return n},U=function t(e,n,r){var i=e.slice();if(i.push({id:r.id,path:r.path,params:r.params}),0!==r.children.length){var a,u=o(r.children);try{for(u.s();!(a=u.n()).done;){t(i,n,a.value)}}catch(c){u.e(c)}finally{u.f()}}else n.push(i)},N=function(){function t(e){u(this,t),Object(c.l)(this,e),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(c.f)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(c.f)(this,"ionRouteDidChange",7)}var n,i,a,l,f,d,p;return s(t,[{key:"componentWillLoad",value:(p=r(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.debug("[ion-router] router will load"),t.next=3,y(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}));case 3:return console.debug("[ion-router] found nav"),t.next=6,this.onRoutesChanged();case 6:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)})},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",Object(h.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(h.e)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:function(){var t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)}},{key:"onBackButton",value:function(t){var e=this;t.detail.register(0,(function(t){e.back(),t()}))}},{key:"push",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"forward";t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);var n=g(t),r=t.split("?")[1];return this.setPath(n,e,r),this.writeNavStateRoot(n,e)}},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:(d=r(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(t){console.group("[ion-core] ROUTES[".concat(t.length,"]"));var n,r=o(t);try{var i=function(){var t=n.value,r=[];t.forEach((function(t){return r.push.apply(r,e(t.path))}));var o=t.map((function(t){return t.id}));console.debug("%c "+v(r),"font-weight: bold; padding-left: 20px","=>\t","(".concat(o.join(", "),")"))};for(r.s();!(n=r.n()).done;)i()}catch(a){r.e(a)}finally{r.f()}console.groupEnd()}(P(this.el)),function(t){console.group("[ion-core] REDIRECTS[".concat(t.length,"]"));var e,n=o(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.to&&console.debug("FROM: ","$c "+v(r.from),"font-weight: bold"," TO: ","$c "+v(r.to),"font-weight: bold")}}catch(i){n.e(i)}finally{n.f()}console.groupEnd()}(j(this.el));case 1:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},{key:"navChanged",value:(f=r(regeneratorRuntime.mark((function t(e){var n,i,a,u,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.busy){t.next=2;break}return t.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return t.next=4,function(){var t=r(regeneratorRuntime.mark((function t(e){var n,r,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],o=window.document.body;case 2:if(!(r=y(o))){t.next=11;break}return t.next=5,r.getRouteId();case 5:if(i=t.sent){t.next=8;break}return t.abrupt("break",11);case 8:o=i.element,i.element=void 0,n.push(i);case 9:t.next=2;break;case 11:return t.abrupt("return",{ids:n,outlet:r});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()();case 4:if(n=t.sent,i=n.ids,a=n.outlet,u=function(t,e){var n,r=null,i=0,a=t.map((function(t){return t.id})),u=o(e);try{for(u.s();!(n=u.n()).done;){var c=n.value,s=k(a,c);s>i&&(r=c,i=s)}}catch(l){u.e(l)}finally{u.f()}return r?r.map((function(e,n){return{id:e.id,path:e.path,params:x(e.params,t[n]&&t[n].params)}})):null}(i,P(this.el))){t.next=10;break}return t.abrupt("return",(console.warn("[ion-router] no matching URL for ",i.map((function(t){return t.id}))),!1));case 10:if(!(c=function(t){var e,n=[],r=o(t);try{for(r.s();!(e=r.n()).done;){var i,a=e.value,u=o(a.path);try{for(u.s();!(i=u.n()).done;){var c=i.value;if(":"===c[0]){var s=a.params&&a.params[c.slice(1)];if(!s)return null;n.push(s)}else""!==c&&n.push(c)}}catch(l){u.e(l)}finally{u.f()}}}catch(l){r.e(l)}finally{r.f()}return n}(u))){t.next=19;break}return console.debug("[ion-router] nav changed -> update URL",i,c),this.setPath(c,e),t.next=16,this.safeWriteNavState(a,u,"root",c,null,i.length);case 16:t.t0=!0,t.next=20;break;case 19:t.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 20:return t.abrupt("return",t.t0);case 21:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"onRedirectChanged",value:function(){var t=this.getPath();t&&w(t,j(this.el))&&this.writeNavStateRoot(t,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n?"forward":e<n?"back":"root"}},{key:"writeNavStateRoot",value:(l=r(regeneratorRuntime.mark((function t(e,n){var r,i,a,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return r=j(this.el),i=w(e,r),a=null,i&&(this.setPath(i.to,n),a=i.from,e=i.to),u=function(t,e){var n,r=null,i=0,a=o(e);try{for(a.s();!(n=a.n()).done;){var u=n.value,c=R(t,u);if(null!==c){var s=C(c);s>i&&(i=s,r=c)}}}catch(l){a.e(l)}finally{a.f()}return r}(e,P(this.el)),t.abrupt("return",u?this.safeWriteNavState(document.body,u,n,e,a):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return t.stop()}}),t,this)}))),function(t,e){return l.apply(this,arguments)})},{key:"safeWriteNavState",value:(a=r(regeneratorRuntime.mark((function t(e,n,r,o,i){var a,u,c,s=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.length>5&&void 0!==s[5]?s[5]:0,t.next=3,this.lock();case 3:return u=t.sent,c=!1,t.prev=5,t.next=8,this.writeNavState(e,n,r,o,i,a);case 8:c=t.sent,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),console.error(t.t0);case 14:return t.abrupt("return",(u(),c));case 15:case"end":return t.stop()}}),t,this,[[5,11]])}))),function(t,e,n,r,o){return a.apply(this,arguments)})},{key:"lock",value:(i=r(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.waitPromise,this.waitPromise=new Promise((function(t){return n=t})),t.t0=void 0!==e,!t.t0){t.next=6;break}return t.next=6,e;case 6:return t.abrupt("return",n);case 7:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"writeNavState",value:(n=r(regeneratorRuntime.mark((function t(e,n,r,o,i){var a,u,c,s=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=s.length>5&&void 0!==s[5]?s[5]:0,!this.busy){t.next=3;break}return t.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 3:return this.busy=!0,(u=this.routeChangeEvent(o,i))&&this.ionRouteWillChange.emit(u),t.next=8,m(e,n,r,a);case 8:return c=t.sent,t.abrupt("return",(this.busy=!1,c&&console.debug("[ion-router] route changed",o),u&&this.ionRouteDidChange.emit(u),c));case 10:case"end":return t.stop()}}),t,this)}))),function(t,e,r,o,i){return n.apply(this,arguments)})},{key:"setPath",value:function(t,n,r){var o=this;this.state++,function(t,n,r,i,a,u,c){var s=v([].concat(e(g(o.root)),e(i)));r&&(s="#"+s),void 0!==c&&(s=s+"?"+c),"forward"===a?t.pushState(u,"",s):t.replaceState(u,"",s)}(window.history,0,this.useHash,t,n,this.state,r)}},{key:"getPath",value:function(){var t=this;return function(e,n,r){var o=e.pathname;if(t.useHash){var i=e.hash;o="#"===i[0]?i.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(g(n),g(o))}(window.location,this.root)}},{key:"routeChangeEvent",value:function(t,e){var n=this.previousPath,r=v(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?v(e):null,to:r}}},{key:"el",get:function(){return Object(c.g)(this)}}]),t}(),A=function(){function e(t){var n=this;u(this,e),Object(c.l)(this,t),this.routerDirection="forward",this.onClick=function(t){Object(f.d)(n.href,t,n.routerDirection)}}return s(e,[{key:"render",value:function(){var e,n=Object(l.b)(this),r={href:this.href,rel:this.rel,target:this.target};return Object(c.j)(c.b,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(f.a)(this.color)),(e={},t(e,n,!0),t(e,"ion-activatable",!0),e))},Object(c.j)("a",Object.assign({},r),Object(c.j)("slot",null)))}}]),e}();A.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}])}();