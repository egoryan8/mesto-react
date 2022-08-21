import React from 'react';
import logo from '../images/logo-header.svg';

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="Лого Место" className="logo" />
      </a>
    </header>
  );
};

export default Header;
