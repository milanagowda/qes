import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
  return (
    <div className="header bg-light">
      <nav
        className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle"
      >
        <Link to="/" className="logo">
          <div
            className="navbar-brand text-uppercase p-0 m-0"
            style={{ fontSize: '1.5rem', height: '40px', width: '40px' }}
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <img
              src="/logo.png"
              alt=""
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
            ES
          </div>
        </Link>
        <Search />
        <Menu />
      </nav>
    </div>
  );
};

export default Header;
