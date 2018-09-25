import React from 'react'
import TopLeft from './TopLeft'
import Socials from './Socials'
import Information from './Information'
import Mail from './Mail'

import './styles/Nav.css'

const Nav = () => (
  <React.Fragment>
    <TopLeft/>
    <Socials/>
    <Information/>
    <Mail/>
  </React.Fragment>
)

export default Nav
