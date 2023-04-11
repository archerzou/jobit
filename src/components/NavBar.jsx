import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';

import { logo } from '../assets';
import { light, dark, hamBurger } from '../assets/icons';
import '../styles/navBar.css';

const links = [
  {
    href: '/',
    text: 'Overview',
  },
  {
    href: '/estimatedSalaries',
    text: 'Estimated Salaries',
  },
  {
    href: '/jobSearch',
    text: 'Job Search',
  },
];

const activeStyle = 'text-primary border-b-primary border-b-2 flex items-center h-full text-[16px] font-medium hover:border-b-2 hover:text-primary hover:border-b-primary';

const NavBar = () => {
  const currentTheme = localStorage.getItem('theme');
  const [checked, setChecked] = useState(!!currentTheme);
  const { pathname } = useLocation();

  // Change checked state
  const handleChange = () => {
    // setChecked(val);
    setChecked((prevState) => !prevState);
    // console.log(checked, 'Checked');
  };

  useEffect(() => {
    if (checked) {
      const root = document.getElementsByTagName('html')[0];
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    if (!checked) {
      const root = document.getElementsByTagName('html')[0];
      root.classList.remove('dark');
      localStorage.removeItem('theme');
    }
    return () => {
      // console.log('Just a console');
    };
  }, [checked]);

  return (
    <nav className="border-b-2 h-[70px] dark:border-black_3 w-full flex items-center bg-white dark:bg-black_BG dark:text-natural_3">
      <div className="flex items-center justify-between w-full h-full mx-6 ss:mx-20">
        <Link to="/" className="ss:flex hidden gap-[6px] items-center">
          <img src={logo} alt="jobit" className="w-[90px] h-[22px]" />
        </Link>
        <div className="ss:hidden">
          <img src={hamBurger} alt="hamburger" className="w-6 h-6" />
        </div>
        <div className="hidden items-center gap-[30px] h-full ss:flex">
          {links.map((link, index) => (
            <Link
              to={link.href}
              key={index}
              className={link.href === pathname
                ? activeStyle
                : 'flex items-center h-full text-[16px] font-medium text-natural hover:border-b-2 hover:text-primary hover:border-b-primary'}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <img src={light} className="w-6 h-6" alt="light" />
          <ReactSwitch
            className="toggleBtn"
            checked={checked}
            onChange={handleChange}
          />
          <img src={dark} className="w-6 h-6" alt="dark" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
