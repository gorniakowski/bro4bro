import React from 'react';

class Navigation extends React.Component {
    

    render () {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={()=>this.props.routeChange('login')} className='f3 link dim light-blue underline pa3 pointer'>Sign in</p>
                    <p onClick={()=>this.props.routeChange('register')} className='f3 link dim light-blue underline pa3 pointer'>Register</p>
            </nav>
        )
    }

}

export default Navigation;
