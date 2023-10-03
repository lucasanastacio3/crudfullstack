(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{4959:function(e,r,a){Promise.resolve().then(a.bind(a,7254))},7254:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return m}});var s=a(7437),t=a(2265),d=a(9222),o=a(4033),l=a(1396),n=a.n(l);function i(){let e={username:"",email:"",password:"",confirmPassword:""},[r,a]=(0,t.useState)({username:"",email:"",password:"",confirmPassword:""}),[l,i]=(0,t.useState)(),[m,c]=(0,t.useState)(!0),[u,g]=(0,t.useState)(""),[b,p]=(0,t.useState)(""),x=(0,o.useRouter)(),y=()=>{let e=localStorage.getItem("username");return e},h=e=>{let{id:r,value:a}=e.target;"email"===r?g(a):"confirmEmail"===r&&p(a)},f=async s=>{s.preventDefault();try{let s=await d.Z.put("http://localhost:3000/users/".concat(y()),{username:r.username,email:u,confirmEmail:b,password:r.password,confirmPassword:r.confirmPassword});200===s.status&&(i("Conta Editada!"),a(e),c(!1),localStorage.removeItem("token"),setTimeout(()=>{x.push("/login")},2300))}catch(e){if(e.response){let r=e.response,a=r.status,s=r.data.message;401===a?(i(s),c(!0)):400===a?(i(s),c(!0)):500===a&&(i(s),c(!0))}else console.error("Erro desconhecido",l)}};return(0,s.jsx)("div",{className:"flex bg-gray-200 w-full h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen",children:(0,s.jsx)("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:(0,s.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[(0,s.jsx)("h1",{className:"text-xl font-bold leading-normal tracking-normal text-gray-900 md:text-2x1 dark:text-white",children:"Edit your account"}),(0,s.jsxs)("form",{onSubmit:f,className:"space-y-4 md:space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"New Username"}),(0,s.jsx)("input",{value:r.username,onChange:e=>a({...r,username:e.target.value}),type:"text",name:"username",id:"username",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Username",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"New Email"}),(0,s.jsx)("input",{value:u,onChange:h,type:"email",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Confirm Email"}),(0,s.jsx)("input",{value:b,onChange:h,type:"email",name:"email",id:"confirmEmail",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"password",children:"New Password"}),(0,s.jsx)("input",{value:r.password,onChange:e=>a({...r,password:e.target.value}),type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"password",children:"Confirm Password"}),(0,s.jsx)("input",{value:r.confirmPassword,onChange:e=>a({...r,confirmPassword:e.target.value}),type:"password",name:"confirmPassword",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),(0,s.jsxs)("p",{className:"text-sm mt-4 font-light text-gray-500 dark:text-gray-400",children:["Don't want edit your profile? come back to: ",(0,s.jsx)(n(),{href:"/users/".concat(y()),className:"font-medium text-blue-500 hover:underline dark:text-primary-500",children:y()})]}),l&&(0,s.jsx)("div",{className:"p-3 rounded-md ".concat(m?"bg-red-100 text-red-900":"bg-green-100 text-green-900"),children:l}),(0,s.jsx)("button",{className:"w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",type:"submit",children:"Edit up"})]})]})})})}var m=()=>(0,s.jsx)("section",{className:"bg-gray-50 dark:bg-gray-900 h-screen md:h-full",children:(0,s.jsx)(i,{})})},4033:function(e,r,a){e.exports=a(290)}},function(e){e.O(0,[176,222,971,864,744],function(){return e(e.s=4959)}),_N_E=e.O()}]);