import React from 'react'

const Login = () => {
  return (
    <div className=' container w-fit mx-auto px-14 rounded-xl my-14  flex flex-col items-center py-10 bg-gray-700 '>
      <div> <h1 className='text-white text-xl font-bold mb-7'>Login to your account</h1></div>


      <form className='flex flex-col space-y-4'>
        <label for="email" className=' text-sm font-medium text-white mb-2'>Your email</label>
        <input type="email" id="email" className=' bg-gray-500 border-2 border-gray-400 rounded-lg focus:ring-blue-600 focus:border-blue-600 text-white p-2.5' placeholder="name@company.com" required="" />
        <label for="password" className='mb-2 text-sm font-medium text-white'>Your password</label>
        <input type="password" id="password" placeholder="••••••••" className='bg-gray-500 border-2 border-gray-400  rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 text-white ' required="" />
        <button type='submit' className='bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-gray-300 mt-5 w-1/2 self-center'>Login</button>
        <span className='text-lg  text-white'>or continue with:</span>

        <div className=' flex flex-row gap-4'>
          <button className=' bg-none border border-1 rounded-lg text-sm py-2 px-3 text-white hover:bg-gray-600 md:text-lg'><i class="bi bi-google"></i> Google</button>
          <button className='  bg-none border border-1 rounded-lg text-sm py-2 px-3 text-white hover:bg-gray-600 md:text-lg'><i class="bi bi-github"></i> Github</button>
        </div>






      </form>
    </div>
  )
}

export default Login