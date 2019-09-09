import React, { Component } from 'react';


class Results extends Component {
    constructor() {
        super();
        this.state = {
            selectedSanta: '',
            // finalArray: this.props.beforeSanta,
        }
    }

    handleDropdown = (e) => {
        this.setState({
            selectedSanta:"",
        });

        console.log("selected santa" , this.state.selectedSanta);
        
    }

    revealSanta = (e) => {
        e.preventDefault();
    

        // const selectedGiver = this.state.selectedSanta;
        // console.log("this is the giver", selectedGiver);
        console.log("submitted reveal santa");

        // this.props.currentGroup({
        // beforeSantaGroupMembers.map((name) => {

        // })
        // })
    //    afterSanta.forEach((pair) => {
    //         if(pair[0] === selectedGiver){
    //             return(
    //                 <p>{selectedGiver} you have {pair[1]}!</p>
    //             );
                    
    //         }
    //     })
    }

    render() {
        return (
            <div className="resultsContain">
                {this.props.currentGroup.afterSanta && <div className="wrapper">
                    <h1>Time to Draw!</h1>
                    <p>Each Santa will select their own name and their partner will be revealed. <span>No peaking!</span></p>

                    <select onClick={this.handleDropdown} id="selectSanta">
                        <option value="Select Name">Select Name</option>
                        {this.props.currentGroup.beforeSantaGroupMembers && this.props.currentGroup.beforeSantaGroupMembers.map(name => {
                            return (<option value={this.state.selectedSanta}>
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
