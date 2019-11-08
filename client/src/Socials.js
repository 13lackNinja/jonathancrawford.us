import React from 'react'

import './styles/Socials.css'

import facebookIcon from './images/facebook.svg'
import instagramIcon from './images/instagram.svg'
import twitterIcon from './images/twitter.svg';
import soundcloudIcon from './images/soundcloud.svg';
import spotifyIcon from './images/spotify.svg'
import itunesIcon from './images/itunes.svg'
import youtubeIcon from './images/youtube.svg'
import mediumIcon from './images/medium.svg'

const Socials = () => (
  <div id="socials">
    <a href="https://www.instagram.com/jc_aka_jonathan/">
      <img src={instagramIcon} alt="instagram.svg"/>
    </a>
    <a href="https://facebook.com/jc.aka.jonathan/">
      <img src={facebookIcon} alt="facebook.svg"/>
    </a>
    <a href="https://www.twitter.com/jc_aka_jonathan">
      <img src={twitterIcon} alt="twitter.svg"/>
    </a>
    <a href="https://www.soundcloud.com/jc_aka_jonathan">
      <img src={soundcloudIcon} alt="soundcloud.svg"/>
    </a>
    <a href="https://open.spotify.com/artist/2tpI9V9v6nG6Gy6C3lwljb?si=0QshNQI8SrqgCG56oEHb-w">
      <img src={spotifyIcon} alt="spotify.svg"/>
    </a>
    <a href="https://music.apple.com/us/artist/jonathan-crawford/1128644948">
      <img src={itunesIcon} alt="itunes.svg"/>
    </a>
    <a href="https://www.youtube.com/channel/UC8LbWhRatemS-LBINZgU-6Q">
      <img src={youtubeIcon} alt="youtube.svg"/>
    </a>
    <a href="https://www.medium.com/@jc_aka_jonathan/">
      <img src={mediumIcon} alt="medium.svg"/>
    </a>
  </div>
)

export default Socials
