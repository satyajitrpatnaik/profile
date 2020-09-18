import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './styles.css';

const NavBar = (props) => {

  let toggleButton;
  let navbarLinks;

  useEffect(() => {
    toggleButton = document.getElementsByClassName('toggle-button')[0];
    navbarLinks = document.getElementsByClassName('navbar-links')[0];
    toggleButton.addEventListener('click', (event) => {
      event.preventDefault();
      navbarLinks.classList.toggle('active');
    });
  }, []);

  const toggleNavbar = (event) => {
    navbarLinks.classList.toggle('active');
  };

  return (
    <nav className={classNames("navbar", "is-primary")}>
      <div className="brand-title">
      <a href="/profile">
        <img className="logo"
            src={process.env.PUBLIC_URL + "/sp-logo.png"}
            alt="Satyajit Patnaik | Frontend JavaScript Developer"/>
      </a>
        
      </div>
      <a href="#" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li><Link to="/profile" onClick={toggleNavbar}>Home</Link></li>
          <li><Link to="/profile/tech-stack" onClick={toggleNavbar}>Tech</Link></li>
          <li><Link to="/profile/experience" onClick={toggleNavbar}>Experience</Link></li>
          <li><Link to="/profile/blogs" onClick={toggleNavbar}>Blogs</Link></li>
          <li><Link to="/profile/interests" onClick={toggleNavbar}>Interests</Link></li>
          <li><Link to="/profile/contact" onClick={toggleNavbar}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
