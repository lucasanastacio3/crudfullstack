import Link from "next/link"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';


export default function Form() {


const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
const [rememberMe, setRememberMe] = useState<boolean>(false);

const router = useRouter();

   const handleCheckboxChange = (e: any) => {
    setRememberMe(e.target.checked);
  }

   const handleSubmit = async (e: any) => {
    e.preventDefault();

      const response = await fetch('http://localhost:3000/api/auth/login', {
      method: "POST",
      body: JSON.stringify( {
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
      localStorage.setItem('rememberedPassword', password);
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
    }

    if(response.status === 201) {
      const json = await response.json();
      const token: string = json.token;
      localStorage.setItem('token', json.token);

      const usernameResponse = await fetch('http://localhost:3000/users', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if(usernameResponse.status === 200) {
        const usernameJson = await usernameResponse.json();
        const username = [...usernameJson].find((user: any) => user.email === email).username;
        

        if(token) {
          router.push(`/users/${username}`);
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);

        } else {
          console.error("Token not found");
        }
      } else {
        console.error("Error for obtain username");
      }
    } else {
      console.log("Invalid credentials");
    }
  }

    useEffect(() => {
      const rememberedEmail = localStorage.getItem('rememberedEmail');
      const rememberedPassword = localStorage.getItem('rememberedPassword');
     
      if(rememberedEmail && rememberedPassword) {
        setEmail(rememberedEmail);
        setPassword(rememberedPassword);
        setRememberMe(true);
      }
    }, [])

    
    return (
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen'>

        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>

            <h1 className='text-xl font-bold leading-normal tracking-normal text-gray-900 md:text-2x1 dark:text-white'>
              Sign in to your account
            </h1>

            <form onSubmit={handleSubmit} action="" className='space-y-4 md:space-y-6'>
              <div>
                <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@company.com' required />
              </div>
              <div>
                <label htmlFor=""></label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input id="remember" name="remember" checked={rememberMe} onChange={handleCheckboxChange} aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor="remember" className='text-gray-500 dar:text-gray-300'>Remember me</label>
                  </div>
                </div>
                <a href="/forgotPassword" className='text-md font-medium text-blue-500 hover:underline dark:text-blue-500'>Forgot password?</a>
              </div>
              <button className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' type='submit'>Sign in</button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Don't have an account yet? <Link href="/register" className='font-medium text-blue-500 hover:underline dark:text-primary-500'>Sign up</Link>
              </p>
            </form>

          </div>
        </div>
      </div>
    )
}