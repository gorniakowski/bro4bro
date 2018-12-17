import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>This is home element</h1>
                <a class="f3 link dim ba ph3 pv2 mb2 dib black shadow-5" 
                   href="#0"
                   onClick={ this.props.clockReset}
                   >
                    Browar się odbył !!
                </a>
            </div>


        )

    }
}

export default Home;