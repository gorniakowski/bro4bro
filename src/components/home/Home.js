import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import './image.css'




class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            readyForBro: this.props.user.ready4bro,
            name: this.props.user.name,
            usersReady4Bro: this.props.usersReady4Bro,
            messageSent: false
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
        this.checkMessageSent();



    }


    checkMessageSent = () => {
        fetch('http://localhost:3000/messageSent?', {
            method: 'GET',
            credentials: 'include',
            headers: {'Content-Type':'application/json'}

        })
        .then(res =>{
            console.log(res)
            if (res.status === 200) {
                this.setState({messageSent: true})
            }else {
                this.setState({messageSent: false})
            }
        })
    }

    dragContainer = () => {
        const  { name } = this.state
        return (<DragDropContainer targetKey="browar" className="center pa5" >
        <div>{name}</div>
    </DragDropContainer>)
    }

    renderUsersReady4Bro = () =>{
        
        const filterArr = this.state.usersReady4Bro.filter(el =>{
            return el.name !== this.state.name
        })
        
        
        return (    
        <>
        {filterArr.map(user=>(
                <div key={user.name}>{user.name}</div>)
            )
        }    
        </>
        )
        
    }
    
    broReset = () => {
        fetch('http://localhost:3000/clockreset',{
          method: 'post',
          credentials: 'include',
          headers:  {'Content-Type': 'application/json'}
        })
        .then(res =>{
          if (res.status === 200){
            this.setState({usersReady4Bro: [], readyForBro:false});
            this.props.resetTimer()
          }else{
            alert('szomething łooong')
          }
        })
    
        
        
      }


    messageSentInfo = () => {
        return (

            <div className="f3 link dim ba ph3 pv2 mb2 dib grey shadow-5 ">
                Bro zostali powiadomieni.
            </div>

        )
    }

    componentDidMount = () => {
        this.checkMessageSent()
    }



    render() {
        const { name } = this.state
        return (
            <div>
                {this.state.messageSent && <this.messageSentInfo/>}
                {!this.state.readyForBro && <this.dragContainer/>}
                
                <DropTarget targetKey="browar" onHit={this.dropped}>
                    <div className="container pa4">
                        <div className="glass">
                            {this.state.readyForBro && <div>{name}</div>}
                            {<this.renderUsersReady4Bro/>}
                           

                        </div>
                        <div className="handle"></div>
                    </div>
                </DropTarget>
                
                <a className="f3 link dim ba ph3 pv2 mb2 dib black shadow-5 " 
                   href="#0"
                   onClick={this.broReset}
                   >
                    Browar się odbył !!
                </a>
            </div>


        )

    }
}

export default Home;