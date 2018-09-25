import React from 'react'

import './styles/Mail.css'

import envelopeIcon from './images/envelope.svg'

const Mail = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const mailButton = document.getElementById('mail');
    const subscribe = document.getElementById('subscribe');

    mailButton.addEventListener('click', () => {
      subscribe.scrollIntoView({ behavior: 'smooth' });
    });

  });

  return <img id="mail" src={envelopeIcon} alt="envelope.svg"/>
}


export default Mail
