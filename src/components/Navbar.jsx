import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full fixed top-0 z-30 bg-flashWhite sm:opacity-[0.97]`}>
      <div className="w-full max-w-7xl mx-auto flex flex-col">

        {/* Contact Info Bar */}
        <div className="text-[12px] sm:text-[14px] text-right text-primary px-4 py-1">
          <p className="leading-tight">
            Phone: <span className="font-semibold">+639503258726</span><br />
            Email: <span className="font-semibold">sevy.gonz@gmail.com</span><br />
            Address: <span className="font-semibold">
              BLK 13 LT 8, RUIZ VILLAGE, AGDAO, CITY OF DAVAO, DAVAO DEL SUR 8000
            </span>
          </p>
        </div>
        <div className="w-full px-4 flex justify-between items-center py-2">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}>
            <img
              src={logo} // your logo comes here
              alt="logo"
              className="w-[90px] h-[90px] object-contain"
            />
            <h1 className="text-[24px] font-bold text-primary">Flashery</h1>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-secondary' : 'text-primary'
                  } hover:text-secondary text-[21px] font-black font-orbitron 
               uppercase tracking-[3px]  nav-links`}
                onClick={() => setActive(nav.title)}>
                <a className="inline-block cursor-pointer" href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col px-20  -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`text-primary text-[88px] font-bold 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;