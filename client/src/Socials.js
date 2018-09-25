import React from 'react'

import './styles/Socials.css'

import facebookIcon from './images/facebook.svg'
import instagramIcon from './images/instagram.svg'
import spotifyIcon from './images/spotify.svg'
import youtubeIcon from './images/youtube.svg'

const Socials = () => (
  <div id="socials">
    <a href="https://open.spotify.com/artist/2tpI9V9v6nG6Gy6C3lwljb?si=0QshNQI8SrqgCG56oEHb-w">
      <img src={spotifyIcon} alt="spotify.svg"/>
    </a>
    <a href="https://www.youtube.com/channel/UC8LbWhRatemS-LBINZgU-6Q">
      <img src={youtubeIcon} alt="youtube.svg"/>
    </a>
    <a href="https://www.instagram.com/jc_aka_jonathan/">
      <img src={instagramIcon} alt="instagram.svg"/>
    </a>
    <a href="https://www.facebook.com/jonathancrawfordmusic/">
      <img src={facebookIcon} alt="facebook.svg"/>
    </a>
  </div>
)

export default Socials
