import React from 'react'
import "@styles/globals.css";
import Navbar from '@components/NavBar-home';
import Footer from '@components/Footer';

const Layout = ({children}) => {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
      <Navbar/>
       
          
          {children}
        
        <Footer/>
      </body>
    </html>

  )
}

export default Layout
