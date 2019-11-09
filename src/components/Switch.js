import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {hot} from "react-hot-loader";
import {baseTheme, splashAnimation} from './Core/baseTheme.js';

const StyledSwitchBox = styled.button`
  height: ${props => props.theme.smallControlHeight};
  width: calc(${props => props.theme.smallControlHeight} * 1.5);
  user-select: none;
  position: relative;
  box-sizing: border-box;
  background-color: ${props => props.theme.controlSurfaceDisabled};
  color: ${props => props.theme.controlAccentDisabled};
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.controlAccentDisabled};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;
  transition-property: background-color, color, box-shadow, border;
  transition-duration: ${props => props.theme.transitionDuration};
  transition-timing-function: ${props => props.theme.transitionCurve};
  font-family: ${props => props.theme.fontFamily};
  padding: 0;

  :disabled {
    background-color: ${props => props.theme.controlSurfaceDisabled};
    color: ${props => props.theme.controlAccentDisabled};
    border-color: ${props => props.theme.controlAccentDisabled};
  }

  .switch__control {
    height: ${props => props.theme.smallControlHeight};
    width: ${props => props.theme.smallControlHeight};
    box-sizing: border-box;
    background-color: ${props => props.theme.controlSurfaceNormal};
    color: ${props => props.theme.controlAccentNormal};
    border: ${props => props.theme.borderWidth} solid ${props => props.theme.controlAccentNormal};
    border-radius: ${props => props.theme.borderRadius};
    position: absolute;
    transition-property: background-color, color, box-shadow, border, left;
    transition-duration: ${props => props.theme.transitionDuration};
    transition-timing-function: ${props => props.theme.transitionCurve};
    left: ${props => props.toggled ? 
      "calc(" + props.theme.smallControlHeight + "* .5 - 1px)" : 
      "-1px"};
    top: -1px;
    box-shadow: ${props => props.theme.shadow};
  }

  :hover .switch__control {
    background-color: ${props => props.theme.controlSurfaceHover};
    color: ${props => props.theme.controlAccentHover};
    border-color: ${props => props.theme.controlAccentHover};
  }

  :active .switch__control {
    background-color: ${props => props.theme.controlAccentHover};
    color: ${props => props.theme.controlSurfaceHover};
    border-color: ${props => props.theme.controlAccentHover};
    box-shadow: none;
  }

  :disabled .switch__control {
    background-color: ${props => props.theme.controlSurfaceDisabled};
    color: ${props => props.theme.controlAccentDisabled};
    border-color: ${props => props.theme.controlAccentDisabled};
    box-shadow: none;
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
  }

  :active:enabled .button__splash {
    animation-name: ${splashAnimation};
    animation-duration: ${props => props.theme.transitionDuration};
    animation-fill-mode: forwards;
    border: ${props => props.theme.borderWidth} solid ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
  }
  
  

  .material-icons {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

StyledSwitchBox.defaultProps = {
  theme: baseTheme
}


class Switch extends Component {
  render() {
    return <StyledSwitchBox
      toggled={this.props.toggled}
      onClick={this.props.onClick}
      disabled={this.props.disabled}>
      <div className="switch__control">
        <div className='button__splash'></div>
      </div>
    </StyledSwitchBox>;
  }
}

export default hot(module)(Switch);