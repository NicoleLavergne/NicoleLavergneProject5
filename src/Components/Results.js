import React, { Component } from 'react';


class Results extends Component {
    constructor() {
        super();
        this.state = {
            selectedSanta: '',
            santaResults:'',
            reciever:'',
        }

    }

    handleDropdown = (e) => {

        const selectedSanta = e.target.value;

        this.setState({
            selectedSanta: selectedSanta,
        })
    }

    revealSanta = (e) => {

        e.preventDefault();
    
        const selectedGroupArray = this.props.currentGroup.afterSanta
        const giver = this.state.selectedSanta
        const giverIndex = (selectedGroupArray.indexOf(giver));
        let nextIndex = 0;
    
        if (giverIndex === selectedGroupArray.length - 1){
            nextIndex = 0;
        }
        else{
            nextIndex = giverIndex + 1;
        }

        const receiverSanta = selectedGroupArray[nextIndex];

        this.setState({
            receiver: receiverSanta,
            resultsShowing:true,
        })
        
    };

    newSanta =() => {
        this.setState({
            resultsShowing:false
        })
    }
       
    render() {
        return (
            <div className="resultsContain">
                {this.props.currentGroup.afterSanta &&
                    <div>
                        <h1 className="resultHeading">Time to Draw!</h1>
                        <p className="noPeeking">Each Santa will select their own name and their results will be revealed. <span>No peeking!</span></p>

                        <select onChange={this.handleDropdown} id="selectSanta">
                            <option value="Select Name">Select Name</option>
                            {this.props.currentGroup.beforeSantaGroupMembers && this.props.currentGroup.beforeSantaGroupMembers.map(name => {
                                return (<option value={name}>
                                    {name}
                                </option>)
                            })}
                        </select>
            
                        <button onClick={this.revealSanta} className="revealSubmit">Reveal Results</button>
                    </div>} 

                    {this.state.resultsShowing && <div className="giftResults">
                        <div className="resultPContain">
                            <p className="resultPar">{this.state.selectedSanta} you have <span>{this.state.receiver}</span></p>
                        </div>
                        <button onClick={this.newSanta} className="newSanta">next santa</button> 
                    </div>  }
                </div>
        );
    }
}

export default Results;
