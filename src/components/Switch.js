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

  :hover {
    background-color: ${props => props.danger ? props.theme.controlSurfaceDanger : props.theme.controlSurfaceHover};
    color: ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
    border-color: ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
  }

  :active {
    background-color: ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
    color: ${props => props.danger ? props.theme.controlSurfaceDanger : props.theme.controlSurfaceHover};
    border-color: ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
    box-shadow: none;
  }

  :disabled {
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
    z-index: -1;
  }

  :active .button__splash {
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

const StyledSwitchControl = styled.div`
  height: ${props => props.theme.smallControlHeight};
  width: ${props => props.theme.smallControlHeight};
  background-color: red;
`;

StyledSwitchBox.defaultProps = {
  theme: baseTheme
}

StyledSwitchControl.defaultProps = {
  theme: baseTheme
}


class Switch extends Component {
  render() {
    return <StyledSwitchBox
      toggled={this.props.toggled}
      onClick={this.props.onClick}
      disabled={this.props.disabled}>
      <div className='button__splash'></div>
      <StyledSwitchControl></StyledSwitchControl>
    </StyledSwitchBox>;
  }
}

export default hot(module)(Switch);