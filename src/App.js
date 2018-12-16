import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { particlesOptions } from './components/particles/particles';
import TimeCounter from './components/time_counter/TimeCounter';
import Login from './components/login/Login';
import Navigation from './components/navigation/Navigation';
import Register from './components/register/Register';
import Home from './components/home/Home';
import 'tachyons';
import './App.css';



const lastMeeting = new Date('July 20, 18 00:20:18 GMT+00:00');


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      route: '',
      signedIn: false
    }
  }

  routeChange = (route) => {
    this.setState({route: route})

  }
  
  
  render() {
    return (
     
      <div className='App'>
        <div>
          <Particles className='Particles' params={particlesOptions} />
          <Navigation  signedIn={this.state.signedIn} routeChange={this.routeChange} />
          <TimeCounter params={lastMeeting}/>
        </div>
       {this.state.route === 'login' && <Login routeChange={this.routeChange} />}
       {this.state.route === 'register' && <Register  routeChange={this.routeChange}/>}
       {this.state.route === 'home' && <Home />}
        
        
          
          
        
      </div>
    )
  }
}

export default App;
