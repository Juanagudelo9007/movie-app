import React from 'react'
import Navbar from '../components/Navbar'
import img from "../assets/hero-bg.png"


function Home() {
  return (
    <div className='relative h-screen w-full'>
        <img src={img}  className='absolute inset-0 w-full h-full object-cover'/>
        <Navbar />
    </div>
  )
}

export default Home