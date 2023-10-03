"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{8202:function(n,t,e){e.d(t,{j:function(){return u}});var r=e(9492),i=e(6504);class o extends r.l{constructor(){super(),this.setup=n=>{if(!i.sk&&window.addEventListener){let t=()=>n();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var n;null==(n=this.cleanup)||n.call(this),this.cleanup=void 0}}setEventListener(n){var t;this.setup=n,null==(t=this.cleanup)||t.call(this),this.cleanup=n(n=>{"boolean"==typeof n?this.setFocused(n):this.onFocus()})}setFocused(n){let t=this.focused!==n;t&&(this.focused=n,this.onFocus())}onFocus(){this.listeners.forEach(({listener:n})=>{n()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let u=new o},7156:function(n,t,e){e.d(t,{V:function(){return i}});var r=e(6504);let i=function(){let n=[],t=0,e=n=>{n()},i=n=>{n()},o=i=>{t?n.push(i):(0,r.A4)(()=>{e(i)})},u=()=>{let t=n;n=[],t.length&&(0,r.A4)(()=>{i(()=>{t.forEach(n=>{e(n)})})})};return{batch:n=>{let e;t++;try{e=n()}finally{--t||u()}return e},batchCalls:n=>(...t)=>{o(()=>{n(...t)})},schedule:o,setNotifyFunction:n=>{e=n},setBatchNotifyFunction:n=>{i=n}}}()},3864:function(n,t,e){e.d(t,{N:function(){return s}});var r=e(9492),i=e(6504);let o=["online","offline"];class u extends r.l{constructor(){super(),this.setup=n=>{if(!i.sk&&window.addEventListener){let t=()=>n();return o.forEach(n=>{window.addEventListener(n,t,!1)}),()=>{o.forEach(n=>{window.removeEventListener(n,t)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var n;null==(n=this.cleanup)||n.call(this),this.cleanup=void 0}}setEventListener(n){var t;this.setup=n,null==(t=this.cleanup)||t.call(this),this.cleanup=n(n=>{"boolean"==typeof n?this.setOnline(n):this.onOnline()})}setOnline(n){let t=this.online!==n;t&&(this.online=n,this.onOnline())}onOnline(){this.listeners.forEach(({listener:n})=>{n()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let s=new u},3238:function(n,t,e){e.d(t,{DV:function(){return l},Kw:function(){return s},Mz:function(){return f}});var r=e(8202),i=e(3864),o=e(6504);function u(n){return Math.min(1e3*2**n,3e4)}function s(n){return(null!=n?n:"online")!=="online"||i.N.isOnline()}class c{constructor(n){this.revert=null==n?void 0:n.revert,this.silent=null==n?void 0:n.silent}}function l(n){return n instanceof c}function f(n){let t,e,l,f=!1,a=0,h=!1,d=new Promise((n,t)=>{e=n,l=t}),y=()=>!r.j.isFocused()||"always"!==n.networkMode&&!i.N.isOnline(),p=r=>{h||(h=!0,null==n.onSuccess||n.onSuccess(r),null==t||t(),e(r))},v=e=>{h||(h=!0,null==n.onError||n.onError(e),null==t||t(),l(e))},b=()=>new Promise(e=>{t=n=>{let t=h||!y();return t&&e(n),t},null==n.onPause||n.onPause()}).then(()=>{t=void 0,h||null==n.onContinue||n.onContinue()}),w=()=>{let t;if(!h){try{t=n.fn()}catch(n){t=Promise.reject(n)}Promise.resolve(t).then(p).catch(t=>{var e,r;if(h)return;let i=null!=(e=n.retry)?e:3,s=null!=(r=n.retryDelay)?r:u,c="function"==typeof s?s(a,t):s,l=!0===i||"number"==typeof i&&a<i||"function"==typeof i&&i(a,t);if(f||!l){v(t);return}a++,null==n.onFail||n.onFail(a,t),(0,o.Gh)(c).then(()=>{if(y())return b()}).then(()=>{f?v(t):w()})})}};return s(n.networkMode)?w():b().then(w),{promise:d,cancel:t=>{h||(v(new c(t)),null==n.abort||n.abort())},continue:()=>{let n=null==t?void 0:t();return n?d:Promise.resolve()},cancelRetry:()=>{f=!0},continueRetry:()=>{f=!1}}}},9492:function(n,t,e){e.d(t,{l:function(){return r}});class r{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){let t={listener:n};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},6504:function(n,t,e){e.d(t,{A4:function(){return O},G9:function(){return g},Gh:function(){return L},I6:function(){return f},Kp:function(){return s},PN:function(){return u},Rm:function(){return d},SE:function(){return o},VS:function(){return b},X7:function(){return h},ZT:function(){return i},_v:function(){return c},_x:function(){return a},lV:function(){return l},oE:function(){return S},sk:function(){return r},to:function(){return p},yF:function(){return y}});let r="undefined"==typeof window||"Deno"in window;function i(){}function o(n,t){return"function"==typeof n?n(t):n}function u(n){return"number"==typeof n&&n>=0&&n!==1/0}function s(n,t){return Math.max(n+(t||0)-Date.now(),0)}function c(n,t,e){return C(n)?"function"==typeof t?{...e,queryKey:n,queryFn:t}:{...t,queryKey:n}:n}function l(n,t,e){return C(n)?"function"==typeof t?{...e,mutationKey:n,mutationFn:t}:{...t,mutationKey:n}:"function"==typeof n?{...t,mutationFn:n}:{...n}}function f(n,t,e){return C(n)?[{...t,queryKey:n},e]:[n||{},t]}function a(n,t){let{type:e="all",exact:r,fetchStatus:i,predicate:o,queryKey:u,stale:s}=n;if(C(u)){if(r){if(t.queryHash!==d(u,t.options))return!1}else{if(!v(t.queryKey,u))return!1}}if("all"!==e){let n=t.isActive();if("active"===e&&!n||"inactive"===e&&n)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===i||i===t.state.fetchStatus)&&(!o||!!o(t))}function h(n,t){let{exact:e,fetching:r,predicate:i,mutationKey:o}=n;if(C(o)){if(!t.options.mutationKey)return!1;if(e){if(y(t.options.mutationKey)!==y(o))return!1}else{if(!v(t.options.mutationKey,o))return!1}}return("boolean"!=typeof r||"loading"===t.state.status===r)&&(!i||!!i(t))}function d(n,t){let e=(null==t?void 0:t.queryKeyHashFn)||y;return e(n)}function y(n){return JSON.stringify(n,(n,t)=>m(t)?Object.keys(t).sort().reduce((n,e)=>(n[e]=t[e],n),{}):t)}function p(n,t){return v(n,t)}function v(n,t){return n===t||typeof n==typeof t&&!!n&&!!t&&"object"==typeof n&&"object"==typeof t&&!Object.keys(t).some(e=>!v(n[e],t[e]))}function b(n,t){if(n&&!t||t&&!n)return!1;for(let e in n)if(n[e]!==t[e])return!1;return!0}function w(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function m(n){if(!E(n))return!1;let t=n.constructor;if(void 0===t)return!0;let e=t.prototype;return!!(E(e)&&e.hasOwnProperty("isPrototypeOf"))}function E(n){return"[object Object]"===Object.prototype.toString.call(n)}function C(n){return Array.isArray(n)}function L(n){return new Promise(t=>{setTimeout(t,n)})}function O(n){L(0).then(n)}function g(){if("function"==typeof AbortController)return new AbortController}function S(n,t,e){return null!=e.isDataEqual&&e.isDataEqual(n,t)?n:"function"==typeof e.structuralSharing?e.structuralSharing(n,t):!1!==e.structuralSharing?function n(t,e){if(t===e)return t;let r=w(t)&&w(e);if(r||m(t)&&m(e)){let i=r?t.length:Object.keys(t).length,o=r?e:Object.keys(e),u=o.length,s=r?[]:{},c=0;for(let i=0;i<u;i++){let u=r?i:o[i];s[u]=n(t[u],e[u]),s[u]===t[u]&&c++}return i===u&&c===i?t:s}return e}(n,t):t}},165:function(n,t,e){e.d(t,{NL:function(){return s},aH:function(){return c}});var r=e(2265);let i=r.createContext(void 0),o=r.createContext(!1);function u(n,t){return n||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=i),window.ReactQueryClientContext):i)}let s=({context:n}={})=>{let t=r.useContext(u(n,r.useContext(o)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},c=({client:n,children:t,context:e,contextSharing:i=!1})=>{r.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]);let s=u(e,i);return r.createElement(o.Provider,{value:!e&&i},r.createElement(s.Provider,{value:n},t))}}}]);