import React from 'react';

import './styles/TopLeft.css'

import logoImage from './images/logo.svg'

const TopLeft = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const homeLogo = document.getElementById('home-logo');
    const middle = document.getElementById('middle');

    homeLogo.addEventListener('click', () => {
      middle.scrollIntoView({ behavior: 'smooth' });
    });
  });

  return (
    <nav id="topleft">
      <img src={logoImage} alt='logo.svg' id="home-logo"/>
    </nav>
  )
}

export default TopLeft
