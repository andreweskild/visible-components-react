import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Button from './components/Button.js';
import Checkbox from "./components/Checkbox.js";
import Switch from "./components/Switch.js";
import RadioButton from "./components/RadioButton.js";
import Slider from "./components/Slider.js";

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
          <Button onClick={test}>Button</Button>
          <Checkbox checked={this.state.checked} onClick={this.handleClick}></Checkbox>
          <RadioButton value={this.state.checked} groupValue={false} onChanged={this.handleClick}></RadioButton>
          <Switch disabled toggled={this.state.checked} onClick={this.handleClick}></Switch>
          <Slider></Slider>
      </div>
    );
  }
}

export default hot(module)(App);
