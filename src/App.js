import React, {Component} from 'react';
import Group from './Group';
import Results from './Results';
import './App.css';
import firebase from './firebase';

class App extends Component {
 constructor(){
   super();
   this.state = {
     afterSanta :[],
     currentGroup: [],

   }
 }

 submitGroup = (currentGroup) => {
   this.setState ({
     currentGroup
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
    // console.log(this.state.currentGroup);
    return (
      <div className="App">
       <div className="wrapper">
          <h1>Secret Santa!</h1>
          <div className="enterButton">
            <button>Enter North Pole</button>
          </div>
          <Group submitGroup={this.submitGroup}/>
          <Results currentGroup={this.state.currentGroup} />
        </div>
      </div>
    );
  }
}

export default App;
