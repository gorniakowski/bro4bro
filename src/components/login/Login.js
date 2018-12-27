import React from 'react';

/*Alerts:
1 - wrong email
2 - no password
*/

class Login extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            alert: 0
        }
    }

    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePassChange= (event) => {
        this.setState({password: event.target.value});

    }

    handleSubmit = (event) => {
        const {email, password} = this.state
        event.preventDefault();
        if(!this.validateEmail(email)){
            this.setState({alert: 1})
        }else if (password.length === 0) {
            this.setState({alert:2})
        }else {
            this.props.routeChange('home')
        }
    }

    alert1 = () => {
        return(
            <div className="shadow-5 ba center">
                <h5>Correct email pls pls</h5>
            </div>
        )
    }

    alert2 = () => {
        return(
            <div className="shadow-5 ba center">
                <h5>Where is password ?</h5>
            </div>
        )
    }

    render() {
        const {alert}= this.state
        return (
            
            <main className="pa4 black-80 shadow-5 w-25-l center ma4">

            { alert === 1 && <this.alert1 /> }
            { alert === 2 && <this.alert2 /> }


                
                <form onSubmit={this.handleSubmit} className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Login</legend>
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
                    </fieldset>
                    <div className="">
                    <input 
                            className ="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in"
                    />
                    </div>
                    <div className="lh-copy mt3">
                    <a href="#0" onClick={() => this.props.routeChange('register')} className="f6 link dim black db">Register</a>
                    <a href="#0" onClick={() => alert('Ty głąbie !')}className="f6 link dim black db">Forgot your password?</a>
                    </div>
                </form>
            </main>

        )
            
        
    }
}

export default Login;