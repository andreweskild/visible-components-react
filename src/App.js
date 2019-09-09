import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Button from './components/Button/Button.js';

function test() {
    console.log('butt');
}

class App extends Component{
  render(){
    return(
      <div className="App">
          <Button onClick={test}>Button</Button>
      </div>
    );
  }
}

export default hot(module)(App);
