import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-red-700 p-6  fixed bottom-0 text-center text-white" ><p>© {new Date().getFullYear()} Global News. All Rights Reserved.</p>
    </div>
  )
}

export default Footer