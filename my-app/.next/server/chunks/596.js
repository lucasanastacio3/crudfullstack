"use strict";exports.id=596,exports.ids=[596],exports.modules={1668:(t,e,n)=>{/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=n(9885),r="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},o=u.useState,i=u.useEffect,s=u.useLayoutEffect,c=u.useDebugValue;function a(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!r(t,n)}catch(t){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),u=o({inst:{value:n,getSnapshot:e}}),r=u[0].inst,f=u[1];return s(function(){r.value=n,r.getSnapshot=e,a(r)&&f({inst:r})},[t,n,e]),i(function(){return a(r)&&f({inst:r}),t(function(){a(r)&&f({inst:r})})},[t]),c(n),n};e.useSyncExternalStore=void 0!==u.useSyncExternalStore?u.useSyncExternalStore:f},1928:(t,e,n)=>{t.exports=n(1668)},1214:(t,e,n)=>{n.d(e,{$:()=>r});var u=n(1928);let r=u.useSyncExternalStore},4713:(t,e,n)=>{n.d(e,{L:()=>u});function u(t,e){return"function"==typeof t?t(...e):!!t}}};