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
            groupEntered:false,
            visible:false
        }
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
    
        const arrayShuffle = require('shuffle-array'),
            afterSanta = beforeSantaGroupMembers;

            arrayShuffle(afterSanta);

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
            visible:false
        });
    
    }

    // showGroup = () => {
    //     this.setState({
    //         visible:true

    //     })
    // }

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
                        <label htmlFor="userGroupInput" className="groupLabel">Enter your group name: </label>
                        <input onChange={this.handleChange} type="text" name="userGroupInput" placeholder="group name" value={this.state.userGroupInput} className="groupInput"/>

                        {/* <button  type="submit" name="submitGroupName">Submit Group</button> */}

                        <div className="groupNameContain">
                            <p className="groupName" placeholder="name">{this.state.userGroupInput}</p>
                        </div>


                        <div className="nameContain">
                            <label htmlFor="userNameInput" className="nameLabel">Type the name of each group member and <span>add name</span></label>
                            <input onChange={this.handleChange} type="text" name="userNameInput" value={this.state.userNameInput} className="nameInputArea"/>

                            <button onClick={this.submitNames} className="nameButton">Add Name</button>
                            <p>Make sure to check your list twice before submitting</p>

                        </div>

                        <div className="mix">
                            <button onClick={this.handleSubmit} className="submitNames"> Send to Santa!</button>
                        </div>
                    </form>

                    <div className="nameList">
                        <ul>
                            {this.state.groupMembers.map( (member, i) => {
                                return( <li>
                                            {member}
                                        {/* <label htmlFor="button" >delete name</label> */}
                                        <button onClick={() => { this.deleteName(i) }} name="button">
                                        remove
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
