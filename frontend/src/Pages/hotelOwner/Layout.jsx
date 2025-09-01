import React from 'react'
import Navbar from '../../Components/hotelOwner/Navbar'
import Sidebar from '../../Components/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-full'>
        <Navbar/>
        <div className='flex h-full'>
            <Sidebar/>
            <div className='flex-1 p-4 pt-10 md:px-10 h-full border-l border-gray-300 '>
                  <Outlet/>
            </div>
        </div>
      

    </div>
  )
}

export default Layout