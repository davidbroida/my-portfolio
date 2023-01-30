import React from 'react';
import { Link } from 'react-router-dom';

function displayHome() {
  let homeElements = document.querySelectorAll('#home');
  homeElements.forEach((element) => {
    element.classList.add('active');
  });
}

function Navbar() {
  return (
    <div id="navbar" className="">
      <div className="navlink active-link" onClick={displayHome}>
        <a className="home">HOME</a>
      </div>
      <div className="navlink">
        <a className="about">ABOUT</a>
      </div>
      <div className="navlink">
        <a className="portfolio">PORTFOLIO</a>
      </div>
      <div className="navlink">
        <a className="contact">CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar;
