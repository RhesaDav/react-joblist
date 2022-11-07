import React from 'react'

export default function SearchBar() {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
            <h1>Job Description</h1>
            <input className='border' placeholder='filter by title' type="text" />
        </div>
        <div className='flex justify-between items-center'>
            <h1>Job Description</h1>
            <input type="text" />
        </div>
        <div className='flex justify-between items-center'>
            <input type="checkbox" name="" id="" />
            <h1>Fulltime</h1>
        </div>
        <div className='flex justify-between items-center'>
            <button>Search</button>
        </div>
    </div>
  )
}
