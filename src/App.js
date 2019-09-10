import React, {Component} from 'react';
import Group from './Group';
import Results from './Results';
import Enter from './Enter';
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

componentDidMount() {
  const dbRef = firebase.database().ref();

    dbRef.on('value', (data) => {
      const response = data.val()
      const groupType = [];
      console.log(response);

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
