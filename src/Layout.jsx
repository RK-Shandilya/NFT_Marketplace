import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = ({children, style}) => {
  return (
    <div style={style} className='play-regular'>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
