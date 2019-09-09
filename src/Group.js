import React, { Component } from 'react';
import Swal from 'sweetalert2'
// import FontAwesomeIcon  from '@fortawesome/react-fontawesome';
// import faTimes  from '@fortawesome/free-solid-svg-icons';
import firebase from './firebase';

class Group extends Component {
    constructor() {
        super();
        this.state = {
            userGroupInput: '',
            groupMembers: [],
            userNameInput: '',
            visible:false
           
        }
    }

    // componentDidMount() {
    //     const dbRef = firebase.database().ref();
        
    //     dbRef.on('value', (data) => {
    //         const response = data.val()
    //         const newState = [];

    //         for(let key in response){
    //             newState.push({
    //                 person:response[key],
    //                 uniqueKey :key,
    //             });
    //         }

    //     });
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.name);
    }

    submitGroupName = (e) => {
        e.preventDefault();

        // if (!this.state.userGroupInput) {
        //     Swal.fire(
        //         'Type a Group Name!',
        //     )
           
        // }
    }

    submitNames = (e) => {
        e.preventDefault();
        const beforeSantaGroupMembers = [...this.state.groupMembers]

        beforeSantaGroupMembers.push(this.state.userNameInput);
        
        if (!this.state.userNameInput) {
            Swal.fire(
                'Type a Name!',
            )
            return('');
        }
        
        this.setState({
            groupMembers: beforeSantaGroupMembers,
            userNameInput:'',
        })
        
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        const beforeSantaGroupMembers = [...this.state.groupMembers]
        // console.log("this is before santa array", beforeSantaGroupMembers);

        const arrayShuffle = require('shuffle-array'),
            afterSanta = beforeSantaGroupMembers;

            arrayShuffle(afterSanta);

            // console.log("this is after santa", afterSanta);
        const dbRef = firebase.database().ref();
        
        dbRef.push({
            afterSanta,
            userGroupInput:this.state.userGroupInput,
            beforeSantaGroupMembers,
        })

        this.props.submitGroup({
            beforeSantaGroupMembers,
            afterSanta,
            userGroupInput: this.state.userGroupInput,
        })
        
        this.setState({
            userGroupInput:'',
            userNameInput:'',
        });
    
    }

    deleteName = (index) => {
        const copiedGroup = [...this.state.groupMembers];
     
        copiedGroup.splice(index, 1);

        this.setState({
           groupMembers: copiedGroup,
        });
    }

    render() {
        return (
            <div className="groupContain">
                <div className="wrapper">
                    <form action="">
                        <label htmlFor="userGroupInput">Enter your group name</label>
                        <input onChange={this.handleChange} type="text" name="userGroupInput" placeholder="enter group name" value={this.state.userGroupInput}/>
                        <label htmlFor="">Submit Group</label>
                        <button onClick={this.submitGroupName}type="submit" name="submitGroupName">Submit Group</button>
                        <div className="groupName">
                            <p>{this.state.userGroupInput}</p>
                        </div>

                        <h2>Add Santas</h2>
                        <p>Type the name of each group member and click <span>add name</span></p>
                        <label htmlFor="nameName">Enter a name</label>
                        <input onChange={this.handleChange} type="text" name="userNameInput" value={this.state.userNameInput} />

                        <button onClick={this.submitNames}>Add Name</button>

                        <div>
                            <button onClick={this.handleSubmit} className="submitNames"> Mix it up!</button>
                        </div>
                    </form>
                    <div className="namesContainer">
                        <ul>
                            {this.state.groupMembers.map( (member, i) => {
                                return( <li>
                                            {member}
                                        <label htmlFor="button" >delete name</label>
                                        <button onClick={() => { this.deleteName(i) }} name="button">
                                        {/* <FontAwesomeIcon icon={faTimes} /> */}
                                        </button>
                                        </li>)
                            } )}
                        </ul>
                     </div> 
                </div>
        </div>
            
        );
    }
}

export default Group;
