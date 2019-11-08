import React, { Component } from 'react';
import Nav from './Nav';
import Middle from './Middle';
import Footer from './Footer';
import Subscribe from './Subscribe';

import './styles/Home.css';

class Home extends Component {
  componentDidMount() {
    const middle = document.getElementById('middle');
    middle.scrollIntoView();
  }

  render() {
    return (
      <div id="home">
        <Nav/>
        <Subscribe/>
        <Middle/>
        <Footer/>
      </div>
    )
  }
}

export default Home;
