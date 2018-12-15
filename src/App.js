import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { particlesOptions } from './components/particles/particles';
import TimeCounter from './components/time_counter/TimeCounter';
import './App.css';



const lastMeeting = new Date('July 20, 69 00:20:18 GMT+00:00');


class App extends Component {
  render() {
    return (
     
      <div className='App'>
      <Particles className='Particles' params={particlesOptions} />
      <TimeCounter params={lastMeeting}/>
        <h1>It is working</h1>
      </div>
    )
  }
}

export default App;
