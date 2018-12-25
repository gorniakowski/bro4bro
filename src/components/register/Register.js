import React from 'react';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            password2: ''

        }
    }
    
    
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePassChange= (event) => {
        this.setState({password: event.target.value});

    }

    handlePassChange2= (event) => {
        this.setState({password2: event.target.value});
        
    }
    
    
    handleSubmit = (event) => {

        console.log(this.state)
        this.props.routeChange('home')

    }
    
    render () {
        return (
            <main className="pa4 black-80 shadow-5 w-25-l center ma4">
            <form className="measure center">
                <fieldset id="register" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.handleEmailChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.handlePassChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Repeat Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password2"  
                                id="password2"
                                onChange={this.handlePassChange2}
                        />
                    </div>
                </fieldset>
                <div className="">
                <input  onClick = {this.handleSubmit} 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register"
                />
                </div>
            </form>
        </main>
        )
    }
}

export default Register;