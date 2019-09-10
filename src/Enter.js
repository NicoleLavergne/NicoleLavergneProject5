import React, { Component } from 'react';

class Enter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible:false
         }
    }

    enterNorthPole = () => {
        this.setState({
            visible:true
        })
    }
    render() { 
        return ( 
            <div className="enter">
                <h1>Secret Santa!</h1>
                <div className="enterButtonContain">
                    <button className="enterButton"onClick={this.enterNorthPole}>Enter North Pole</button>
                </div>
            </div>
         );
    }
}
 
export default Enter;