import React, { Component } from 'react';


class Results extends Component {
    constructor() {
        super();
        this.state = {
            selectedSanta: '',
        }
    }

    handleDropdown = (e) => {
        this.setState({
            selectedSanta:e.target.value
        });
        
    }

    revealSanta = (e) => {
        e.preventDefault();
        
        const selectedGiver = this.state.selectedSanta
        console.log("this is the giver", selectedGiver);
        console.log("submitted reveal santa");
    }

    render() {
        return (
            <div className="resultsContain">
                <div className="wrapper">
                    <h1>Time to Draw!</h1>
                    <p>Each Santa will select their own name and their partner will be revealed. <span>No peaking!</span></p>
                    <select onChange={this.handleDropdown} id="selectSanta">
                        <option value={this.state.selectedSanta}name="selectedSanta" >Santa Name</option>
                    </select>
                    <button onClick={this.revealSanta} className="revealSubmit">Reveal Results</button>
                </div>
                <div className="giftResults">
                    {/* {answer goes here} */}
                </div>  
            </div>
        );
    }
}

export default Results;
