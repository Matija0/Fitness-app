import React from 'react'
import DashBoard from '../../components/MealComponents/DashBoard'
import { Link } from 'react-router-dom'
import MealsList from '../../components/MealComponents/MealsList'

const Meals = () => {
  return (
    <div className=' container mx-auto my-20'>
      <div className=' my-4'>
        <h1 className=' text-2xl text-start my-4 text-gray-200 font-bold'>Today</h1>
        <h2 className='text-xl text-gray-300'>Calculate your daily TDEE and macros <Link to={"/tdee"}><span className=' text-sky-600 hover:underline decoration-sky-600'>here</span></Link></h2>
      </div>
      <div className="">
        <DashBoard />
        <MealsList />

      </div>
    </div>
  )
}

export default Meals