import React, { useState } from 'react';
import { FaReact, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './NavBar.scss';

function NavBar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  // Toggle the menu open/close
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  // Close the menu after clicking a link
  const closeMenu = () => {
    setToggleIcon(false);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className="navbar__container">
          <Link to={'/'} className='navbar__container__logo'>
            <FaReact size={30} />
          </Link>
        </div>

        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          <li className='navbar__container__menu__item'>
            <Link
              className='navbar__container__menu__item__links'
              to={'/'}
              onClick={closeMenu} // Close menu on link click
            >
              HOME
            </Link>
          </li>
          <li className='navbar__container__menu__item'>
            <Link
              className='navbar__container__menu__item__links'
              to={'/AboutPage'}
              onClick={closeMenu} // Close menu on link click
            >
              ABOUT
            </Link>
          </li>
          <li className='navbar__container__menu__item'>
            <Link
              className='navbar__container__menu__item__links'
              to={'/SkillsPage'}
              onClick={closeMenu} // Close menu on link click
            >
              SKILLS
            </Link>
          </li>
          <li className='navbar__container__menu__item'>
            <Link
              className='navbar__container__menu__item__links'
              to={'/PortfolioPage'}
              onClick={closeMenu} // Close menu on link click
            >
             PROJECTS
            </Link>
          </li>
          {/* <li className='navbar__container__menu__item'>
            <Link
              className='navbar__container__menu__item__links'
              to={'/ResumePage'}
              onClick={closeMenu} // Close menu on link click
            >
              RESUME
            </Link>
          </li> */}
          <li className='navbar__container__menu__item'>
            <Link
              className='navbar__container__menu__item__links'
              to={'/ContactPage'}
              onClick={closeMenu} // Close menu on link click
            >
              CONTACT
            </Link>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
