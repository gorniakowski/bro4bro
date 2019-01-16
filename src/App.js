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
      lastMeeting: new Date('July 20, 18 00:20:18 GMT+00:00'),
      usersReady4Bro: [],
      user: {
        name: '',
        ready4bro: false,
        email: '' 
      }
    }
  }


  


  componentDidMount() {
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => {
      this.setState({lastMeeting: new Date(data[0].time)});
      console.log(data[0].time);
  
    })
    
  }

  loadUsersReady4Bro = (data) => {
    this.setState({usersReady4Bro: data})
  }

  loadUser = (data) => {
    this.setState({user:{
      name: data.name,
      ready4bro: data.ready4bro,
      email: data.email
    }})
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
    console.log(this.state.usersReady4Bro)
    return (
      <div className='App'>
        <Navigation  signedIn={this.state.signedIn} routeChange={this.routeChange} />
        <div className=''>
          <Particles className='Particles' params={particlesOptions} />
         <div className="TimeCounter"><TimeCounter params={this.state.lastMeeting}/> </div>
        </div>
       
       {this.state.route === 'login' && <Login routeChange={this.routeChange}  
       loadUser={this.loadUser}
       loadUsersReady4Bro = {this.loadUsersReady4Bro}
       />}
       {this.state.route === 'register' && <Register  routeChange={this.routeChange}/>}
       {this.state.route === 'home' && <Home clockReset={this.clockReset} 
       user={this.state.user}
       usersReady4Bro={this.state.usersReady4Bro}
       />}
        
        
          
          
        
      </div>
    )
  }
}

export default App;
