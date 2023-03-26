import React from 'react'
import Main from '../../components/Main/Main'
import Logo from "../../images/herologo.png"

const Home = () => {
  return (
    <div className=' container mx-auto flex flex-col items-center '>
        
        <div className=' '><img style={{height: "25vh"}} className='' src={Logo} alt="" /></div>
        <Main/>
        
    </div>
  )
}

export default Home