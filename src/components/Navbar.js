import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

 


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              
              Jason Barbanel
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/features'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Features
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about-me'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About Me
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/portfolio'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/resume'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Resume
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;