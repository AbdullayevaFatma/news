import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='text-center mt-48'>
      <h1 className='text-9xl tracking-widest'>404</h1>
      <p>oops! Page not found</p>
      <button className='bg-red-700 py-2 px-4 rounded mt-5 text-white cursor-pointer hover:bg-red-600 ' onClick={()=>navigate("/")} >Go Home</button>
    </div>
  )
}

export default NotFound