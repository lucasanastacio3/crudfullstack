import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from "next/navigation"
import Link from 'next/link';

interface FormDataProps {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  }

export default function EditForm() {
    const initialFormData: FormDataProps = { username: '', email: '', password: '', confirmPassword: '' };
    const [formData, setFormData] = useState<FormDataProps>({ username: '', email: '', password: '', confirmPassword: '' });
    const [message, setMessage] = useState<string>();
    const [messageIsError, setMessageIsError] = useState<boolean>(true)
    const [newEmail, setNewEmail] = useState<string>('');
    const [confirmEmail, setConfirmEmail] = useState<string>('');
 
    const router = useRouter();
   const getUsername = () => {
     const username: any = localStorage.getItem('username');
     return username;
   }
 
   const handleInputChange = (e: any) => {
     const { id, value } = e.target;
     if (id === 'email') {
       setNewEmail(value);
     } else if (id === 'confirmEmail') {
       setConfirmEmail(value);
     }
 };
 
   const handleSubmit = async (e: any) => {
     e.preventDefault();
 
     try {
       const response = await axios.put(`http://localhost:3000/users/${getUsername()}`, {
         username: formData.username,
         email: newEmail,
         confirmEmail: confirmEmail,
         password: formData.password,
         confirmPassword: formData.confirmPassword,
       });

       if (response.status === 200) {
         setMessage("Conta Editada!");
         setFormData(initialFormData);
         setMessageIsError(false);
         localStorage.removeItem('token');
         setTimeout(() => {
           router.push(`/login`);
         }, 2300);
       }

       } catch(error: any) {
        if (error.response) {
         const response = error.response;
         const status = response.status;
         const message = response.data.message
         
         if(status === 401) {
           setMessage(message);
           setMessageIsError(true);
         } else if (status === 400) {
           setMessage(message);
           setMessageIsError(true);
         } else if (status === 500) {
           setMessage(message);
           setMessageIsError(true);
         }
       } else {
         console.error("Erro desconhecido", message)
     }
   } 
 }

  return (
    <div className='flex bg-gray-200 w-full h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen'>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-normal tracking-normal text-gray-900 md:text-2x1 dark:text-white'>
            Edit your account
          </h1>
          <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
            <div>
              <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>New Username</label>
              <input value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} type="text" name='username' id='username' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Username' required />
            </div> 
            <div>
              <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>New Email</label>
              <input value={newEmail} onChange={handleInputChange} type="email" name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@company.com' required />
            </div>
            <div>
              <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Confirm Email</label>
              <input value={confirmEmail} onChange={handleInputChange} type="email" name='email' id='confirmEmail' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@company.com' required />
            </div>
            <div>
              <label htmlFor="password">New Password</label>
              <input value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} type="password" name="confirmPassword" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <p className='text-sm mt-4 font-light text-gray-500 dark:text-gray-400'>
                Don't want edit your profile? come back to: <Link href={`/users/${getUsername()}`} className='font-medium text-blue-500 hover:underline dark:text-primary-500'>{getUsername()}</Link>
              </p>
              {message && (
                <div className={`p-3 rounded-md ${messageIsError ? 'bg-red-100 text-red-900' : 'bg-green-100 text-green-900'}`}>
                  {message}
                </div>
              )}
              <button className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' type='submit'>Edit up</button>
            </form>
          </div>
        </div>
      </div>
    )
}