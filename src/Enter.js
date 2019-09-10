import React, { Component } from 'react';

class Enter extends Component {
  
   
    render() { 
        return ( 
            <div className="enter">
                <h1 className="enterHeading">Secret Santa!</h1>
                <div className="enterButtonContain">
                    <button className="enterButton"onClick={this.props.enterNorthPole}>Enter North Pole</button>
                </div>
            </div>
         );
    }
}
 
export default Enter;