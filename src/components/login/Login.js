import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <main className="pa4 black-80 shadow-5 w-25-l center ma4">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Login</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                            />
                        </div>
                    </fieldset>
                    <div className="">
                    <input  onClick = {() => this.props.routeChange('home')}
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