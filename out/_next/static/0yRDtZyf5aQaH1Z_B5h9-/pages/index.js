(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}},"38fk":function(e,t,n){e.exports={businessCard:"OwnedBusiness_businessCard__uZ7u1",businessCardHead:"OwnedBusiness_businessCardHead__1bu7b",businessCardBody:"OwnedBusiness_businessCardBody__1UGtz",progress:"OwnedBusiness_progress__14LiP"}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,o=n("q1tI");var i=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=s},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var r=a(n("q1tI")),o=a(n("Xuae")),i=n("lwAK"),s=n("FYa8"),u=n("/0+H");function a(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var _=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,a=_.length;u<a;u++){var c=_[u];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var l=o.props[c],f=r[c]||new Set;f.has(l)?i=!1:(f.add(l),r[c]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,o.default)();function h(e){var t=e.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}h.rewind=d.rewind;var p=h;t.default=p},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],l=!1,_=-1;function f(){l&&a&&(l=!1,a.length?c=a.concat(c):_=-1,c.length&&d())}function d(){if(!l){var e=u(f);l=!0;for(var t=c.length;t;){for(a=c,c=[];++_<t;)a&&a[_].run();_=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},MX0m:function(e,t,n){e.exports=n("3niX")},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RGXN:function(e,t,n){e.exports={BusinessList:"BusinessList_BusinessList__3gf2p"}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||s()}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),o=n.n(r),i=n("8Kt/"),s=n.n(i),u=n("q1tI"),a=n.n(u),c=n("fMza");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _,f=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=t,this._name=n,this._money=r,this._businesses=o,this._lastAccess=i}var t,n,r;return t=e,(n=[{key:"export",value:function(){return JSON.stringify({id:this._id,name:this._name,money:this._money,businesses:this._businesses,lastAccess:this._lastAccess})}},{key:"name",get:function(){return this._name},set:function(e){this._name=e}},{key:"money",get:function(){return this._money},set:function(e){this._money=e}},{key:"businesses",get:function(){return this._businesses},set:function(e){this._businesses=e}},{key:"lastAccess",get:function(){return this._lastAccess},set:function(e){this._lastAccess=e}}])&&l(t.prototype,n),r&&l(t,r),e}(),d={message:"LocalStorage seems is not supported."},h={message:"Player has not been found in localstorage."},p={message:"Something went wrong when attempting to get player from localstorage."},S=function(){try{return window.localStorage.setItem("TEST","TEST"),window.localStorage.removeItem("TEST"),!0}catch(e){return!1}},E={},m=!1,T=function(e){var t=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),n=c.PLAYER_CONFIG.INITIAL_AMOUNT_OF_MONEY,r=Date.now();return E=new f(t,e,n,[],r),v(),E},A=function(){var e=0;E.businesses.forEach((function(t){if(t.HAS_MANAGER){var n=Date.now()-t.LAST_TRANSACTION_TIMESTAMP,r=t.SECONDS_TO_DELIVER_GOOD;if(n>=r){var o=parseInt(n/r/1e3);e+=o*(t.SINGLE_ITEM_PRICE*t.CURRENT_LEVEL)}}})),E.money+=e,v(),console.log("While away you collect:".concat(e," $"))},I=function(){if(!0!==_&&!S())throw d;var e=window.localStorage.getItem(c.LOCAL_STORAGE_KEYS.PLAYER);if(null===e)throw h;try{var t=JSON.parse(atob(e)),n=t.id,r=t.name,o=t.money,i=t.businesses;return E=new f(n,r,o,i,Date.now())}catch(s){throw p}},v=function(){if(!0!==_&&!S())throw d;return _=!0,m||(m=!0,setTimeout((function(){window.localStorage.setItem(c.LOCAL_STORAGE_KEYS.PLAYER,btoa(E.export())),m=!1}),5e3)),{success:!0}},N=[{ID:"ESPRESSO",SCREEN_NAME:"Espresso",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:100,INITIAL_COST:10,SINGLE_ITEM_PRICE:1,SECONDS_TO_DELIVER_GOOD:1,LEVELS:200},{ID:"GELATO",SCREEN_NAME:"Gelato",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:1e3,INITIAL_COST:50,SINGLE_ITEM_PRICE:2,SECONDS_TO_DELIVER_GOOD:1,LEVELS:200},{ID:"OLIVE_OIL",SCREEN_NAME:"Olive Oil",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:1500,INITIAL_COST:70,SINGLE_ITEM_PRICE:2,SECONDS_TO_DELIVER_GOOD:2,LEVELS:200},{ID:"MOZZARELLA",SCREEN_NAME:"Mozzarella Cheese",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:1500,INITIAL_COST:70,SINGLE_ITEM_PRICE:2,SECONDS_TO_DELIVER_GOOD:2,LEVELS:200},{ID:"APERITIVO",SCREEN_NAME:"Aperitivo",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:1e3,INITIAL_COST:1e4,SECONDS_TO_DELIVER_GOOD:5,SINGLE_ITEM_PRICE:5,LEVELS:200},{ID:"SPAGHETTI",SCREEN_NAME:"Spaghetti",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:5e3,INITIAL_COST:5e4,SECONDS_TO_DELIVER_GOOD:10,SINGLE_ITEM_PRICE:10,LEVELS:200},{ID:"PIZZA",SCREEN_NAME:"Pizza",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:6e3,INITIAL_COST:6e4,SECONDS_TO_DELIVER_GOOD:15,SINGLE_ITEM_PRICE:15,LEVELS:200},{ID:"WINE",SCREEN_NAME:"Whine Factory",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:7e3,INITIAL_COST:7e4,SECONDS_TO_DELIVER_GOOD:15,SINGLE_ITEM_PRICE:15,LEVELS:200},{ID:"DRESS",SCREEN_NAME:"Dress Factory",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:7e3,INITIAL_COST:7e4,SECONDS_TO_DELIVER_GOOD:15,SINGLE_ITEM_PRICE:15,LEVELS:200},{ID:"VESPA",SCREEN_NAME:"Vespa Factory",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:7e3,INITIAL_COST:7e4,SECONDS_TO_DELIVER_GOOD:15,SINGLE_ITEM_PRICE:15,LEVELS:200},{ID:"FERRARI",SCREEN_NAME:"FERRARI Factory",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:7e3,INITIAL_COST:7e4,SECONDS_TO_DELIVER_GOOD:15,SINGLE_ITEM_PRICE:15,LEVELS:200},{ID:"YATCH",SCREEN_NAME:"YATCH Factory",CURRENT_LEVEL:1,HAS_MANAGER:!1,LAST_TRANSACTION_TIMESTAMP:0,LAST_ON_GOING_TRANSACTION_TIMESTAMP:0,MANAGER_COST:7e3,INITIAL_COST:7e4,SECONDS_TO_DELIVER_GOOD:15,SINGLE_ITEM_PRICE:15,LEVELS:200}],y=n("vSxn"),C=n.n(y),O=n("iXlM"),R=n.n(O),g=a.a.createElement,L=function(e){var t=e.children;return g("div",{className:R.a.innerContainer},t)},b=a.a.createElement,M=function(e){var t=e.children;return b("div",{className:C.a.outerContainer},b(L,null,t))},w=n("i0WT"),G=n.n(w),D=n("yRvg"),P=n.n(D),x=a.a.createElement,k=function(e){var t=e.name,n=e.profilePic;return x("div",{className:P.a.profile},x("img",{src:n,alt:"Profile Pic"}),x("p",null,t))},j=n("f8q6"),V=n.n(j),F=a.a.createElement,B=function(e){var t=e.money,n=void 0===t?0:t,r=e.currency,o=void 0===r?"$":r;return F("div",{className:V.a.money},F("p",null,n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",o))},z=a.a.createElement,H=function(e){var t=e.name,n=e.profilePic,r=e.money;return z("div",{className:G.a.navbar},z(k,{name:t,profilePic:n}),z(B,{money:r}))},U=n("RGXN"),Y=n.n(U),W=a.a.createElement,q=function(e){var t=e.children;return W("div",{className:Y.a.BusinessList},t)},Z=n("38fk"),X=n.n(Z),J=n("gmRY"),$=n.n(J),K=a.a.createElement,Q=function(e){var t=e.children,n=e.onClick;return K("div",{onClick:n,className:$.a.button},t)},ee=a.a.createElement,te=function(e){var t=e.id,n=e.name,r=e.level,o=e.hasManager,i=e.secondsForGoodGeneration,s=e.revenue,a=e.collectMoney,c=e.upgradeCost,l=e.upgradeBusiness,_=e.managerCost,f=e.buyManager,d=e.updateOnGoingTransaction,h=e.img,p=Object(u.useState)(o),S=p[0],E=p[1],m=Object(u.useState)(o),T=m[0],A=m[1],I=Object(u.useState)(0),v=I[0],N=I[1];return Object(u.useEffect)((function(){var e,t,n=0;return T&&(t=setInterval((function(){n+=.1,d(),N(n/i*1e3)}),100),e=setInterval((function(){n=100,a(),n=0}),1e3*i)),function(){clearInterval(t),clearInterval(e)}}),[T]),ee("div",{key:"elem-bought-"+t,className:X.a.businessCard},ee("div",{className:X.a.businessCardHead},ee("div",null,ee("img",{src:h,alt:"Img for: ".concat(t)})),ee("div",null,ee("p",null,n," | Level ",r," / 200 "))),ee("div",{className:X.a.businessCardBody},ee("progress",{className:X.a.progress,max:"1000",value:v}),ee("div",null,o?null:ee(Q,{disabled:S,onClick:function(){a(),E(!0);var e=0,t=setInterval((function(){N((e+=1)/i*100),d()}),1e3);setTimeout((function(){E(!1),clearInterval(t),N(0)}),1e3*i)}},"Collect (+$",s,")"),ee(Q,{onClick:l},"Upgrade (",c,"$)"),o?null:ee(Q,{onClick:function(){f()&&A(!0)}},"Buy Manager (",_,"$)"))))},ne=n("oNEN"),re=n.n(ne),oe=a.a.createElement,ie=function(e){var t=e.business,n=e.img,r=e.buyBusinessAction;return oe("div",{key:"elem-bought-"+t.ID,className:re.a.businessCard},oe("div",{className:re.a.businessCardHead},oe("div",null,oe("img",{src:n,alt:"Img for: ".concat(t.ID)})),oe("div",null,oe("p",null,t.SCREEN_NAME))),oe("div",{className:re.a.businessCardBody},oe("div",null,oe(Q,{onClick:r},"Buy (",t.INITIAL_COST,"$)"))))},se=a.a.createElement;t.default=function(){var e=Object(u.useState)(null),t=e[0],n=e[1],r=Object(u.useState)(),i=r[0],a=r[1],c=Object(u.useState)(null),l=c[0],_=c[1],f=Object(u.useState)(null),d=f[0],h=f[1],p=function(){a(E.money),_(E.businesses),h(function(){var e={};return E.businesses.forEach((function(t){return e[t.ID]=1})),N.filter((function(t){return 1!==e[t.ID]}))}())},S=function(e){(function(e){return!(E.money<e.INITIAL_COST)&&(E.businesses.push(e),E.money-=e.INITIAL_COST,v(),!0)})(e)&&p()},m=function(e,t){!function(e,t){E.money+=e,E.businesses.map((function(e){e.ID===t&&(e.LAST_TRANSACTION_TIMESTAMP=Date.now(),e.LAST_ON_GOING_TRANSACTION_TIMESTAMP=Date.now())})),v()}(e,t),p()},y=function(e){!function(e){var t=E.businesses.filter((function(t){return t.ID===e}))[0];if(void 0===t)return"Something wrong";if(t.CURRENT_LEVEL>=200)return"Level max already";var n=(t.CURRENT_LEVEL+1)*t.INITIAL_COST;if(E.money<n)return"You don't have enough money";E.businesses.map((function(t){t.ID===e&&(t.CURRENT_LEVEL+=1)})),E.money-=n,v()}(e),p()},C=function(e){var t=function(e){var t=E.businesses.filter((function(t){return t.ID===e}))[0];return void 0===t?"Something wrong":t.HAS_MANAGER?"Manager already bought":E.money<t.MANAGER_COST?"You don't have enough money to buy manager":(E.businesses.map((function(t){t.ID===e&&(t.HAS_MANAGER=!0)})),E.money-=t.MANAGER_COST,v(),!0)}(e);return p(),t};return Object(u.useEffect)((function(){n(function(){try{E=I()}catch(t){var e="JohnDoe_"+Date.now();E=T(e)}return A(),E}()),p()}),[]),se("div",{className:"jsx-345400554 container"},se(s.a,null,se("title",{className:"jsx-345400554"},"Adventure Cap-Italy-St"),se("link",{rel:"icon",href:"/favicon.ico",className:"jsx-345400554"}),se("link",{href:"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap",rel:"stylesheet",className:"jsx-345400554"})),se(M,null,se(H,{name:t&&t.name,profilePic:"/static/images/profile/profile.png",money:i}),se(q,null,l&&l.map((function(e){return se(te,{id:e.ID,name:e.SCREEN_NAME,level:e.CURRENT_LEVEL,hasManager:e.HAS_MANAGER,revenue:e.SINGLE_ITEM_PRICE*e.CURRENT_LEVEL,collectMoney:function(){return m(e.SINGLE_ITEM_PRICE*e.CURRENT_LEVEL,e.ID)},secondsForGoodGeneration:e.SECONDS_TO_DELIVER_GOOD,managerCost:e.MANAGER_COST,upgradeCost:(e.CURRENT_LEVEL+1)*e.INITIAL_COST,upgradeBusiness:function(){return y(e.ID)},buyManager:function(){return C(e.ID)},updateOnGoingTransaction:function(){return t=e.ID,E.businesses.map((function(e){e.ID===t&&(e.LAST_ON_GOING_TRANSACTION_TIMESTAMP=Date.now())})),void v();var t},img:"/static/images/businesses/".concat(e.ID,"/main.png")})})),d&&d.map((function(e){return se(ie,{business:e,img:"/static/images/businesses/".concat(e.ID,"/main.png"),buyBusinessAction:function(){return S(e)}})})))),se(o.a,{id:"345400554"},["body{margin:0;font-family:'Dancing Script',cursive;}"]))}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),s=n("7W2i"),u=n("a1gu"),a=n("Nsbk"),c=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var _=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){s(c,u);var a=l(c);function c(e){var i;return r(this,c),i=a.call(this,e),f&&(t.add(o(i)),n(o(i))),i}return i(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(_.Component))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,u=t.optimizeForSpeed,a=void 0===u?r:u,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var _=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=_?_.getAttribute("content"):null}var t,i,u,a=e.prototype;return a.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(u){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,n){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),u&&n(t,u),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},f8q6:function(e,t,n){e.exports={money:"Money_money__2pn5Y"}},fMza:function(e){e.exports=JSON.parse('{"PLAYER_CONFIG":{"INITIAL_AMOUNT_OF_MONEY":150},"LOCAL_STORAGE_KEYS":{"PLAYER":"player"}}')},gmRY:function(e,t,n){e.exports={button:"Button_button__XEX2T"}},i0WT:function(e,t,n){e.exports={navbar:"Navbar_navbar__--PDe"}},iXlM:function(e,t,n){e.exports={innerContainer:"InnerContainer_innerContainer__2Yoew"}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},oNEN:function(e,t,n){e.exports={businessCard:"WannabeBusiness_businessCard__2bTGV",businessCardHead:"WannabeBusiness_businessCardHead__fmLp1",businessCardBody:"WannabeBusiness_businessCardBody__3To9D"}},vSxn:function(e,t,n){e.exports={outerContainer:"OuterContainer_outerContainer__3L-jZ"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},yRvg:function(e,t,n){e.exports={profile:"Profile_profile__1yerM"}}},[["vlRD",0,1]]]);