import React from 'react'
import List from '../components/List'
import SearchBar from '../components/SearchBar'
import LayoutDashboard from '../Layout/LayoutDashboard'

export default function Home() {
  return (
    <div>    <LayoutDashboard>
    <div>
      <div>
        {/* <SearchBar /> */}
      </div>
        <List/>
    </div>
  </LayoutDashboard></div>
  )
}
