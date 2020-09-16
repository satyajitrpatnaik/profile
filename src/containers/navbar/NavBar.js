import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const NavBar = (props) => {

  useEffect(() => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
    toggleButton.addEventListener('click', (event) => {
      event.preventDefault();
      navbarLinks.classList.toggle('active');
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="brand-title">
        <img className="profile-img"
          src={process.env.PUBLIC_URL + "/sp-logo.png"}/>
      </div>
      <a href="#" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tech-stack">Tech</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/interests">Interests</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
