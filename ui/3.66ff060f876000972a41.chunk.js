(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"91ced7dd2f5b8dc7950f":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=n("8a2d1b95e05b6a321e74"),c=n.n(a),i=n("d7dd51e1bf6bfc2c9c3d"),u=n("ab4cb61bcb2dc161defb"),s=n("a28fc3c963a1d4d1a2e5"),f=n("0d7f0986bcd2f33d8a2a"),l=n("ab039aecd4a1d4fedc0e"),p=function(e){return e.get("global")},d=n("5ef9de3df8d92ea0e41c"),b=n.n(d),y=n("f2873ecf7390fe7d7c89"),m=n.n(y),g=n("5fa3f8487e09c6182715"),h=n.n(g),v=n("f3b0ff1628e56352bcbf"),j=n.n(v),O=n("a1cf5d6fa4ed65a6ddd5"),S=n.n(O),w=n("6a4f9c383785f9168266"),_=n.n(w),E=n("d3a850c4000d77bccc89"),P=n.n(E);function R(e){var t={dispatch:j.a,subscribe:j.a,getState:j.a,replaceReducer:j.a,runSaga:j.a,injectedReducers:P.a,injectedSagas:P.a};_()(m()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var C="@@saga-injector/restart-on-remount",x="@@saga-injector/daemon",k="@@saga-injector/once-till-unmount";function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){T(e,t,n[t])})}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=[C,x,k],H=function(e){return _()(h()(e)&&!S()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},M=function(e){var t={saga:j.a,mode:function(e){return h()(e)&&A.includes(e)}};_()(m()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function D(e){return R(e),{injectSaga:function(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;t||R(e);var a=N({},r,{mode:r.mode||C}),c=a.saga,i=a.mode;H(n),M(a);var u=Reflect.has(e.injectedSagas,n);(!u||u&&i!==x&&i!==k)&&(e.injectedSagas[n]=N({},a,{task:e.runSaga(c,o)}))}}(e,!0),ejectSaga:function(e,t){return function(n){if(t||R(e),H(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode!==x&&(r.task.cancel(),e.injectedSagas[n]="done")}}}(e,!0)}}function I(e){return(I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=n("491cc2e27aa2b4221847");function q(e){return R(e),{injectReducer:function(e,t){return function(n,r){t||R(e),_()(h()(n)&&!S()(n)&&j()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(L.a)(e.injectedReducers)))}}(e,!0)}}function V(e){return(V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=Object({NODE_ENV:"production"}).REACT_APP_DNA_INSTANCE?Object({NODE_ENV:"production"}).REACT_APP_DNA_INSTANCE:"ERROR: MOCK INSTANCE",Y="whoami",Z="holo-hosting-app/HostHomePage/CHANGE_USERNAME";var ee=n("a72b40110d9c31c9b5c5"),te=n("54f683fcda7806277002");function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=Object(te.fromJS)({username:"",my_agent_string:"",my_agent_hash:""});var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return console.log("Reducer Changes username"),e.set("username",t.name.replace(/@/gi,""));case"".concat(X,"/").concat(Y,"/whoami_SUCCESS"):return console.log("FETCH_AGENT_STRING_SUCCESS payload",payload),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ne(e,t,n[t])})}return e}({},e,{my_agent_string:payload.name,my_agent_hash:payload.hash});case"".concat(X,"/").concat(Y,"/whoami_FAILURE"):console.log("FETCH_AGENT_STRING_SUCCESS payload",payload);default:return e}},ae=function(e){return e.get("hosthome",re)},ce=function(){return Object(s.a)(ae,function(e){return e.get("username")})},ie=n("6c68d13fe9e3e77d8fc4"),ue=n("fcb99a06256635f70435");function se(e){return 204===e.status||205===e.status?null:e.json()}function fe(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function le(e,t){return fetch(e,t).then(fe).then(se)}var pe=regeneratorRuntime.mark(be),de=regeneratorRuntime.mark(ye);function be(){var e,t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("getRepos"),r.next=3,Object(ie.c)(ce());case 3:return e=r.sent,t="https://api.github.com/users/".concat(e,"/repos?type=all&sort=updated"),r.prev=5,r.next=8,Object(ie.a)(le,t);case 8:return n=r.sent,r.next=11,Object(ie.b)(Object(ee.reposLoaded)(n,e));case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(5),r.next=17,Object(ie.b)(Object(ee.repoLoadingError)(r.t0));case 17:case"end":return r.stop()}},pe,this,[[5,13]])}function ye(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("tirggered githubData, calling getRepos"),e.next=3,Object(ie.d)(ue.a,be);case 3:case"end":return e.stop()}},de,this)}var me,ge=n("0b3cb19af78752326f59"),he=ge.c.section.withConfig({displayName:"Section",componentId:"sc-1st74kz-0"})(["margin:3em auto;&:first-child{margin-top:0;}"]),ve=Object(ge.c)(he).withConfig({displayName:"CenteredSection",componentId:"sc-1ss361w-0"})(["text-align:center;"]),je="boilerplate.containers.HomePage",Oe=Object(l.defineMessages)({startProjectHeader:{id:"".concat(je,".start_project.header"),defaultMessage:"Start your next react project in seconds"},startProjectMessage:{id:"".concat(je,".start_project.message"),defaultMessage:"Welcome to your Holo Host HomePage"},trymeHeader:{id:"".concat(je,".tryme.header"),defaultMessage:"Try me!"},trymeMessage:{id:"".concat(je,".tryme.message"),defaultMessage:"Show Github repositories by"},trymeAtPrefix:{id:"".concat(je,".tryme.atPrefix"),defaultMessage:"@"}});function Se(e){return(Se="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t,n,r){me||(me="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var i=new Array(a),u=0;u<a;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:me,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function _e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t){return!t||"object"!==Se(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Pe(e){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"HostHomePage",function(){return Te}),n.d(t,"mapStateToProps",function(){return Ae});var Ce,xe,ke,Ne=we(f.Helmet,{},void 0,we("title",{},void 0,"Host Homepage"),we("meta",{name:"description",content:"Holo Host: Host Homepage"})),Te=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ee(this,Pe(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.props.username&&this.props.username.trim().length>0&&this.props.onSubmitForm()}},{key:"render",value:function(){console.log("INSIDE THE HOST HOMEPAGE",this.props);var e=this.props;e.loading,e.error,e.repos;return we("article",{},void 0,Ne,we("div",{},void 0,we(ve,{},void 0,we("h1",{},void 0,o.a.createElement(l.FormattedMessage,Oe.header))),we("section",{},void 0,we("form",{onSubmit:this.props.onSubmitForm},void 0,we("label",{htmlFor:"username"},void 0,o.a.createElement(l.FormattedMessage,Oe.formMessage),we("input",{id:"username",type:"text",placeholder:"mxstbr",value:this.props.username,onChange:this.props.onChangeUsername}))))))}}])&&_e(n.prototype,r),a&&_e(n,a),t}(),Ae=Object(s.b)({loading:Object(s.a)(p,function(e){return e.get("loading")}),error:Object(s.a)(p,function(e){return e.get("error")}),repos:Object(s.a)(p,function(e){return e.getIn(["userData","repositories"])}),username:ce()}),He=Object(i.connect)(Ae,function(e){return{fetch_agent_string:function(){console.log("dispatching fetch_agent_string"),e(FetchAgentStringAsyncAction.create([]))},onChangeUsername:function(t){return e((n=t.target.value,{type:Z,username:n,meta:{fetch:UPDATE,resource:"provider"}}));var n},onSubmitForm:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e(Object(ee.loadRepos)())}}}),Me=(xe=(Ce={key:"hosthome",reducer:oe}).key,ke=Ce.reducer,function(e){var t=function(t){function n(){var e,t,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,t=!(o=(e=z(n)).call.apply(e,[this].concat(c)))||"object"!==V(o)&&"function"!==typeof o?B(r):o,Q(B(B(t)),"injectors",q(t.context.store)),t}var r,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(n,o.a.Component),r=n,(a=[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(xe,ke)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}])&&$(r.prototype,a),c&&$(r,c),n}();return Q(t,"WrappedComponent",e),Q(t,"contextTypes",{store:c.a.object.isRequired}),Q(t,"displayName","withReducer(".concat(e.displayName||e.name||"Component",")")),hoistNonReactStatics(t,e)}),De=function(e){var t=e.key,n=e.saga,r=e.mode;return function(e){var a=function(a){function c(){var e,t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=this,t=!(r=(e=U(c)).call.apply(e,[this].concat(a)))||"object"!==I(r)&&"function"!==typeof r?W(n):r,J(W(W(t)),"injectors",D(t.context.store)),t}var i,u,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(c,o.a.Component),i=c,(u=[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(t,{saga:n,mode:r},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(t)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}])&&F(i.prototype,u),s&&F(i,s),c}();return J(a,"WrappedComponent",e),J(a,"contextTypes",{store:c.a.object.isRequired}),J(a,"displayName","withSaga(".concat(e.displayName||e.name||"Component",")")),b()(a,e)}}({key:"hosthome",saga:ye});t.default=Object(u.compose)(Me,De,He)(Te)}}]);