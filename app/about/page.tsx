import React from 'react'
import Navbar from '../Components/Navbar/navbar'
import Footer from '../Components/Footer/footer'

const aboutPage = () => {
  return (
  <div>
    <Navbar/>
      <div className='bg-purple-600 text-center w-full h-screen'>
        <h1 className='pt-[20%] text-2xl'>AboutPage</h1>
      </div>
      <div className='text-center py-2 bg-slate-800 text-white hover:text-green-500'>
        <a href='/'>Go to Homepage</a>
      </div>
      <Footer/>
    </div>
  )
}

export default aboutPage
