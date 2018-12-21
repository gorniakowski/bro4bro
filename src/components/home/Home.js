import React from 'react';
import Draggable from 'react-draggable';


class Home extends React.Component {


    render() {
        return (
            <div>
                   <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 100 , y: 200}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
                <div className="h5 yellow ba  fl w-100 pa2 mw5"></div>
                <a class="f3 link dim ba ph3 pv2 mb2 dib black shadow-5 " 
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