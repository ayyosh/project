import React from 'react'
import Navbar from '../pages/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'

function Root() {
  return (
    <>
<Navbar/>
<Outlet/>
<Footer/>
</>
  )
}

export default Root