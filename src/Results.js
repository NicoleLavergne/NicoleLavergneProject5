import React, { Component } from 'react';


class Results extends Component {
    constructor() {
        super();
        this.state = {
            selectedSanta: '',
            santaResults:'',
        }
    }

    handleDropdown = (e) => {

        const selectedSanta = e.target.value;

        this.setState({
            selectedSanta
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
       
       {this.state.santaResults}  () => {

           return(
                   <p>
                       {giver} you have {receiverSanta}!
       
                   </p>
               )
        
       
       } 
        
    };

       

       
    render() {
        return (
            <div className="resultsContain">
                {this.props.currentGroup.afterSanta && <div className="wrapper">
                    <h1>Time to Draw!</h1>
                    <p>Each Santa will select their own name and their partner will be revealed. <span>No peaking!</span></p>

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
                <div className="giftResults">
                    {/* {answer goes here} */}
                </div>  
            </div>
        );
    }
}

export default Results;
