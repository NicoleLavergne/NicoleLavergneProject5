// import React, { Component } from 'react';
// import firebase from './firebase'

// class Names extends Component {
//     constructor() {
//         super();
//         this.state = {
//             beforeNamesArray: [],
//             userNameInput: '',
//         }
//     }

//     componentDidMount(){
//         const dbRef = firebase.database().ref();

//         dbRef.on('value', (data) => {
//             const nameResponse = data.val()
//             const newNameState = [];

//             for(let key in nameResponse){
//                 newNameState.push({
//                     person:nameResponse[key],
//                     uniqueKey:key,
//                 })
//                 this.setState({
//                     beforeNamesArray: newNameState,
//                 })
//             }
//         })
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]:e.target.value
//         });
//         console.log(this.state.name);
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();

//         const dbRef = firebase.database().ref();
//         dbRef.push(this.state.userNameInput)

//         this.setState({
//             userNameInput:'',
//         });

//     }

//     removeName = (nameId) => {
//         const dbRef = firebase.database().ref();

//         dbRef.child(nameId).remove();
//     }
//     render() {
//         return (
//             <div className="nameContain">
//                 <div className="wrapper">
//                     <h1>Add Santas</h1>
//                     <p>Add the names of each Santa and hit enter:</p>
//                     <form action="submit">
//                         <label htmlFor="nameName">Enter a name</label>
//                         <input onChange={this.handleChange} type="text" name="userNameInput" value={this.state.userNameInput}/>
//                         <button onClick={this.handleSubmit}className="submitNames"> Mix it up!</button>
//                     </form>
//                          <div id="santaNames">
//                             <ul>
//                                 {this.state.beforeNamesArray.map(name => {
//                                     return(
//                                         <li>
//                                             <p>{name.person}</p>

//                                             <button onClick = {() => this.removeName(name.uniqueKey)}>Remove Name</button>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                          </div>  
//                 </div>
//             </div>
//         );
//     }
// }

// export default Names;