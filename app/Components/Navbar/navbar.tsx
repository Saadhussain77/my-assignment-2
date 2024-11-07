import Link from 'next/link'
import React from 'react'

const navbart = () => {
  return (
    <header className='bg-blue-950 h-12 pl-10 flex justify-between items-center text-white'>
    <div className="logo">
          <h1 className='text-xl m-2'>Nevbar</h1>
    </div>
        <div className='nevigations pr-20'>
          <ul className='flex gap-4 mr-4 cursor-pointer'>
              <Link className='hover:text-blue-500' href="/">Home</Link>
              <Link className='hover:text-gray-600' href="/about">About</Link>
              <Link className='hover:text-red-600' href="/contect">Contect</Link>
              <Link className='hover:text-green-500' href="/services">Services</Link>
          </ul>
    </div>
   </header>
  )
}

export default navbart
