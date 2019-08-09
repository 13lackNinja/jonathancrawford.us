import React, { Component } from 'react'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import Subscribe from './Subscribe'

import './styles/App.css';

class App extends Component {
  componentDidMount() {
    const home = document.getElementById('home');
    home.scrollIntoView();
  }

  render() {
    return (
      <div id="app">
        <Nav/>
        <Subscribe/>
        <Home/>
        <Footer/>
      </div>
    )
  }
}

export default App;
