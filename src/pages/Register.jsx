import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutAuth from '../Layout/LayoutAuth'
import { authServices } from '../services/auth-service'

export default function Register() {
  const navigate = useNavigate()
  const handleLoginForm = async(e) => {
    e.preventDefault()
    const data = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    await authServices.registerUser(data).then((res) => {
      console.log(res)
      if (res.data.status === true) {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        navigate('/')
        window.location.reload()
      } else {
        alert(res.data.message)
      }
    })
  }
  return (
    <LayoutAuth>
      <form onSubmit={(e)=>handleLoginForm(e)} className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <h1>Username</h1>
          <input className='border' defaultValue='pushMid' type="text" />
        </div>
        <div className='flex flex-col gap-2'>
          <h1>Username</h1>
          <input className='border' defaultValue='111111' type="text" />
        </div>
        <div className='flex justify-center'>
          <button className='bg-gray-500 p-2 rounded-3xl'>Register</button>
        </div>
      </form>
    </LayoutAuth>
  )
}
