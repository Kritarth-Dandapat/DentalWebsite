import React from 'react'
import "@styles/globals.css";

const Layout = ({children}) => {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>

  )
}

export default Layout
