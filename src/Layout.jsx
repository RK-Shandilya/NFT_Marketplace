import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = ({children}) => {
  return (
    <div className='play-regular bg-blue-900 text-white'>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
