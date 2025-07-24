import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return <>
<Navbar/>
<Sidebar/>
<Outlet></Outlet>
<Footer/>

  </>

  
}
