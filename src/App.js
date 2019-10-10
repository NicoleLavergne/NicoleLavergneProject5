import React, {Component} from 'react';
import Group from './Components/Group';
import Results from './Components/Results';
import Enter from './Components/Enter';
import './App.css';
import firebase from './firebase';

class App extends Component {
 constructor(){
   super();
   this.state = {
     afterSanta :[],
     currentGroup: [],
     titleVisible:true,
     groupVisible:false,
   }
 }

// currentGroup is the name of the group that is being submitted and getting pushed to firebase 
 submitGroup = (currentGroup) => {
   this.setState ({
     currentGroup:currentGroup
   })
 }

  enterNorthPole = () => {
    this.setState({
      titleVisible: false,
      groupVisible: true,

    })
  }

  handleSubmit = () =>{
    this.setState({
      groupVisible: false,
    })
  }

  // groupType represents an array of all the groups in firebase
componentDidMount() {
  const dbRef = firebase.database().ref();

    dbRef.on('value', (data) => {
      const response = data.val()
      const groupType = [];

    for (let key in response) {
        groupType.push({
        group: response[key],
        uniqueKey: key,
      });
  }

    this.setState({
        afterSanta :groupType
    })
  });
}

  render(){
    return (
      <div className="App">
       <div className="wrapper">
          {this.state.titleVisible && <Enter enterNorthPole={this.enterNorthPole} />} 
          {this.state.groupVisible && <Group submitGroup={this.submitGroup} handleSubmit={this.handleSubmit}/>}
          <Results currentGroup={this.state.currentGroup} handleSubmit={this.handleSubmit}/>
        </div>

        <footer>
          <p>designed and developed by Nicole Lavergne</p>
        </footer>

      </div>
    );
  }
}

export default App;
