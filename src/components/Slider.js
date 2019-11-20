import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {hot} from "react-hot-loader";
import {baseTheme, splashAnimation} from './Core/baseTheme.js';

const StyledSlider = styled.div`
  position: relative;
  display: inline-block;
  transition-property: background-color, color, box-shadow, border;
  transition-duration: ${props => props.theme.transitionDuration};
  transition-timing-function: ${props => props.theme.transitionCurve};
  font-family: ${props => props.theme.fontFamily};

  input {
    appearance: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    opacity: 0;
  }

  input::-moz-range-thumb {
    width: 16px;
    height: 16px;
    opacity: 0;
  }

  .button__splash {
    position: absolute;
    left: -1px;
    top: -1px;
    width: 100%;
    height: 100%;
    border-radius: ${props => props.theme.splashBorderRadius};
    box-sizing: content-box;
    pointer-events: none;
    z-index: -1;
  }

  :active:enabled .button__splash {
    animation-name: ${splashAnimation};
    animation-duration: ${props => props.theme.transitionDuration};
    animation-fill-mode: forwards;
    border: ${props => props.theme.borderWidth} solid ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
  }

  .background {
    position: absolute;
    box-sizing: border-box;
    top: 37.5%;
    width: 100%;
    height: 25%;
    border: 1px solid black;
    border-radius: 8px;
    z-index: -2;
    background-color: ${props => props.theme.controlSurfaceDisabled};
  }
`;

StyledSlider.defaultProps = {
  theme: baseTheme
}

class Slider extends Component {
  render() {
    return <StyledSlider
      disabled={this.props.disabled}
      onClick={this.props.onClick}>
        <div class='background'></div>
        <input type='range'></input>
    </StyledSlider>;
  }
}

export default hot(module)(Slider);