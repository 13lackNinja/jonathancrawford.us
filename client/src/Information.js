import React from 'react'

import './styles/Information.css'

import infoImage from './images/info.svg'

const Information = () => {

  document.addEventListener('DOMContentLoaded', () => {
    const infoButton = document.getElementById('information');
    const footer = document.getElementById('footer');

    infoButton.addEventListener('click', () => {
      footer.scrollIntoView({ behavior: 'smooth' });
    });
    
  });

  return <img id='information' src={infoImage} alt="info.svg"/>

}

export default Information
