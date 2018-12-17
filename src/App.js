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




class App extends Component {
  
  constructor() {
    super();
    this.state = {
      route: '',
      signedIn: false,
      lastMeeting: new Date('July 20, 18 00:20:18 GMT+00:00')
    }
  }

  routeChange = (route) => {
    if (route ==='home') {
      this.setState({route: 'home', signedIn: true})
    }else {
      this.setState({route: route, signedIn: false})
    }
  }

  clockReset = () => {
    this.setState({lastMeeting: new Date( )})
    
  }
  
  
  render() {
    return (
     
      <div className='App'>
        <div>
          <Particles className='Particles' params={particlesOptions} />
          <Navigation  signedIn={this.state.signedIn} routeChange={this.routeChange} />
          <TimeCounter params={this.state.lastMeeting}/>
        </div>
       {this.state.route === 'login' && <Login routeChange={this.routeChange} />}
       {this.state.route === 'register' && <Register  routeChange={this.routeChange}/>}
       {this.state.route === 'home' && <Home clockReset={this.clockReset} />}
        
        
          
          
        
      </div>
    )
  }
}

export default App;
