import React from 'react'

import './styles/TopLeft.css'

import logoImage from './images/logo.svg'

const TopLeft = () => {

  document.addEventListener('DOMContentLoaded', () => {
    const homeLogo = document.getElementById('home-logo');
    const simple = document.getElementById('simple');

    homeLogo.addEventListener('click', () => {
      simple.scrollIntoView({ behavior: 'smooth' });
    });
  });

  return (
    <nav id="topleft">
      <img id="home-logo" src={logoImage} alt="logo.svg"/>
      <table>
        <tr>
          <a className='secondary-nav' href="https://tinyurl.com/ycd9o5qz" target="_blank" rel="noopener noreferrer">
            <td className='release-date'>9.27.18</td>
            <td>Simple</td>
          </a>
        </tr>
        <tr>
          <a className='secondary-nav' href="https://fanlink.to/depths" target="_blank" rel="noopener noreferrer">
            <td className='release-date'>5.5.17</td>
            <td>Depths</td>
          </a>
        </tr>
      </table>


    </nav>


  )
}

export default TopLeft
