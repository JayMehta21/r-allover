import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>Home page is here</h1>
      <Outlet />
    </div>
  )
}

export default Home
