import React, { Component } from 'react';
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
            // this.setState({
            //     beforeNamesArray: newState,
            // })
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
        const updatedGroupMembers = [...this.state.groupMembers]

        updatedGroupMembers.push(this.state.userNameInput);
        this.setState({
            groupMembers: updatedGroupMembers,
            userNameInput:'',
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const dbRef = firebase.database().ref();

        dbRef.push({
            userGroupInput:this.state.userGroupInput,
            userNameInput:this.state.userNameInput
        })
        
        this.setState({
            userGroupInput:'',
            userNameInput:'',
        });
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
                            {this.state.userGroupInput}
                            <ul>
                                {this.state.groupMembers.map( member => {
                                   return(<li>{member}</li>)
                                } )}
                            </ul>
                     </div> 
                </div>
            </div>
        );
    }
}

export default Group;
