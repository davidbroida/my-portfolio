import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Routes from './components/Routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

window.onload = pageTransition;
// document.body.style.zoom = '80%';

function pageTransition() {
  // button click activate button class and activate/ deactivate sections
  const sections = document.querySelectorAll('.section');
  const sectBtn = document.querySelectorAll('.control');
  const navlinks = document.querySelectorAll('.navlink');
  const aboutImg = document.querySelectorAll('.desc-img-container');
  const largeImg = document.querySelectorAll('.proj-desc-img-zoomed');

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function (e) {
      let currentBtn = document.querySelectorAll('.active-btn');

      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';

      let id = e.target.id;
      let targetSection = document.getElementById(id);
      console.log(targetSection);
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      targetSection.classList.add('active');
    });
  }

  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', (e) => {
      let targetClass = e.target.className;
      let targetSection = document.getElementById(targetClass);
      // console.log(targetSection);
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      targetSection.classList.add('active');
    });
  }

  aboutImg.forEach((img) => {
    img.addEventListener('click', (e) => {
      let targetId = e.target.id;
      let zoomedImg = document.getElementsByClassName(`${targetId}`);
      if (zoomedImg[0].style.display === 'none') {
        zoomedImg[0].style.display = 'grid';
      } else {
        zoomedImg[0].style.display = 'none';
      }
    });
  });

  largeImg.forEach((img) => {
    img.addEventListener('click', (e) => {
      let target = e.currentTarget;
      if (target.style.display === 'grid') {
        target.style.display = 'none';
      } else {
        target.style.display = 'grid';
      }
    });
  });

  f;

  function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  const letters = document.querySelectorAll('.letter');
  setInterval(function () {
    for (let letter of letters) {
      letter.style.color = randomRGB();
    }
  }, 1000);
}

export default App;
