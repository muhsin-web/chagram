import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <div className=' bg-red h-screen w-1/3'></div>
      <section className='flex flex-1'>
        <Outlet />
      </section>
    <div className=' bg-green-500 h-screen w-1/3'></div>
    </>
  )
}

export default RootLayout