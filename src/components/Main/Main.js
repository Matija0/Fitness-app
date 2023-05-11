import React, { useEffect, useState } from 'react'
import "./Main.css"
import { CircularProgress, CircularProgressLabel, Progress } from '@chakra-ui/react';


const Main = () => {
  const [currentDay, setCurrentDay]=useState()
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const getDay = () =>{
    const d = new Date();
    setCurrentDay(weekday[d.getDay()])
    
  }

  useEffect(()=>{
    getDay()
    
  },[])
  return (
    <div className='main w-full flex flex-row gap-5'>
        <div className=" border border-gray-400">
            <h1 className='text-gray-200 text-2xl font-semibold'>{currentDay}</h1>

        </div>
        
    </div>
  )
}

export default Main