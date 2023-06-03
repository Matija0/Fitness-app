
import React from 'react'
import { Link } from 'react-router-dom'

import "./Footer.css"

const Footer = () => {
  return (
    <footer className='bg-black flex flex-col gap-5 text-xl justify-between items-center text-white py-5 px-20   md:h-28 md:flex-row md:py-2'>
      
      
     
        <Link><i class="bi bi-instagram"></i></Link>
        <Link><i class="bi bi-facebook"></i></Link>
        <Link><i class="bi bi-linkedin"></i></Link>
       <Link> <i class="bi bi-github"></i></Link>
      
    </footer>


  )
}

export default Footer