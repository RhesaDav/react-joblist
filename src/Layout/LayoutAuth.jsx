import React from 'react'

export default function LayoutAuth({children}) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-2xl p-2 rounded-xl flex flex-col justify-center items-center'>
      <h1>Welcome To Heaven</h1>
      <div className=''>
        {children}
      </div>
      </div>
    </div>
  )
}
