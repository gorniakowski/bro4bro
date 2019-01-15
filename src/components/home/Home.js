import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import './image.css'




class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            readyForBro: this.props.user.readyForBro,
            name: this.props.user.name
        }
    }

    dropped = (e) => {
        this.setState({readyForBro: true});
        e.containerElem.style.visibility = 'hidden';
        fetch('http://localhost:3000/ready4bro',{
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                readyForBro: this.state.readyForBro
            })
        }) 
        .then(result => {
           if(result.status !== 200) {
               alert('SZOTING ŁONG')
               this.setState({readyForBro: false})
           }
        })



    }

    dragContainer = () => {
        const  { name } = this.state
        return (<DragDropContainer targetKey="browar" className="center pa5" >
        <div>{name}</div>
    </DragDropContainer>)
    }


    render() {
        const { name } = this.state
        return (
            <div>

               {!this.state.readyForBro && <this.dragContainer/>}
                
                <DropTarget targetKey="browar" onHit={this.dropped}>
                    <div className="container pa4">
                        <div className="glass">
                            {this.state.readyForBro && <div>{name}</div>}

                        </div>
                        <div className="handle"></div>
                    </div>
                </DropTarget>
                
                <a className="f3 link dim ba ph3 pv2 mb2 dib black shadow-5 " 
                   href="#0"
                   onClick={this.props.clockReset}
                   >
                    Browar się odbył !!
                </a>
            </div>


        )

    }
}

export default Home;