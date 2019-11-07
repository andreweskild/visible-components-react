import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Button from './components/Button.js';
import Checkbox from "./components/Checkbox.js";
import Switch from "./components/Switch.js";

function test() {
    console.log('button');
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { checked: false };

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(state => ({ 
      checked: !state.checked 
    }));
  }
  
  render(){
    return(
      <div className="App">
          <Button danger disabled onClick={test}>Button</Button>
          <Checkbox disabled checked={this.state.checked} onClick={this.handleClick}></Checkbox>
          <Switch toggled={this.state.checked} onClick={this.handleClick}></Switch>
      </div>
    );
  }
}

export default hot(module)(App);
