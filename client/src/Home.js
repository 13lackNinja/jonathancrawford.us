import React from 'react'

import './styles/splashdiv.css'
import './styles/Home.css'

import splashImage from './images/jc_background.jpg'

const Home = (props) => (
  <div
    id="home"
    className="splashdiv"
    style={{ 'backgroundImage': `url(${splashImage})` }}
  >
    <div
      id='opacity'
      style={{
        'opacity': '.2',
        'background': 'black'
      }}></div>
  </div>
)

export default Home
