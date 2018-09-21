import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

class App extends Component {
//   //this does not show up on the screen
//   constructor(props) {
//     super(props);
//     this.state ={value:100}
//     this.inc =this.inc.bind(this)
//     this.dec =this.dec.bind(this)
//   }
// // functions do not go inside the render method!
// inc(){
//   this.setState((state) =>{
//    return { value: state.value + 1}
//   });

// }

// dec(){
//   this.setState( (state) => {
//     return { value: state.value - 1}
//   });
// }

//everything below here has so far showed up on the screen
// you never want to mutate state, so you add handlers!
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Practice</h1>
        </header>
        <div>
        <Counter name= "red"/>
        <Counter name= "purple"/>
        <Counter name= "green"/>
        <Counter name= "black"/>
        <Counter name= "yellow"/>
        <Counter name= "blue"/>
      </div>
      </div>
    );
  }
}

export default App;
