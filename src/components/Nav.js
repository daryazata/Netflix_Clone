import React, { useEffect, useState } from 'react';
import netflixLogo from '../assets/Netflix-Logo.png';
import netflixUserIcon from '../assets/netflix-user.jpg';
import './Nav.css';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 120) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <div className={`nav ${scrollPosition && 'nav__black'}`}>
      <img className='nav__logo' src={netflixLogo} alt='Nexflix Logo' />
      <img
        className='nav__logo__user'
        src={netflixUserIcon}
        alt='Nexflix User Icon'
      />
    </div>
  );
};

export default Nav;
