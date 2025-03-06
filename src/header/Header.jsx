import React from 'react';
import './Header.scss'; 

function Header() {
    return (
      <header className="header">
        <div className="header__content">
          <div className="header__title">ALTANSCHOOL WEB COURSES</div>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__item"><a href="#home" className="header__link">HOME</a></li>
              <li className="header__item"><a href="#about" className="header__link">ABOUT</a></li>
              <li className="header__item"><a href="#shop" className="header__link">SHOP</a></li>
              <li className="header__item"><a href="#blog" className="header__link">BLOG</a></li>
              <li className="header__item"><a href="#contact" className="header__link">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

export default Header;
