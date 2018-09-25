import React from 'react'

import './styles/splashdiv.css'
import './styles/Simple.css'

import splashImage from './images/simple.png'

const Simple = (props) => (
  <div
    id="simple"
    className="splashdiv"
    style={{ 'backgroundImage': `url(${splashImage})` }}
  >
    <div
      id='opacity'
      style={{
        'opacity': '.6',
        'background': 'black'
      }}></div>
  </div>
)

export default Simple
