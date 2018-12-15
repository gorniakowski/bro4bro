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

    renderTime() {
        const { hours, minutes, seconds } = this.state.currentInterval;
        return(
        <tr>
        <td>{hours}</td>
        <td>{minutes}</td>
        <td>{seconds}</td>
        </tr>
        )
    }

    render() { 
       
        const { hours, minutes, seconds } = this.state.currentInterval;
        return (
            <table className="f2 shadow-5 ba grow center">
                <thead>
                    <tr>
                        <td className="pa3">Godzin</td>
                        <td className="pa3">Minut</td>
                        <td className="pa3">Sekund</td>
                    </tr>
                </thead>
                
                
                <tbody>
                <tr>
                <td>{hours}</td>
                <td>{minutes}</td>
                <td>{seconds}</td>
                </tr>
                </tbody>
            </table>
         
    
  
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
    seconds = Math.round(seconds % 60);
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds

    }
    
}