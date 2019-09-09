import React, { Component } from 'react';


class Results extends Component {
    constructor() {
        super();
        this.state = {
            selectedSanta: '',
            santaResults:'',
            reciever:'',
            visible:'',
            resultsShowing:false
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
        console.log(selectedGroupArray);
        const giver = this.state.selectedSanta
        
        const giverIndex = (selectedGroupArray.indexOf(giver));
        console.log(giverIndex);
        let nextIndex = 0;
    

        if (giverIndex === selectedGroupArray.length - 1){
            nextIndex = 0;
        }
        else{
            nextIndex = giverIndex + 1;
        }

        console.log("this is the next index", nextIndex);

        const receiverSanta = selectedGroupArray[nextIndex];

        console.log(giver, "you have ", receiverSanta);
        console.log('danii wrote this', this.state.selectedSanta);
        console.log('danii also wrote this', receiverSanta);
        this.setState({
            receiver: receiverSanta,
            resultsShowing:true
        })
        
    };

    newSanta=()=>{
        this.setState({
            resultsShowing:false
        })
    }
       

       
    render() {
        return (
            <div className="resultsContain">
                {this.props.currentGroup.afterSanta && <div className="wrapper">
                    <h1>Time to Draw!</h1>
                    <p>Each Santa will select their own name and their partner will be revealed. <span>No peeking!</span></p>

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
                    <p>{this.state.selectedSanta} your secret santa is {this.state.receiver}</p>
                    <button onClick={this.newSanta}>choose new santa</button>
                    </div>  }

            </div>
        );
    }
}

export default Results;
