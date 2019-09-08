import React, { Component } from 'react';
import Results from "./Results";
import firebase from './firebase';

class Group extends Component {
    constructor() {
        super();
        this.state = {
            userGroupInput: '',
            groupMembers: [],
            userNameInput: '',
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        
        dbRef.on('value', (data) => {
            const response = data.val()
            const newState = [];

            for(let key in response){
                newState.push({
                    person:response[key],
                    uniqueKey :key,
                });
            }

        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.name);
    }

    submitNames = (e) => {
        e.preventDefault();
        const beforeSantaGroupMembers = [...this.state.groupMembers]

        beforeSantaGroupMembers.push(this.state.userNameInput);

        
        this.setState({
            groupMembers: beforeSantaGroupMembers,
            userNameInput:'',
        })
    
        
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        const beforeSantaGroupMembers = [...this.state.groupMembers]
        console.log("this is before santa array", beforeSantaGroupMembers);

        const arrayShuffle = require('shuffle-array'),
            afterSanta = beforeSantaGroupMembers;

            arrayShuffle(afterSanta);

            console.log("this is after santa", afterSanta);
        

        const dbRef = firebase.database().ref();
        
        dbRef.push({
            afterSanta,
            userGroupInput:this.state.userGroupInput,
            // userNameInput:this.state.userNameInput
        })
        
        this.setState({
            userGroupInput:'',
            userNameInput:'',
        });

        const selectSanta = document.getElementById("selectSanta"),
            nameOptionMenu = beforeSantaGroupMembers;
        for (let i = 0; i < nameOptionMenu.length; i++) {
            let opt = nameOptionMenu[i];
            let el = document.createElement("option")
            el.textContent = opt;
            el.value = opt;
            selectSanta.append(el);
        };

        
        
    }


    render() {
        return (
            <div className="groupContain">
                <div className="wrapper">
                    <h1>Select group or create new group</h1>
                    <select id="select">
                        <option value="">Group</option>
                    </select>
                    <form action="">
                        <label htmlFor="userGroupInput">Enter your group name</label>
                        <input onChange={this.handleChange} type="text" name="userGroupInput" placeholder="enter group name" value={this.state.userGroupInput}/>

                        <h1>Add Santas</h1>
                        <p>Add the names of each Santa and hit enter:</p>
                        <label htmlFor="nameName">Enter a name</label>
                        <input onChange={this.handleChange} type="text" name="userNameInput" value={this.state.userNameInput} />

                        <button onClick={this.submitNames}>Add Name</button>

                        <div>
                            <button onClick={this.handleSubmit} className="submitNames"> Mix it up!</button>
                        </div>
                    </form>
                    <div>
                        <div>
                            {this.state.userGroupInput}
                        </div>
                        <ul>
                            {this.state.groupMembers.map( member => {
                                return( <li>
                                            {member}
                                        </li>)
                            } )}
                        </ul>
                     </div> 

                </div>
            
                <div>
                    <Results/>
                </div>   
        </div>
            
        );
    }
}

export default Group;
