import React from 'react'

import './styles/splashdiv.css'
import './styles/Middle.css'

import splashImage from './images/jc_background.jpg'

const Middle = (props) => (
  <div
    id="middle"
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

export default Middle
