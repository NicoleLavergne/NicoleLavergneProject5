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
     visible:true
   }
 }


 submitGroup = (currentGroup) => {
   this.setState ({
     currentGroup:currentGroup
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
          {this.state.visible && <Enter/>} 
          {this.state.visible && <Group submitGroup={this.submitGroup} />}
          
          <Results currentGroup={this.state.currentGroup} />
        </div>
        {/* <footer>
          <p>designed and developed by Nicole Lavergne</p>
        </footer> */}
      </div>
    );
  }
}

export default App;
