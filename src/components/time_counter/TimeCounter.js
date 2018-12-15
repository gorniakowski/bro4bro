import React from 'react';

class TimeCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            lastMeeting: this.props.params,
            
            currentInterval: {
                hours: 0,
                minutes: 0,
                seconds: 0
            }

        }
        
    }

    calcTimeLastMeeting = () => {
        const currentDate = new Date();
        const timespan = currentDate - this.state.lastMeeting
        return msToHMS(timespan);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
                this.setState({
                    currentInterval: {
                        hours: this.calcTimeLastMeeting().hours,
                        minutes: this.calcTimeLastMeeting().minutes,
                        seconds: this.calcTimeLastMeeting().seconds
                        }
                    }
                )
                },1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>{this.state.currentInterval.hours}:{this.state.currentInterval.minutes}:{this.state.currentInterval.seconds}</h1>
            </div>
        )
    }
}


export default TimeCounter;


function msToHMS( ms ) {
    // 1- Convert to seconds:
    var seconds = ms / 1000;
    // 2- Extract hours:
    var hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    var minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds

    }
    
}