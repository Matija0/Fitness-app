import React from 'react'
import "./Main.css"


const Main = () => {
  return (
    <div className='main flex flex-row gap-5 '>
        <div className=' bg-gray-500'>
            <h1>Daily workout display-slider to switch for each day</h1>

        </div>
        <div className='flex flex-col gap-4'>
        <div className=' bg-red-200'>
            <h1>Current calorie count/Daily goal </h1>
            <h2>Current macros/Daily goal</h2>
            <h3>Last meal</h3>
        </div>
        
        </div>
    </div>
  )
}

export default Main