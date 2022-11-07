import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LayoutDashboard({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState('') 

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  };

    useEffect(() => {
      if(!localStorage.getItem("token")) {
        navigate('/login')
      }
    })
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between bg-blue-300 w-full p-3">
        <div className="flex gap-1 items-center">
          <span className="font-bold text-2xl">GitHub</span>
          <span>Jobs</span>
        </div>
        <div>
          <button className="p-2 bg-red-500 hover:bg-red-300 rounded-full font-semibold" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="bg-white m-10 p-3 shadow-2xl rounded-xl min-h-screen">
        {children}
      </div>
    </div>
  );
}
