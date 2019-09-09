import React, { Component } from 'react';


class Enter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible:true
         }
    }


    enterNorthPole = () => {
        this.setState({
            visible: false
        })
    }
    render() { 
        return ( 
            <div className="enter">
                <h1>Secret Santa!</h1>
                <div className="enterButton">
                    <button onClick={this.enterNorthPole}>Enter North Pole</button>
                </div>
            </div>
         );
    }
}
 
export default Enter;