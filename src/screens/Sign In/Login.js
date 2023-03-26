import React from 'react'

const Login = () => {
  return (
    <div style={{maxWidth: "500px"}} className=' mx-auto rounded-xl mt-24  flex flex-col items-center py-10 bg-gray-800'>
            <div> <h1 className='text-white text-xl font-bold mb-7'>Login to your account</h1></div>
        
        
        <form className='flex flex-col space-y-4'>
            <label for="email" className=' text-sm font-medium text-white mb-2'>Your email</label>
            <input type="email" id="email" className=' bg-gray-500 border border-gray-400 rounded-lg focus:ring-blue-600 focus:border-blue-600 text-white p-2.5'placeholder="name@company.com" required=""/>
            <label for="password" className='mb-2 text-sm font-medium text-white'>Your password</label>
            <input type="password" id="password" placeholder="••••••••" className='bg-gray-500 border border-gray-400  rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 text-white ' required=""/>
            
            
             
           
            <button type='submit' className='bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Login</button>
            
        </form>
    </div>
  )
}

export default Login