import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import './image.css'




class Home extends React.Component {
    
    constructor() {
        super();
        this.state = {
            readyForBro: false
        }
    }

    dropped = (e) => {
        this.setState({readyForBro: true});
        e.containerElem.style.visibility = 'hidden';
        console.log ('Wysyłam na serwer chęć browara bzz bzz bzz'); //to chyba trzeba będzie zaimlementować.



    }


    render() {
        return (
            <div>

                <DragDropContainer targetKey="browar" className="center pa5" >
                    <div>MOrda</div>
                </DragDropContainer>
                
                <DropTarget targetKey="browar" onHit={this.dropped}>
                    <div className="container pa4">
                        <div className="glass">
                            {this.state.readyForBro && <div>MOrda</div>}

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