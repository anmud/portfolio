import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../../src/tailwind.css'

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
        speed: 800,
		speedAsDuration: true,
		easing: 'easeInOutCubic'
    })
  }

const Layout = ({children}) => {
    return (
        <main >
           <Navbar/>
            {children}
            <Footer/>
        </main>
        
    )
}

export default Layout