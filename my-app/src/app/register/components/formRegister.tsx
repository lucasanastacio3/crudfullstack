import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

interface FormProps{
  username: string
  email: string
  password: string
}
export default function FormRegister() {

    const initialFormData: FormProps = { username: '', email: '', password: '' };
    const [formData, setFormData] = useState<FormProps>({ username: '', email: '', password: '', });
    const [message, setMessage] = useState<string>();
    const [messageIsError, setMessageIsError] = useState<boolean>(true)


    const { mutateAsync } = useMutation({
      mutationFn: (formData: any) => {
        return axios.post('http://localhost:3000/users', formData);
      },
  })

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        mutateAsync(formData)
        .then((response) => {
          if(response.status === 201) {
            setMessage("Accounnt Created!");
            setFormData(initialFormData);
            setMessageIsError(false);
        }
      }).catch((error: any) => {
        console.log(error);

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
          console.error("Unknown error", message)
        }
     }) 
   }

    return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen'>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-normal tracking-normal text-gray-900 md:text-2x1 dark:text-white'>
            Sign up new account
          </h1>
            <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
          <div>
              <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
              <input value={formData.username} onChange={handleInputChange} type="text" name='username' id='username' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Username' required />
          </div> 
          <div>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
            <input value={formData.email} onChange={handleInputChange} type="text" name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@company.com' required />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input value={formData.password} onChange={handleInputChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
            {message && (
              <div className={`p-3 rounded-md ${messageIsError ? 'bg-red-100 text-red-900' : 'bg-green-100 text-green-900'}`}>
                {message}
              </div>
            )}
            <button className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' type='submit'>Sign up</button>
            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Have an account? <Link href="/login" className='font-medium text-blue-500 hover:underline dark:text-primary-500'>Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}