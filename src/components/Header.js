import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"
const Header = () => {
  return (
    <div>
    <header className='header'>
        <h1>Where in the World?</h1>
        <button className='dark-themeButton'><FontAwesomeIcon icon={ faMoon }></FontAwesomeIcon><span>Dark Mode</span></button>
    </header>
    </div>
  )
}

export default Header