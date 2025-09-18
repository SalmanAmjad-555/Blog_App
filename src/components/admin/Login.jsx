import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl rounded-lg shadow-primary/15'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span>Login</h1>
          <p className='font-light'>Enter your credentials to login the admin panel</p>

        </div>
     
          <form onSubmit={handleSubmit}>

          <div className='flex flex-col'>
            <label>Email</label>
               <input onChange={e=>setEmail(e.target.value)} value={email}
                type="email" placeholder='Enter email' 
               className='border-b-2 border-gray-300 p-2 mb-6 outline-none'/>
          </div>
          <div className='flex flex-col'>
            <label>Password</label>
               <input onChange={e=>setPassword(e.target.value)} value={password}
               type="password" placeholder='your password' 
               className='border-b-2 border-gray-300 p-2 mb-6 outline-none' />
          </div>
          <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90'>Login</button>
          </form>
        
      </div>
    </div>
  )
}

export default Login