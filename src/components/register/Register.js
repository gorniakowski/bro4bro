import React from 'react';

/*Alerts in form 
1 - passwords don't match
2- passwords cannot be empty
3  - email can't be empty
4 -email is not valid
5 - no name provided
*/


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'',
            password: '',
            password2: '',
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

    handlePassChange = (event) => {
        this.setState({password: event.target.value});

    }

    handlePassChange2 = (event) => {
        this.setState({password2: event.target.value});
        
    }
    
    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    
    //handleFileChange = (event)
    
    handleSubmit = (event) => {
        event.preventDefault();

        const {password, password2, email, name} = this.state;
        if (name.length === 0){
            this.setState({alert: 5})
        }else if (password !== password2){
            this.setState({alert: 1})
        }else if (password.length === 0 || password2.length === 0){
            this.setState({alert: 2})
        }else if (email.length ===0){
            this.setState({alert: 3})
        }else if (!this.validateEmail(email)){
            this.setState({alert: 4})
        }
        else {        
            fetch('http://localhost:3000/register',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                })
            })
            .then(res => res.json())
            .then(user => console.log(user))
            this.props.routeChange('login')
        }
       

    }


    alert1 = () => {
        return(
            <div className="shadow-5 ba center">
                <h5>Passwords don't match</h5>
            </div>
        )
    }

    alert2 = () => {
        return(
            <div className="shadow-5 ba center">
                <h5>Passwords no empty please</h5>
            </div>
        )
    }

    alert3 = () => {
        return(
            <div className="shadow-5 ba center">
                <h5>Email no empty please</h5>
            </div>
        )
    }

    alert4 = () => {
        return( 
            <div className="shadow-5 ba center">
                <h5>Valid email please</h5>
            </div>
        )
    }

    alert5 = () => {
        return( 
            <div className="shadow-5 ba center">
                <h5>What is your name ??</h5>
            </div>
        )
    }



    
    
    render () {
        const {alert} = this.state;
        return (
            <main className="pa4 black-80 shadow-5 w-25-l center ma4">

            {alert === 1 && <this.alert1 />}
            {alert === 2 && <this.alert2 />}
            {alert === 3 && <this.alert3 />}
            {alert === 4 && <this.alert4 />}
            {alert === 5 && <this.alert5 />}

            <form onSubmit= {this.handleSubmit} className="measure center">
                <fieldset id="register" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name"
                                onChange={this.handleNameChange}
                        />
                    </div>
                    
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
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
                <input 
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