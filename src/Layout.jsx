import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Layout = ({ children }) => {

  const [user, setUser] = useState({ isLoggedIn: false, fullName: '' });

  const setIsLoggedIn = ({ isLoggedIn, fullName }) => {
    setUser({ isLoggedIn, fullName });
  }

  return (
    <div>
      <Header isLoggedIn={user.isLoggedIn} fullName={user.fullName} setIsLoggedIn={setIsLoggedIn} />
      {React.cloneElement(children, { isLoggedIn: user.isLoggedIn })}
      <Footer />
    </div>
  )
}

export default Layout
