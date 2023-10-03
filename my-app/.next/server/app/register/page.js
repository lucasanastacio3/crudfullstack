(()=>{var e={};e.id=11,e.ids=[11],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},8298:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>u});var s=t(3137),a=t(4647),o=t(4183),i=t.n(o),n=t(1775),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let d=s.AppPageRouteModule,u=["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5198)),"/home/art/estudos/fullstack/my-app/src/app/register/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,7685)),"/home/art/estudos/fullstack/my-app/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,1918,23)),"next/dist/client/components/not-found-error"]}],c=["/home/art/estudos/fullstack/my-app/src/app/register/page.tsx"],p="/register/page",m={require:t,loadChunk:()=>Promise.resolve()},x=new d({definition:{kind:a.x.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},4628:(e,r,t)=>{Promise.resolve().then(t.bind(t,4363))},4363:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var s=t(80),a=t(1440),o=t.n(a),i=t(9885),n=t(3258),l=t(12);function d(){let e={username:"",email:"",password:""},[r,t]=(0,i.useState)({username:"",email:"",password:""}),[a,d]=(0,i.useState)(),[u,c]=(0,i.useState)(!0),{mutateAsync:p}=(0,l.D)({mutationFn:e=>n.Z.post("http://localhost:3000/users",e)}),m=e=>{let{name:s,value:a}=e.target;t({...r,[s]:a})},x=async s=>{s.preventDefault(),p(r).then(r=>{201===r.status&&(d("Accounnt Created!"),t(e),c(!1))}).catch(e=>{if(console.log(e),e.response){let r=e.response,t=r.status,s=r.data.message;401===t?(d(s),c(!0)):400===t?(d(s),c(!0)):500===t&&(d(s),c(!0))}else console.error("Unknown error",a)})};return s.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen",children:s.jsx("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:(0,s.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[s.jsx("h1",{className:"text-xl font-bold leading-normal tracking-normal text-gray-900 md:text-2x1 dark:text-white",children:"Sign up new account"}),(0,s.jsxs)("form",{onSubmit:x,className:"space-y-4 md:space-y-6",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Username"}),s.jsx("input",{value:r.username,onChange:m,type:"text",name:"username",id:"username",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Username",required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Email"}),s.jsx("input",{value:r.email,onChange:m,type:"text",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"password"}),s.jsx("input",{value:r.password,onChange:m,type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),a&&s.jsx("div",{className:`p-3 rounded-md ${u?"bg-red-100 text-red-900":"bg-green-100 text-green-900"}`,children:a}),s.jsx("button",{className:"w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",type:"submit",children:"Sign up"}),(0,s.jsxs)("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Have an account? ",s.jsx(o(),{href:"/login",className:"font-medium text-blue-500 hover:underline dark:text-primary-500",children:"Sign in"})]})]})]})})})}function u(){return s.jsx("section",{className:"bg-gray-200 dark:bg-gray-900 h-screen md:h-full",children:s.jsx(d,{})})}},5198:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>o,default:()=>l});var s=t(7536);let a=(0,s.createProxy)(String.raw`/home/art/estudos/fullstack/my-app/src/app/register/page.tsx`),{__esModule:o,$$typeof:i}=a,n=a.default,l=n}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[335,440,258,596,12,454],()=>t(8298));module.exports=s})();