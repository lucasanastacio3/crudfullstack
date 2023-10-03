(()=>{var e={};e.id=399,e.ids=[399],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3493:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>d.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>g,tree:()=>u});var s=t(3137),a=t(4647),o=t(4183),d=t.n(o),i=t(1775),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let n=s.AppPageRouteModule,u=["",{children:["users",{children:["[id]",{children:["edit",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1882)),"/home/art/estudos/fullstack/my-app/src/app/users/[id]/edit/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,7685)),"/home/art/estudos/fullstack/my-app/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,1918,23)),"next/dist/client/components/not-found-error"]}],c=["/home/art/estudos/fullstack/my-app/src/app/users/[id]/edit/page.tsx"],m="/users/[id]/edit/page",p={require:t,loadChunk:()=>Promise.resolve()},g=new n({definition:{kind:a.x.APP_PAGE,page:"/users/[id]/edit/page",pathname:"/users/[id]/edit",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},3872:(e,r,t)=>{Promise.resolve().then(t.bind(t,6953))},6953:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var s=t(80),a=t(9885),o=t(3258),d=t(7114),i=t(1440),l=t.n(i);function n(){let e={username:"",email:"",password:"",confirmPassword:""},[r,t]=(0,a.useState)({username:"",email:"",password:"",confirmPassword:""}),[i,n]=(0,a.useState)(),[u,c]=(0,a.useState)(!0),[m,p]=(0,a.useState)(""),[g,x]=(0,a.useState)(""),b=(0,d.useRouter)(),y=()=>{let e=localStorage.getItem("username");return e},h=e=>{let{id:r,value:t}=e.target;"email"===r?p(t):"confirmEmail"===r&&x(t)},f=async s=>{s.preventDefault();try{let s=await o.Z.put(`http://localhost:3000/users/${y()}`,{username:r.username,email:m,confirmEmail:g,password:r.password,confirmPassword:r.confirmPassword});200===s.status&&(n("Conta Editada!"),t(e),c(!1),localStorage.removeItem("token"),setTimeout(()=>{b.push("/login")},2300))}catch(e){if(e.response){let r=e.response,t=r.status,s=r.data.message;401===t?(n(s),c(!0)):400===t?(n(s),c(!0)):500===t&&(n(s),c(!0))}else console.error("Erro desconhecido",i)}};return s.jsx("div",{className:"flex bg-gray-200 w-full h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen",children:s.jsx("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:(0,s.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[s.jsx("h1",{className:"text-xl font-bold leading-normal tracking-normal text-gray-900 md:text-2x1 dark:text-white",children:"Edit your account"}),(0,s.jsxs)("form",{onSubmit:f,className:"space-y-4 md:space-y-6",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"New Username"}),s.jsx("input",{value:r.username,onChange:e=>t({...r,username:e.target.value}),type:"text",name:"username",id:"username",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Username",required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"New Email"}),s.jsx("input",{value:m,onChange:h,type:"email",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Confirm Email"}),s.jsx("input",{value:g,onChange:h,type:"email",name:"email",id:"confirmEmail",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"password",children:"New Password"}),s.jsx("input",{value:r.password,onChange:e=>t({...r,password:e.target.value}),type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"password",children:"Confirm Password"}),s.jsx("input",{value:r.confirmPassword,onChange:e=>t({...r,confirmPassword:e.target.value}),type:"password",name:"confirmPassword",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),(0,s.jsxs)("p",{className:"text-sm mt-4 font-light text-gray-500 dark:text-gray-400",children:["Don't want edit your profile? come back to: ",s.jsx(l(),{href:`/users/${y()}`,className:"font-medium text-blue-500 hover:underline dark:text-primary-500",children:y()})]}),i&&s.jsx("div",{className:`p-3 rounded-md ${u?"bg-red-100 text-red-900":"bg-green-100 text-green-900"}`,children:i}),s.jsx("button",{className:"w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",type:"submit",children:"Edit up"})]})]})})})}let u=()=>s.jsx("section",{className:"bg-gray-50 dark:bg-gray-900 h-screen md:h-full",children:s.jsx(n,{})})},1882:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>d,__esModule:()=>o,default:()=>l});var s=t(7536);let a=(0,s.createProxy)(String.raw`/home/art/estudos/fullstack/my-app/src/app/users/[id]/edit/page.tsx`),{__esModule:o,$$typeof:d}=a,i=a.default,l=i},7114:(e,r,t)=>{e.exports=t(2778)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[335,440,258,454],()=>t(3493));module.exports=s})();