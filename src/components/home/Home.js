import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';




class Home extends React.Component {
    
    constructor() {
        super();
        this.state = {
            readyForBro: false
        }
    }

    dropped = (e) => {
        this.setState({readyForBro: true})
        e.containerElem.style.visibility = 'hidden';



    }


    render() {
        return (
            <div>

                <DragDropContainer targetKey="browar" >
                    <div>MOrda</div>
                </DragDropContainer>
                
                <DropTarget targetKey="browar" onHit={this.dropped}>
                    <div className="h5 yellow ba  fl w-100 pa2 mw5">
                        {this.state.readyForBro && <div>MOrda</div>}

                    </div>
                </DropTarget>
                
                <a class="f3 link dim ba ph3 pv2 mb2 dib black shadow-5 " 
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