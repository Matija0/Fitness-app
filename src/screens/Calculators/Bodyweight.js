import React, { useState } from 'react'

const Bodyweight = () => {

  const [age, setAge] = useState()
  const [height, setHeight] = useState()
  let result

  const handleSubmit = () => {

  }
  return (
    <div className=' container mx-auto'>
      <div className='flex flex-col gap-4 mt-7 text-white '>
        <h1 className='text-xl'>Calculate your ideal bodyweight for your height</h1>
        <p className='text-lg'>Maintaning ideal bodyweight is beneficial for your long term health</p>
      </div>
      <div className=' w-3/4 mx-auto bg-gray-700 py-5 px-4 my-4 rounded-lg md:w-1/2'>
        <form>
          <div className='flex flex-col gap-4'>
            <input className='bg-gray-800 w-1/2 rounded-md py-1 px-2 text-sm focus:ring-2 focus:outline-none focus:ring-primary-300 md:w-1/2 md:text-lg text-white' type="number" />
            <input className='bg-gray-800 w-1/2 rounded-md py-1 px-2 text-sm focus:ring-2 focus:outline-none focus:ring-primary-300 md:w-1/2 md:text-lg' type="number" />
          </div>
          <button type='submit' className='text-white bg-red-800 py-2 px-3  hover:bg-red-700 rounded-lg mt-5' >Calculate</button>
        </form>
      </div>
    </div>
  )
}

export default Bodyweight