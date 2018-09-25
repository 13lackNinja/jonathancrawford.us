import React, { Component } from 'react';
import Nav from './Nav'
import Simple from './Simple'
import Footer from './Footer'
import Subscribe from './Subscribe'

import './styles/App.css';

class App extends Component {
  componentDidMount() {
    const simple = document.getElementById('simple');
    simple.scrollIntoView();
  }

  render() {
    return (
      <div id="app">
        <Nav/>
        <Subscribe/>
        <Simple/>
        <Footer/>
      </div>
    )
  }
}

export default App;
