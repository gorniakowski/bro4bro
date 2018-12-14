import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { particlesOptions } from './components/particles/particles'
import './App.css';






class App extends Component {
  render() {
    return (
      <div className='App'>
      <Particles className='Particles' params={particlesOptions} />
        <h1>It is working</h1>
      </div>
    )
  }
}

export default App;
