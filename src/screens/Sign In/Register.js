import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className=' container mx-auto w-fit my-7 px-3 rounded-xl  flex flex-col items-center bg-gray-700 py-7 md:px-14'>
      <div> <h1 className='text-white text-xl font-bold mb-4'>Create your free account</h1></div>
      <div className=' flex flex-row gap-4'>
        <button className=' bg-none border border-1 rounded-lg text-sm py-2 px-3 text-white hover:bg-gray-600 md:text-lg'><i class="bi bi-google"></i> Sign up with Google</button>
        <button className='  bg-none border border-1 rounded-lg text-sm py-2 px-3 text-white hover:bg-gray-600 md:text-lg'><i class="bi bi-github"></i> Sign up with Github</button>
      </div>
      <div className='mt-3 flex flex-row items-center'><hr className=' w-48 border border-gray-600' /><span className='text-gray-600 '> or </span><hr className='w-48 border border-gray-600' /></div>
      <form className='flex flex-col space-y-4'>
        <label for="email" className=' text-sm font-medium text-white mb-2'>Your email</label>
        <input type="email" id="email" className=' bg-gray-500 border-2 border-gray-400 rounded-lg focus:ring-blue-600 focus:border-blue-600 text-white p-2.5' placeholder="name@company.com" required="" />
        <label for="password" className='mb-2 text-sm font-medium text-white'>Your password</label>
        <input type="password" id="password" placeholder="••••••••" className='bg-gray-500 border-2 border-gray-400  rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 text-white ' required="" />

        <label for="confirm-password" className=" mb-2 text-sm font-medium text-white ">Confirm password</label>
        <input type="password" id="confirm-password" placeholder="••••••••" className="bg-gray-500 border-2 border-gray-400  rounded-lg focus:ring-blue-600 focus:border-blue-600  p-2.5 holder-gray-400 text-white" required="" />
        <div className='flex flex-row items-center justify-start'>
          <input type="checkbox" id="terms" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 mr-2' required="" />
          <label for="terms" className='font-light text-gray-500'>I accept the Terms and Conditions</label>
        </div>
        <button type='submit' className='bg-blue-700 hover:bg-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-gray-300'>Create account</button>
        <Link to="/login"><p class="text-sm font-light text-gray-500">
          Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline">Login here</Link>
        </p></Link>
      </form>


    </div>
  )
}

export default Register