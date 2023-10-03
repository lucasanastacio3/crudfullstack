import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';



const FormPassword = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [messageIsError, setMessageIsError] = useState<boolean>(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/auth/forgot-password', {
                email
            });
            setMessage("Email enviado!");
            setMessageIsError(false);
        } catch (error: any) {
            console.log(error);
            
            if(error.response) {
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
            }
        }
    }
 

return (
    <div className="bg-gray-200 w-full h-screen">
        <form onSubmit={handleSubmit} className="flex mx-auto flex w-1/3 h-screen sm:max-w-md">
            <div className="flex flex-col mx-auto rounded-2xl mt-72 bg-white md:h-fit lg:h-fit sm:h-fit w-2/2 p-4">
                <p className="text-lg absolute h-8 w-1/4 md:h-8 md:w-1/4 sm:w-1/4 font-semibold">Password reset</p>
                <div className="flex mt-12 text-sm md:text-base sm:text-base">
                    <p className="md:text-base ">Enter the email address you used to sign up for an account. We will send you a link to reset your password.</p>
                </div>
                <div className="flex bg-gray-200 rounded p-2 mt-4">
                    <input className="p-2 w-full text-base bg-gray-200" placeholder='Email' onChange={(e) => setEmail(e.target.value)} type="email" value={email}/>
                </div>
                <div className="flex bg-blue-600 hover:bg-blue-700 rounded text-white p-3 mt-4 w-full text-sm rounded justify-center">
                    <button className="text-base font-semibold" type='submit'>Send password reset email</button>
                </div>
                <h3 className="mt-4 font-semibold md:text-base">Signed up with Apple or Google or Apple?</h3>
                <p className="lg:text-base mt-4 hidden md:block">Then we can't reset your password here. You should log in using the same 3rd party application you signed up with.</p>
                <p className='text-sm mt-4 font-light text-gray-500 dark:text-gray-400'>
                    Don't have an account yet? <Link href="/login" className='font-medium text-blue-500 hover:underline dark:text-primary-500'>Sign up</Link>
                </p>
                {message && (
              <div className={`p-3 rounded-md md: text-base text-center ${messageIsError ? 'bg-red-100 text-red-900' : 'bg-green-100 text-green-900'} mt-4`}>
                {message}
              </div>
            )}
            </div>
        </form>
    </div>
    )
  }

export default FormPassword;