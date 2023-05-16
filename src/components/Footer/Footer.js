
import React from 'react'
import { Link } from 'react-router-dom'
import FLogo from "../../images/fitness_logo_dark.jpeg"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='bg-black flex flex-col gap-5 justify-between items-center text-white py-5 px-20   md:h-28 md:flex-row md:py-2'>
      <Link to="/"><div className=' cursor-pointer'>
        <img className=' w-14 h-12 rounded-lg md:w-24 md:h-20' src={FLogo} alt="" />
      </div></Link>
      
      <div className=' text-xl  space-x-7 md:text-2xl'>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-github"></i>
      </div>
    </footer>


  )
}

export default Footer