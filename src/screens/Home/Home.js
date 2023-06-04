import React, { useEffect, useState } from 'react'
import Main from '../../components/Main/Main'
import { auth } from '../../firebase-config'
import Logo from "../../images/herologo.png"

const Home = () => {

  const [timeOfDay, setTime] = useState()
  const current = new Date();
  const time = current.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",

  });



  const getTime = () => {
    if (time >= "06:00" && time <= "12:00") {
      setTime("Morning")
    } else if (time > "12:00" && time <= "18:00") {
      setTime("Afternoon")
    } else if (time > "18:00" && time <= "24:00") {
      setTime("Evening")
    } else {
      setTime("Night")
    }
  }

  useEffect(() => {
    getTime();
  }, [])

  return (
    
    <div className=' container mx-auto flex flex-col items-center'>
      
      <div className='w-full my-5'><h1 className=' text-gray-200 text-xl w-fit font-bold'>Good {timeOfDay} {auth?.currentUser?.displayName}</h1></div>
      <div className=' '><img style={{ height: "18vh" }} className='' src={Logo} alt="" /></div>
      <Main />

    </div>
  )
}

export default Home