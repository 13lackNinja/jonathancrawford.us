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
          <a className='secondary-nav' href="https://open.spotify.com/album/6xFuBAmV8oyyIm1KjFJhx3?si=9B6RX7ksTT6c7oWDSvqrFg" target="_blank" rel="noopener noreferrer">
            <td className='release-date'>9.27.18</td>
            <td>Simple</td>
          </a>
        </tr>
        <tr>
          <a className='secondary-nav' href="https://open.spotify.com/album/1UdI7pSpywdQew7tz60E9l?si=Jr2DPsGSScaElbkR7sH53w" target="_blank" rel="noopener noreferrer">
            <td className='release-date'>5.5.17</td>
            <td>Depths</td>
          </a>
        </tr>
      </table>
    </nav>
  )
}

export default TopLeft
