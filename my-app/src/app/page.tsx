'use client'

import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <section className='bg-gray-50 dark:bg-gray-900 h-screen md:h-full'>
        <div className='flex items-center justify-around md:h-screen'>
          <Link href='/login' className='text-white w-1/4 p-5 rounded-full bg-blue-950 text-center'>Login</Link>
          <Link href='/register' className='text-white w-1/4 p-5 rounded-full bg-blue-950 text-center'>Register</Link>
        </div>
      </section>
    </div>
  )
}

