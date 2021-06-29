import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars , FaTimes } from 'react-icons/fa'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className="navbar">
            <div className="navbar-container continer">
            <Link to="/" className='navbar-logo'>
            Jason Barbanel
            </Link>
            <div className="menu-icon" onClick={handleClick} />
            {click ? <FaTimes/> : <FaBars/>}
            </div>
        </div>
    )
}

export default Navbar
