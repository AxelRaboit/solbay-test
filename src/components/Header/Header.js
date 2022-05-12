import React, { useState } from 'react'
import NavMenu from '../Navigation/NavMenu'
import './Header.scss'
import AuthButton from './AuthButton'
import SignUpButton from './SignUpButton'
import DashboardButton from './DashboardButton'


function Header () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className='containerHeader'>
        <img
        src='/assets/SolBay-logo.png'
        className='logoImage'
        />
        <NavMenu />
        { 
            isLoggedIn
            ? <DashboardButton />
            : <SignUpButton />
        }
        <AuthButton isLoggedIn={isLoggedIn} onClick={handleClick} />
    </div>

  )
}

export default Header