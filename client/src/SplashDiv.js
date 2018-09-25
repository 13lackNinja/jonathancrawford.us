import React from 'react'

import './styles/SplashDiv.css'



const SplashDiv = (props) => (
  <div id="splashdiv" style={{ 'backgroundImage': `url(${props.image})` }}>
    <div id="opacity"></div>
  </div>
)

export default SplashDiv
