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
     visible: true

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
          {this.state.visible && <Enter />} 
        {/* <div className="enter">
          <h1>Secret Santa!</h1>
          <div className="enterButton">
            <button onClick={this.enterNorthPole}>Enter North Pole</button>
          </div>
         </div> */}
          {this.state.visible && <Group submitGroup={this.submitGroup} />}
          
          <Results currentGroup={this.state.currentGroup} />
        </div>
      </div>
    );
  }
}

export default App;
