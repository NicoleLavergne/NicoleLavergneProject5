import React, {Component} from 'react';
import Group from './Group';
// import Names from "./Names";
import Results from './Results';
import './App.css';
// import firebase from './firebase';

class App extends Component {
 

  render(){
    return (
      <div className="App">
       <div className="wrapper">
          <h1>Secret Santa!</h1>
          <div className="enterButton">
           <button>Enter North Pole</button>
          </div>
          <Group/>
          {/* <Names/> */}
          <Results/>
        </div>
      </div>
    );
  }
}

export default App;
