import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
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

// Have a loading spinner display for two seconds before page is shown
const pageLoad = new Promise((resolve) => {
  window.addEventListener('load', resolve);
});
// promise that resolves after 2 seconds
const delayTimeout = new Promise((resolve) => {
  setTimeout(resolve, 2000);
});
// wait for both pageload and delaytimeout to resolve and then show the page
Promise.all([pageLoad, delayTimeout]).then(() => {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader-hidden');
});

window.onload = pageTransition;

function pageTransition() {
  const sections = document.querySelectorAll('.section');
  const sectBtn = document.querySelectorAll('.control');
  const navlinks = document.querySelectorAll('.navlink');
  const aboutImg = document.querySelectorAll('.desc-img-container');
  const largeImg = document.querySelectorAll('.proj-desc-img-zoomed');

  // toggle between sections on primary navbar clicks

  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', (e) => {
      let targetClass = e.target.className;
      let targetSection = document.getElementById(targetClass);
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      targetSection.classList.add('active');
      document.querySelector(`#${targetClass}`).scrollTo(0, 0);
    });
  }

  // toggle between sections on secondary drop down navbar clicks

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
      document.querySelector(`#${id}`).scrollTo(0, 0);
    });
  }

  // zoom in and out of code images on porfolio project pages on click

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

  // random RGB generator for the programming languages on homepage chaning colors

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

// pop-up alert used on the "This Website" section of my porfolio which alerts the user that they are already on this website
window.alert = function (message, timeout = null) {
  const alert = document.createElement('div');
  const alertButton = document.createElement('button');
  alertButton.innerText = 'OK';
  alert.appendChild(alertButton);

  alert.classList.add('alert');
  alert.setAttribute(
    'style',
    `
  position:fixed;
  background-color:orange;
  font-weight:bold;
  color: black;
  top: 25%;
  left:50%;
  padding: 20px;
  border-radius:10px;
  box-shadow: 0 10px 5px 0 #00000022;
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
  transform: translateX(-50%);
  `
  );
  alertButton.setAttribute(
    'style',
    `
  border: 1px solid #333;
  background: black;
  color:white;
  font-weight:bold;
  border-radius: 5px;
  padding:5px;
  width:25%;
  align-self:center;
  cursor: pointer;
  `
  );
  alert.innerHTML = `<span style="padding:10px">${message}</span>`;
  alert.appendChild(alertButton);
  alertButton.addEventListener('click', (e) => {
    alert.remove();
  });
  if (timeout != null) {
    setTimeout(() => {
      alert.remove();
    }, Number(timeout));
  }
  document.body.appendChild(alert);
};

export default App;
