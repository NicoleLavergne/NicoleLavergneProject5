import React, { Component } from 'react';

class Results extends Component {
    render() {
        return (
            <div className="resultsContain">
                <div className="wrapper">
                    <h1>Time to Draw!</h1>
                    <p>Each Santa will select their own name and their partner will be revealed. <span>No peaking!</span></p>
                    <select id="selectSanta">
                        <option value="">Santa Name</option>
                    </select>
                    <button className="revealSubmit">Reveal Results</button>
                </div>
            </div>
        );
    }
}

export default Results;
