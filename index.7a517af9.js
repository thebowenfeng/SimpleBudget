let e,t,r;function n(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var i,a,o,s,l,u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function c(e){return e&&e.__esModule?e.default:e}var d={},f={},h=u.parcelRequiredf4b;null==h&&((h=function(e){if(e in d)return d[e].exports;if(e in f){var t=f[e];delete f[e];var r={id:e,exports:{}};return d[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){f[e]=t},u.parcelRequiredf4b=h),h.register("1b2ls",function(e,t){n(e.exports,"Fragment",()=>r,e=>r=e),n(e.exports,"jsx",()=>i,e=>i=e),n(e.exports,"jsxs",()=>a,e=>a=e);var r,i,a,o=h("acw62"),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,i={},a=null,o=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(o=t.ref),t)u.call(t,n)&&!d.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:a,ref:o,props:i,_owner:c.current}}r=l,i=f,a=f}),h.register("acw62",function(e,t){e.exports=h("2pUnB")}),h.register("2pUnB",function(e,t){n(e.exports,"Children",()=>r,e=>r=e),n(e.exports,"Component",()=>i,e=>i=e),n(e.exports,"Fragment",()=>a,e=>a=e),n(e.exports,"Profiler",()=>o,e=>o=e),n(e.exports,"PureComponent",()=>s,e=>s=e),n(e.exports,"StrictMode",()=>l,e=>l=e),n(e.exports,"Suspense",()=>u,e=>u=e),n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>c,e=>c=e),n(e.exports,"cloneElement",()=>d,e=>d=e),n(e.exports,"createContext",()=>f,e=>f=e),n(e.exports,"createElement",()=>h,e=>h=e),n(e.exports,"createFactory",()=>p,e=>p=e),n(e.exports,"createRef",()=>m,e=>m=e),n(e.exports,"forwardRef",()=>g,e=>g=e),n(e.exports,"isValidElement",()=>v,e=>v=e),n(e.exports,"lazy",()=>b,e=>b=e),n(e.exports,"memo",()=>y,e=>y=e),n(e.exports,"startTransition",()=>w,e=>w=e),n(e.exports,"unstable_act",()=>x,e=>x=e),n(e.exports,"useCallback",()=>k,e=>k=e),n(e.exports,"useContext",()=>S,e=>S=e),n(e.exports,"useDebugValue",()=>_,e=>_=e),n(e.exports,"useDeferredValue",()=>E,e=>E=e),n(e.exports,"useEffect",()=>C,e=>C=e),n(e.exports,"useId",()=>T,e=>T=e),n(e.exports,"useImperativeHandle",()=>P,e=>P=e),n(e.exports,"useInsertionEffect",()=>I,e=>I=e),n(e.exports,"useLayoutEffect",()=>A,e=>A=e),n(e.exports,"useMemo",()=>R,e=>R=e),n(e.exports,"useReducer",()=>O,e=>O=e),n(e.exports,"useRef",()=>M,e=>M=e),n(e.exports,"useState",()=>N,e=>N=e),n(e.exports,"useSyncExternalStore",()=>z,e=>z=e),n(e.exports,"useTransition",()=>j,e=>j=e),n(e.exports,"version",()=>L,e=>L=e);var r,i,a,o,s,l,u,c,d,f,h,p,m,g,v,b,y,w,x,k,S,_,E,C,T,P,I,A,R,O,M,N,z,j,L,D=Symbol.for("react.element"),F=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),W=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),K=Symbol.iterator,X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,J={};function Z(e,t,r){this.props=e,this.context=t,this.refs=J,this.updater=r||X}function ee(){}function et(e,t,r){this.props=e,this.context=t,this.refs=J,this.updater=r||X}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var er=et.prototype=new ee;er.constructor=et,Q(er,Z.prototype),er.isPureReactComponent=!0;var en=Array.isArray,ei=Object.prototype.hasOwnProperty,ea={current:null},eo={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,r){var n,i={},a=null,o=null;if(null!=t)for(n in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)ei.call(t,n)&&!eo.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:D,type:e,key:a,ref:o,props:i,_owner:ea.current}}function el(e){return"object"==typeof e&&null!==e&&e.$$typeof===D}var eu=/\/+/g;function ec(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function ed(e,t,r){if(null==e)return e;var n=[],i=0;return function e(t,r,n,i,a){var o,s,l,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case D:case F:c=!0}}if(c)return a=a(c=t),t=""===i?"."+ec(c,0):i,en(a)?(n="",null!=t&&(n=t.replace(eu,"$&/")+"/"),e(a,r,n,"",function(e){return e})):null!=a&&(el(a)&&(o=a,s=n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(eu,"$&/")+"/")+t,a={$$typeof:D,type:o.type,key:s,ref:o.ref,props:o.props,_owner:o._owner}),r.push(a)),1;if(c=0,i=""===i?".":i+":",en(t))for(var d=0;d<t.length;d++){var f=i+ec(u=t[d],d);c+=e(u,r,n,f,a)}else if("function"==typeof(f=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=K&&l[K]||l["@@iterator"])?l:null))for(t=f.call(t),d=0;!(u=t.next()).done;)f=i+ec(u=u.value,d++),c+=e(u,r,n,f,a);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}(e,n,"","",function(e){return t.call(r,e,i++)}),n}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var eh={current:null},ep={transition:null};r={map:ed,forEach:function(e,t,r){ed(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,a=$,o=V,s=et,l=B,u=q,c={ReactCurrentDispatcher:eh,ReactCurrentBatchConfig:ep,ReactCurrentOwner:ea},d=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Q({},e.props),i=e.key,a=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,o=ea.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ei.call(t,l)&&!eo.hasOwnProperty(l)&&(n[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:D,type:e.type,key:i,ref:a,props:n,_owner:o}},f=function(e){return(e={$$typeof:W,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:U,_context:e},e.Consumer=e},h=es,p=function(e){var t=es.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:H,render:e}},v=el,b=function(e){return{$$typeof:Y,_payload:{_status:-1,_result:e},_init:ef}},y=function(e,t){return{$$typeof:G,type:e,compare:void 0===t?null:t}},w=function(e){var t=ep.transition;ep.transition={};try{e()}finally{ep.transition=t}},x=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return eh.current.useCallback(e,t)},S=function(e){return eh.current.useContext(e)},_=function(){},E=function(e){return eh.current.useDeferredValue(e)},C=function(e,t){return eh.current.useEffect(e,t)},T=function(){return eh.current.useId()},P=function(e,t,r){return eh.current.useImperativeHandle(e,t,r)},I=function(e,t){return eh.current.useInsertionEffect(e,t)},A=function(e,t){return eh.current.useLayoutEffect(e,t)},R=function(e,t){return eh.current.useMemo(e,t)},O=function(e,t,r){return eh.current.useReducer(e,t,r)},M=function(e){return eh.current.useRef(e)},N=function(e){return eh.current.useState(e)},z=function(e,t,r){return eh.current.useSyncExternalStore(e,t,r)},j=function(){return eh.current.useTransition()},L="18.2.0"}),h.register("Xw6Mv",function(e,t){n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>U,e=>U=e),n(e.exports,"createPortal",()=>W,e=>W=e),n(e.exports,"createRoot",()=>H,e=>H=e),n(e.exports,"findDOMNode",()=>q,e=>q=e),n(e.exports,"flushSync",()=>G,e=>G=e),n(e.exports,"hydrate",()=>Y,e=>Y=e),n(e.exports,"hydrateRoot",()=>K,e=>K=e),n(e.exports,"render",()=>X,e=>X=e),n(e.exports,"unmountComponentAtNode",()=>Q,e=>Q=e),n(e.exports,"unstable_batchedUpdates",()=>J,e=>J=e),n(e.exports,"unstable_renderSubtreeIntoContainer",()=>Z,e=>Z=e),n(e.exports,"version",()=>ee,e=>ee=e);var r,i,a,o,s,l,u=h("acw62"),c=h("fO90s");function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(p[e]=t,e=0;e<t.length;e++)f.add(t[e])}var v=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),b=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},x={};function k(e,t,r,n,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new k(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function E(e){return e[1].toUpperCase()}function C(e,t,r,n){var i,a=S.hasOwnProperty(t)?S[t]:null;(null!==a?0!==a.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null==t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(n)return!1;if(null!==r)return!r.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,a,n)&&(r=null),n||null===a?(i=t,(!!b.call(x,i)||!b.call(w,i)&&(y.test(i)?x[i]=!0:(w[i]=!0,!1)))&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r))):a.mustUseProperty?e[a.propertyName]=null===r?3!==a.type&&"":r:(t=a.attributeName,n=a.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(a=a.type)||4===a&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_,E);S[t]=new k(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_,E);S[t]=new k(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_,E);S[t]=new k(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});var T=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),I=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var $=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var B=Symbol.iterator;function V(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=B&&e[B]||e["@@iterator"])?e:null}var U,W,H,q,G,Y,K,X,Q,J,Z,ee,et,er=Object.assign;function en(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ei=!1;function ea(e,t){if(!e||ei)return"";ei=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(t){if(t&&n&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),a=n.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s)break}}}finally{ei=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?en(e):""}function eo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function es(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=es(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=es(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ed(e,t){var r=t.checked;return er({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function ef(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=eo(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function eh(e,t){null!=(t=t.checked)&&C(e,"checked",t,!1)}function ep(e,t){eh(e,t);var r=eo(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,r):t.hasOwnProperty("defaultValue")&&eg(e,t.type,eo(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function eg(e,t,r){("number"!==t||ec(e.ownerDocument)!==e)&&(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ev=Array.isArray;function eb(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(i=0,r=""+eo(r),t=null;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ey(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(d(91));return er({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ew(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(d(92));if(ev(r)){if(1<r.length)throw Error(d(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:eo(r)}}function ex(e,t){var r=eo(t.value),n=eo(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function ek(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function e_(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eS(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eE,eC,eT=(eE=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eC=eC||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eC.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return eE(e,t,r,n)})}:eE);function eP(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType){r.nodeValue=t;return}}e.textContent=t}var eI={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eA=["Webkit","ms","Moz","O"];function eR(e,t,r){return null==t||"boolean"==typeof t||""===t?"":r||"number"!=typeof t||0===t||eI.hasOwnProperty(e)&&eI[e]?(""+t).trim():t+"px"}function eO(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),i=eR(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}Object.keys(eI).forEach(function(e){eA.forEach(function(t){eI[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eI[e]})});var eM=er({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eN(e,t){if(t){if(eM[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(d(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(d(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(d(62))}}function ez(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ej=null;function eL(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eD=null,eF=null,e$=null;function eB(e){if(e=nK(e)){if("function"!=typeof eD)throw Error(d(280));var t=e.stateNode;t&&(t=nQ(t),eD(e.stateNode,e.type,t))}}function eV(e){eF?e$?e$.push(e):e$=[e]:eF=e}function eU(){if(eF){var e=eF,t=e$;if(e$=eF=null,eB(e),t)for(e=0;e<t.length;e++)eB(t[e])}}function eW(e,t){return e(t)}function eH(){}var eq=!1;function eG(e,t,r){if(eq)return e(t,r);eq=!0;try{return eW(e,t,r)}finally{eq=!1,(null!==eF||null!==e$)&&(eH(),eU())}}function eY(e,t){var r=e.stateNode;if(null===r)return null;var n=nQ(r);if(null===n)return null;switch(r=n[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(d(231,t,typeof r));return r}var eK=!1;if(v)try{var eX={};Object.defineProperty(eX,"passive",{get:function(){eK=!0}}),window.addEventListener("test",eX,eX),window.removeEventListener("test",eX,eX)}catch(e){eK=!1}function eQ(e,t,r,n,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(e){this.onError(e)}}var eJ=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eJ=!0,eZ=e}};function e5(e,t,r,n,i,a,o,s,l){eJ=!1,eZ=null,eQ.apply(e2,arguments)}function e3(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(r=t.return),e=t.return;while(e)}return 3===t.tag?r:null}function e4(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e6(e){if(e3(e)!==e)throw Error(d(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e3(e)))throw Error(d(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(n=i.return)){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return e6(i),e;if(a===n)return e6(i),t;a=a.sibling}throw Error(d(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o)throw Error(d(189))}}if(r.alternate!==n)throw Error(d(190))}if(3!==r.tag)throw Error(d(188));return r.stateNode.current===r?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var r=e(t);if(null!==r)return r;t=t.sibling}return null}(e):null}var e9=c.unstable_scheduleCallback,e7=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tr=c.unstable_now,tn=c.unstable_getCurrentPriorityLevel,ti=c.unstable_ImmediatePriority,ta=c.unstable_UserBlockingPriority,to=c.unstable_NormalPriority,ts=c.unstable_LowPriority,tl=c.unstable_IdlePriority,tu=null,tc=null,td=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tf(e)/th|0)|0},tf=Math.log,th=Math.LN2,tp=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tv(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&r;if(0!==o){var s=o&~i;0!==s?n=tg(s):0!=(a&=o)&&(n=tg(a))}else 0!=(o=r&~i)?n=tg(o):0!==a&&(n=tg(a));if(0===n)return 0;if(0!==t&&t!==n&&0==(t&i)&&((i=n&-n)>=(a=t&-t)||16===i&&0!=(4194240&a)))return t;if(0!=(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)i=1<<(r=31-td(t)),n|=e[r],t&=~i;return n}function tb(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ty(){var e=tp;return 0==(4194240&(tp<<=1))&&(tp=64),e}function tw(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function tx(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-td(t)]=r}function tk(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-td(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var tS=0;function t_(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tE,tC,tT,tP,tI,tA=!1,tR=[],tO=null,tM=null,tN=null,tz=new Map,tj=new Map,tL=[],tD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tF(e,t){switch(e){case"focusin":case"focusout":tO=null;break;case"dragenter":case"dragleave":tM=null;break;case"mouseover":case"mouseout":tN=null;break;case"pointerover":case"pointerout":tz.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tj.delete(t.pointerId)}}function t$(e,t,r,n,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},null!==t&&null!==(t=nK(t))&&tC(t)):(e.eventSystemFlags|=n,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i)),e}function tB(e){var t=nY(e.target);if(null!==t){var r=e3(t);if(null!==r){if(13===(t=r.tag)){if(null!==(t=e4(r))){e.blockedOn=t,tI(e.priority,function(){tT(r)});return}}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===r.tag?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tV(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=nK(r))&&tC(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);ej=n,r.target.dispatchEvent(n),ej=null,t.shift()}return!0}function tU(e,t,r){tV(e)&&r.delete(t)}function tW(){tA=!1,null!==tO&&tV(tO)&&(tO=null),null!==tM&&tV(tM)&&(tM=null),null!==tN&&tV(tN)&&(tN=null),tz.forEach(tU),tj.forEach(tU)}function tH(e,t){e.blockedOn===t&&(e.blockedOn=null,tA||(tA=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tW)))}function tq(e){function t(t){return tH(t,e)}if(0<tR.length){tH(tR[0],e);for(var r=1;r<tR.length;r++){var n=tR[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==tO&&tH(tO,e),null!==tM&&tH(tM,e),null!==tN&&tH(tN,e),tz.forEach(t),tj.forEach(t),r=0;r<tL.length;r++)(n=tL[r]).blockedOn===e&&(n.blockedOn=null);for(;0<tL.length&&null===(r=tL[0]).blockedOn;)tB(r),null===r.blockedOn&&tL.shift()}var tG=T.ReactCurrentBatchConfig,tY=!0;function tK(e,t,r,n){var i=tS,a=tG.transition;tG.transition=null;try{tS=1,tQ(e,t,r,n)}finally{tS=i,tG.transition=a}}function tX(e,t,r,n){var i=tS,a=tG.transition;tG.transition=null;try{tS=4,tQ(e,t,r,n)}finally{tS=i,tG.transition=a}}function tQ(e,t,r,n){if(tY){var i=tZ(e,t,r,n);if(null===i)nw(e,t,n,tJ,r),tF(e,n);else if(function(e,t,r,n,i){switch(t){case"focusin":return tO=t$(tO,e,t,r,n,i),!0;case"dragenter":return tM=t$(tM,e,t,r,n,i),!0;case"mouseover":return tN=t$(tN,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return tz.set(a,t$(tz.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,tj.set(a,t$(tj.get(a)||null,e,t,r,n,i)),!0}return!1}(i,e,t,r,n))n.stopPropagation();else if(tF(e,n),4&t&&-1<tD.indexOf(e)){for(;null!==i;){var a=nK(i);if(null!==a&&tE(a),null===(a=tZ(e,t,r,n))&&nw(e,t,n,tJ,r),a===i)break;i=a}null!==i&&n.stopPropagation()}else nw(e,t,n,null,r)}}var tJ=null;function tZ(e,t,r,n){if(tJ=null,null!==(e=nY(e=eL(n)))){if(null===(t=e3(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=e4(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tJ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tn()){case ti:return 1;case ta:return 4;case to:case ts:return 16;case tl:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t5=null;function t3(){if(t5)return t5;var e,t,r=t2,n=r.length,i="value"in t1?t1.value:t1.textContent,a=i.length;for(e=0;e<n&&r[e]===i[e];e++);var o=n-e;for(t=1;t<=o&&r[n-t]===i[a-t];t++);return t5=i.slice(e,1<t?1-t:void 0)}function t4(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t6(){return!0}function t8(){return!1}function t9(e){function t(t,r,n,i,a){for(var o in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?t6:t8,this.isPropagationStopped=t8,this}return er(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t6)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t6)},persist:function(){},isPersistent:t6}),t}var t7,re,rt,rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rn=t9(rr),ri=er({},rr,{view:0,detail:0}),ra=t9(ri),ro=er({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rv,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rt&&(rt&&"mousemove"===e.type?(t7=e.screenX-rt.screenX,re=e.screenY-rt.screenY):re=t7=0,rt=e),t7)},movementY:function(e){return"movementY"in e?e.movementY:re}}),rs=t9(ro),rl=t9(er({},ro,{dataTransfer:0})),ru=t9(er({},ri,{relatedTarget:0})),rc=t9(er({},rr,{animationName:0,elapsedTime:0,pseudoElement:0})),rd=t9(er({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),rf=t9(er({},rr,{data:0})),rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=rm[e])&&!!t[e]}function rv(){return rg}var rb=t9(er({},ri,{key:function(e){if(e.key){var t=rh[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t4(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rv,charCode:function(e){return"keypress"===e.type?t4(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t4(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),ry=t9(er({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rw=t9(er({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rv})),rx=t9(er({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0})),rk=t9(er({},ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),rS=[9,13,27,32],r_=v&&"CompositionEvent"in window,rE=null;v&&"documentMode"in document&&(rE=document.documentMode);var rC=v&&"TextEvent"in window&&!rE,rT=v&&(!r_||rE&&8<rE&&11>=rE),rP=!1;function rI(e,t){switch(e){case"keyup":return -1!==rS.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rA(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var rR=!1,rO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rM(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!rO[e.type]:"textarea"===t}function rN(e,t,r,n){eV(n),0<(t=nk(t,"onChange")).length&&(r=new rn("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var rz=null,rj=null;function rL(e){np(e,0)}function rD(e){if(eu(nX(e)))return e}function rF(e,t){if("change"===e)return t}var r$=!1;if(v){if(v){var rB="oninput"in document;if(!rB){var rV=document.createElement("div");rV.setAttribute("oninput","return;"),rB="function"==typeof rV.oninput}r=rB}else r=!1;r$=r&&(!document.documentMode||9<document.documentMode)}function rU(){rz&&(rz.detachEvent("onpropertychange",rW),rj=rz=null)}function rW(e){if("value"===e.propertyName&&rD(rj)){var t=[];rN(t,rj,e,eL(e)),eG(rL,t)}}function rH(e,t,r){"focusin"===e?(rU(),rz=t,rj=r,rz.attachEvent("onpropertychange",rW)):"focusout"===e&&rU()}function rq(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return rD(rj)}function rG(e,t){if("click"===e)return rD(t)}function rY(e,t){if("input"===e||"change"===e)return rD(t)}var rK="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function rX(e,t){if(rK(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!b.call(t,i)||!rK(e[i],t[i]))return!1}return!0}function rQ(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rJ(e,t){var r,n=rQ(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rQ(n)}}function rZ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var r="string"==typeof t.contentWindow.location.href}catch(e){r=!1}if(r)e=t.contentWindow;else break;t=ec(e.document)}return t}function r0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var r1=v&&"documentMode"in document&&11>=document.documentMode,r2=null,r5=null,r3=null,r4=!1;function r6(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;r4||null==r2||r2!==ec(n)||(n="selectionStart"in(n=r2)&&r0(n)?{start:n.selectionStart,end:n.selectionEnd}:{anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},r3&&rX(r3,n)||(r3=n,0<(n=nk(r5,"onSelect")).length&&(t=new rn("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=r2)))}function r8(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var r9={animationend:r8("Animation","AnimationEnd"),animationiteration:r8("Animation","AnimationIteration"),animationstart:r8("Animation","AnimationStart"),transitionend:r8("Transition","TransitionEnd")},r7={},ne={};function nt(e){if(r7[e])return r7[e];if(!r9[e])return e;var t,r=r9[e];for(t in r)if(r.hasOwnProperty(t)&&t in ne)return r7[e]=r[t];return e}v&&(ne=document.createElement("div").style,"AnimationEvent"in window||(delete r9.animationend.animation,delete r9.animationiteration.animation,delete r9.animationstart.animation),"TransitionEvent"in window||delete r9.transitionend.transition);var nr=nt("animationend"),nn=nt("animationiteration"),ni=nt("animationstart"),na=nt("transitionend"),no=new Map,ns="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nl(e,t){no.set(e,t),m(t,[e])}for(var nu=0;nu<ns.length;nu++){var nc=ns[nu];nl(nc.toLowerCase(),"on"+(nc[0].toUpperCase()+nc.slice(1)))}nl(nr,"onAnimationEnd"),nl(nn,"onAnimationIteration"),nl(ni,"onAnimationStart"),nl("dblclick","onDoubleClick"),nl("focusin","onFocus"),nl("focusout","onBlur"),nl(na,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(nd));function nh(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,i,a,o,s,l){if(e5.apply(this,arguments),eJ){if(eJ){var u=eZ;eJ=!1,eZ=null}else throw Error(d(198));e0||(e0=!0,e1=u)}}(n,t,void 0,e),e.currentTarget=null}function np(e,t){t=0!=(4&t);for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;nh(i,s,u),a=l}else for(o=0;o<n.length;o++){if(l=(s=n[o]).instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;nh(i,s,u),a=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function nm(e,t){var r=t[nH];void 0===r&&(r=t[nH]=new Set);var n=e+"__bubble";r.has(n)||(ny(t,e,2,!1),r.add(n))}function ng(e,t,r){var n=0;t&&(n|=4),ny(r,e,n,t)}var nv="_reactListening"+Math.random().toString(36).slice(2);function nb(e){if(!e[nv]){e[nv]=!0,f.forEach(function(t){"selectionchange"!==t&&(nf.has(t)||ng(t,!1,e),ng(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[nv]||(t[nv]=!0,ng("selectionchange",!1,t))}}function ny(e,t,r,n){switch(t0(t)){case 1:var i=tK;break;case 4:i=tX;break;default:i=tQ}r=i.bind(null,t,r,e),i=void 0,eK&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(i=!0),n?void 0!==i?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):void 0!==i?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function nw(e,t,r,n,i){var a=n;if(0==(1&t)&&0==(2&t)&&null!==n)e:for(;;){if(null===n)return;var o=n.tag;if(3===o||4===o){var s=n.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=n.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=nY(s)))return;if(5===(l=o.tag)||6===l){n=a=o;continue e}s=s.parentNode}}n=n.return}eG(function(){var n=a,i=eL(r),o=[];e:{var s=no.get(e);if(void 0!==s){var l=rn,u=e;switch(e){case"keypress":if(0===t4(r))break e;case"keydown":case"keyup":l=rb;break;case"focusin":u="focus",l=ru;break;case"focusout":u="blur",l=ru;break;case"beforeblur":case"afterblur":l=ru;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=rw;break;case nr:case nn:case ni:l=rc;break;case na:l=rx;break;case"scroll":l=ra;break;case"wheel":l=rk;break;case"copy":case"cut":case"paste":l=rd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=ry}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var h,p=n;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&null!=(m=eY(p,f))&&c.push(nx(p,m,h))),d)break;p=p.return}0<c.length&&(s=new l(s,u,null,r,i),o.push({event:s,listeners:c}))}}if(0==(7&t)){if(s="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(s&&r!==ej&&(u=r.relatedTarget||r.fromElement)&&(nY(u)||u[nW]))&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(u=r.relatedTarget||r.toElement,l=n,null!==(u=u?nY(u):null)&&(d=e3(u),u!==d||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=n),l!==u)){if(c=rs,m="onMouseLeave",f="onMouseEnter",p="mouse",("pointerout"===e||"pointerover"===e)&&(c=ry,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==l?s:nX(l),h=null==u?s:nX(u),(s=new c(m,p+"leave",l,r,i)).target=d,s.relatedTarget=h,m=null,nY(i)===n&&((c=new c(f,p+"enter",u,r,i)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)t:{for(c=l,f=u,p=0,h=c;h;h=nS(h))p++;for(h=0,m=f;m;m=nS(m))h++;for(;0<p-h;)c=nS(c),p--;for(;0<h-p;)f=nS(f),h--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break t;c=nS(c),f=nS(f)}c=null}else c=null;null!==l&&n_(o,s,l,c,!1),null!==u&&null!==d&&n_(o,d,u,c,!0)}e:{if("select"===(l=(s=n?nX(n):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g,v=rF;else if(rM(s)){if(r$)v=rY;else{v=rq;var b=rH}}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(v=rG);if(v&&(v=v(e,n))){rN(o,v,r,i);break e}b&&b(e,s,n),"focusout"===e&&(b=s._wrapperState)&&b.controlled&&"number"===s.type&&eg(s,"number",s.value)}switch(b=n?nX(n):window,e){case"focusin":(rM(b)||"true"===b.contentEditable)&&(r2=b,r5=n,r3=null);break;case"focusout":r3=r5=r2=null;break;case"mousedown":r4=!0;break;case"contextmenu":case"mouseup":case"dragend":r4=!1,r6(o,r,i);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":r6(o,r,i)}if(r_)t:{switch(e){case"compositionstart":var y="onCompositionStart";break t;case"compositionend":y="onCompositionEnd";break t;case"compositionupdate":y="onCompositionUpdate";break t}y=void 0}else rR?rI(e,r)&&(y="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(y="onCompositionStart");y&&(rT&&"ko"!==r.locale&&(rR||"onCompositionStart"!==y?"onCompositionEnd"===y&&rR&&(g=t3()):(t2="value"in(t1=i)?t1.value:t1.textContent,rR=!0)),0<(b=nk(n,y)).length&&(y=new rf(y,e,null,r,i),o.push({event:y,listeners:b}),g?y.data=g:null!==(g=rA(r))&&(y.data=g))),(g=rC?function(e,t){switch(e){case"compositionend":return rA(t);case"keypress":if(32!==t.which)return null;return rP=!0," ";case"textInput":return" "===(e=t.data)&&rP?null:e;default:return null}}(e,r):function(e,t){if(rR)return"compositionend"===e||!r_&&rI(e,t)?(e=t3(),t5=t2=t1=null,rR=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rT&&"ko"!==t.locale?null:t.data}}(e,r))&&0<(n=nk(n,"onBeforeInput")).length&&(i=new rf("onBeforeInput","beforeinput",null,r,i),o.push({event:i,listeners:n}),i.data=g)}np(o,t)})}function nx(e,t,r){return{instance:e,listener:t,currentTarget:r}}function nk(e,t){for(var r=t+"Capture",n=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=eY(e,r))&&n.unshift(nx(e,a,i)),null!=(a=eY(e,t))&&n.push(nx(e,a,i))),e=e.return}return n}function nS(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function n_(e,t,r,n,i){for(var a=t._reactName,o=[];null!==r&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(null!==l&&l===n)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=eY(r,a))&&o.unshift(nx(r,l,s)):i||null!=(l=eY(r,a))&&o.push(nx(r,l,s))),r=r.return}0!==o.length&&e.push({event:t,listeners:o})}var nE=/\r\n?/g,nC=/\u0000|\uFFFD/g;function nT(e){return("string"==typeof e?e:""+e).replace(nE,"\n").replace(nC,"")}function nP(e,t,r){if(t=nT(t),nT(e)!==t&&r)throw Error(d(425))}function nI(){}var nA=null,nR=null;function nO(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var nM="function"==typeof setTimeout?setTimeout:void 0,nN="function"==typeof clearTimeout?clearTimeout:void 0,nz="function"==typeof Promise?Promise:void 0,nj="function"==typeof queueMicrotask?queueMicrotask:void 0!==nz?function(e){return nz.resolve(null).then(e).catch(nL)}:nM;function nL(e){setTimeout(function(){throw e})}function nD(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&8===i.nodeType){if("/$"===(r=i.data)){if(0===n){e.removeChild(i),tq(t);return}n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++}r=i}while(r)tq(t)}function nF(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function n$(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var nB=Math.random().toString(36).slice(2),nV="__reactFiber$"+nB,nU="__reactProps$"+nB,nW="__reactContainer$"+nB,nH="__reactEvents$"+nB,nq="__reactListeners$"+nB,nG="__reactHandles$"+nB;function nY(e){var t=e[nV];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nW]||r[nV]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=n$(e);null!==e;){if(r=e[nV])return r;e=n$(e)}return t}r=(e=r).parentNode}return null}function nK(e){return(e=e[nV]||e[nW])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function nX(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(d(33))}function nQ(e){return e[nU]||null}var nJ=[],nZ=-1;function n0(e){return{current:e}}function n1(e){0>nZ||(e.current=nJ[nZ],nJ[nZ]=null,nZ--)}function n2(e,t){nJ[++nZ]=e.current,e.current=t}var n5={},n3=n0(n5),n4=n0(!1),n6=n5;function n8(e,t){var r=e.type.contextTypes;if(!r)return n5;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in r)a[i]=t[i];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function n9(e){return null!=(e=e.childContextTypes)}function n7(){n1(n4),n1(n3)}function ie(e,t,r){if(n3.current!==n5)throw Error(d(168));n2(n3,t),n2(n4,r)}function it(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!=typeof n.getChildContext)return r;for(var i in n=n.getChildContext())if(!(i in t))throw Error(d(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case A:return"Fragment";case I:return"Portal";case O:return"Profiler";case R:return"StrictMode";case j:return"Suspense";case L:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case N:return(t.displayName||"Context")+".Consumer";case M:return(t._context.displayName||"Context")+".Provider";case z:var r=t.render;return(t=t.displayName)||(t=""!==(t=r.displayName||r.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case D:return null!==(r=t.displayName||null)?r:e(t.type)||"Memo";case F:r=t._payload,t=t._init;try{return e(t(r))}catch(e){}}return null}(t);case 8:return t===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",i));return er({},r,n)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||n5,n6=n3.current,n2(n3,e),n2(n4,n4.current),!0}function ii(e,t,r){var n=e.stateNode;if(!n)throw Error(d(169));r?(e=it(e,t,n6),n.__reactInternalMemoizedMergedChildContext=e,n1(n4),n1(n3),n2(n3,e)):n1(n4),n2(n4,r)}var ia=null,io=!1,is=!1;function il(e){null===ia?ia=[e]:ia.push(e)}function iu(){if(!is&&null!==ia){is=!0;var e=0,t=tS;try{var r=ia;for(tS=1;e<r.length;e++){var n=r[e];do n=n(!0);while(null!==n)}ia=null,io=!1}catch(t){throw null!==ia&&(ia=ia.slice(e+1)),e9(ti,iu),t}finally{tS=t,is=!1}}return null}var ic=[],id=0,ih=null,ip=0,im=[],ig=0,iv=null,ib=1,iy="";function iw(e,t){ic[id++]=ip,ic[id++]=ih,ih=e,ip=t}function ix(e,t,r){im[ig++]=ib,im[ig++]=iy,im[ig++]=iv,iv=e;var n=ib;e=iy;var i=32-td(n)-1;n&=~(1<<i),r+=1;var a=32-td(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,ib=1<<32-td(t)+i|r<<i|n,iy=a+e}else ib=1<<a|r<<i|n,iy=e}function ik(e){null!==e.return&&(iw(e,1),ix(e,1,0))}function iS(e){for(;e===ih;)ih=ic[--id],ic[id]=null,ip=ic[--id],ic[id]=null;for(;e===iv;)iv=im[--ig],im[ig]=null,iy=im[--ig],im[ig]=null,ib=im[--ig],im[ig]=null}var i_=null,iE=null,iC=!1,iT=null;function iP(e,t){var r=s9(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function iI(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,i_=e,iE=nF(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,i_=e,iE=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==iv?{id:ib,overflow:iy}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=s9(18,null,null,0)).stateNode=t,r.return=e,e.child=r,i_=e,iE=null,!0);default:return!1}}function iA(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function iR(e){if(iC){var t=iE;if(t){var r=t;if(!iI(e,t)){if(iA(e))throw Error(d(418));t=nF(r.nextSibling);var n=i_;t&&iI(e,t)?iP(n,r):(e.flags=-4097&e.flags|2,iC=!1,i_=e)}}else{if(iA(e))throw Error(d(418));e.flags=-4097&e.flags|2,iC=!1,i_=e}}}function iO(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;i_=e}function iM(e){if(e!==i_)return!1;if(!iC)return iO(e),iC=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!nO(e.type,e.memoizedProps)),t&&(t=iE)){if(iA(e))throw iN(),Error(d(418));for(;t;)iP(e,t),t=nF(t.nextSibling)}if(iO(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(d(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,r=e.data;if("/$"===r){if(0===t){iE=nF(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}iE=null}}else iE=i_?nF(e.stateNode.nextSibling):null;return!0}function iN(){for(var e=iE;e;)e=nF(e.nextSibling)}function iz(){iE=i_=null,iC=!1}function ij(e){null===iT?iT=[e]:iT.push(e)}var iL=T.ReactCurrentBatchConfig;function iD(e,t){if(e&&e.defaultProps)for(var r in t=er({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}var iF=n0(null),i$=null,iB=null,iV=null;function iU(){iV=iB=i$=null}function iW(e){var t=iF.current;n1(iF),e._currentValue=t}function iH(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function iq(e,t){i$=e,iV=iB=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ox=!0),e.firstContext=null)}function iG(e){var t=e._currentValue;if(iV!==e){if(e={context:e,memoizedValue:t,next:null},null===iB){if(null===i$)throw Error(d(308));iB=e,i$.dependencies={lanes:0,firstContext:e}}else iB=iB.next=e}return t}var iY=null;function iK(e){null===iY?iY=[e]:iY.push(e)}function iX(e,t,r,n){var i=t.interleaved;return null===i?(r.next=r,iK(t)):(r.next=i.next,i.next=r),t.interleaved=r,iQ(e,n)}function iQ(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var iJ=!1;function iZ(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function i1(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function i2(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!=(2&sl)){var i=n.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),n.pending=t,iQ(e,r)}return null===(i=n.interleaved)?(t.next=t,iK(n)):(t.next=i.next,i.next=t),n.interleaved=t,iQ(e,r)}function i5(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&r))){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,tk(e,r)}}function i3(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var i=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===a?i=a=o:a=a.next=o,r=r.next}while(null!==r)null===a?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function i4(e,t,r,n){var i=e.updateQueue;iJ=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?a=u:o.next=u,o=l;var c=e.alternate;null!==c&&(s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l)}if(null!==a){var d=i.baseState;for(o=0,c=u=l=null,s=a;;){var f=s.lane,h=s.eventTime;if((n&f)===f){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(f=t,h=r,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(f="function"==typeof(p=m.payload)?p.call(h,d,f):p))break e;d=er({},d,f);break e;case 2:iJ=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,o|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do o|=i.lane,i=i.next;while(i!==t)}else null===a&&(i.shared.lanes=0);sg|=o,e.lanes=o,e.memoizedState=d}}function i6(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(null!==i){if(n.callback=null,n=r,"function"!=typeof i)throw Error(d(191,i));i.call(n)}}}var i8=(new u.Component).refs;function i9(e,t,r,n){r=null==(r=r(n,t=e.memoizedState))?t:er({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var i7={isMounted:function(e){return!!(e=e._reactInternals)&&e3(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=sN(),i=sz(e),a=i1(n,i);a.payload=t,null!=r&&(a.callback=r),null!==(t=i2(e,a,i))&&(sj(t,e,i,n),i5(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=sN(),i=sz(e),a=i1(n,i);a.tag=1,a.payload=t,null!=r&&(a.callback=r),null!==(t=i2(e,a,i))&&(sj(t,e,i,n),i5(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=sN(),n=sz(e),i=i1(r,n);i.tag=2,null!=t&&(i.callback=t),null!==(t=i2(e,i,n))&&(sj(t,e,n,r),i5(t,e,n))}};function ae(e,t,r,n,i,a,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,o):!t.prototype||!t.prototype.isPureReactComponent||!rX(r,n)||!rX(i,a)}function at(e,t,r){var n=!1,i=n5,a=t.contextType;return"object"==typeof a&&null!==a?a=iG(a):(i=n9(t)?n6:n3.current,a=(n=null!=(n=t.contextTypes))?n8(e,i):n5),t=new t(r,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=i7,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ar(e,t,r,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&i7.enqueueReplaceState(t,t.state,null)}function an(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=i8,iZ(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=iG(a):(a=n9(t)?n6:n3.current,i.context=n8(e,a)),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(i9(e,t,a,r),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&i7.enqueueReplaceState(i,i.state,null),i4(e,r,i,n),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ai(e,t,r){if(null!==(e=r.ref)&&"function"!=typeof e&&"object"!=typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(d(309));var n=r.stateNode}if(!n)throw Error(d(147,e));var i=n,a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:((t=function(e){var t=i.refs;t===i8&&(t=i.refs={}),null===e?delete t[a]:t[a]=e})._stringRef=a,t)}if("string"!=typeof e)throw Error(d(284));if(!r._owner)throw Error(d(290,e))}return e}function aa(e,t){throw Error(d(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ao(e){return(0,e._init)(e._payload)}function as(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=le(e,t)).index=0,e.sibling=null,e}function a(t,r,n){return(t.index=n,e)?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,r,n){return null===t||6!==t.tag?(t=li(r,e.mode,n)).return=e:(t=i(t,r)).return=e,t}function l(e,t,r,n){var a=r.type;return a===A?c(e,t,r.props.children,n,r.key):(null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===F&&ao(a)===t.type)?(n=i(t,r.props)).ref=ai(e,t,r):(n=lt(r.type,r.key,r.props,null,e.mode,n)).ref=ai(e,t,r),n.return=e,n)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?(t=la(r,e.mode,n)).return=e:(t=i(t,r.children||[])).return=e,t}function c(e,t,r,n,a){return null===t||7!==t.tag?(t=lr(r,e.mode,n,a)).return=e:(t=i(t,r)).return=e,t}function f(e,t,r){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=li(""+t,e.mode,r)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case P:return(r=lt(t.type,t.key,t.props,null,e.mode,r)).ref=ai(e,null,t),r.return=e,r;case I:return(t=la(t,e.mode,r)).return=e,t;case F:return f(e,(0,t._init)(t._payload),r)}if(ev(t)||V(t))return(t=lr(t,e.mode,r,null)).return=e,t;aa(e,t)}return null}function h(e,t,r,n){var i=null!==t?t.key:null;if("string"==typeof r&&""!==r||"number"==typeof r)return null!==i?null:s(e,t,""+r,n);if("object"==typeof r&&null!==r){switch(r.$$typeof){case P:return r.key===i?l(e,t,r,n):null;case I:return r.key===i?u(e,t,r,n):null;case F:return h(e,t,(i=r._init)(r._payload),n)}if(ev(r)||V(r))return null!==i?null:c(e,t,r,n,null);aa(e,r)}return null}function p(e,t,r,n,i){if("string"==typeof n&&""!==n||"number"==typeof n)return s(t,e=e.get(r)||null,""+n,i);if("object"==typeof n&&null!==n){switch(n.$$typeof){case P:return l(t,e=e.get(null===n.key?r:n.key)||null,n,i);case I:return u(t,e=e.get(null===n.key?r:n.key)||null,n,i);case F:return p(e,t,r,(0,n._init)(n._payload),i)}if(ev(n)||V(n))return c(t,e=e.get(r)||null,n,i,null);aa(t,n)}return null}return function s(l,u,c,m){if("object"==typeof c&&null!==c&&c.type===A&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case P:e:{for(var g=c.key,v=u;null!==v;){if(v.key===g){if((g=c.type)===A){if(7===v.tag){r(l,v.sibling),(u=i(v,c.props.children)).return=l,l=u;break e}}else if(v.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===F&&ao(g)===v.type){r(l,v.sibling),(u=i(v,c.props)).ref=ai(l,v,c),u.return=l,l=u;break e}r(l,v);break}t(l,v),v=v.sibling}c.type===A?((u=lr(c.props.children,l.mode,m,c.key)).return=l,l=u):((m=lt(c.type,c.key,c.props,null,l.mode,m)).ref=ai(l,u,c),m.return=l,l=m)}return o(l);case I:e:{for(v=c.key;null!==u;){if(u.key===v){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){r(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}r(l,u);break}t(l,u),u=u.sibling}(u=la(c,l.mode,m)).return=l,l=u}return o(l);case F:return s(l,u,(v=c._init)(c._payload),m)}if(ev(c))return function(i,o,s,l){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(i,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===s.length)return r(i,d),iC&&iw(i,m),u;if(null===d){for(;m<s.length;m++)null!==(d=f(i,s[m],l))&&(o=a(d,o,m),null===c?u=d:c.sibling=d,c=d);return iC&&iw(i,m),u}for(d=n(i,d);m<s.length;m++)null!==(g=p(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(i,e)}),iC&&iw(i,m),u}(l,u,c,m);if(V(c))return function(i,o,s,l){var u=V(s);if("function"!=typeof u)throw Error(d(150));if(null==(s=u.call(s)))throw Error(d(151));for(var c=u=null,m=o,g=o=0,v=null,b=s.next();null!==m&&!b.done;g++,b=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var y=h(i,m,b.value,l);if(null===y){null===m&&(m=v);break}e&&m&&null===y.alternate&&t(i,m),o=a(y,o,g),null===c?u=y:c.sibling=y,c=y,m=v}if(b.done)return r(i,m),iC&&iw(i,g),u;if(null===m){for(;!b.done;g++,b=s.next())null!==(b=f(i,b.value,l))&&(o=a(b,o,g),null===c?u=b:c.sibling=b,c=b);return iC&&iw(i,g),u}for(m=n(i,m);!b.done;g++,b=s.next())null!==(b=p(m,i,g,b.value,l))&&(e&&null!==b.alternate&&m.delete(null===b.key?g:b.key),o=a(b,o,g),null===c?u=b:c.sibling=b,c=b);return e&&m.forEach(function(e){return t(i,e)}),iC&&iw(i,g),u}(l,u,c,m);aa(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(r(l,u.sibling),(u=i(u,c)).return=l):(r(l,u),(u=li(c,l.mode,m)).return=l),o(l=u)):r(l,u)}}var al=as(!0),au=as(!1),ac={},ad=n0(ac),af=n0(ac),ah=n0(ac);function ap(e){if(e===ac)throw Error(d(174));return e}function am(e,t){switch(n2(ah,t),n2(af,e),n2(ad,ac),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:e_(null,"");break;default:t=e_(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}n1(ad),n2(ad,t)}function ag(){n1(ad),n1(af),n1(ah)}function av(e){ap(ah.current);var t=ap(ad.current),r=e_(t,e.type);t!==r&&(n2(af,e),n2(ad,r))}function ab(e){af.current===e&&(n1(ad),n1(af))}var ay=n0(0);function aw(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ax=[];function ak(){for(var e=0;e<ax.length;e++)ax[e]._workInProgressVersionPrimary=null;ax.length=0}var aS=T.ReactCurrentDispatcher,a_=T.ReactCurrentBatchConfig,aE=0,aC=null,aT=null,aP=null,aI=!1,aA=!1,aR=0,aO=0;function aM(){throw Error(d(321))}function aN(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!rK(e[r],t[r]))return!1;return!0}function az(e,t,r,n,i,a){if(aE=a,aC=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,aS.current=null===e||null===e.memoizedState?ol:ou,e=r(n,i),aA){a=0;do{if(aA=!1,aR=0,25<=a)throw Error(d(301));a+=1,aP=aT=null,t.updateQueue=null,aS.current=oc,e=r(n,i)}while(aA)}if(aS.current=os,t=null!==aT&&null!==aT.next,aE=0,aP=aT=aC=null,aI=!1,t)throw Error(d(300));return e}function aj(){var e=0!==aR;return aR=0,e}function aL(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===aP?aC.memoizedState=aP=e:aP=aP.next=e,aP}function aD(){if(null===aT){var e=aC.alternate;e=null!==e?e.memoizedState:null}else e=aT.next;var t=null===aP?aC.memoizedState:aP.next;if(null!==t)aP=t,aT=e;else{if(null===e)throw Error(d(310));e={memoizedState:(aT=e).memoizedState,baseState:aT.baseState,baseQueue:aT.baseQueue,queue:aT.queue,next:null},null===aP?aC.memoizedState=aP=e:aP=aP.next=e}return aP}function aF(e,t){return"function"==typeof t?t(e):t}function a$(e){var t=aD(),r=t.queue;if(null===r)throw Error(d(311));r.lastRenderedReducer=e;var n=aT,i=n.baseQueue,a=r.pending;if(null!==a){if(null!==i){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(null!==i){a=i.next,n=n.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((aE&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=f,o=n):l=l.next=f,aC.lanes|=c,sg|=c}u=u.next}while(null!==u&&u!==a)null===l?o=n:l.next=s,rK(n,t.memoizedState)||(ox=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}if(null!==(e=r.interleaved)){i=e;do a=i.lane,aC.lanes|=a,sg|=a,i=i.next;while(i!==e)}else null===i&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function aB(e){var t=aD(),r=t.queue;if(null===r)throw Error(d(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(null!==i){r.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i)rK(a,t.memoizedState)||(ox=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function aV(){}function aU(e,t){var r=aC,n=aD(),i=t(),a=!rK(n.memoizedState,i);if(a&&(n.memoizedState=i,ox=!0),n=n.queue,a1(aq.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||null!==aP&&1&aP.memoizedState.tag){if(r.flags|=2048,aX(9,aH.bind(null,r,n,i,t),void 0,null),null===su)throw Error(d(349));0!=(30&aE)||aW(r,t,i)}return i}function aW(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=aC.updateQueue)?(t={lastEffect:null,stores:null},aC.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function aH(e,t,r,n){t.value=r,t.getSnapshot=n,aG(t)&&aY(e)}function aq(e,t,r){return r(function(){aG(t)&&aY(e)})}function aG(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!rK(e,r)}catch(e){return!0}}function aY(e){var t=iQ(e,1);null!==t&&sj(t,e,1,-1)}function aK(e){var t=aL();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aF,lastRenderedState:e},t.queue=e,e=e.dispatch=on.bind(null,aC,e),[t.memoizedState,e]}function aX(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=aC.updateQueue)?(t={lastEffect:null,stores:null},aC.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function aQ(){return aD().memoizedState}function aJ(e,t,r,n){var i=aL();aC.flags|=e,i.memoizedState=aX(1|t,r,void 0,void 0===n?null:n)}function aZ(e,t,r,n){var i=aD();n=void 0===n?null:n;var a=void 0;if(null!==aT){var o=aT.memoizedState;if(a=o.destroy,null!==n&&aN(n,o.deps)){i.memoizedState=aX(t,r,a,n);return}}aC.flags|=e,i.memoizedState=aX(1|t,r,a,n)}function a0(e,t){return aJ(8390656,8,e,t)}function a1(e,t){return aZ(2048,8,e,t)}function a2(e,t){return aZ(4,2,e,t)}function a5(e,t){return aZ(4,4,e,t)}function a3(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function a4(e,t,r){return r=null!=r?r.concat([e]):null,aZ(4,4,a3.bind(null,t,e),r)}function a6(){}function a8(e,t){var r=aD();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&aN(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function a9(e,t){var r=aD();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&aN(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function a7(e,t,r){return 0==(21&aE)?(e.baseState&&(e.baseState=!1,ox=!0),e.memoizedState=r):(rK(r,t)||(r=ty(),aC.lanes|=r,sg|=r,e.baseState=!0),t)}function oe(e,t){var r=tS;tS=0!==r&&4>r?r:4,e(!0);var n=a_.transition;a_.transition={};try{e(!1),t()}finally{tS=r,a_.transition=n}}function ot(){return aD().memoizedState}function or(e,t,r){var n=sz(e);r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},oi(e)?oa(t,r):null!==(r=iX(e,t,r,n))&&(sj(r,e,n,sN()),oo(r,t,n))}function on(e,t,r){var n=sz(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(oi(e))oa(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,rK(s,o)){var l=t.interleaved;null===l?(i.next=i,iK(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch(e){}finally{}null!==(r=iX(e,t,i,n))&&(sj(r,e,n,i=sN()),oo(r,t,n))}}function oi(e){var t=e.alternate;return e===aC||null!==t&&t===aC}function oa(e,t){aA=aI=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function oo(e,t,r){if(0!=(4194240&r)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,tk(e,r)}}var os={readContext:iG,useCallback:aM,useContext:aM,useEffect:aM,useImperativeHandle:aM,useInsertionEffect:aM,useLayoutEffect:aM,useMemo:aM,useReducer:aM,useRef:aM,useState:aM,useDebugValue:aM,useDeferredValue:aM,useTransition:aM,useMutableSource:aM,useSyncExternalStore:aM,useId:aM,unstable_isNewReconciler:!1},ol={readContext:iG,useCallback:function(e,t){return aL().memoizedState=[e,void 0===t?null:t],e},useContext:iG,useEffect:a0,useImperativeHandle:function(e,t,r){return r=null!=r?r.concat([e]):null,aJ(4194308,4,a3.bind(null,t,e),r)},useLayoutEffect:function(e,t){return aJ(4194308,4,e,t)},useInsertionEffect:function(e,t){return aJ(4,2,e,t)},useMemo:function(e,t){var r=aL();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=aL();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=or.bind(null,aC,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},aL().memoizedState=e},useState:aK,useDebugValue:a6,useDeferredValue:function(e){return aL().memoizedState=e},useTransition:function(){var e=aK(!1),t=e[0];return e=oe.bind(null,e[1]),aL().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=aC,i=aL();if(iC){if(void 0===r)throw Error(d(407));r=r()}else{if(r=t(),null===su)throw Error(d(349));0!=(30&aE)||aW(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,a0(aq.bind(null,n,a,e),[e]),n.flags|=2048,aX(9,aH.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=aL(),t=su.identifierPrefix;if(iC){var r=iy,n=ib;t=":"+t+"R"+(r=(n&~(1<<32-td(n)-1)).toString(32)+r),0<(r=aR++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=aO++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ou={readContext:iG,useCallback:a8,useContext:iG,useEffect:a1,useImperativeHandle:a4,useInsertionEffect:a2,useLayoutEffect:a5,useMemo:a9,useReducer:a$,useRef:aQ,useState:function(){return a$(aF)},useDebugValue:a6,useDeferredValue:function(e){return a7(aD(),aT.memoizedState,e)},useTransition:function(){return[a$(aF)[0],aD().memoizedState]},useMutableSource:aV,useSyncExternalStore:aU,useId:ot,unstable_isNewReconciler:!1},oc={readContext:iG,useCallback:a8,useContext:iG,useEffect:a1,useImperativeHandle:a4,useInsertionEffect:a2,useLayoutEffect:a5,useMemo:a9,useReducer:aB,useRef:aQ,useState:function(){return aB(aF)},useDebugValue:a6,useDeferredValue:function(e){var t=aD();return null===aT?t.memoizedState=e:a7(t,aT.memoizedState,e)},useTransition:function(){return[aB(aF)[0],aD().memoizedState]},useMutableSource:aV,useSyncExternalStore:aU,useId:ot,unstable_isNewReconciler:!1};function od(e,t){try{var r="",n=t;do r+=function(e){switch(e.tag){case 5:return en(e.type);case 16:return en("Lazy");case 13:return en("Suspense");case 19:return en("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1);case 11:return e=ea(e.type.render,!1);case 1:return e=ea(e.type,!0);default:return""}}(n),n=n.return;while(n)var i=r}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function of(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function oh(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var op="function"==typeof WeakMap?WeakMap:Map;function om(e,t,r){(r=i1(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){s_||(s_=!0,sE=n),oh(e,t)},r}function og(e,t,r){(r=i1(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"==typeof n){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){oh(e,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(r.callback=function(){oh(e,t),"function"!=typeof n&&(null===sC?sC=new Set([this]):sC.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:null!==r?r:""})}),r}function ov(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new op;var i=new Set;n.set(t,i)}else void 0===(i=n.get(t))&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=s5.bind(null,e,t,r),t.then(e,e))}function ob(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function oy(e,t,r,n,i){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=i1(-1,1)).tag=2,i2(r,t,1))),r.lanes|=1):(e.flags|=65536,e.lanes=i),e}var ow=T.ReactCurrentOwner,ox=!1;function ok(e,t,r,n){t.child=null===e?au(t,null,r,n):al(t,e.child,r,n)}function oS(e,t,r,n,i){r=r.render;var a=t.ref;return(iq(t,i),n=az(e,t,r,n,a,i),r=aj(),null===e||ox)?(iC&&r&&ik(t),t.flags|=1,ok(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oV(e,t,i))}function o_(e,t,r,n,i){if(null===e){var a=r.type;return"function"!=typeof a||s7(a)||void 0!==a.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=lt(r.type,null,n,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,oE(e,t,a,n,i))}if(a=e.child,0==(e.lanes&i)){var o=a.memoizedProps;if((r=null!==(r=r.compare)?r:rX)(o,n)&&e.ref===t.ref)return oV(e,t,i)}return t.flags|=1,(e=le(a,n)).ref=t.ref,e.return=t,t.child=e}function oE(e,t,r,n,i){if(null!==e){var a=e.memoizedProps;if(rX(a,n)&&e.ref===t.ref){if(ox=!1,t.pendingProps=n=a,0==(e.lanes&i))return t.lanes=e.lanes,oV(e,t,i);0!=(131072&e.flags)&&(ox=!0)}}return oP(e,t,r,n,i)}function oC(e,t,r){var n=t.pendingProps,i=n.children,a=null!==e?e.memoizedState:null;if("hidden"===n.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n2(sh,sf),sf|=r;else{if(0==(1073741824&r))return e=null!==a?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,n2(sh,sf),sf|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==a?a.baseLanes:r,n2(sh,sf),sf|=n}}else null!==a?(n=a.baseLanes|r,t.memoizedState=null):n=r,n2(sh,sf),sf|=n;return ok(e,t,i,r),t.child}function oT(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function oP(e,t,r,n,i){var a=n9(r)?n6:n3.current;return(a=n8(t,a),iq(t,i),r=az(e,t,r,n,a,i),n=aj(),null===e||ox)?(iC&&n&&ik(t),t.flags|=1,ok(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oV(e,t,i))}function oI(e,t,r,n,i){if(n9(r)){var a=!0;ir(t)}else a=!1;if(iq(t,i),null===t.stateNode)oB(e,t),at(t,r,n),an(t,r,n,i),n=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=r.contextType;u="object"==typeof u&&null!==u?iG(u):n8(t,u=n9(r)?n6:n3.current);var c=r.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==n||l!==u)&&ar(t,o,n,u),iJ=!1;var f=t.memoizedState;o.state=f,i4(t,n,o,i),l=t.memoizedState,s!==n||f!==l||n4.current||iJ?("function"==typeof c&&(i9(t,r,c,n),l=t.memoizedState),(s=iJ||ae(t,r,s,n,f,l,u))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=u,n=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,i0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:iD(t.type,s),o.props=u,d=t.pendingProps,f=o.context,l="object"==typeof(l=r.contextType)&&null!==l?iG(l):n8(t,l=n9(r)?n6:n3.current);var h=r.getDerivedStateFromProps;(c="function"==typeof h||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||f!==l)&&ar(t,o,n,l),iJ=!1,f=t.memoizedState,o.state=f,i4(t,n,o,i);var p=t.memoizedState;s!==d||f!==p||n4.current||iJ?("function"==typeof h&&(i9(t,r,h,n),p=t.memoizedState),(u=iJ||ae(t,r,u,n,f,p,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(n,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(n,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),o.props=n,o.state=p,o.context=l,n=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return oA(e,t,r,n,a,i)}function oA(e,t,r,n,i,a){oT(e,t);var o=0!=(128&t.flags);if(!n&&!o)return i&&ii(t,r,!1),oV(e,t,a);n=t.stateNode,ow.current=t;var s=o&&"function"!=typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&o?(t.child=al(t,e.child,null,a),t.child=al(t,null,s,a)):ok(e,t,s,a),t.memoizedState=n.state,i&&ii(t,r,!0),t.child}function oR(e){var t=e.stateNode;t.pendingContext?ie(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ie(e,t.context,!1),am(e,t.containerInfo)}function oO(e,t,r,n,i){return iz(),ij(i),t.flags|=256,ok(e,t,r,n),t.child}var oM={dehydrated:null,treeContext:null,retryLane:0};function oN(e){return{baseLanes:e,cachePool:null,transitions:null}}function oz(e,t,r){var n,i=t.pendingProps,a=ay.current,o=!1,s=0!=(128&t.flags);if((n=s)||(n=(null===e||null!==e.memoizedState)&&0!=(2&a)),n?(o=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(a|=1),n2(ay,1&a),null===e)return(iR(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},0==(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=s):o=ln(s,i,0,null),e=lr(e,i,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=oN(r),t.memoizedState=oM,e):oj(t,s));if(null!==(a=e.memoizedState)&&null!==(n=a.dehydrated))return function(e,t,r,n,i,a,o){if(r)return 256&t.flags?(t.flags&=-257,oL(e,t,o,n=of(Error(d(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=ln({mode:"visible",children:n.children},i,0,null),a=lr(a,i,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,0!=(1&t.mode)&&al(t,e.child,null,o),t.child.memoizedState=oN(o),t.memoizedState=oM,a);if(0==(1&t.mode))return oL(e,t,o,null);if("$!"===i.data){if(n=i.nextSibling&&i.nextSibling.dataset)var s=n.dgst;return n=s,oL(e,t,o,n=of(a=Error(d(419)),n,void 0))}if(s=0!=(o&e.childLanes),ox||s){if(null!==(n=su)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(n.suspendedLanes|o))?0:i)&&i!==a.retryLane&&(a.retryLane=i,iQ(e,i),sj(n,e,i,-1))}return sK(),oL(e,t,o,n=of(Error(d(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=s4.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,iE=nF(i.nextSibling),i_=t,iC=!0,iT=null,null!==e&&(im[ig++]=ib,im[ig++]=iy,im[ig++]=iv,ib=e.id,iy=e.overflow,iv=t),t=oj(t,n.children),t.flags|=4096,t)}(e,t,s,i,n,a,r);if(o){o=i.fallback,s=t.mode,n=(a=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&s)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=le(a,l)).subtreeFlags=14680064&a.subtreeFlags,null!==n?o=le(n,o):(o=lr(o,s,r,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=null===(s=e.child.memoizedState)?oN(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,t.memoizedState=oM,i}return e=(o=e.child).sibling,i=le(o,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=r),i.return=t,i.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function oj(e,t){return(t=ln({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function oL(e,t,r,n){return null!==n&&ij(n),al(t,e.child,null,r),e=oj(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oD(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),iH(e.return,t,r)}function oF(e,t,r,n,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function o$(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(ok(e,t,n.children,r),0!=(2&(n=ay.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&oD(e,r,t);else if(19===e.tag)oD(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(n2(ay,n),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(i=null,r=t.child;null!==r;)null!==(e=r.alternate)&&null===aw(e)&&(i=r),r=r.sibling;null===(r=i)?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),oF(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===aw(e)){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}oF(t,!0,r,null,a);break;case"together":oF(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oB(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function oV(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),sg|=t.lanes,0==(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(d(153));if(null!==t.child){for(r=le(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=le(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function oU(e,t){if(!iC)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function oW(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=14680064&i.subtreeFlags,n|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}i=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},a=function(){},o=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,ap(ad.current);var a,o=null;switch(r){case"input":i=ed(e,i),n=ed(e,n),o=[];break;case"select":i=er({},i,{value:void 0}),n=er({},n,{value:void 0}),o=[];break;case"textarea":i=ey(e,i),n=ey(e,n),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof n.onClick&&(e.onclick=nI)}for(u in eN(r,n),r=null,i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u]){if("style"===u){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null))}for(u in n){var l=n[u];if(s=null!=i?i[u]:void 0,n.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s)){if("style"===u){if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(o||(o=[]),o.push(u,r)),r=l}else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(p.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&nm("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},s=function(e,t,r,n){r!==n&&(t.flags|=4)};var oH=!1,oq=!1,oG="function"==typeof WeakSet?WeakSet:Set,oY=null;function oK(e,t){var r=e.ref;if(null!==r){if("function"==typeof r)try{r(null)}catch(r){s2(e,t,r)}else r.current=null}}function oX(e,t,r){try{r()}catch(r){s2(e,t,r)}}var oQ=!1;function oJ(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&oX(t,r,a)}i=i.next}while(i!==n)}}function oZ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function o0(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"==typeof t?t(e):t.current=e}}function o1(e){return 5===e.tag||3===e.tag||4===e.tag}function o2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||o1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var o5=null,o3=!1;function o4(e,t,r){for(r=r.child;null!==r;)o6(e,t,r),r=r.sibling}function o6(e,t,r){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,r)}catch(e){}switch(r.tag){case 5:oq||oK(r,t);case 6:var n=o5,i=o3;o5=null,o4(e,t,r),o5=n,o3=i,null!==o5&&(o3?(e=o5,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):o5.removeChild(r.stateNode));break;case 18:null!==o5&&(o3?(e=o5,r=r.stateNode,8===e.nodeType?nD(e.parentNode,r):1===e.nodeType&&nD(e,r),tq(e)):nD(o5,r.stateNode));break;case 4:n=o5,i=o3,o5=r.stateNode.containerInfo,o3=!0,o4(e,t,r),o5=n,o3=i;break;case 0:case 11:case 14:case 15:if(!oq&&null!==(n=r.updateQueue)&&null!==(n=n.lastEffect)){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!=(2&a)?oX(r,t,o):0!=(4&a)&&oX(r,t,o)),i=i.next}while(i!==n)}o4(e,t,r);break;case 1:if(!oq&&(oK(r,t),"function"==typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(e){s2(r,t,e)}o4(e,t,r);break;case 21:default:o4(e,t,r);break;case 22:1&r.mode?(oq=(n=oq)||null!==r.memoizedState,o4(e,t,r),oq=n):o4(e,t,r)}}function o8(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new oG),t.forEach(function(t){var n=s6.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))})}}function o9(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var i=r[n];try{var a=t,o=a;e:for(;null!==o;){switch(o.tag){case 5:o5=o.stateNode,o3=!1;break e;case 3:case 4:o5=o.stateNode.containerInfo,o3=!0;break e}o=o.return}if(null===o5)throw Error(d(160));o6(e,a,i),o5=null,o3=!1;var s=i.alternate;null!==s&&(s.return=null),i.return=null}catch(e){s2(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)o7(t,e),t=t.sibling}function o7(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o9(t,e),se(e),4&n){try{oJ(3,e,e.return),oZ(3,e)}catch(t){s2(e,e.return,t)}try{oJ(5,e,e.return)}catch(t){s2(e,e.return,t)}}break;case 1:o9(t,e),se(e),512&n&&null!==r&&oK(r,r.return);break;case 5:if(o9(t,e),se(e),512&n&&null!==r&&oK(r,r.return),32&e.flags){var i=e.stateNode;try{eP(i,"")}catch(t){s2(e,e.return,t)}}if(4&n&&null!=(i=e.stateNode)){var a=e.memoizedProps,o=null!==r?r.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===a.type&&null!=a.name&&eh(i,a),ez(s,o);var u=ez(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];"style"===c?eO(i,f):"dangerouslySetInnerHTML"===c?eT(i,f):"children"===c?eP(i,f):C(i,c,f,u)}switch(s){case"input":ep(i,a);break;case"textarea":ex(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;null!=p?eb(i,!!a.multiple,p,!1):!!a.multiple!==h&&(null!=a.defaultValue?eb(i,!!a.multiple,a.defaultValue,!0):eb(i,!!a.multiple,a.multiple?[]:"",!1))}i[nU]=a}catch(t){s2(e,e.return,t)}}break;case 6:if(o9(t,e),se(e),4&n){if(null===e.stateNode)throw Error(d(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(t){s2(e,e.return,t)}}break;case 3:if(o9(t,e),se(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{tq(t.containerInfo)}catch(t){s2(e,e.return,t)}break;case 4:default:o9(t,e),se(e);break;case 13:o9(t,e),se(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,a&&(null===i.alternate||null===i.alternate.memoizedState)&&(sx=tr())),4&n&&o8(e);break;case 22:if(c=null!==r&&null!==r.memoizedState,1&e.mode?(oq=(u=oq)||c,o9(t,e),oq=u):o9(t,e),se(e),8192&n){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(oY=e,c=e.child;null!==c;){for(f=oY=c;null!==oY;){switch(p=(h=oY).child,h.tag){case 0:case 11:case 14:case 15:oJ(4,h,h.return);break;case 1:oK(h,h.return);var m=h.stateNode;if("function"==typeof m.componentWillUnmount){n=h,r=h.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){s2(n,r,e)}}break;case 5:oK(h,h.return);break;case 22:if(null!==h.memoizedState){sr(f);continue}}null!==p?(p.return=h,oY=p):sr(f)}c=c.sibling}e:for(c=null,f=e;;){if(5===f.tag){if(null===c){c=f;try{i=f.stateNode,u?(a=i.style,"function"==typeof a.setProperty?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,o=null!=(l=f.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=eR("display",o))}catch(t){s2(e,e.return,t)}}}else if(6===f.tag){if(null===c)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(t){s2(e,e.return,t)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:o9(t,e),se(e),4&n&&o8(e);case 21:}}function se(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(o1(r)){var n=r;break e}r=r.return}throw Error(d(160))}switch(n.tag){case 5:var i=n.stateNode;32&n.flags&&(eP(i,""),n.flags&=-33);var a=o2(e);!function e(t,r,n){var i=t.tag;if(5===i||6===i)t=t.stateNode,r?n.insertBefore(t,r):n.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,s=o2(e);!function e(t,r,n){var i=t.tag;if(5===i||6===i)t=t.stateNode,r?8===n.nodeType?n.parentNode.insertBefore(t,r):n.insertBefore(t,r):(8===n.nodeType?(r=n.parentNode).insertBefore(t,n):(r=n).appendChild(t),null!=(n=n._reactRootContainer)||null!==r.onclick||(r.onclick=nI));else if(4!==i&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,s,o);break;default:throw Error(d(161))}}catch(t){s2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function st(e){for(;null!==oY;){var t=oY;if(0!=(8772&t.flags)){var r=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:oq||oZ(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!oq){if(null===r)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:iD(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}}var a=t.updateQueue;null!==a&&i6(t,a,n);break;case 3:var o=t.updateQueue;if(null!==o){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}i6(t,o,r)}break;case 5:var s=t.stateNode;if(null===r&&4&t.flags){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var f=c.dehydrated;null!==f&&tq(f)}}}break;default:throw Error(d(163))}oq||512&t.flags&&o0(t)}catch(e){s2(t,t.return,e)}}if(t===e){oY=null;break}if(null!==(r=t.sibling)){r.return=t.return,oY=r;break}oY=t.return}}function sr(e){for(;null!==oY;){var t=oY;if(t===e){oY=null;break}var r=t.sibling;if(null!==r){r.return=t.return,oY=r;break}oY=t.return}}function sn(e){for(;null!==oY;){var t=oY;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{oZ(4,t)}catch(e){s2(t,r,e)}break;case 1:var n=t.stateNode;if("function"==typeof n.componentDidMount){var i=t.return;try{n.componentDidMount()}catch(e){s2(t,i,e)}}var a=t.return;try{o0(t)}catch(e){s2(t,a,e)}break;case 5:var o=t.return;try{o0(t)}catch(e){s2(t,o,e)}}}catch(e){s2(t,t.return,e)}if(t===e){oY=null;break}var s=t.sibling;if(null!==s){s.return=t.return,oY=s;break}oY=t.return}}var si=Math.ceil,sa=T.ReactCurrentDispatcher,so=T.ReactCurrentOwner,ss=T.ReactCurrentBatchConfig,sl=0,su=null,sc=null,sd=0,sf=0,sh=n0(0),sp=0,sm=null,sg=0,sv=0,sb=0,sy=null,sw=null,sx=0,sk=1/0,sS=null,s_=!1,sE=null,sC=null,sT=!1,sP=null,sI=0,sA=0,sR=null,sO=-1,sM=0;function sN(){return 0!=(6&sl)?tr():-1!==sO?sO:sO=tr()}function sz(e){return 0==(1&e.mode)?1:0!=(2&sl)&&0!==sd?sd&-sd:null!==iL.transition?(0===sM&&(sM=ty()),sM):0!==(e=tS)?e:e=void 0===(e=window.event)?16:t0(e.type)}function sj(e,t,r,n){if(50<sA)throw sA=0,sR=null,Error(d(185));tx(e,r,n),(0==(2&sl)||e!==su)&&(e===su&&(0==(2&sl)&&(sv|=r),4===sp&&sB(e,sd)),sL(e,n),1===r&&0===sl&&0==(1&t.mode)&&(sk=tr()+500,io&&iu()))}function sL(e,t){var r,n,i,a=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-td(a),s=1<<o,l=i[o];-1===l?(0==(s&r)||0!=(s&n))&&(i[o]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var o=tv(e,e===su?sd:0);if(0===o)null!==a&&e7(a),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(null!=a&&e7(a),1===t)0===e.tag?(i=sV.bind(null,e),io=!0,il(i)):il(sV.bind(null,e)),nj(function(){0==(6&sl)&&iu()}),a=null;else{switch(t_(o)){case 1:a=ti;break;case 4:a=ta;break;case 16:default:a=to;break;case 536870912:a=tl}a=e9(a,sD.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function sD(e,t){if(sO=-1,sM=0,0!=(6&sl))throw Error(d(327));var r=e.callbackNode;if(s0()&&e.callbackNode!==r)return null;var n=tv(e,e===su?sd:0);if(0===n)return null;if(0!=(30&n)||0!=(n&e.expiredLanes)||t)t=sX(e,n);else{t=n;var i=sl;sl|=2;var a=sY();for((su!==e||sd!==t)&&(sS=null,sk=tr()+500,sq(e,t));;)try{(function(){for(;null!==sc&&!te();)sQ(sc)})();break}catch(t){sG(e,t)}iU(),sa.current=a,sl=i,null!==sc?t=0:(su=null,sd=0,t=sp)}if(0!==t){if(2===t&&0!==(i=tb(e))&&(n=i,t=sF(e,i)),1===t)throw r=sm,sq(e,0),sB(e,n),sL(e,tr()),r;if(6===t)sB(e,n);else{if(i=e.current.alternate,0==(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!rK(a(),i))return!1}catch(e){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=sX(e,n))&&0!==(a=tb(e))&&(n=a,t=sF(e,a)),1===t))throw r=sm,sq(e,0),sB(e,n),sL(e,tr()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(d(345));case 2:case 5:sZ(e,sw,sS);break;case 3:if(sB(e,n),(130023424&n)===n&&10<(t=sx+500-tr())){if(0!==tv(e,0))break;if(((i=e.suspendedLanes)&n)!==n){sN(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nM(sZ.bind(null,e,sw,sS),t);break}sZ(e,sw,sS);break;case 4:if(sB(e,n),(4194240&n)===n)break;for(i=-1,t=e.eventTimes;0<n;){var o=31-td(n);a=1<<o,(o=t[o])>i&&(i=o),n&=~a}if(n=i,10<(n=(120>(n=tr()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*si(n/1960))-n)){e.timeoutHandle=nM(sZ.bind(null,e,sw,sS),n);break}sZ(e,sw,sS);break;default:throw Error(d(329))}}}return sL(e,tr()),e.callbackNode===r?sD.bind(null,e):null}function sF(e,t){var r=sy;return e.current.memoizedState.isDehydrated&&(sq(e,t).flags|=256),2!==(e=sX(e,t))&&(t=sw,sw=r,null!==t&&s$(t)),e}function s$(e){null===sw?sw=e:sw.push.apply(sw,e)}function sB(e,t){for(t&=~sb,t&=~sv,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-td(t),n=1<<r;e[r]=-1,t&=~n}}function sV(e){if(0!=(6&sl))throw Error(d(327));s0();var t=tv(e,0);if(0==(1&t))return sL(e,tr()),null;var r=sX(e,t);if(0!==e.tag&&2===r){var n=tb(e);0!==n&&(t=n,r=sF(e,n))}if(1===r)throw r=sm,sq(e,0),sB(e,t),sL(e,tr()),r;if(6===r)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sZ(e,sw,sS),sL(e,tr()),null}function sU(e,t){var r=sl;sl|=1;try{return e(t)}finally{0===(sl=r)&&(sk=tr()+500,io&&iu())}}function sW(e){null!==sP&&0===sP.tag&&0==(6&sl)&&s0();var t=sl;sl|=1;var r=ss.transition,n=tS;try{if(ss.transition=null,tS=1,e)return e()}finally{tS=n,ss.transition=r,0==(6&(sl=t))&&iu()}}function sH(){sf=sh.current,n1(sh)}function sq(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,nN(r)),null!==sc)for(r=sc.return;null!==r;){var n=r;switch(iS(n),n.tag){case 1:null!=(n=n.type.childContextTypes)&&n7();break;case 3:ag(),n1(n4),n1(n3),ak();break;case 5:ab(n);break;case 4:ag();break;case 13:case 19:n1(ay);break;case 10:iW(n.type._context);break;case 22:case 23:sH()}r=r.return}if(su=e,sc=e=le(e.current,null),sd=sf=t,sp=0,sm=null,sb=sv=sg=0,sw=sy=null,null!==iY){for(t=0;t<iY.length;t++)if(null!==(n=(r=iY[t]).interleaved)){r.interleaved=null;var i=n.next,a=r.pending;if(null!==a){var o=a.next;a.next=i,n.next=o}r.pending=n}iY=null}return e}function sG(e,t){for(;;){var r=sc;try{if(iU(),aS.current=os,aI){for(var n=aC.memoizedState;null!==n;){var i=n.queue;null!==i&&(i.pending=null),n=n.next}aI=!1}if(aE=0,aP=aT=aC=null,aA=!1,aR=0,so.current=null,null===r||null===r.return){sp=1,sm=t,sc=null;break}e:{var a=e,o=r.return,s=r,l=t;if(t=sd,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=s,f=c.tag;if(0==(1&c.mode)&&(0===f||11===f||15===f)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=ob(o);if(null!==p){p.flags&=-257,oy(p,o,s,a,t),1&p.mode&&ov(a,u,t),t=p,l=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}if(0==(1&t)){ov(a,u,t),sK();break e}l=Error(d(426))}else if(iC&&1&s.mode){var v=ob(o);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),oy(v,o,s,a,t),ij(od(l,s));break e}}a=l=od(l,s),4!==sp&&(sp=2),null===sy?sy=[a]:sy.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var b=om(a,l,t);i3(a,b);break e;case 1:s=l;var y=a.type,w=a.stateNode;if(0==(128&a.flags)&&("function"==typeof y.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===sC||!sC.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=og(a,s,t);i3(a,x);break e}}a=a.return}while(null!==a)}sJ(r)}catch(e){t=e,sc===r&&null!==r&&(sc=r=r.return);continue}break}}function sY(){var e=sa.current;return sa.current=os,null===e?os:e}function sK(){(0===sp||3===sp||2===sp)&&(sp=4),null===su||0==(268435455&sg)&&0==(268435455&sv)||sB(su,sd)}function sX(e,t){var r=sl;sl|=2;var n=sY();for((su!==e||sd!==t)&&(sS=null,sq(e,t));;)try{(function(){for(;null!==sc;)sQ(sc)})();break}catch(t){sG(e,t)}if(iU(),sl=r,sa.current=n,null!==sc)throw Error(d(261));return su=null,sd=0,sp}function sQ(e){var t=l(e.alternate,e,sf);e.memoizedProps=e.pendingProps,null===t?sJ(e):sc=t,so.current=null}function sJ(e){var t=e;do{var r=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(r=function(e,t,r){var n=t.pendingProps;switch(iS(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oW(t),null;case 1:case 17:return n9(t.type)&&n7(),oW(t),null;case 3:return n=t.stateNode,ag(),n1(n4),n1(n3),ak(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(null===e||null===e.child)&&(iM(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==iT&&(s$(iT),iT=null))),a(e,t),oW(t),null;case 5:ab(t);var l=ap(ah.current);if(r=t.type,null!==e&&null!=t.stateNode)o(e,t,r,n,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(d(166));return oW(t),null}if(e=ap(ad.current),iM(t)){n=t.stateNode,r=t.type;var u=t.memoizedProps;switch(n[nV]=t,n[nU]=u,e=0!=(1&t.mode),r){case"dialog":nm("cancel",n),nm("close",n);break;case"iframe":case"object":case"embed":nm("load",n);break;case"video":case"audio":for(l=0;l<nd.length;l++)nm(nd[l],n);break;case"source":nm("error",n);break;case"img":case"image":case"link":nm("error",n),nm("load",n);break;case"details":nm("toggle",n);break;case"input":ef(n,u),nm("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!u.multiple},nm("invalid",n);break;case"textarea":ew(n,u),nm("invalid",n)}for(var c in eN(r,u),l=null,u)if(u.hasOwnProperty(c)){var f=u[c];"children"===c?"string"==typeof f?n.textContent!==f&&(!0!==u.suppressHydrationWarning&&nP(n.textContent,f,e),l=["children",f]):"number"==typeof f&&n.textContent!==""+f&&(!0!==u.suppressHydrationWarning&&nP(n.textContent,f,e),l=["children",""+f]):p.hasOwnProperty(c)&&null!=f&&"onScroll"===c&&nm("scroll",n)}switch(r){case"input":el(n),em(n,u,!0);break;case"textarea":el(n),ek(n);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(n.onclick=nI)}n=l,t.updateQueue=n,null!==n&&(t.flags|=4)}else{c=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eS(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof n.is?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),"select"===r&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[nV]=t,e[nU]=n,i(e,t,!1,!1),t.stateNode=e;e:{switch(c=ez(r,n),r){case"dialog":nm("cancel",e),nm("close",e),l=n;break;case"iframe":case"object":case"embed":nm("load",e),l=n;break;case"video":case"audio":for(l=0;l<nd.length;l++)nm(nd[l],e);l=n;break;case"source":nm("error",e),l=n;break;case"img":case"image":case"link":nm("error",e),nm("load",e),l=n;break;case"details":nm("toggle",e),l=n;break;case"input":ef(e,n),l=ed(e,n),nm("invalid",e);break;case"option":default:l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=er({},n,{value:void 0}),nm("invalid",e);break;case"textarea":ew(e,n),l=ey(e,n),nm("invalid",e)}for(u in eN(r,l),f=l)if(f.hasOwnProperty(u)){var h=f[u];"style"===u?eO(e,h):"dangerouslySetInnerHTML"===u?null!=(h=h?h.__html:void 0)&&eT(e,h):"children"===u?"string"==typeof h?("textarea"!==r||""!==h)&&eP(e,h):"number"==typeof h&&eP(e,""+h):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?null!=h&&"onScroll"===u&&nm("scroll",e):null!=h&&C(e,u,h,c))}switch(r){case"input":el(e),em(e,n,!1);break;case"textarea":el(e),ek(e);break;case"option":null!=n.value&&e.setAttribute("value",""+eo(n.value));break;case"select":e.multiple=!!n.multiple,null!=(u=n.value)?eb(e,!!n.multiple,u,!1):null!=n.defaultValue&&eb(e,!!n.multiple,n.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=nI)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return oW(t),null;case 6:if(e&&null!=t.stateNode)s(e,t,e.memoizedProps,n);else{if("string"!=typeof n&&null===t.stateNode)throw Error(d(166));if(r=ap(ah.current),ap(ad.current),iM(t)){if(n=t.stateNode,r=t.memoizedProps,n[nV]=t,(u=n.nodeValue!==r)&&null!==(e=i_))switch(e.tag){case 3:nP(n.nodeValue,r,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&nP(n.nodeValue,r,0!=(1&e.mode))}u&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[nV]=t,t.stateNode=n}return oW(t),null;case 13:if(n1(ay),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(iC&&null!==iE&&0!=(1&t.mode)&&0==(128&t.flags))iN(),iz(),t.flags|=98560,u=!1;else if(u=iM(t),null!==n&&null!==n.dehydrated){if(null===e){if(!u)throw Error(d(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(d(317));u[nV]=t}else iz(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;oW(t),u=!1}else null!==iT&&(s$(iT),iT=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=r,t;return(n=null!==n)!=(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ay.current)?0===sp&&(sp=3):sK())),null!==t.updateQueue&&(t.flags|=4),oW(t),null;case 4:return ag(),a(e,t),null===e&&nb(t.stateNode.containerInfo),oW(t),null;case 10:return iW(t.type._context),oW(t),null;case 19:if(n1(ay),null===(u=t.memoizedState))return oW(t),null;if(n=0!=(128&t.flags),null===(c=u.rendering)){if(n)oU(u,!1);else{if(0!==sp||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=aw(e))){for(t.flags|=128,oU(u,!1),null!==(n=c.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)u=r,e=n,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return n2(ay,1&ay.current|2),t.child}e=e.sibling}null!==u.tail&&tr()>sk&&(t.flags|=128,n=!0,oU(u,!1),t.lanes=4194304)}}else{if(!n){if(null!==(e=aw(c))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),oU(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!iC)return oW(t),null}else 2*tr()-u.renderingStartTime>sk&&1073741824!==r&&(t.flags|=128,n=!0,oU(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(r=u.last)?r.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tr(),t.sibling=null,r=ay.current,n2(ay,n?1&r|2:1&r),t;return oW(t),null;case 22:case 23:return sH(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!=(1&t.mode)?0!=(1073741824&sf)&&(oW(t),6&t.subtreeFlags&&(t.flags|=8192)):oW(t),null;case 24:case 25:return null}throw Error(d(156,t.tag))}(r,t,sf))){sc=r;return}}else{if(null!==(r=function(e,t){switch(iS(t),t.tag){case 1:return n9(t.type)&&n7(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ag(),n1(n4),n1(n3),ak(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return ab(t),null;case 13:if(n1(ay),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(d(340));iz()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return n1(ay),null;case 4:return ag(),null;case 10:return iW(t.type._context),null;case 22:case 23:return sH(),null;default:return null}}(r,t))){r.flags&=32767,sc=r;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{sp=6,sc=null;return}}if(null!==(t=t.sibling)){sc=t;return}sc=t=e}while(null!==t)0===sp&&(sp=5)}function sZ(e,t,r){var n=tS,i=ss.transition;try{ss.transition=null,tS=1,function(e,t,r,n){do s0();while(null!==sP)if(0!=(6&sl))throw Error(d(327));r=e.finishedWork;var i=e.finishedLanes;if(null!==r){if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-td(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}(e,a),e===su&&(sc=su=null,sd=0),0==(2064&r.subtreeFlags)&&0==(2064&r.flags)||sT||(sT=!0,o=to,s=function(){return s0(),null},e9(o,s)),a=0!=(15990&r.flags),0!=(15990&r.subtreeFlags)||a){a=ss.transition,ss.transition=null;var o,s,l,u,c,f=tS;tS=1;var h=sl;sl|=4,so.current=null,function(e,t){if(nA=tY,r0(e=rZ())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var i,a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch(e){r=null;break e}var s=0,l=-1,u=-1,c=0,f=0,h=e,p=null;t:for(;;){for(;h!==r||0!==a&&3!==h.nodeType||(l=s+a),h!==o||0!==n&&3!==h.nodeType||(u=s+n),3===h.nodeType&&(s+=h.nodeValue.length),null!==(i=h.firstChild);)p=h,h=i;for(;;){if(h===e)break t;if(p===r&&++c===a&&(l=s),p===o&&++f===n&&(u=s),null!==(i=h.nextSibling))break;p=(h=p).parentNode}h=i}r=-1===l||-1===u?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(nR={focusedElem:e,selectionRange:r},tY=!1,oY=t;null!==oY;)if(e=(t=oY).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,oY=e;else for(;null!==oY;){t=oY;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:iD(t.type,g),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(d(163))}}catch(e){s2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,oY=e;break}oY=t.return}m=oQ,oQ=!1}(e,r),o7(r,e),function(e){var t=rZ(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&function e(t,r){return!!t&&!!r&&(t===r||(!t||3!==t.nodeType)&&(r&&3===r.nodeType?e(t,r.parentNode):"contains"in t?t.contains(r):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(r))))}(r.ownerDocument.documentElement,r)){if(null!==n&&r0(r)){if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=void 0===n.end?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=rJ(r,a);var o=rJ(r,n);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(nR),tY=!!nA,nR=nA=null,e.current=r,l=r,u=e,c=i,oY=l,function e(t,r,n){for(var i=0!=(1&t.mode);null!==oY;){var a=oY,o=a.child;if(22===a.tag&&i){var s=null!==a.memoizedState||oH;if(!s){var l=a.alternate,u=null!==l&&null!==l.memoizedState||oq;l=oH;var c=oq;if(oH=s,(oq=u)&&!c)for(oY=a;null!==oY;)u=(s=oY).child,22===s.tag&&null!==s.memoizedState?sn(a):null!==u?(u.return=s,oY=u):sn(a);for(;null!==o;)oY=o,e(o,r,n),o=o.sibling;oY=a,oH=l,oq=c}st(t,r,n)}else 0!=(8772&a.subtreeFlags)&&null!==o?(o.return=a,oY=o):st(t,r,n)}}(l,u,c),tt(),sl=h,tS=f,ss.transition=a}else e.current=r;if(sT&&(sT=!1,sP=e,sI=i),0===(a=e.pendingLanes)&&(sC=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(r.stateNode,n),sL(e,tr()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)n((i=t[r]).value,{componentStack:i.stack,digest:i.digest});if(s_)throw s_=!1,e=sE,sE=null,e;0!=(1&sI)&&0!==e.tag&&s0(),0!=(1&(a=e.pendingLanes))?e===sR?sA++:(sA=0,sR=e):sA=0,iu()}}(e,t,r,n)}finally{ss.transition=i,tS=n}return null}function s0(){if(null!==sP){var e=t_(sI),t=ss.transition,r=tS;try{if(ss.transition=null,tS=16>e?16:e,null===sP)var n=!1;else{if(e=sP,sP=null,sI=0,0!=(6&sl))throw Error(d(331));var i=sl;for(sl|=4,oY=e.current;null!==oY;){var a=oY,o=a.child;if(0!=(16&oY.flags)){var s=a.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(oY=u;null!==oY;){var c=oY;switch(c.tag){case 0:case 11:case 15:oJ(8,c,a)}var f=c.child;if(null!==f)f.return=c,oY=f;else for(;null!==oY;){var h=(c=oY).sibling,p=c.return;if(function e(t){var r=t.alternate;null!==r&&(t.alternate=null,e(r)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(r=t.stateNode)&&(delete r[nV],delete r[nU],delete r[nH],delete r[nq],delete r[nG]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){oY=null;break}if(null!==h){h.return=p,oY=h;break}oY=p}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}oY=a}}if(0!=(2064&a.subtreeFlags)&&null!==o)o.return=a,oY=o;else for(;null!==oY;){if(a=oY,0!=(2048&a.flags))switch(a.tag){case 0:case 11:case 15:oJ(9,a,a.return)}var b=a.sibling;if(null!==b){b.return=a.return,oY=b;break}oY=a.return}}var y=e.current;for(oY=y;null!==oY;){var w=(o=oY).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,oY=w;else for(o=y;null!==oY;){if(s=oY,0!=(2048&s.flags))try{switch(s.tag){case 0:case 11:case 15:oZ(9,s)}}catch(e){s2(s,s.return,e)}if(s===o){oY=null;break}var x=s.sibling;if(null!==x){x.return=s.return,oY=x;break}oY=s.return}}if(sl=i,iu(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}n=!0}return n}finally{tS=r,ss.transition=t}}return!1}function s1(e,t,r){t=om(e,t=od(r,t),1),e=i2(e,t,1),t=sN(),null!==e&&(tx(e,1,t),sL(e,t))}function s2(e,t,r){if(3===e.tag)s1(e,e,r);else for(;null!==t;){if(3===t.tag){s1(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===sC||!sC.has(n))){e=og(t,e=od(r,e),1),t=i2(t,e,1),e=sN(),null!==t&&(tx(t,1,e),sL(t,e));break}}t=t.return}}function s5(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=sN(),e.pingedLanes|=e.suspendedLanes&r,su===e&&(sd&r)===r&&(4===sp||3===sp&&(130023424&sd)===sd&&500>tr()-sx?sq(e,0):sb|=r),sL(e,t)}function s3(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var r=sN();null!==(e=iQ(e,t))&&(tx(e,t,r),sL(e,r))}function s4(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),s3(e,r)}function s6(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;null!==i&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(d(314))}null!==n&&n.delete(t),s3(e,r)}function s8(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function s9(e,t,r,n){return new s8(e,t,r,n)}function s7(e){return!(!(e=e.prototype)||!e.isReactComponent)}function le(e,t){var r=e.alternate;return null===r?((r=s9(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function lt(e,t,r,n,i,a){var o=2;if(n=e,"function"==typeof e)s7(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case A:return lr(r.children,i,a,t);case R:o=8,i|=8;break;case O:return(e=s9(12,r,t,2|i)).elementType=O,e.lanes=a,e;case j:return(e=s9(13,r,t,i)).elementType=j,e.lanes=a,e;case L:return(e=s9(19,r,t,i)).elementType=L,e.lanes=a,e;case $:return ln(r,i,a,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case M:o=10;break e;case N:o=9;break e;case z:o=11;break e;case D:o=14;break e;case F:o=16,n=null;break e}throw Error(d(130,null==e?e:typeof e,""))}return(t=s9(o,r,t,i)).elementType=e,t.type=n,t.lanes=a,t}function lr(e,t,r,n){return(e=s9(7,e,n,t)).lanes=r,e}function ln(e,t,r,n){return(e=s9(22,e,n,t)).elementType=$,e.lanes=r,e.stateNode={isHidden:!1},e}function li(e,t,r){return(e=s9(6,e,null,t)).lanes=r,e}function la(e,t,r){return(t=s9(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lo(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tw(0),this.expirationTimes=tw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tw(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ls(e,t,r,n,i,a,o,s,l){return e=new lo(e,t,r,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=s9(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},iZ(a),e}function ll(e){if(!e)return n5;e=e._reactInternals;e:{if(e3(e)!==e||1!==e.tag)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(n9(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(d(171))}if(1===e.tag){var r=e.type;if(n9(r))return it(e,r,t)}return t}function lu(e,t,r,n,i,a,o,s,l){return(e=ls(r,n,!0,e,i,a,o,s,l)).context=ll(null),r=e.current,(a=i1(n=sN(),i=sz(r))).callback=null!=t?t:null,i2(r,a,i),e.current.lanes=i,tx(e,i,n),sL(e,n),e}function lc(e,t,r,n){var i=t.current,a=sN(),o=sz(i);return r=ll(r),null===t.context?t.context=r:t.pendingContext=r,(t=i1(a,o)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=i2(i,t,o))&&(sj(e,i,o,a),i5(e,i,o)),o}function ld(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function lf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function lh(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}l=function(e,t,r){if(null!==e){if(e.memoizedProps!==t.pendingProps||n4.current)ox=!0;else{if(0==(e.lanes&r)&&0==(128&t.flags))return ox=!1,function(e,t,r){switch(t.tag){case 3:oR(t),iz();break;case 5:av(t);break;case 1:n9(t.type)&&ir(t);break;case 4:am(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;n2(iF,n._currentValue),n._currentValue=i;break;case 13:if(null!==(n=t.memoizedState)){if(null!==n.dehydrated)return n2(ay,1&ay.current),t.flags|=128,null;if(0!=(r&t.child.childLanes))return oz(e,t,r);return n2(ay,1&ay.current),null!==(e=oV(e,t,r))?e.sibling:null}n2(ay,1&ay.current);break;case 19:if(n=0!=(r&t.childLanes),0!=(128&e.flags)){if(n)return o$(e,t,r);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),n2(ay,ay.current),!n)return null;break;case 22:case 23:return t.lanes=0,oC(e,t,r)}return oV(e,t,r)}(e,t,r);ox=0!=(131072&e.flags)}}else ox=!1,iC&&0!=(1048576&t.flags)&&ix(t,ip,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;oB(e,t),e=t.pendingProps;var i=n8(t,n3.current);iq(t,r),i=az(null,t,n,e,i,r);var a=aj();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,n9(n)?(a=!0,ir(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,iZ(t),i.updater=i7,t.stateNode=i,i._reactInternals=t,an(t,n,e,r),t=oA(null,t,n,!0,a,r)):(t.tag=0,iC&&a&&ik(t),ok(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(oB(e,t),e=t.pendingProps,n=(i=n._init)(n._payload),t.type=n,i=t.tag=function(e){if("function"==typeof e)return s7(e)?1:0;if(null!=e){if((e=e.$$typeof)===z)return 11;if(e===D)return 14}return 2}(n),e=iD(n,e),i){case 0:t=oP(null,t,n,e,r);break e;case 1:t=oI(null,t,n,e,r);break e;case 11:t=oS(null,t,n,e,r);break e;case 14:t=o_(null,t,n,iD(n.type,e),r);break e}throw Error(d(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:iD(n,i),oP(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:iD(n,i),oI(e,t,n,i,r);case 3:e:{if(oR(t),null===e)throw Error(d(387));n=t.pendingProps,i=(a=t.memoizedState).element,i0(e,t),i4(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated){if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){i=od(Error(d(423)),t),t=oO(e,t,n,r,i);break e}if(n!==i){i=od(Error(d(424)),t),t=oO(e,t,n,r,i);break e}for(iE=nF(t.stateNode.containerInfo.firstChild),i_=t,iC=!0,iT=null,r=au(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(iz(),n===i){t=oV(e,t,r);break e}ok(e,t,n,r)}t=t.child}return t;case 5:return av(t),null===e&&iR(t),n=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,o=i.children,nO(n,i)?o=null:null!==a&&nO(n,a)&&(t.flags|=32),oT(e,t),ok(e,t,o,r),t.child;case 6:return null===e&&iR(t),null;case 13:return oz(e,t,r);case 4:return am(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=al(t,null,n,r):ok(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:iD(n,i),oS(e,t,n,i,r);case 7:return ok(e,t,t.pendingProps,r),t.child;case 8:case 12:return ok(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,n2(iF,n._currentValue),n._currentValue=o,null!==a){if(rK(a.value,o)){if(a.children===i.children&&!n4.current){t=oV(e,t,r);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){o=a.child;for(var l=s.firstContext;null!==l;){if(l.context===n){if(1===a.tag){(l=i1(-1,r&-r)).tag=2;var u=a.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=r,null!==(l=a.alternate)&&(l.lanes|=r),iH(a.return,r,t),s.lanes|=r;break}l=l.next}}else if(10===a.tag)o=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(o=a.return))throw Error(d(341));o.lanes|=r,null!==(s=o.alternate)&&(s.lanes|=r),iH(o,r,t),o=a.sibling}else o=a.child;if(null!==o)o.return=a;else for(o=a;null!==o;){if(o===t){o=null;break}if(null!==(a=o.sibling)){a.return=o.return,o=a;break}o=o.return}a=o}}ok(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,iq(t,r),n=n(i=iG(i)),t.flags|=1,ok(e,t,n,r),t.child;case 14:return i=iD(n=t.type,t.pendingProps),i=iD(n.type,i),o_(e,t,n,i,r);case 15:return oE(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:iD(n,i),oB(e,t),t.tag=1,n9(n)?(e=!0,ir(t)):e=!1,iq(t,r),at(t,n,i),an(t,n,i,r),oA(null,t,n,!0,e,r);case 19:return o$(e,t,r);case 22:return oC(e,t,r)}throw Error(d(156,t.tag))};var lp="function"==typeof reportError?reportError:function(e){console.error(e)};function lm(e){this._internalRoot=e}function lg(e){this._internalRoot=e}function lv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function lb(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function ly(){}function lw(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if("function"==typeof i){var s=i;i=function(){var e=ld(o);s.call(e)}}lc(t,o,e,i)}else o=function(e,t,r,n,i){if(i){if("function"==typeof n){var a=n;n=function(){var e=ld(o);a.call(e)}}var o=lu(t,n,e,0,null,!1,!1,"",ly);return e._reactRootContainer=o,e[nW]=o.current,nb(8===e.nodeType?e.parentNode:e),sW(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof n){var s=n;n=function(){var e=ld(l);s.call(e)}}var l=ls(e,0,!1,null,null,!1,!1,"",ly);return e._reactRootContainer=l,e[nW]=l.current,nb(8===e.nodeType?e.parentNode:e),sW(function(){lc(t,l,r,n)}),l}(r,t,e,i,n);return ld(o)}lg.prototype.render=lm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(d(409));lc(e,t,null,null)},lg.prototype.unmount=lm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;sW(function(){lc(null,e,null,null)}),t[nW]=null}},lg.prototype.unstable_scheduleHydration=function(e){if(e){var t=tP();e={blockedOn:null,target:e,priority:t};for(var r=0;r<tL.length&&0!==t&&t<tL[r].priority;r++);tL.splice(r,0,e),0===r&&tB(e)}},tE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=tg(t.pendingLanes);0!==r&&(tk(t,1|r),sL(t,tr()),0==(6&sl)&&(sk=tr()+500,iu()))}break;case 13:sW(function(){var t=iQ(e,1);null!==t&&sj(t,e,1,sN())}),lh(e,1)}},tC=function(e){if(13===e.tag){var t=iQ(e,134217728);null!==t&&sj(t,e,134217728,sN()),lh(e,134217728)}},tT=function(e){if(13===e.tag){var t=sz(e),r=iQ(e,t);null!==r&&sj(r,e,t,sN()),lh(e,t)}},tP=function(){return tS},tI=function(e,t){var r=tS;try{return tS=e,t()}finally{tS=r}},eD=function(e,t,r){switch(t){case"input":if(ep(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=nQ(n);if(!i)throw Error(d(90));eu(n),ep(n,i)}}}break;case"textarea":ex(e,r);break;case"select":null!=(t=r.value)&&eb(e,!!r.multiple,t,!1)}},eW=sU,eH=sW;var lx={findFiberByHostInstance:nY,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lk={bundleType:lx.bundleType,version:lx.version,rendererPackageName:lx.rendererPackageName,rendererConfig:lx.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:lx.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lS=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lS.isDisabled&&lS.supportsFiber)try{tu=lS.inject(lk),tc=lS}catch(e){}}U={usingClientEntryPoint:!1,Events:[nK,nX,nQ,eV,eU,sU]},W=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lv(t))throw Error(d(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:I,key:null==n?null:""+n,children:e,containerInfo:t,implementation:null}}(e,t,null,r)},H=function(e,t){if(!lv(e))throw Error(d(299));var r=!1,n="",i=lp;return null!=t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=ls(e,1,!1,null,null,r,!1,n,i),e[nW]=t.current,nb(8===e.nodeType?e.parentNode:e),new lm(t)},q=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(d(188));throw Error(d(268,e=Object.keys(e).join(",")))}return e=null===(e=e8(t))?null:e.stateNode},G=function(e){return sW(e)},Y=function(e,t,r){if(!lb(t))throw Error(d(200));return lw(null,e,t,!0,r)},K=function(e,t,r){if(!lv(e))throw Error(d(405));var n=null!=r&&r.hydratedSources||null,i=!1,a="",o=lp;if(null!=r&&(!0===r.unstable_strictMode&&(i=!0),void 0!==r.identifierPrefix&&(a=r.identifierPrefix),void 0!==r.onRecoverableError&&(o=r.onRecoverableError)),t=lu(t,null,e,1,null!=r?r:null,i,!1,a,o),e[nW]=t.current,nb(e),n)for(e=0;e<n.length;e++)i=(i=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new lg(t)},X=function(e,t,r){if(!lb(t))throw Error(d(200));return lw(null,e,t,!1,r)},Q=function(e){if(!lb(e))throw Error(d(40));return!!e._reactRootContainer&&(sW(function(){lw(null,null,e,!1,function(){e._reactRootContainer=null,e[nW]=null})}),!0)},J=sU,Z=function(e,t,r,n){if(!lb(r))throw Error(d(200));if(null==e||void 0===e._reactInternals)throw Error(d(38));return lw(e,t,r,!1,n)},ee="18.2.0-next-9e3b772b8-20220608"}),h.register("fO90s",function(e,t){e.exports=h("gcnCG")}),h.register("gcnCG",function(e,t){function r(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,i=e[n];if(0<o(i,t))e[n]=t,e[r]=i,r=n;else break}}function i(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,i=e.length,a=i>>>1;n<a;){var s=2*(n+1)-1,l=e[s],u=s+1,c=e[u];if(0>o(l,r))u<i&&0>o(c,l)?(e[n]=c,e[u]=r,n=u):(e[n]=l,e[s]=r,n=s);else if(u<i&&0>o(c,r))e[n]=c,e[u]=r,n=u;else break}}return t}function o(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(n(e.exports,"unstable_now",()=>s,e=>s=e),n(e.exports,"unstable_IdlePriority",()=>l,e=>l=e),n(e.exports,"unstable_ImmediatePriority",()=>u,e=>u=e),n(e.exports,"unstable_LowPriority",()=>c,e=>c=e),n(e.exports,"unstable_NormalPriority",()=>d,e=>d=e),n(e.exports,"unstable_Profiling",()=>f,e=>f=e),n(e.exports,"unstable_UserBlockingPriority",()=>h,e=>h=e),n(e.exports,"unstable_cancelCallback",()=>p,e=>p=e),n(e.exports,"unstable_continueExecution",()=>m,e=>m=e),n(e.exports,"unstable_forceFrameRate",()=>g,e=>g=e),n(e.exports,"unstable_getCurrentPriorityLevel",()=>v,e=>v=e),n(e.exports,"unstable_getFirstCallbackNode",()=>b,e=>b=e),n(e.exports,"unstable_next",()=>y,e=>y=e),n(e.exports,"unstable_pauseExecution",()=>w,e=>w=e),n(e.exports,"unstable_requestPaint",()=>x,e=>x=e),n(e.exports,"unstable_runWithPriority",()=>k,e=>k=e),n(e.exports,"unstable_scheduleCallback",()=>S,e=>S=e),n(e.exports,"unstable_shouldYield",()=>_,e=>_=e),n(e.exports,"unstable_wrapCallback",()=>E,e=>E=e),"object"==typeof performance&&"function"==typeof performance.now){var s,l,u,c,d,f,h,p,m,g,v,b,y,w,x,k,S,_,E,C,T=performance;s=function(){return T.now()}}else{var P=Date,I=P.now();s=function(){return P.now()-I}}var A=[],R=[],O=1,M=null,N=3,z=!1,j=!1,L=!1,D="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,$="undefined"!=typeof setImmediate?setImmediate:null;function B(e){for(var t=i(R);null!==t;){if(null===t.callback)a(R);else if(t.startTime<=e)a(R),t.sortIndex=t.expirationTime,r(A,t);else break;t=i(R)}}function V(e){if(L=!1,B(e),!j){if(null!==i(A))j=!0,Z(U);else{var t=i(R);null!==t&&ee(V,t.startTime-e)}}}function U(e,t){j=!1,L&&(L=!1,F(q),q=-1),z=!0;var r=N;try{for(B(t),M=i(A);null!==M&&(!(M.expirationTime>t)||e&&!K());){var n=M.callback;if("function"==typeof n){M.callback=null,N=M.priorityLevel;var o=n(M.expirationTime<=t);t=s(),"function"==typeof o?M.callback=o:M===i(A)&&a(A),B(t)}else a(A);M=i(A)}if(null!==M)var l=!0;else{var u=i(R);null!==u&&ee(V,u.startTime-t),l=!1}return l}finally{M=null,N=r,z=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var W=!1,H=null,q=-1,G=5,Y=-1;function K(){return!(s()-Y<G)}function X(){if(null!==H){var e=s();Y=e;var t=!0;try{t=H(!0,e)}finally{t?C():(W=!1,H=null)}}else W=!1}if("function"==typeof $)C=function(){$(X)};else if("undefined"!=typeof MessageChannel){var Q=new MessageChannel,J=Q.port2;Q.port1.onmessage=X,C=function(){J.postMessage(null)}}else C=function(){D(X,0)};function Z(e){H=e,W||(W=!0,C())}function ee(e,t){q=D(function(){e(s())},t)}l=5,u=1,c=4,d=3,f=null,h=2,p=function(e){e.callback=null},m=function(){j||z||(j=!0,Z(U))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<e?Math.floor(1e3/e):5},v=function(){return N},b=function(){return i(A)},y=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var r=N;N=t;try{return e()}finally{N=r}},w=function(){},x=function(){},k=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=N;N=e;try{return t()}finally{N=r}},S=function(e,t,n){var a=s();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?a+n:a,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:O++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>a?(e.sortIndex=n,r(R,e),null===i(A)&&e===i(R)&&(L?(F(q),q=-1):L=!0,ee(V,n-a))):(e.sortIndex=o,r(A,e),j||z||(j=!0,Z(U))),e},_=K,E=function(e){var t=N;return function(){var r=N;N=t;try{return e.apply(this,arguments)}finally{N=r}}}}),h.register("9cCWX",function(e,t){n(e.exports,"AsyncMode",()=>r,e=>r=e),n(e.exports,"ConcurrentMode",()=>i,e=>i=e),n(e.exports,"ContextConsumer",()=>a,e=>a=e),n(e.exports,"ContextProvider",()=>o,e=>o=e),n(e.exports,"Element",()=>s,e=>s=e),n(e.exports,"ForwardRef",()=>l,e=>l=e),n(e.exports,"Fragment",()=>u,e=>u=e),n(e.exports,"Lazy",()=>c,e=>c=e),n(e.exports,"Memo",()=>d,e=>d=e),n(e.exports,"Portal",()=>f,e=>f=e),n(e.exports,"Profiler",()=>h,e=>h=e),n(e.exports,"StrictMode",()=>p,e=>p=e),n(e.exports,"Suspense",()=>m,e=>m=e),n(e.exports,"isAsyncMode",()=>g,e=>g=e),n(e.exports,"isConcurrentMode",()=>v,e=>v=e),n(e.exports,"isContextConsumer",()=>b,e=>b=e),n(e.exports,"isContextProvider",()=>y,e=>y=e),n(e.exports,"isElement",()=>w,e=>w=e),n(e.exports,"isForwardRef",()=>x,e=>x=e),n(e.exports,"isFragment",()=>k,e=>k=e),n(e.exports,"isLazy",()=>S,e=>S=e),n(e.exports,"isMemo",()=>_,e=>_=e),n(e.exports,"isPortal",()=>E,e=>E=e),n(e.exports,"isProfiler",()=>C,e=>C=e),n(e.exports,"isStrictMode",()=>T,e=>T=e),n(e.exports,"isSuspense",()=>P,e=>P=e),n(e.exports,"isValidElementType",()=>I,e=>I=e),n(e.exports,"typeOf",()=>A,e=>A=e);var r,i,a,o,s,l,u,c,d,f,h,p,m,g,v,b,y,w,x,k,S,_,E,C,T,P,I,A,R="function"==typeof Symbol&&Symbol.for,O=R?Symbol.for("react.element"):60103,M=R?Symbol.for("react.portal"):60106,N=R?Symbol.for("react.fragment"):60107,z=R?Symbol.for("react.strict_mode"):60108,j=R?Symbol.for("react.profiler"):60114,L=R?Symbol.for("react.provider"):60109,D=R?Symbol.for("react.context"):60110,F=R?Symbol.for("react.async_mode"):60111,$=R?Symbol.for("react.concurrent_mode"):60111,B=R?Symbol.for("react.forward_ref"):60112,V=R?Symbol.for("react.suspense"):60113,U=R?Symbol.for("react.suspense_list"):60120,W=R?Symbol.for("react.memo"):60115,H=R?Symbol.for("react.lazy"):60116,q=R?Symbol.for("react.block"):60121,G=R?Symbol.for("react.fundamental"):60117,Y=R?Symbol.for("react.responder"):60118,K=R?Symbol.for("react.scope"):60119;function X(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case O:switch(e=e.type){case F:case $:case N:case j:case z:case V:return e;default:switch(e=e&&e.$$typeof){case D:case B:case H:case W:case L:return e;default:return t}}case M:return t}}}function Q(e){return X(e)===$}r=F,i=$,a=D,o=L,s=O,l=B,u=N,c=H,d=W,f=M,h=j,p=z,m=V,g=function(e){return Q(e)||X(e)===F},v=Q,b=function(e){return X(e)===D},y=function(e){return X(e)===L},w=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===O},x=function(e){return X(e)===B},k=function(e){return X(e)===N},S=function(e){return X(e)===H},_=function(e){return X(e)===W},E=function(e){return X(e)===M},C=function(e){return X(e)===j},T=function(e){return X(e)===z},P=function(e){return X(e)===V},I=function(e){return"string"==typeof e||"function"==typeof e||e===N||e===$||e===j||e===z||e===V||e===U||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===W||e.$$typeof===L||e.$$typeof===D||e.$$typeof===B||e.$$typeof===G||e.$$typeof===Y||e.$$typeof===K||e.$$typeof===q)},A=X}),h.register("5Gn6I",function(e,t){/** Used to stand-in for `undefined` hash values. */var r,n,i,a,o,s,l,c,d,f,h="__lodash_hash_undefined__",p="[object Arguments]",m="[object Function]",g="[object Object]",v=/^\[object .+?Constructor\]$/,b=/^(?:0|[1-9]\d*)$/,y={};y["[object Float32Array]"]=y["[object Float64Array]"]=y["[object Int8Array]"]=y["[object Int16Array]"]=y["[object Int32Array]"]=y["[object Uint8Array]"]=y["[object Uint8ClampedArray]"]=y["[object Uint16Array]"]=y["[object Uint32Array]"]=!0,y[p]=y["[object Array]"]=y["[object ArrayBuffer]"]=y["[object Boolean]"]=y["[object DataView]"]=y["[object Date]"]=y["[object Error]"]=y[m]=y["[object Map]"]=y["[object Number]"]=y[g]=y["[object RegExp]"]=y["[object Set]"]=y["[object String]"]=y["[object WeakMap]"]=!1;/** Detect free variable `global` from Node.js. */var w="object"==typeof u&&u&&u.Object===Object&&u,x="object"==typeof self&&self&&self.Object===Object&&self,k=w||x||Function("return this")(),S=t&&!t.nodeType&&t,_=S&&e&&!e.nodeType&&e,E=_&&_.exports===S,C=E&&w.process,T=function(){try{// Use `util.types` for Node.js 10+.
var e=_&&_.require&&_.require("util").types;if(e)return e;// Legacy `process.binding('util')` for Node.js < 10.
return C&&C.binding&&C.binding("util")}catch(e){}}(),P=T&&T.isTypedArray,I=Array.prototype,A=Function.prototype,R=Object.prototype,O=k["__core-js_shared__"],M=A.toString,N=R.hasOwnProperty,z=(s=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+s:"",j=R.toString,L=M.call(Object),D=RegExp("^"+M.call(N).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=E?k.Buffer:void 0,$=k.Symbol,B=k.Uint8Array,V=F?F.allocUnsafe:void 0,U=(l=Object.getPrototypeOf,c=Object,function(e){return l(c(e))}),W=Object.create,H=R.propertyIsEnumerable,q=I.splice,G=$?$.toStringTag:void 0,Y=function(){try{var e=ef(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),K=F?F.isBuffer:void 0,X=Math.max,Q=Date.now,J=ef(k,"Map"),Z=ef(Object,"create"),ee=function(){function e(){}return function(t){if(!e_(t))return{};if(W)return W(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function et(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function er(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function en(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ei(e){var t=this.__data__=new er(e);this.size=t.size}/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function ea(e,t,r){(void 0===r||ev(e[t],r))&&(void 0!==r||t in e)||es(e,t,r)}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function eo(e,t){for(var r=e.length;r--;)if(ev(e[r][0],t))return r;return -1}/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function es(e,t,r){"__proto__"==t&&Y?Y(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}// Add methods to `Hash`.
et.prototype.clear=/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function(){this.__data__=Z?Z(null):{},this.size=0},et.prototype.delete=/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},et.prototype.get=/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__;if(Z){var r=t[e];return r===h?void 0:r}return N.call(t,e)?t[e]:void 0},et.prototype.has=/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){var t=this.__data__;return Z?void 0!==t[e]:N.call(t,e)},et.prototype.set=/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Z&&void 0===t?h:t,this},// Add methods to `ListCache`.
er.prototype.clear=/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function(){this.__data__=[],this.size=0},er.prototype.delete=/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,r=eo(t,e);return!(r<0)&&(r==t.length-1?t.pop():q.call(t,r,1),--this.size,!0)},er.prototype.get=/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__,r=eo(t,e);return r<0?void 0:t[r][1]},er.prototype.has=/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return eo(this.__data__,e)>-1},er.prototype.set=/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function(e,t){var r=this.__data__,n=eo(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},// Add methods to `MapCache`.
en.prototype.clear=/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function(){this.size=0,this.__data__={hash:new et,map:new(J||er),string:new et}},en.prototype.delete=/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=ed(this,e).delete(e);return this.size-=t?1:0,t},en.prototype.get=/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return ed(this,e).get(e)},en.prototype.has=/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return ed(this,e).has(e)},en.prototype.set=/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function(e,t){var r=ed(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},// Add methods to `Stack`.
ei.prototype.clear=/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function(){this.__data__=new er,this.size=0},ei.prototype.delete=/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},ei.prototype.get=/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return this.__data__.get(e)},ei.prototype.has=/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return this.__data__.has(e)},ei.prototype.set=/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function(e,t){var r=this.__data__;if(r instanceof er){var n=r.__data__;if(!J||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new en(n)}return r.set(e,t),this.size=r.size,this};/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */var el=function(e,t,r){for(var n=-1,i=Object(e),a=r(e),o=a.length;o--;){var s=a[++n];if(!1===t(i[s],s,i))break}return e};/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function eu(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":G&&G in Object(e)?/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=N.call(e,G),r=e[G];try{e[G]=void 0;var n=!0}catch(e){}var i=j.call(e);return n&&(t?e[G]=r:delete e[G]),i}(e):j.call(e)}/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function ec(e){return eE(e)&&eu(e)==p}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function ed(e,t){var r,n=e.__data__;return("string"==(r=typeof t)||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t)?n["string"==typeof t?"string":"hash"]:n.map}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function ef(e,t){var r=null==e?void 0:e[t];return!(!e_(r)||z&&z in r)&&(ek(r)?D:v).test(/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(r))?r:void 0}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function eh(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&b.test(e))&&e>-1&&e%1==0&&e<t}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function ep(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||R)}/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function em(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var eg=(r=Y?function(e,t){return Y(e,"toString",{configurable:!0,enumerable:!1,value:function(){return t},writable:!0})}:eI,n=0,i=0,function(){var e=Q(),t=16-(e-i);if(i=e,t>0){if(++n>=800)return arguments[0]}else n=0;return r.apply(void 0,arguments)});/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function ev(e,t){return e===t||e!=e&&t!=t}/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var eb=ec(function(){return arguments}())?ec:function(e){return eE(e)&&N.call(e,"callee")&&!H.call(e,"callee")},ey=Array.isArray;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function ew(e){return null!=e&&eS(e.length)&&!ek(e)}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var ex=K||/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function(){return!1};/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function ek(e){if(!e_(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=eu(e);return t==m||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function eS(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function e_(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function eE(e){return null!=e&&"object"==typeof e}/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var eC=P?function(e){return P(e)}:/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function(e){return eE(e)&&eS(e.length)&&!!y[eu(e)]};/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function eT(e){return ew(e)?/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function(e,t){var r=ey(e),n=!r&&eb(e),i=!r&&!n&&ex(e),a=!r&&!n&&!i&&eC(e),o=r||n||i||a,s=o?/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],l=s.length;for(var u in e)(t||N.call(e,u))&&!(o&&// Safari 9 has enumerable `arguments.length` in strict mode.
("length"==u||// Node.js 0.10 has enumerable non-index properties on buffers.
i&&("offset"==u||"parent"==u)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
a&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||// Skip index properties.
eh(u,l)))&&s.push(u);return s}(e,!0):/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){if(!e_(e))return(/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e));var t=ep(e),r=[];for(var n in e)"constructor"==n&&(t||!N.call(e,n))||r.push(n);return r}(e)}/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */var eP=(d=function(e,t,r,n){!/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function e(t,r,n,i,a){t!==r&&el(r,function(o,s){if(a||(a=new ei),e_(o))/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */(function(e,t,r,n,i,a,o){var s=em(e,r),l=em(t,r),u=o.get(l);if(u){ea(e,r,u);return}var c=a?a(s,l,r+"",e,t,o):void 0,d=void 0===c;if(d){var f,h,p=ey(l),m=!p&&ex(l),v=!p&&!m&&eC(l);c=l,p||m||v?ey(s)?c=s:eE(s)&&ew(s)?c=/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}(s):m?(d=!1,c=/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function(e,t){if(t)return e.slice();var r=e.length,n=V?V(r):new e.constructor(r);return e.copy(n),n}(l,!0)):v?(d=!1,h=new(f=l.buffer).constructor(f.byteLength),new B(h).set(new B(f)),c=new l.constructor(h,l.byteOffset,l.length)):c=[]:/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function(e){if(!eE(e)||eu(e)!=g)return!1;var t=U(e);if(null===t)return!0;var r=N.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&M.call(r)==L}(l)||eb(l)?(c=s,eb(s)?c=/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function(e,t,r,n){var i=!r;r||(r={});for(var a=-1,o=t.length;++a<o;){var s=t[a],l=n?n(r[s],e[s],s,r,e):void 0;void 0===l&&(l=e[s]),i?es(r,s,l):/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function(e,t,r){var n=e[t];N.call(e,t)&&ev(n,r)&&(void 0!==r||t in e)||es(e,t,r)}(r,s,l)}return r}(s,eT(s)):(!e_(s)||ek(s))&&(c="function"!=typeof l.constructor||ep(l)?{}:ee(U(l)))):d=!1}d&&(// Recursively merge objects and arrays (susceptible to call stack limits).
o.set(l,c),i(c,l,n,a,o),o.delete(l)),ea(e,r,c)})(t,r,s,n,e,i,a);else{var l=i?i(em(t,s),o,s+"",t,r,a):void 0;void 0===l&&(l=o),ea(t,s,l)}},eT)}(e,t,r,n)},eg((a=f=function(e,t){var r=-1,n=t.length,i=n>1?t[n-1]:void 0,a=n>2?t[2]:void 0;for(i=d.length>3&&"function"==typeof i?(n--,i):void 0,a&&/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function(e,t,r){if(!e_(r))return!1;var n=typeof t;return("number"==n?!!(ew(r)&&eh(t,r.length)):"string"==n&&(t in r))&&ev(r[t],e)}(t[0],t[1],a)&&(i=n<3?void 0:i,n=1),e=Object(e);++r<n;){var o=t[r];o&&d(e,o,r,i)}return e},o=X((o=void 0,a.length-1),0),function(){for(var e=arguments,t=-1,r=X(e.length-o,0),n=Array(r);++t<r;)n[t]=e[o+t];t=-1;for(var i=Array(o+1);++t<o;)i[t]=e[t];return i[o]=eI(n),/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}(a,this,i)}),f+""));/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function eI(e){return e}e.exports=eP}),h.register("8RYFI",function(e,t){n(e.exports,"default",()=>a);var r=h("gvVBt"),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a=(0,r.default)(function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)})}),h.register("gvVBt",function(e,t){n(e.exports,"default",()=>r);var r=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}}),h.register("b8sjQ",function(e,t){!/* UAParser.js v1.0.36
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */function(r,n){var i="function",a="undefined",o="object",s="string",l="major",u="model",c="name",d="type",f="vendor",h="version",p="architecture",m="console",g="mobile",v="tablet",b="smarttv",y="wearable",w="embedded",x="Amazon",k="Apple",S="ASUS",_="BlackBerry",E="Browser",C="Chrome",T="Firefox",P="Google",I="Huawei",A="Microsoft",R="Motorola",O="Opera",M="Samsung",N="Sharp",z="Sony",j="Xiaomi",L="Zebra",D="Facebook",F="Chromium OS",$="Mac OS",B=function(e,t){var r={};for(var n in e)t[n]&&t[n].length%2==0?r[n]=t[n].concat(e[n]):r[n]=e[n];return r},V=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},U=function(e,t){return typeof e===s&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===s)return e=e.replace(/^\s\s*/,""),typeof t===a?e:e.substring(0,350)},q=function(e,t){for(var r,a,s,l,u,c,d=0;d<t.length&&!u;){var f=t[d],h=t[d+1];for(r=a=0;r<f.length&&!u&&f[r];)if(u=f[r++].exec(e))for(s=0;s<h.length;s++)c=u[++a],typeof(l=h[s])===o&&l.length>0?2===l.length?typeof l[1]==i?this[l[0]]=l[1].call(this,c):this[l[0]]=l[1]:3===l.length?typeof l[1]!==i||l[1].exec&&l[1].test?this[l[0]]=c?c.replace(l[1],l[2]):n:this[l[0]]=c?l[1].call(this,c,l[2]):n:4===l.length&&(this[l[0]]=c?l[3].call(this,c.replace(l[1],l[2])):n):this[l]=c||n;d+=2}},G=function(e,t){for(var r in t)if(typeof t[r]===o&&t[r].length>0){for(var i=0;i<t[r].length;i++)if(U(t[r][i],e))return"?"===r?n:r}else if(U(t[r],e))return"?"===r?n:r;return e},Y={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,h],[/opios[\/ ]+([\w\.]+)/i],[h,[c,O+" Mini"]],[/\bopr\/([\w\.]+)/i],[h,[c,O]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[c,h],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[c,"UC"+E]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[h,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[h,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[c,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[h,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure "+E],h],[/\bfocus\/([\w\.]+)/i],[h,[c,T+" Focus"]],[/\bopt\/([\w\.]+)/i],[h,[c,O+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[c,O+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[c,"MIUI "+E]],[/fxios\/([-\w\.]+)/i],[h,[c,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 "+E]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+E],h],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[c,h],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,D],h],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[c,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[c,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[h,[c,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[c,C+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,C+" WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[c,"Android "+E]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[h,G,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[c,T+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[c,h],[/(cobalt)\/([\w\.]+)/i],[c,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,W]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",W]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,W]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[f,M],[d,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[u,[f,M],[d,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[u,[f,k],[d,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[f,k],[d,v]],[/(macintosh);/i],[u,[f,k]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[u,[f,N],[d,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[u,[f,I],[d,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[u,[f,I],[d,g]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[u,/_/g," "],[f,j],[d,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[u,/_/g," "],[f,j],[d,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[u,[f,"OPPO"],[d,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[u,[f,"Vivo"],[d,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[u,[f,"Realme"],[d,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[u,[f,R],[d,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[u,[f,R],[d,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[f,"LG"],[d,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[u,[f,"LG"],[d,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[u,[f,"Lenovo"],[d,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[u,/_/g," "],[f,"Nokia"],[d,g]],[/(pixel c)\b/i],[u,[f,P],[d,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[u,[f,P],[d,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[f,z],[d,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[u,"Xperia Tablet"],[f,z],[d,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[u,[f,"OnePlus"],[d,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[u,[f,x],[d,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[u,/(.+)/g,"Fire Phone $1"],[f,x],[d,g]],[/(playbook);[-\w\),; ]+(rim)/i],[u,f,[d,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[u,[f,_],[d,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[u,[f,S],[d,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[u,[f,S],[d,g]],[/(nexus 9)/i],[u,[f,"HTC"],[d,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[f,[u,/_/g," "],[d,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[u,[f,"Acer"],[d,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[u,[f,"Meizu"],[d,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,u,[d,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,u,[d,v]],[/(surface duo)/i],[u,[f,A],[d,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[u,[f,"Fairphone"],[d,g]],[/(u304aa)/i],[u,[f,"AT&T"],[d,g]],[/\bsie-(\w*)/i],[u,[f,"Siemens"],[d,g]],[/\b(rct\w+) b/i],[u,[f,"RCA"],[d,v]],[/\b(venue[\d ]{2,7}) b/i],[u,[f,"Dell"],[d,v]],[/\b(q(?:mv|ta)\w+) b/i],[u,[f,"Verizon"],[d,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[u,[f,"Barnes & Noble"],[d,v]],[/\b(tm\d{3}\w+) b/i],[u,[f,"NuVision"],[d,v]],[/\b(k88) b/i],[u,[f,"ZTE"],[d,v]],[/\b(nx\d{3}j) b/i],[u,[f,"ZTE"],[d,g]],[/\b(gen\d{3}) b.+49h/i],[u,[f,"Swiss"],[d,g]],[/\b(zur\d{3}) b/i],[u,[f,"Swiss"],[d,v]],[/\b((zeki)?tb.*\b) b/i],[u,[f,"Zeki"],[d,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],u,[d,v]],[/\b(ns-?\w{0,9}) b/i],[u,[f,"Insignia"],[d,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[u,[f,"NextBook"],[d,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],u,[d,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],u,[d,g]],[/\b(ph-1) /i],[u,[f,"Essential"],[d,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[u,[f,"Envizen"],[d,v]],[/\b(trio[-\w\. ]+) b/i],[u,[f,"MachSpeed"],[d,v]],[/\btu_(1491) b/i],[u,[f,"Rotor"],[d,v]],[/(shield[\w ]+) b/i],[u,[f,"Nvidia"],[d,v]],[/(sprint) (\w+)/i],[f,u,[d,g]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[f,A],[d,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[f,L],[d,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[f,L],[d,g]],[/smart-tv.+(samsung)/i],[f,[d,b]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[f,M],[d,b]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,"LG"],[d,b]],[/(apple) ?tv/i],[f,[u,k+" TV"],[d,b]],[/crkey/i],[[u,C+"cast"],[f,P],[d,b]],[/droid.+aft(\w+)( bui|\))/i],[u,[f,x],[d,b]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[u,[f,N],[d,b]],[/(bravia[\w ]+)( bui|\))/i],[u,[f,z],[d,b]],[/(mitv-\w{5}) bui/i],[u,[f,j],[d,b]],[/Hbbtv.*(technisat) (.*);/i],[f,u,[d,b]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[f,H],[u,H],[d,b]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,b]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,u,[d,m]],[/droid.+; (shield) bui/i],[u,[f,"Nvidia"],[d,m]],[/(playstation [345portablevi]+)/i],[u,[f,z],[d,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[u,[f,A],[d,m]],[/((pebble))app/i],[f,u,[d,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[u,[f,k],[d,y]],[/droid.+; (glass) \d/i],[u,[f,P],[d,y]],[/droid.+; (wt63?0{2,3})\)/i],[u,[f,L],[d,y]],[/(quest( 2| pro)?)/i],[u,[f,D],[d,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[d,w]],[/(aeobc)\b/i],[u,[f,x],[d,w]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[u,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[u,[d,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,g]],[/(android[-\w\. ]{0,9});.+buil/i],[u,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[c,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,h],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[c,[h,G,Y]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[c,"Windows"],[h,G,Y]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,$],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,h],[/\(bb(10);/i],[h,[c,_]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[c,T+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[c,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[h,[c,"watchOS"]],[/crkey\/([\d\.]+)/i],[h,[c,C+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[c,F],h],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,h],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[c,h]]},X=function(e,t){if(typeof e===o&&(t=e,e=n),!(this instanceof X))return new X(e,t).getResult();var m=typeof r!==a&&r.navigator?r.navigator:n,b=e||(m&&m.userAgent?m.userAgent:""),y=m&&m.userAgentData?m.userAgentData:n,w=t?B(K,t):K,x=m&&m.userAgent==b;return this.getBrowser=function(){var e,t={};return t[c]=n,t[h]=n,q.call(t,b,w.browser),t[l]=typeof(e=t[h])===s?e.replace(/[^\d\.]/g,"").split(".")[0]:n,x&&m&&m.brave&&typeof m.brave.isBrave==i&&(t[c]="Brave"),t},this.getCPU=function(){var e={};return e[p]=n,q.call(e,b,w.cpu),e},this.getDevice=function(){var e={};return e[f]=n,e[u]=n,e[d]=n,q.call(e,b,w.device),x&&!e[d]&&y&&y.mobile&&(e[d]=g),x&&"Macintosh"==e[u]&&m&&typeof m.standalone!==a&&m.maxTouchPoints&&m.maxTouchPoints>2&&(e[u]="iPad",e[d]=v),e},this.getEngine=function(){var e={};return e[c]=n,e[h]=n,q.call(e,b,w.engine),e},this.getOS=function(){var e={};return e[c]=n,e[h]=n,q.call(e,b,w.os),x&&!e[c]&&y&&"Unknown"!=y.platform&&(e[c]=y.platform.replace(/chrome os/i,F).replace(/macos/i,$)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return b},this.setUA=function(e){return b=typeof e===s&&e.length>350?H(e,350):e,this},this.setUA(b),this};X.VERSION="1.0.36",X.BROWSER=V([c,h,l]),X.CPU=V([p]),X.DEVICE=V([u,f,d,m,g,b,v,y,w]),X.ENGINE=X.OS=V([c,h]),e.exports&&(t=e.exports=X),t.UAParser=X;var Q=typeof r!==a&&(r.jQuery||r.Zepto);if(Q&&!Q.ua){var J=new X;Q.ua=J.getResult(),Q.ua.get=function(){return J.getUA()},Q.ua.set=function(e){J.setUA(e);var t=J.getResult();for(var r in t)Q.ua[r]=t[r]}}}("object"==typeof window?window:this)});var p={};p=h("1b2ls");var m={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),mG=(m=h("Xw6Mv")).createRoot,m.hydrateRoot;var g={};g=JSON.parse('{"status":"success","result":{"fileName":"google-config.js","fileContents":"// Copy and paste this into your JavaScript code to initialize the Firebase SDK.\\n// You will also need to load the Firebase SDK.\\n// See https://firebase.google.com/docs/web/setup for more details.\\n\\nfirebase.initializeApp({\\n  \\"projectId\\": \\"simple-budget-c19f0\\",\\n  \\"appId\\": \\"1:937980401438:web:566e652a351c8391b15b0f\\",\\n  \\"storageBucket\\": \\"simple-budget-c19f0.appspot.com\\",\\n  \\"apiKey\\": \\"AIzaSyAKpcBSHSmdwRfSe0onjn8LU4lkhQCwiJA\\",\\n  \\"authDomain\\": \\"simple-budget-c19f0.firebaseapp.com\\",\\n  \\"messagingSenderId\\": \\"937980401438\\",\\n  \\"measurementId\\": \\"G-F8HDJN43JP\\"\\n});\\n","sdkConfig":{"projectId":"simple-budget-c19f0","appId":"1:937980401438:web:566e652a351c8391b15b0f","storageBucket":"simple-budget-c19f0.appspot.com","apiKey":"AIzaSyAKpcBSHSmdwRfSe0onjn8LU4lkhQCwiJA","authDomain":"simple-budget-c19f0.firebaseapp.com","messagingSenderId":"937980401438","measurementId":"G-F8HDJN43JP"}}}');/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */var v={},b=v={};function y(){throw Error("setTimeout has not been defined")}function w(){throw Error("clearTimeout has not been defined")}function x(e){if(mY===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((mY===y||!mY)&&setTimeout)return mY=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return mY(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return mY.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return mY.call(this,e,0)}}}!function(){try{mY="function"==typeof setTimeout?setTimeout:y}catch(e){mY=y}try{mK="function"==typeof clearTimeout?clearTimeout:w}catch(e){mK=w}}();var k=[],S=!1,_=-1;function E(){S&&mX&&(S=!1,mX.length?k=mX.concat(k):_=-1,k.length&&C())}function C(){if(!S){var e=x(E);S=!0;for(var t=k.length;t;){for(mX=k,k=[];++_<t;)mX&&mX[_].run();_=-1,t=k.length}mX=null,S=!1,function(e){if(mK===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((mK===w||!mK)&&clearTimeout)return mK=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
mK(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return mK.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return mK.call(this,e)}}}(e)}}// v8 likes predictible objects
function T(e,t){this.fun=e,this.array=t}function P(){}b.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];k.push(new T(e,t)),1!==k.length||S||x(C)},T.prototype.run=function(){this.fun.apply(null,this.array)},b.title="browser",b.browser=!0,b.env={},b.argv=[],b.version="",b.versions={},b.on=P,b.addListener=P,b.once=P,b.off=P,b.removeListener=P,b.removeAllListeners=P,b.emit=P,b.prependListener=P,b.prependOnceListener=P,b.listeners=function(e){return[]},b.binding=function(e){throw Error("process.binding is not supported")},b.cwd=function(){return"/"},b.chdir=function(e){throw Error("process.chdir is not supported")},b.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(e){// TODO(user): Use native implementations if/when available
let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(// Surrogate Pair
i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},A=function(e){// TODO(user): Use native implementations if/when available
let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){// Surrogate Pair
let a=e[r++],o=e[r++],s=e[r++],l=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&s)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let a=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},R={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4,d=(15&o)<<2|l>>6,f=63&l;s||(f=64,a||(d=64)),n.push(r[u],r[c],r[d],r[f])}return n.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(I(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):A(this.decodeStringToByteArray(e,t)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],a=t<e.length,o=a?r[e.charAt(t)]:0;++t;let s=t<e.length,l=s?r[e.charAt(t)]:64;++t;let u=t<e.length,c=u?r[e.charAt(t)]:64;if(++t,null==i||null==o||null==l||null==c)throw new O;let d=i<<2|o>>4;if(n.push(d),64!==l){let e=o<<4&240|l>>2;if(n.push(e),64!==c){let e=l<<6&192|c;n.push(e)}}}return n},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class O extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const M=function(e){let t=I(e);return R.encodeByteArray(t,!0)},N=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return M(e).replace(/\./g,"")},z=function(e){try{return R.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},j=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==u)return u;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,L=()=>{if(void 0===v||void 0===v.env)return;let e=void 0;if(e)return JSON.parse(e)},D=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&z(e[1]);return t&&JSON.parse(t)},F=()=>{try{return j()||L()||D()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$=e=>{var t,r;return null===(r=null===(t=F())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},B=()=>{var e;return null===(e=F())||void 0===e?void 0:e.config},V=e=>{var t;return null===(t=F())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */function W(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class H extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */r){super(t),this.code=e,this.customData=r,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,H.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,q.prototype.create)}}class q{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(G,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${n}).`,s=new H(n,o,r);return s}}const G=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function Y(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],a=t[i];if(K(r)&&K(a)){if(!Y(r,a))return!1}else if(r!==a)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function K(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */function X(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function Q(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function J(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class Z{/**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,// Micro-task scheduling by calling task.then().
this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,// Call the executor asynchronously so subscribers that are called
// synchronously after the creation of the subscribe function
// can still receive the very first value generated in the executor.
this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}/**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!/**
 * Return true if the object passed in implements any of the named methods.
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=ee),void 0===n.error&&(n.error=ee),void 0===n.complete&&(n.complete=ee);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){// nothing
}}),this.observers.push(n),i}// Unsubscribe is synchronous - we guarantee that no events are sent to
// any unsubscribed Observer.
unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)// Since sendOne calls asynchronously - there is no chance that
// this.observers will become undefined.
for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}// Call the Observer via one of it's callback function. We are careful to
// confirm that the observe has not been unsubscribed since this asynchronous
// function had been queued.
sendOne(e,t){// Execute the callback asynchronously
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){// Ignore exceptions raised in Observers or missing methods of an
// Observer.
// Log error to console. b/31404806
"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),// Proxy is no longer needed - garbage collect references
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ee(){// do nothing
}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class er{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class ei{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new U;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:en})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===en?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return r||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class ea{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new ei(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A container for all of the Logger instances
 */const eo=[];(mW=mQ||(mQ={}))[mW.DEBUG=0]="DEBUG",mW[mW.VERBOSE=1]="VERBOSE",mW[mW.INFO=2]="INFO",mW[mW.WARN=3]="WARN",mW[mW.ERROR=4]="ERROR",mW[mW.SILENT=5]="SILENT";const es={debug:mQ.DEBUG,verbose:mQ.VERBOSE,info:mQ.INFO,warn:mQ.WARN,error:mQ.ERROR,silent:mQ.SILENT},el=mQ.INFO,eu={[mQ.DEBUG]:"log",[mQ.VERBOSE]:"log",[mQ.INFO]:"info",[mQ.WARN]:"warn",[mQ.ERROR]:"error"},ec=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=eu[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ed{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=el,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=ec,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */eo.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in mQ))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?es[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,mQ.DEBUG,...e),this._logHandler(this,mQ.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,mQ.VERBOSE,...e),this._logHandler(this,mQ.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,mQ.INFO,...e),this._logHandler(this,mQ.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,mQ.WARN,...e),this._logHandler(this,mQ.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,mQ.ERROR,...e),this._logHandler(this,mQ.ERROR,...e)}}const ef=(e,t)=>t.some(t=>e instanceof t),eh=new WeakMap,ep=new WeakMap,em=new WeakMap,eg=new WeakMap,ev=new WeakMap;let eb={get(e,t,r){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return ep.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||em.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}// Else transform whatever we get back.
return ey(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ey(r){var n;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(r instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(ey(e.result)),n()},a=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{// Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
// (see wrapFunction).
t instanceof IDBCursor&&eh.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
ev.set(t,e),t}(r);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(eg.has(r))return eg.get(r);let i="function"==typeof(n=r)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
n.apply(ew(this),e),ey(eh.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return ey(n.apply(ew(this),e))}:function(e,...t){let r=n.call(ew(this),e,...t);return em.set(r,e.sort?e.sort():[e]),ey(r)}:(n instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(ep.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),n()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});// Cache it for later retrieval.
ep.set(e,t)}(n),ef(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,eb):n;return i!==r&&(eg.set(r,i),ev.set(i,r)),i}const ew=e=>ev.get(e),ex=["get","getKey","getAll","getAllKeys","count"],ek=["put","add","delete","clear"],eS=new Map;function e_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eS.get(t))return eS.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=ek.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||ex.includes(r)))return;let a=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&a.done]))[0]};return eS.set(t,a),a}eb={...mU=eb,get:(e,t,r)=>e_(e,t)||mU.get(e,t,r),has:(e,t)=>!!e_(e,t)||mU.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eC="@firebase/app",eT="0.9.19",eP=new ed("@firebase/app"),eI="[DEFAULT]",eA={[eC]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eR=new Map,eO=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function eM(e){let t=e.name;if(eO.has(t))return eP.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let r of(eO.set(t,e),eR.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(r){eP.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function eN(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}const ez=new q("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw ez.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The current SDK version.
 *
 * @public
 */const eL="10.4.0";function eD(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:eI,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw ez.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(i)});if(r||(r=B()),!r)throw ez.create("no-options"/* AppError.NO_OPTIONS */);let a=eR.get(i);if(a){// return the existing app if options and config deep equal the ones in the existing app.
if(Y(r,a.options)&&Y(n,a.config))return a;throw ez.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:i})}let o=new ea(i);for(let e of eO.values())o.addComponent(e);let s=new ej(r,n,o);return eR.set(i,s),s}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function eF(e,t,r){var n;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let i=null!==(n=eA[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${i}" with version "${t}":`];a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eP.warn(e.join(" "));return}eM(new er(`${i}-version`,()=>({library:i,version:t}),"VERSION"/* ComponentType.VERSION */))}const e$="firebase-heartbeat-store";let eB=null;function eV(){return eB||(eB=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let o=indexedDB.open(e,1),s=ey(o);return n&&o.addEventListener("upgradeneeded",e=>{n(ey(o.result),e.oldVersion,e.newVersion,ey(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{// We don't use 'break' in this switch statement, the fall-through
// behavior is what we want, because if there are multiple versions between
// the old version and the current version, we want ALL the migrations
// that correspond to those versions to run, not only the last one.
// eslint-disable-next-line default-case
0===t&&e.createObjectStore(e$)}}).catch(e=>{throw ez.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),eB}async function eU(e){try{let t=await eV(),r=await t.transaction(e$).objectStore(e$).get(eH(e));return r}catch(e){if(e instanceof H)eP.warn(e.message);else{let t=ez.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});eP.warn(t.message)}}}async function eW(e,t){try{let r=await eV(),n=r.transaction(e$,"readwrite"),i=n.objectStore(e$);await i.put(t,eH(e)),await n.done}catch(e){if(e instanceof H)eP.warn(e.message);else{let t=ez.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});eP.warn(t.message)}}}function eH(e){return`${e.name}!${e.options.appId}`}class eq{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eY(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=eG();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eG(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let r=[],n=e.slice();for(let i of e){// Look for an existing entry with the same user agent.
let e=r.find(e=>e.agent===i.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(i.date),eK(r)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
r.push({agent:i.agent,dates:[i.date]}),eK(r)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
r.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=N(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=r,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n)}}function eG(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class eY{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await eU(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return eW(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return eW(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function eK(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return N(JSON.stringify({version:2,heartbeats:e})).length}eM(new er("platform-logger",e=>new eE(e),"PRIVATE"/* ComponentType.PRIVATE */)),eM(new er("heartbeat",e=>new eq(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
eF(eC,eT,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
eF(eC,eT,"esm2017"),// Register platform SDK identifier (no version).
eF("fire-js",""),eF("firebase","10.4.0","app");var eX=h("acw62"),eQ=/*#__PURE__*/function(){// Using Node instead of HTMLElement since container may be a ShadowRoot
function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){// the max length is how many rules we have per style tag, it's 65000 in speedy mode
// it's 1 in dev because we insert source maps that map a single rule to a location
// and you can only have one source map per style tag
if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/// $FlowFixMe
function(e){if(e.sheet)return e.sheet;// this weirdness brought to you by firefox
/* istanbul ignore next */for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{// this is the ultrafast version, works across browsers
// the big drawback is that the css won't be editable in devtools
n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){// $FlowFixMe
this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),eJ="-ms-",eZ="-moz-",e0="-webkit-",e1="comm",e2="rule",e5="decl",e3="@keyframes",e4=Math.abs,e6=String.fromCharCode,e8=Object.assign;function e9(e,t,r){return e.replace(t,r)}function e7(e,t){return e.indexOf(t)}function te(e,t){return 0|e.charCodeAt(t)}function tt(e,t,r){return e.slice(t,r)}function tr(e){return e.length}function tn(e,t){return t.push(e),e}var ti=1,ta=1,to=0,ts=0,tl=0,tu="";function tc(e,t,r,n,i,a,o){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:ti,column:ta,length:o,return:""}}function td(e,t){return e8(tc("",null,null,"",null,null,0),e,{length:-e.length},t)}function tf(){return tl=ts<to?te(tu,ts++):0,ta++,10===tl&&(ta=1,ti++),tl}function th(){return te(tu,ts)}function tp(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tm(e){return ti=ta=1,to=tr(tu=e),ts=0,[]}function tg(e){var t,r;return(t=ts-1,r=function e(t){for(;tf();)switch(tl){case t:return ts;case 34:case 39:34!==t&&39!==t&&e(tl);break;case 40:41===t&&e(t);break;case 92:tf()}return ts}(91===e?e+2:40===e?e+1:e),tt(tu,t,r)).trim()}function tv(e,t,r,n,i,a,o,s,l,u,c){for(var d=i-1,f=0===i?a:[""],h=f.length,p=0,m=0,g=0;p<n;++p)for(var v=0,b=tt(e,d+1,d=e4(m=o[p])),y=e;v<h;++v)(y=(m>0?f[v]+" "+b:e9(b,/&\f/g,f[v])).trim())&&(l[g++]=y);return tc(e,t,r,0===i?e2:s,l,u,c)}function tb(e,t,r,n){return tc(e,t,r,e5,tt(e,0,n),tt(e,n+1,-1),n)}function ty(e,t){for(var r="",n=e.length,i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function tw(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case e5:return e.return=e.return||e.value;case e1:return"";case e3:return e.return=e.value+"{"+ty(e.children,n)+"}";case e2:e.value=e.props.join(",")}return tr(r=ty(e.children,n))?e.return=e.value+"{"+r+"}":""}var tx=function(e){// $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}};function tk(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var tS=function(e,t,r){for(var n=0,i=0;n=i,i=th(),38===n&&12===i&&(t[r]=1),!tp(i);)tf();return tt(tu,e,ts)},t_=function(e,t){// pretend we've started with a comma
var r=-1,n=44;do switch(tp(n)){case 0:38===n&&12===th()&&// stylis inserts \f after & to know when & where it should replace this sequence with the context selector
// and when it should just concatenate the outer and inner selectors
// it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
(t[r]=1),e[r]+=tS(ts-1,t,r);break;case 2:e[r]+=tg(n);break;case 4:// comma
if(44===n){// colon
e[++r]=58===th()?"&\f":"",t[r]=e[r].length;break}// fallthrough
default:e[r]+=e6(n)}while(n=tf())return e},tE=function(e,t){var r;return r=t_(tm(e),t),tu="",r},tC=/* #__PURE__ */new WeakMap,tT=function(e){if("rule"===e.type&&e.parent&&!// positive .length indicates that this rule contains pseudo
// negative .length indicates that this rule has been already prefixed
(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;// short-circuit for the simplest case
if((1!==e.props.length||58===t.charCodeAt(0)||tC.get(r))&&!n){tC.set(e,!0);for(var i=[],a=tE(t,i),o=r.props,s=0,l=0;s<a.length;s++)for(var u=0;u<o.length;u++,l++)e.props[l]=i[s]?a[s].replace(/&\f/g,o[u]):o[u]+" "+a[s]}}},tP=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&// charcode for b
98===t.charCodeAt(2)&&(// this ignores label
e.return="",e.value="")}},tI=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case e5:e.return=/* eslint-disable no-fallthrough */function e(t,r){switch(45^te(t,0)?(((r<<2^te(t,0))<<2^te(t,1))<<2^te(t,2))<<2^te(t,3):0){// color-adjust
case 5103:return e0+"print-"+t+t;// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return e0+t+t;// appearance, user-select, transform, hyphens, text-size-adjust
case 5349:case 4246:case 4810:case 6968:case 2756:return e0+t+eZ+t+eJ+t+t;// flex, flex-direction
case 6828:case 4268:return e0+t+eJ+t+t;// order
case 6165:return e0+t+eJ+"flex-"+t+t;// align-items
case 5187:return e0+t+e9(t,/(\w+).+(:[^]+)/,e0+"box-$1$2"+eJ+"flex-$1$2")+t;// align-self
case 5443:return e0+t+eJ+"flex-item-"+e9(t,/flex-|-self/,"")+t;// align-content
case 4675:return e0+t+eJ+"flex-line-pack"+e9(t,/align-content|flex-|-self/,"")+t;// flex-shrink
case 5548:return e0+t+eJ+e9(t,"shrink","negative")+t;// flex-basis
case 5292:return e0+t+eJ+e9(t,"basis","preferred-size")+t;// flex-grow
case 6060:return e0+"box-"+e9(t,"-grow","")+e0+t+eJ+e9(t,"grow","positive")+t;// transition
case 4554:return e0+e9(t,/([^-])(transform)/g,"$1"+e0+"$2")+t;// cursor
case 6187:return e9(e9(e9(t,/(zoom-|grab)/,e0+"$1"),/(image-set)/,e0+"$1"),t,"")+t;// background, background-image
case 5495:case 3959:return e9(t,/(image-set\([^]*)/,e0+"$1$`$1");// justify-content
case 4968:return e9(e9(t,/(.+:)(flex-)?(.*)/,e0+"box-pack:$3"+eJ+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+e0+t+t;// (margin|padding)-inline-(start|end)
case 4095:case 3583:case 4068:case 2532:return e9(t,/(.+)-inline(.+)/,e0+"$1$2")+t;// (min|max)?(width|height|inline-size|block-size)
case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:// stretch, max-content, min-content, fill-available
if(tr(t)-1-r>6)switch(te(t,r+1)){// (m)ax-content, (m)in-content
case 109:// -
if(45!==te(t,r+4))break;// (f)ill-available, (f)it-content
case 102:return e9(t,/(.+:)(.+)-([^]+)/,"$1"+e0+"$2-$3$1"+eZ+(108==te(t,r+3)?"$3":"$2-$3"))+t;// (s)tretch
case 115:return~e7(t,"stretch")?e(e9(t,"stretch","fill-available"),r)+t:t}break;// position: sticky
case 4949:// (s)ticky?
if(115!==te(t,r+1))break;// display: (flex|inline-flex)
case 6444:switch(te(t,tr(t)-3-(~e7(t,"!important")&&10))){// stic(k)y
case 107:return e9(t,":",":"+e0)+t;// (inline-)?fl(e)x
case 101:return e9(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+e0+(45===te(t,14)?"inline-":"")+"box$3$1"+e0+"$2$3$1"+eJ+"$2box$3")+t}break;// writing-mode
case 5936:switch(te(t,r+11)){// vertical-l(r)
case 114:return e0+t+eJ+e9(t,/[svh]\w+-[tblr]{2}/,"tb")+t;// vertical-r(l)
case 108:return e0+t+eJ+e9(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;// horizontal(-)tb
case 45:return e0+t+eJ+e9(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return e0+t+eJ+t+t}return t}(e.value,e.length);break;case e3:return ty([td(e,{value:e9(e.value,"@","@"+e0)})],n);case e2:if(e.length)return e.props.map(function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){// :read-(only|write)
case":read-only":case":read-write":return ty([td(e,{props:[e9(t,/:(read-\w+)/,":"+eZ+"$1")]})],n);// :placeholder
case"::placeholder":return ty([td(e,{props:[e9(t,/:(plac\w+)/,":"+e0+"input-$1")]}),td(e,{props:[e9(t,/:(plac\w+)/,":"+eZ+"$1")]}),td(e,{props:[e9(t,/:(plac\w+)/,eJ+"input-$1")]})],n)}return""}).join("")}}];function tA(){return(tA=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var tR={};tR=h("9cCWX");/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var tO={};tO[tR.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tO[tR.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var tM=function(e,t,r){var n=e.key+"-"+t.name;!1===// the tree but if it's a string tag, we know it won't
// so we don't have to add it to registered cache.
// this improves memory usage since we can avoid storing the whole style string
r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},tN=function(e,t,r){tM(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do e.insert(t===i?"."+n:"",i,e.sheet,!0),i=i.next;while(void 0!==i)}},tz={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tj=/[A-Z]|^ms/g,tL=/_EMO_([^_]+?)_([^]*?)_EMO_/g,tD=function(e){return 45===e.charCodeAt(1)},tF=function(e){return null!=e&&"boolean"!=typeof e},t$=tk(function(e){return tD(e)?e:e.replace(tj,"-$&").toLowerCase()}),tB=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(tL,function(e,t,r){return mJ={name:t,styles:r,next:mJ},t})}return 1===tz[e]||tD(e)||"number"!=typeof t||0===t?t:t+"px"};function tV(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return mJ={name:r.name,styles:r.styles,next:mJ},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)// and there will be very few iterations of this generally
for(;void 0!==n;)mJ={name:n.name,styles:n.styles,next:mJ},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=tV(e,t,r[i])+";";else for(var a in r){var o=r[a];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=a+"{"+t[o]+"}":tF(o)&&(n+=t$(a)+":"+tB(a,o)+";");else if(Array.isArray(o)&&"string"==typeof o[0]&&(null==t||void 0===t[o[0]]))for(var s=0;s<o.length;s++)tF(o[s])&&(n+=t$(a)+":"+tB(a,o[s])+";");else{var l=tV(e,t,o);switch(a){case"animation":case"animationName":n+=t$(a)+":"+l+";";break;default:n+=a+"{"+l+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var i=mJ,a=r(e);return mJ=i,tV(e,t,a)}}// finalize string values (regular strings and functions interpolated into css calls)
if(null==t)return r;var o=t[r];return void 0!==o?o:r}var tU=/label:\s*([^\s;\n{]+)\s*(;|$)/g,tW=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n,i=!0,a="";mJ=void 0;var o=e[0];null==o||void 0===o.raw?(i=!1,a+=tV(r,t,o)):a+=o[0];// we start at 1 since we've already handled the first arg
for(var s=1;s<e.length;s++)a+=tV(r,t,e[s]),i&&(a+=o[s]);tU.lastIndex=0;for(var l="";null!==(n=tU.exec(a));)l+="-"+// $FlowFixMe we know it's not null
n[1];return{name:/* eslint-disable */// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function(e){for(// 'm' and 'r' are mixing constants generated offline.
// They're not really 'magic', they just happen to work well.
// const m = 0x5bd1e995;
// const r = 24;
// Initialize the hash
var t,r=0,n=0,i=e.length;i>=4;++n,i-=4)t=/* Math.imul(k, m): */(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=/* k >>> r: */t>>>24,r=/* Math.imul(k, m): */(65535&t)*1540483477+((t>>>16)*59797<<16)^/* Math.imul(h, m): */(65535&r)*1540483477+((r>>>16)*59797<<16);// Handle the last few bytes of the input array
switch(i){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=/* Math.imul(h, m): */(65535&r)*1540483477+((r>>>16)*59797<<16)}// Do a few final mixes of the hash to ensure the last few
return(// bytes are well-incorporated.
r^=r>>>13,(((r=/* Math.imul(h, m): */(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36))}(a)+l,styles:a,next:mJ}},eX=h("acw62"),tH=!!eX.useInsertionEffect&&eX.useInsertionEffect,tq=tH||function(e){return e()},tG=tH||eX.useLayoutEffect,tY=/* #__PURE__ */eX.createContext(// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
"undefined"!=typeof HTMLElement?function(e){var t,r,n,i,a,o=e.key;if("css"===o){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");// get SSRed styles out of the way of React's hydration
// document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
// note this very very intentionally targets all style elements regardless of the key to ensure
// that creating a cache works inside of render of a React component
Array.prototype.forEach.call(s,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var l=e.stylisPlugins||tI,u={},c=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)u[t[r]]=!0;c.push(e)});var d=(r=(t=[tT,tP].concat(l,[tw,(n=function(e){a.insert(e)},function(e){!e.root&&(e=e.return)&&n(e)})])).length,function(e,n,i,a){for(var o="",s=0;s<r;s++)o+=t[s](e,n,i,a)||"";return o}),f=function(e){var t,r;return ty((r=function e(t,r,n,i,a,o,s,l,u){for(var c,d=0,f=0,h=s,p=0,m=0,g=0,v=1,b=1,y=1,w=0,x="",k=a,S=o,_=i,E=x;b;)switch(g=w,w=tf()){case 40:if(108!=g&&58==te(E,h-1)){-1!=e7(E+=e9(tg(w),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:E+=tg(w);break;case 9:case 10:case 13:case 32:E+=function(e){for(;tl=th();)if(tl<33)tf();else break;return tp(e)>2||tp(tl)>3?"":" "}(g);break;case 92:E+=function(e,t){for(var r;--t&&tf()&&!(tl<48)&&!(tl>102)&&(!(tl>57)||!(tl<65))&&(!(tl>70)||!(tl<97)););return r=ts+(t<6&&32==th()&&32==tf()),tt(tu,e,r)}(ts-1,7);continue;case 47:switch(th()){case 42:case 47:tn(tc(c=function(e,t){for(;tf();)if(e+tl===57)break;else if(e+tl===84&&47===th())break;return"/*"+tt(tu,t,ts-1)+"*"+e6(47===e?e:tf())}(tf(),ts),r,n,e1,e6(tl),tt(c,2,-2),0),u);break;default:E+="/"}break;case 123*v:l[d++]=tr(E)*y;case 125*v:case 59:case 0:switch(w){case 0:case 125:b=0;case 59+f:-1==y&&(E=e9(E,/\f/g,"")),m>0&&tr(E)-h&&tn(m>32?tb(E+";",i,n,h-1):tb(e9(E," ","")+";",i,n,h-2),u);break;case 59:E+=";";default:if(tn(_=tv(E,r,n,d,f,a,l,x,k=[],S=[],h),o),123===w){if(0===f)e(E,r,_,_,k,o,h,l,S);else switch(99===p&&110===te(E,3)?100:p){case 100:case 108:case 109:case 115:e(t,_,_,i&&tn(tv(t,_,_,0,0,a,l,x,a,k=[],h),S),a,S,h,l,i?k:S);break;default:e(E,_,_,_,[""],S,0,l,S)}}}d=f=m=0,v=y=1,x=E="",h=s;break;case 58:h=1+tr(E),m=g;default:if(v<1){if(123==w)--v;else if(125==w&&0==v++&&125==(tl=ts>0?te(tu,--ts):0,ta--,10===tl&&(ta=1,ti--),tl))continue}switch(E+=e6(w),w*v){case 38:y=f>0?1:(E+="\f",-1);break;case 44:l[d++]=(tr(E)-1)*y,y=1;break;case 64:45===th()&&(E+=tg(tf())),p=th(),f=h=tr(x=E+=function(e){for(;!tp(th());)tf();return tt(tu,e,ts)}(ts)),w++;break;case 45:45===g&&2==tr(E)&&(v=0)}}return o}("",null,null,null,[""],t=tm(t=e),0,[0],t),tu="",r),d)},h={key:o,sheet:new eQ({key:o,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:u,registered:{},insert:function(e,t,r,n){a=r,f(e?e+"{"+t.styles+"}":t.styles),n&&(h.inserted[t.name]=!0)}};return h.sheet.hydrate(c),h}({key:"css"}):null);tY.Provider;var tK=function(e){// $FlowFixMe
return/*#__PURE__*/(0,eX.forwardRef)(function(t,r){return e(t,(0,eX.useContext)(tY),r)})},tX=/* #__PURE__ */eX.createContext({}),tQ=tx(function(e){return tx(function(t){return"function"==typeof t?t(e):tA({},e,t)})}),tJ=function(e){var t=eX.useContext(tX);return e.theme!==t&&(t=tQ(t)(e.theme)),/*#__PURE__*/eX.createElement(tX.Provider,{value:t},e.children)},eX=h("acw62"),tZ={};function t0(){return(tZ=t0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).__esModule=!0,tZ.default=tZ,t0.apply(this,arguments)}(tZ=t0).__esModule=!0,tZ.default=tZ;// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var t1=tK(function(e,t){var r=tW([e.styles],void 0,eX.useContext(tX)),n=eX.useRef();return tG(function(){var e=t.key+"-global",i=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,o=document.querySelector('style[data-emotion="'+e+" "+r.name+'"]');// use case of https://github.com/emotion-js/emotion/issues/2675
return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),null!==o&&(a=!0,o.setAttribute("data-emotion",e),i.hydrate([o])),n.current=[i,a],function(){i.flush()}},[t]),tG(function(){var e=n.current,i=e[0];if(e[1]){e[1]=!1;return}if(void 0!==r.next&&tN(t,r.next,!0),i.tags.length){// if this doesn't exist then it will be null so the style element will be appended
var a=i.tags[i.tags.length-1].nextElementSibling;i.before=a,i.flush()}t.insert("",r,i,!1)},[t,r.name]),null});function t2(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return tW(t)}var t5=function(){var e=t2.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},t3=String.raw,t4=t3`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,t6=()=>/* @__PURE__ */(0,p.jsx)(t1,{styles:t4}),t8=({scope:e=""})=>/* @__PURE__ */(0,p.jsx)(t1,{styles:t3`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${t4}
    `}),eX=h("acw62");function t9(e={}){let{name:t,strict:r=!0,hookName:n="useContext",providerName:i="Provider",errorMessage:a,defaultValue:o}=e,s=(0,eX.createContext)(o);return s.displayName=t,[s.Provider,function e(){var t;let o=(0,eX.useContext)(s);if(!o&&r){let r=Error(null!=a?a:`${n} returned \`undefined\`. Seems you forgot to wrap component within ${i}`);throw r.name="ContextError",null==(t=Error.captureStackTrace)||t.call(Error,r,e),r}return o},s]}var[t7,re]=t9({strict:!1,name:"PortalManagerContext"});function rt(e){let{children:t,zIndex:r}=e;return/* @__PURE__ */(0,p.jsx)(t7,{value:{zIndex:r},children:t})}rt.displayName="PortalManager";var eX=h("acw62"),rr=(0,eX.createContext)({});function rn(){let e=(0,eX.useContext)(rr);if(void 0===e)throw Error("useColorMode must be used within a ColorModeProvider");return e}rr.displayName="ColorModeContext";// src/color-mode.utils.ts
var ri={light:"chakra-ui-light",dark:"chakra-ui-dark"},ra="chakra-ui-color-mode",ro={ssr:!1,type:"localStorage",get(e){let t;if(!(null==globalThis?void 0:globalThis.document))return e;try{t=localStorage.getItem(ra)||e}catch(e){}return t||e},set(e){try{localStorage.setItem(ra,e)}catch(e){}}},eX=h("acw62"),rs=(null==globalThis?void 0:globalThis.document)?eX.useLayoutEffect:eX.useEffect,eX=h("acw62"),rl=()=>{};function ru(e,t){return"cookie"===e.type&&e.ssr?e.get(t):t}function rc(e){let{value:t,children:r,options:{useSystemColorMode:n,initialColorMode:i,disableTransitionOnChange:a}={},colorModeManager:o=ro}=e,s="dark"===i?"dark":"light",[l,u]=(0,eX.useState)(()=>ru(o,s)),[c,d]=(0,eX.useState)(()=>ru(o)),{getSystemTheme:f,setClassName:h,setDataset:m,addListener:g}=(0,eX.useMemo)(()=>(function(e={}){let{preventTransition:t=!0}=e,r={setDataset:e=>{let n=t?r.preventTransition():void 0;document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e,null==n||n()},setClassName(e){document.body.classList.add(e?ri.dark:ri.light),document.body.classList.remove(e?ri.light:ri.dark)},query:()=>window.matchMedia("(prefers-color-scheme: dark)"),getSystemTheme(e){var t;let n=null!=(t=r.query().matches)?t:"dark"===e;return n?"dark":"light"},addListener(e){let t=r.query(),n=t=>{e(t.matches?"dark":"light")};return"function"==typeof t.addListener?t.addListener(n):t.addEventListener("change",n),()=>{"function"==typeof t.removeListener?t.removeListener(n):t.removeEventListener("change",n)}},preventTransition(){let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(e)})})}}};return r})({preventTransition:a}),[a]),v="system"!==i||l?l:c,b=(0,eX.useCallback)(e=>{let t="system"===e?f():e;u(t),h("dark"===t),m(t),o.set(t)},[o,f,h,m]);rs(()=>{"system"===i&&d(f())},[]),(0,eX.useEffect)(()=>{let e=o.get();if(e){b(e);return}if("system"===i){b("system");return}b(s)},[o,s,i,b]);let y=(0,eX.useCallback)(()=>{b("dark"===v?"light":"dark")},[v,b]);(0,eX.useEffect)(()=>{if(n)return g(b)},[n,g,b]);let w=(0,eX.useMemo)(()=>({colorMode:null!=t?t:v,toggleColorMode:t?rl:y,setColorMode:t?rl:b,forced:void 0!==t}),[v,y,b,t]);return/* @__PURE__ */(0,p.jsx)(rr.Provider,{value:w,children:r})}rc.displayName="ColorModeProvider";// src/context.ts
var eX=h("acw62"),rd=(...e)=>e.filter(Boolean).join(" ");function rf(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}function rh(e,...t){return rp(e)?e(...t):e}var rp=e=>"function"==typeof e,rm=e=>e?"":void 0,rg=e=>!!e||void 0;function rv(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var rb=h("5Gn6I"),ry=e=>/!(important)?$/.test(e),rw=e=>"string"==typeof e?e.replace(/!(important)?$/,"").trim():e,rx=(e,t)=>r=>{let n=String(t),i=ry(n),a=rw(n),o=e?`${e}.${a}`:a,s=rf(r.__cssMap)&&o in r.__cssMap?r.__cssMap[o].varRef:t;return s=rw(s),i?`${s} !important`:s};function rk(e){let{scale:t,transform:r,compose:n}=e;return(e,i)=>{var a;let o=rx(t,e)(i),s=null!=(a=null==r?void 0:r(o,i))?a:o;return n&&(s=n(s,i)),s}}// src/utils/pipe.ts
var rS=(...e)=>t=>e.reduce((e,t)=>t(e),t);// src/utils/prop-config.ts
function r_(e,t){return r=>{let n={property:r,scale:e};return n.transform=rk({scale:e,transform:t}),n}}var rE=({rtl:e,ltr:t})=>r=>"rtl"===r.direction?e:t,rC=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"],rT={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:"var(--chakra-blur) var(--chakra-brightness) var(--chakra-contrast) var(--chakra-grayscale) var(--chakra-hue-rotate) var(--chakra-invert) var(--chakra-saturate) var(--chakra-sepia) var(--chakra-drop-shadow)"},rP={backdropFilter:"var(--chakra-backdrop-blur) var(--chakra-backdrop-brightness) var(--chakra-backdrop-contrast) var(--chakra-backdrop-grayscale) var(--chakra-backdrop-hue-rotate) var(--chakra-backdrop-invert) var(--chakra-backdrop-opacity) var(--chakra-backdrop-saturate) var(--chakra-backdrop-sepia)","--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"},rI={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},rA={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},rR=new Set(Object.values(rA)),rO=/* @__PURE__ */new Set(["none","-moz-initial","inherit","initial","revert","unset"]),rM=e=>e.trim(),rN=e=>"string"==typeof e&&e.includes("(")&&e.includes(")"),rz=e=>{let t=parseFloat(e.toString()),r=e.toString().replace(String(t),"");return{unitless:!r,value:t,unit:r}},rj=e=>t=>`${e}(${t})`,rL={filter:e=>"auto"!==e?e:rT,backdropFilter:e=>"auto"!==e?e:rP,ring:e=>({"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":rL.px(e),boxShadow:"var(--chakra-ring-offset-shadow), var(--chakra-ring-shadow), var(--chakra-shadow, 0 0 #0000)"}),bgClip:e=>"text"===e?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e},transform:e=>"auto"===e?["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...rC].join(" "):"auto-gpu"===e?["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...rC].join(" "):e,vh:e=>"$100vh"===e?"var(--chakra-vh)":e,px(e){if(null==e)return e;let{unitless:t}=rz(e);return t||"number"==typeof e?`${e}px`:e},fraction:e=>"number"!=typeof e||e>1?e:`${100*e}%`,float:(e,t)=>"rtl"===t.direction?({left:"right",right:"left"})[e]:e,degree(e){if(/^var\(--.+\)$/.test(e)||null==e)return e;let t="string"==typeof e&&!e.endsWith("deg");return"number"==typeof e||t?`${e}deg`:e},gradient:(e,t)=>(function(e,t){if(null==e||rO.has(e))return e;let r=rN(e)||rO.has(e);if(!r)return`url('${e}')`;let n=/(^[a-z-A-Z]+)\((.*)\)/g.exec(e),i=null==n?void 0:n[1],a=null==n?void 0:n[2];if(!i||!a)return e;let o=i.includes("-gradient")?i:`${i}-gradient`,[s,...l]=a.split(",").map(rM).filter(Boolean);if((null==l?void 0:l.length)===0)return e;let u=s in rA?rA[s]:s;l.unshift(u);let c=l.map(e=>{if(rR.has(e))return e;let r=e.indexOf(" "),[n,i]=-1!==r?[e.substr(0,r),e.substr(r+1)]:[e],a=rN(i)?i:i&&i.split(" "),o=`colors.${n}`,s=o in t.__cssMap?t.__cssMap[o].varRef:n;return a?[s,...Array.isArray(a)?a:[a]].join(" "):s});return`${o}(${c.join(", ")})`})(e,null!=t?t:{}),blur:rj("blur"),opacity:rj("opacity"),brightness:rj("brightness"),contrast:rj("contrast"),dropShadow:rj("drop-shadow"),grayscale:rj("grayscale"),hueRotate:rj("hue-rotate"),invert:rj("invert"),saturate:rj("saturate"),sepia:rj("sepia"),bgImage(e){if(null==e)return e;let t=rN(e)||rO.has(e);return t?e:`url(${e})`},outline(e){let t="0"===String(e)||"none"===String(e);return null!==e&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var t;let{space:r,divide:n}=null!=(t=rI[e])?t:{},i={flexDirection:e};return r&&(i[r]=1),n&&(i[n]=1),i}},rD={borderWidths:r_("borderWidths"),borderStyles:r_("borderStyles"),colors:r_("colors"),borders:r_("borders"),gradients:r_("gradients",rL.gradient),radii:r_("radii",rL.px),space:r_("space",rS(rL.vh,rL.px)),spaceT:r_("space",rS(rL.vh,rL.px)),degreeT:e=>({property:e,transform:rL.degree}),prop:(e,t,r)=>({property:e,scale:t,...t&&{transform:rk({scale:t,transform:r})}}),propT:(e,t)=>({property:e,transform:t}),sizes:r_("sizes",rS(rL.vh,rL.px)),sizesT:r_("sizes",rS(rL.vh,rL.fraction)),shadows:r_("shadows"),logical:function(e){let{property:t,scale:r,transform:n}=e;return{scale:r,property:rE(t),transform:r?rk({scale:r,compose:n}):n}},blur:r_("blur",rL.blur)},rF={background:rD.colors("background"),backgroundColor:rD.colors("backgroundColor"),backgroundImage:rD.gradients("backgroundImage"),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:rL.bgClip},bgSize:rD.prop("backgroundSize"),bgPosition:rD.prop("backgroundPosition"),bg:rD.colors("background"),bgColor:rD.colors("backgroundColor"),bgPos:rD.prop("backgroundPosition"),bgRepeat:rD.prop("backgroundRepeat"),bgAttachment:rD.prop("backgroundAttachment"),bgGradient:rD.gradients("backgroundImage"),bgClip:{transform:rL.bgClip}};Object.assign(rF,{bgImage:rF.backgroundImage,bgImg:rF.backgroundImage});// src/config/border.ts
var r$={border:rD.borders("border"),borderWidth:rD.borderWidths("borderWidth"),borderStyle:rD.borderStyles("borderStyle"),borderColor:rD.colors("borderColor"),borderRadius:rD.radii("borderRadius"),borderTop:rD.borders("borderTop"),borderBlockStart:rD.borders("borderBlockStart"),borderTopLeftRadius:rD.radii("borderTopLeftRadius"),borderStartStartRadius:rD.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:rD.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:rD.radii("borderTopRightRadius"),borderStartEndRadius:rD.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:rD.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:rD.borders("borderRight"),borderInlineEnd:rD.borders("borderInlineEnd"),borderBottom:rD.borders("borderBottom"),borderBlockEnd:rD.borders("borderBlockEnd"),borderBottomLeftRadius:rD.radii("borderBottomLeftRadius"),borderBottomRightRadius:rD.radii("borderBottomRightRadius"),borderLeft:rD.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:rD.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:rD.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:rD.borders(["borderLeft","borderRight"]),borderInline:rD.borders("borderInline"),borderY:rD.borders(["borderTop","borderBottom"]),borderBlock:rD.borders("borderBlock"),borderTopWidth:rD.borderWidths("borderTopWidth"),borderBlockStartWidth:rD.borderWidths("borderBlockStartWidth"),borderTopColor:rD.colors("borderTopColor"),borderBlockStartColor:rD.colors("borderBlockStartColor"),borderTopStyle:rD.borderStyles("borderTopStyle"),borderBlockStartStyle:rD.borderStyles("borderBlockStartStyle"),borderBottomWidth:rD.borderWidths("borderBottomWidth"),borderBlockEndWidth:rD.borderWidths("borderBlockEndWidth"),borderBottomColor:rD.colors("borderBottomColor"),borderBlockEndColor:rD.colors("borderBlockEndColor"),borderBottomStyle:rD.borderStyles("borderBottomStyle"),borderBlockEndStyle:rD.borderStyles("borderBlockEndStyle"),borderLeftWidth:rD.borderWidths("borderLeftWidth"),borderInlineStartWidth:rD.borderWidths("borderInlineStartWidth"),borderLeftColor:rD.colors("borderLeftColor"),borderInlineStartColor:rD.colors("borderInlineStartColor"),borderLeftStyle:rD.borderStyles("borderLeftStyle"),borderInlineStartStyle:rD.borderStyles("borderInlineStartStyle"),borderRightWidth:rD.borderWidths("borderRightWidth"),borderInlineEndWidth:rD.borderWidths("borderInlineEndWidth"),borderRightColor:rD.colors("borderRightColor"),borderInlineEndColor:rD.colors("borderInlineEndColor"),borderRightStyle:rD.borderStyles("borderRightStyle"),borderInlineEndStyle:rD.borderStyles("borderInlineEndStyle"),borderTopRadius:rD.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:rD.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:rD.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:rD.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(r$,{rounded:r$.borderRadius,roundedTop:r$.borderTopRadius,roundedTopLeft:r$.borderTopLeftRadius,roundedTopRight:r$.borderTopRightRadius,roundedTopStart:r$.borderStartStartRadius,roundedTopEnd:r$.borderStartEndRadius,roundedBottom:r$.borderBottomRadius,roundedBottomLeft:r$.borderBottomLeftRadius,roundedBottomRight:r$.borderBottomRightRadius,roundedBottomStart:r$.borderEndStartRadius,roundedBottomEnd:r$.borderEndEndRadius,roundedLeft:r$.borderLeftRadius,roundedRight:r$.borderRightRadius,roundedStart:r$.borderInlineStartRadius,roundedEnd:r$.borderInlineEndRadius,borderStart:r$.borderInlineStart,borderEnd:r$.borderInlineEnd,borderTopStartRadius:r$.borderStartStartRadius,borderTopEndRadius:r$.borderStartEndRadius,borderBottomStartRadius:r$.borderEndStartRadius,borderBottomEndRadius:r$.borderEndEndRadius,borderStartRadius:r$.borderInlineStartRadius,borderEndRadius:r$.borderInlineEndRadius,borderStartWidth:r$.borderInlineStartWidth,borderEndWidth:r$.borderInlineEndWidth,borderStartColor:r$.borderInlineStartColor,borderEndColor:r$.borderInlineEndColor,borderStartStyle:r$.borderInlineStartStyle,borderEndStyle:r$.borderInlineEndStyle});// src/config/color.ts
var rB={color:rD.colors("color"),textColor:rD.colors("color"),fill:rD.colors("fill"),stroke:rD.colors("stroke")},rV={boxShadow:rD.shadows("boxShadow"),mixBlendMode:!0,blendMode:rD.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:rD.prop("backgroundBlendMode"),opacity:!0};Object.assign(rV,{shadow:rV.boxShadow});// src/config/filter.ts
var rU={filter:{transform:rL.filter},blur:rD.blur("--chakra-blur"),brightness:rD.propT("--chakra-brightness",rL.brightness),contrast:rD.propT("--chakra-contrast",rL.contrast),hueRotate:rD.degreeT("--chakra-hue-rotate"),invert:rD.propT("--chakra-invert",rL.invert),saturate:rD.propT("--chakra-saturate",rL.saturate),dropShadow:rD.propT("--chakra-drop-shadow",rL.dropShadow),backdropFilter:{transform:rL.backdropFilter},backdropBlur:rD.blur("--chakra-backdrop-blur"),backdropBrightness:rD.propT("--chakra-backdrop-brightness",rL.brightness),backdropContrast:rD.propT("--chakra-backdrop-contrast",rL.contrast),backdropHueRotate:rD.degreeT("--chakra-backdrop-hue-rotate"),backdropInvert:rD.propT("--chakra-backdrop-invert",rL.invert),backdropSaturate:rD.propT("--chakra-backdrop-saturate",rL.saturate)},rW={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:rL.flexDirection},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:rD.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:rD.space("gap"),rowGap:rD.space("rowGap"),columnGap:rD.space("columnGap")};Object.assign(rW,{flexDir:rW.flexDirection});// src/config/grid.ts
var rH={gridGap:rD.space("gridGap"),gridColumnGap:rD.space("gridColumnGap"),gridRowGap:rD.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},rq={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:rL.outline},outlineOffset:!0,outlineColor:rD.colors("outlineColor")},rG={width:rD.sizesT("width"),inlineSize:rD.sizesT("inlineSize"),height:rD.sizes("height"),blockSize:rD.sizes("blockSize"),boxSize:rD.sizes(["width","height"]),minWidth:rD.sizes("minWidth"),minInlineSize:rD.sizes("minInlineSize"),minHeight:rD.sizes("minHeight"),minBlockSize:rD.sizes("minBlockSize"),maxWidth:rD.sizes("maxWidth"),maxInlineSize:rD.sizes("maxInlineSize"),maxHeight:rD.sizes("maxHeight"),maxBlockSize:rD.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,aspectRatio:!0,hideFrom:{scale:"breakpoints",transform:(e,t)=>{var r,n,i;let a=null!=(i=null==(n=null==(r=t.__breakpoints)?void 0:r.get(e))?void 0:n.minW)?i:e,o=`@media screen and (min-width: ${a})`;return{[o]:{display:"none"}}}},hideBelow:{scale:"breakpoints",transform:(e,t)=>{var r,n,i;let a=null!=(i=null==(n=null==(r=t.__breakpoints)?void 0:r.get(e))?void 0:n._minW)?i:e,o=`@media screen and (max-width: ${a})`;return{[o]:{display:"none"}}}},verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:rD.propT("float",rL.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(rG,{w:rG.width,h:rG.height,minW:rG.minWidth,maxW:rG.maxWidth,minH:rG.minHeight,maxH:rG.maxHeight,overscroll:rG.overscrollBehavior,overscrollX:rG.overscrollBehaviorX,overscrollY:rG.overscrollBehaviorY});// src/config/list.ts
var rY={listStyleType:!0,listStylePosition:!0,listStylePos:rD.prop("listStylePosition"),listStyleImage:!0,listStyleImg:rD.prop("listStyleImage")},rK=(e=>{let t=/* @__PURE__ */new WeakMap;return(r,n,i,a)=>{if(void 0===r)return e(r,n,i);t.has(r)||t.set(r,/* @__PURE__ */new Map);let o=t.get(r);if(o.has(n))return o.get(n);let s=e(r,n,i,a);return o.set(n,s),s}})(// src/get.ts
function(e,t,r,n){let i="string"==typeof t?t.split("."):[t];for(n=0;n<i.length&&e;n+=1)e=e[i[n]];return void 0===e?r:e}),rX={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},rQ={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},rJ=(e,t,r)=>{let n={},i=rK(e,t,{});for(let e in i){let t=e in r&&null!=r[e];t||(n[e]=i[e])}return n},rZ={position:!0,pos:rD.prop("position"),zIndex:rD.prop("zIndex","zIndices"),inset:rD.spaceT("inset"),insetX:rD.spaceT(["left","right"]),insetInline:rD.spaceT("insetInline"),insetY:rD.spaceT(["top","bottom"]),insetBlock:rD.spaceT("insetBlock"),top:rD.spaceT("top"),insetBlockStart:rD.spaceT("insetBlockStart"),bottom:rD.spaceT("bottom"),insetBlockEnd:rD.spaceT("insetBlockEnd"),left:rD.spaceT("left"),insetInlineStart:rD.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:rD.spaceT("right"),insetInlineEnd:rD.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(rZ,{insetStart:rZ.insetInlineStart,insetEnd:rZ.insetInlineEnd});// src/config/ring.ts
var r0={ring:{transform:rL.ring},ringColor:rD.colors("--chakra-ring-color"),ringOffset:rD.prop("--chakra-ring-offset-width"),ringOffsetColor:rD.colors("--chakra-ring-offset-color"),ringInset:rD.prop("--chakra-ring-inset")},r1={margin:rD.spaceT("margin"),marginTop:rD.spaceT("marginTop"),marginBlockStart:rD.spaceT("marginBlockStart"),marginRight:rD.spaceT("marginRight"),marginInlineEnd:rD.spaceT("marginInlineEnd"),marginBottom:rD.spaceT("marginBottom"),marginBlockEnd:rD.spaceT("marginBlockEnd"),marginLeft:rD.spaceT("marginLeft"),marginInlineStart:rD.spaceT("marginInlineStart"),marginX:rD.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:rD.spaceT("marginInline"),marginY:rD.spaceT(["marginTop","marginBottom"]),marginBlock:rD.spaceT("marginBlock"),padding:rD.space("padding"),paddingTop:rD.space("paddingTop"),paddingBlockStart:rD.space("paddingBlockStart"),paddingRight:rD.space("paddingRight"),paddingBottom:rD.space("paddingBottom"),paddingBlockEnd:rD.space("paddingBlockEnd"),paddingLeft:rD.space("paddingLeft"),paddingInlineStart:rD.space("paddingInlineStart"),paddingInlineEnd:rD.space("paddingInlineEnd"),paddingX:rD.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:rD.space("paddingInline"),paddingY:rD.space(["paddingTop","paddingBottom"]),paddingBlock:rD.space("paddingBlock")};Object.assign(r1,{m:r1.margin,mt:r1.marginTop,mr:r1.marginRight,me:r1.marginInlineEnd,marginEnd:r1.marginInlineEnd,mb:r1.marginBottom,ml:r1.marginLeft,ms:r1.marginInlineStart,marginStart:r1.marginInlineStart,mx:r1.marginX,my:r1.marginY,p:r1.padding,pt:r1.paddingTop,py:r1.paddingY,px:r1.paddingX,pb:r1.paddingBottom,pl:r1.paddingLeft,ps:r1.paddingInlineStart,paddingStart:r1.paddingInlineStart,pr:r1.paddingRight,pe:r1.paddingInlineEnd,paddingEnd:r1.paddingInlineEnd});// src/config/text-decoration.ts
var r2={textDecorationColor:rD.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:rD.shadows("textShadow")},r5={clipPath:!0,transform:rD.propT("transform",rL.transform),transformOrigin:!0,translateX:rD.spaceT("--chakra-translate-x"),translateY:rD.spaceT("--chakra-translate-y"),skewX:rD.degreeT("--chakra-skew-x"),skewY:rD.degreeT("--chakra-skew-y"),scaleX:rD.prop("--chakra-scale-x"),scaleY:rD.prop("--chakra-scale-y"),scale:rD.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:rD.degreeT("--chakra-rotate")},r3={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:rD.prop("transitionDuration","transition.duration"),transitionProperty:rD.prop("transitionProperty","transition.property"),transitionTimingFunction:rD.prop("transitionTimingFunction","transition.easing")},r4={fontFamily:rD.prop("fontFamily","fonts"),fontSize:rD.prop("fontSize","fontSizes",rL.px),fontWeight:rD.prop("fontWeight","fontWeights"),lineHeight:rD.prop("lineHeight","lineHeights"),letterSpacing:rD.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,isTruncated:{transform(e){if(!0===e)return{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}},noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},r6={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:rD.spaceT("scrollMargin"),scrollMarginTop:rD.spaceT("scrollMarginTop"),scrollMarginBottom:rD.spaceT("scrollMarginBottom"),scrollMarginLeft:rD.spaceT("scrollMarginLeft"),scrollMarginRight:rD.spaceT("scrollMarginRight"),scrollMarginX:rD.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:rD.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:rD.spaceT("scrollPadding"),scrollPaddingTop:rD.spaceT("scrollPaddingTop"),scrollPaddingBottom:rD.spaceT("scrollPaddingBottom"),scrollPaddingLeft:rD.spaceT("scrollPaddingLeft"),scrollPaddingRight:rD.spaceT("scrollPaddingRight"),scrollPaddingX:rD.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:rD.spaceT(["scrollPaddingTop","scrollPaddingBottom"])};function r8(e){return rf(e)&&e.reference?e.reference:String(e)}var r9=(e,...t)=>t.map(r8).join(` ${e} `).replace(/calc/g,""),r7=(...e)=>`calc(${r9("+",...e)})`,ne=(...e)=>`calc(${r9("-",...e)})`,nt=(...e)=>`calc(${r9("*",...e)})`,nr=(...e)=>`calc(${r9("/",...e)})`,nn=e=>{let t=r8(e);return null==t||Number.isNaN(parseFloat(t))?nt(t,-1):String(t).startsWith("-")?String(t).slice(1):`-${t}`},ni=Object.assign(e=>({add:(...t)=>ni(r7(e,...t)),subtract:(...t)=>ni(ne(e,...t)),multiply:(...t)=>ni(nt(e,...t)),divide:(...t)=>ni(nr(e,...t)),negate:()=>ni(nn(e)),toString:()=>e.toString()}),{add:r7,subtract:ne,multiply:nt,divide:nr,negate:nn});function na(e,t,r){let n=function(e,t=""){return function(e){let t=// src/create-theme-vars/css-var.ts
function(e,t="-"){return e.replace(/\s+/g,t)}(e.toString());return(function(e){if(e.includes("\\."))return e;let t=!Number.isInteger(parseFloat(e.toString()));return t?e.replace(".","\\."):e})(t).replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}(`--${function(e,t=""){return[t,e].filter(Boolean).join("-")}(e,t)}`)}(e,r);return{variable:n,reference:`var(${n}${t?`, ${t}`:""})`}}function no(e){if(null==e)return e;let{unitless:t}=function(e){let t=parseFloat(e.toString()),r=e.toString().replace(String(t),"");return{unitless:!r,value:t,unit:r}}(e);return t||"number"==typeof e?`${e}px`:e}var ns=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,nl=e=>Object.fromEntries(Object.entries(e).sort(ns));function nu(e){let t=nl(e);return Object.assign(Object.values(t),t)}function nc(e){var t;return e?"number"==typeof(e=null!=(t=no(e))?t:e)?`${e+-.02}`:e.replace(/(\d+\.?\d*)/u,e=>`${parseFloat(e)+-.02}`):e}function nd(e,t){let r=["@media screen"];return e&&r.push("and",`(min-width: ${no(e)})`),t&&r.push("and",`(max-width: ${no(t)})`),r.join(" ")}// src/pseudos.ts
var nf={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},nh=e=>nm(t=>e(t,"&"),"[role=group]","[data-group]",".group"),np=e=>nm(t=>e(t,"~ &"),"[data-peer]",".peer"),nm=(e,...t)=>t.map(e).join(", "),ng={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty",_expanded:"&[aria-expanded=true], &[data-expanded]",_checked:"&[aria-checked=true], &[data-checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_firstLetter:"&::first-letter",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_groupHover:nh(nf.hover),_peerHover:np(nf.hover),_groupFocus:nh(nf.focus),_peerFocus:np(nf.focus),_groupFocusVisible:nh(nf.focusVisible),_peerFocusVisible:np(nf.focusVisible),_groupActive:nh(nf.active),_peerActive:np(nf.active),_groupDisabled:nh(nf.disabled),_peerDisabled:np(nf.disabled),_groupInvalid:nh(nf.invalid),_peerInvalid:np(nf.invalid),_groupChecked:nh(nf.checked),_peerChecked:np(nf.checked),_groupFocusWithin:nh(nf.focusWithin),_peerFocusWithin:np(nf.focusWithin),_peerPlaceholderShown:np(nf.placeholderShown),_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",_horizontal:"&[data-orientation=horizontal]",_vertical:"&[data-orientation=vertical]"},nv=Object.keys(ng);function nb(e,t){return na(String(e).replace(/\./g,"-"),void 0,t)}function ny(e,t,r={}){let{stop:n,getKey:i}=r;return function e(r,a=[]){var o;if("object"==typeof r&&null!=r&&!Array.isArray(r)||Array.isArray(r)){let s={};for(let[l,u]of Object.entries(r)){let c=null!=(o=null==i?void 0:i(l))?o:l,d=[...a,c];if(null==n?void 0:n(r,d))return t(r,a);s[c]=e(u,d)}return s}return t(r,a)}(e)}// src/create-theme-vars/theme-tokens.ts
var nw=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"],nx=e=>nv.includes(e)||"default"===e,nk=/*@__PURE__*/c(rb)({},rF,r$,rB,rW,rG,rU,r0,rq,rH,{srOnly:{transform:e=>!0===e?rX:"focusable"===e?rQ:{}},layerStyle:{processResult:!0,transform:(e,t,r)=>rJ(t,`layerStyles.${e}`,r)},textStyle:{processResult:!0,transform:(e,t,r)=>rJ(t,`textStyles.${e}`,r)},apply:{processResult:!0,transform:(e,t,r)=>rJ(t,e,r)}},rZ,rV,r1,r6,r4,r2,r5,rY,r3);Object.keys(Object.assign({},r1,rG,rW,rH,rZ));var nS=[...Object.keys(nk),...nv],n_={...nk,...ng},nE=e=>e in n_,nC=e=>t=>{if(!t.__breakpoints)return e;let{isResponsive:r,toArrayValue:n,media:i}=t.__breakpoints,a={};for(let o in e){let s=rh(e[o],t);if(null==s)continue;if(!Array.isArray(s=rf(s)&&r(s)?n(s):s)){a[o]=s;continue}let l=s.slice(0,i.length).length;for(let e=0;e<l;e+=1){let t=null==i?void 0:i[e];if(!t){a[o]=s[e];continue}a[t]=a[t]||{},null!=s[e]&&(a[t][o]=s[e])}}return a},nT=(e,t)=>e.startsWith("--")&&"string"==typeof t&&!/^var\(--.+\)$/.test(t),nP=(e,t)=>{var r,n;if(null==t)return t;let i=t=>{var r,n;return null==(n=null==(r=e.__cssMap)?void 0:r[t])?void 0:n.varRef},a=e=>{var t;return null!=(t=i(e))?t:e},[o,s]=// src/utils/split-by-comma.ts
function(e){let t=[],r="",n=!1;for(let i=0;i<e.length;i++){let a=e[i];"("===a?(n=!0,r+=a):")"===a?(n=!1,r+=a):","!==a||n?r+=a:(t.push(r),r="")}return(r=r.trim())&&t.push(r),t}(t);return t=null!=(n=null!=(r=i(o))?r:a(s))?n:a(t)},nI=e=>t=>{let r=function(e){let{configs:t={},pseudos:r={},theme:n}=e,i=(e,a=!1)=>{var o,s,l;let u=rh(e,n),d=nC(u)(n),f={};for(let e in d){let h=d[e],p=rh(h,n);e in r&&(e=r[e]),nT(e,p)&&(p=nP(n,p));let m=t[e];if(!0===m&&(m={property:e}),rf(p)){f[e]=null!=(o=f[e])?o:{},f[e]=/*@__PURE__*/c(rb)({},f[e],i(p,!0));continue}let g=null!=(l=null==(s=null==m?void 0:m.transform)?void 0:s.call(m,p,n,u))?l:p;g=(null==m?void 0:m.processResult)?i(g,!0):g;let v=rh(null==m?void 0:m.property,n);if(!a&&(null==m?void 0:m.static)){let e=rh(m.static,n);f=/*@__PURE__*/c(rb)({},f,e)}if(v&&Array.isArray(v)){for(let e of v)f[e]=g;continue}if(v){"&"===v&&rf(g)?f=/*@__PURE__*/c(rb)({},f,g):f[v]=g;continue}if(rf(g)){f=/*@__PURE__*/c(rb)({},f,g);continue}f[e]=g}return f};return i}({theme:t,pseudos:ng,configs:nk});return r(e)};function nA(e){return{definePartsStyle:e=>e,defineMultiStyleConfig:t=>({parts:e,...t})}}// src/theming-props.ts
function nR(e){return(// ../../utilities/object-utils/src/omit.ts
function(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}(e,["styleConfig","size","variant","colorScheme"]))}// src/object.ts
var rb=h("5Gn6I"),nO=(e=>{let t=/* @__PURE__ */new WeakMap;return(r,n,i,a)=>{if(void 0===r)return e(r,n,i);t.has(r)||t.set(r,/* @__PURE__ */new Map);let o=t.get(r);if(o.has(n))return o.get(n);let s=e(r,n,i,a);return o.set(n,s),s}})(function(e,t,r,n){let i="string"==typeof t?t.split("."):[t];for(n=0;n<i.length&&e;n+=1)e=e[i[n]];return void 0===e?r:e});function nM(e,t){let r={};return Object.keys(e).forEach(n=>{let i=e[n],a=t(i,n,e);a&&(r[n]=i)}),r}var nN=e=>nM(e,e=>null!=e);// src/function.ts
function nz(e,...t){return"function"==typeof e?e(...t):e}var eX=h("acw62");function nj(e){let{cssVarsRoot:t,theme:r,children:n}=e,i=(0,eX.useMemo)(()=>// src/create-theme-vars/to-css-var.ts
    (function(e){var t;let r=function(e){let{__cssMap:t,__cssVars:r,__breakpoints:n,...i}=e;return i}(e),n=// ../../utilities/object-utils/src/pick.ts
    function(e,t){let r={};for(let n of t)n in e&&(r[n]=e[n]);return r}(r,nw),i=r.semanticTokens,a=function({tokens:e,semanticTokens:t}){let r={};return ny(e,(e,t)=>{null!=e&&(r[t.join(".")]={isSemantic:!1,value:e})}),ny(t,(e,t)=>{null!=e&&(r[t.join(".")]={isSemantic:!0,value:e})},{stop:e=>Object.keys(e).every(nx)}),r}({tokens:n,semanticTokens:i}),o=null==(t=r.config)?void 0:t.cssVarPrefix,{cssMap:s,cssVars:l}=function(e,t){let r={},n={};for(let[i,a]of Object.entries(e)){let{isSemantic:o,value:s}=a,{variable:l,reference:u}=nb(i,null==t?void 0:t.cssVarPrefix);if(!o){if(i.startsWith("space")){let e=i.split("."),[t,...r]=e,a=`${t}.-${r.join(".")}`,o=ni.negate(s),c=ni.negate(u);n[a]={value:o,var:l,varRef:c}}r[l]=s,n[i]={value:s,var:l,varRef:u};continue}let d=r=>{let n=String(i).split(".")[0],a=[n,r].join("."),o=e[a];if(!o)return r;let{reference:s}=nb(a,null==t?void 0:t.cssVarPrefix);return s},f=rf(s)?s:{default:s};r=/*@__PURE__*/c(rb)(r,Object.entries(f).reduce((e,[t,r])=>{var n;if(!r)return e;let i=d(`${r}`);if("default"===t)return e[l]=i,e;let a=null!=(n=null==ng?void 0:ng[t])?n:t;return e[a]={[l]:i},e},{})),n[i]={value:u,var:l,varRef:u}}return{cssVars:r,cssMap:n}}(a,{cssVarPrefix:o});return Object.assign(r,{__cssVars:{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0",...l},__cssMap:s,__breakpoints:function(e){var t;if(!e)return null;e.base=null!=(t=e.base)?t:"0px";let r=nu(e),n=Object.entries(e).sort(ns).map(([e,t],r,n)=>{var i;let[,a]=null!=(i=n[r+1])?i:[];return a=parseFloat(a)>0?nc(a):void 0,{_minW:nc(t),breakpoint:e,minW:t,maxW:a,maxWQuery:nd(null,a),minWQuery:nd(t),minMaxQuery:nd(t,a)}}),i=function(e){let t=Object.keys(nl(e));return new Set(t)}(e),a=Array.from(i.values());return{keys:i,normalized:r,isResponsive(e){let t=Object.keys(e);return t.length>0&&t.every(e=>i.has(e))},asObject:nl(e),asArray:nu(e),details:n,get:e=>n.find(t=>t.breakpoint===e),media:[null,...r.map(e=>nd(e)).slice(1)],toArrayValue(e){if(!rf(e))throw Error("toArrayValue: value must be an object");let t=a.map(t=>{var r;return null!=(r=e[t])?r:null});for(;null===function(e){let t=null==e?0:e.length;return t?e[t-1]:void 0}(t);)t.pop();return t},toObjectValue(e){if(!Array.isArray(e))throw Error("toObjectValue: value must be an array");return e.reduce((e,t,r)=>{let n=a[r];return null!=n&&null!=t&&(e[n]=t),e},{})}}}(r.breakpoints)}),r})(r),[r]);return/* @__PURE__ */(0,p.jsxs)(tJ,{theme:i,children:[/* @__PURE__ */(0,p.jsx)(nL,{root:t}),n]})}function nL({root:e=":host, :root"}){let t=[e,"[data-theme]"].join(",");return/* @__PURE__ */(0,p.jsx)(t1,{styles:e=>({[t]:e.__cssVars})})}var[nD,nF]=function(e={}){let{strict:t=!0,errorMessage:r="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:n}=e,i=(0,eX.createContext)(void 0);return i.displayName=n,[i.Provider,function e(){var n;let a=(0,eX.useContext)(i);if(!a&&t){let t=Error(r);throw t.name="ContextError",null==(n=Error.captureStackTrace)||n.call(Error,t,e),t}return a},i]}({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function n$(){let{colorMode:e}=rn();return/* @__PURE__ */(0,p.jsx)(t1,{styles:t=>{let r=nO(t,"styles.global"),n=nz(r,{theme:t,colorMode:e});if(!n)return;let i=nI(n)(t);return i}})}var eX=h("acw62"),nB=(0,eX.createContext)({getDocument:()=>document,getWindow:()=>window});function nV(e){let{children:t,environment:r,disabled:n}=e,i=(0,eX.useRef)(null),a=(0,eX.useMemo)(()=>r||{getDocument:()=>{var e,t;return null!=(t=null==(e=i.current)?void 0:e.ownerDocument)?t:document},getWindow:()=>{var e,t;return null!=(t=null==(e=i.current)?void 0:e.ownerDocument.defaultView)?t:window}},[r]),o=!n||!r;return/* @__PURE__ */(0,p.jsxs)(nB.Provider,{value:a,children:[t,o&&/* @__PURE__ */(0,p.jsx)("span",{id:"__chakra_env",hidden:!0,ref:i})]})}nB.displayName="EnvironmentContext",nV.displayName="EnvironmentProvider";var nU=e=>{let{children:t,colorModeManager:r,portalZIndex:n,resetScope:i,resetCSS:a=!0,theme:o={},environment:s,cssVarsRoot:l,disableEnvironment:u,disableGlobalStyle:c}=e,d=/* @__PURE__ */(0,p.jsx)(nV,{environment:s,disabled:u,children:t});return/* @__PURE__ */(0,p.jsx)(nj,{theme:o,cssVarsRoot:l,children:/* @__PURE__ */(0,p.jsxs)(rc,{colorModeManager:r,options:o.config,children:[a?/* @__PURE__ */(0,p.jsx)(t8,{scope:i}):/* @__PURE__ */(0,p.jsx)(t6,{}),!c&&/* @__PURE__ */(0,p.jsx)(n$,{}),n?/* @__PURE__ */(0,p.jsx)(rt,{zIndex:n,children:d}):d]})})},nW=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"],nH={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},nq={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},nG={...nq,max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch",container:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},nY={breakpoints:{base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},radii:{none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},blur:{none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},colors:{transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"},linkedin:{50:"#E8F4F9",100:"#CFEDFB",200:"#9BDAF3",300:"#68C7EC",400:"#34B3E4",500:"#00A0DC",600:"#008CC9",700:"#0077B5",800:"#005E93",900:"#004471"},facebook:{50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"},messenger:{50:"#D0E6FF",100:"#B9DAFF",200:"#A2CDFF",300:"#7AB8FF",400:"#2E90FF",500:"#0078FF",600:"#0063D1",700:"#0052AC",800:"#003C7E",900:"#002C5C"},whatsapp:{50:"#dffeec",100:"#b9f5d0",200:"#90edb3",300:"#65e495",400:"#3cdd78",500:"#22c35e",600:"#179848",700:"#0c6c33",800:"#01421c",900:"#001803"},twitter:{50:"#E5F4FD",100:"#C8E9FB",200:"#A8DCFA",300:"#83CDF7",400:"#57BBF5",500:"#1DA1F2",600:"#1A94DA",700:"#1681BF",800:"#136B9E",900:"#0D4D71"},telegram:{50:"#E3F2F9",100:"#C5E4F3",200:"#A2D4EC",300:"#7AC1E4",400:"#47A9DA",500:"#0088CC",600:"#007AB8",700:"#006BA1",800:"#005885",900:"#003F5E"}},...nH,sizes:nG,shadows:{xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},space:nq,borders:{none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},transition:{property:{common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},easing:{"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},duration:{"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"}}},{defineMultiStyleConfig:nK,definePartsStyle:nX}=nA(["stepper","step","title","description","indicator","separator","icon","number"]),nQ=na("stepper-indicator-size"),nJ=na("stepper-icon-size"),nZ=na("stepper-title-font-size"),n0=na("stepper-description-font-size"),n1=na("stepper-accent-color"),n2=nK({baseStyle:nX(({colorScheme:e})=>({stepper:{display:"flex",justifyContent:"space-between",gap:"4","&[data-orientation=vertical]":{flexDirection:"column",alignItems:"flex-start"},"&[data-orientation=horizontal]":{flexDirection:"row",alignItems:"center"},[n1.variable]:`colors.${e}.500`,_dark:{[n1.variable]:`colors.${e}.200`}},title:{fontSize:nZ.reference,fontWeight:"medium"},description:{fontSize:n0.reference,color:"chakra-subtle-text"},number:{fontSize:nZ.reference},step:{flexShrink:0,position:"relative",display:"flex",gap:"2","&[data-orientation=horizontal]":{alignItems:"center"},flex:"1","&:last-of-type:not([data-stretch])":{flex:"initial"}},icon:{flexShrink:0,width:nJ.reference,height:nJ.reference},indicator:{flexShrink:0,borderRadius:"full",width:nQ.reference,height:nQ.reference,display:"flex",justifyContent:"center",alignItems:"center","&[data-status=active]":{borderWidth:"2px",borderColor:n1.reference},"&[data-status=complete]":{bg:n1.reference,color:"chakra-inverse-text"},"&[data-status=incomplete]":{borderWidth:"2px"}},separator:{bg:"chakra-border-color",flex:"1","&[data-status=complete]":{bg:n1.reference},"&[data-orientation=horizontal]":{width:"100%",height:"2px",marginStart:"2"},"&[data-orientation=vertical]":{width:"2px",position:"absolute",height:"100%",maxHeight:`calc(100% - ${nQ.reference} - 8px)`,top:`calc(${nQ.reference} + 4px)`,insetStart:`calc(${nQ.reference} / 2 - 1px)`}}})),sizes:{xs:nX({stepper:{[nQ.variable]:"sizes.4",[nJ.variable]:"sizes.3",[nZ.variable]:"fontSizes.xs",[n0.variable]:"fontSizes.xs"}}),sm:nX({stepper:{[nQ.variable]:"sizes.6",[nJ.variable]:"sizes.4",[nZ.variable]:"fontSizes.sm",[n0.variable]:"fontSizes.xs"}}),md:nX({stepper:{[nQ.variable]:"sizes.8",[nJ.variable]:"sizes.5",[nZ.variable]:"fontSizes.md",[n0.variable]:"fontSizes.sm"}}),lg:nX({stepper:{[nQ.variable]:"sizes.10",[nJ.variable]:"sizes.6",[nZ.variable]:"fontSizes.lg",[n0.variable]:"fontSizes.md"}})},defaultProps:{size:"md",colorScheme:"blue"}});// src/components/switch.ts
// src/anatomy.ts
function n5(e,t={}){let r=!1;function n(t){let r=["container","root"].includes(null!=t?t:"")?[e]:[e,t],n=r.filter(Boolean).join("__"),i=`chakra-${n}`,a={className:i,selector:`.${i}`,toString:()=>t};return a}return{parts:function(...i){for(let e of(!function(){if(!r){r=!0;return}throw Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}(),i))t[e]=n(e);return n5(e,t)},toPart:n,extend:function(...r){for(let e of r)e in t||(t[e]=n(e));return n5(e,t)},selectors:function(){let e=Object.fromEntries(Object.entries(t).map(([e,t])=>[e,t.selector]));return e},classnames:function(){let e=Object.fromEntries(Object.entries(t).map(([e,t])=>[e,t.className]));return e},get keys(){return Object.keys(t)},__type:{}}}// src/components.ts
var n3=n5("accordion").parts("root","container","button","panel").extend("icon"),n4=n5("alert").parts("title","description","container").extend("icon","spinner"),n6=n5("avatar").parts("label","badge","container").extend("excessLabel","group"),n8=n5("breadcrumb").parts("link","item","container").extend("separator");n5("button").parts();var n9=n5("checkbox").parts("control","icon","container").extend("label");n5("progress").parts("track","filledTrack").extend("label");var n7=n5("drawer").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),ie=n5("editable").parts("preview","input","textarea"),it=n5("form").parts("container","requiredIndicator","helperText"),ir=n5("formError").parts("text","icon"),ii=n5("input").parts("addon","field","element","group"),ia=n5("list").parts("container","item","icon"),io=n5("menu").parts("button","list","item").extend("groupTitle","icon","command","divider"),is=n5("modal").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),il=n5("numberinput").parts("root","field","stepperGroup","stepper");n5("pininput").parts("field");var iu=n5("popover").parts("content","header","body","footer").extend("popper","arrow","closeButton"),ic=n5("progress").parts("label","filledTrack","track"),id=n5("radio").parts("container","control","label"),ih=n5("select").parts("field","icon"),ip=n5("slider").parts("container","track","thumb","filledTrack","mark"),im=n5("stat").parts("container","label","helpText","number","icon"),ig=n5("switch").parts("container","track","thumb"),iv=n5("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),ib=n5("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),iy=n5("tag").parts("container","label","closeButton"),iw=n5("card").parts("container","header","body","footer");// src/css-calc.ts
function ix(e){return rf(e)&&e.reference?e.reference:String(e)}var ik=(e,...t)=>t.map(ix).join(` ${e} `).replace(/calc/g,""),iS=(...e)=>`calc(${ik("+",...e)})`,i_=(...e)=>`calc(${ik("-",...e)})`,iE=(...e)=>`calc(${ik("*",...e)})`,iC=(...e)=>`calc(${ik("/",...e)})`,iT=e=>{let t=ix(e);return null==t||Number.isNaN(parseFloat(t))?iE(t,-1):String(t).startsWith("-")?String(t).slice(1):`-${t}`},iP=Object.assign(e=>({add:(...t)=>iP(iS(e,...t)),subtract:(...t)=>iP(i_(e,...t)),multiply:(...t)=>iP(iE(e,...t)),divide:(...t)=>iP(iC(e,...t)),negate:()=>iP(iT(e)),toString:()=>e.toString()}),{add:iS,subtract:i_,multiply:iE,divide:iC,negate:iT});function iI(e){let t=function(e,t="-"){return e.replace(/\s+/g,t)}(e.toString());return t.includes("\\.")?e:Number.isInteger(parseFloat(e.toString()))?e:t.replace(".","\\.")}function iA(e,t){var r,n;let i=function(e,t=""){return`--${function(e,t=""){return[t,iI(e)].filter(Boolean).join("-")}(e,t)}`}(e,null==t?void 0:t.prefix);return{variable:i,reference:(r="string"==typeof(n=null==t?void 0:t.fallback)?n:null==n?void 0:n.reference,`var(${iI(i)}${r?`, ${r}`:""})`)}}var{defineMultiStyleConfig:iR,definePartsStyle:iO}=nA(ig.keys),iM=iA("switch-track-width"),iN=iA("switch-track-height"),iz=iA("switch-track-diff"),ij=iP.subtract(iM,iN),iL=iA("switch-thumb-x"),iD=iA("switch-bg"),iF=e=>{let{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[iM.reference],height:[iN.reference],transitionProperty:"common",transitionDuration:"fast",[iD.variable]:"colors.gray.300",_dark:{[iD.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[iD.variable]:`colors.${t}.500`,_dark:{[iD.variable]:`colors.${t}.200`}},bg:iD.reference}},i$={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[iN.reference],height:[iN.reference],_checked:{transform:`translateX(${iL.reference})`}},iB=iR({baseStyle:iO(e=>({container:{[iz.variable]:ij,[iL.variable]:iz.reference,_rtl:{[iL.variable]:iP(iz).negate().toString()}},track:iF(e),thumb:i$})),sizes:{sm:iO({container:{[iM.variable]:"1.375rem",[iN.variable]:"sizes.3"}}),md:iO({container:{[iM.variable]:"1.875rem",[iN.variable]:"sizes.4"}}),lg:iO({container:{[iM.variable]:"2.875rem",[iN.variable]:"sizes.6"}})},defaultProps:{size:"md",colorScheme:"blue"}});// src/components/table.ts
// src/component.ts
function iV(e,t){return r=>"dark"===r.colorMode?t:e}function iU(e){let{orientation:t,vertical:r,horizontal:n}=e;return t?"vertical"===t?r:n:{}}var{defineMultiStyleConfig:iW,definePartsStyle:iH}=nA(iv.keys),iq=iH({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),iG={"&[data-is-numeric=true]":{textAlign:"end"}},iY=iW({baseStyle:iq,variants:{simple:iH(e=>{let{colorScheme:t}=e;return{th:{color:iV("gray.600","gray.400")(e),borderBottom:"1px",borderColor:iV(`${t}.100`,`${t}.700`)(e),...iG},td:{borderBottom:"1px",borderColor:iV(`${t}.100`,`${t}.700`)(e),...iG},caption:{color:iV("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),striped:iH(e=>{let{colorScheme:t}=e;return{th:{color:iV("gray.600","gray.400")(e),borderBottom:"1px",borderColor:iV(`${t}.100`,`${t}.700`)(e),...iG},td:{borderBottom:"1px",borderColor:iV(`${t}.100`,`${t}.700`)(e),...iG},caption:{color:iV("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:iV(`${t}.100`,`${t}.700`)(e)},td:{background:iV(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),unstyled:{}},sizes:{sm:iH({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:iH({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:iH({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}});// src/components/tabs.ts
// src/color.ts
/**
 * A simple guard function:
 *
 * ```js
 * Math.min(Math.max(low, value), high)
 * ```
 */function iK(e,t,r){return Math.min(Math.max(e,r),t)}var iX=class extends Error{constructor(e){super(`Failed to parse color: "${e}"`)}};/**
 * Parses a color into red, gree, blue, alpha parts
 *
 * @param color the input color. Can be a RGB, RBGA, HSL, HSLA, or named color
 */function iQ(e){if("string"!=typeof e)throw new iX(e);if("transparent"===e.trim().toLowerCase())return[0,0,0,0];let t=e.trim();t=i4.test(e)?/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 */function(e){let t=e.toLowerCase().trim(),r=iZ[function(e){let t=5381,r=e.length;for(;r;)t=33*t^e.charCodeAt(--r);/* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */return(t>>>0)%2341}(t)];if(!r)throw new iX(e);return`#${r}`}(e):e;let r=i1.exec(t);if(r){let e=Array.from(r).slice(1);return[...e.slice(0,3).map(e=>parseInt(i0(e,2),16)),parseInt(i0(e[3]||"f",2),16)/255]}let n=i2.exec(t);if(n){let e=Array.from(n).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,16)),parseInt(e[3]||"ff",16)/255]}let i=i5.exec(t);if(i){let e=Array.from(i).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,10)),parseFloat(e[3]||"1")]}let a=i3.exec(t);if(a){let[t,r,n,i]=Array.from(a).slice(1).map(parseFloat);if(iK(0,100,r)!==r||iK(0,100,n)!==n)throw new iX(e);return[...i8(t,r,n),Number.isNaN(i)?1:i]}throw new iX(e)}const iJ=e=>parseInt(e.replace(/_/g,""),36),iZ="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{let r=iJ(t.substring(0,3)),n=iJ(t.substring(3)).toString(16),i="";for(let e=0;e<6-n.length;e++)i+="0";return e[r]=`${i}${n}`,e},{}),i0=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),i1=RegExp(`^#${i0("([a-f0-9])",3)}([a-f0-9])?$`,"i"),i2=RegExp(`^#${i0("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),i5=RegExp(`^rgba?\\(\\s*(\\d+)\\s*${i0(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),i3=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,i4=/^[a-z]+$/i,i6=e=>Math.round(255*e),i8=(e,t,r)=>{let n=r/100;if(0===t)return[n,n,n].map(i6);// formulae from https://en.wikipedia.org/wiki/HSL_and_HSV
let i=(e%360+360)%360/60,a=(1-Math.abs(2*n-1))*(t/100),o=a*(1-Math.abs(i%2-1)),s=0,l=0,u=0;i>=0&&i<1?(s=a,l=o):i>=1&&i<2?(s=o,l=a):i>=2&&i<3?(l=a,u=o):i>=3&&i<4?(l=o,u=a):i>=4&&i<5?(s=o,u=a):i>=5&&i<6&&(s=a,u=o);let c=n-a/2,d=s+c,f=l+c,h=u+c;return[d,f,h].map(i6)};// src/color.ts
var i9=e=>0===Object.keys(e).length,i7=(e,t,r)=>{let n=// ../../../node_modules/.pnpm/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
function(e,t,r,n,i){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)e=e?e[t[n]]:i;return e===i?r:e}(e,`colors.${t}`,t);try{return!/**
 * Takes in any color and returns it as a hex code.
 */function(e){let[t,r,n,i]=iQ(e),a=e=>{let t=iK(0,255,e).toString(16);// NOTE: padStart could be used here but it breaks Node 6 compat
// https://github.com/ricokahler/color2k/issues/351
return 1===t.length?`0${t}`:t};a(t),a(r),a(n),i<1&&a(Math.round(255*i))}(n),n}catch{return null!=r?r:"#000000"}},ae=e=>{let[t,r,n]=iQ(e);return(299*t+587*r+114*n)/1e3},at=e=>t=>{let r=i7(t,e),n=ae(r);return n<128?"dark":"light"},ar=e=>t=>"dark"===at(e)(t),an=(e,t)=>r=>{let n=i7(r,e);return(/**
 * Takes in a color and makes it more transparent by convert to `rgba` and
 * decreasing the amount in the alpha channel.
 *
 * @param amount The amount to increase the transparency by, given as a decimal between 0 and 1
 */function(e,t){let[r,n,i,a]=iQ(e);return`rgba(${iK(0,255,r).toFixed()}, ${iK(0,255,n).toFixed()}, ${iK(0,255,i).toFixed()}, ${parseFloat(iK(0,1,a-t).toFixed(3))})`}(n,1-t))};function ai(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}var aa=()=>`#${Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")}`,ao=na("tabs-color"),as=na("tabs-bg"),al=na("tabs-border-color"),{defineMultiStyleConfig:au,definePartsStyle:ac}=nA(ib.keys),ad=e=>{let{orientation:t}=e;return{display:"vertical"===t?"flex":"block"}},af=e=>{let{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},ah=e=>{let{align:t="start",orientation:r}=e;return{justifyContent:({end:"flex-end",center:"center",start:"flex-start"})[t],flexDirection:"vertical"===r?"column":"row"}},ap={p:4},am=au({baseStyle:ac(e=>({root:ad(e),tab:af(e),tablist:ah(e),tabpanel:ap})),sizes:{sm:ac({tab:{py:1,px:4,fontSize:"sm"}}),md:ac({tab:{fontSize:"md",py:2,px:4}}),lg:ac({tab:{fontSize:"lg",py:3,px:4}})},variants:{line:ac(e=>{let{colorScheme:t,orientation:r}=e,n="vertical"===r,i=n?"borderStart":"borderBottom";return{tablist:{[i]:"2px solid",borderColor:"inherit"},tab:{[i]:"2px solid",borderColor:"transparent",[n?"marginStart":"marginBottom"]:"-2px",_selected:{[ao.variable]:`colors.${t}.600`,_dark:{[ao.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[as.variable]:"colors.gray.200",_dark:{[as.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:ao.reference,bg:as.reference}}}),enclosed:ac(e=>{let{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[al.variable]:"transparent",_selected:{[ao.variable]:`colors.${t}.600`,[al.variable]:"colors.white",_dark:{[ao.variable]:`colors.${t}.300`,[al.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:al.reference},color:ao.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),"enclosed-colored":ac(e=>{let{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[as.variable]:"colors.gray.50",_dark:{[as.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[as.variable]:"colors.white",[ao.variable]:`colors.${t}.600`,_dark:{[as.variable]:"colors.gray.800",[ao.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:ao.reference,bg:as.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),"soft-rounded":ac(e=>{let{colorScheme:t,theme:r}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:i7(r,`${t}.700`),bg:i7(r,`${t}.100`)}}}}),"solid-rounded":ac(e=>{let{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[ao.variable]:"colors.gray.600",_dark:{[ao.variable]:"inherit"},_selected:{[ao.variable]:"colors.white",[as.variable]:`colors.${t}.600`,_dark:{[ao.variable]:"colors.gray.800",[as.variable]:`colors.${t}.300`}},color:ao.reference,bg:as.reference}}}),unstyled:ac({})},defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),ag=function(e,t){let r={};for(let n of t){if(Array.isArray(n)){let[t,i]=n;r[t]=na(`${e}-${t}`,i);continue}r[n]=na(`${e}-${n}`)}return r}("badge",["bg","color","shadow"]),av={baseStyle:{px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold",bg:ag.bg.reference,color:ag.color.reference,boxShadow:ag.shadow.reference},variants:{solid:e=>{let{colorScheme:t,theme:r}=e,n=an(`${t}.500`,.6)(r);return{[ag.bg.variable]:`colors.${t}.500`,[ag.color.variable]:"colors.white",_dark:{[ag.bg.variable]:n,[ag.color.variable]:"colors.whiteAlpha.800"}}},subtle:e=>{let{colorScheme:t,theme:r}=e,n=an(`${t}.200`,.16)(r);return{[ag.bg.variable]:`colors.${t}.100`,[ag.color.variable]:`colors.${t}.800`,_dark:{[ag.bg.variable]:n,[ag.color.variable]:`colors.${t}.200`}}},outline:e=>{let{colorScheme:t,theme:r}=e,n=an(`${t}.200`,.8)(r);return{[ag.color.variable]:`colors.${t}.500`,_dark:{[ag.color.variable]:n},[ag.shadow.variable]:`inset 0 0 0px 1px ${ag.color.reference}`}}},defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:ab,definePartsStyle:ay}=nA(iy.keys),aw=na("tag-bg"),ax=na("tag-color"),ak=na("tag-shadow"),aS=na("tag-min-height"),a_=na("tag-min-width"),aE=na("tag-font-size"),aC=na("tag-padding-inline"),aT=ay({container:{fontWeight:"medium",lineHeight:1.2,outline:0,[ax.variable]:ag.color.reference,[aw.variable]:ag.bg.reference,[ak.variable]:ag.shadow.reference,color:ax.reference,bg:aw.reference,boxShadow:ak.reference,borderRadius:"md",minH:aS.reference,minW:a_.reference,fontSize:aE.reference,px:aC.reference,_focusVisible:{[ak.variable]:"shadows.outline"}},label:{lineHeight:1.2,overflow:"visible"},closeButton:{fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}}}),aP={sm:ay({container:{[aS.variable]:"sizes.5",[a_.variable]:"sizes.5",[aE.variable]:"fontSizes.xs",[aC.variable]:"space.2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:ay({container:{[aS.variable]:"sizes.6",[a_.variable]:"sizes.6",[aE.variable]:"fontSizes.sm",[aC.variable]:"space.2"}}),lg:ay({container:{[aS.variable]:"sizes.8",[a_.variable]:"sizes.8",[aE.variable]:"fontSizes.md",[aC.variable]:"space.3"}})},aI=ab({variants:{subtle:ay(e=>{var t;return{container:null==(t=av.variants)?void 0:t.subtle(e)}}),solid:ay(e=>{var t;return{container:null==(t=av.variants)?void 0:t.solid(e)}}),outline:ay(e=>{var t;return{container:null==(t=av.variants)?void 0:t.outline(e)}})},baseStyle:aT,sizes:aP,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}}),{definePartsStyle:aA,defineMultiStyleConfig:aR}=nA(ii.keys),aO=na("input-height"),aM=na("input-font-size"),aN=na("input-padding"),az=na("input-border-radius"),aj=aA({addon:{height:aO.reference,fontSize:aM.reference,px:aN.reference,borderRadius:az.reference},field:{width:"100%",height:aO.reference,fontSize:aM.reference,px:aN.reference,borderRadius:az.reference,minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),aL={lg:{[aM.variable]:"fontSizes.lg",[aN.variable]:"space.4",[az.variable]:"radii.md",[aO.variable]:"sizes.12"},md:{[aM.variable]:"fontSizes.md",[aN.variable]:"space.4",[az.variable]:"radii.md",[aO.variable]:"sizes.10"},sm:{[aM.variable]:"fontSizes.sm",[aN.variable]:"space.3",[az.variable]:"radii.sm",[aO.variable]:"sizes.8"},xs:{[aM.variable]:"fontSizes.xs",[aN.variable]:"space.2",[az.variable]:"radii.sm",[aO.variable]:"sizes.6"}};function aD(e){let{focusBorderColor:t,errorBorderColor:r}=e;return{focusBorderColor:t||iV("blue.500","blue.300")(e),errorBorderColor:r||iV("red.500","red.300")(e)}}var aF=aR({baseStyle:aj,sizes:{lg:aA({field:aL.lg,group:aL.lg}),md:aA({field:aL.md,group:aL.md}),sm:aA({field:aL.sm,group:aL.sm}),xs:aA({field:aL.xs,group:aL.xs})},variants:{outline:aA(e=>{let{theme:t}=e,{focusBorderColor:r,errorBorderColor:n}=aD(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:iV("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:i7(t,n),boxShadow:`0 0 0 1px ${i7(t,n)}`},_focusVisible:{zIndex:1,borderColor:i7(t,r),boxShadow:`0 0 0 1px ${i7(t,r)}`}},addon:{border:"1px solid",borderColor:iV("inherit","whiteAlpha.50")(e),bg:iV("gray.100","whiteAlpha.300")(e)}}}),filled:aA(e=>{let{theme:t}=e,{focusBorderColor:r,errorBorderColor:n}=aD(e);return{field:{border:"2px solid",borderColor:"transparent",bg:iV("gray.100","whiteAlpha.50")(e),_hover:{bg:iV("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:i7(t,n)},_focusVisible:{bg:"transparent",borderColor:i7(t,r)}},addon:{border:"2px solid",borderColor:"transparent",bg:iV("gray.100","whiteAlpha.50")(e)}}}),flushed:aA(e=>{let{theme:t}=e,{focusBorderColor:r,errorBorderColor:n}=aD(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:i7(t,n),boxShadow:`0px 1px 0px 0px ${i7(t,n)}`},_focusVisible:{borderColor:i7(t,r),boxShadow:`0px 1px 0px 0px ${i7(t,r)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),unstyled:aA({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}})},defaultProps:{size:"md",variant:"outline"}}),a$={...null==(mZ=aF.baseStyle)?void 0:mZ.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"},aB={outline:e=>{var t,r;return null!=(r=null==(t=aF.variants)?void 0:t.outline(e).field)?r:{}},flushed:e=>{var t,r;return null!=(r=null==(t=aF.variants)?void 0:t.flushed(e).field)?r:{}},filled:e=>{var t,r;return null!=(r=null==(t=aF.variants)?void 0:t.filled(e).field)?r:{}},unstyled:null!=(m1=null==(m0=aF.variants)?void 0:m0.unstyled.field)?m1:{}},aV={xs:null!=(m5=null==(m2=aF.sizes)?void 0:m2.xs.field)?m5:{},sm:null!=(m4=null==(m3=aF.sizes)?void 0:m3.sm.field)?m4:{},md:null!=(m8=null==(m6=aF.sizes)?void 0:m6.md.field)?m8:{},lg:null!=(m7=null==(m9=aF.sizes)?void 0:m9.lg.field)?m7:{}},aU=iA("tooltip-bg"),aW=iA("tooltip-fg"),aH=iA("popper-arrow-bg"),aq={bg:aU.reference,color:aW.reference,[aU.variable]:"colors.gray.700",[aW.variable]:"colors.whiteAlpha.900",_dark:{[aU.variable]:"colors.gray.300",[aW.variable]:"colors.gray.900"},[aH.variable]:aU.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},{defineMultiStyleConfig:aG,definePartsStyle:aY}=nA(ic.keys),aK=e=>{let{colorScheme:t,theme:r,isIndeterminate:n,hasStripe:i}=e,a=iV(ai(),ai("1rem","rgba(0,0,0,0.1)"))(e),o=iV(`${t}.500`,`${t}.200`)(e),s=`linear-gradient(
    to right,
    transparent 0%,
    ${i7(r,o)} 50%,
    transparent 100%
  )`;return{...!n&&i&&a,...n?{bgImage:s}:{bgColor:o}}},aX={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},aQ=e=>({bg:iV("gray.100","whiteAlpha.300")(e)}),aJ=e=>({transitionProperty:"common",transitionDuration:"slow",...aK(e)}),aZ=aY(e=>({label:aX,filledTrack:aJ(e),track:aQ(e)})),a0=aG({sizes:{xs:aY({track:{h:"1"}}),sm:aY({track:{h:"2"}}),md:aY({track:{h:"3"}}),lg:aY({track:{h:"4"}})},baseStyle:aZ,defaultProps:{size:"md",colorScheme:"blue"}}),a1=e=>"function"==typeof e;function a2(e,...t){return a1(e)?e(...t):e}var{definePartsStyle:a5,defineMultiStyleConfig:a3}=nA(n9.keys),a4=na("checkbox-size"),a6=e=>{let{colorScheme:t}=e;return{w:a4.reference,h:a4.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:iV(`${t}.500`,`${t}.200`)(e),borderColor:iV(`${t}.500`,`${t}.200`)(e),color:iV("white","gray.900")(e),_hover:{bg:iV(`${t}.600`,`${t}.300`)(e),borderColor:iV(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:iV("gray.200","transparent")(e),bg:iV("gray.200","whiteAlpha.300")(e),color:iV("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:iV(`${t}.500`,`${t}.200`)(e),borderColor:iV(`${t}.500`,`${t}.200`)(e),color:iV("white","gray.900")(e)},_disabled:{bg:iV("gray.100","whiteAlpha.100")(e),borderColor:iV("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:iV("red.500","red.300")(e)}}},a8={_disabled:{cursor:"not-allowed"}},a9={userSelect:"none",_disabled:{opacity:.4}},a7={transitionProperty:"transform",transitionDuration:"normal"},oe=a3({baseStyle:a5(e=>({icon:a7,container:a8,control:a2(a6,e),label:a9})),sizes:{sm:a5({control:{[a4.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:a5({control:{[a4.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:a5({control:{[a4.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:ot,definePartsStyle:or}=nA(id.keys),on=e=>{var t;let r=null==(t=a2(oe.baseStyle,e))?void 0:t.control;return{...r,borderRadius:"full",_checked:{...null==r?void 0:r._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},oi=ot({baseStyle:or(e=>{var t,r;return{label:null==(t=oe.baseStyle)?void 0:t.call(oe,e).label,container:null==(r=oe.baseStyle)?void 0:r.call(oe,e).container,control:on(e)}}),sizes:{md:or({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:or({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:or({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:oa,definePartsStyle:oo}=nA(ih.keys),os=na("select-bg"),ol=oo({field:{...null==(ge=aF.baseStyle)?void 0:ge.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:os.reference,[os.variable]:"colors.white",_dark:{[os.variable]:"colors.gray.700"},"> option, > optgroup":{bg:os.reference}},icon:{width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}}}),ou={paddingInlineEnd:"8"},oc=oa({baseStyle:ol,sizes:{lg:{...null==(gt=aF.sizes)?void 0:gt.lg,field:{...null==(gr=aF.sizes)?void 0:gr.lg.field,...ou}},md:{...null==(gn=aF.sizes)?void 0:gn.md,field:{...null==(gi=aF.sizes)?void 0:gi.md.field,...ou}},sm:{...null==(ga=aF.sizes)?void 0:ga.sm,field:{...null==(go=aF.sizes)?void 0:go.sm.field,...ou}},xs:{...null==(gs=aF.sizes)?void 0:gs.xs,field:{...null==(gl=aF.sizes)?void 0:gl.xs.field,...ou},icon:{insetEnd:"1"}}},variants:aF.variants,defaultProps:aF.defaultProps}),od=na("skeleton-start-color"),of=na("skeleton-end-color"),oh={[od.variable]:"colors.gray.100",[of.variable]:"colors.gray.400",_dark:{[od.variable]:"colors.gray.800",[of.variable]:"colors.gray.600"},background:od.reference,borderColor:of.reference,opacity:.7,borderRadius:"sm"},op=na("skip-link-bg"),om={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[op.variable]:"colors.white",_dark:{[op.variable]:"colors.gray.700"},bg:op.reference}},{defineMultiStyleConfig:og,definePartsStyle:ov}=nA(ip.keys),ob=na("slider-thumb-size"),oy=na("slider-track-size"),ow=na("slider-bg"),ox=e=>{let{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...iU({orientation:t,vertical:{h:"100%"},horizontal:{w:"100%"}})}},ok=e=>{let t=iU({orientation:e.orientation,horizontal:{h:oy.reference},vertical:{w:oy.reference}});return{...t,overflow:"hidden",borderRadius:"sm",[ow.variable]:"colors.gray.200",_dark:{[ow.variable]:"colors.whiteAlpha.200"},_disabled:{[ow.variable]:"colors.gray.300",_dark:{[ow.variable]:"colors.whiteAlpha.300"}},bg:ow.reference}},oS=e=>{let{orientation:t}=e,r=iU({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",_active:{transform:"translateX(-50%) scale(1.15)"}},horizontal:{top:"50%",transform:"translateY(-50%)",_active:{transform:"translateY(-50%) scale(1.15)"}}});return{...r,w:ob.reference,h:ob.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{bg:"gray.300"}}},o_=e=>{let{colorScheme:t}=e;return{width:"inherit",height:"inherit",[ow.variable]:`colors.${t}.500`,_dark:{[ow.variable]:`colors.${t}.200`},bg:ow.reference}},oE=og({baseStyle:ov(e=>({container:ox(e),track:ok(e),thumb:oS(e),filledTrack:o_(e)})),sizes:{lg:ov({container:{[ob.variable]:"sizes.4",[oy.variable]:"sizes.1"}}),md:ov({container:{[ob.variable]:"sizes.3.5",[oy.variable]:"sizes.1"}}),sm:ov({container:{[ob.variable]:"sizes.2.5",[oy.variable]:"sizes.0.5"}})},defaultProps:{size:"md",colorScheme:"blue"}}),oC=iA("spinner-size"),oT={width:[oC.reference],height:[oC.reference]},oP={xs:{[oC.variable]:"sizes.3"},sm:{[oC.variable]:"sizes.4"},md:{[oC.variable]:"sizes.6"},lg:{[oC.variable]:"sizes.8"},xl:{[oC.variable]:"sizes.12"}},{defineMultiStyleConfig:oI,definePartsStyle:oA}=nA(im.keys),oR=oI({baseStyle:oA({container:{},label:{fontWeight:"medium"},helpText:{opacity:.8,marginBottom:"2"},number:{verticalAlign:"baseline",fontWeight:"semibold"},icon:{marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"}}),sizes:{md:oA({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},defaultProps:{size:"md"}}),oO=na("kbd-bg"),oM={[oO.variable]:"colors.gray.100",_dark:{[oO.variable]:"colors.whiteAlpha.100"},bg:oO.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},{defineMultiStyleConfig:oN,definePartsStyle:oz}=nA(ia.keys),oj=oN({baseStyle:oz({icon:{marginEnd:"2",display:"inline",verticalAlign:"text-bottom"}})}),{defineMultiStyleConfig:oL,definePartsStyle:oD}=nA(io.keys),oF=na("menu-bg"),o$=na("menu-shadow"),oB=oL({baseStyle:oD({button:{transitionProperty:"common",transitionDuration:"normal"},list:{[oF.variable]:"#fff",[o$.variable]:"shadows.sm",_dark:{[oF.variable]:"colors.gray.700",[o$.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:1,borderRadius:"md",borderWidth:"1px",bg:oF.reference,boxShadow:o$.reference},item:{py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[oF.variable]:"colors.gray.100",_dark:{[oF.variable]:"colors.whiteAlpha.100"}},_active:{[oF.variable]:"colors.gray.200",_dark:{[oF.variable]:"colors.whiteAlpha.200"}},_expanded:{[oF.variable]:"colors.gray.100",_dark:{[oF.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:oF.reference},groupTitle:{mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},icon:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},command:{opacity:.6},divider:{border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6}})}),{defineMultiStyleConfig:oV,definePartsStyle:oU}=nA(is.keys),oW=na("modal-bg"),oH=na("modal-shadow"),oq={bg:"blackAlpha.600",zIndex:"modal"},oG=e=>{let{isCentered:t,scrollBehavior:r}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:"inside"===r?"hidden":"auto",overscrollBehaviorY:"none"}},oY=e=>{let{isCentered:t,scrollBehavior:r}=e;return{borderRadius:"md",color:"inherit",my:t?"auto":"16",mx:t?"auto":void 0,zIndex:"modal",maxH:"inside"===r?"calc(100% - 7.5rem)":void 0,[oW.variable]:"colors.white",[oH.variable]:"shadows.lg",_dark:{[oW.variable]:"colors.gray.700",[oH.variable]:"shadows.dark-lg"},bg:oW.reference,boxShadow:oH.reference}},oK={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},oX={position:"absolute",top:"2",insetEnd:"3"},oQ=e=>{let{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:"inside"===t?"auto":void 0}},oJ={px:"6",py:"4"};function oZ(e){return"full"===e?oU({dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}):oU({dialog:{maxW:e}})}var o0=oV({baseStyle:oU(e=>({overlay:oq,dialogContainer:a2(oG,e),dialog:a2(oY,e),header:oK,closeButton:oX,body:a2(oQ,e),footer:oJ})),sizes:{xs:oZ("xs"),sm:oZ("sm"),md:oZ("md"),lg:oZ("lg"),xl:oZ("xl"),"2xl":oZ("2xl"),"3xl":oZ("3xl"),"4xl":oZ("4xl"),"5xl":oZ("5xl"),"6xl":oZ("6xl"),full:oZ("full")},defaultProps:{size:"md"}}),{defineMultiStyleConfig:o1,definePartsStyle:o2}=nA(il.keys),o5=iA("number-input-stepper-width"),o3=iA("number-input-input-padding"),o4=iP(o5).add("0.5rem").toString(),o6=iA("number-input-bg"),o8=iA("number-input-color"),o9=iA("number-input-border-color"),o7={[o5.variable]:"sizes.6",[o3.variable]:o4},se=e=>{var t,r;return null!=(r=null==(t=a2(aF.baseStyle,e))?void 0:t.field)?r:{}},st={width:o5.reference},sr={borderStart:"1px solid",borderStartColor:o9.reference,color:o8.reference,bg:o6.reference,[o8.variable]:"colors.chakra-body-text",[o9.variable]:"colors.chakra-border-color",_dark:{[o8.variable]:"colors.whiteAlpha.800",[o9.variable]:"colors.whiteAlpha.300"},_active:{[o6.variable]:"colors.gray.200",_dark:{[o6.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}};function sn(e){var t,r,n;let i=null==(t=aF.sizes)?void 0:t[e],a={lg:"md",md:"md",sm:"sm",xs:"sm"},o=null!=(n=null==(r=i.field)?void 0:r.fontSize)?n:"md",s=nH.fontSizes[o];return o2({field:{...i.field,paddingInlineEnd:o3.reference,verticalAlign:"top"},stepper:{fontSize:iP(s).multiply(.75).toString(),_first:{borderTopEndRadius:a[e]},_last:{borderBottomEndRadius:a[e],mt:"-1px",borderTopWidth:1}}})}var si=o1({baseStyle:o2(e=>{var t;return{root:o7,field:null!=(t=a2(se,e))?t:{},stepperGroup:st,stepper:sr}}),sizes:{xs:sn("xs"),sm:sn("sm"),md:sn("md"),lg:sn("lg")},variants:aF.variants,defaultProps:aF.defaultProps}),sa={baseStyle:{...null==(gu=aF.baseStyle)?void 0:gu.field,textAlign:"center"},sizes:{lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}},variants:{outline:e=>{var t,r,n;return null!=(n=null==(r=a2(null==(t=aF.variants)?void 0:t.outline,e))?void 0:r.field)?n:{}},flushed:e=>{var t,r,n;return null!=(n=null==(r=a2(null==(t=aF.variants)?void 0:t.flushed,e))?void 0:r.field)?n:{}},filled:e=>{var t,r,n;return null!=(n=null==(r=a2(null==(t=aF.variants)?void 0:t.filled,e))?void 0:r.field)?n:{}},unstyled:null!=(gd=null==(gc=aF.variants)?void 0:gc.unstyled.field)?gd:{}},defaultProps:aF.defaultProps},{defineMultiStyleConfig:so,definePartsStyle:ss}=nA(iu.keys),sl=iA("popper-bg"),su=iA("popper-arrow-bg"),sc=iA("popper-arrow-shadow-color"),sd=so({baseStyle:ss({popper:{zIndex:10},content:{[sl.variable]:"colors.white",bg:sl.reference,[su.variable]:sl.reference,[sc.variable]:"colors.gray.200",_dark:{[sl.variable]:"colors.gray.700",[sc.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},header:{px:3,py:2,borderBottomWidth:"1px"},body:{px:3,py:2},footer:{px:3,py:2,borderTopWidth:"1px"},closeButton:{position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2}})}),{definePartsStyle:sf,defineMultiStyleConfig:sh}=nA(n7.keys),sp=na("drawer-bg"),sm=na("drawer-box-shadow");function sg(e){return"full"===e?sf({dialog:{maxW:"100vw",h:"100vh"}}):sf({dialog:{maxW:e}})}var sv={bg:"blackAlpha.600",zIndex:"modal"},sb={display:"flex",zIndex:"modal",justifyContent:"center"},sy=e=>{let{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[sp.variable]:"colors.white",[sm.variable]:"shadows.lg",_dark:{[sp.variable]:"colors.gray.700",[sm.variable]:"shadows.dark-lg"},bg:sp.reference,boxShadow:sm.reference}},sw={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},sx={position:"absolute",top:"2",insetEnd:"3"},sk={px:"6",py:"2",flex:"1",overflow:"auto"},sS={px:"6",py:"4"},s_=sh({baseStyle:sf(e=>({overlay:sv,dialogContainer:sb,dialog:a2(sy,e),header:sw,closeButton:sx,body:sk,footer:sS})),sizes:{xs:sg("xs"),sm:sg("md"),md:sg("lg"),lg:sg("2xl"),xl:sg("4xl"),full:sg("full")},defaultProps:{size:"xs"}}),{definePartsStyle:sE,defineMultiStyleConfig:sC}=nA(ie.keys),sT=sC({baseStyle:sE({preview:{borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},input:{borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},textarea:{borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}}})}),{definePartsStyle:sP,defineMultiStyleConfig:sI}=nA(it.keys),sA=na("form-control-color"),sR=sI({baseStyle:sP({container:{width:"100%",position:"relative"},requiredIndicator:{marginStart:"1",[sA.variable]:"colors.red.500",_dark:{[sA.variable]:"colors.red.300"},color:sA.reference},helperText:{mt:"2",[sA.variable]:"colors.gray.600",_dark:{[sA.variable]:"colors.whiteAlpha.600"},color:sA.reference,lineHeight:"normal",fontSize:"sm"}})}),{definePartsStyle:sO,defineMultiStyleConfig:sM}=nA(ir.keys),sN=na("form-error-color"),sz=sM({baseStyle:sO({text:{[sN.variable]:"colors.red.500",_dark:{[sN.variable]:"colors.red.300"},color:sN.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},icon:{marginEnd:"0.5em",[sN.variable]:"colors.red.500",_dark:{[sN.variable]:"colors.red.300"},color:sN.reference}})}),{defineMultiStyleConfig:sj,definePartsStyle:sL}=nA(n8.keys),sD=na("breadcrumb-link-decor"),sF=sj({baseStyle:sL({link:{transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",outline:"none",color:"inherit",textDecoration:sD.reference,[sD.variable]:"none","&:not([aria-current=page])":{cursor:"pointer",_hover:{[sD.variable]:"underline"},_focusVisible:{boxShadow:"outline"}}}})}),s$=e=>{let{colorScheme:t,theme:r}=e;if("gray"===t)return{color:iV("gray.800","whiteAlpha.900")(e),_hover:{bg:iV("gray.100","whiteAlpha.200")(e)},_active:{bg:iV("gray.200","whiteAlpha.300")(e)}};let n=an(`${t}.200`,.12)(r),i=an(`${t}.200`,.24)(r);return{color:iV(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:iV(`${t}.50`,n)(e)},_active:{bg:iV(`${t}.100`,i)(e)}}},sB={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},{definePartsStyle:sV,defineMultiStyleConfig:sU}=nA(iw.keys),sW=na("card-bg"),sH=na("card-padding"),sq=na("card-shadow"),sG=na("card-radius"),sY=na("card-border-width","0"),sK=na("card-border-color"),sX=sV({container:{[sW.variable]:"colors.chakra-body-bg",backgroundColor:sW.reference,boxShadow:sq.reference,borderRadius:sG.reference,color:"chakra-body-text",borderWidth:sY.reference,borderColor:sK.reference},body:{padding:sH.reference,flex:"1 1 0%"},header:{padding:sH.reference},footer:{padding:sH.reference}}),sQ={sm:sV({container:{[sG.variable]:"radii.base",[sH.variable]:"space.3"}}),md:sV({container:{[sG.variable]:"radii.md",[sH.variable]:"space.5"}}),lg:sV({container:{[sG.variable]:"radii.xl",[sH.variable]:"space.7"}})},sJ=sU({baseStyle:sX,variants:{elevated:sV({container:{[sq.variable]:"shadows.base",_dark:{[sW.variable]:"colors.gray.700"}}}),outline:sV({container:{[sY.variable]:"1px",[sK.variable]:"colors.chakra-border-color"}}),filled:sV({container:{[sW.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{[sH.variable]:0},header:{[sH.variable]:0},footer:{[sH.variable]:0}}},sizes:sQ,defaultProps:{variant:"elevated",size:"md"}}),sZ=iA("close-button-size"),s0=iA("close-button-bg"),s1={w:[sZ.reference],h:[sZ.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[s0.variable]:"colors.blackAlpha.100",_dark:{[s0.variable]:"colors.whiteAlpha.100"}},_active:{[s0.variable]:"colors.blackAlpha.200",_dark:{[s0.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:s0.reference},s2={lg:{[sZ.variable]:"sizes.10",fontSize:"md"},md:{[sZ.variable]:"sizes.8",fontSize:"xs"},sm:{[sZ.variable]:"sizes.6",fontSize:"2xs"}},{variants:s5,defaultProps:s3}=av,s4={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm",bg:ag.bg.reference,color:ag.color.reference,boxShadow:ag.shadow.reference},{definePartsStyle:s6,defineMultiStyleConfig:s8}=nA(n3.keys),s9=s8({baseStyle:s6({container:{borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},button:{transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},panel:{pt:"2",px:"4",pb:"5"},icon:{fontSize:"1.25em"}})}),{definePartsStyle:s7,defineMultiStyleConfig:le}=nA(n4.keys),lt=na("alert-fg"),lr=na("alert-bg");function ln(e){let{theme:t,colorScheme:r}=e,n=an(`${r}.200`,.16)(t);return{light:`colors.${r}.100`,dark:n}}var li=le({baseStyle:s7({container:{bg:lr.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:lt.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:lt.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}}),variants:{subtle:s7(e=>{let{colorScheme:t}=e,r=ln(e);return{container:{[lt.variable]:`colors.${t}.500`,[lr.variable]:r.light,_dark:{[lt.variable]:`colors.${t}.200`,[lr.variable]:r.dark}}}}),"left-accent":s7(e=>{let{colorScheme:t}=e,r=ln(e);return{container:{[lt.variable]:`colors.${t}.500`,[lr.variable]:r.light,_dark:{[lt.variable]:`colors.${t}.200`,[lr.variable]:r.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:lt.reference}}}),"top-accent":s7(e=>{let{colorScheme:t}=e,r=ln(e);return{container:{[lt.variable]:`colors.${t}.500`,[lr.variable]:r.light,_dark:{[lt.variable]:`colors.${t}.200`,[lr.variable]:r.dark},pt:"2",borderTopWidth:"4px",borderTopColor:lt.reference}}}),solid:s7(e=>{let{colorScheme:t}=e;return{container:{[lt.variable]:"colors.white",[lr.variable]:`colors.${t}.500`,_dark:{[lt.variable]:"colors.gray.900",[lr.variable]:`colors.${t}.200`},color:lt.reference}}})},defaultProps:{variant:"subtle",colorScheme:"blue"}}),{definePartsStyle:la,defineMultiStyleConfig:lo}=nA(n6.keys),ls=na("avatar-border-color"),ll=na("avatar-bg"),lu=na("avatar-font-size"),lc=na("avatar-size"),ld={borderRadius:"full",border:"0.2em solid",borderColor:ls.reference,[ls.variable]:"white",_dark:{[ls.variable]:"colors.gray.800"}},lf={bg:ll.reference,fontSize:lu.reference,width:lc.reference,height:lc.reference,lineHeight:"1",[ll.variable]:"colors.gray.200",_dark:{[ll.variable]:"colors.whiteAlpha.400"}},lh=e=>{let{name:t,theme:r}=e,n=t?function(e){var t;let r=aa();return!e||i9(e)?r:e.string&&e.colors?function(e,t){let r=0;if(0===e.length)return t[0];for(let t=0;t<e.length;t+=1)r=e.charCodeAt(t)+((r<<5)-r),r&=r;return r=(r%t.length+t.length)%t.length,t[r]}(e.string,e.colors):e.string&&!e.colors?function(e){let t=0;if(0===e.length)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t&=t;let r="#";for(let e=0;e<3;e+=1){let n=t>>8*e&255;r+=`00${n.toString(16)}`.substr(-2)}return r}(e.string):e.colors&&!e.string?(t=e.colors)[Math.floor(Math.random()*t.length)]:r}({string:t}):"colors.gray.400",i=ar(n)(r),a="white";return i||(a="gray.800"),{bg:ll.reference,fontSize:lu.reference,color:a,borderColor:ls.reference,verticalAlign:"top",width:lc.reference,height:lc.reference,"&:not([data-loaded])":{[ll.variable]:n},[ls.variable]:"colors.white",_dark:{[ls.variable]:"colors.gray.800"}}},lp={fontSize:lu.reference,lineHeight:"1"};function lm(e){let t="100%"!==e?nG[e]:void 0;return la({container:{[lc.variable]:null!=t?t:e,[lu.variable]:`calc(${null!=t?t:e} / 2.5)`},excessLabel:{[lc.variable]:null!=t?t:e,[lu.variable]:`calc(${null!=t?t:e} / 2.5)`}})}var lg=lo({baseStyle:la(e=>({badge:a2(ld,e),excessLabel:a2(lf,e),container:a2(lh,e),label:lp})),sizes:{"2xs":lm(4),xs:lm(6),sm:lm(8),md:lm(12),lg:lm(16),xl:lm(24),"2xl":lm(32),full:lm("100%")},defaultProps:{size:"md"}}),lv={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-inverse-text":{_light:"white",_dark:"gray.800"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-subtle-text":{_light:"gray.600",_dark:"gray.400"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},lb={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color"}}},ly={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},lw={semanticTokens:lv,direction:"ltr",...nY,components:{Accordion:s9,Alert:li,Avatar:lg,Badge:av,Breadcrumb:sF,Button:{baseStyle:{lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},variants:{ghost:s$,outline:e=>{let{colorScheme:t}=e,r=iV("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:"gray"===t?r:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...a2(s$,e)}},solid:e=>{var t;let{colorScheme:r}=e;if("gray"===r){let t=iV("gray.100","whiteAlpha.200")(e);return{bg:t,color:iV("gray.800","whiteAlpha.900")(e),_hover:{bg:iV("gray.200","whiteAlpha.300")(e),_disabled:{bg:t}},_active:{bg:iV("gray.300","whiteAlpha.400")(e)}}}let{bg:n=`${r}.500`,color:i="white",hoverBg:a=`${r}.600`,activeBg:o=`${r}.700`}=null!=(t=sB[r])?t:{},s=iV(n,`${r}.200`)(e);return{bg:s,color:iV(i,"gray.800")(e),_hover:{bg:iV(a,`${r}.300`)(e),_disabled:{bg:s}},_active:{bg:iV(o,`${r}.400`)(e)}}},link:e=>{let{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:iV(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:iV(`${t}.700`,`${t}.500`)(e)}}},unstyled:{bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"}},sizes:{lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},Checkbox:oe,CloseButton:{baseStyle:s1,sizes:s2,defaultProps:{size:"md"}},Code:{baseStyle:s4,variants:s5,defaultProps:s3},Container:{baseStyle:{w:"100%",mx:"auto",maxW:"prose",px:"4"}},Divider:{baseStyle:{opacity:.6,borderColor:"inherit"},variants:{solid:{borderStyle:"solid"},dashed:{borderStyle:"dashed"}},defaultProps:{variant:"solid"}},Drawer:s_,Editable:sT,Form:sR,FormError:sz,FormLabel:{baseStyle:{fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}}},Heading:{baseStyle:{fontFamily:"heading",fontWeight:"bold"},sizes:{"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},defaultProps:{size:"xl"}},Input:aF,Kbd:{baseStyle:oM},Link:{baseStyle:{transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}}},List:oj,Menu:oB,Modal:o0,NumberInput:si,PinInput:sa,Popover:sd,Progress:a0,Radio:oi,Select:oc,Skeleton:{baseStyle:oh},SkipLink:{baseStyle:om},Slider:oE,Spinner:{baseStyle:oT,sizes:oP,defaultProps:{size:"md"}},Stat:oR,Switch:iB,Table:iY,Tabs:am,Tag:aI,Textarea:{baseStyle:a$,sizes:aV,variants:aB,defaultProps:{size:"md",variant:"outline"}},Tooltip:{baseStyle:aq},Card:sJ,Stepper:n2},styles:lb,config:ly},lx={semanticTokens:lv,direction:"ltr",components:{},...nY,styles:lb,config:ly},lk=(e,t)=>e.find(e=>e.id===t);function lS(e,t){let r=l_(e,t),n=r?e[r].findIndex(e=>e.id===t):-1;return{position:r,index:n}}function l_(e,t){for(let[r,n]of Object.entries(e))if(lk(n,t))return r}function lE(e,t){let r=(0,eX.useRef)(!1),n=(0,eX.useRef)(!1);(0,eX.useEffect)(()=>{let t=r.current,i=t&&n.current;if(i)return e();n.current=!0},t),(0,eX.useEffect)(()=>(r.current=!0,()=>{r.current=!1}),[])}var eX=(h("acw62"),h("acw62"),h("acw62"),h("acw62"),h("acw62"));/**
 * @public
 */const lC=(0,eX.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});var eX=h("acw62");const lT=(0,eX.createContext)({});var eX=(h("acw62"),h("acw62"));/**
 * @public
 */const lP=(0,eX.createContext)(null);var eX=h("acw62");const lI="undefined"!=typeof document,lA=lI?eX.useLayoutEffect:eX.useEffect;var eX=h("acw62");const lR=(0,eX.createContext)({strict:!1});function lO(e){return"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}var eX=(h("acw62"),h("acw62"));/**
 * Decides if the supplied variable is variant label
 */function lM(e){return"string"==typeof e||Array.isArray(e)}function lN(e){return"object"==typeof e&&"function"==typeof e.start}const lz=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lj=["initial",...lz];function lL(e){return lN(e.animate)||lj.some(t=>lM(e[t]))}function lD(e){return!!(lL(e)||e.variants)}function lF(e){return Array.isArray(e)?e.join(" "):e}const l$={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},lB={};for(const e in l$)lB[e]={isEnabled:t=>l$[e].some(e=>!!t[e])};var eX=h("acw62");const lV=(0,eX.createContext)({});var eX=h("acw62");/**
 * Internal, exported only for usage in Framer
 */const lU=(0,eX.createContext)({}),lW=Symbol.for("motionComponentSymbol"),lH=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lq(e){if(/**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */"string"!=typeof e||/**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */e.includes("-"));else if(lH.indexOf(e)>-1||/**
         * If it contains a capital letter, it's an SVG component
         *//[A-Z]/.test(e))return!0;return!1}var eX=(h("acw62"),h("acw62"));const lG={},lY=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],lK=new Set(lY);function lX(e,{layout:t,layoutId:r}){return lK.has(e)||e.startsWith("origin")||(t||void 0!==r)&&(!!lG[e]||"opacity"===e)}const lQ=e=>!!(e&&e.getVelocity),lJ={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lZ=lY.length,l0=e=>t=>"string"==typeof t&&t.startsWith(e),l1=l0("--"),l2=l0("var(--"),l5=(e,t)=>t&&"number"==typeof e?t.transform(e):e,l3=(e,t,r)=>Math.min(Math.max(r,e),t),l4={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},l6={...l4,transform:e=>l3(0,1,e)},l8={...l4,default:1},l9=e=>Math.round(1e5*e)/1e5,l7=/(-)?([\d]*\.?[\d])+/g,ue=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,ut=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ur(e){return"string"==typeof e}const un=e=>({test:t=>ur(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),ui=un("deg"),ua=un("%"),uo=un("px"),us=un("vh"),ul=un("vw"),uu={...ua,parse:e=>ua.parse(e)/100,transform:e=>ua.transform(100*e)},uc={...l4,transform:Math.round},ud={// Border props
borderWidth:uo,borderTopWidth:uo,borderRightWidth:uo,borderBottomWidth:uo,borderLeftWidth:uo,borderRadius:uo,radius:uo,borderTopLeftRadius:uo,borderTopRightRadius:uo,borderBottomRightRadius:uo,borderBottomLeftRadius:uo,// Positioning props
width:uo,maxWidth:uo,height:uo,maxHeight:uo,size:uo,top:uo,right:uo,bottom:uo,left:uo,// Spacing props
padding:uo,paddingTop:uo,paddingRight:uo,paddingBottom:uo,paddingLeft:uo,margin:uo,marginTop:uo,marginRight:uo,marginBottom:uo,marginLeft:uo,// Transform props
rotate:ui,rotateX:ui,rotateY:ui,rotateZ:ui,scale:l8,scaleX:l8,scaleY:l8,scaleZ:l8,skew:ui,skewX:ui,skewY:ui,distance:uo,translateX:uo,translateY:uo,translateZ:uo,x:uo,y:uo,z:uo,perspective:uo,transformPerspective:uo,opacity:l6,originX:uu,originY:uu,originZ:uo,// Misc
zIndex:uc,// SVG
fillOpacity:l6,strokeOpacity:l6,numOctaves:uc};function uf(e,t,r,n){let{style:i,vars:a,transform:o,transformOrigin:s}=e,l=!1,u=!1,c=!0;/**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */for(let e in t){let r=t[e];/**
         * If this is a CSS variable we don't do any further processing.
         */if(l1(e)){a[e]=r;continue}// Convert the value to its default value type, ie 0 -> "0px"
let n=ud[e],d=l5(r,n);if(lK.has(e)){// If we already know we have a non-default transform, early return
if(// If this is a transform, flag to enable further transform processing
l=!0,o[e]=d,!c)continue;r!==(n.default||0)&&(c=!1)}else e.startsWith("origin")?(// If this is a transform origin, flag and enable further transform-origin processing
u=!0,s[e]=d):i[e]=d}/**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */if(!t.transform&&(l||n?i.transform=/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */function(e,{enableHardwareAcceleration:t=!0,allowTransformNone:r=!0},n,i){// The transform string we're going to build into.
let a="";/**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */for(let t=0;t<lZ;t++){let r=lY[t];if(void 0!==e[r]){let t=lJ[r]||r;a+=`${t}(${e[r]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),i?a=i(e,n?"":a):r&&n&&(a="none"),a}(e.transform,r,c,n):i.transform&&/**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */(i.transform="none")),u){let{originX:e="50%",originY:t="50%",originZ:r=0}=s;i.transformOrigin=`${e} ${t} ${r}`}}const uh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function up(e,t,r){for(let n in t)lQ(t[n])||lX(n,r)||(e[n]=t[n])}function um(e,t,r){// The `any` isn't ideal but it is the type of createElement props argument
let n={},i=function(e,t,r){let n=e.style||{},i={};return(/**
     * Copy non-Motion Values straight into style
     */up(i,n,e),Object.assign(i,function({transformTemplate:e},t,r){return(0,eX.useMemo)(()=>{let n=uh();return uf(n,t,{enableHardwareAcceleration:!r},e),Object.assign({},n.vars,n.style)},[t])}(e,t,r)),e.transformValues?e.transformValues(i):i)}(e,t,r);return e.drag&&!1!==e.dragListener&&(// Disable the ghost element when a user drags
n.draggable=!1,// Disable text selection
i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",// Disable scrolling on the draggable direction
i.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */const ug=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */function uv(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||ug.has(e)}let ub=e=>!uv(e);/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */try{/**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */(mH=h("8RYFI").default)&&// Explicitly filter our events
(ub=e=>e.startsWith("on")?!uv(e):mH(e))}catch(e){// We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}var eX=h("acw62");function uy(e,t,r){return"string"==typeof e?e:uo.transform(t+r*e)}const uw={offset:"stroke-dashoffset",array:"stroke-dasharray"},ux={offset:"strokeDashoffset",array:"strokeDasharray"};/**
 * Build SVG visual attrbutes, like cx and style.transform
 */function uk(e,{attrX:t,attrY:r,attrScale:n,originX:i,originY:a,pathLength:o,pathSpacing:s=1,pathOffset:l=0,...u},c,d,f){/**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */if(uf(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:h,style:p,dimensions:m}=e;h.transform&&(m&&(p.transform=h.transform),delete h.transform),m&&(void 0!==i||void 0!==a||p.transform)&&(p.transformOrigin=/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */function(e,t,r){let n=uy(t,e.x,e.width),i=uy(r,e.y,e.height);return`${n} ${i}`}(m,void 0!==i?i:.5,void 0!==a?a:.5)),void 0!==t&&(h.x=t),void 0!==r&&(h.y=r),void 0!==n&&(h.scale=n),void 0!==o&&/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */function(e,t,r=1,n=0,i=!0){// Normalise path length by setting SVG attribute pathLength to 1
e.pathLength=1;// We use dash case when setting attributes directly to the DOM node and camel case
// when defining props on a React component.
let a=i?uw:ux;// Build the dash offset
e[a.offset]=uo.transform(-n);// Build the dash array
let o=uo.transform(t),s=uo.transform(r);e[a.array]=`${o} ${s}`}(h,o,s,l,!1)}const uS=()=>({...uh(),attrs:{}}),u_=e=>"string"==typeof e&&"svg"===e.toLowerCase();function uE(e,t,r,n){let i=(0,eX.useMemo)(()=>{let r=uS();return uk(r,t,{enableHardwareAcceleration:!1},u_(n),e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){let t={};up(t,e.style,e),i.style={...t,...i.style}}return i}/**
 * Convert camelCase to dash-case properties.
 */const uC=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function uT(e,{style:t,vars:r},n,i){// Loop over any CSS variables and assign those.
for(let a in Object.assign(e.style,t,i&&i.getProjectionStyles(n)),r)e.style.setProperty(a,r[a])}/**
 * A set of attribute names that are always read/written as camel case.
 */const uP=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function uI(e,t,r,n){for(let r in uT(e,t,void 0,n),t.attrs)e.setAttribute(uP.has(r)?r:uC(r),t.attrs[r])}function uA(e,t){let{style:r}=e,n={};for(let i in r)(lQ(r[i])||t.style&&lQ(t.style[i])||lX(i,e))&&(n[i]=r[i]);return n}function uR(e,t){let r=uA(e,t);for(let n in e)if(lQ(e[n])||lQ(t[n])){let t=-1!==lY.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;r[t]=e[n]}return r}function uO(e,t,r,n={},i={}){return"function"==typeof t&&(t=t(void 0!==r?r:e.custom,n,i)),"string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t&&(t=t(void 0!==r?r:e.custom,n,i)),t}var eX=(h("acw62"),h("acw62"));/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */function uM(e){let t=(0,eX.useRef)(null);return null===t.current&&(t.current=e()),t.current}const uN=e=>Array.isArray(e),uz=e=>!!(e&&"object"==typeof e&&e.mix&&e.toValue),uj=e=>uN(e)?e[e.length-1]||0:e;/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */function uL(e){let t=lQ(e)?e.get():e;return uz(t)?t.toValue():t}const uD=e=>(t,r)=>{let n=(0,eX.useContext)(lT),i=(0,eX.useContext)(lP),a=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:r},n,i,a){let o={latestValues:function(e,t,r,n){let i={},a=n(e,{});for(let e in a)i[e]=uL(a[e]);let{initial:o,animate:s}=e,l=lL(e),u=lD(e);t&&u&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let c=!!r&&!1===r.initial;c=c||!1===o;let d=c?s:o;if(d&&"boolean"!=typeof d&&!lN(d)){let t=Array.isArray(d)?d:[d];t.forEach(t=>{let r=uO(e,t);if(!r)return;let{transitionEnd:n,transition:a,...o}=r;for(let e in o){let t=o[e];if(Array.isArray(t)){/**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */let e=c?t.length-1:0;t=t[e]}null!==t&&(i[e]=t)}for(let e in n)i[e]=n[e]})}return i}(n,i,a,e),renderState:t()};return r&&(o.mount=e=>r(n,e,o)),o})(e,t,n,i);return r?a():uM(a)},uF=e=>e;class u${constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){let t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const uB=["prepare","read","update","preRender","render","postRender"],{schedule:uV,cancel:uU,state:uW,steps:uH}=function(e,t){let r=!1,n=!0,i={delta:0,timestamp:0,isProcessing:!1},a=uB.reduce((e,t)=>(e[t]=function(e){/**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */let t=new u$,r=new u$,n=0,i=!1,a=!1,o=new WeakSet,s={/**
         * Schedule a process to run on the next frame.
         */schedule:(e,a=!1,s=!1)=>{let l=s&&i,u=l?t:r;return a&&o.add(e),u.add(e)&&l&&i&&(n=t.order.length),e},/**
         * Cancel the provided callback from running on the next frame.
         */cancel:e=>{r.remove(e),o.delete(e)},/**
         * Execute all schedule callbacks.
         */process:l=>{/**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */if(i){a=!0;return}if(i=!0,[t,r]=[r,t],// Clear the next frame queue
    r.clear(),// Execute this frame
    n=t.order.length)for(let r=0;r<n;r++){let n=t.order[r];n(l),o.has(n)&&(s.schedule(n),e())}i=!1,a&&(a=!1,s.process(l))}};return s}(()=>r=!0),e),{}),o=e=>a[e].process(i),s=()=>{let a=performance.now();r=!1,i.delta=n?1e3/60:Math.max(Math.min(a-i.timestamp,40),1),i.timestamp=a,i.isProcessing=!0,uB.forEach(o),i.isProcessing=!1,r&&t&&(n=!1,e(s))},l=()=>{r=!0,n=!0,i.isProcessing||e(s)},u=uB.reduce((e,t)=>{let n=a[t];return e[t]=(e,t=!1,i=!1)=>(r||l(),n.schedule(e,t,i)),e},{});return{schedule:u,cancel:e=>uB.forEach(t=>a[t].cancel(e)),state:i,steps:a}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:uF,!0),uq={useVisualState:uD({scrapeMotionValuesFromProps:uR,createRenderState:uS,onMount:(e,t,{renderState:r,latestValues:n})=>{uV.read(()=>{try{r.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){// Most likely trying to measure an unrendered element under Firefox
r.dimensions={x:0,y:0,width:0,height:0}}}),uV.render(()=>{uk(r,n,{enableHardwareAcceleration:!1},u_(t.tagName),e.transformTemplate),uI(t,r)})}})},uG={useVisualState:uD({scrapeMotionValuesFromProps:uA,createRenderState:uh})};function uY(e,t,r,n={passive:!0}){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}const uK=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function uX(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const uQ=e=>t=>uK(t)&&e(t,uX(t));function uJ(e,t,r,n){return uY(e,t,uQ(r),n)}/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */const uZ=(e,t)=>r=>t(e(r)),u0=(...e)=>e.reduce(uZ);function u1(e){let t=null;return()=>null===t&&(t=e,()=>{t=null})}const u2=u1("dragHorizontal"),u5=u1("dragVertical");function u3(e){let t=!1;if("y"===e)t=u5();else if("x"===e)t=u2();else{let e=u2(),r=u5();e&&r?t=()=>{e(),r()}:(e&&e(),r&&r())}return t}function u4(){// Check the gesture lock - if we get it, it means no drag gesture is active
// and we can safely fire the tap gesture.
let e=u3(!0);return!e||(e(),!1)}class u6{constructor(e){this.isMounted=!1,this.node=e}update(){}}function u8(e,t){let r="pointer"+(t?"enter":"leave"),n="onHover"+(t?"Start":"End");return uJ(e.current,r,(r,i)=>{if("touch"===r.type||u4())return;let a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[n]&&uV.update(()=>a[n](r,i))},{passive:!e.getProps()[n]})}/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */const u9=(e,t)=>!!t&&(e===t||u9(e,t.parentElement));function u7(e,t){if(!t)return;let r=new PointerEvent("pointer"+e);t(r,uX(r))}/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */const ce=new WeakMap,ct=new WeakMap,cr=e=>{let t=ce.get(e.target);t&&t(e)},cn=e=>{e.forEach(cr)},ci={some:0,all:1};function ca(e,t){if(!Array.isArray(t))return!1;let r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function co(e,t,r){let n=e.getProps();return uO(n,t,void 0!==r?r:n.custom,/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */function(e){let t={};return e.values.forEach((e,r)=>t[r]=e.get()),t}(e),/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */function(e){let t={};return e.values.forEach((e,r)=>t[r]=e.getVelocity()),t}(e))}const cs="data-"+uC("framerAppearId"),cl=e=>1e3*e,cu=e=>e/1e3,cc={current:!1},cd=e=>Array.isArray(e)&&"number"==typeof e[0],cf=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`,ch={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:cf([0,.65,.55,1]),circOut:cf([.55,0,1,.45]),backIn:cf([.31,.01,.66,-.59]),backOut:cf([.33,1.53,.69,.99])},cp=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e;function cm(e,t,r,n){// If this is a linear gradient, return linear easing
if(e===t&&r===n)return uF;let i=t=>(function(e,t,r,n,i){let a,o;let s=0;do(a=cp(o=t+(r-t)/2,n,i)-e)>0?r=o:t=o;while(Math.abs(a)>1e-7&&++s<12)return o})(t,0,1,e,r);// If animation is at start/end, return t without easing
return e=>0===e||1===e?e:cp(i(e),t,n)}const cg=cm(.42,0,1,1),cv=cm(0,0,.58,1),cb=cm(.42,0,.58,1),cy=e=>Array.isArray(e)&&"number"!=typeof e[0],cw=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,cx=e=>t=>1-e(1-t),ck=e=>1-Math.sin(Math.acos(e)),cS=cx(ck),c_=cw(cS),cE=cm(.33,1.53,.69,.99),cC=cx(cE),cT=cw(cC),cP={linear:uF,easeIn:cg,easeInOut:cb,easeOut:cv,circIn:ck,circInOut:c_,circOut:cS,backIn:cC,backInOut:cT,backOut:cE,anticipate:e=>(e*=2)<1?.5*cC(e):.5*(2-Math.pow(2,-10*(e-1)))},cI=e=>{if(Array.isArray(e)){uF(4===e.length,"Cubic bezier arrays must contain four numerical values.");let[t,r,n,i]=e;return cm(t,r,n,i)}return"string"==typeof e?(uF(void 0!==cP[e],`Invalid easing type '${e}'`),cP[e]):e},cA=(e,t)=>r=>!!(ur(r)&&ut.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),cR=(e,t,r)=>n=>{if(!ur(n))return n;let[i,a,o,s]=n.match(l7);return{[e]:parseFloat(i),[t]:parseFloat(a),[r]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},cO=e=>l3(0,255,e),cM={...l4,transform:e=>Math.round(cO(e))},cN={test:cA("rgb","red"),parse:cR("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:n=1})=>"rgba("+cM.transform(e)+", "+cM.transform(t)+", "+cM.transform(r)+", "+l9(l6.transform(n))+")"},cz={test:cA("#"),parse:function(e){let t="",r="",n="",i="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),i=e.substring(4,5),t+=t,r+=r,n+=n,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}},transform:cN.transform},cj={test:cA("hsl","hue"),parse:cR("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:n=1})=>"hsla("+Math.round(e)+", "+ua.transform(l9(t))+", "+ua.transform(l9(r))+", "+l9(l6.transform(n))+")"},cL={test:e=>cN.test(e)||cz.test(e)||cj.test(e),parse:e=>cN.test(e)?cN.parse(e):cj.test(e)?cj.parse(e):cz.parse(e),transform:e=>ur(e)?e:e.hasOwnProperty("red")?cN.transform(e):cj.transform(e)},cD=(e,t,r)=>-r*e+r*t+e;// Adapted from https://gist.github.com/mjackson/5311256
function cF(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const c$=(e,t,r)=>{let n=e*e;return Math.sqrt(Math.max(0,r*(t*t-n)+n))},cB=[cz,cN,cj],cV=e=>cB.find(t=>t.test(e));function cU(e){let t=cV(e);uF(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`);let r=t.parse(e);return t===cj&&(r=function({hue:e,saturation:t,lightness:r,alpha:n}){e/=360,r/=100;let i=0,a=0,o=0;if(t/=100){let n=r<.5?r*(1+t):r+t-r*t,s=2*r-n;i=cF(s,n,e+1/3),a=cF(s,n,e),o=cF(s,n,e-1/3)}else i=a=o=r;return{red:Math.round(255*i),green:Math.round(255*a),blue:Math.round(255*o),alpha:n}}(r)),r}const cW=(e,t)=>{let r=cU(e),n=cU(t),i={...r};return e=>(i.red=c$(r.red,n.red,e),i.green=c$(r.green,n.green,e),i.blue=c$(r.blue,n.blue,e),i.alpha=cD(r.alpha,n.alpha,e),cN.transform(i))},cH={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:uF},cq={regex:ue,countKey:"Colors",token:"${c}",parse:cL.parse},cG={regex:l7,countKey:"Numbers",token:"${n}",parse:l4.parse};function cY(e,{regex:t,countKey:r,token:n,parse:i}){let a=e.tokenised.match(t);a&&(e["num"+r]=a.length,e.tokenised=e.tokenised.replace(t,n),e.values.push(...a.map(i)))}function cK(e){let t=e.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&cY(r,cH),cY(r,cq),cY(r,cG),r}function cX(e){return cK(e).values}function cQ(e){let{values:t,numColors:r,numVars:n,tokenised:i}=cK(e),a=t.length;return e=>{let t=i;for(let i=0;i<a;i++)t=i<n?t.replace(cH.token,e[i]):i<n+r?t.replace(cq.token,cL.transform(e[i])):t.replace(cG.token,l9(e[i]));return t}}const cJ=e=>"number"==typeof e?0:e,cZ={test:function(e){var t,r;return isNaN(e)&&ur(e)&&((null===(t=e.match(l7))||void 0===t?void 0:t.length)||0)+((null===(r=e.match(ue))||void 0===r?void 0:r.length)||0)>0},parse:cX,createTransformer:cQ,getAnimatableNone:function(e){let t=cX(e),r=cQ(e);return r(t.map(cJ))}},c0=(e,t)=>r=>`${r>0?t:e}`;function c1(e,t){return"number"==typeof e?r=>cD(e,t,r):cL.test(e)?cW(e,t):e.startsWith("var(")?c0(e,t):c3(e,t)}const c2=(e,t)=>{let r=[...e],n=r.length,i=e.map((e,r)=>c1(e,t[r]));return e=>{for(let t=0;t<n;t++)r[t]=i[t](e);return r}},c5=(e,t)=>{let r={...e,...t},n={};for(let i in r)void 0!==e[i]&&void 0!==t[i]&&(n[i]=c1(e[i],t[i]));return e=>{for(let t in n)r[t]=n[t](e);return r}},c3=(e,t)=>{let r=cZ.createTransformer(t),n=cK(e),i=cK(t),a=n.numVars===i.numVars&&n.numColors===i.numColors&&n.numNumbers>=i.numNumbers;return a?u0(c2(n.values,i.values),r):(uF(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),c0(e,t))},c4=(e,t,r)=>{let n=t-e;return 0===n?1:(r-e)/n},c6=(e,t)=>r=>cD(e,t,r);/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */function c8(e,t,{clamp:r=!0,ease:n,mixer:i}={}){let a=e.length;/**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */if(uF(a===t.length,"Both input and output ranges must be the same length"),1===a)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let o=function(e,t,r){let n=[],i=r||function(e){if("number"==typeof e);else if("string"==typeof e)return cL.test(e)?cW:c3;else if(Array.isArray(e))return c2;else if("object"==typeof e)return c5;return c6}(e[0]),a=e.length-1;for(let r=0;r<a;r++){let a=i(e[r],e[r+1]);if(t){let e=Array.isArray(t)?t[r]||uF:t;a=u0(e,a)}n.push(a)}return n}(t,n,i),s=o.length,l=t=>{let r=0;if(s>1)for(;r<e.length-2&&!(t<e[r+1]);r++);let n=c4(e[r],e[r+1],t);return o[r](n)};return r?t=>l(l3(e[0],e[a-1],t)):l}function c9({duration:e=300,keyframes:t,times:r,ease:n="easeInOut"}){/**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */let i=cy(n)?n.map(cI):cI(n),a={done:!1,value:t[0]},o=// TODO Maybe we should warn here if there's a length mismatch
(r&&r.length===t.length?r:function(e){let t=[0];return function(e,t){let r=e[e.length-1];for(let n=1;n<=t;n++){let i=c4(0,t,n);e.push(cD(r,1,i))}}(t,e.length-1),t}(t)).map(t=>t*e),s=c8(o,t,{ease:Array.isArray(i)?i:t.map(()=>i||cb).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(a.value=s(t),a.done=t>=e,a)}}function c7(e,t,r){var n,i;let a=Math.max(t-5,0);return n=r-e(a),(i=t-a)?n*(1e3/i):0}function de(e,t){return e*Math.sqrt(1-t*t)}const dt=["duration","bounce"],dr=["stiffness","damping","mass"];function dn(e,t){return t.some(t=>void 0!==e[t])}function di({keyframes:e,restDelta:t,restSpeed:r,...n}){let i;let a=e[0],o=e[e.length-1],s={done:!1,value:a},{stiffness:l,damping:u,mass:c,velocity:d,duration:f,isResolvedFromDuration:h}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};// stiffness/damping/mass overrides duration/bounce
if(!dn(e,dr)&&dn(e,dt)){let r=function({duration:e=800,bounce:t=.25,velocity:r=0,mass:n=1}){let i,a;uF(e<=cl(10),"Spring duration must be 10 seconds or less");let o=1-t;/**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */o=l3(.05,1,o),e=l3(.01,10,cu(e)),o<1?(/**
         * Underdamped spring
         */i=t=>{let n=t*o,i=n*e,a=de(t,o);return .001-(n-r)/a*Math.exp(-i)},a=t=>{let n=t*o,a=n*e,s=Math.pow(o,2)*Math.pow(t,2)*e,l=de(Math.pow(t,2),o),u=-i(t)+.001>0?-1:1;return u*((a*r+r-s)*Math.exp(-a))/l}):(/**
         * Critically-damped spring
         */i=t=>{let n=Math.exp(-t*e),i=(t-r)*e+1;return -.001+n*i},a=t=>{let n=Math.exp(-t*e),i=(r-t)*(e*e);return n*i});let s=5/e,l=function(e,t,r){let n=r;for(let r=1;r<12;r++)n-=e(n)/t(n);return n}(i,a,s);if(e=cl(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(l,2)*n;return{stiffness:t,damping:2*o*Math.sqrt(n*t),duration:e}}}(e);(t={...t,...r,velocity:0,mass:1}).isResolvedFromDuration=!0}return t}(n),p=d?-cu(d):0,m=u/(2*Math.sqrt(l*c)),g=o-a,v=cu(Math.sqrt(l/c)),b=5>Math.abs(g);if(r||(r=b?.01:2),t||(t=b?.005:.5),m<1){let e=de(v,m);// Underdamped spring
i=t=>{let r=Math.exp(-m*v*t);return o-r*((p+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)i=e=>o-Math.exp(-v*e)*(g+(p+v*g)*e);else{// Overdamped spring
let e=v*Math.sqrt(m*m-1);i=t=>{let r=Math.exp(-m*v*t),n=Math.min(e*t,300);return o-r*((p+m*v*g)*Math.sinh(n)+e*g*Math.cosh(n))/e}}return{calculatedDuration:h&&f||null,next:e=>{let n=i(e);if(h)s.done=e>=f;else{let a=p;0!==e&&(a=m<1?c7(i,e,n):0);let l=Math.abs(a)<=r,u=Math.abs(o-n)<=t;s.done=l&&u}return s.value=s.done?o:n,s}}}function da({keyframes:e,velocity:t=0,power:r=.8,timeConstant:n=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:l,restDelta:u=.5,restSpeed:c}){let d,f;let h=e[0],p={done:!1,value:h},m=e=>void 0!==s&&e<s||void 0!==l&&e>l,g=e=>void 0===s?l:void 0===l?s:Math.abs(s-e)<Math.abs(l-e)?s:l,v=r*t,b=h+v,y=void 0===o?b:o(b);y!==b&&(v=y-h);let w=e=>-v*Math.exp(-e/n),x=e=>y+w(e),k=e=>{let t=w(e),r=x(e);p.done=Math.abs(t)<=u,p.value=p.done?y:r},S=e=>{m(p.value)&&(d=e,f=di({keyframes:[p.value,g(p.value)],velocity:c7(x,e,p.value),damping:i,stiffness:a,restDelta:u,restSpeed:c}))};return S(0),{calculatedDuration:null,next:e=>{/**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */let t=!1;return(/**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */(f||void 0!==d||(t=!0,k(e),S(e)),void 0!==d&&e>d)?f.next(e-d):(t||k(e),p))}}}const ds=e=>{let t=({timestamp:t})=>e(t);return{start:()=>uV.update(t,!0),stop:()=>uU(t),/**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */now:()=>uW.isProcessing?uW.timestamp:performance.now()}};function dl(e){let t=0,r=e.next(t);for(;!r.done&&t<2e4;)t+=50,r=e.next(t);return t>=2e4?1/0:t}const du={decay:da,inertia:da,tween:c9,keyframes:c9,spring:di};/**
 * Animate a single value on the main thread.
 *
 * This function is written, where functionality overlaps,
 * to be largely spec-compliant with WAAPI to allow fungibility
 * between the two.
 */function dc({autoplay:e=!0,delay:t=0,driver:r=ds,keyframes:n,type:i="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:s="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...f}){let h,p,m,g,v,b=1,y=!1,w=()=>{p=new Promise(e=>{h=e})};// Create the first finished promise
w();let x=du[i]||c9;x!==c9&&"number"!=typeof n[0]&&(g=c8([0,100],n,{clamp:!1}),n=[0,100]);let k=x({...f,keyframes:n});"mirror"===s&&(v=x({...f,keyframes:[...n].reverse(),velocity:-(f.velocity||0)}));let S="idle",_=null,E=null,C=null;/**
     * If duration is undefined and we have repeat options,
     * we need to calculate a duration from the generator.
     *
     * We set it to the generator itself to cache the duration.
     * Any timeline resolver will need to have already precalculated
     * the duration by this step.
     */null===k.calculatedDuration&&a&&(k.calculatedDuration=dl(k));let{calculatedDuration:T}=k,P=1/0,I=1/0;null!==T&&(I=(P=T+o)*(a+1)-o);let A=0,R=e=>{if(null===E)return;b>0&&(E=Math.min(E,e)),b<0&&(E=Math.min(e-I/b,E)),A=null!==_?_:Math.round(e-E)*b;// Rebase on delay
let r=A-t*(b>=0?1:-1),i=b>=0?r<0:r>I;A=Math.max(r,0),"finished"===S&&null===_&&(A=I);let l=A,u=k;if(a){/**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */let e=A/P,t=Math.floor(e),r=e%1;!r&&e>=1&&(r=1),1===r&&t--,t=Math.min(t,a+1);/**
             * Reverse progress if we're not running in "normal" direction
             */let n=!!(t%2);n&&("reverse"===s?(r=1-r,o&&(r-=o/P)):"mirror"===s&&(u=v));let i=l3(0,1,r);A>I&&(i="reverse"===s&&n?1:0),l=i*P}/**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */let c=i?{done:!1,value:n[0]}:u.next(l);g&&(c.value=g(c.value));let{done:f}=c;i||null===T||(f=b>=0?A>=I:A<=0);let h=null===_&&("finished"===S||"running"===S&&f);return d&&d(c.value),h&&N(),c},O=()=>{m&&m.stop(),m=void 0},M=()=>{S="idle",O(),h(),w(),E=C=null},N=()=>{S="finished",c&&c(),O(),h()},z=()=>{if(y)return;m||(m=r(R));let e=m.now();l&&l(),null!==_?E=e-_:E&&"finished"!==S||(E=e),"finished"===S&&w(),C=E,_=null,/**
         * Set playState to running only after we've used it in
         * the previous logic.
         */S="running",m.start()};e&&z();let j={then:(e,t)=>p.then(e,t),get time(){return cu(A)},set time(newTime){A=newTime=cl(newTime),null===_&&m&&0!==b?E=m.now()-newTime/b:_=newTime},get duration(){let e=null===k.calculatedDuration?dl(k):k.calculatedDuration;return cu(e)},get speed(){return b},set speed(newSpeed){if(newSpeed===b||!m)return;b=newSpeed,j.time=cu(A)},get state(){return S},play:z,pause:()=>{S="paused",_=A},stop:()=>{y=!0,"idle"!==S&&(S="idle",u&&u(),M())},cancel:()=>{null!==C&&R(C),M()},complete:()=>{S="finished"},sample:e=>(E=0,R(e))};return j}const dd=(mq=()=>Object.hasOwnProperty.call(Element.prototype,"animate"),()=>(void 0===r&&(r=mq()),r)),df=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),dh=(e,t)=>"spring"===t.type||"backgroundColor"===e||!function e(t){return!!(!t||"string"==typeof t&&ch[t]||cd(t)||Array.isArray(t)&&t.every(e))}(t.ease),dp={type:"spring",stiffness:500,damping:25,restSpeed:10},dm=e=>({type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}),dg={type:"keyframes",duration:.8},dv={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},db=(e,{keyframes:t})=>t.length>2?dg:lK.has(e)?e.startsWith("scale")?dm(t[1]):dp:dv,dy=(e,t)=>// If the list of keys tat might be non-animatable grows, replace with Set
    "zIndex"!==e&&!!("number"==typeof t||Array.isArray(t)||"string"==typeof t&&// It's animatable if we have a string
    (cZ.test(t)||"0"===t)&&// And it contains numbers and/or colors
    !t.startsWith("url(")// Unless it starts with "url("
    ),dw=new Set(["brightness","contrast","saturate","opacity"]);function dx(e){let[t,r]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[n]=r.match(l7)||[];if(!n)return e;let i=r.replace(n,""),a=dw.has(t)?1:0;return n!==r&&(a*=100),t+"("+a+i+")"}const dk=/([a-z-]*)\(.*?\)/g,dS={...cZ,getAnimatableNone:e=>{let t=e.match(dk);return t?t.map(dx).join(" "):e}},d_={...ud,color:cL,backgroundColor:cL,outlineColor:cL,fill:cL,stroke:cL,// Border props
borderColor:cL,borderTopColor:cL,borderRightColor:cL,borderBottomColor:cL,borderLeftColor:cL,filter:dS,WebkitFilter:dS},dE=e=>d_[e];function dC(e,t){let r=dE(e);// If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
return r!==dS&&(r=cZ),r.getAnimatableNone?r.getAnimatableNone(t):void 0}/**
 * Check if the value is a zero value string like "0px" or "0%"
 */const dT=e=>/^0[^.\s]+$/.test(e);function dP(e,t){return e[t]||e.default||e}const dI=(e,t,r,n={})=>i=>{let a=dP(n,e)||{},o=a.delay||n.delay||0,{elapsed:s=0}=n;s-=cl(o);let l=function(e,t,r,n){let i,a;let o=dy(t,r);i=Array.isArray(r)?[...r]:[null,r];let s=void 0!==n.from?n.from:e.get(),l=[];for(let e=0;e<i.length;e++){var u;null===i[e]&&(i[e]=0===e?s:i[e-1]),("number"==typeof(u=i[e])?0===u:null!==u?"none"===u||"0"===u||dT(u):void 0)&&l.push(e),"string"==typeof i[e]&&"none"!==i[e]&&"0"!==i[e]&&(a=i[e])}if(o&&l.length&&a)for(let e=0;e<l.length;e++){let r=l[e];i[r]=dC(t,a)}return i}(t,e,r,a),u=l[0],c=l[l.length-1],d=dy(e,u),f=dy(e,c);uF(d===f,`You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-s,onUpdate:e=>{t.set(e),a.onUpdate&&a.onUpdate(e)},onComplete:()=>{i(),a.onComplete&&a.onComplete()}};if(!/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */function({when:e,delay:t,delayChildren:r,staggerChildren:n,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(a)&&(h={...h,...db(e,h)}),h.duration&&(h.duration=cl(h.duration)),h.repeatDelay&&(h.repeatDelay=cl(h.repeatDelay)),!d||!f||cc.current||!1===a.type)/**
             * If we can't animate this value, or the global instant animation flag is set,
             * or this is simply defined as an instant transition, return an instant transition.
             */return function({keyframes:e,delay:t,onUpdate:r,onComplete:n}){let i=()=>(r&&r(e[e.length-1]),n&&n(),{time:0,speed:1,duration:0,play:uF,pause:uF,stop:uF,then:e=>(e(),Promise.resolve()),cancel:uF,complete:uF});return t?dc({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}(cc.current?{...h,delay:0}:h);/**
         * Animate via WAAPI if possible.
         */if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){let r=function(e,t,{onUpdate:r,onComplete:n,...i}){let a,o;let s=dd()&&df.has(t)&&!i.repeatDelay&&"mirror"!==i.repeatType&&0!==i.damping&&"inertia"!==i.type;if(!s)return!1;/**
     * TODO: Unify with js/index
     */let l=!1,u=()=>{o=new Promise(e=>{a=e})};// Create the first finished promise
    u();let{keyframes:c,duration:d=300,ease:f,times:h}=i;/**
     * If this animation needs pre-generated keyframes then generate.
     */if(dh(t,i)){let e=dc({...i,repeat:0,delay:0}),t={done:!1,value:c[0]},r=[],n=0;for(;!t.done&&n<2e4;)t=e.sample(n),r.push(t.value),n+=10;h=void 0,c=r,d=n-10,f="linear"}let p=function(e,t,r,{delay:n=0,duration:i,repeat:a=0,repeatType:o="loop",ease:s,times:l}={}){let u={[t]:r};l&&(u.offset=l);let c=function e(t){if(t)return cd(t)?cf(t):Array.isArray(t)?t.map(e):ch[t]}(s);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:n,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"})}(e.owner.current,t,c,{...i,duration:d,/**
         * This function is currently not called if ease is provided
         * as a function so the cast is safe.
         *
         * However it would be possible for a future refinement to port
         * in easing pregeneration from Motion One for browsers that
         * support the upcoming `linear()` easing function.
         */ease:f,times:h});/**
     * WAAPI animations don't resolve startTime synchronously. But a blocked
     * thread could delay the startTime resolution by a noticeable amount.
     * For synching handoff animations with the new Motion animation we want
     * to ensure startTime is synchronously set.
     */i.syncStart&&(p.startTime=uW.isProcessing?uW.timestamp:document.timeline?document.timeline.currentTime:performance.now());let m=()=>p.cancel(),g=()=>{uV.update(m),a(),u()};return(/**
     * Prefer the `onfinish` prop as it's more widely supported than
     * the `finished` promise.
     *
     * Here, we synchronously set the provided MotionValue to the end
     * keyframe. If we didn't, when the WAAPI animation is finished it would
     * be removed from the element which would then revert to its old styles.
     */p.onfinish=()=>{e.set(function(e,{repeat:t,repeatType:r="loop"}){let n=t&&"loop"!==r&&t%2==1?0:e.length-1;return e[n]}(c,i)),n&&n(),g()},{then:(e,t)=>o.then(e,t),attachTimeline:e=>(p.timeline=e,p.onfinish=null,uF),get time(){return cu(p.currentTime||0)},set time(newTime){p.currentTime=cl(newTime)},get speed(){return p.playbackRate},set speed(newSpeed){p.playbackRate=newSpeed},get duration(){return cu(d)},play:()=>{l||(p.play(),uU(m))},pause:()=>p.pause(),stop:()=>{if(l=!0,"idle"===p.playState)return;/**
             * WAAPI doesn't natively have any interruption capabilities.
             *
             * Rather than read commited styles back out of the DOM, we can
             * create a renderless JS animation and sample it twice to calculate
             * its current value, "previous" value, and therefore allow
             * Motion to calculate velocity for any subsequent animation.
             */let{currentTime:t}=p;if(t){let r=dc({...i,autoplay:!1});e.setWithVelocity(r.sample(t-10).value,r.sample(t).value,10)}g()},complete:()=>p.finish(),cancel:g})}(t,e,h);if(r)return r}/**
         * If we didn't create an accelerated animation, create a JS animation
         */return dc(h)};function dA(e){return!!(lQ(e)&&e.add)}/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */const dR=e=>/^\-?\d*\.?\d+$/.test(e);function dO(e,t){-1===e.indexOf(t)&&e.push(t)}function dM(e,t){let r=e.indexOf(t);r>-1&&e.splice(r,1)}class dN{constructor(){this.subscriptions=[]}add(e){return dO(this.subscriptions,e),()=>dM(this.subscriptions,e)}notify(e,t,r){let n=this.subscriptions.length;if(n){if(1===n)/**
             * If there's only a single handler we can just call it without invoking a loop.
             */this.subscriptions[0](e,t,r);else for(let i=0;i<n;i++){/**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */let n=this.subscriptions[i];n&&n(e,t,r)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const dz=e=>!isNaN(parseFloat(e)),dj={current:void 0};/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */class dL{/**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */constructor(e,t={}){/**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */this.version="10.16.4",/**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */this.timeDelta=0,/**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */this.lastUpdated=0,/**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */this.canTrackVelocity=!1,/**
         * An object containing a SubscriptionManager for each active event.
         */this.events={},this.updateAndNotify=(e,t=!0)=>{this.prev=this.current,this.current=e;// Update timestamp
let{delta:r,timestamp:n}=uW;this.lastUpdated!==n&&(this.timeDelta=r,this.lastUpdated=n,uV.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},/**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */this.scheduleVelocityCheck=()=>uV.postRender(this.velocityCheck),/**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */this.velocityCheck=({timestamp:e})=>{e!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=dz(this.current),this.owner=t.owner}/**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new dN);let r=this.events[e].add(t);return"change"===e?()=>{r(),uV.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(let e in this.events)this.events[e].clear()}/**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}/**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,r){this.set(t),this.prev=e,this.timeDelta=r}/**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}/**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */get(){return dj.current&&dj.current.push(this),this.current}/**
     * @public
     */getPrevious(){return this.prev}/**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */getVelocity(){var e,t;// This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
return this.canTrackVelocity?(e=parseFloat(this.current)-parseFloat(this.prev),(t=this.timeDelta)?e*(1e3/t):0):0}/**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}/**
     * Stop the currently active animation.
     *
     * @public
     */stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}/**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}/**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function dD(e,t){return new dL(e,t)}/**
 * Tests a provided value against a ValueType
 */const dF=e=>t=>t.test(e),d$=[l4,uo,ua,ui,ul,us,{test:e=>"auto"===e,parse:e=>e}],dB=e=>d$.find(dF(e)),dV=[...d$,cL,cZ],dU=e=>dV.find(dF(e));function dW(e,t,{delay:r=0,transitionOverride:n,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=e.makeTargetAnimatable(t),l=e.getValue("willChange");n&&(a=n);let u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let n=e.getValue(t),i=s[t];if(!n||void 0===i||c&&/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */function({protectedKeys:e,needsAnimating:t},r){let n=e.hasOwnProperty(r)&&!0!==t[r];return t[r]=!1,n}(c,t))continue;let o={delay:r,elapsed:0,...a};/**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */if(window.HandoffAppearAnimations&&!n.hasAnimated){let r=e.getProps()[cs];r&&(o.elapsed=window.HandoffAppearAnimations(r,t,n,uV),o.syncStart=!0)}n.start(dI(t,n,i,e.shouldReduceMotion&&lK.has(t)?{type:!1}:o));let d=n.animation;dA(l)&&(l.add(t),d.then(()=>l.remove(t))),u.push(d)}return o&&Promise.all(u).then(()=>{o&&function(e,t){let r=co(e,t),{transitionEnd:n={},transition:i={},...a}=r?e.makeTargetAnimatable(r,!1):{};for(let t in a={...a,...n}){let r=uj(a[t]);e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,dD(r))}}(e,o)}),u}function dH(e,t,r={}){let n=co(e,t,r.custom),{transition:i=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(i=r.transitionOverride);/**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */let a=n?()=>Promise.all(dW(e,n,r)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(n=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t,r=0,n=0,i=1,a){let o=[],s=(e.variantChildren.size-1)*n,l=1===i?(e=0)=>e*n:(e=0)=>s-e*n;return Array.from(e.variantChildren).sort(dq).forEach((e,n)=>{e.notify("AnimationStart",t),o.push(dH(e,t,{...a,delay:r+l(n)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(o)}(e,t,a+n,o,s,r)}:()=>Promise.resolve(),{when:s}=i;if(!s)return Promise.all([a(),o(r.delay)]);{let[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then(()=>t())}}function dq(e,t){return e.sortNodePosition(t)}const dG=[...lz].reverse(),dY=lz.length;function dK(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let dX=0;const dQ=(e,t)=>Math.abs(e-t);/**
 * @internal
 */class dJ{constructor(e,t,{transformPagePoint:r}={}){// If we have more than one touch, don't start detecting this gesture
if(/**
         * @internal
         */this.startEvent=null,/**
         * @internal
         */this.lastMoveEvent=null,/**
         * @internal
         */this.lastMoveEventInfo=null,/**
         * @internal
         */this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=d1(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,r=function(e,t){// Multi-dimensional
let r=dQ(e.x,t.x),n=dQ(e.y,t.y);return Math.sqrt(r**2+n**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!r)return;let{point:n}=e,{timestamp:i}=uW;this.history.push({...n,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=dZ(t,this.transformPagePoint),uV.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let{onEnd:r,onSessionEnd:n}=this.handlers,i=d1("pointercancel"===e.type?this.lastMoveEventInfo:dZ(t,this.transformPagePoint),this.history);this.startEvent&&r&&r(e,i),n&&n(e,i)},!uK(e))return;this.handlers=t,this.transformPagePoint=r;let n=uX(e),i=dZ(n,this.transformPagePoint),{point:a}=i,{timestamp:o}=uW;this.history=[{...a,timestamp:o}];let{onSessionStart:s}=t;s&&s(e,d1(i,this.history)),this.removeListeners=u0(uJ(window,"pointermove",this.handlePointerMove),uJ(window,"pointerup",this.handlePointerUp),uJ(window,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),uU(this.updatePoint)}}function dZ(e,t){return t?{point:t(e.point)}:e}function d0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function d1({point:e},t){return{point:e,delta:d0(e,d2(t)),offset:d0(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null,i=d2(e);for(;r>=0&&(n=e[r],!(i.timestamp-n.timestamp>cl(.1)));)r--;if(!n)return{x:0,y:0};let a=cu(i.timestamp-n.timestamp);if(0===a)return{x:0,y:0};let o={x:(i.x-n.x)/a,y:(i.y-n.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}(t,0)}}function d2(e){return e[e.length-1]}function d5(e){return e.max-e.min}function d3(e,t=0,r=.01){return Math.abs(e-t)<=r}function d4(e,t,r,n=.5){e.origin=n,e.originPoint=cD(t.min,t.max,e.origin),e.scale=d5(r)/d5(t),(d3(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=cD(r.min,r.max,e.origin)-e.originPoint,(d3(e.translate)||isNaN(e.translate))&&(e.translate=0)}function d6(e,t,r,n){d4(e.x,t.x,r.x,n?n.originX:void 0),d4(e.y,t.y,r.y,n?n.originY:void 0)}function d8(e,t,r){e.min=r.min+t.min,e.max=e.min+d5(t)}function d9(e,t,r){e.min=t.min-r.min,e.max=e.min+d5(t)}function d7(e,t,r){d9(e.x,t.x,r.x),d9(e.y,t.y,r.y)}/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */function fe(e,t,r){return{min:void 0!==t?e.min+t:void 0,max:void 0!==r?e.max+r-(e.max-e.min):void 0}}/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */function ft(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}function fr(e,t,r){return{min:fn(e,t),max:fn(e,r)}}function fn(e,t){return"number"==typeof e?e:e[t]||0}const fi=()=>({translate:0,scale:1,origin:0,originPoint:0}),fa=()=>({x:fi(),y:fi()}),fo=()=>({min:0,max:0}),fs=()=>({x:fo(),y:fo()});function fl(e){return[e("x"),e("y")]}/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */function fu({top:e,left:t,right:r,bottom:n}){return{x:{min:t,max:r},y:{min:e,max:n}}}function fc(e){return void 0===e||1===e}function fd({scale:e,scaleX:t,scaleY:r}){return!fc(e)||!fc(t)||!fc(r)}function ff(e){return fd(e)||fh(e)||e.z||e.rotate||e.rotateX||e.rotateY}function fh(e){var t,r;return(t=e.x)&&"0%"!==t||(r=e.y)&&"0%"!==r}/**
 * Applies a translate/scale delta to a point
 */function fp(e,t,r,n,i){return void 0!==i&&(e=n+i*(e-n)),n+r*(e-n)+t}/**
 * Applies a translate/scale delta to an axis
 */function fm(e,t=0,r=1,n,i){e.min=fp(e.min,t,r,n,i),e.max=fp(e.max,t,r,n,i)}/**
 * Applies a translate/scale delta to a box
 */function fg(e,{x:t,y:r}){fm(e.x,t.translate,t.scale,t.originPoint),fm(e.y,r.translate,r.scale,r.originPoint)}function fv(e){return Number.isInteger(e)?e:e>1.0000000000001||e<.999999999999?e:1}function fb(e,t){e.min=e.min+t,e.max=e.max+t}/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */function fy(e,t,[r,n,i]){let a=void 0!==t[i]?t[i]:.5,o=cD(e.min,e.max,a);// Apply the axis delta to the final axis
fm(e,t[r],t[n],o,t.scale)}/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */const fw=["x","scaleX","originX"],fx=["y","scaleY","originY"];/**
 * Apply a transform to a box from the latest resolved motion values.
 */function fk(e,t){fy(e.x,t,fw),fy(e.y,t,fx)}function fS(e,t){return fu(/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */function(e,t){if(!t)return e;let r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}(e.getBoundingClientRect(),t))}const f_=new WeakMap;/**
 *
 */// let latestPointerEvent: PointerEvent
class fE{constructor(e){// This is a reference to the global drag gesture lock, ensuring only one component
// can "capture" the drag of one or both axes.
// TODO: Look into moving this into pansession?
this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},/**
         * The permitted boundaries of travel, in pixels.
         */this.constraints=!1,this.hasMutatedConstraints=!1,/**
         * The per-axis resolved elastic values.
         */this.elastic=fs(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){/**
         * Don't start dragging if this component is exiting
         */let{presenceContext:r}=this.visualElement;r&&!1===r.isPresent||(this.panSession=new dJ(e,{onSessionStart:e=>{// Stop any animations on both axis values immediately. This allows the user to throw and catch
// the component.
this.stopAnimation(),t&&this.snapToCursor(uX(e,"page").point)},onStart:(e,t)=>{// Attempt to grab the global drag gesture lock - maybe make this part of PanSession
let{drag:r,dragPropagation:n,onDragStart:i}=this.getProps();if(r&&!n&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=u3(r),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),fl(e=>{let t=this.getAxisMotionValue(e).get()||0;/**
                 * If the MotionValue is a percentage value convert to px
                 */if(ua.test(t)){let{projection:r}=this.visualElement;if(r&&r.layout){let n=r.layout.layoutBox[e];if(n){let e=d5(n);t=e*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&uV.update(()=>i(e,t),!1,!0);let{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{// latestPointerEvent = event
let{dragPropagation:r,dragDirectionLock:n,onDirectionLock:i,onDrag:a}=this.getProps();// If we didn't successfully receive the gesture lock, early return.
if(!r&&!this.openGlobalLock)return;let{offset:o}=t;// Attempt to detect drag direction if directionLock is true
if(n&&null===this.currentDirection){this.currentDirection=/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */function(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}(o),null!==this.currentDirection&&i&&i(this.currentDirection);return}// Update each point with the latest position
this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),/**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */this.visualElement.render(),/**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t)},{transformPagePoint:this.visualElement.getTransformPagePoint()}))}stop(e,t){let r=this.isDragging;if(this.cancel(),!r)return;let{velocity:n}=t;this.startAnimation(n);let{onDragEnd:i}=this.getProps();i&&uV.update(()=>i(e,t))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){let{drag:n}=this.getProps();// If we're not dragging this axis, do an early return.
if(!r||!fC(e,n,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(a=/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */function(e,{min:t,max:r},n){return void 0!==t&&e<t?e=n?cD(t,e,n.min):Math.max(e,t):void 0!==r&&e>r&&(e=n?cD(r,e,n.max):Math.min(e,r)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),{layout:r}=this.visualElement.projection||{},n=this.constraints;e&&lO(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */function(e,{top:t,left:r,bottom:n,right:i}){return{x:fe(e.x,r,i),y:fe(e.y,t,n)}}(r.layoutBox,e):this.constraints=!1,this.elastic=/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:fr(e,"left","right"),y:fr(e,"top","bottom")}}(t),n!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&fl(e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */function(e,t){let r={};return void 0!==t.min&&(r.min=t.min-e.min),void 0!==t.max&&(r.max=t.max-e.min),r}(r.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!lO(t))return!1;let n=t.current;uF(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:i}=this.visualElement;// TODO
if(!i||!i.layout)return!1;let a=function(e,t,r){let n=fS(e,r),{scroll:i}=t;return i&&(fb(n.x,i.offset.x),fb(n.y,i.offset.y)),n}(n,i.root,this.visualElement.getTransformPagePoint()),o={x:ft((e=i.layout.layoutBox).x,a.x),y:ft(e.y,a.y)};/**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */if(r){let e=r(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=fu(e))}return o}startAnimation(e){let{drag:t,dragMomentum:r,dragElastic:n,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=fl(o=>{if(!fC(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});let u={type:"inertia",velocity:r?e[o]:0,bounceStiffness:n?200:1e6,bounceDamping:n?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};// If we're not animating on an externally-provided `MotionValue` we can use the
// component's animation controls which will handle interactions with whileHover (etc),
// otherwise we just have to animate the `MotionValue` itself.
return this.startAxisValueAnimation(o,u)});// Run all animations and then resolve the new drag constraints.
return Promise.all(l).then(o)}startAxisValueAnimation(e,t){let r=this.getAxisMotionValue(e);return r.start(dI(e,r,0,t))}stopAnimation(){fl(e=>this.getAxisMotionValue(e).stop())}/**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */getAxisMotionValue(e){let t="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),n=r[t];return n||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){fl(t=>{let{drag:r}=this.getProps();// If we're not dragging this axis, do an early return.
if(!fC(t,r,this.currentDirection))return;let{projection:n}=this.visualElement,i=this.getAxisMotionValue(t);if(n&&n.layout){let{min:r,max:a}=n.layout.layoutBox[t];i.set(e[t]-cD(r,a,.5))}})}/**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!lO(t)||!r||!this.constraints)return;/**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */this.stopAnimation();/**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */let n={x:0,y:0};fl(e=>{let t=this.getAxisMotionValue(e);if(t){let r=t.get();n[e]=/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */function(e,t){let r=.5,n=d5(e),i=d5(t);return i>n?r=c4(t.min,t.max-n,e.min):n>i&&(r=c4(e.min,e.max-i,t.min)),l3(0,1,r)}({min:r,max:r},this.constraints[e])}});/**
         * Update the layout of this element and resolve the latest drag constraints
         */let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),fl(t=>{if(!fC(t,e,null))return;/**
             * Calculate a new transform based on the previous box progress
             */let r=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];r.set(cD(i,a,n[t]))})}addListeners(){if(!this.visualElement.current)return;f_.set(this.visualElement,this);let e=this.visualElement.current,t=uJ(e,"pointerdown",e=>{let{drag:t,dragListener:r=!0}=this.getProps();t&&r&&this.start(e)}),r=()=>{let{dragConstraints:e}=this.getProps();lO(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",r);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),r();/**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */let a=uY(window,"resize",()=>this.scalePositionWithinConstraints()),o=n.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(fl(t=>{let r=this.getAxisMotionValue(t);r&&(this.originPoint[t]+=e[t].translate,r.set(r.get()+e[t].translate))}),this.visualElement.render())});return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:n=!1,dragConstraints:i=!1,dragElastic:a=.35,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:n,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function fC(e,t,r){return(!0===t||t===e)&&(null===r||r===e)}const fT=e=>(t,r)=>{e&&uV.update(()=>e(t,r))};var eX=(h("acw62"),h("acw62"));/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */function fP(){let e=(0,eX.useContext)(lP);if(null===e)return[!0,null];let{isPresent:t,onExitComplete:r,register:n}=e,i=(0,eX.useId)();return(0,eX.useEffect)(()=>n(i),[]),!t&&r?[!1,()=>r&&r(i)]:[!0]}/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */const fI={/**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */hasAnimatedSinceResize:!0,/**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */hasEverUpdated:!1};function fA(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */const fR={correct:(e,t)=>{if(!t.target)return e;/**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */if("string"==typeof e){if(!uo.test(e))return e;e=parseFloat(e)}/**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */let r=fA(e,t.target.x),n=fA(e,t.target.y);return`${r}% ${n}%`}};class fO extends /*@__PURE__*/c(eX).Component{/**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:n}=this.props,{projection:i}=e;Object.assign(lG,fN),i&&(t.group&&t.group.add(i),r&&r.register&&n&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),fI.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:r,drag:n,isPresent:i}=this.props,a=r.projection;return a&&(/**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */a.isPresent=i,n||e.layoutDependency!==t||void 0===t?a.willUpdate():this.safeToRemove(),e.isPresent===i||(i?a.promote():a.relegate()||uV.postRender(()=>{let e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:n}=e;n&&(n.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(n),r&&r.deregister&&r.deregister(n))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function fM(e){let[t,r]=fP(),n=(0,eX.useContext)(lV);return /*@__PURE__*/c(eX).createElement(fO,{...e,layoutGroup:n,switchLayoutGroup:(0,eX.useContext)(lU),isPresent:t,safeToRemove:r})}const fN={borderRadius:{...fR,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fR,borderTopRightRadius:fR,borderBottomLeftRadius:fR,borderBottomRightRadius:fR,boxShadow:{correct:(e,{treeScale:t,projectionDelta:r})=>{let n=cZ.parse(e);// TODO: Doesn't support multiple shadows
if(n.length>5)return e;let i=cZ.createTransformer(e),a="number"!=typeof n[0]?1:0,o=r.x.scale*t.x,s=r.y.scale*t.y;n[0+a]/=o,n[1+a]/=s;/**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */let l=cD(o,s,.5);return"number"==typeof n[2+a]&&(n[2+a]/=l),"number"==typeof n[3+a]&&(n[3+a]/=l),i(n)}}},fz=["TopLeft","TopRight","BottomLeft","BottomRight"],fj=fz.length,fL=e=>"string"==typeof e?parseFloat(e):e,fD=e=>"number"==typeof e||uo.test(e);function fF(e,t){return void 0!==e[t]?e[t]:e.borderRadius}// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const f$=fV(0,.5,cS),fB=fV(.5,.95,uF);function fV(e,t,r){return n=>// Could replace ifs with clamp
    n<e?0:n>t?1:r(c4(e,t,n))}/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */function fU(e,t){e.min=t.min,e.max=t.max}/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */function fW(e,t){fU(e.x,t.x),fU(e.y,t.y)}/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */function fH(e,t,r,n,i){return e-=t,e=n+1/r*(e-n),void 0!==i&&(e=n+1/i*(e-n)),e}/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */function fq(e,t,[r,n,i],a,o){!/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */function(e,t=0,r=1,n=.5,i,a=e,o=e){if(ua.test(t)){t=parseFloat(t);let e=cD(o.min,o.max,t/100);t=e-o.min}if("number"!=typeof t)return;let s=cD(a.min,a.max,n);e===a&&(s-=t),e.min=fH(e.min,t,r,s,i),e.max=fH(e.max,t,r,s,i)}(e,t[r],t[n],t[i],t.scale,a,o)}/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */const fG=["x","scaleX","originX"],fY=["y","scaleY","originY"];/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */function fK(e,t,r,n){fq(e.x,t,fG,r?r.x:void 0,n?n.x:void 0),fq(e.y,t,fY,r?r.y:void 0,n?n.y:void 0)}function fX(e){return 0===e.translate&&1===e.scale}function fQ(e){return fX(e.x)&&fX(e.y)}function fJ(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function fZ(e){return d5(e.x)/d5(e.y)}class f0{constructor(){this.members=[]}add(e){dO(this.members,e),e.scheduleRender()}remove(e){if(dM(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t;let r=this.members.findIndex(t=>e===t);if(0===r)return!1;for(let e=r;e>=0;e--){let r=this.members[e];if(!1!==r.isPresent){t=r;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:n}=e.options;!1===n&&r.hide();/**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}/**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function f1(e,t,r){let n="",i=e.x.translate/t.x,a=e.y.translate/t.y;if((i||a)&&(n=`translate3d(${i}px, ${a}px, 0) `),(1!==t.x||1!==t.y)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),r){let{rotate:e,rotateX:t,rotateY:i}=r;e&&(n+=`rotate(${e}deg) `),t&&(n+=`rotateX(${t}deg) `),i&&(n+=`rotateY(${i}deg) `)}/**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */let o=e.x.scale*t.x,s=e.y.scale*t.y;return(1!==o||1!==s)&&(n+=`scale(${o}, ${s})`),n||"none"}const f2=(e,t)=>e.depth-t.depth;class f5{constructor(){this.children=[],this.isDirty=!1}add(e){dO(this.children,e),this.isDirty=!0}remove(e){dM(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(f2),this.isDirty=!1,this.children.forEach(e)}}const f3=["","X","Y","Z"];let f4=0;/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */const f6={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function f8({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:n,resetTransform:i}){return class{constructor(e={},r=null==t?void 0:t()){/**
             * A unique ID generated for every projection node.
             */this.id=f4++,/**
             * An id that represents a unique session instigated by startUpdate.
             */this.animationId=0,/**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */this.children=new Set,/**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */this.options={},/**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */this.isTreeAnimating=!1,this.isAnimationBlocked=!1,/**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */this.isLayoutDirty=!1,/**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */this.isProjectionDirty=!1,/**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */this.isSharedProjectionDirty=!1,/**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */this.isTransformDirty=!1,/**
             * Block layout updates for instant layout transitions throughout the tree.
             */this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,/**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */this.isUpdating=!1,/**
             * If this is an SVG element we currently disable projection transforms
             */this.isSVG=!1,/**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */this.needsReset=!1,/**
             * Flags whether this node should have its transform reset prior to measuring.
             */this.shouldResetTransform=!1,/**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */this.treeScale={x:1,y:1},/**
             *
             */this.eventHandlers=new Map,this.hasTreeAnimated=!1,// Note: Currently only running on root node
this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},/**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */this.updateProjection=()=>{/**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */f6.totalNodes=f6.resolvedTargetDeltas=f6.recalculatedProjection=0,this.nodes.forEach(he),this.nodes.forEach(hs),this.nodes.forEach(hl),this.nodes.forEach(ht),window.MotionDebug&&window.MotionDebug.record(f6)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,/**
             * Shared layout
             */// TODO Only running on root node
this.sharedNodes=new Map,this.latestValues=e,this.root=r?r.root||r:this,this.path=r?[...r.path,r]:[],this.parent=r,this.depth=r?r.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new f5)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new dN),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let r=this.eventHandlers.get(e);r&&r.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}/**
         * Lifecycles
         */mount(t,r=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=t instanceof SVGElement&&"svg"!==t.tagName,this.instance=t;let{layoutId:n,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),r&&(i||n)&&(this.isLayoutDirty=!0),e){let r;let n=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,r&&r(),r=/**
 * Timeout defined in ms
 */function(e,t){let r=performance.now(),n=({timestamp:i})=>{let a=i-r;a>=t&&(uU(n),e(a-t))};return uV.read(n,!0),()=>uU(n)}(n,250),fI.hasAnimatedSinceResize&&(fI.hasAnimatedSinceResize=!1,this.nodes.forEach(ho))})}n&&this.root.registerSharedNode(n,this),!1!==this.options.animate&&a&&(n||i)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeTargetChanged:r,layout:n})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}// TODO: Check here if an animation exists
let i=this.options.transition||a.getDefaultTransition()||hp,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=a.getProps(),l=!this.targetLayout||!fJ(this.targetLayout,n)||r,u=!t&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,u);let t={...dP(i,"layout"),onPlay:o,onComplete:s};(a.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||ho(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=n})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,uU(this.updateProjection)}// only on the root
blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}// Note: currently only running on root node
startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(hu),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:r}=this.options;if(void 0===t&&!r)return;let n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;let e=this.isUpdateBlocked();// When doing an instant transition, we skip the layout update,
// but should still clean up the measurements so that the next
// snapshot could be taken correctly.
if(e){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(hn);return}this.isUpdating||this.nodes.forEach(hi),this.isUpdating=!1,/**
             * Write
             */this.nodes.forEach(ha),/**
             * Read ==================
             */// Update layout measurements of updated children
this.nodes.forEach(f9),/**
             * Write
             */// Notify listeners that the layout is updated
this.nodes.forEach(f7),this.clearAllSnapshots();/**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */let t=performance.now();uW.delta=l3(0,1e3/60,t-uW.timestamp),uW.timestamp=t,uW.isProcessing=!0,uH.update.process(uW),uH.preRender.process(uW),uH.render.process(uW),uW.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(hr),this.sharedNodes.forEach(hc)}scheduleUpdateProjection(){uV.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){uV.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}/**
         * Update measurements
         */updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(// TODO: Incorporate into a forwarded scroll offset
this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;/**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++){let t=this.path[e];t.updateScroll()}let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=fs(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:n(this.instance),offset:r(this.instance)})}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!fQ(this.projectionDelta),r=this.getTransformTemplate(),n=r?r(this.latestValues,""):void 0,a=n!==this.prevTransformTemplateValue;e&&(t||ff(this.latestValues)||a)&&(i(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let r=this.measurePageBox(),n=this.removeElementScroll(r);return e&&(n=this.removeTransform(n)),hv((t=n).x),hv(t.y),{animationId:this.root.animationId,measuredBox:r,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return fs();let t=e.measureViewportBox(),{scroll:r}=this.root;return r&&(fb(t.x,r.offset.x),fb(t.y,r.offset.y)),t}removeElementScroll(e){let t=fs();fW(t,e);/**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */for(let r=0;r<this.path.length;r++){let n=this.path[r],{scroll:i,options:a}=n;if(n!==this.root&&i&&a.layoutScroll){/**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */if(i.isRoot){fW(t,e);let{scroll:r}=this.root;/**
                         * Undo the application of page scroll that was originally added
                         * to the measured bounding box.
                         */r&&(fb(t.x,-r.offset.x),fb(t.y,-r.offset.y))}fb(t.x,i.offset.x),fb(t.y,i.offset.y)}}return t}applyTransform(e,t=!1){let r=fs();fW(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&fk(r,{x:-n.scroll.offset.x,y:-n.scroll.offset.y}),ff(n.latestValues)&&fk(r,n.latestValues)}return ff(this.latestValues)&&fk(r,this.latestValues),r}removeTransform(e){let t=fs();fW(t,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];if(!r.instance||!ff(r.latestValues))continue;fd(r.latestValues)&&r.updateSnapshot();let n=fs(),i=r.measurePageBox();fW(n,i),fK(t,r.latestValues,r.snapshot?r.snapshot.layoutBox:void 0,n)}return ff(this.latestValues)&&fK(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==uW.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){var t,r,n,i;/**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */let a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);let o=!!this.resumingFrom||this!==a,s=!(e||o&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget);if(s)return;let{layout:l,layoutId:u}=this.options;/**
             * If we have no layout, we can't perform projection, so early return
             */if(this.layout&&(l||u)){/**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */// TODO If this is unsuccessful this currently happens every frame
if(this.resolvedRelativeTargetAt=uW.timestamp,!this.targetDelta&&!this.relativeTarget){// TODO: This is a semi-repetition of further down this function, make DRY
let e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fs(),this.relativeTargetOrigin=fs(),d7(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),fW(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}/**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */if(this.relativeTarget||this.targetDelta){/**
             * If we've been told to attempt to resolve a relative target, do so.
             */if((this.target||(this.target=fs(),this.targetWithTransforms=fs()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),r=this.target,n=this.relativeTarget,i=this.relativeParent.target,d8(r.x,n.x,i.x),d8(r.y,n.y,i.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):fW(this.target,this.layout.layoutBox),fg(this.target,this.targetDelta)):fW(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let e=this.getClosestProjectingParent();e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fs(),this.relativeTargetOrigin=fs(),d7(this.relativeTargetOrigin,this.target,e.target),fW(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}/**
             * Increase debug counter for resolved target deltas
             */f6.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||fd(this.parent.latestValues)||fh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;let t=this.getLead(),r=!!this.resumingFrom||this!==t,n=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(n=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===uW.timestamp&&(n=!1),n)return;let{layout:i,layoutId:a}=this.options;if(/**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(i||a))return;fW(this.layoutCorrected,this.layout.layoutBox);/**
             * Record previous tree scales before updating.
             */let o=this.treeScale.x,s=this.treeScale.y;!/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */function(e,t,r,n=!1){let i,a;let o=r.length;if(o){// Reset the treeScale
t.x=t.y=1;for(let s=0;s<o;s++){a=(i=r[s]).projectionDelta;/**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */let o=i.instance;(!o||!o.style||"contents"!==o.style.display)&&(n&&i.options.layoutScroll&&i.scroll&&i!==i.root&&fk(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),a&&(// Incoporate each ancestor's scale into a culmulative treeScale for this component
t.x*=a.x.scale,t.y*=a.y.scale,// Apply each ancestor's calculated delta into this component's recorded layout box
fg(e,a)),n&&ff(i.latestValues)&&fk(e,i.latestValues))}/**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */t.x=fv(t.x),t.y=fv(t.y)}}(this.layoutCorrected,this.treeScale,this.path,r),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox);let{target:l}=t;if(!l){/**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */this.projectionTransform&&(this.projectionDelta=fa(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=fa(),this.projectionDeltaWithTransform=fa());let u=this.projectionTransform;d6(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=f1(this.projectionDelta,this.treeScale),(this.projectionTransform!==u||this.treeScale.x!==o||this.treeScale.y!==s)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),/**
             * Increase debug counter for recalculated projections
             */f6.recalculatedProjection++}hide(){this.isVisible=!1;// TODO: Schedule render
}show(){this.isVisible=!0;// TODO: Schedule render
}scheduleRender(e=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e,t=!1){let r;let n=this.snapshot,i=n?n.latestValues:{},a={...this.latestValues},o=fa();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=fs(),l=n?n.source:void 0,u=this.layout?this.layout.source:void 0,c=l!==u,d=this.getStack(),f=!d||d.members.length<=1,h=!!(c&&!f&&!0===this.options.crossfade&&!this.path.some(hh));this.animationProgress=0,this.mixTargetDelta=t=>{let n=t/1e3;if(hd(o.x,e.x,n),hd(o.y,e.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var l,u,d,p;d7(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox),d=this.relativeTarget,p=this.relativeTargetOrigin,hf(d.x,p.x,s.x,n),hf(d.y,p.y,s.y,n),r&&(l=this.relativeTarget,u=r,l.x.min===u.x.min&&l.x.max===u.x.max&&l.y.min===u.y.min&&l.y.max===u.y.max)&&(this.isProjectionDirty=!1),r||(r=fs()),fW(r,this.relativeTarget)}c&&(this.animationValues=a,function(e,t,r,n,i,a){i?(e.opacity=cD(0,void 0!==r.opacity?r.opacity:1,f$(n)),e.opacityExit=cD(void 0!==t.opacity?t.opacity:1,0,fB(n))):a&&(e.opacity=cD(void 0!==t.opacity?t.opacity:1,void 0!==r.opacity?r.opacity:1,n));/**
     * Mix border radius
     */for(let i=0;i<fj;i++){let a=`border${fz[i]}Radius`,o=fF(t,a),s=fF(r,a);if(void 0===o&&void 0===s)continue;o||(o=0),s||(s=0);let l=0===o||0===s||fD(o)===fD(s);l?(e[a]=Math.max(cD(fL(o),fL(s),n),0),(ua.test(s)||ua.test(o))&&(e[a]+="%")):e[a]=s}/**
     * Mix rotation
     */(t.rotate||r.rotate)&&(e.rotate=cD(t.rotate||0,r.rotate||0,n))}(a,i,this.latestValues,n,h,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(uU(this.pendingAnimation),this.pendingAnimation=void 0),/**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */this.pendingAnimation=uV.update(()=>{fI.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,r){let n=lQ(e)?e:dD(e);return n.start(dI("",n,1e3,r)),n.animation}(0,0,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:r,layout:n,latestValues:i}=e;if(t&&r&&n){/**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */if(this!==e&&this.layout&&n&&hb(this.options.animationType,this.layout.layoutBox,n.layoutBox)){r=this.target||fs();let t=d5(this.layout.layoutBox.x);r.x.min=e.target.x.min,r.x.max=r.x.min+t;let n=d5(this.layout.layoutBox.y);r.y.min=e.target.y.min,r.y.max=r.y.min+n}fW(t,r),fk(t,i),d6(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new f0);let r=this.sharedNodes.get(e);r.add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){var e;let{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;let{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:r}={}){let n=this.getStack();n&&n.promote(this,r),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){let{visualElement:e}=this.options;if(!e)return;// If there's no detected rotation values, we can early return without a forced render.
let t=!1,{latestValues:r}=e;// If there's no rotation values, we don't need to do any more.
if((r.rotate||r.rotateX||r.rotateY||r.rotateZ)&&(t=!0),!t)return;let n={};// Check the rotate value of all axes and reset to 0
for(let t=0;t<f3.length;t++){let i="rotate"+f3[t];// Record the rotation and then temporarily set it to 0
r[i]&&(n[i]=r[i],e.setStaticValue(i,0))}// Put back all the values we reset
for(let t in // Force a render of this element to apply the transform with all rotations
// set to 0.
e.render(),n)e.setStaticValue(t,n[t]);// Schedule a render for the next frame. This ensures we won't visually
// see the element with the reset rotate value applied.
e.scheduleRender()}getProjectionStyles(e={}){var t,r;// TODO: Return lifecycle-persistent object
let n={};if(!this.instance||this.isSVG)return n;if(!this.isVisible)return{visibility:"hidden"};n.visibility="";let i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,n.opacity="",n.pointerEvents=uL(e.pointerEvents)||"",n.transform=i?i(this.latestValues,""):"none",n;let a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){let t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=uL(e.pointerEvents)||""),this.hasProjected&&!ff(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}let o=a.animationValues||a.latestValues;this.applyTransformsToTarget(),n.transform=f1(this.projectionDeltaWithTransform,this.treeScale,o),i&&(n.transform=i(o,n.transform));let{x:s,y:l}=this.projectionDelta;/**
             * Apply scale correction
             */for(let e in n.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,a.animationValues?/**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */n.opacity=a===this?null!==(r=null!==(t=o.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:/**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */n.opacity=a===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0,lG){if(void 0===o[e])continue;let{correct:t,applyTo:r}=lG[e],i="none"===n.transform?o[e]:t(o[e],a);if(r){let e=r.length;for(let t=0;t<e;t++)n[r[t]]=i}else n[e]=i}return this.options.layoutId&&(n.pointerEvents=a===this?uL(e.pointerEvents)||"":"none"),n}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}// Only run on root
resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(hn),this.root.sharedNodes.clear()}}}function f9(e){e.updateLayout()}function f7(e){var t;let r=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){let{layoutBox:t,measuredBox:n}=e.layout,{animationType:i}=e.options,a=r.source!==e.layout.source;// TODO Maybe we want to also resize the layout snapshot so we don't trigger
// animations for instance if layout="size" and an element has only changed position
"size"===i?fl(e=>{let n=a?r.measuredBox[e]:r.layoutBox[e],i=d5(n);n.min=t[e].min,n.max=n.min+i}):hb(i,r.layoutBox,t)&&fl(n=>{let i=a?r.measuredBox[n]:r.layoutBox[n],o=d5(t[n]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[n].max=e.relativeTarget[n].min+o)});let o=fa();d6(o,t,r.layoutBox);let s=fa();a?d6(s,e.applyTransform(n,!0),r.measuredBox):d6(s,t,r.layoutBox);let l=!fQ(o),u=!1;if(!e.resumeFrom){let n=e.getClosestProjectingParent();/**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */if(n&&!n.resumeFrom){let{snapshot:i,layout:a}=n;if(i&&a){let o=fs();d7(o,r.layoutBox,i.layoutBox);let s=fs();d7(s,t,a.layoutBox),fJ(o,s)||(u=!0),n.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=n)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:r,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}/**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */e.options.transition=void 0}function he(e){/**
     * Increase debug counter for nodes encountered this frame
     */f6.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),/**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ht(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function hr(e){e.clearSnapshot()}function hn(e){e.clearMeasurements()}function hi(e){e.isLayoutDirty=!1}function ha(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ho(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function hs(e){e.resolveTargetDelta()}function hl(e){e.calcProjection()}function hu(e){e.resetRotation()}function hc(e){e.removeLeadSnapshot()}function hd(e,t,r){e.translate=cD(t.translate,0,r),e.scale=cD(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function hf(e,t,r,n){e.min=cD(t.min,r.min,n),e.max=cD(t.max,r.max,n)}function hh(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const hp={duration:.45,ease:[.4,0,.1,1]},hm=e=>"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().includes(e),hg=hm("applewebkit/")&&!hm("chrome/")?Math.round:uF;function hv(e){// Round to the nearest .5 pixels to support subpixel layouts
e.min=hg(e.min),e.max=hg(e.max)}function hb(e,t,r){return"position"===e||"preserve-aspect"===e&&!d3(fZ(t),fZ(r),.2)}const hy=f8({attachResizeListener:(e,t)=>uY(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),hw={current:void 0},hx=f8({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!hw.current){let e=new hy({});e.mount(window),e.setOptions({layoutScroll:!0}),hw.current=e}return hw.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position}),hk=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function hS(e,t,r=1){uF(r<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);let[n,i]=function(e){let t=hk.exec(e);if(!t)return[,];let[,r,n]=t;return[r,n]}(e);// No CSS variable detected
if(!n)return;// Attempt to read this CSS variable off the element
let a=window.getComputedStyle(t).getPropertyValue(n);if(a){let e=a.trim();return dR(e)?parseFloat(e):e}return l2(i)?hS(i,t,r+1):i}const h_=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),hE=e=>h_.has(e),hC=e=>Object.keys(e).some(hE),hT=e=>e===l4||e===uo,hP=(e,t)=>parseFloat(e.split(", ")[t]),hI=(e,t)=>(r,{transform:n})=>{if("none"===n||!n)return 0;let i=n.match(/^matrix3d\((.+)\)$/);if(i)return hP(i[1],t);{let t=n.match(/^matrix\((.+)\)$/);return t?hP(t[1],e):0}},hA=new Set(["x","y","z"]),hR=lY.filter(e=>!hA.has(e)),hO={// Dimensions
width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),// Transform
x:hI(4,13),y:hI(5,14)};// Alias translate longform names
hO.translateX=hO.x,hO.translateY=hO.y;const hM=(e,t,r)=>{let n=t.measureViewportBox(),i=t.current,a=getComputedStyle(i),{display:o}=a,s={};"none"===o&&t.setStaticValue("display",e.display||"block"),/**
     * Record origins before we render and update styles
     */r.forEach(e=>{s[e]=hO[e](n,a)}),// Apply the latest values (as set in checkAndConvertChangedValueTypes)
t.render();let l=t.measureViewportBox();return r.forEach(r=>{// Restore styles to their **calculated computed style**, not their actual
// originally set style. This allows us to animate between equivalent pixel units.
let n=t.getValue(r);n&&n.jump(s[r]),e[r]=hO[r](l,a)}),e},hN=(e,t,r={},n={})=>{t={...t},n={...n};let i=Object.keys(t).filter(hE),a=[],o=!1,s=[];if(i.forEach(i=>{let l;let u=e.getValue(i);if(!e.hasValue(i))return;let c=r[i],d=dB(c),f=t[i];// TODO: The current implementation of this basically throws an error
// if you try and do value conversion via keyframes. There's probably
// a way of doing this but the performance implications would need greater scrutiny,
// as it'd be doing multiple resize-remeasure operations.
if(uN(f)){let e=f.length,t=null===f[0]?1:0;d=dB(c=f[t]);for(let r=t;/**
                 * Don't allow wildcard keyframes to be used to detect
                 * a difference in value types.
                 */r<e&&null!==f[r];r++)l?uF(dB(f[r])===l,"All keyframes must be of the same type"):uF((l=dB(f[r]))===d||hT(d)&&hT(l),"Keyframes must be of the same dimension as the current value")}else l=dB(f);if(d!==l){// If they're both just number or px, convert them both to numbers rather than
// relying on resize/remeasure to convert (which is wasteful in this situation)
if(hT(d)&&hT(l)){let e=u.get();"string"==typeof e&&u.set(parseFloat(e)),"string"==typeof f?t[i]=parseFloat(f):Array.isArray(f)&&l===uo&&(t[i]=f.map(parseFloat))}else(null==d?void 0:d.transform)&&(null==l?void 0:l.transform)&&(0===c||0===f)?0===c?u.set(l.transform(c)):t[i]=d.transform(f):(o||(a=function(e){let t=[];return hR.forEach(r=>{let n=e.getValue(r);void 0!==n&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),t.length&&e.render(),t}(e),o=!0),s.push(i),n[i]=void 0!==n[i]?n[i]:t[i],u.jump(f))}}),!s.length)return{target:t,transitionEnd:n};{let r=s.indexOf("height")>=0?window.pageYOffset:null,i=hM(t,e,s);return a.length&&a.forEach(([t,r])=>{e.getValue(t).set(r)}),// Reapply original values
e.render(),lI&&null!==r&&window.scrollTo({top:r}),{target:i,transitionEnd:n}}},hz=(e,t,r,n)=>{var i,a;let o=/**
 * Resolve CSS variables from
 *
 * @internal
 */function(e,{...t},r){let n=e.current;if(!(n instanceof Element))return{target:t,transitionEnd:r};// Cycle through every target property and resolve CSS variables. Currently
// we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
for(let i in r&&(r={...r}),// Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
e.values.forEach(e=>{let t=e.get();if(!l2(t))return;let r=hS(t,n);r&&e.set(r)}),t){let e=t[i];if(!l2(e))continue;let a=hS(e,n);a&&(// Clone target if it hasn't already been
t[i]=a,r||(r={}),void 0===r[i]&&(r[i]=e))}return{target:t,transitionEnd:r}}(e,t,n);return t=o.target,n=o.transitionEnd,i=t,a=n,hC(i)?hN(e,i,r,a):{target:i,transitionEnd:a}},hj={current:null},hL={current:!1},hD=new WeakMap,hF=Object.keys(lB),h$=hF.length,hB=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],hV=lj.length;/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */class hU{constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:n,visualState:i},a={}){/**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */this.current=null,/**
         * A set containing references to this VisualElement's children.
         */this.children=new Set,/**
         * Determine what role this visual element should take in the variant tree.
         */this.isVariantNode=!1,this.isControllingVariants=!1,/**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */this.shouldReduceMotion=null,/**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */this.values=new Map,/**
         * Cleanup functions for active features (hover/tap/exit etc)
         */this.features={},/**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */this.valueSubscriptions=new Map,/**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */this.prevMotionValues={},/**
         * An object containing a SubscriptionManager for each active event.
         */this.events={},/**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>uV.render(this.render,!1,!0);let{latestValues:o,renderState:s}=i;this.latestValues=o,this.baseTarget={...o},this.initialValues=t.initial?{...o}:{},this.renderState=s,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=n,this.options=a,this.isControllingVariants=lL(t),this.isVariantNode=lD(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);/**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{});for(let e in u){let t=u[e];void 0!==o[e]&&lQ(t)&&(t.set(o[e],!1),dA(l)&&l.add(e))}}/**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,hD.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),hL.current||function(){if(hL.current=!0,lI){if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>hj.current=e.matches;e.addListener(t),t()}else hj.current=!1}}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||hj.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in hD.delete(this.current),this.projection&&this.projection.unmount(),uU(this.notifyUpdate),uU(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();for(let e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){let r=lK.has(e),n=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&uV.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{n(),i()})}sortNodePosition(e){return(/**
         * If these nodes aren't even of the same type we can't compare their depth.
         */this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0)}loadFeatures({children:e,...t},r,n,i){let a,o;for(let e=0;e<h$;e++){let r=hF[e],{isEnabled:n,Feature:i,ProjectionNode:s,MeasureLayout:l}=lB[r];s&&(a=s),n(t)&&(!this.features[r]&&i&&(this.features[r]=new i(this)),l&&(o=l))}if(!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);let{layoutId:e,layout:r,drag:n,dragConstraints:o,layoutScroll:s,layoutRoot:l}=t;this.projection.setOptions({layoutId:e,layout:r,alwaysMeasureLayout:!!n||o&&lO(o),visualElement:this,scheduleRender:()=>this.scheduleRender(),/**
                 * TODO: Update options in an effect. This could be tricky as it'll be too late
                 * to update by the time layout animations run.
                 * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
                 * ensuring it gets called if there's no potential layout animations.
                 *
                 */animationType:"string"==typeof r?r:"both",initialPromotionConfig:i,layoutScroll:s,layoutRoot:l})}return o}updateFeatures(){for(let e in this.features){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}/**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):fs()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}/**
     * Make a target animatable by Popmotion. For instance, if we're
     * trying to animate width from 100px to 100vw we need to measure 100vw
     * in pixels to determine what we really need to animate to. This is also
     * pluggable to support Framer's custom value types like Color,
     * and CSS variables.
     */makeTargetAnimatable(e,t=!0){return this.makeTargetAnimatableFromInstance(e,this.props,t)}/**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;/**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */for(let t=0;t<hB.length;t++){let r=hB[t];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let n=e["on"+r];n&&(this.propEventSubscriptions[r]=this.on(r,n))}this.prevMotionValues=function(e,t,r){let{willChange:n}=t;for(let i in t){let a=t[i],o=r[i];if(lQ(a))/**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */e.addValue(i,a),dA(n)&&n.add(i);else if(lQ(o))/**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */e.addValue(i,dD(a,{owner:e})),dA(n)&&n.remove(i);else if(o!==a){/**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */if(e.hasValue(i)){let t=e.getValue(i);// TODO: Only update values that aren't being animated or even looked at
t.hasAnimated||t.set(a)}else{let t=e.getStaticValue(i);e.addValue(i,dD(void 0!==t?t:a,{owner:e}))}}}// Handle removed values
for(let n in r)void 0===t[n]&&e.removeValue(n);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}/**
     * Returns the variant definition with a given name.
     */getVariant(e){return this.props.variants?this.props.variants[e]:void 0}/**
     * Returns the defined default transition on this component.
     */getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}let t={};for(let e=0;e<hV;e++){let r=lj[e],n=this.props[r];(lM(n)||!1===n)&&(t[r]=n)}return t}/**
     * Add a child visual element to our set of children.
     */addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}/**
     * Add a motion value and bind it to this visual element.
     */addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}/**
     * Remove a motion value and unbind any active subscriptions.
     */removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}/**
     * Check whether we have a motion value for this key
     */hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return void 0===r&&void 0!==t&&(r=dD(t,{owner:this}),this.addValue(e,r)),r}/**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}/**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */setBaseTarget(e,t){this.baseTarget[e]=t}/**
     * Find the base target for a value thats been removed from all animation
     * props.
     */getBaseTarget(e){var t;let{initial:r}=this.props,n="string"==typeof r||"object"==typeof r?null===(t=uO(this.props,r))||void 0===t?void 0:t[e]:void 0;/**
         * If this value still exists in the current initial variant, read that.
         */if(r&&void 0!==n)return n;/**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */let i=this.getBaseTargetFromProps(this.props,e);return void 0===i||lQ(i)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new dN),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class hW extends hU{sortInstanceNodePosition(e,t){/**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:t,...r},{transformValues:n},i){let a=function(e,t,r){let n={};for(let i in e){let e=function(e,t){if(!t)return;let r=t[e]||t.default||t;return r.from}(i,t);if(void 0!==e)n[i]=e;else{let e=r.getValue(i);e&&(n[i]=e.get())}}return n}(r,e||{},this);if(n&&(t&&(t=n(t)),r&&(r=n(r)),a&&(a=n(a))),i){!function(e,t,r){var n,i;let a=Object.keys(t).filter(t=>!e.hasValue(t)),o=a.length;if(o)for(let s=0;s<o;s++){let o=a[s],l=t[o],u=null;Array.isArray(l)&&(u=l[0]),null===u&&(u=null!==(i=null!==(n=r[o])&&void 0!==n?n:e.readValue(o))&&void 0!==i?i:t[o]),null!=u&&("string"==typeof u&&(dR(u)||dT(u))?u=parseFloat(u):!dU(u)&&cZ.test(l)&&(u=dC(o,l)),e.addValue(o,dD(u,{owner:e})),void 0===r[o]&&(r[o]=u),null!==u&&e.setBaseTarget(o,u))}}(this,r,a);let e=hz(this,r,a,t);t=e.transitionEnd,r=e.target}return{transition:e,transitionEnd:t,...r}}}class hH extends hW{readValueFromInstance(e,t){if(lK.has(t)){let e=dE(t);return e&&e.default||0}{let r=window.getComputedStyle(e),n=(l1(t)?r.getPropertyValue(t):r[t])||0;return"string"==typeof n?n.trim():n}}measureInstanceViewportBox(e,{transformPagePoint:t}){return fS(e,t)}build(e,t,r,n){uf(e,t,r,n.transformTemplate)}scrapeMotionValuesFromProps(e,t){return uA(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;lQ(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,r,n){uT(e,t,r,n)}}class hq extends hW{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(lK.has(t)){let e=dE(t);return e&&e.default||0}return t=uP.has(t)?t:uC(t),e.getAttribute(t)}measureInstanceViewportBox(){return fs()}scrapeMotionValuesFromProps(e,t){return uR(e,t)}build(e,t,r,n){uk(e,t,r,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,r,n){uI(e,t,r,n)}mount(e){this.isSVGTag=u_(e.tagName),super.mount(e)}}const hG=(e,t)=>lq(e)?new hq(t,{enableHardwareAcceleration:!1}):new hH(t,{enableHardwareAcceleration:!0}),hY={animation:{Feature:class extends u6{/**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:r})=>(function(e,t,r={}){let n;if(e.notify("AnimationStart",t),Array.isArray(t)){let i=t.map(t=>dH(e,t,r));n=Promise.all(i)}else if("string"==typeof t)n=dH(e,t,r);else{let i="function"==typeof t?co(e,t,r.custom):t;n=Promise.all(dW(e,i,r))}return n.then(()=>e.notify("AnimationComplete",t))})(e,t,r))),r={animate:dK(!0),whileInView:dK(),whileHover:dK(),whileTap:dK(),whileDrag:dK(),whileFocus:dK(),exit:dK()},n=!0,i=(t,r)=>{let n=co(e,r);if(n){let{transition:e,transitionEnd:r,...i}=n;t={...t,...i,...r}}return t};/**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */function a(a,o){let s=e.getProps(),l=e.getVariantContext(!0)||{},u=[],c=new Set,d={},f=1/0;/**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */for(let t=0;t<dY;t++){var h;let p=dG[t],m=r[p],g=void 0!==s[p]?s[p]:l[p],v=lM(g),b=p===o?m.isActive:null;!1===b&&(f=t);/**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */let y=g===l[p]&&g!==s[p]&&v;// Check if we can skip analysing this prop early
if(y&&n&&e.manuallyAnimateOnMount&&(y=!1),/**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */m.protectedKeys={...d},!m.isActive&&null===b||// If we didn't and don't have any defined prop for this animation type
!g&&!m.prevProp||lN(g)||"boolean"==typeof g)continue;/**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */let w=(h=m.prevProp,"string"==typeof g?g!==h:!!Array.isArray(g)&&!ca(g,h)),x=w||// If we're making this variant active, we want to always make it active
p===o&&m.isActive&&!y&&v||// If we removed a higher-priority variant (i is in reverse order)
t>f&&v,k=Array.isArray(g)?g:[g],S=k.reduce(i,{});!1===b&&(S={});/**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */let{prevResolvedValues:_={}}=m,E={..._,...S},C=e=>{x=!0,c.delete(e),m.needsAnimating[e]=!0};for(let e in E){let t=S[e],r=_[e];// If we've already handled this we can just skip ahead
d.hasOwnProperty(e)||(t!==r?uN(t)&&uN(r)?!ca(t,r)||w?C(e):/**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */m.protectedKeys[e]=!0:void 0!==t?C(e):c.add(e):void 0!==t&&c.has(e)?/**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */C(e):/**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */m.protectedKeys[e]=!0)}/**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */m.prevProp=g,m.prevResolvedValues=S,m.isActive&&(d={...d,...S}),n&&e.blockInitialAnimation&&(x=!1),x&&!y&&u.push(...k.map(e=>({animation:e,options:{type:p,...a}})))}/**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */if(c.size){let t={};c.forEach(r=>{let n=e.getBaseTarget(r);void 0!==n&&(t[r]=n)}),u.push({animation:t})}let p=!!u.length;return n&&!1===s.initial&&!e.manuallyAnimateOnMount&&(p=!1),n=!1,p?t(u):Promise.resolve()}return{animateChanges:a,setActive:/**
     * Change whether a certain animation type is active.
     */function(t,n,i){var o;// If the active state hasn't changed, we can safely do nothing here
if(r[t].isActive===n)return Promise.resolve();null===// Propagate active change to children
(o=e.variantChildren)||void 0===o||o.forEach(e=>{var r;return null===(r=e.animationState)||void 0===r?void 0:r.setActive(t,n)}),r[t].isActive=n;let s=a(i,t);for(let e in r)r[e].protectedKeys={};return s},setAnimateFunction:/**
     * This just allows us to inject mocked animation functions
     * @internal
     */function(r){t=r(e)},getState:()=>r}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();this.unmount(),lN(e)&&(this.unmount=e.subscribe(this.node))}/**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends u6{constructor(){super(...arguments),this.id=dX++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t,custom:r}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let i=this.node.animationState.setActive("exit",!e,{custom:null!=r?r:this.node.getProps().custom});t&&!e&&i.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}},inView:{Feature:class extends u6{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:n="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:r,threshold:"number"==typeof n?n:ci[n]};return function(e,t,r){let n=function({root:e,...t}){let r=e||document;ct.has(r)||ct.set(r,{});let n=ct.get(r),i=JSON.stringify(t);return n[i]||(n[i]=new IntersectionObserver(cn,{root:e,...t})),n[i]}(t);return ce.set(e,r),n.observe(e),()=>{ce.delete(e),n.unobserve(e)}}(this.node.current,a,e=>{let{isIntersecting:t}=e;/**
             * If there's been no change in the viewport state, early return.
             */if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);/**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */let{onViewportEnter:r,onViewportLeave:n}=this.node.getProps(),a=t?r:n;a&&a(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node,r=["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}(e,t));r&&this.startObserver()}unmount(){}}},tap:{Feature:class extends u6{constructor(){super(...arguments),this.removeStartListeners=uF,this.removeEndListeners=uF,this.removeAccessibleListeners=uF,this.startPointerPress=(e,t)=>{if(this.removeEndListeners(),this.isPressing)return;let r=this.node.getProps(),n=uJ(window,"pointerup",(e,t)=>{if(!this.checkPressEnd())return;let{onTap:r,onTapCancel:n}=this.node.getProps();uV.update(()=>{/**
                     * We only count this as a tap gesture if the event.target is the same
                     * as, or a child of, this component's element
                     */u9(this.node.current,e.target)?r&&r(e,t):n&&n(e,t)})},{passive:!(r.onTap||r.onPointerUp)}),i=uJ(window,"pointercancel",(e,t)=>this.cancelPress(e,t),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=u0(n,i),this.startPress(e,t)},this.startAccessiblePress=()=>{let e=uY(this.node.current,"keydown",e=>{"Enter"!==e.key||this.isPressing||(this.removeEndListeners(),this.removeEndListeners=uY(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&u7("up",(e,t)=>{let{onTap:r}=this.node.getProps();r&&uV.update(()=>r(e,t))})}),u7("down",(e,t)=>{this.startPress(e,t)}))}),t=uY(this.node.current,"blur",()=>{this.isPressing&&u7("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=u0(e,t)}}startPress(e,t){this.isPressing=!0;let{onTapStart:r,whileTap:n}=this.node.getProps();n&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&uV.update(()=>r(e,t))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;let e=this.node.getProps();return e.whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!u4()}cancelPress(e,t){if(!this.checkPressEnd())return;let{onTapCancel:r}=this.node.getProps();r&&uV.update(()=>r(e,t))}mount(){let e=this.node.getProps(),t=uJ(this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=uY(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=u0(t,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends u6{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;/**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=u0(uY(this.node.current,"focus",()=>this.onFocus()),uY(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends u6{mount(){this.unmount=u0(u8(this.node,!0),u8(this.node,!1))}unmount(){}}},pan:{Feature:class extends u6{constructor(){super(...arguments),this.removePointerDownListener=uF}onPointerDown(e){this.session=new dJ(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:n}=this.node.getProps();return{onSessionStart:fT(e),onStart:fT(t),onMove:r,onEnd:(e,t)=>{delete this.session,n&&uV.update(()=>n(e,t))}}}mount(){this.removePointerDownListener=uJ(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends u6{constructor(e){super(e),this.removeGroupControls=uF,this.removeListeners=uF,this.controls=new fE(e)}mount(){// If we've been provided a DragControls for manual control over the drag gesture,
// subscribe this component to it on mount.
let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||uF}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:hx,MeasureLayout:fM},layout:{ProjectionNode:hx,MeasureLayout:fM}},hK=/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */function(e){function t(t,r={}){return(/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */function({preloadedFeatures:e,createVisualElement:t,useRender:r,useVisualState:n,Component:i}){e&&function(e){for(let t in e)lB[t]={...lB[t],...e[t]}}(e);let a=(0,eX.forwardRef)(function(a,o){var s;let l;let u={...(0,eX.useContext)(lC),...a,layoutId:function({layoutId:e}){let t=(0,eX.useContext)(lV).id;return t&&void 0!==e?t+"-"+e:e}(a)},{isStatic:c}=u,d=function(e){let{initial:t,animate:r}=function(e,t){if(lL(e)){let{initial:t,animate:r}=e;return{initial:!1===t||lM(t)?t:void 0,animate:lM(r)?r:void 0}}return!1!==e.inherit?t:{}}(e,(0,eX.useContext)(lT));return(0,eX.useMemo)(()=>({initial:t,animate:r}),[lF(t),lF(r)])}(a),f=n(a,c);if(!c&&lI){/**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */d.visualElement=function(e,t,r,n){let{visualElement:i}=(0,eX.useContext)(lT),a=(0,eX.useContext)(lR),o=(0,eX.useContext)(lP),s=(0,eX.useContext)(lC).reducedMotion,l=(0,eX.useRef)();/**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */n=n||a.renderer,!l.current&&n&&(l.current=n(e,{visualState:t,parent:i,props:r,presenceContext:o,blockInitialAnimation:!!o&&!1===o.initial,reducedMotionConfig:s}));let u=l.current;(0,eX.useInsertionEffect)(()=>{u&&u.update(r,o)});/**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */let c=(0,eX.useRef)(!!window.HandoffAppearAnimations);return lA(()=>{u&&(u.render(),c.current&&u.animationState&&u.animationState.animateChanges())}),(0,eX.useEffect)(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),/**
         * Once we've handed off animations we can delete HandoffAppearAnimations
         * so components added after the initial render can animate changes
         * in useEffect vs useLayoutEffect.
         */window.HandoffAppearAnimations=void 0,c.current=!1)}),u}(i,f,u,t);/**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */let r=(0,eX.useContext)(lU),n=(0,eX.useContext)(lR).strict;d.visualElement&&(l=d.visualElement.loadFeatures(u,n,e,r))}/**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */return eX.createElement(lT.Provider,{value:d},l&&d.visualElement?eX.createElement(l,{visualElement:d.visualElement,...u}):null,r(i,a,(s=d.visualElement,(0,eX.useCallback)(e=>{e&&f.mount&&f.mount(e),s&&(e?s.mount(e):s.unmount()),o&&("function"==typeof o?o(e):lO(o)&&(o.current=e))},/**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */[s])),f,c,d.visualElement))});return a[lW]=i,a}(e(t,r)))}if("undefined"==typeof Proxy)return t;/**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */let r=new Map;return new Proxy(t,{/**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */get:(e,n)=>(r.has(n)||r.set(n,t(n)),r.get(n))})}((e,t)=>(function(e,{forwardMotionProps:t=!1},r,n){let i=lq(e)?uq:uG;return{...i,preloadedFeatures:r,useRender:function(e=!1){return(t,r,n,{latestValues:i},a)=>{let o=lq(t)?uE:um,s=o(r,i,a,t),l=function(e,t,r){let n={};for(let i in e)/**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */("values"!==i||"object"!=typeof e.values)&&(ub(i)||!0===r&&uv(i)||!t&&!uv(i)||// If trying to use native HTML drag events, forward drag listeners
    e.draggable&&i.startsWith("onDrag"))&&(n[i]=e[i]);return n}(r,"string"==typeof t,e),u={...l,...s,ref:n},{children:c}=r,d=(0,eX.useMemo)(()=>lQ(c)?c.get():c,[c]);return(0,eX.createElement)(t,{...u,children:d})}}(t),createVisualElement:n,Component:e}})(e,t,hY,hG));var hX=/* @__PURE__ */new Set([...nS,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),hQ=/* @__PURE__ */new Set(["htmlWidth","htmlHeight","htmlSize","htmlTranslate"]);function hJ(e){return hQ.has(e)||!hX.has(e)}var eX=h("acw62"),hZ=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,h0=tk(function(e){return hZ.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)}),h1=function(e){return"theme"!==e},h2=function(e){return"string"==typeof e&&// 96 is one less than the char code
// for "a" so this is checking that
// it's a lowercase character
e.charCodeAt(0)>96?h0:h1},h5=function(e,t,r){var n;if(t){var i=t.shouldForwardProp;n=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},h3=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return tM(t,r,n),tq(function(){return tN(t,r,n)}),null};h("acw62");var h4=(function e(t,r){var n,i,a=t.__emotion_real===t,o=a&&t.__emotion_base||t;void 0!==r&&(n=r.label,i=r.target);var s=h5(t,r,a),l=s||h2(o),u=!l("as");return function(){var c=arguments,d=a&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&d.push("label:"+n+";"),null==c[0]||void 0===c[0].raw)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,h=1;h<f;h++)d.push(c[h],c[0][h])}// $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class
var p=tK(function(e,t,r){var n,a,c,f=u&&e.as||o,h="",p=[],m=e;if(null==e.theme){for(var g in m={},e)m[g]=e[g];m.theme=eX.useContext(tX)}"string"==typeof e.className?(n=t.registered,a=e.className,c="",a.split(" ").forEach(function(e){void 0!==n[e]?p.push(n[e]+";"):c+=e+" "}),h=c):null!=e.className&&(h=e.className+" ");var v=tW(d.concat(p),t.registered,m);h+=t.key+"-"+v.name,void 0!==i&&(h+=" "+i);var b=u&&void 0===s?h2(f):l,y={};for(var w in e)(!u||"as"!==w)&&b(w)&&(y[w]=e[w]);return y.className=h,y.ref=r,/*#__PURE__*/eX.createElement(eX.Fragment,null,/*#__PURE__*/eX.createElement(h3,{cache:t,serialized:v,isStringTag:"string"==typeof f}),/*#__PURE__*/eX.createElement(f,y))});return p.displayName=void 0!==n?n:"Styled("+("string"==typeof o?o:o.displayName||o.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=o,p.__emotion_styles=d,p.__emotion_forwardProp=s,Object.defineProperty(p,"toString",{value:function(){return"."+i}}),p.withComponent=function(t,n){return e(t,tA({},r,n,{shouldForwardProp:h5(p,n,!0)})).apply(void 0,d)},p}}).bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){// $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
h4[e]=h4(e)});var eX=h("acw62"),h6=null!=(gf=h4.default)?gf:h4,h8=({baseStyle:e})=>t=>{let{theme:r,css:n,__css:i,sx:a,...o}=t,s=nM(o,(e,t)=>nE(t)),l=nz(e,t),u=// src/assign-after.ts
    function(e,...t){if(null==e)throw TypeError("Cannot convert undefined or null to object");let r={...e};for(let e of t)if(null!=e)for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(t in r&&delete r[t],r[t]=e[t]);return r}({},i,l,nN(s),a),c=nI(u)(t.theme);return n?[c,n]:c};function h9(e,t){let{baseStyle:r,...n}=null!=t?t:{};n.shouldForwardProp||(n.shouldForwardProp=hJ);let i=h8({baseStyle:r}),a=h6(e,n)(i),o=/*@__PURE__*/c(eX).forwardRef(function(e,t){let{colorMode:r,forced:n}=rn();return /*@__PURE__*/c(eX).createElement(a,{ref:t,"data-theme":n?r:void 0,...e})});return o}var h7=// src/factory.ts
function(){let e=/* @__PURE__ */new Map;return new Proxy(h9,{/**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */apply:(e,t,r)=>h9(...r),/**
     * @example
     * <chakra.div />
     */get:(t,r)=>(e.has(r)||e.set(r,h9(r)),e.get(r))})}(),eX=h("acw62"),pe={initial:e=>{let{position:t}=e,r=["top","bottom"].includes(t)?"y":"x",n=["top-right","bottom-right"].includes(t)?1:-1;return"bottom"===t&&(n=1),{opacity:0,[r]:24*n}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},pt=(0,eX.memo)(e=>{var t;let{id:r,message:n,onCloseComplete:i,onRequestRemove:a,requestClose:o=!1,position:s="bottom",duration:l=5e3,containerStyle:u,motionVariants:c=pe,toastSpacing:d="0.5rem"}=e,[f,h]=(0,eX.useState)(l),m=null===(t=(0,eX.useContext)(lP))||t.isPresent;lE(()=>{m||null==i||i()},[m]),lE(()=>{h(l)},[l]);let g=()=>{m&&a()};(0,eX.useEffect)(()=>{m&&o&&a()},[m,o,a]),function(e,t){let r=function(e,t=[]){let r=(0,eX.useRef)(e);return(0,eX.useEffect)(()=>{r.current=e}),(0,eX.useCallback)((...e)=>{var t;return null==(t=r.current)?void 0:t.call(r,...e)},t)}(e);(0,eX.useEffect)(()=>{if(null==t)return;let e=null;return e=window.setTimeout(()=>{r()},t),()=>{e&&window.clearTimeout(e)}},[t,r])}(g,f);let v=(0,eX.useMemo)(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:d,...u}),[u,d]),b=(0,eX.useMemo)(()=>(function(e){let t=e.includes("right"),r=e.includes("left"),n="center";return t&&(n="flex-end"),r&&(n="flex-start"),{display:"flex",flexDirection:"column",alignItems:n}})(s),[s]);return/* @__PURE__ */(0,p.jsx)(hK.div,{layout:!0,className:"chakra-toast",variants:c,initial:"initial",animate:"animate",exit:"exit",onHoverStart:()=>h(null),onHoverEnd:()=>h(l),custom:{position:s},style:b,children:/* @__PURE__ */(0,p.jsx)(h7.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:v,children:rh(n,{id:r,onClose:g})})})});function pr(e){return(0,eX.forwardRef)(e)}pt.displayName="ToastComponent";var eX=(h("acw62"),h("acw62"));function pn(){let e=rn(),t=function(){let e=(0,eX.useContext)(tX);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}();return{...e,theme:t}}// src/extend-theme.ts
var rb=h("5Gn6I");function pi(e){return"function"==typeof e}var pa=e=>function(...t){var r;let n=[...t],i=t[t.length-1];return rf(r=i)&&nW.every(e=>Object.prototype.hasOwnProperty.call(r,e))&&// this ensures backward compatibility
    // previously only `extendTheme(override, activeTheme?)` was allowed
    n.length>1?n=n.slice(0,n.length-1):i=e,(function(...e){return t=>e.reduce((e,t)=>t(e),t)})(...n.map(e=>t=>pi(e)?e(t):function(...e){return /*@__PURE__*/c(rb)({},...e,po)}(t,e)))(i)};function po(e,t,r,n){if((pi(e)||pi(t))&&Object.prototype.hasOwnProperty.call(n,r))return(...r)=>{let n=pi(e)?e(...r):e,i=pi(t)?t(...r):t;return /*@__PURE__*/c(rb)({},n,i,po)}}pa(lw),pa(lx);var rb=h("5Gn6I"),eX=h("acw62"),ps={},pl="undefined"!=typeof Element,pu="function"==typeof Map,pc="function"==typeof Set,pd="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function pf(e,t={}){var r;let{styleConfig:n,...i}=t,{theme:a,colorMode:o}=pn(),s=e?nO(a,`components.${e}`):void 0,l=n||s,u=/*@__PURE__*/c(rb)({theme:a,colorMode:o},null!=(r=null==l?void 0:l.defaultProps)?r:{},nN(function(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}(i,["children"]))),d=(0,eX.useRef)({});if(l){let e=(e=>{var t;let{variant:r,size:n,theme:i}=e,a=function(e){let t=e.__breakpoints;return function(e,r,n,i){var a,o,s;if(!t)return;let l={},u=(s=t.toArrayValue,Array.isArray(n)?n:rf(n)?s(n):null!=n?[n]:void 0);if(!u)return l;let d=u.length,f=1===d,h=!!e.parts;for(let n=0;n<d;n++){let s=t.details[n],d=t.details[function(e,t){for(let r=t+1;r<e.length;r++)if(null!=e[r])return r;return -1}(u,n)],p=nd(s.minW,null==d?void 0:d._minW),m=rh(null==(a=e[r])?void 0:a[u[n]],i);if(m){if(h){null==(o=e.parts)||o.forEach(e=>{/*@__PURE__*/c(rb)(l,{[e]:f?m[e]:{[p]:m[e]}})});continue}if(!h){f?/*@__PURE__*/c(rb)(l,m):l[p]=m;continue}l[p]=m}}return l}}(i);return /*@__PURE__*/c(rb)({},rh(null!=(t=l.baseStyle)?t:{},e),a(l,"sizes",n,e),a(l,"variants",r,e))})(u),t=/*@__PURE__*/c(ps)(d.current,e);t||(d.current=e)}return d.current}function ph(e,t={}){return pf(e,t)}function pp(e,t={}){return pf(e,t)}// end fast-deep-equal
ps=function(e,t){try{return(// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js
function e(t,r){// START: fast-deep-equal es6/index.js 3.1.3
if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var n,i,a,o;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(i=n;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(pu&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(o=t.entries();!(i=o.next()).done;)if(!r.has(i.value[0]))return!1;for(o=t.entries();!(i=o.next()).done;)if(!e(i.value[1],r.get(i.value[0])))return!1;return!0}if(pc&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(o=t.entries();!(i=o.next()).done;)if(!r.has(i.value[0]))return!1;return!0}// END: Modifications
if(pd&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((n=t.length)!=r.length)return!1;for(i=n;0!=i--;)if(t[i]!==r[i])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;// START: Modifications:
// Apply guards for `Object.create(null)` handling. See:
// - https://github.com/FormidableLabs/react-fast-compare/issues/64
// - https://github.com/epoberezkin/fast-deep-equal/issues/49
if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof r.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof r.toString)return t.toString()===r.toString();if((n=// END: Modifications
(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,a[i]))return!1;// END: fast-deep-equal
// START: react-fast-compare
// custom handling for DOM elements
if(pl&&t instanceof Element)return!1;// custom handling for React/Preact
for(i=n;0!=i--;)if(("_owner"!==a[i]&&"__v"!==a[i]&&"__o"!==a[i]||!t.$$typeof)&&!e(t[a[i]],r[a[i]]))return!1;// END: react-fast-compare
// START: fast-deep-equal
return!0}return t!=t&&r!=r}(e,t))}catch(e){if((e.message||"").match(/stack|recursion/i))return(// warn on circular references, don't crash
// browsers give this different errors name and messages:
// chrome/safari: "RangeError", "Maximum call stack size exceeded"
// firefox: "InternalError", too much recursion"
// edge: "Error", "Out of stack space"
console.warn("react-fast-compare cannot handle circular refs"),!1);// some other error. we should definitely know about these
throw e}};var pm={path:/* @__PURE__ */(0,p.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[/* @__PURE__ */(0,p.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),/* @__PURE__ */(0,p.jsx)("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),/* @__PURE__ */(0,p.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},pg=pr((e,t)=>{let{as:r,viewBox:n,color:i="currentColor",focusable:a=!1,children:o,className:s,__css:l,...u}=e,c=rd("chakra-icon",s),d=ph("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:i,...l,...d},h={ref:t,focusable:a,className:c,__css:f},m=null!=n?n:pm.viewBox;if(r&&"string"!=typeof r)return/* @__PURE__ */(0,p.jsx)(h7.svg,{as:r,...h,...u});let g=null!=o?o:pm.path;return/* @__PURE__ */(0,p.jsx)(h7.svg,{verticalAlign:"middle",viewBox:m,...h,...u,children:g})});function pv(e){return/* @__PURE__ */(0,p.jsx)(pg,{viewBox:"0 0 24 24",...e,children:/* @__PURE__ */(0,p.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}pg.displayName="Icon";var pb=t5({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),py=pr((e,t)=>{let r=ph("Spinner",e),{label:n="Loading...",thickness:i="2px",speed:a="0.45s",emptyColor:o="transparent",className:s,...l}=nR(e),u=rd("chakra-spinner",s),c={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:i,borderBottomColor:o,borderLeftColor:o,animation:`${pb} ${a} linear infinite`,...r};return/* @__PURE__ */(0,p.jsx)(h7.div,{ref:t,__css:c,className:u,...l,children:n&&/* @__PURE__ */(0,p.jsx)(h7.span,{srOnly:!0,children:n})})});py.displayName="Spinner";var[pw,px]=t9({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[pk,pS]=t9({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),p_={info:{icon:function(e){return/* @__PURE__ */(0,p.jsx)(pg,{viewBox:"0 0 24 24",...e,children:/* @__PURE__ */(0,p.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})},colorScheme:"blue"},warning:{icon:pv,colorScheme:"orange"},success:{icon:function(e){return/* @__PURE__ */(0,p.jsx)(pg,{viewBox:"0 0 24 24",...e,children:/* @__PURE__ */(0,p.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})},colorScheme:"green"},error:{icon:pv,colorScheme:"red"},loading:{icon:py,colorScheme:"blue"}},pE=pr(function(e,t){var r;let{status:n="info",addRole:i=!0,...a}=nR(e),o=null!=(r=e.colorScheme)?r:p_[n].colorScheme,s=pp("Alert",{...e,colorScheme:o}),l={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...s.container};return/* @__PURE__ */(0,p.jsx)(pw,{value:{status:n},children:/* @__PURE__ */(0,p.jsx)(pk,{value:s,children:/* @__PURE__ */(0,p.jsx)(h7.div,{"data-status":n,role:i?"alert":void 0,ref:t,...a,className:rd("chakra-alert",e.className),__css:l})})})});pE.displayName="Alert";var pC=pr(function(e,t){let r=pS(),{status:n}=px(),i={display:"inline",...r.description};return/* @__PURE__ */(0,p.jsx)(h7.div,{ref:t,"data-status":n,...e,className:rd("chakra-alert__desc",e.className),__css:i})});function pT(e){let{status:t}=px(),r=p_[t].icon,n=pS(),i="loading"===t?n.spinner:n.icon;return/* @__PURE__ */(0,p.jsx)(h7.span,{display:"inherit","data-status":t,...e,className:rd("chakra-alert__icon",e.className),__css:i,children:e.children||/* @__PURE__ */(0,p.jsx)(r,{h:"100%",w:"100%"})})}pC.displayName="AlertDescription",pT.displayName="AlertIcon";var pP=pr(function(e,t){let r=pS(),{status:n}=px();return/* @__PURE__ */(0,p.jsx)(h7.div,{ref:t,"data-status":n,...e,className:rd("chakra-alert__title",e.className),__css:r.title})});function pI(e){return/* @__PURE__ */(0,p.jsx)(pg,{focusable:"false","aria-hidden":!0,...e,children:/* @__PURE__ */(0,p.jsx)("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}pP.displayName="AlertTitle";var pA=pr(function(e,t){let r=ph("CloseButton",e),{children:n,isDisabled:i,__css:a,...o}=nR(e);return/* @__PURE__ */(0,p.jsx)(h7.button,{type:"button","aria-label":"Close",ref:t,disabled:i,__css:{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,...r,...a},...o,children:n||/* @__PURE__ */(0,p.jsx)(pI,{width:"1em",height:"1em"})})});pA.displayName="CloseButton";var pR=function(e){let t=e,r=/* @__PURE__ */new Set,n=e=>{t=e(t),r.forEach(e=>e())};return{getState:()=>t,subscribe:t=>(r.add(t),()=>{n(()=>e),r.delete(t)}),/**
     * Delete a toast record at its position
     */removeToast:(e,t)=>{n(r=>({...r,// id may be string or number
    // eslint-disable-next-line eqeqeq
    [t]:r[t].filter(t=>t.id!=e)}))},notify:(e,t)=>{let r=function(e,t={}){var r,n;pO+=1;let i=null!=(r=t.id)?r:pO,a=null!=(n=t.position)?n:"bottom";return{id:i,message:e,position:a,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>pR.removeToast(String(i),a),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}(e,t),{position:i,id:a}=r;return n(e=>{var t,n;let a=i.includes("top"),o=a?[r,...null!=(t=e[i])?t:[]]:[...null!=(n=e[i])?n:[],r];return{...e,[i]:o}}),a},update:(e,t)=>{e&&n(r=>{let n={...r},{position:i,index:a}=lS(n,e);return i&&-1!==a&&(n[i][a]={...n[i][a],...t,message:pN(t)}),n})},closeAll:({positions:e}={})=>{n(t=>(null!=e?e:["bottom","bottom-right","bottom-left","top","top-left","top-right"]).reduce((e,r)=>(e[r]=t[r].map(e=>({...e,requestClose:!0})),e),{...t}))},close:e=>{n(t=>{let r=l_(t,e);return r?{...t,[r]:t[r].map(t=>t.id==e?{...t,requestClose:!0}:t)}:t})},isActive:e=>!!lS(pR.getState(),e).position}}({top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]}),pO=0,pM=e=>{let{status:t,variant:r="solid",id:n,title:i,isClosable:a,onClose:o,description:s,colorScheme:l,icon:u}=e,c=n?{root:`toast-${n}`,title:`toast-${n}-title`,description:`toast-${n}-description`}:void 0;return/* @__PURE__ */(0,p.jsxs)(pE,{addRole:!1,status:t,variant:r,id:null==c?void 0:c.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:l,children:[/* @__PURE__ */(0,p.jsx)(pT,{children:u}),/* @__PURE__ */(0,p.jsxs)(h7.div,{flex:"1",maxWidth:"100%",children:[i&&/* @__PURE__ */(0,p.jsx)(pP,{id:null==c?void 0:c.title,children:i}),s&&/* @__PURE__ */(0,p.jsx)(pC,{id:null==c?void 0:c.description,display:"block",children:s})]}),a&&/* @__PURE__ */(0,p.jsx)(pA,{size:"sm",onClick:o,position:"absolute",insetEnd:1,top:1})]})};function pN(e={}){let{render:t,toastComponent:r=pM}=e;return n=>"function"==typeof t?t({...n,...e}):/* @__PURE__ */(0,p.jsx)(r,{...n,...e})}function pz(){let e=(0,eX.useRef)(!1);return lA(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var eX=(h("acw62"),h("acw62"),h("acw62"),h("acw62"),h("acw62"));/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */class pj extends eX.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}/**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */componentDidUpdate(){}render(){return this.props.children}}function pL({children:e,isPresent:t}){let r=(0,eX.useId)(),n=(0,eX.useRef)(null),i=(0,eX.useRef)({width:0,height:0,top:0,left:0});return(/**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */(0,eX.useInsertionEffect)(()=>{let{width:e,height:a,top:o,left:s}=i.current;if(t||!n.current||!e||!a)return;n.current.dataset.motionPopId=r;let l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            top: ${o}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),eX.createElement(pj,{isPresent:t,childRef:n,sizeRef:i},eX.cloneElement(e,{ref:n})))}const pD=({children:e,initial:t,isPresent:r,onExitComplete:n,custom:i,presenceAffectsLayout:a,mode:o})=>{let s=uM(pF),l=(0,eX.useId)(),u=(0,eX.useMemo)(()=>({id:l,initial:t,isPresent:r,custom:i,onExitComplete:e=>{for(let t of(s.set(e,!0),s.values()))if(!t)return;// can stop searching when any is incomplete
    n&&n()},register:e=>(s.set(e,!1),()=>s.delete(e))}),/**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */a?void 0:[r]);return(0,eX.useMemo)(()=>{s.forEach((e,t)=>s.set(t,!1))},[r]),/**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */eX.useEffect(()=>{r||s.size||!n||n()},[r]),"popLayout"===o&&(e=eX.createElement(pL,{isPresent:r},e)),eX.createElement(lP.Provider,{value:u},e)};function pF(){return new Map}var eX=h("acw62");const p$=e=>e.key||"",pB=({children:e,custom:t,initial:r=!0,onExitComplete:n,exitBeforeEnter:i,presenceAffectsLayout:a=!0,mode:o="sync"})=>{var s;uF(!i,"Replace exitBeforeEnter with mode='wait'");// We want to force a re-render once all exiting animations have finished. We
// either use a local forceRender function, or one from a parent context if it exists.
let l=(0,eX.useContext)(lV).forceRender||function(){let e=pz(),[t,r]=(0,eX.useState)(0),n=(0,eX.useCallback)(()=>{e.current&&r(t+1)},[t]),i=(0,eX.useCallback)(()=>uV.postRender(n),[n]);return[i,t]}()[0],u=pz(),c=function(e){let t=[];return(// We use forEach here instead of map as map mutates the component key by preprending `.$`
(0,eX.Children).forEach(e,e=>{(0,eX.isValidElement)(e)&&t.push(e)}),t)}(e),d=c,f=(0,eX.useRef)(new Map).current,h=(0,eX.useRef)(d),p=(0,eX.useRef)(new Map).current,m=(0,eX.useRef)(!0);if(lA(()=>{m.current=!1,function(e,t){e.forEach(e=>{let r=p$(e);t.set(r,e)})}(c,p),h.current=d}),s=()=>{m.current=!0,p.clear(),f.clear()},(0,eX.useEffect)(()=>()=>s(),[]),m.current)return eX.createElement(eX.Fragment,null,d.map(e=>eX.createElement(pD,{key:p$(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:a,mode:o},e)));// If this is a subsequent render, deal with entering and exiting children
d=[...d];// Diff the keys of the currently-present and target children to update our
// exiting list.
let g=h.current.map(p$),v=c.map(p$),b=g.length;for(let e=0;e<b;e++){let t=g[e];-1!==v.indexOf(t)||f.has(t)||f.set(t,void 0)}return"wait"===o&&f.size&&(d=[]),// Loop through all currently exiting components and clone them to overwrite `animate`
// with any `exit` prop they might have defined.
f.forEach((e,r)=>{// If this component is actually entering again, early return
if(-1!==v.indexOf(r))return;let i=p.get(r);if(!i)return;let s=g.indexOf(r),m=e;m||(m=eX.createElement(pD,{key:p$(i),isPresent:!1,onExitComplete:()=>{p.delete(r),f.delete(r);// Remove this child from the present children
let e=h.current.findIndex(e=>e.key===r);// Defer re-rendering until all exiting children have indeed left
if(h.current.splice(e,1),!f.size){if(h.current=c,!1===u.current)return;l(),n&&n()}},custom:t,presenceAffectsLayout:a,mode:o},i),f.set(r,m)),d.splice(s,0,m)}),// Add `MotionContext` even to children that don't need it to ensure we're rendering
// the same tree between renders
d=d.map(e=>{let t=e.key;return f.has(t)?e:eX.createElement(pD,{key:p$(e),isPresent:!0,presenceAffectsLayout:a,mode:o},e)}),eX.createElement(eX.Fragment,null,f.size?d:d.map(e=>(0,eX.cloneElement)(e)))};var eX=h("acw62"),[pV,pU]=t9({strict:!1,name:"PortalContext"}),pW="chakra-portal",pH=e=>/* @__PURE__ */(0,p.jsx)("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),pq=e=>{let{appendToParentPortal:t,children:r}=e,[n,i]=(0,eX.useState)(null),a=(0,eX.useRef)(null),[,o]=(0,eX.useState)({});(0,eX.useEffect)(()=>o({}),[]);let s=pU(),l=re();rs(()=>{if(!n)return;let e=n.ownerDocument,r=t&&null!=s?s:e.body;if(!r)return;a.current=e.createElement("div"),a.current.className=pW,r.appendChild(a.current),o({});let i=a.current;return()=>{r.contains(i)&&r.removeChild(i)}},[n]);let u=(null==l?void 0:l.zIndex)?/* @__PURE__ */(0,p.jsx)(pH,{zIndex:null==l?void 0:l.zIndex,children:r}):r;return a.current?(0,m.createPortal)(/* @__PURE__ */(0,p.jsx)(pV,{value:a.current,children:u}),a.current):/* @__PURE__ */(0,p.jsx)("span",{ref:e=>{e&&i(e)}})},pG=e=>{let{children:t,containerRef:r,appendToParentPortal:n}=e,i=r.current,a=null!=i?i:"undefined"!=typeof window?document.body:void 0,o=(0,eX.useMemo)(()=>{let e=null==i?void 0:i.ownerDocument.createElement("div");return e&&(e.className=pW),e},[i]),[,s]=(0,eX.useState)({});return(rs(()=>s({}),[]),rs(()=>{if(o&&a)return a.appendChild(o),()=>{a.removeChild(o)}},[o,a]),a&&o)?(0,m.createPortal)(/* @__PURE__ */(0,p.jsx)(pV,{value:n?o:null,children:t}),o):null};function pY(e){let t={appendToParentPortal:!0,...e},{containerRef:r,...n}=t;return r?/* @__PURE__ */(0,p.jsx)(pG,{containerRef:r,...n}):/* @__PURE__ */(0,p.jsx)(pq,{...n})}pY.className=pW,pY.selector=".chakra-portal",pY.displayName="Portal";var eX=h("acw62"),[pK,pX]=t9({name:"ToastOptionsContext",strict:!1}),pQ=e=>{let t=(0,eX.useSyncExternalStore)(pR.subscribe,pR.getState,pR.getState),{motionVariants:r,component:n=pt,portalProps:i}=e,a=Object.keys(t),o=a.map(e=>{let i=t[e];return/* @__PURE__ */(0,p.jsx)("div",{role:"region","aria-live":"polite","aria-label":"Notifications",id:`chakra-toast-manager-${e}`,style:function(e){let t=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,r=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,n=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",i=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:"top"===e||"bottom"===e?"0 auto":void 0,top:t,bottom:r,right:n,left:i}}(e),children:/* @__PURE__ */(0,p.jsx)(pB,{initial:!1,children:i.map(e=>/* @__PURE__ */(0,p.jsx)(n,{motionVariants:r,...e},e.id))})},e)});return/* @__PURE__ */(0,p.jsx)(pY,{...i,children:o})},pJ=e=>function({children:t,theme:r=e,toastOptions:n,...i}){return/* @__PURE__ */(0,p.jsxs)(nU,{theme:r,...i,children:[/* @__PURE__ */(0,p.jsx)(pK,{value:null==n?void 0:n.defaultOptions,children:t}),/* @__PURE__ */(0,p.jsx)(pQ,{...n})]})},pZ=pJ(lw);pJ(lx);var eX=h("acw62");const p0=(0,eX.createContext)(void 0);/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */var p1=function(){return(p1=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function p2(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function p5(e,t,r){if(r||2==arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var eX=h("acw62"),p3={};//
p3=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;// Test for A's keys different from B.
for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var u=a[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(i=r?r.call(n,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0};var p4="-ms-",p6="-moz-",p8="-webkit-",p9="comm",p7="rule",me="decl",mt="@keyframes",mr=Math.abs,mn=String.fromCharCode,mi=Object.assign;function ma(e,t){return(e=t.exec(e))?e[0]:e}function mo(e,t,r){return e.replace(t,r)}function ms(e,t){return e.indexOf(t)}function ml(e,t){return 0|e.charCodeAt(t)}function mu(e,t,r){return e.slice(t,r)}function mc(e){return e.length}function md(e,t){return t.push(e),e}function mf(e,t){return e.filter(function(e){return!ma(e,t)})}var mh=1,mp=1,mm=0,mg=0,mv=0,mb="";function my(e,t,r,n,i,a,o,s){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:mh,column:mp,length:o,return:"",siblings:s}}function mw(e,t){return mi(my("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mx(e){for(;e.root;)e=mw(e.root,{children:[e]});md(e,e.siblings)}function mk(){return mv=mg<mm?ml(mb,mg++):0,mp++,10===mv&&(mp=1,mh++),mv}function mS(){return ml(mb,mg)}function m_(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mE(e){var t,r;return(t=mg-1,r=function e(t){for(;mk();)switch(mv){case t:return mg;case 34:case 39:34!==t&&39!==t&&e(mv);break;case 40:41===t&&e(t);break;case 92:mk()}return mg}(91===e?e+2:40===e?e+1:e),mu(mb,t,r)).trim()}function mC(e,t,r,n,i,a,o,s,l,u,c,d){for(var f=i-1,h=0===i?a:[""],p=h.length,m=0,g=0,v=0;m<n;++m)for(var b=0,y=mu(e,f+1,f=mr(g=o[m])),w=e;b<p;++b)(w=(g>0?h[b]+" "+y:mo(y,/&\f/g,h[b])).trim())&&(l[v++]=w);return my(e,t,r,0===i?p7:s,l,u,c,d)}function mT(e,t,r,n,i){return my(e,t,r,me,mu(e,0,n),mu(e,n+1,-1),n,i)}function mP(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function mI(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case me:return e.return=e.return||e.value;case p9:return"";case mt:return e.return=e.value+"{"+mP(e.children,n)+"}";case p7:if(!mc(e.value=e.props.join(",")))return""}return mc(r=mP(e.children,n))?e.return=e.value+"{"+r+"}":""}function mA(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case me:e.return=function e(t,r,n){var i;switch(i=r,45^ml(t,0)?(((i<<2^ml(t,0))<<2^ml(t,1))<<2^ml(t,2))<<2^ml(t,3):0){case 5103:return p8+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return p8+t+t;case 4789:return p6+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return p8+t+p6+t+p4+t+t;case 5936:switch(ml(t,r+11)){case 114:return p8+t+p4+mo(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return p8+t+p4+mo(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return p8+t+p4+mo(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return p8+t+p4+t+t;case 6165:return p8+t+p4+"flex-"+t+t;case 5187:return p8+t+mo(t,/(\w+).+(:[^]+)/,p8+"box-$1$2"+p4+"flex-$1$2")+t;case 5443:return p8+t+p4+"flex-item-"+mo(t,/flex-|-self/g,"")+(ma(t,/flex-|baseline/)?"":p4+"grid-row-"+mo(t,/flex-|-self/g,""))+t;case 4675:return p8+t+p4+"flex-line-pack"+mo(t,/align-content|flex-|-self/g,"")+t;case 5548:return p8+t+p4+mo(t,"shrink","negative")+t;case 5292:return p8+t+p4+mo(t,"basis","preferred-size")+t;case 6060:return p8+"box-"+mo(t,"-grow","")+p8+t+p4+mo(t,"grow","positive")+t;case 4554:return p8+mo(t,/([^-])(transform)/g,"$1"+p8+"$2")+t;case 6187:return mo(mo(mo(t,/(zoom-|grab)/,p8+"$1"),/(image-set)/,p8+"$1"),t,"")+t;case 5495:case 3959:return mo(t,/(image-set\([^]*)/,p8+"$1$`$1");case 4968:return mo(mo(t,/(.+:)(flex-)?(.*)/,p8+"box-pack:$3"+p4+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+p8+t+t;case 4200:if(!ma(t,/flex-|baseline/))return p4+"grid-column-align"+mu(t,r)+t;break;case 2592:case 3360:return p4+mo(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,ma(e.props,/grid-\w+-end/)}))return~ms(t+(n=n[r].value),"span")?t:p4+mo(t,"-start","")+t+p4+"grid-row-span:"+(~ms(n,"span")?ma(n,/\d+/):+ma(n,/\d+/)-+ma(t,/\d+/))+";";return p4+mo(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return ma(e.props,/grid-\w+-start/)})?t:p4+mo(mo(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return mo(t,/(.+)-inline(.+)/,p8+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mc(t)-1-r>6)switch(ml(t,r+1)){case 109:if(45!==ml(t,r+4))break;case 102:return mo(t,/(.+:)(.+)-([^]+)/,"$1"+p8+"$2-$3$1"+p6+(108==ml(t,r+3)?"$3":"$2-$3"))+t;case 115:return~ms(t,"stretch")?e(mo(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return mo(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,i,a,o,s){return p4+r+":"+n+s+(i?p4+r+"-span:"+(a?o:+o-+n)+s:"")+t});case 4949:if(121===ml(t,r+6))return mo(t,":",":"+p8)+t;break;case 6444:switch(ml(t,45===ml(t,14)?18:11)){case 120:return mo(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+p8+(45===ml(t,14)?"inline-":"")+"box$3$1"+p8+"$2$3$1"+p4+"$2box$3")+t;case 100:return mo(t,":",":"+p4)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return mo(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case mt:return mP([mw(e,{value:mo(e.value,"@","@"+p8)})],n);case p7:if(e.length)return(r=e.props).map(function(t){switch(ma(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mx(mw(e,{props:[mo(t,/:(read-\w+)/,":"+p6+"$1")]})),mx(mw(e,{props:[t]})),mi(e,{props:mf(r,n)});break;case"::placeholder":mx(mw(e,{props:[mo(t,/:(plac\w+)/,":"+p8+"input-$1")]})),mx(mw(e,{props:[mo(t,/:(plac\w+)/,":"+p6+"$1")]})),mx(mw(e,{props:[mo(t,/:(plac\w+)/,p4+"input-$1")]})),mx(mw(e,{props:[t]})),mi(e,{props:mf(r,n)})}return""}).join("")}}var mR=(void 0!==v&&v.env,"data-styled"),mO="undefined"!=typeof window&&"HTMLElement"in window,mM=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:(void 0!==v&&v.env,void 0!==v&&v.env,!1)),mN=Object.freeze([]),mz=Object.freeze({}),mj=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mD=/(^-|-$)/g;function mF(e){return e.replace(mL,"-").replace(mD,"")}var m$=/(a)(d)/gi,mB=function(e){return String.fromCharCode(e+(e>25?39:97))};function mV(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=mB(t%52)+r;return(mB(t%52)+r).replace(m$,"$1-$2")}var mU,mW,mH,mq,mG,mY,mK,mX,mQ,mJ,mZ,m0,m1,m2,m5,m3,m4,m6,m8,m9,m7,ge,gt,gr,gn,gi,ga,go,gs,gl,gu,gc,gd,gf,gh,gp=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},gm=function(e){return gp(5381,e)};function gg(e){return"string"==typeof e}var gv="function"==typeof Symbol&&Symbol.for,gb=gv?Symbol.for("react.memo"):60115,gy=gv?Symbol.for("react.forward_ref"):60112,gw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gS=((gh={})[gy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gh[gb]=gk,gh);function g_(e){return("type"in e&&e.type.$$typeof)===gb?gk:"$$typeof"in e?gS[e.$$typeof]:gw}var gE=Object.defineProperty,gC=Object.getOwnPropertyNames,gT=Object.getOwnPropertySymbols,gP=Object.getOwnPropertyDescriptor,gI=Object.getPrototypeOf,gA=Object.prototype;function gR(e){return"function"==typeof e}function gO(e){return"object"==typeof e&&"styledComponentId"in e}function gM(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function gN(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function gz(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gj(e,t){Object.defineProperty(e,"toString",{value:t})}function gL(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var gD=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw gL(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=n;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,a=n;a<i;a++)t+="".concat(this.tag.getRule(a)).concat("/*!sc*/\n");return t},e}(),gF=new Map,g$=new Map,gB=1,gV=function(e){if(gF.has(e))return gF.get(e);for(;g$.has(gB);)gB++;var t=gB++;return gF.set(e,t),g$.set(t,e),t},gU=function(e,t){gF.set(e,t),g$.set(t,e)},gW="style[".concat(mR,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),gH=new RegExp("^".concat(mR,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gq=function(e,t,r){for(var n,i=r.split(","),a=0,o=i.length;a<o;a++)(n=i[a])&&e.registerName(t,n)},gG=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split("/*!sc*/\n"),i=[],a=0,o=n.length;a<o;a++){var s=n[a].trim();if(s){var l=s.match(gH);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(gU(c,u),gq(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function gY(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var gK=function(e){var t,r=document.head,n=e||r,i=document.createElement("style"),a=(t=Array.from(n.querySelectorAll("style[".concat(mR,"]"))))[t.length-1],o=void 0!==a?a.nextSibling:null;i.setAttribute(mR,"active"),i.setAttribute("data-styled-version","6.0.8");var s=gY();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},gX=function(){function e(e){this.element=gK(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}throw gL(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),gQ=function(){function e(e){this.element=gK(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),gJ=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),gZ=mO,g0={isServer:!mO,useCSSOMInjection:!mM},g1=function(){function e(e,t,r){void 0===e&&(e=mz),void 0===t&&(t={});var n=this;this.options=p1(p1({},g0),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&mO&&gZ&&(gZ=!1,function(e){for(var t=document.querySelectorAll(gW),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(mR)&&(gG(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this)),gj(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++)(function(r){var i=g$.get(r);if(void 0!==i){var a=e.names.get(i),o=t.getGroup(r);if(void 0!==a&&0!==o.length){var s="".concat(mR,".g").concat(r,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),n+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat("/*!sc*/\n")}}})(i);return n}(n)})}return e.registerId=function(e){return gV(e)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(p1(p1({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,r,n;return this.tag||(this.tag=(r=(t=this.options).useCSSOMInjection,n=t.target,e=t.isServer?new gJ(n):r?new gX(n):new gQ(n),new gD(e)))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(gV(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(gV(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(gV(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),g2=/&/g,g5=/^\s*\/\/.*$/gm;function g3(e){var t,r,n,i=void 0===e?mz:e,a=i.options,o=void 0===a?mz:a,s=i.plugins,l=void 0===s?mN:s,u=function(e,n,i){return i===r||i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,"").length>0?".".concat(t):e},c=l.slice();c.push(function(e){e.type===p7&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(g2,r).replace(n,u))}),o.prefix&&c.push(mA),c.push(mI);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,r=i,n=RegExp("\\".concat(r,"\\b"),"g");var l,u,d,f,h,p=e.replace(g5,""),m=(h=function e(t,r,n,i,a,o,s,l,u){for(var c,d=0,f=0,h=s,p=0,m=0,g=0,v=1,b=1,y=1,w=0,x="",k=a,S=o,_=i,E=x;b;)switch(g=w,w=mk()){case 40:if(108!=g&&58==ml(E,h-1)){-1!=ms(E+=mo(mE(w),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:E+=mE(w);break;case 9:case 10:case 13:case 32:E+=function(e){for(;mv=mS();)if(mv<33)mk();else break;return m_(e)>2||m_(mv)>3?"":" "}(g);break;case 92:E+=function(e,t){for(var r;--t&&mk()&&!(mv<48)&&!(mv>102)&&(!(mv>57)||!(mv<65))&&(!(mv>70)||!(mv<97)););return r=mg+(t<6&&32==mS()&&32==mk()),mu(mb,e,r)}(mg-1,7);continue;case 47:switch(mS()){case 42:case 47:md(my(c=function(e,t){for(;mk();)if(e+mv===57)break;else if(e+mv===84&&47===mS())break;return"/*"+mu(mb,t,mg-1)+"*"+mn(47===e?e:mk())}(mk(),mg),r,n,p9,mn(mv),mu(c,2,-2),0,u),u);break;default:E+="/"}break;case 123*v:l[d++]=mc(E)*y;case 125*v:case 59:case 0:switch(w){case 0:case 125:b=0;case 59+f:-1==y&&(E=mo(E,/\f/g,"")),m>0&&mc(E)-h&&md(m>32?mT(E+";",i,n,h-1,u):mT(mo(E," ","")+";",i,n,h-2,u),u);break;case 59:E+=";";default:if(md(_=mC(E,r,n,d,f,a,l,x,k=[],S=[],h,o),o),123===w){if(0===f)e(E,r,_,_,k,o,h,l,S);else switch(99===p&&110===ml(E,3)?100:p){case 100:case 108:case 109:case 115:e(t,_,_,i&&md(mC(t,_,_,0,0,a,l,x,a,k=[],h,S),S),a,S,h,l,i?k:S);break;default:e(E,_,_,_,[""],S,0,l,S)}}}d=f=m=0,v=y=1,x=E="",h=s;break;case 58:h=1+mc(E),m=g;default:if(v<1){if(123==w)--v;else if(125==w&&0==v++&&125==(mv=mg>0?ml(mb,--mg):0,mp--,10===mv&&(mp=1,mh--),mv))continue}switch(E+=mn(w),w*v){case 38:y=f>0?1:(E+="\f",-1);break;case 44:l[d++]=(mc(E)-1)*y,y=1;break;case 64:45===mS()&&(E+=mE(mk())),p=mS(),f=h=mc(x=E+=function(e){for(;!m_(mS());)mk();return mu(mb,e,mg)}(mg)),w++;break;case 45:45===g&&2==mc(E)&&(v=0)}}return o}("",null,null,null,[""],(f=d=a||i?"".concat(a," ").concat(i," { ").concat(p," }"):p,mh=mp=1,mm=mc(mb=f),mg=0,d=[]),0,[0],d),mb="",h);o.namespace&&(m=function e(t,r){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(e){return"".concat(r," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,r)),t})}(m,o.namespace));var g=[];return mP(m,(u=(l=c.concat(function(e){var t;!e.root&&(e=e.return)&&(t=e,g.push(t))})).length,function(e,t,r,n){for(var i="",a=0;a<u;a++)i+=l[a](e,t,r,n)||"";return i})),g};return d.hash=l.length?l.reduce(function(e,t){return t.name||gL(15),gp(e,t.name)},5381).toString():"",d}var g4=new g1,g6=g3(),g8=/*@__PURE__*/c(eX).createContext({shouldForwardProp:void 0,styleSheet:g4,stylis:g6}),g9=(g8.Consumer,/*@__PURE__*/c(eX).createContext(void 0));function g7(){return(0,eX.useContext)(g8)}function ve(e){var t=(0,eX.useState)(e.stylisPlugins),r=t[0],n=t[1],i=g7().styleSheet,a=(0,eX.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),o=(0,eX.useMemo)(function(){return g3({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,eX.useEffect)(function(){/*@__PURE__*/c(p3)(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,eX.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:o}},[e.shouldForwardProp,a,o]);return /*@__PURE__*/c(eX).createElement(g8.Provider,{value:s},/*@__PURE__*/c(eX).createElement(g9.Provider,{value:o},e.children))}var vt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=g6);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,gj(this,function(){throw gL(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=g6),this.name+e.hash},e}();function vr(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;n>="A"&&n<="Z"?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var vn=function(e){return null==e||!1===e||""===e},vi=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!vn(n)&&(Array.isArray(n)&&n.isCss||gR(n)?t.push("".concat(vr(r),":"),n,";"):gz(n)?t.push.apply(t,p5(p5(["".concat(r," {")],vi(n),!1),["}"],!1)):t.push("".concat(vr(r),": ").concat(null==n||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||r in tz||r.startsWith("--")?String(n).trim():"".concat(n,"px"),";")))}return t};function va(e,t,r,n){return vn(e)?[]:gO(e)?[".".concat(e.styledComponentId)]:gR(e)?!gR(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:va(e(t),t,r,n):e instanceof vt?r?(e.inject(r,n),[e.getName(n)]):[e]:gz(e)?vi(e):Array.isArray(e)?Array.prototype.concat.apply(mN,e.map(function(e){return va(e,t,r,n)})):[e.toString()]}function vo(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(gR(r)&&!gO(r))return!1}return!0}var vs=gm("6.0.8"),vl=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&vo(e),this.componentId=t,this.baseHash=gp(vs,t),this.baseStyle=r,g1.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=gM(n,this.staticRulesId);else{var i=gN(va(this.rules,e,t,r)),a=mV(gp(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=r(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}n=gM(n,a),this.staticRulesId=a}}else{for(var s=gp(this.baseHash,r.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=gN(va(c,e,t,r));s=gp(s,d+u),l+=d}}if(l){var f=mV(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),n=gM(n,f)}}return n},e}(),vu=/*@__PURE__*/c(eX).createContext(void 0);vu.Consumer;var vc={};function vd(e,t,r){var n,i,a,o,s=gO(e),l=!gg(e),u=t.attrs,d=void 0===u?mN:u,f=t.componentId,h=void 0===f?(n=t.displayName,i=t.parentComponentId,vc[a="string"!=typeof n?"sc":mF(n)]=(vc[a]||0)+1,o="".concat(a,"-").concat(mV(gm("6.0.8"+a+vc[a])>>>0)),i?"".concat(i,"-").concat(o):o):f,p=(void 0===t.displayName&&(gg(e)||e.displayName||e.name),t.displayName&&t.componentId?"".concat(mF(t.displayName),"-").concat(t.componentId):t.componentId||h),m=s&&e.attrs?e.attrs.concat(d).filter(Boolean):d,g=t.shouldForwardProp;if(s&&e.shouldForwardProp){var v=e.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;g=function(e,t){return v(e,t)&&b(e,t)}}else g=v}var y=new vl(r,p,s?e.componentStyle:void 0),w=/*@__PURE__*/c(eX).forwardRef(function(e,t){return function(e,t,r){var n,i,a=e.attrs,o=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,u=e.styledComponentId,d=e.target,f=/*@__PURE__*/c(eX).useContext(vu),h=g7(),p=e.shouldForwardProp||h.shouldForwardProp,m=function(e,t,r){for(var n,i=p1(p1({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var o=gR(n=e[a])?n(i):n;for(var s in o)i[s]="className"===s?gM(i[s],o[s]):"style"===s?p1(p1({},i[s]),o[s]):o[s]}return t.className&&(i.className=gM(i.className,t.className)),i}(a,t,(void 0===(n=s)&&(n=mz),t.theme!==n.theme&&t.theme||f||n.theme||mz)),g=m.as||d,v={};for(var b in m)void 0===m[b]||"$"===b[0]||"as"===b||"theme"===b||("forwardedAs"===b?v.as=m.forwardedAs:p&&!p(b,g)||(v[b]=m[b]));var y=(i=g7(),o.generateAndInjectStyles(m,i.styleSheet,i.stylis)),w=gM(l,u);return y&&(w+=" "+y),m.className&&(w+=" "+m.className),v[gg(g)&&!mj.has(g)?"class":"className"]=w,v.ref=r,(0,eX.createElement)(g,v)}(w,e,t)});return w.attrs=m,w.componentStyle=y,w.shouldForwardProp=g,w.foldedComponentIds=s?gM(e.foldedComponentIds,e.styledComponentId):"",w.styledComponentId=p,w.target=s?e.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=s?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0;n<t.length;n++)(function e(t,r,n){if(void 0===n&&(n=!1),!n&&!gz(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var i=0;i<r.length;i++)t[i]=e(t[i],r[i]);else if(gz(r))for(var i in r)t[i]=e(t[i],r[i]);return t})(e,t[n],!0);return e}({},e.defaultProps,t):t}}),gj(w,function(){return".".concat(w.styledComponentId)}),l&&function e(t,r,n){if("string"!=typeof r){if(gA){var i=gI(r);i&&i!==gA&&e(t,i,n)}var a=gC(r);gT&&(a=a.concat(gT(r)));for(var o=g_(t),s=g_(r),l=0;l<a.length;++l){var u=a[l];if(!(u in gx||n&&n[u]||s&&u in s||o&&u in o)){var c=gP(r,u);try{gE(t,u,c)}catch(e){}}}}return t}(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function vf(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var vh=function(e){return Object.assign(e,{isCss:!0})};function vp(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return gR(e)||gz(e)?vh(va(vf(mN,p5([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?va(e):vh(va(vf(e,t)))}var vm=function(e){return function e(t,r,n){if(void 0===n&&(n=mz),!r)throw gL(1,r);var i=function(e){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return t(r,n,vp.apply(void 0,p5([e],i,!1)))};return i.attrs=function(i){return e(t,r,p1(p1({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return e(t,r,p1(p1({},n),i))},i}(vd,e)};mj.forEach(function(e){vm[e]=vm(e)}),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=vo(e),g1.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var i=n(gN(va(this.rules,t,r,n)),""),a=this.componentId+e;r.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&g1.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=gY(),n=gN([r&&'nonce="'.concat(r,'"'),"".concat(mR,'="true"'),"".concat("data-styled-version",'="').concat("6.0.8",'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw gL(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw gL(2);var t,r=((t={})[mR]="",t["data-styled-version"]="6.0.8",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),n=gY();return n&&(r.nonce=n),[/*@__PURE__*/c(eX).createElement("style",p1({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new g1({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw gL(2);return /*@__PURE__*/c(eX).createElement(ve,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw gL(3)}}();var eX=h("acw62"),[vg,vv]=t9({strict:!1,name:"ButtonGroupContext"}),eX=h("acw62");function vb(e){let{children:t,className:r,...n}=e,i=(0,eX.isValidElement)(t)?(0,eX.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,a=rd("chakra-button__icon",r);return/* @__PURE__ */(0,p.jsx)(h7.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...n,className:a,children:i})}vb.displayName="ButtonIcon";var eX=h("acw62");function vy(e){let{label:t,placement:r,spacing:n="0.5rem",children:i=/* @__PURE__ */(0,p.jsx)(py,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:o,...s}=e,l=rd("chakra-button__spinner",a),u="start"===r?"marginEnd":"marginStart",c=(0,eX.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?n:0,fontSize:"1em",lineHeight:"normal",...o}),[o,t,u,n]);return/* @__PURE__ */(0,p.jsx)(h7.div,{className:l,...s,__css:c,children:i})}function vw(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(r){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}}vy.displayName="ButtonSpinner";var eX=(h("acw62"),h("acw62")),vx=pr((e,t)=>{let r=vv(),n=ph("Button",{...r,...e}),{isDisabled:i=null==r?void 0:r.isDisabled,isLoading:a,isActive:o,children:s,leftIcon:l,rightIcon:u,loadingText:c,iconSpacing:d="0.5rem",type:f,spinner:h,spinnerPlacement:m="start",className:g,as:v,...b}=nR(e),y=(0,eX.useMemo)(()=>{let e={...null==n?void 0:n._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...n,...!!r&&{_focus:e}}},[n,r]),{ref:w,type:x}=function(e){let[t,r]=(0,eX.useState)(!e),n=(0,eX.useCallback)(e=>{e&&r("BUTTON"===e.tagName)},[]);return{ref:n,type:t?"button":void 0}}(v),k={rightIcon:u,leftIcon:l,iconSpacing:d,children:s};return/* @__PURE__ */(0,p.jsxs)(h7.button,{ref:function(...e){return(0,eX.useMemo)(()=>vw(...e),e)}(t,w),as:v,type:null!=f?f:x,"data-active":rm(o),"data-loading":rm(a),__css:y,className:rd("chakra-button",g),...b,disabled:i||a,children:[a&&"start"===m&&/* @__PURE__ */(0,p.jsx)(vy,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:d,children:h}),a?c||/* @__PURE__ */(0,p.jsx)(h7.span,{opacity:0,children:/* @__PURE__ */(0,p.jsx)(vk,{...k})}):/* @__PURE__ */(0,p.jsx)(vk,{...k}),a&&"end"===m&&/* @__PURE__ */(0,p.jsx)(vy,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:d,children:h})]})});function vk(e){let{leftIcon:t,rightIcon:r,children:n,iconSpacing:i}=e;return/* @__PURE__ */(0,p.jsxs)(p.Fragment,{children:[t&&/* @__PURE__ */(0,p.jsx)(vb,{marginEnd:i,children:t}),n,r&&/* @__PURE__ */(0,p.jsx)(vb,{marginStart:i,children:r})]})}vx.displayName="Button";var eX=h("acw62"),[vS,v_]=t9({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[vE,vC]=t9({strict:!1,name:"FormControlContext"});pr(function(e,t){let r=pp("Form",e),n=nR(e),{getRootProps:i,htmlProps:a,...o}=function(e){let{id:t,isRequired:r,isInvalid:n,isDisabled:i,isReadOnly:a,...o}=e,s=(0,eX.useId)(),l=t||`field-${s}`,u=`${l}-label`,c=`${l}-feedback`,d=`${l}-helptext`,[f,h]=(0,eX.useState)(!1),[p,m]=(0,eX.useState)(!1),[g,v]=(0,eX.useState)(!1),b=(0,eX.useCallback)((e={},t=null)=>({id:d,...e,/**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */ref:vw(t,e=>{e&&m(!0)})}),[d]),y=(0,eX.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":rm(g),"data-disabled":rm(i),"data-invalid":rm(n),"data-readonly":rm(a),id:void 0!==e.id?e.id:u,htmlFor:void 0!==e.htmlFor?e.htmlFor:l}),[l,i,g,n,a,u]),w=(0,eX.useCallback)((e={},t=null)=>({id:c,...e,/**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */ref:vw(t,e=>{e&&h(!0)}),"aria-live":"polite"}),[c]),x=(0,eX.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),k=(0,eX.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!n,isReadOnly:!!a,isDisabled:!!i,isFocused:!!g,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:f,setHasFeedbackText:h,hasHelpText:p,setHasHelpText:m,id:l,labelId:u,feedbackId:c,helpTextId:d,htmlProps:o,getHelpTextProps:b,getErrorMessageProps:w,getRootProps:x,getLabelProps:y,getRequiredIndicatorProps:k}}(n),s=rd("chakra-form-control",e.className);return/* @__PURE__ */(0,p.jsx)(vE,{value:o,children:/* @__PURE__ */(0,p.jsx)(vS,{value:r,children:/* @__PURE__ */(0,p.jsx)(h7.div,{...i({},t),className:s,__css:r.container})})})}).displayName="FormControl",pr(function(e,t){let r=vC(),n=v_(),i=rd("chakra-form__helper-text",e.className);return/* @__PURE__ */(0,p.jsx)(h7.div,{...null==r?void 0:r.getHelpTextProps(e,t),__css:n.helperText,className:i})}).displayName="FormHelperText";var vT=pr(function(e,t){let{htmlSize:r,...n}=e,i=pp("Input",n),a=nR(n),o=function(e){let{isDisabled:t,isInvalid:r,isReadOnly:n,isRequired:i,...a}=function(e){var t,r,n;let i=vC(),{id:a,disabled:o,readOnly:s,required:l,isRequired:u,isInvalid:c,isReadOnly:d,isDisabled:f,onFocus:h,onBlur:p,...m}=e,g=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&g.push(i.feedbackId),(null==i?void 0:i.hasHelpText)&&g.push(i.helpTextId),{...m,"aria-describedby":g.join(" ")||void 0,id:null!=a?a:null==i?void 0:i.id,isDisabled:null!=(t=null!=o?o:f)?t:null==i?void 0:i.isDisabled,isReadOnly:null!=(r=null!=s?s:d)?r:null==i?void 0:i.isReadOnly,isRequired:null!=(n=null!=l?l:u)?n:null==i?void 0:i.isRequired,isInvalid:null!=c?c:null==i?void 0:i.isInvalid,onFocus:rv(null==i?void 0:i.onFocus,h),onBlur:rv(null==i?void 0:i.onBlur,p)}}(e);return{...a,disabled:t,readOnly:n,required:i,"aria-invalid":rg(r),"aria-required":rg(i),"aria-readonly":rg(n)}}(a),s=rd("chakra-input",e.className);return/* @__PURE__ */(0,p.jsx)(h7.input,{size:r,...o,__css:i.field,ref:t,className:s})});vT.displayName="Input",vT.id="Input";// src/index.ts
var eX=(h("acw62"),h("acw62")),[vP,vI]=t9({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),vA=pr(function(e,t){let r=pp("Input",e),{children:n,className:i,...a}=nR(e),o=rd("chakra-input__group",i),s={},l=(0,eX.Children).toArray(n).filter(e=>(0,eX.isValidElement)(e)),u=r.field;l.forEach(e=>{var t,n;r&&(u&&"InputLeftElement"===e.type.id&&(s.paddingStart=null!=(t=u.height)?t:u.h),u&&"InputRightElement"===e.type.id&&(s.paddingEnd=null!=(n=u.height)?n:u.h),"InputRightAddon"===e.type.id&&(s.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(s.borderStartRadius=0))});let c=l.map(t=>{var r,n;let i=// src/compact.ts
function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({size:(null==(r=t.props)?void 0:r.size)||e.size,variant:(null==(n=t.props)?void 0:n.variant)||e.variant});return"Input"!==t.type.id?(0,eX.cloneElement)(t,i):(0,eX.cloneElement)(t,Object.assign(i,s,t.props))});return/* @__PURE__ */(0,p.jsx)(h7.div,{className:o,ref:t,__css:{width:"100%",display:"flex",position:"relative",// Parts of inputs override z-index to ensure that they stack correctly on each other
// Create a new stacking context so that these overrides don't leak out and conflict with other z-indexes
isolation:"isolate",...r.group},"data-group":!0,...a,children:/* @__PURE__ */(0,p.jsx)(vP,{value:r,children:c})})});vA.displayName="InputGroup";var vR=h7("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),vO=pr(function(e,t){var r,n;let{placement:i="left",...a}=e,o=vI(),s=o.field,l={["left"===i?"insetStart":"insetEnd"]:"0",width:null!=(r=null==s?void 0:s.height)?r:null==s?void 0:s.h,height:null!=(n=null==s?void 0:s.height)?n:null==s?void 0:s.h,fontSize:null==s?void 0:s.fontSize,...o.element};return/* @__PURE__ */(0,p.jsx)(vR,{ref:t,__css:l,...a})});vO.id="InputElement",vO.displayName="InputElement";var vM=pr(function(e,t){let{className:r,...n}=e,i=rd("chakra-input__left-element",r);return/* @__PURE__ */(0,p.jsx)(vO,{ref:t,placement:"left",className:i,...n})});vM.id="InputLeftElement",vM.displayName="InputLeftElement";var vN=pr(function(e,t){let{className:r,...n}=e,i=rd("chakra-input__right-element",r);return/* @__PURE__ */(0,p.jsx)(vO,{ref:t,placement:"right",className:i,...n})});vN.id="InputRightElement",vN.displayName="InputRightElement";var eX=(h("acw62"),h("acw62"));function vz(e){return void 0!==e&&void 0!==e.enterprise}class vj{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The reCAPTCHA enablement status of the {@link EmailAuthProvider} for the current tenant.
         */this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function vL(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vD=new q("auth","Firebase",vL()),vF=new ed("@firebase/auth");function v$(e,...t){vF.logLevel<=mQ.ERROR&&vF.error(`Auth (${eL}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vB(e,...t){throw vU(e,...t)}function vV(e,...t){return vU(e,...t)}function vU(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return vD.create(e,...t)}function vW(e,t,...r){if(!e)throw vU(t,...r)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function vH(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw v$(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vq(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function vG(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */class vY{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||vH("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(W())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===vG()||"https:"===vG()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vK(e,t){e.emulator||vH("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vX{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void vH("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void vH("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void vH("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Map from errors returned by the server to errors to developer visible errors
 */const vQ={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},vJ=new vY(3e4,6e4);function vZ(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function v0(e,t,r,n,i={}){return v1(e,i,async()=>{let i={},a={};n&&("GET"/* HttpMethod.GET */===t?a=n:i={body:JSON.stringify(n)});let o=X(Object.assign({key:e.config.apiKey},a)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(s["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),vX.fetch()(v5(e,e.config.apiHost,r,o),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))})}async function v1(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},vQ),t);try{let t=new v3(e),i=await Promise.race([r(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let a=await i.json();if("needConfirmation"in a)throw v4(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,a);if(i.ok&&!("errorMessage"in a))return a;{let t=i.ok?a.errorMessage:a.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===r)throw v4(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,a);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===r)throw v4(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,a);if("USER_DISABLED"/* ServerError.USER_DISABLED */===r)throw v4(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,a);let s=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,r){let n=Object.assign(Object.assign({},vL()),{[t]:r}),i=new q("auth","Firebase",n);return i.create(t,{appName:e.name})}(e,s,o);vB(e,s)}}catch(t){if(t instanceof H)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
vB(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function v2(e,t,r,n,i={}){let a=await v0(e,t,r,n,i);return"mfaPendingCredential"in a&&vB(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:a}),a}function v5(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?vK(e.config,i):`${e.config.apiScheme}://${i}`}class v3{constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(vV(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),vJ.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function v4(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=vV(e,t,n);return(// We know customData is defined on error because errorParams is defined
i.customData._tokenResponse=r,i)}async function v6(e,t){return v0(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,vZ(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v8(e,t){return v0(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function v9(e,t){return v0(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v7(e){if(e)try{// Convert to date object.
let t=new Date(Number(e));// Test date is valid.
if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){// Do nothing. undefined will be returned.
}}/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function be(e,t=!1){let r=et(e),n=await r.getIdToken(t),i=br(n);vW(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a="object"==typeof i.firebase?i.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:v7(bt(i.auth_time)),issuedAtTime:v7(bt(i.iat)),expirationTime:v7(bt(i.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function bt(e){return 1e3*Number(e)}function br(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return v$("JWT malformed, contained fewer than 3 sections"),null;try{let e=z(r);if(!e)return v$("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return v$("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof H&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
// We don't actually care what the value is but TS won't accept unknown and
// we can't cast properly in both environments.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timerId=null,this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4/* Duration.RETRY_BACKOFF_MAX */),e}{// Reset the error backoff
this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5/* Duration.OFFSET */;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){// Only retry on network errors
(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(/* wasError */!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=v7(this.lastLoginAt),this.creationTime=v7(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(e){var t;let r=e.auth,n=await e.getIdToken(),i=await bn(e,v9(r,{idToken:n}));vW(null==i?void 0:i.users.length,r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a=i.users[0];e._notifyReloadListener(a);let o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map(e=>{var{providerId:t}=e,r=p2(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],s=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(null==s?void 0:s.length),c={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new ba(a.createdAt,a.lastLoginAt),isAnonymous:!!l&&u};Object.assign(e,c)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function bs(e){let t=et(e);await bo(t),// Even though the current user hasn't changed, update
// current user will trigger a persistence update w/ the
// new info.
await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(e,t){let r=await v1(e,{},async()=>{let r=X({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,a=v5(e,n,"/v1/token"/* Endpoint.TOKEN */,`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",vX.fetch()(a,{method:"POST"/* HttpMethod.POST */,headers:o,body:r})});// The response comes back in snake_case. Convert to camel:
return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */class bu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){vW(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),vW(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),vW(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function(e){let t=br(e);return vW(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),vW(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),vW(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(vW(!this.accessToken||this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await bl(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,a=new bu;return r&&(vW("string"==typeof r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.refreshToken=r),n&&(vW("string"==typeof n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.accessToken=n),i&&(vW("number"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bu,this.toJSON())}_performRefresh(){return vH("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(e,t){vW("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class bd{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=p2(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new bi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ba(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await bn(this,this.stsTokenManager.getToken(this.auth,e));return vW(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return be(this,e)}reload(){return bs(this)}_assign(e){this!==e&&(vW(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new bd(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
vW(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await bn(this,v8(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,a,o,s,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(a=t.photoURL)&&void 0!==a?a:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:x,stsTokenManager:k}=t;vW(b&&k,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let S=bu.fromJSON(this.name,k);vW("string"==typeof b,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),bc(c,e.name),bc(d,e.name),vW("boolean"==typeof y,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),vW("boolean"==typeof w,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),bc(f,e.name),bc(h,e.name),bc(p,e.name),bc(m,e.name),bc(g,e.name),bc(v,e.name);let _=new bd({uid:b,auth:e,email:d,emailVerified:y,displayName:c,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return x&&Array.isArray(x)&&(_.providerData=x.map(e=>Object.assign({},e))),m&&(_._redirectEventId=m),_}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,r=!1){let n=new bu;n.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let i=new bd({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return(// Updates the user info and data and resolves with a user instance.
await bo(i),i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new Map;function bh(e){e instanceof Function||vH("Expected a class definition");let t=bf.get(e);return t?t instanceof e||vH("Instance stored in cache mismatched with class"):(t=new e,bf.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(e,t,r){return`firebase:${e}:${t}:${r}`}bp.type="NONE";class bg{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=bm(this.userKey,n.apiKey,i),this.fullPersistenceKey=bm("persistence"/* KeyName.PERSISTENCE_USER */,n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?bd._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new bg(bh(bp),e,r);// Eliminate any persistences that are not available
let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||bh(bp),a=bm(r,e.config.apiKey,e.name),o=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let r of t)try{let t=await r._get(a);if(t){let n=bd._fromJSON(e,t);// throws for unparsable blob (wrong format)
r!==i&&(o=n),i=r;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let s=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length&&(i=s[0],o&&// we'll just let it bubble to surface the error.
await i._set(a,o.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(a)}catch(e){}}))),new bg(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Determine the browser for the purposes of reporting usage to the API
 */function bv(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(bx(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(bb(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(bS(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(b_(t))return"Webos"/* BrowserName.WEBOS */;if(by(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||bw(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(bk(t))return"Android"/* BrowserName.ANDROID */;let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"/* BrowserName.OTHER */}function bb(e=W()){return/firefox\//i.test(e)}function by(e=W()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function bw(e=W()){return/crios\//i.test(e)}function bx(e=W()){return/iemobile/i.test(e)}function bk(e=W()){return/android/i.test(e)}function bS(e=W()){return/blackberry/i.test(e)}function b_(e=W()){return/webos/i.test(e)}function bE(e=W()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function bC(e=W()){// TODO: implement getBrowserName equivalent for OS.
return bE(e)||bk(e)||b_(e)||bS(e)||/windows phone/i.test(e)||bx(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//*
 * Determine the SDK version string
 */function bT(e,t=[]){let r;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
r=bv(W());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
r=`${bv(W())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${r}/JsCore/${eL}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
// function that is always async.
let r=t=>new Promise((r,n)=>{try{let n=e(t);// Either resolve with existing promise or wrap a non-promise
    // return value into a promise.
    r(n)}catch(e){// Sync callback throws.
    n(e)}});// Attach the onAbort if present
r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{// Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
// indexing of other elements.
this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;// While running the middleware, build a temporary stack of onAbort
// callbacks to call if one middleware callback rejects.
let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(// Run all onAbort, with separate try/catch to ignore any errors and
// continue
t.reverse(),t))try{e()}catch(e){/* swallow error */}throw this.auth._errorFactory.create("login-blocked"/* AuthErrorCode.LOGIN_BLOCKED */,{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Fetches the password policy for the currently set tenant or the project if no tenant is set.
 *
 * @param auth Auth object.
 * @param request Password policy request.
 * @returns Password policy response.
 */async function bI(e,t={}){return v0(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,vZ(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class bA{constructor(e){var t,r,n,i;// Only include custom strength options defined in the response.
let a=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=a.minPasswordLength)&&void 0!==t?t:6,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),void 0!==a.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),void 0!==a.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),void 0!==a.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),void 0!==a.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,a,o;let s={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),// Combine the status into single isValid property.
s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(r=s.meetsMaxPasswordLength)||void 0===r||r),s.isValid&&(s.isValid=null===(n=s.containsLowercaseLetter)||void 0===n||n),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(a=s.containsNumericCharacter)||void 0===a||a),s.isValid&&(s.isValid=null===(o=s.containsNonAlphanumericCharacter)||void 0===o||o),s)}/**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}/**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordCharacterOptions(e,t){let r;// Assign statuses for requirements even if the password is an empty string.
this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */!1,/* containsUppercaseCharacter= */!1,/* containsNumericCharacter= */!1,/* containsNonAlphanumericCharacter= */!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */r>="a"&&r<="z",/* containsUppercaseCharacter= */r>="A"&&r<="Z",/* containsNumericCharacter= */r>="0"&&r<="9",/* containsNonAlphanumericCharacter= */this.allowedNonAlphanumericCharacters.includes(r))}/**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bO(this),this.idTokenSubscription=new bO(this),this.beforeStateQueue=new bP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vD,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bh(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await bg.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
// this will cause the iframe to load immediately in certain cases)
if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){/* Ignore the error */}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}/**
     * If the persistence is changed in another window, the user manager will let us know
     */async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){// If the same user is to be synchronized.
if(this.currentUser&&e&&this.currentUser.uid===e.uid){// Data update, simply copy data changes.
this._currentUser._assign(e),// If tokens changed from previous user tokens, this will trigger
// notifyAuthListeners_.
await this.currentUser.getIdToken();return}// Update current Auth state. Either a new login or logout.
// Skip blocking callbacks, they should not apply to a change in another tab.
await this._updateCurrentUser(e,/* skipBeforeStateCallbacks */!0)}}async initializeCurrentUser(e){var t;// First check to see if we have a pending redirect event.
let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);// If the stored user (i.e. the old "currentUser") has a redirectId that
// matches the redirect user, then we want to initially sign in with the
// new user object from result.
// TODO(samgho): More thoroughly test all of this
(!r||r===a)&&(null==o?void 0:o.user)&&(n=o.user,i=!0)}// If no user in persistence, there is no current user. Set to null.
if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(vW(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
// during auth initialization. All of the normal sign in and link/reauth
// flows call back into auth and push things onto the promise queue. We
// need to await the result of the redirect sign in *inside the promise
// queue*. This presents a problem: we run into deadlock. See:
//    ┌> [Initialization] ─────┐
//    ┌> [<other queue tasks>] │
//    └─ [getRedirectResult] <─┘
//    where [] are tasks on the queue and arrows denote awaits
// Initialization will never complete because it's waiting on something
// that's waiting for initialization to complete!
//
// Instead, this method calls getRedirectResult() (stored in
// _completeRedirectFn) with an optional parameter that instructs all of
// the underlying auth operations to skip anything that mutates auth state.
let t=null;try{// We know this._popupRedirectResolver is set since redirectResolver
// is passed in. The _completeRedirectFn expects the unwrapped extern.
t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){// Swallow any errors here; the code can retrieve them in
// getRedirectResult().
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bo(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?et(e):null;return t&&vW(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&vW(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){// Prevent callbacks from being called again in _updateCurrentUser, as
// they were already called in the first line.
return(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bh(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await bI(this),t=new bA(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new q("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&bh(e)||this._popupRedirectResolver;vW(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await bg.create(this,[bh(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),a=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(vW(o,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
o.then(()=>{a||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{a=!0,i()}}{let r=e.addObserver(t);return()=>{a=!0,r()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return vW(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=bT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=r);// If the App Check service exists, add the App Check token in the headers
let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){vF.logLevel<=mQ.WARN&&vF.warn(`Auth (${eL}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/** Helper class to wrap subscriber logic */class bO{constructor(e){this.auth=e,this.observer=null,this.addObserver=/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function(e,t){let r=new Z(e,void 0);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return vW(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}function bM(e){// TODO: consider adding timeout support & cancellation
return new Promise((t,r)=>{var n,i;let a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=e=>{let t=vV("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)})}function bN(e){return`__${e}${Math.floor(1e6*Math.random())}`}class bz{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=et(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{v6(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new vj(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;vz(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&vz(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}bM("https://www.google.com/recaptcha/enterprise.js?render="+r).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function bj(e,t,r,n=!1){let i;let a=new bz(e);try{i=await a.verify(r)}catch(e){i=await a.verify(r,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),o}function bL(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function bD(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class bF{/** @internal */constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */e,/**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */t){this.providerId=e,this.signInMethod=t}/**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */toJSON(){return vH("not implemented")}/** @internal */_getIdTokenResponse(e){return vH("not implemented")}/** @internal */_linkToIdToken(e,t){return vH("not implemented")}/** @internal */_getReauthenticationResolver(e){return vH("not implemented")}}async function b$(e,t){return v0(e,"POST"/* HttpMethod.POST */,"/v1/accounts:update"/* Endpoint.SET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bB(e,t){return v2(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,vZ(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bV(e,t){return v2(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,vZ(e,t))}async function bU(e,t){return v2(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,vZ(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */class bW extends bF{/** @internal */constructor(/** @internal */e,/** @internal */t,r,/** @internal */n=null){super("password"/* ProviderId.PASSWORD */,r),this._email=e,this._password=t,this._tenantId=n}/** @internal */static _fromEmailAndPassword(e,t){return new bW(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,r=null){return new bW(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,r)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return bB(e,r).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await bj(e,r,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return bB(e,t)}});{let t=await bj(e,r,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return bB(e,t)}case"emailLink"/* SignInMethod.EMAIL_LINK */:return bV(e,{email:this._email,oobCode:this._password});default:vB(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:return b$(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink"/* SignInMethod.EMAIL_LINK */:return bU(e,{idToken:t,email:this._email,oobCode:this._password});default:vB(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bH(e,t){return v2(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,vZ(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class bq extends bF{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new bq(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vB("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=p2(t,["providerId","signInMethod"]);if(!r||!n)return null;let a=new bq(r,n);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return bH(e,t)}/** @internal */_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,bH(e,r)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,bH(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=X(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bG(e,t){return v0(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,vZ(e,t))}async function bY(e,t){return v2(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,vZ(e,t))}async function bK(e,t){let r=await v2(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,vZ(e,t));if(r.temporaryProof)throw v4(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,r);return r}const bX={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function bQ(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return v2(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,vZ(e,r),bX)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */class bJ extends bF{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new bJ({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new bJ({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return bY(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return bK(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return bQ(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new bJ({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class bZ{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,r,n,i,a,o;let s=Q(J(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,u=null!==(r=s.oobCode)&&void 0!==r?r:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL"/* ActionCodeOperation.RECOVER_EMAIL */;case"resetPassword":return"PASSWORD_RESET"/* ActionCodeOperation.PASSWORD_RESET */;case"signIn":return"EMAIL_SIGNIN"/* ActionCodeOperation.EMAIL_SIGNIN */;case"verifyEmail":return"VERIFY_EMAIL"/* ActionCodeOperation.VERIFY_EMAIL */;case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL"/* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */;case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION"/* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */;default:return null}}(null!==(n=s.mode)&&void 0!==n?n:null);// Validate API key, code and mode.
vW(l&&u&&c,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(a=s.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=s.tenantId)&&void 0!==o?o:null}/**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */static parseLink(e){let t=/**
 * Helper to parse FDL links
 *
 * @param url
 */function(e){let t=Q(J(e)).link,r=t?Q(J(t)).deep_link_id:null,n=Q(J(e)).deep_link_id,i=n?Q(J(n)).link:null;return i||n||r||t||e}(e);try{return new bZ(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */class b0{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=b0.PROVIDER_ID}/**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */static credential(e,t){return bW._fromEmailAndPassword(e,t)}/**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */static credentialWithLink(e,t){let r=bZ.parseLink(t);return vW(r,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),bW._fromEmailAndCode(e,r.code,r.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */b0.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */b0.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */b0.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */class b1{/**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */constructor(e){this.providerId=e,/** @internal */this.defaultLanguageCode=null,/** @internal */this.customParameters={}}/**
     * Set the language gode.
     *
     * @param languageCode - language code
     */setDefaultLanguage(e){this.defaultLanguageCode=e}/**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */setCustomParameters(e){return this.customParameters=e,this}/**
     * Retrieve the current list of {@link CustomParameters}.
     */getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */class b2 extends b1{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}/**
     * Retrieve the current list of OAuth scopes.
     */getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class b5 extends b2{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */static credential(e){return bq._fromParams({providerId:b5.PROVIDER_ID,signInMethod:b5.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return b5.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return b5.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return b5.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */b5.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */b5.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class b3 extends b2{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */static credential(e,t){return bq._fromParams({providerId:b3.PROVIDER_ID,signInMethod:b3.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return b3.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return b3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return b3.credential(t,r)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */b3.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */b3.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */class b4 extends b2{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return bq._fromParams({providerId:b4.PROVIDER_ID,signInMethod:b4.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return b4.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return b4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return b4.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */b4.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */b4.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */class b6 extends b2{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return bq._fromParams({providerId:b6.PROVIDER_ID,signInMethod:b6.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return b6.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return b6.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return b6.credential(t,r)}catch(e){return null}}}/** Always set to {@link SignInMethod}.TWITTER. */b6.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */b6.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b8{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await bd._fromIdTokenResponse(e,r,n),a=b9(r),o=new b8({user:i,providerId:a,_tokenResponse:r,operationType:t});return o}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,/* reload */!0);let n=b9(r);return new b8({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function b9(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b7 extends H{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,b7.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new b7(e,t,r,n)}}function ye(e,t,r,n){let i="reauthenticate"/* OperationType.REAUTHENTICATE */===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw b7._fromErrorAndOperation(e,r,t,n);throw r})}async function yt(e,t,r=!1){let n=await bn(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return b8._forOperation(e,"link"/* OperationType.LINK */,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(e,t,r=!1){let{auth:n}=e,i="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let a=await bn(e,ye(n,i,t,e),r);vW(a.idToken,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let o=br(a.idToken);vW(o,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:s}=o;return vW(e.uid===s,n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),b8._forOperation(e,i,a)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&vB(n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(e,t,r=!1){let n="signIn"/* OperationType.SIGN_IN */,i=await ye(e,n,t),a=await b8._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(a.user),a}/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */async function yi(e,t){return yn(et(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Updates the password policy cached in the {@link Auth} instance if a policy is already
 * cached for the project or tenant.
 *
 * @remarks
 * We only fetch the password policy if the password did not meet policy requirements and
 * there is an existing policy cached. A developer must call validatePassword at least
 * once for the cache to be automatically updated.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @private
 */async function ya(e){let t=et(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}new WeakMap;const yo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class ys{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class yl extends ys{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,// Safari or iOS browser and embedded in an iframe.
this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=W();return by(e)||bE(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=bC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
for(let t of Object.keys(this.listeners)){// Get value from localStorage.
let r=this.storage.getItem(t),n=this.localCache[t];// If local map value does not match, trigger listener with storage event.
// Differentiate this simulated event from the real storage event.
r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){// Key would be null in some situations, like when localStorage is cleared
if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;// Safari embedded iframe. Storage event will trigger with the delta
// changes but no changes will be applied to the iframe localStorage.
if(t?// Remove storage event listener to prevent possible event duplication.
this.detachListener():// Remove polling listener to prevent possible event duplication.
this.stopPolling(),this.safariLocalStorageNotSynced){// Get current iframe page value.
let n=this.storage.getItem(r);// Value not synchronized, synchronize manually.
if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let n=()=>{// Keep local map up to date in case storage event is triggered before
// poll.
let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);/** Detects Internet Explorer. */(function(){let e=W();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yl.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends ys{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}yu.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface class for receiving messages.
 *
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new yc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:r});let a=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(a.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:r,response:o})}/**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}/**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}yc.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface for sending messages and waiting for a completion response.
 *
 */class yf{constructor(e){this.target=e,this.handlers=new Set}/**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}/**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */async _send(e,t,r=50/* _TimeoutDuration.ACK */){let n,i;let a="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!a)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((o,s)=>{let l=yd("",20);a.port1.start();let u=setTimeout(()=>{s(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},r);i={messageChannel:a,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(u),n=setTimeout(()=>{s(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(n),o(e.data.response);break;default:clearTimeout(u),clearTimeout(n),s(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(i),a.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[a.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */function yh(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(){return void 0!==yh().WorkerGlobalScope&&"function"==typeof yh().importScripts}async function ym(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="firebaseLocalStorageDb",yv="firebaseLocalStorage",yb="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class yy{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yw(e,t){return e.transaction([yv],t?"readwrite":"readonly").objectStore(yv)}function yx(){let e=indexedDB.open(yg,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(yv,{keyPath:yb})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;// Strange bug that occurs in Firefox when multiple tabs are opened at the
// same time. The only way to recover seems to be deleting the database
// and re-initializing it.
// https://github.com/firebase/firebase-js-sdk/issues/634
r.objectStoreNames.contains(yv)?t(r):(// Need to close the database or else you get a `blocked` event
r.close(),await function(){let e=indexedDB.deleteDatabase(yg);return new yy(e).toPromise()}(),t(await yx()))})})}async function yk(e,t,r){let n=yw(e,!0).put({[yb]:t,value:r});return new yy(n).toPromise()}async function yS(e,t){let r=yw(e,!1).get(t),n=await new yy(r).toPromise();return void 0===n?null:n.value}function y_(e,t){let r=yw(e,!0).delete(t);return new yy(r).toPromise()}class yE{constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await yx()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return yp()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=yc._getInstance(yp()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await ym(),!this.activeServiceWorker)return;this.sender=new yf(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let r=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await yx();return await yk(e,yo,"1"),await y_(e,yo),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yk(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>yS(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>y_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=yw(e,!1).getAll();return new yy(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function yC(e,t,r){var n,i,a;let o=await r.verify();try{let s;if(vW("string"==typeof o,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),vW("recaptcha"===r.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){let t=s.session;if("phoneNumber"in s){vW("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let r=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}},v0(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,vZ(e,i)));return r.phoneSessionInfo.sessionInfo}{vW("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let r=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;vW(r,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let i=await (a={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:o}},v0(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,vZ(e,a)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await bG(e,{phoneNumber:s.phoneNumber,recaptchaToken:o});return t}}finally{r._reset()}}yE.type="LOCAL",bN("rcb"),new vY(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @remarks
 * `PhoneAuthProvider` does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */class yT{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=yT.PROVIDER_ID,this.auth=et(e)}/**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */verifyPhoneNumber(e,t){return yC(this.auth,e,et(t))}/**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */static credential(e,t){return bJ._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return yT.credentialFromTaggedObject(e)}/**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */static credentialFromError(e){return yT.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?bJ._fromTokenResponse(t,r):null}}/** Always set to {@link ProviderId}.PHONE. */yT.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */yT.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP extends bF{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return bH(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bH(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bH(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yI(e){return yn(e.auth,new yP(e),e.bypassAuthState)}function yA(e){let{auth:t,user:r}=e;return vW(r,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),yr(r,new yP(e),e.bypassAuthState)}async function yR(e){let{auth:t,user:r}=e;return vW(r,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),yt(r,new yP(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */class yO{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}let s={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return yI;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return yR;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return yA;default:vB(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||vH("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||vH("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM=new vY(2e3,1e4);/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class yN extends yO{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,yN.currentPopupAction&&yN.currentPopupAction.cancel(),yN.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return vW(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||vH("Popup operations only handle one event");let e=yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(vV(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(vV(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yN.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vV(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,yM.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
yN.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
const yz=new Map;class yj extends yO{constructor(e,t,r=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,r),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=yz.get(this.auth._key());if(!e){try{let t=await yL(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}yz.set(this.auth._key(),e)}return this.bypassAuthState||yz.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yL(e,t){let r=bm("pendingRedirect",t.config.apiKey,t.name),n=bh(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function yD(e,t){yz.set(e._key(),t)}async function yF(e,t,r=!1){let n=et(e),i=t?bh(t):(vW(n._popupRedirectResolver,n,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),n._popupRedirectResolver),a=new yj(n,i,r),o=await a.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class y${constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return yV(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!yV(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(vV(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(yB(e))}saveEventToCache(e){this.cachedEventUids.add(yB(e)),this.lastProcessedEventTime=Date.now()}}function yB(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function yV({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yU(e,t={}){return v0(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yW=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yH=/^https?/;async function yq(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await yU(e);for(let e of t)try{if(function(e){let t=vq(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!yH.test(r))return!1;if(yW.test(e))// only contain the IP, no extra character.
return n===e;// Dots in pattern should be escaped.
let i=e.replace(/\./g,"\\."),a=RegExp("^(.+\\."+i+"|"+i+")$","i");return a.test(n)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
vB(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yG=new vY(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function yY(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=yh().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let yK=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yX=new vY(5e3,15e3),yQ={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yJ=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function yZ(e){let t=await (yK=yK||new Promise((t,r)=>{var n,i,a;// Function to run when gapi.load is ready.
function o(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
yY(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
yY(),r(vV(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:yG.get()})}if(null===(i=null===(n=yh().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(a=yh().gapi)||void 0===a?void 0:a.load)o();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=bN("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
yh()[t]=()=>{// GApi loader should be ready.
gapi.load?o():r(vV(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},bM(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>r(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
yK=null,e)})),r=yh().gapi;return vW(r,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;vW(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let r=t.emulator?vK(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:eL},i=yJ.get(e.config.apiHost);i&&(n.eid=i);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${X(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yQ,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let i=vV(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),a=yh().setTimeout(()=>{n(i)},yX.get());// Clear timer and resolve pending iframe ready promise.
    function o(){yh().clearTimeout(a),r(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(o).then(o,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class y1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */const y2=encodeURIComponent("fac");async function y5(e,t,r,n,i,a){vW(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),vW(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:eL,eventId:i};if(t instanceof b1)// TODO set additionalParams from the provider as well?
for(let[r,n]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))o[r]=n;if(t instanceof b2){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}for(let t of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[t]&&delete o[t];// Sets the App Check token to pass to the widget
let s=await e._getAppCheckToken(),l=s?`#${y2}=${encodeURIComponent(s)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?vK(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${X(o).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The special web storage event
 *
 */const y3="webStorageSupport",y4=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yu,this._completeRedirectFn=yF,this._overrideRedirectResult=yD}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,r,n){var i;(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager)||vH("_initialize() not called before _openPopup()");let a=await y5(e,t,r,vq(),n);return function(e,t,r,n=500,i=600){let a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),s="",l=Object.assign(Object.assign({},y0),{width:n.toString(),height:i.toString(),top:a,left:o}),u=W().toLowerCase();r&&(s=bw(u)?"_blank":r),bb(u)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=W()){var t;return bE(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==s)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",s),new y1(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let d=window.open(t||"",s,c);vW(d,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{d.focus()}catch(e){}return new y1(d)}(e,a,yd())}async _openRedirect(e,t,r,n){await this._originValidation(e);let i=await y5(e,t,r,vq(),n);return yh().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(r||vH("If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await yZ(e),r=new y$(e);return t.register("authEvent",t=>{vW(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let n=r.onEvent(t.authEvent);return{status:n?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(y3,{type:y3},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[y3];void 0!==i&&t(!!i),vB(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yq(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return bC()||by()||bE()}};class y6{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,r);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return vH("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class y8 extends y6{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new y8(e)}/** @internal */_finalizeEnroll(e,t,r){return v0(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,vZ(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return v0(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,vZ(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class y9 extends y6{constructor(e,t,r){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=r}/** @internal */static _fromSecret(e,t){return new y9(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new y9(t,e)}/** @internal */async _finalizeEnroll(e,t,r){return vW(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),v0(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,vZ(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){vW(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let r={verificationCode:this.otp};return v0(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,vZ(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class y7{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,r,n,i,a,o){this.sessionInfo=a,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new y7(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var r;let n=!1;return(we(e)||we(t))&&(n=!0),n&&(we(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),we(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function we(e){return void 0===e||(null==e?void 0:e.length)===0}var wt="@firebase/auth",wr="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){vW(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const wi=V("authIdTokenMaxAge")||300;let wa=null;const wo=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>wi)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let i=null==r?void 0:r.token;wa!==i&&(wa=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */function ws(e=/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function(e=eI){let t=eR.get(e);if(!t&&e===eI&&B())return eD();if(!t)throw ez.create("no-app"/* AppError.NO_APP */,{appName:e});return t}()){let t=eN(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */function(e,t){let r=eN(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if(Y(n,null!=t?t:{}))return e;vB(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let n=r.initialize({options:t});return n}(e,{popupRedirectResolver:y4,persistence:[yE,yl,yu]}),n=V("authTokenSyncURL");if(n){let e=wo(n);et(r).beforeAuthStateChanged(e,()=>e(r.currentUser)),et(r).onIdTokenChanged(t=>e(t),void 0,void 0)}let i=$("auth");return i&&/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */function(e,t,r){let n=et(e);vW(n._canInitEmulator,n,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),vW(/^https?:\/\//.test(t),n,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let i=!!(null==r?void 0:r.disableWarnings),a=bL(t),{host:o,port:s}=function(e){let t=bL(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);// Strip out "username:password@".
if(i){let e=i[1];return{host:e,port:bD(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:bD(t)}}}(t),l=null===s?"":`:${s}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
n.config.emulator={url:`${a}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${i}`),r}i="Browser"/* ClientPlatform.BROWSER */,eM(new er("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;vW(o&&!o.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:r.name});let l={apiKey:o,authDomain:s,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:bT(i)},u=new bR(r,n,a,l);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(bh);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(u,t),u},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);n.initialize()})),eM(new er("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=et(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new wn(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),eF(wt,wr,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";default:return}}(i)),eF(wt,wr,"esm2017");var wl={};Object.defineProperty(wl,"__esModule",{value:!0});var eX=h("acw62"),wu=(a=eX)&&"object"==typeof a&&"default"in a?a.default:a,wc=h("b8sjQ"),wd=new wc,wf=wd.getBrowser(),wh=wd.getCPU(),wp=wd.getDevice(),wm=wd.getEngine(),wg=wd.getOS(),wv=wd.getUA(),wb=function(e){return wd.setUA(e)},wy=function(e){if(!e){console.error("No userAgent string was provided");return}var t=new wc(e);return{UA:t,browser:t.getBrowser(),cpu:t.getCPU(),device:t.getDevice(),engine:t.getEngine(),os:t.getOS(),ua:t.getUA(),setUserAgent:function(e){return t.setUA(e)}}},ww=/*#__PURE__*/Object.freeze({ClientUAInstance:wd,browser:wf,cpu:wh,device:wp,engine:wm,os:wg,ua:wv,setUa:wb,parseUserAgent:wy});function wx(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function wk(e){return(wk="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function wS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w_(){return(w_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function wE(e){return(wE=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function wC(e,t){return(wC=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function wT(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function wP(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wI(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var wA={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},wR={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},wO={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},wM={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},wN=function(e){switch(e){case wA.Mobile:return{isMobile:!0};case wA.Tablet:return{isTablet:!0};case wA.SmartTv:return{isSmartTV:!0};case wA.Console:return{isConsole:!0};case wA.Wearable:return{isWearable:!0};case wA.Browser:return{isBrowser:!0};case wA.Embedded:return{isEmbedded:!0};default:return wM}},wz=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||t},wj=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},wL=function(e){var t=wj();return t&&t.platform&&(-1!==t.platform.indexOf(e)||"MacIntel"===t.platform&&t.maxTouchPoints>1&&!window.MSStream)},wD=function(e){return e.type===wA.Mobile},wF=function(e){return e.type===wA.Tablet},w$=function(e){var t=e.type;return t===wA.Mobile||t===wA.Tablet},wB=function(e){return e.type===wA.SmartTv},wV=function(e){return e.type===wA.Browser},wU=function(e){return e.type===wA.Wearable},wW=function(e){return e.type===wA.Console},wH=function(e){return e.type===wA.Embedded},wq=function(e){return wz(e.vendor)},wG=function(e){return wz(e.model)},wY=function(e){return wz(e.type,"browser")},wK=function(e){return e.name===wO.Android},wX=function(e){return e.name===wO.Windows},wQ=function(e){return e.name===wO.MAC_OS},wJ=function(e){return e.name===wO.WindowsPhone},wZ=function(e){return e.name===wO.IOS},w0=function(e){return wz(e.version)},w1=function(e){return wz(e.name)},w2=function(e){return e.name===wR.Chrome},w5=function(e){return e.name===wR.Firefox},w3=function(e){return e.name===wR.Chromium},w4=function(e){return e.name===wR.Edge},w6=function(e){return e.name===wR.Yandex},w8=function(e){var t=e.name;return t===wR.Safari||t===wR.MobileSafari},w9=function(e){return e.name===wR.MobileSafari},w7=function(e){return e.name===wR.Opera},xe=function(e){var t=e.name;return t===wR.InternetExplorer||t===wR.Ie},xt=function(e){return e.name===wR.MIUI},xr=function(e){return e.name===wR.SamsungBrowser},xn=function(e){return wz(e.version)},xi=function(e){return wz(e.major)},xa=function(e){return wz(e.name)},xo=function(e){return wz(e.name)},xs=function(e){return wz(e.version)},xl=function(){var e=wj(),t=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"==typeof t&&/electron/.test(t)},xu=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},xc=function(){var e=wj();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},xd=function(){return wL("iPad")},xf=function(){return wL("iPhone")},xh=function(){return wL("iPod")},xp=function(e){return wz(e)};function xm(e){var t=e||ww,r=t.device,n=t.browser,i=t.os,a=t.engine,o=t.ua;return{isSmartTV:wB(r),isConsole:wW(r),isWearable:wU(r),isEmbedded:wH(r),isMobileSafari:w9(n)||xd(),isChromium:w3(n),isMobile:w$(r)||xd(),isMobileOnly:wD(r),isTablet:wF(r)||xd(),isBrowser:wV(r),isDesktop:wV(r),isAndroid:wK(i),isWinPhone:wJ(i),isIOS:wZ(i)||xd(),isChrome:w2(n),isFirefox:w5(n),isSafari:w8(n),isOpera:w7(n),isIE:xe(n),osVersion:w0(i),osName:w1(i),fullBrowserVersion:xn(n),browserVersion:xi(n),browserName:xa(n),mobileVendor:wq(r),mobileModel:wG(r),engineName:xo(a),engineVersion:xs(a),getUA:xp(o),isEdge:w4(n)||xu(o),isYandex:w6(n),deviceType:wY(r),isIOS13:xc(),isIPad13:xd(),isIPhone13:xf(),isIPod13:xh(),isElectron:xl(),isEdgeChromium:xu(o),isLegacyEdge:w4(n)&&!xu(o),isWindows:wX(i),isMacOs:wQ(i),isMIUI:xt(n),isSamsungBrowser:xr(n)}}var xg=wB(wp),xv=wW(wp),xb=wU(wp),xy=wH(wp),xw=w9(wf)||xd(),xx=w3(wf),xk=w$(wp)||xd(),xS=wD(wp),x_=wF(wp)||xd(),xE=wV(wp),xC=wV(wp),xT=wK(wg),xP=wJ(wg),xI=wZ(wg)||xd(),xA=w2(wf),xR=w5(wf),xO=w8(wf),xM=w7(wf),xN=xe(wf),xz=w0(wg),xj=w1(wg),xL=xn(wf),xD=xi(wf),xF=xa(wf),x$=wq(wp),xB=wG(wp),xV=xo(wm),xU=xs(wm),xW=xp(wv),xH=w4(wf)||xu(wv),xq=w6(wf),xG=wY(wp),xY=xc(),xK=xd(),xX=xf(),xQ=xh(),xJ=xl(),xZ=xu(wv),x0=w4(wf)&&!xu(wv),x1=wX(wg),x2=wQ(wg),x5=xt(wf),x3=xr(wf);function x4(e){return wy(e||window.navigator.userAgent)}wl.AndroidView=function(e){var t=e.renderWithFragment,r=e.children,n=wT(e,["renderWithFragment","children"]);return xT?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.BrowserTypes=wR,wl.BrowserView=function(e){var t=e.renderWithFragment,r=e.children,n=wT(e,["renderWithFragment","children"]);return xE?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.ConsoleView=function(e){var t=e.renderWithFragment,r=e.children,n=wT(e,["renderWithFragment","children"]);return xv?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.CustomView=function(e){var t=e.renderWithFragment,r=e.children,n=(e.viewClassName,e.style,e.condition),i=wT(e,["renderWithFragment","children","viewClassName","style","condition"]);return n?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",i,r):null},wl.IEView=function(e){var t=e.renderWithFragment,r=e.children,n=wT(e,["renderWithFragment","children"]);return xN?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.IOSView=function(e){var t=e.renderWithFragment,r=e.children,n=wT(e,["renderWithFragment","children"]);return xI?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.MobileOnlyView=function(e){var t=e.renderWithFragment,r=e.children,n=(e.viewClassName,e.style,wT(e,["renderWithFragment","children","viewClassName","style"]));return xS?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.MobileView=function(e){var t=e.renderWithFragment,r=e.children,n=wT(e,["renderWithFragment","children"]);return xk?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.OsTypes=wO,wl.SmartTVView=function(e){var t=e.renderWithFragment,r=e.children,n=wT(e,["renderWithFragment","children"]);return xg?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.TabletView=function(e){var t=e.renderWithFragment,r=e.children,n=wT(e,["renderWithFragment","children"]);return x_?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.WearableView=function(e){var t=e.renderWithFragment,r=e.children,n=wT(e,["renderWithFragment","children"]);return xb?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.WinPhoneView=function(e){var t=e.renderWithFragment,r=e.children,n=wT(e,["renderWithFragment","children"]);return xP?t?wu.createElement(eX.Fragment,null,r):wu.createElement("div",n,r):null},wl.browserName=xF,wl.browserVersion=xD,wl.deviceDetect=function(e){var t=e?wy(e):ww,r=t.device,n=t.browser,i=t.engine,a=t.os,o=t.ua,s=wN(r.type),l=s.isBrowser,u=s.isMobile,c=s.isTablet,d=s.isSmartTV,f=s.isConsole,h=s.isWearable,p=s.isEmbedded;return l?{isBrowser:l,browserMajorVersion:wz(n.major),browserFullVersion:wz(n.version),browserName:wz(n.name),engineName:wz(i.name),engineVersion:wz(i.version),osName:wz(a.name),osVersion:wz(a.version),userAgent:wz(o)}:d?{isSmartTV:d,engineName:wz(i.name),engineVersion:wz(i.version),osName:wz(a.name),osVersion:wz(a.version),userAgent:wz(o)}:f?{isConsole:f,engineName:wz(i.name),engineVersion:wz(i.version),osName:wz(a.name),osVersion:wz(a.version),userAgent:wz(o)}:u||c?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?wx(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wx(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},s,{vendor:wz(r.vendor),model:wz(r.model),os:wz(a.name),osVersion:wz(a.version),ua:wz(o)}):h?{isWearable:h,engineName:wz(i.name),engineVersion:wz(i.version),osName:wz(a.name),osVersion:wz(a.version),userAgent:wz(o)}:p?{isEmbedded:p,vendor:wz(r.vendor),model:wz(r.model),engineName:wz(i.name),engineVersion:wz(i.version),osName:wz(a.name),osVersion:wz(a.version),userAgent:wz(o)}:void 0},wl.deviceType=xG,wl.engineName=xV,wl.engineVersion=xU,wl.fullBrowserVersion=xL,wl.getSelectorsByUserAgent=function(e){if(!e||"string"!=typeof e){console.error("No valid user agent string was provided");return}var t=wy(e);return xm({device:t.device,browser:t.browser,os:t.os,engine:t.engine,ua:t.ua})},wl.getUA=xW,wl.isAndroid=xT,wl.isBrowser=xE,wl.isChrome=xA,wl.isChromium=xx,wl.isConsole=xv,wl.isDesktop=xC,wl.isEdge=xH,wl.isEdgeChromium=xZ,wl.isElectron=xJ,wl.isEmbedded=xy,wl.isFirefox=xR,wl.isIE=xN,wl.isIOS=xI,wl.isIOS13=xY,wl.isIPad13=xK,wl.isIPhone13=xX,wl.isIPod13=xQ,wl.isLegacyEdge=x0,wl.isMIUI=x5,wl.isMacOs=x2,wl.isMobile=xk,wl.isMobileOnly=xS,wl.isMobileSafari=xw,wl.isOpera=xM,wl.isSafari=xO,wl.isSamsungBrowser=x3,wl.isSmartTV=xg,wl.isTablet=x_,wl.isWearable=xb,wl.isWinPhone=xP,wl.isWindows=x1,wl.isYandex=xq,wl.mobileModel=xB,wl.mobileVendor=x$,wl.osName=xj,wl.osVersion=xz,wl.parseUserAgent=wy,wl.setUserAgent=function(e){return wb(e)},wl.useDeviceData=x4,wl.useDeviceSelectors=function(e){var t=x4(e||window.navigator.userAgent);return[xm(t),t]},wl.useMobileOrientation=function(){var e,t=function(e){if(Array.isArray(e))return e}(e=eX.useState(function(){var e=window.innerWidth>window.innerHeight?90:0;return{isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"}}))||function(e,t){var r,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(r=i.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,n=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw n}}return a}}(e,2)||function(e,t){if(e){if("string"==typeof e)return wI(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return wI(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=t[0],n=t[1],i=eX.useCallback(function(){var e=window.innerWidth>window.innerHeight?90:0,t={isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"};r.orientation!==t.orientation&&n(t)},[r.orientation]);return eX.useEffect(function(){return("undefined"==typeof window?"undefined":wk(window))!==void 0&&xk&&(i(),window.addEventListener("load",i,!1),window.addEventListener("resize",i,!1)),function(){window.removeEventListener("resize",i,!1),window.removeEventListener("load",i,!1)}},[i]),r},wl.withOrientationChange=function(e){return /*#__PURE__*/function(t){var r,n;function i(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),(t=function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return wP(e)}(this,wE(i).call(this,e))).isEventListenerAdded=!1,t.handleOrientationChange=t.handleOrientationChange.bind(wP(t)),t.onOrientationChange=t.onOrientationChange.bind(wP(t)),t.onPageLoad=t.onPageLoad.bind(wP(t)),t.state={isLandscape:!1,isPortrait:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&wC(e,t)}(i,t),r=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){("undefined"==typeof window?"undefined":wk(window))!==void 0&&xk&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return wu.createElement(e,w_({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}],wS(i.prototype,r),n&&wS(i,n),i}(wu.Component)};const x6=vm.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,x8=vm.div`
  display: flex;
  flex-direction: column;
  row-gap: ${wl.isMobile?"40px":"20px"};
  width: ${wl.isMobile?"75vw":"35vw"};
  min-width: 500px;
  align-items: center;
  justify-content: center;
  border: 1px solid #b4b3b3;
  padding: 50px;
  border-radius: 30px;
`;function x9(){let[e,t]=(0,eX.useState)(!1),r=(0,eX.useRef)(),n=(0,eX.useRef)(),i=function(e){let{theme:t}=pn(),r=pX();return(0,eX.useMemo)(()=>(function(e,t){let r=r=>{var n;return{...t,...r,position:// src/toast.placement.ts
    function(e,t){var r;let n=null!=e?e:"bottom",i={"top-start":{ltr:"top-left",rtl:"top-right"},"top-end":{ltr:"top-right",rtl:"top-left"},"bottom-start":{ltr:"bottom-left",rtl:"bottom-right"},"bottom-end":{ltr:"bottom-right",rtl:"bottom-left"}}[n];return null!=(r=null==i?void 0:i[t])?r:n}(null!=(n=null==r?void 0:r.position)?n:null==t?void 0:t.position,e)}},n=e=>{let t=r(e),n=pN(t);return pR.notify(n,t)};return n.update=(e,t)=>{pR.update(e,r(t))},n.promise=(e,t)=>{let r=n({...t.loading,status:"loading",duration:null});e.then(e=>n.update(r,{status:"success",duration:5e3,...rh(t.success,e)})).catch(e=>n.update(r,{status:"error",duration:5e3,...rh(t.error,e)}))},n.closeAll=pR.closeAll,n.close=pR.close,n.isActive=pR.isActive,n})(t.direction,{...r,...e}),[e,t.direction,r])}(),a=ws(),o=(e,t,r)=>{i({title:e,description:r,status:t,duration:3e3,isClosable:!0})};return/*#__PURE__*/(0,p.jsx)(x6,{children:/*#__PURE__*/(0,p.jsxs)(x8,{children:[/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:wl.isMobile?"5em":"2em"},children:"Login"}),/*#__PURE__*/(0,p.jsx)(vT,{placeholder:"Email",size:"lg",ref:r,height:wl.isMobile?"80px":"var(--input-height)",sx:{fontSize:wl.isMobile?"2.5rem":"--input-font-size"}}),/*#__PURE__*/(0,p.jsxs)(vA,{size:"md",children:[/*#__PURE__*/(0,p.jsx)(vT,{size:"lg",type:e?"text":"password",placeholder:"Enter password",ref:n,height:wl.isMobile?"80px":"var(--input-height)",sx:{fontSize:wl.isMobile?"2.5rem":"--input-font-size"}}),/*#__PURE__*/(0,p.jsx)(vN,{width:"4.5rem",top:wl.isMobile?"20px":"4px",children:/*#__PURE__*/(0,p.jsx)(vx,{h:wl.isMobile?"4rem":"2rem",size:wl.isMobile?"lg":"sm",onClick:()=>t(e=>!e),children:e?"Hide":"Show"})})]}),/*#__PURE__*/(0,p.jsx)(vx,{size:"lg",onClick:()=>{r.current&&n.current&&(""==r.current.value?o("Empty email","error"):""==n.current.value?o("Empty password","error"):et(a).setPersistence(yl).then(()=>{var e,t;(e=r.current.value,t=n.current.value,yi(et(a),b0.credential(e,t)).catch(async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&ya(a),e})).then(e=>{o("Login success","success")}).catch(e=>{o(e.code,"error",e.message)})}).catch(e=>{o(e.code,"error",e.message)}))},sx:{height:wl.isMobile?"100px":"var(--chakra-sizes-12)",width:wl.isMobile?"200px":"var(--chakra-sizes-20)",fontSize:wl.isMobile?"3rem":"var(--chakra-fontSizes-lg)"},children:"Login"})]})})}var eX=h("acw62"),x7=e=>/* @__PURE__ */(0,p.jsx)(h7.circle,{cx:50,cy:50,r:42,fill:"transparent",...e});x7.displayName="Circle";var ke=t5({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),kt=t5({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});t5({"0%":{left:"-40%"},"100%":{left:"100%"}}),t5({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});var kr=e=>{let{size:t,isIndeterminate:r,...n}=e;return/* @__PURE__ */(0,p.jsx)(h7.svg,{viewBox:"0 0 100 100",__css:{width:t,height:t,animation:r?`${kt} 2s linear infinite`:void 0},...n})};kr.displayName="Shape";var kn=pr((e,t)=>{var r;let{size:n="48px",max:i=100,min:a=0,valueText:o,getValueText:s,value:l,capIsRound:u,children:c,thickness:d="10px",color:f="#0078d4",trackColor:h="#edebe9",isIndeterminate:m,...g}=e,v=function(e){let{value:t=0,min:r,max:n,valueText:i,getValueText:a,isIndeterminate:o,role:s="progressbar"}=e,l=(t-r)*100/(n-r);return{bind:{"data-indeterminate":o?"":void 0,"aria-valuemax":n,"aria-valuemin":r,"aria-valuenow":o?void 0:t,"aria-valuetext":(()=>{if(null!=t)return"function"==typeof a?a(t,l):i})(),role:s},percent:l,value:t}}({min:a,max:i,value:l,valueText:o,getValueText:s,isIndeterminate:m}),b=m?void 0:(null!=(r=v.percent)?r:0)*2.64,y=null==b?void 0:`${b} ${264-b}`,w=m?{css:{animation:`${ke} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray:y,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"};return/* @__PURE__ */(0,p.jsxs)(h7.div,{ref:t,className:"chakra-progress",...v.bind,...g,__css:{display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:n},children:[/* @__PURE__ */(0,p.jsxs)(kr,{size:n,isIndeterminate:m,children:[/* @__PURE__ */(0,p.jsx)(x7,{stroke:h,strokeWidth:d,className:"chakra-progress__track"}),/* @__PURE__ */(0,p.jsx)(x7,{stroke:f,strokeWidth:d,className:"chakra-progress__indicator",strokeLinecap:u?"round":void 0,opacity:0!==v.value||m?void 0:0,...w})]}),c]})});kn.displayName="CircularProgress";const ki=vm.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;function ka(){return/*#__PURE__*/(0,p.jsx)(ki,{children:/*#__PURE__*/(0,p.jsx)(kn,{isIndeterminate:!0,size:"100px"})})}var eX=h("acw62"),ko=pr(function(e,t){let r=ph("Heading",e),{className:n,...i}=nR(e);return/* @__PURE__ */(0,p.jsx)(h7.h2,{ref:t,className:rd("chakra-heading",e.className),...i,__css:r})});ko.displayName="Heading";var eX=h("acw62"),ks=pr((e,t)=>{let{icon:r,children:n,isRound:i,"aria-label":a,...o}=e,s=r||n,l=(0,eX.isValidElement)(s)?(0,eX.cloneElement)(s,{"aria-hidden":!0,focusable:!1}):null;return/* @__PURE__ */(0,p.jsx)(vx,{padding:"0",borderRadius:i?"full":void 0,ref:t,"aria-label":a,...o,children:l})});ks.displayName="IconButton";var eX=h("acw62");function kl(e){let{viewBox:t="0 0 24 24",d:r,displayName:n,defaultProps:i={}}=e,a=(0,eX.Children).toArray(e.path),o=pr((e,n)=>/* @__PURE__ */(0,p.jsx)(pg,{ref:n,viewBox:t,...i,...e,children:a.length?a:/* @__PURE__ */(0,p.jsx)("path",{fill:"currentColor",d:r})}));return o.displayName=n,o}var ku=kl({displayName:"ArrowLeftIcon",path:/* @__PURE__ */(0,p.jsxs)("g",{fill:"currentColor",children:[/* @__PURE__ */(0,p.jsx)("path",{d:"M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"}),/* @__PURE__ */(0,p.jsx)("path",{d:"M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"})]})}),kc=kl({displayName:"ArrowRightIcon",path:/* @__PURE__ */(0,p.jsxs)("g",{fill:"currentColor",children:[/* @__PURE__ */(0,p.jsx)("path",{d:"M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"}),/* @__PURE__ */(0,p.jsx)("path",{d:"M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"})]})}),kd={};n(kd,"GenIcon",()=>kg);var eX=(h("acw62"),h("acw62")),kf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kh=/*@__PURE__*/c(eX).createContext&&/*@__PURE__*/c(eX).createContext(kf),kp=function(){return(kp=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},km=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function kg(e){// eslint-disable-next-line react/display-name
return function(t){return /*@__PURE__*/c(eX).createElement(kv,kp({attr:kp({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return /*@__PURE__*/c(eX).createElement(t.tag,kp({key:r},t.attr),e(t.child))})}(e.child))}}function kv(e){var t=function(t){var r,n=e.attr,i=e.size,a=e.title,o=km(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),/*@__PURE__*/c(eX).createElement("svg",kp({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:r,style:kp(kp({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&/*@__PURE__*/c(eX).createElement("title",null,a),e.children)};return void 0!==kh?/*@__PURE__*/c(eX).createElement(kh.Consumer,null,function(e){return t(e)}):t(kf)}function kb(e){return(0,kd.GenIcon)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"}},{tag:"path",attr:{d:"M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"}}]})(e)}const ky=[{title:"Budget",icon:/*#__PURE__*/(0,p.jsx)(pg,{as:function(e){return(0,kd.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z"}}]})(e)}})},{title:"Bank Account",icon:/*#__PURE__*/(0,p.jsx)(pg,{as:function(e){return(0,kd.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM381 836H264V462h117v374zm189 0H453V462h117v374zm190 0H642V462h118v374z"}}]})(e)}})}],kw=vm.div`
  height: 100vh;
  width: 80px;
  transition: width 1s ease;
  box-shadow: 5px 0 12px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
`,kx=(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=gN(vp.apply(void 0,p5([e],t,!1))),i=mV(gm(n)>>>0);return new vt(i,n)})`
  0% {
    clip-path: inset(0 44% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`,kk=vm.div`
  width: 100vw;
  height: 200px;
  margin-top: auto;
  box-shadow: 5px 0 12px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,kS=vm.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${Math.round(100/ky.length)+"vw"};
`,k_=function(){let[e,t]=(0,eX.useState)(!1),r=(0,eX.useRef)(),n=e=>{switch(e){case!1:r.current.style.width="180px";break;case!0:r.current.style.width="80px"}return!e},i=t=>/*#__PURE__*/(0,p.jsxs)(p.Fragment,{children:[!e&&/*#__PURE__*/(0,p.jsx)(ks,{"aria-label":t.label,icon:t.icon,variant:"ghost"}),e&&/*#__PURE__*/(0,p.jsxs)(vx,{variant:"ghost",children:[t.icon,t.label]})]});return/*#__PURE__*/(0,p.jsxs)(kw,{ref:r,children:[!e&&/*#__PURE__*/(0,p.jsx)(pg,{boxSize:30,as:kb,sx:{marginBottom:"10px"}}),e&&/*#__PURE__*/(0,p.jsx)(()=>{let e=vm.div`
      width: 180px;
      text-align: center;
      animation: ${kx} 1s ease
    `;return/*#__PURE__*/(0,p.jsx)(e,{children:/*#__PURE__*/(0,p.jsx)(ko,{fontSize:"1.5rem",sx:{marginBottom:"10px"},children:"Simple Budget"})})},{}),ky.map(e=>/*#__PURE__*/(0,p.jsx)(i,{label:e.title,icon:e.icon})),/*#__PURE__*/(0,p.jsx)(ks,{icon:e?/*#__PURE__*/(0,p.jsx)(ku,{}):/*#__PURE__*/(0,p.jsx)(kc,{}),onClick:()=>t(n),sx:{marginTop:"auto",marginBottom:"10px"},"aria-label":"Expand",variant:"ghost"})]})},kE=function(){return/*#__PURE__*/(0,p.jsx)(kk,{children:ky.map(e=>/*#__PURE__*/(0,p.jsxs)(kS,{children:[/*#__PURE__*/(0,p.jsx)(ks,{"aria-label":e.title,icon:e.icon,variant:"ghost",height:"100px",width:"100px",fontSize:"100px"}),/*#__PURE__*/(0,p.jsx)(ko,{children:e.title})]}))})};var kC=Object.defineProperty,kT=(e,t,r)=>t in e?kC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,kP=(e,t,r)=>(kT(e,"symbol"!=typeof t?t+"":t,r),r),eX=h("acw62"),kI=new class{constructor(){kP(this,"modals"),this.modals=/* @__PURE__ */new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return!!e&&this.modals.get(e)===this.modals.size}};function kA(e,t){let[r,n]=(0,eX.useState)(0);return(0,eX.useEffect)(()=>{let r=e.current;if(r){if(t){let e=kI.add(r);n(e)}return()=>{kI.remove(r),n(0)}}},[t,e]),r}var kR=new WeakMap,kO=new WeakMap,kM={},kN=0,kz=function(e){return e&&(e.host||kz(e.parentNode))},kj=function(e,t,r,n){var i=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var r=kz(e);return r&&t.contains(r)?r:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});kM[r]||(kM[r]=new WeakMap);var a=kM[r],o=[],s=new Set,l=new Set(i),u=function(e){!e||s.has(e)||(s.add(e),u(e.parentNode))};i.forEach(u);var c=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))c(e);else{var t=e.getAttribute(n),i=null!==t&&"false"!==t,l=(kR.get(e)||0)+1,u=(a.get(e)||0)+1;kR.set(e,l),a.set(e,u),o.push(e),1===l&&i&&kO.set(e,!0),1===u&&e.setAttribute(r,"true"),i||e.setAttribute(n,"true")}})};return c(t),s.clear(),kN++,function(){o.forEach(function(e){var t=kR.get(e)-1,i=a.get(e)-1;kR.set(e,t),a.set(e,i),t||(kO.has(e)||e.removeAttribute(n),kO.delete(e)),i||e.removeAttribute(r)}),--kN||(// clear
kR=new WeakMap,kR=new WeakMap,kO=new WeakMap,kM={})}},kL=function(e,t,r){void 0===r&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),i=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return i?(// we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
n.push.apply(n,Array.from(i.querySelectorAll("[aria-live]"))),kj(n,i,r,"aria-hidden")):function(){return null}},eX=h("acw62"),[kD,kF]=t9({name:"ModalStylesContext",errorMessage:"useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" "}),[k$,kB]=t9({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),kV=e=>{let t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:r,children:n,autoFocus:i,trapFocus:a,initialFocusRef:o,finalFocusRef:s,returnFocusOnClose:l,blockScrollOnMount:u,allowPinchZoom:c,preserveScrollBarGap:d,motionPreset:f,lockFocusAcrossFrames:h,onCloseComplete:m}=t,g=pp("Modal",t),v=function(e){let{isOpen:t,onClose:r,id:n,closeOnOverlayClick:i=!0,closeOnEsc:a=!0,useInert:o=!0,onOverlayClick:s,onEsc:l}=e,u=(0,eX.useRef)(null),c=(0,eX.useRef)(null),[d,f,h]=function(e,...t){let r=(0,eX.useId)(),n=e||r;return(0,eX.useMemo)(()=>t.map(e=>`${e}-${n}`),[n,t])}(n,"chakra-modal","chakra-modal--header","chakra-modal--body");!function(e,t){let r=e.current;(0,eX.useEffect)(()=>{if(e.current&&t)return kL(e.current)},[t,e,r])}(u,t&&o);let p=kA(u,t),m=(0,eX.useRef)(null),g=(0,eX.useCallback)(e=>{m.current=e.target},[]),v=(0,eX.useCallback)(e=>{"Escape"===e.key&&(e.stopPropagation(),a&&(null==r||r()),null==l||l())},[a,r,l]),[b,y]=(0,eX.useState)(!1),[w,x]=(0,eX.useState)(!1),k=(0,eX.useCallback)((e={},t=null)=>({role:"dialog",...e,ref:vw(t,u),id:d,tabIndex:-1,"aria-modal":!0,"aria-labelledby":b?f:void 0,"aria-describedby":w?h:void 0,onClick:rv(e.onClick,e=>e.stopPropagation())}),[h,w,d,f,b]),S=(0,eX.useCallback)(e=>{e.stopPropagation(),m.current===e.target&&kI.isTopModal(u.current)&&(i&&(null==r||r()),null==s||s())},[r,i,s]),_=(0,eX.useCallback)((e={},t=null)=>({...e,ref:vw(t,c),onClick:rv(e.onClick,S),onKeyDown:rv(e.onKeyDown,v),onMouseDown:rv(e.onMouseDown,g)}),[v,g,S]);return{isOpen:t,onClose:r,headerId:f,bodyId:h,setBodyMounted:x,setHeaderMounted:y,dialogRef:u,overlayRef:c,getDialogProps:k,getDialogContainerProps:_,index:p}}(t),b={...v,autoFocus:i,trapFocus:a,initialFocusRef:o,finalFocusRef:s,returnFocusOnClose:l,blockScrollOnMount:u,allowPinchZoom:c,preserveScrollBarGap:d,motionPreset:f,lockFocusAcrossFrames:h};return/* @__PURE__ */(0,p.jsx)(k$,{value:b,children:/* @__PURE__ */(0,p.jsx)(kD,{value:g,children:/* @__PURE__ */(0,p.jsx)(pB,{onExitComplete:m,children:b.isOpen&&/* @__PURE__ */(0,p.jsx)(pY,{...r,children:n})})})})};kV.displayName="Modal";var eX=h("acw62"),kU=pr((e,t)=>{let{className:r,...n}=e,{bodyId:i,setBodyMounted:a}=kB();(0,eX.useEffect)(()=>(a(!0),()=>a(!1)),[a]);let o=rd("chakra-modal__body",r),s=kF();return/* @__PURE__ */(0,p.jsx)(h7.div,{ref:t,className:o,id:i,...n,__css:s.body})});kU.displayName="ModalBody";var kW=pr((e,t)=>{let{onClick:r,className:n,...i}=e,{onClose:a}=kB(),o=rd("chakra-modal__close-btn",n),s=kF();return/* @__PURE__ */(0,p.jsx)(pA,{ref:t,__css:s.closeButton,className:o,onClick:rv(r,e=>{e.stopPropagation(),a()}),...i})});kW.displayName="ModalCloseButton";// src/transition-utils.ts
var kH={easeIn:[.4,0,1,1],easeOut:[0,0,.2,1]},kq={enter:{duration:.2,ease:kH.easeOut},exit:{duration:.1,ease:kH.easeIn}},kG={enter:(e,t)=>({...e,delay:"number"==typeof t?t:null==t?void 0:t.enter}),exit:(e,t)=>({...e,delay:"number"==typeof t?t:null==t?void 0:t.exit})},eX=h("acw62"),kY={initial:"exit",animate:"enter",exit:"exit",variants:{exit:({reverse:e,initialScale:t,transition:r,transitionEnd:n,delay:i})=>{var a;return{opacity:0,...e?{scale:t,transitionEnd:null==n?void 0:n.exit}:{transitionEnd:{scale:t,...null==n?void 0:n.exit}},transition:null!=(a=null==r?void 0:r.exit)?a:kG.exit(kq.exit,i)}},enter:({transitionEnd:e,transition:t,delay:r})=>{var n;return{opacity:1,scale:1,transition:null!=(n=null==t?void 0:t.enter)?n:kG.enter(kq.enter,r),transitionEnd:null==e?void 0:e.enter}}}};(0,eX.forwardRef)(function(e,t){let{unmountOnExit:r,in:n,reverse:i=!0,initialScale:a=.95,className:o,transition:s,transitionEnd:l,delay:u,...c}=e,d={initialScale:a,reverse:i,transition:s,transitionEnd:l,delay:u};return/* @__PURE__ */(0,p.jsx)(pB,{custom:d,children:(!r||n&&r)&&/* @__PURE__ */(0,p.jsx)(hK.div,{ref:t,className:rd("chakra-offset-slide",o),...kY,animate:n||r?"enter":"exit",custom:d,...c})})}).displayName="ScaleFade";var eX=h("acw62"),kK={initial:"initial",animate:"enter",exit:"exit",variants:{initial:({offsetX:e,offsetY:t,transition:r,transitionEnd:n,delay:i})=>{var a;return{opacity:0,x:e,y:t,transition:null!=(a=null==r?void 0:r.exit)?a:kG.exit(kq.exit,i),transitionEnd:null==n?void 0:n.exit}},enter:({transition:e,transitionEnd:t,delay:r})=>{var n;return{opacity:1,x:0,y:0,transition:null!=(n=null==e?void 0:e.enter)?n:kG.enter(kq.enter,r),transitionEnd:null==t?void 0:t.enter}},exit:({offsetY:e,offsetX:t,transition:r,transitionEnd:n,reverse:i,delay:a})=>{var o;let s={x:t,y:e};return{opacity:0,transition:null!=(o=null==r?void 0:r.exit)?o:kG.exit(kq.exit,a),...i?{...s,transitionEnd:null==n?void 0:n.exit}:{transitionEnd:{...s,...null==n?void 0:n.exit}}}}}};(0,eX.forwardRef)(function(e,t){let{unmountOnExit:r,in:n,reverse:i=!0,className:a,offsetX:o=0,offsetY:s=8,transition:l,transitionEnd:u,delay:c,...d}=e,f={offsetX:o,offsetY:s,reverse:i,transition:l,transitionEnd:u,delay:c};return/* @__PURE__ */(0,p.jsx)(pB,{custom:f,children:(!r||n&&r)&&/* @__PURE__ */(0,p.jsx)(hK.div,{ref:t,className:rd("chakra-offset-slide",a),custom:f,...kK,animate:n||r?"enter":"exit",...d})})}).displayName="SlideFade";var eX=h("acw62"),kX={slideInBottom:{...kK,custom:{offsetY:16,reverse:!0}},slideInRight:{...kK,custom:{offsetX:16,reverse:!0}},slideInTop:{...kK,custom:{offsetY:-16,reverse:!0}},slideInLeft:{...kK,custom:{offsetX:-16,reverse:!0}},scale:{...kY,custom:{initialScale:.95,reverse:!0}},none:{}},kQ=h7(hK.section),kJ=e=>kX[e||"none"],kZ=(0,eX.forwardRef)((e,t)=>{let{preset:r,motionProps:n=kJ(r),...i}=e;return/* @__PURE__ */(0,p.jsx)(kQ,{ref:t,...n,...i})});kZ.displayName="ModalTransition";var eX=(h("acw62"),h("acw62")),k0="data-focus-lock",k1="data-focus-lock-disabled";function k2(e,t){var r,n,i;return r=t||null,n=function(t){return e.forEach(function(e){return"function"==typeof e?e(t):e&&(e.current=t),e})},// update callback
(i=(0,eX.useState)(function(){return{// value
value:r,// last callback
callback:n,// "memoized" public interface
facade:{get current(){return i.value},set current(value){var e=i.value;e!==value&&(i.value=value,i.callback(value,e))}}}})[0]).callback=n,i.facade}var eX=(h("acw62"),h("acw62")),k5={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},k3=function(e){var t=e.children;return /*#__PURE__*/eX.createElement(eX.Fragment,null,/*#__PURE__*/eX.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:k5}),t,t&&/*#__PURE__*/eX.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:k5}))};function k4(e){return e}function k6(e,t){void 0===t&&(t=k4);var r=[],n=!1;return{read:function(){if(n)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(e){var i=t(e,n);return r.push(i),function(){r=r.filter(function(e){return e!==i})}},assignSyncMedium:function(e){for(n=!0;r.length;){var t=r;r=[],t.forEach(e)}r={push:function(t){return e(t)},filter:function(){return r}}},assignMedium:function(e){n=!0;var t=[];if(r.length){var i=r;r=[],i.forEach(e),t=r}var a=function(){var r=t;t=[],r.forEach(e)},o=function(){return Promise.resolve().then(a)};o(),r={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),r}}}}}function k8(e,t){return void 0===t&&(t=k4),k6(e,t)}function k9(e){void 0===e&&(e={});var t=k6(null);return t.options=p1({async:!0,ssr:!1},e),t}k3.propTypes={},k3.defaultProps={children:null};var k7=k8({},function(e){return{target:e.target,currentTarget:e.currentTarget}}),Se=k8(),St=k8(),Sr=k9({async:!0// focus-lock sidecar is not required on the server
}),Sn=[],Si=/*#__PURE__*/eX.forwardRef(function(e,t){var r,n=eX.useState(),i=n[0],a=n[1],o=eX.useRef(),s=eX.useRef(!1),l=eX.useRef(null),u=e.children,c=e.disabled,d=e.noFocusGuards,f=e.persistentFocus,h=e.crossFrame,p=e.autoFocus,m=(e.allowTextSelection,e.group),g=e.className,v=e.whiteList,b=e.hasPositiveIndices,y=e.shards,w=void 0===y?Sn:y,x=e.as,k=void 0===x?"div":x,S=e.lockProps,_=void 0===S?{}:S,E=e.sideCar,C=e.returnFocus,T=e.focusOptions,P=e.onActivation,I=e.onDeactivation,A=eX.useState({})[0],R=eX.useCallback(function(){l.current=l.current||document&&document.activeElement,o.current&&P&&P(o.current),s.current=!0},[P]),O=eX.useCallback(function(){s.current=!1,I&&I(o.current)},[I]);(0,eX.useEffect)(function(){c||// sideEffect/returnFocus should happen by this time
(l.current=null)},[]);var M=eX.useCallback(function(e){var t=l.current;if(t&&t.focus){var r="function"==typeof C?C(t):C;if(r){var n="object"==typeof r?r:void 0;l.current=null,e?// it's safer to defer the action
Promise.resolve().then(function(){return t.focus(n)}):t.focus(n)}}},[C]),N=eX.useCallback(function(e){s.current&&k7.useMedium(e)},[]),z=Se.useMedium,j=eX.useCallback(function(e){o.current!==e&&(o.current=e,a(e))},[]),L=tA(((r={})[k1]=c&&"disabled",r[k0]=m,r),_),D=!0!==d,F=D&&"tail"!==d,$=k2([t,j]);// MEDIUM CALLBACKS
return /*#__PURE__*/eX.createElement(eX.Fragment,null,D&&[/*#__PURE__*/// nearest focus guard
eX.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:c?-1:0,style:k5}),b?/*#__PURE__*/eX.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:c?-1:1,style:k5}):null],!c&&/*#__PURE__*/eX.createElement(E,{id:A,sideCar:Sr,observed:i,disabled:c,persistentFocus:f,crossFrame:h,autoFocus:p,whiteList:v,shards:w,onActivation:R,onDeactivation:O,returnFocus:M,focusOptions:T}),/*#__PURE__*/eX.createElement(k,tA({ref:$},L,{className:g,onBlur:z,onFocus:N}),u),F&&/*#__PURE__*/eX.createElement("div",{"data-focus-guard":!0,tabIndex:c?-1:0,style:k5}))});function Sa(e,t){return(Sa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function So(e){return(So="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Si.propTypes={},Si.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var eX=(h("acw62"),h("acw62")),Ss=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},Sl=function(e){return Array.isArray(e)?e:[e]},Su=function(e){return Array.isArray(e)?e[0]:e},Sc=function(e){// we can measure only "elements"
// consider others as "visible"
if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!!t&&!!t.getPropertyValue&&("none"===t.getPropertyValue("display")||"hidden"===t.getPropertyValue("visibility"))},Sd=function(e){// DOCUMENT_FRAGMENT_NODE can also point on ShadowRoot. In this case .host will point on the next node
return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},Sf=function(e){// @ts-ignore
return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Sh=function(e,t){var r,n=e.get(t);if(void 0!==n)return n;var i=(r=Sh.bind(void 0,e),!t||Sf(t)||!Sc(t)&&r(Sd(t)));return e.set(t,i),i},Sp=function(e,t){var r,n=e.get(t);if(void 0!==n)return n;var i=(r=Sp.bind(void 0,e),!t||!!Sf(t)||!!Sb(t)&&r(Sd(t)));return e.set(t,i),i},Sm=function(e){// @ts-ignore
return e.dataset},Sg=function(e){return"INPUT"===e.tagName},Sv=function(e){return Sg(e)&&"radio"===e.type},Sb=function(e){return![!0,"true",""].includes(e.getAttribute("data-no-autofocus"))},Sy=function(e){var t;return!!(e&&(null===(t=Sm(e))||void 0===t?void 0:t.focusGuard))},Sw=function(e){return!Sy(e)},Sx=function(e){return!!e},Sk=function(e,t){var r=e.tabIndex-t.tabIndex,n=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return -1}return r||n},SS=function(e,t,r){return Ss(e).map(function(e,t){return{node:e,index:t,tabIndex:r&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}}).filter(function(e){return!t||e.tabIndex>=0}).sort(Sk)},S_="button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",SE="".concat(S_,", [data-focus-guard]"),SC=function(e,t){return Ss((e.shadowRoot||e).children).reduce(function(e,r){return e.concat(r.matches(t?SE:S_)?[r]:[],SC(r))},[])},ST=function(e,t){var r;return(// contentDocument of iframe will be null if current origin cannot access it
e instanceof HTMLIFrameElement&&(null===(r=e.contentDocument)||void 0===r?void 0:r.body)?SP([e.contentDocument.body],t):[e])},SP=function(e,t){return e.reduce(function(e,r){var n,i=SC(r,t),a=(n=[]).concat.apply(n,i.map(function(e){return ST(e,t)}));return e.concat(a,r.parentNode?Ss(r.parentNode.querySelectorAll(S_)).filter(function(e){return e===r}):[])},[])},SI=function(e,t){return Ss(e).filter(function(e){return Sh(t,e)}).filter(function(e){return!((Sg(e)||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))})},SA=function(e,t){return void 0===t&&(t=new Map),Ss(e).filter(function(e){return Sp(t,e)})},SR=function(e,t,r){return SS(SI(SP(e,r),t),!0,r)},SO=function(e,t){return SS(SI(SP(e),t),!1)},SM=function(e,t){return e.shadowRoot?SM(e.shadowRoot,t):!!(void 0!==Object.getPrototypeOf(e).contains&&Object.getPrototypeOf(e).contains.call(e,t))||Ss(e.children).some(function(e){var r;if(e instanceof HTMLIFrameElement){var n=null===(r=e.contentDocument)||void 0===r?void 0:r.body;return!!n&&SM(n,t)}return SM(e,t)})},SN=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var i=n+1;i<r;i+=1){var a=e[n].compareDocumentPosition(e[i]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(i),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n);/* eslint-enable */}return e.filter(function(e,r){return!t.has(r)})},Sz=function(e){return e.parentNode?Sz(e.parentNode):e},Sj=function(e){return Sl(e).filter(Boolean).reduce(function(e,t){var r=t.getAttribute(k0);return e.push.apply(e,r?SN(Ss(Sz(t).querySelectorAll("[".concat(k0,'="').concat(r,'"]:not([').concat(k1,'="disabled"])')))):[t]),e},[])},SL=function(e){try{return e()}catch(e){return}},SD=function(e){if(void 0===e&&(e=document),e&&e.activeElement){var t=e.activeElement;return t.shadowRoot?SD(t.shadowRoot):t instanceof HTMLIFrameElement&&SL(function(){return t.contentWindow.document})?SD(t.contentWindow.document):t}},SF=function(e,t){return void 0===t&&(t=SD(Su(e).ownerDocument)),!!t&&(!t.dataset||!t.dataset.focusGuard)&&Sj(e).some(function(e){var r;return SM(e,t)||(r=t,!!Ss(e.querySelectorAll("iframe")).some(function(e){return e===r}))})},S$=function(e){void 0===e&&(e=document);var t=SD(e);return!!t&&Ss(e.querySelectorAll("[".concat("data-no-focus-lock","]"))).some(function(e){return SM(e,t)})},SB=function(e,t){return void 0===t&&(t=[]),t.push(e),e.parentNode&&SB(e.parentNode.host||e.parentNode,t),t},SV=function(e,t){// tslint:disable-next-line:prefer-for-of
for(var r=SB(e),n=SB(t),i=0;i<r.length;i+=1){var a=r[i];if(n.indexOf(a)>=0)return a}return!1},SU=function(e,t,r){var n=Sl(e),i=Sl(t),a=n[0],o=!1;// TODO: add assert here?
return i.filter(Boolean).forEach(function(e){o=SV(o||e,e)||o,r.filter(Boolean).forEach(function(e){var t=SV(a,e);t&&(o=!o||SM(t,o)?t:SV(t,o))})}),o},SW=function(e){var t=Sj(e).filter(Sw),r=SU(e,e,t),n=new Map,i=SR([r],n,!0),a=SR(t,n).filter(function(e){return Sw(e.node)}).map(function(e){return e.node});return i.map(function(e){var t=e.node;return{node:t,index:e.index,lockItem:a.indexOf(t)>=0,guard:Sy(t)}})},SH=function(e,t){return Sv(e)&&e.name&&t.filter(Sv).filter(function(t){return t.name===e.name}).filter(function(e){return e.checked})[0]||e},Sq=function(e){// IE11 has no Set(array) constructor
var t=new Set;// using filter to support IE11
return e.forEach(function(r){return t.add(SH(r,e))}),e.filter(function(e){return t.has(e)})},SG=function(e){return e[0]&&e.length>1?SH(e[0],e):e[0]},SY=function(e,t){return e.length>1?e.indexOf(SH(e[t],e)):t},SK="NEW_FOCUS",SX=function(e,t,r,n){var i=e.length,a=e[0],o=e[i-1],s=Sy(r);// focus is inside
if(!(r&&e.indexOf(r)>=0)){var l=void 0!==r?t.indexOf(r):-1,u=n?t.indexOf(n):l,c=n?e.indexOf(n):-1,d=l-u,f=t.indexOf(a),h=t.indexOf(o),p=Sq(t),m=(void 0!==r?p.indexOf(r):-1)-(n?p.indexOf(n):l),g=SY(e,0),v=SY(e,i-1);// new focus
if(-1===l||-1===c)return SK;// old focus
if(!d&&c>=0)return c;// first element
if(l<=f&&s&&Math.abs(d)>1)return v;// last element
if(l>=h&&s&&Math.abs(d)>1)return g;// jump out, but not on the guard
if(d&&Math.abs(m)>1)return c;// focus above lock
if(l<=f)return v;// focus below lock
if(l>h)return g;// index is inside tab order, but outside Lock
if(d)return Math.abs(d)>1?c:(i+c+d)%i}},SQ=function(e,t,r){var n=SA(e.map(function(e){return e.node}).filter(function(e){var t,n=null===(t=Sm(e))||void 0===t?void 0:t.autofocus;return e.autofocus||//
void 0!==n&&"false"!==n||//
r.indexOf(e)>=0}));return n&&n.length?SG(n):SG(SA(t))},SJ=function(e,t){var r=new Map;// remap to dstNodes
return(// no Set(dstNodes) for IE11 :(
t.forEach(function(e){return r.set(e.node,e)}),e.map(function(e){return r.get(e)}).filter(Sx))},SZ=function(e,t){var r=SD(Sl(e).length>0?document:Su(e).ownerDocument),n=Sj(e).filter(Sw),i=SU(r||e,e,n),a=new Map,o=SO(n,a),s=SR(n,a).filter(function(e){return Sw(e.node)});if(s[0]||(s=o)[0]){var l=SO([i],a).map(function(e){return e.node}),u=SJ(l,s),c=u.map(function(e){return e.node}),d=SX(c,l,r,t);if(d===SK){var f=SQ(o,c,n.reduce(function(e,t){return e.concat(SI(Ss(t.querySelectorAll("[".concat("data-autofocus-inside","]"))).map(function(e){return SP([e])}).reduce(function(e,t){return e.concat(t)},[]),a))},[]));return f?{node:f}:void console.warn("focus-lock: cannot find any node to move focus into")}return void 0===d?d:u[d]}},S0=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},S1=0,S2=!1,S5//
=function(e,t,r){void 0===r&&(r={});var n=SZ(e,t);if(!S2&&n){if(S1>2){// tslint:disable-next-line:no-console
console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),S2=!0,setTimeout(function(){S2=!1},1);return}S1++,S0(n.node,r.focusOptions),S1--}};function S3(e){setTimeout(e,1)}var S4=null,S6=null,S8=null,S9=!1,S7=function(e,t){S8={observerNode:e,portaledElement:t}};function _e(e,t,r,n){var i=null,a=e;do{var o=n[a];if(o.guard)o.node.dataset.focusAutoGuard&&(i=o);else if(o.lockItem){if(a!==e)return;i=null}else break}while((a+=r)!==t)i&&(i.node.tabIndex=0)}var _t=function(e){return e&&"current"in e?e.current:e},_r=function(){var e=!1;if(S4){var t=S4,r=t.observed,n=t.persistentFocus,i=t.autoFocus,a=t.shards,o=t.crossFrame,s=t.focusOptions,l=r||S8&&S8.portaledElement,u=document&&document.activeElement;if(l){var c=[l].concat(a.map(_t).filter(Boolean));if((!u||(S4.whiteList||function(){return!0})(u))&&(n||(o?!!S9:"meanwhile"===S9)||!(document&&document.activeElement===document.body||S$())||!S6&&i)&&(l&&!(SF(c)||// check for shadow-dom contained elements
u&&c.some(function(e){return function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement)// dive up
)||r.parentNode&&e(t,r.parentNode,n))}(u,e,e)})||S8&&S8.portaledElement===u)&&(document&&!S6&&u&&!i?(u.blur&&u.blur(),document.body.focus()):(e=S5(c,S6,{focusOptions:s}),S8={})),S9=!1,S6=document&&document.activeElement),document){var d=document&&document.activeElement,f=SW(c),h=f.map(function(e){return e.node}).indexOf(d);h>-1&&(// remove old focus
f.filter(function(e){var t=e.guard,r=e.node;return t&&r.dataset.focusAutoGuard}).forEach(function(e){return e.node.removeAttribute("tabIndex")}),_e(h,f.length,1,f),_e(h,-1,-1,f))}}}return e},_n=function(e){_r()&&e&&(// prevent scroll jump
e.stopPropagation(),e.preventDefault())},_i=function(){return S3(_r)},_a=function(){S9="just",S3(function(){S9="meanwhile"})},_o=function(){document.addEventListener("focusin",_n),document.addEventListener("focusout",_i),window.addEventListener("blur",_a)},_s=function(){document.removeEventListener("focusin",_n),document.removeEventListener("focusout",_i),window.removeEventListener("blur",_a)};k7.assignSyncMedium(function(e){// detect portal
var t=e.target,r=e.currentTarget;r.contains(t)||S7(r,t)}),Se.assignMedium(_i),St.assignMedium(function(e){return e({moveFocusInside:S5,focusInside:SF})});var _l=(o=function(e){var t=e.slice(-1)[0];t&&!S4&&_o();var r=S4,n=r&&t&&t.id===r.id;S4=t,!r||n||(r.onDeactivation(),e.filter(function(e){return e.id===r.id}).length||r.returnFocus(!t)),t?(S6=null,n&&r.observed===t.observed||t.onActivation(),_r(!0),S3(_r)):(_s(),S6=null)}// bind medium
,function(e){var t,r,n,i,a=[];function s(){o(i=a.map(function(e){return e.props}).filter(function(e){return!e.disabled}))}var l=/*#__PURE__*/function(t){function r(){return t.apply(this,arguments)||this}r.prototype=Object.create(t.prototype),r.prototype.constructor=r,Sa(r,t),// Try to use displayName of wrapped component
r.peek=function(){return i};var n=r.prototype;return n.componentDidMount=function(){a.push(this),s()},n.componentDidUpdate=function(){s()},n.componentWillUnmount=function(){var e=a.indexOf(this);a.splice(e,1),s()},n.render=function(){return /*@__PURE__*/c(eX).createElement(e,this.props)},r}(eX.PureComponent);return t="displayName",r="SideEffect("+(e.displayName||e.name||"Component")+")",n=function(e,t){if("object"!==So(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==So(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===So(n)?n:String(n))in l?Object.defineProperty(l,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):l[t]=r,l})(function(){return null}),_u=/*#__PURE__*/eX.forwardRef(function(e,t){return /*#__PURE__*/eX.createElement(Si,tA({sideCar:_l,ref:t},e))}),_c=Si.propTypes||{};_c.sideCar,function(e,t){if(null!=e){var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r])}}(_c,["sideCar"]),_u.propTypes={};var _d=e=>e.hasAttribute("tabindex"),_f=e=>e.offsetWidth>0&&e.offsetHeight>0,eX=h("acw62"),_h=null!=(s=_u.default)?s:_u,_p=e=>{let{initialFocusRef:t,finalFocusRef:r,contentRef:n,restoreFocus:i,children:a,isDisabled:o,autoFocus:s,persistentFocus:l,lockFocusAcrossFrames:u}=e,c=(0,eX.useCallback)(()=>{if(null==t?void 0:t.current)t.current.focus();else if(null==n?void 0:n.current){let e=function(e){let t=Array.from(e.querySelectorAll("input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]"));return t.unshift(e),t.filter(e=>(function(e){var t;if(!function(e){var t;if(!(null!=e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE))return!1;let r=null!=(t=e.ownerDocument.defaultView)?t:window;return e instanceof r.HTMLElement}(e)||function e(t){return!!(t.parentElement&&e(t.parentElement))||t.hidden}(e)||!0==!!(t=e).getAttribute("disabled")||!0==!!t.getAttribute("aria-disabled"))return!1;let{localName:r}=e;if(["input","select","textarea","button"].indexOf(r)>=0)return!0;let n={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return r in n?n[r]():!!function(e){let t=e.getAttribute("contenteditable");return"false"!==t&&null!=t}(e)||_d(e)})(e)&&_f(e))}(n.current);0===e.length&&requestAnimationFrame(()=>{var e;null==(e=n.current)||e.focus()})}},[t,n]),d=(0,eX.useCallback)(()=>{var e;null==(e=null==r?void 0:r.current)||e.focus()},[r]),f=i&&!r;return/* @__PURE__ */(0,p.jsx)(_h,{crossFrame:u,persistentFocus:l,autoFocus:s,disabled:o,onActivation:c,onDeactivation:d,returnFocus:f,children:a})};_p.displayName="FocusLock";var eX=(h("acw62"),h("acw62"),h("acw62")),_m="right-scroll-bar-position",_g="width-before-scroll-bar",_v=k9(),_b=function(){},_y=eX.forwardRef(function(e,t){var r=eX.useRef(null),n=eX.useState({onScrollCapture:_b,onWheelCapture:_b,onTouchMoveCapture:_b}),i=n[0],a=n[1],o=e.forwardProps,s=e.children,l=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,h=e.noIsolation,p=e.inert,m=e.allowPinchZoom,g=e.as,v=void 0===g?"div":g,b=e.gapMode,y=p2(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=k2([r,t]),x=p1(p1({},y),i);return eX.createElement(eX.Fragment,null,c&&eX.createElement(f,{sideCar:_v,removeScrollBar:u,shards:d,noIsolation:h,inert:p,setCallbacks:a,allowPinchZoom:!!m,lockRef:r,gapMode:b}),o?eX.cloneElement(eX.Children.only(s),p1(p1({},x),{ref:w})):eX.createElement(v,p1({},x,{className:l,ref:w}),s))});_y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},_y.classNames={fullWidth:_g,zeroRight:_m};var eX=h("acw62"),_w=function(e){var t=e.sideCar,r=p2(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw Error("Sidecar medium not found");return eX.createElement(n,p1({},r))};_w.isSideCarExport=!0;var eX=(h("acw62"),h("acw62"),h("acw62")),_x=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=l||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var n,i;(n=t).styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},_k=function(){var e=_x();return function(t,r){eX.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},_S=function(){var e=_k();return function(t){return e(t.styles,t.dynamic),null}},__={left:0,top:0,right:0,gap:0},_E=function(e){return parseInt(e||"",10)||0},_C=function(e){var t=window.getComputedStyle(document.body),r=t["padding"===e?"paddingLeft":"marginLeft"],n=t["padding"===e?"paddingTop":"marginTop"],i=t["padding"===e?"paddingRight":"marginRight"];return[_E(r),_E(n),_E(i)]},_T=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return __;var t=_C(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},_P=_S(),_I=function(e,t,r,n){var i=e.left,a=e.top,o=e.right,s=e.gap;return void 0===r&&(r="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(n,";\n   padding-right: ").concat(s,"px ").concat(n,";\n  }\n  body {\n    overflow: hidden ").concat(n,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(n,";"),"margin"===r&&"\n    padding-left: ".concat(i,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(o,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s,"px ").concat(n,";\n    "),"padding"===r&&"padding-right: ".concat(s,"px ").concat(n,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(_m," {\n    right: ").concat(s,"px ").concat(n,";\n  }\n  \n  .").concat(_g," {\n    margin-right: ").concat(s,"px ").concat(n,";\n  }\n  \n  .").concat(_m," .").concat(_m," {\n    right: 0 ").concat(n,";\n  }\n  \n  .").concat(_g," .").concat(_g," {\n    margin-right: 0 ").concat(n,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(s,"px;\n  }\n")},_A=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,i=void 0===n?"margin":n,a=eX.useMemo(function(){return _T(i)},[i]);return eX.createElement(_P,{styles:_I(a,!t,i,r?"":"!important")})},_R=!1;if("undefined"!=typeof window)try{var _O=Object.defineProperty({},"passive",{get:function(){return _R=!0,!0}});// @ts-ignore
window.addEventListener("test",_O,_O),// @ts-ignore
window.removeEventListener("test",_O,_O)}catch(e){_R=!1}var _M=!!_R&&{passive:!1},_N=function(e,t){var r=window.getComputedStyle(e);return"hidden"!==r[t]&&// contains scroll inside self
!(r.overflowY===r.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===r[t])},_z=function(e,t){var r=t.ownerDocument,n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),_j(e,n)){var i=_L(e,n);if(i[1]>i[2])return!0}n=n.parentNode}while(n&&n!==r.body)return!1},_j=function(e,t){return"v"===e?_N(t,"overflowY"):_N(t,"overflowX")},_L=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},_D=function(e,t,r,n,i){var a,o=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),s=o*n,l=r.target,u=t.contains(l),c=!1,d=s>0,f=0,h=0;do{var p=_L(e,l),m=p[0],g=p[1]-p[2]-o*m;(m||g)&&_j(e,l)&&(f+=g,h+=m),l=l.parentNode}while(!u&&l!==document.body||// self content
u&&(t.contains(l)||t===l))return d&&(i&&0===f||!i&&s>f)?c=!0:!d&&(i&&0===h||!i&&-s>h)&&(c=!0),c},_F=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},_$=function(e){return[e.deltaX,e.deltaY]},_B=function(e){return e&&"current"in e?e.current:e},_V=0,_U=[],_W=(_v.useMedium(function(e){var t=eX.useRef([]),r=eX.useRef([0,0]),n=eX.useRef(),i=eX.useState(_V++)[0],a=eX.useState(_S)[0],o=eX.useRef(e);eX.useEffect(function(){o.current=e},[e]),eX.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var t=p5([e.lockRef.current],(e.shards||[]).map(_B),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var s=eX.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!o.current.allowPinchZoom;var i,a=_F(e),s=r.current,l="deltaX"in e?e.deltaX:s[0]-a[0],u="deltaY"in e?e.deltaY:s[1]-a[1],c=e.target,d=Math.abs(l)>Math.abs(u)?"h":"v";// allow horizontal touch move on Range inputs. They will not cause any scroll
if("touches"in e&&"h"===d&&"range"===c.type)return!1;var f=_z(d,c);if(!f)return!0;if(f?i=d:(i="v"===d?"h":"v",f=_z(d,c)),!f)return!1;if(!n.current&&"changedTouches"in e&&(l||u)&&(n.current=i),!i)return!0;var h=n.current||i;return _D(h,t,e,"h"===h?l:u,!0)},[]),l=eX.useCallback(function(e){if(_U.length&&_U[_U.length-1]===a){var r="deltaY"in e?_$(e):_F(e),n=t.current.filter(function(t){var n;return t.name===e.type&&t.target===e.target&&(n=t.delta)[0]===r[0]&&n[1]===r[1]})[0];// self event, and should be canceled
if(n&&n.should){e.cancelable&&e.preventDefault();return}// outside or shard event
if(!n){var i=(o.current.shards||[]).map(_B).filter(Boolean).filter(function(t){return t.contains(e.target)});(i.length>0?s(e,i[0]):!o.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),u=eX.useCallback(function(e,r,n,i){var a={name:e,delta:r,target:n,should:i};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),c=eX.useCallback(function(e){r.current=_F(e),n.current=void 0},[]),d=eX.useCallback(function(t){u(t.type,_$(t),t.target,s(t,e.lockRef.current))},[]),f=eX.useCallback(function(t){u(t.type,_F(t),t.target,s(t,e.lockRef.current))},[]);eX.useEffect(function(){return _U.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",l,_M),document.addEventListener("touchmove",l,_M),document.addEventListener("touchstart",c,_M),function(){_U=_U.filter(function(e){return e!==a}),document.removeEventListener("wheel",l,_M),document.removeEventListener("touchmove",l,_M),document.removeEventListener("touchstart",c,_M)}},[]);var h=e.removeScrollBar,p=e.inert;return eX.createElement(eX.Fragment,null,p?eX.createElement(a,{styles:"\n  .block-interactivity-".concat(i," {pointer-events: none;}\n  .allow-interactivity-").concat(i," {pointer-events: all;}\n")}):null,h?eX.createElement(_A,{gapMode:e.gapMode}):null)}),_w),_H=eX.forwardRef(function(e,t){return eX.createElement(_y,p1({},e,{ref:t,sideCar:_W}))});function _q(e){let{autoFocus:t,trapFocus:r,dialogRef:n,initialFocusRef:i,blockScrollOnMount:a,allowPinchZoom:o,finalFocusRef:s,returnFocusOnClose:l,preserveScrollBarGap:u,lockFocusAcrossFrames:c,isOpen:d}=kB(),[f,h]=fP();(0,eX.useEffect)(()=>{!f&&h&&setTimeout(h)},[f,h]);let m=kA(n,d);return/* @__PURE__ */(0,p.jsx)(_p,{autoFocus:t,isDisabled:!r,initialFocusRef:i,finalFocusRef:s,restoreFocus:l,contentRef:n,lockFocusAcrossFrames:c,children:/* @__PURE__ */(0,p.jsx)(_H,{removeScrollBar:!u,allowPinchZoom:o,enabled:1===m&&a,forwardProps:!0,children:e.children})})}_H.classNames=_y.classNames;var _G=pr((e,t)=>{let{className:r,children:n,containerProps:i,motionProps:a,...o}=e,{getDialogProps:s,getDialogContainerProps:l}=kB(),u=s(o,t),c=l(i),d=rd("chakra-modal__content",r),f=kF(),h={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...f.dialog},m={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...f.dialogContainer},{motionPreset:g}=kB();return/* @__PURE__ */(0,p.jsx)(_q,{children:/* @__PURE__ */(0,p.jsx)(h7.div,{...c,className:"chakra-modal__content-container",tabIndex:-1,__css:m,children:/* @__PURE__ */(0,p.jsx)(kZ,{preset:g,motionProps:a,className:d,...u,__css:h,children:n})})})});_G.displayName="ModalContent";var eX=h("acw62"),_Y=pr((e,t)=>{let{className:r,...n}=e,{headerId:i,setHeaderMounted:a}=kB();(0,eX.useEffect)(()=>(a(!0),()=>a(!1)),[a]);let o=rd("chakra-modal__header",r),s=kF(),l={flex:0,...s.header};return/* @__PURE__ */(0,p.jsx)(h7.header,{ref:t,className:o,id:i,...n,__css:l})});_Y.displayName="ModalHeader";var eX=h("acw62"),_K={initial:"exit",animate:"enter",exit:"exit",variants:{enter:({transition:e,transitionEnd:t,delay:r}={})=>{var n;return{opacity:1,transition:null!=(n=null==e?void 0:e.enter)?n:kG.enter(kq.enter,r),transitionEnd:null==t?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:r}={})=>{var n;return{opacity:0,transition:null!=(n=null==e?void 0:e.exit)?n:kG.exit(kq.exit,r),transitionEnd:null==t?void 0:t.exit}}}};(0,eX.forwardRef)(function(e,t){let{unmountOnExit:r,in:n,className:i,transition:a,transitionEnd:o,delay:s,...l}=e,u={transition:a,transitionEnd:o,delay:s};return/* @__PURE__ */(0,p.jsx)(pB,{custom:u,children:(!r||n&&r)&&/* @__PURE__ */(0,p.jsx)(hK.div,{ref:t,className:rd("chakra-fade",i),custom:u,..._K,animate:n||r?"enter":"exit",...l})})}).displayName="Fade";var _X=h7(hK.div),_Q=pr((e,t)=>{let{className:r,transition:n,motionProps:i,...a}=e,o=rd("chakra-modal__overlay",r),s=kF(),l={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...s.overlay},{motionPreset:u}=kB(),c="none"===u?{}:_K,d=i||c;return/* @__PURE__ */(0,p.jsx)(_X,{...d,__css:l,ref:t,className:o,...a})});_Q.displayName="ModalOverlay";var eX=h("acw62"),_J=kl({d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",displayName:"ArrowBackIcon"}),_Z=kl({d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",displayName:"ArrowForwardIcon"});const _0=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],_1=(e,t)=>`${_0[e]} - ${t.toString()}`;function _2(){let[e,t]=(0,eX.useState)(!1),{year:r,setYear:n}=function(){let[e,t]=(0,eX.useState)(new Date().getFullYear());return{year:e,setYear:t}}(),{month:i,setMonth:a}=function(){let[e,t]=(0,eX.useState)(new Date().getMonth());return{month:e,setMonth:t}}();return/*#__PURE__*/(0,p.jsxs)(p.Fragment,{children:[/*#__PURE__*/(0,p.jsx)(ks,{"aria-label":"back",icon:/*#__PURE__*/(0,p.jsx)(_J,{}),fontSize:wl.isMobile?"3rem":"var(--chakra-fontSizes-md);",variant:"ghost",onClick:()=>{a(e=>0===e?(n(e=>e-1),11):e-1)}}),/*#__PURE__*/(0,p.jsx)(vx,{variant:"ghost",size:"lg",fontSize:wl.isMobile?"3rem":"var(--chakra-fontSizes-lg);",onClick:()=>t(!0),children:_1(i,r)}),/*#__PURE__*/(0,p.jsx)(ks,{"aria-label":"forward",icon:/*#__PURE__*/(0,p.jsx)(_Z,{}),fontSize:wl.isMobile?"3rem":"var(--chakra-fontSizes-md);",variant:"ghost",onClick:()=>{a(e=>11===e?(n(e=>e+1),0):e+1)}}),/*#__PURE__*/(0,p.jsxs)(kV,{isOpen:e,onClose:()=>t(!1),isCentered:!0,size:"xl",children:[/*#__PURE__*/(0,p.jsx)(_Q,{}),/*#__PURE__*/(0,p.jsxs)(_G,{height:wl.isMobile?"30vh":null,maxW:wl.isMobile?"80vw":null,children:[/*#__PURE__*/(0,p.jsxs)(_Y,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",columnGap:"20px",fontSize:wl.isMobile?"3rem":"var(--chakra-fontSizes-xl);"},children:[/*#__PURE__*/(0,p.jsx)(ks,{"aria-label":"back",icon:/*#__PURE__*/(0,p.jsx)(_J,{}),variant:"ghost",onClick:()=>n(e=>e-1),fontSize:wl.isMobile?"3rem":"var(--chakra-fontSizes-lg);"}),r,/*#__PURE__*/(0,p.jsx)(ks,{"aria-label":"forward",icon:/*#__PURE__*/(0,p.jsx)(_Z,{}),variant:"ghost",onClick:()=>n(e=>e+1),fontSize:wl.isMobile?"3rem":"var(--chakra-fontSizes-lg);"})]}),/*#__PURE__*/(0,p.jsx)(kW,{}),/*#__PURE__*/(0,p.jsx)(kU,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",columnGap:"10px",justifyContent:"center",rowGap:"20px",marginBottom:"20px"},children:_0.map(e=>/*#__PURE__*/(0,p.jsx)(vx,{width:"30%",height:wl.isMobile?"100px":null,fontSize:wl.isMobile?"2rem":null,onClick:()=>{a(_0.indexOf(e)),t(!1)},children:e}))})]})]})]})}var eX=h("acw62"),_5=kl({d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",displayName:"ArrowDownIcon"});const _3=vm.div`
  display: flex;
  flex-direction: row;
  height: ${wl.isMobile?"80px":"40px"};
  min-height: 40px;
  width: 100%;
  align-items: center;
  background-color: rgba(215, 215, 215, 0.53);
  padding-right: 20px;
  padding-left: 20px;
`,_4=vm.div`
  width: ${wl.isMobile?"20vw":"8vw"};
  min-width: ${wl.isMobile?"200px":"100px"}
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`,_6=vm.div`
  display: flex;
  flex-direction: column;
  transition: max-height 1s linear;
`;function _8(e){let t=(0,eX.useRef)(),[r,n]=(0,eX.useState)(!1);return(0,eX.useMemo)(()=>{for(let t of(0,eX.Children).toArray(e.children));return 0},[e.children]),/*#__PURE__*/(0,p.jsxs)(p.Fragment,{children:[/*#__PURE__*/(0,p.jsxs)(_3,{children:[/*#__PURE__*/(0,p.jsx)(ks,{"aria-label":"fold",icon:r?/*#__PURE__*/(0,p.jsx)(_Z,{}):/*#__PURE__*/(0,p.jsx)(_5,{}),onClick:()=>{switch(t.current.style.maxHeight){case"0px":t.current.style.maxHeight="1500px",n(!1);break;case"1500px":t.current.style.maxHeight="0",n(!0)}},variant:"link",fontSize:wl.isMobile?"30px":null,children:"Fold"}),/*#__PURE__*/(0,p.jsx)(ko,{fontSize:wl.isMobile?"30px":"20px",children:e.title}),/*#__PURE__*/(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:"auto"},children:[/*#__PURE__*/(0,p.jsx)(_4,{children:/*#__PURE__*/(0,p.jsxs)("h1",{style:{fontSize:wl.isMobile?"1.75rem":null},children:["$",e.available]})}),/*#__PURE__*/(0,p.jsx)(_4,{children:/*#__PURE__*/(0,p.jsxs)("h1",{style:{fontSize:wl.isMobile?"1.75rem":null},children:["$",e.assigned]})})]})]}),/*#__PURE__*/(0,p.jsx)(_6,{ref:t,style:{maxHeight:"1500px"},children:e.children})]})}const _9=vm.div`
  height: ${wl.isMobile?"100px":"50px"};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`,_7=vm.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: calc(100vh - 150px);
  padding-bottom: 20px;
  scrollbar-gutter: stable;
`,Ee=vm.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${wl.isMobile?"60px":"30px"};
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  scrollbar-gutter: stable;
  overflow-y: scroll;
;
`,Et=vm.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: ${wl.isMobile?"20vw":"8vw"};
  min-width: ${wl.isMobile?"200px":"100px"};
  height: 100%;
`,Er=function(){return/*#__PURE__*/(0,p.jsxs)(p.Fragment,{children:[/*#__PURE__*/(0,p.jsxs)(_9,{children:[/*#__PURE__*/(0,p.jsx)(vx,{variant:"link",fontSize:wl.isMobile?"2.5rem":null,children:"Create group"}),/*#__PURE__*/(0,p.jsx)(vx,{sx:{marginLeft:"auto"},variant:"link",fontSize:wl.isMobile?"2.5rem":null,children:"Delete group"})]}),/*#__PURE__*/(0,p.jsxs)(Ee,{children:[/*#__PURE__*/(0,p.jsx)(Et,{children:/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:wl.isMobile?"1.75rem":null},children:"Available"})}),/*#__PURE__*/(0,p.jsx)(Et,{children:/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:wl.isMobile?"1.75rem":null},children:"Assigned"})})]}),/*#__PURE__*/(0,p.jsx)(_7,{children:/*#__PURE__*/(0,p.jsxs)(_8,{title:"MyGroup1",assigned:100,available:80,children:[/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:"5rem"},children:"Test"}),/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:"5rem"},children:"Test"}),/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:"5rem"},children:"Test"}),/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:"5rem"},children:"Test"}),/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:"5rem"},children:"Test"}),/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:"5rem"},children:"Test"}),/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:"5rem"},children:"Test"}),/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:"5rem"},children:"Test"}),/*#__PURE__*/(0,p.jsx)("h1",{style:{fontSize:"5rem"},children:"Test"})]})})]})},En=vm.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`,Ei=vm.div`
  display: flex;
  flex-direction: row;
  height: ${wl.isMobile?"200px":"100px"};
  min-height: ${wl.isMobile?"200px":"100px"};
  background-color: white;
  box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.19);
  clip-path: inset(-5px -5px -10px 0px);
`,Ea=vm.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Eo=vm.div`
  display: flex;
  flex-direction: column;
`;function Es(){return/*#__PURE__*/(0,p.jsxs)(En,{children:[/*#__PURE__*/(0,p.jsxs)(Ei,{children:[/*#__PURE__*/(0,p.jsx)(Ea,{children:/*#__PURE__*/(0,p.jsx)(_2,{})}),/*#__PURE__*/(0,p.jsx)(Ea,{children:/*#__PURE__*/(0,p.jsx)("h1",{children:"Money"})})]}),/*#__PURE__*/(0,p.jsx)(Eo,{children:/*#__PURE__*/(0,p.jsx)(Er,{})})]})}const El=vm.div`
  display: flex;
  flex-direction: ${wl.isMobile?"column":"row"};
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
`,Eu=document.getElementById("app"),Ec=mG(Eu);Ec.render(/*#__PURE__*/(0,p.jsx)(function(){let e=/*@__PURE__*/c(g).result.sdkConfig,t=eD(e),r=ws(),[n,i]=(0,eX.useState)("undefined");return(0,eX.useEffect)(()=>{r.onAuthStateChanged(e=>{e?(new Date().getTime()-new Date(e.metadata.lastSignInTime).getTime()>864e5&&et(r).signOut().then(()=>{i("login")}).catch(e=>{alert(`${e.code}: ${e.message}. Please refresh your page.`),i("undefined")}),i("budget")):i("login")})},[]),/*#__PURE__*/(0,p.jsx)(pZ,{toastOptions:{defaultOptions:{position:"top-right",containerStyle:{fontSize:wl.isMobile?"2rem":"auto"}}},children:/*#__PURE__*/(0,p.jsxs)(p0.Provider,{value:t,children:["undefined"==n&&/*#__PURE__*/(0,p.jsx)(ka,{}),"login"==n&&/*#__PURE__*/(0,p.jsx)(x9,{}),"login"!=n&&"undefined"!=n&&/*#__PURE__*/(0,p.jsxs)(El,{children:[!wl.isMobile&&/*#__PURE__*/(0,p.jsx)(k_,{}),"budget"==n&&/*#__PURE__*/(0,p.jsx)(Es,{}),wl.isMobile&&/*#__PURE__*/(0,p.jsx)(kE,{})]})]})})},{}));//# sourceMappingURL=index.7a517af9.js.map

//# sourceMappingURL=index.7a517af9.js.map
