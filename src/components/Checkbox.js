import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {hot} from "react-hot-loader";
import {baseTheme, splashAnimation} from './Core/baseTheme.js';

const StyledCheckbox = styled.button`
  height: ${props => props.theme.smallControlHeight};
  width: ${props => props.theme.smallControlHeight};
  user-select: none;
  position: relative;
  box-sizing: border-box;
  background-color: ${props => props.theme.controlSurfaceNormal};
  color: ${props => props.theme.controlAccentNormal};
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.controlAccentNormal};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadow};
  outline: none;
  transition-property: background-color, color, box-shadow, border;
  transition-duration: ${props => props.theme.transitionDuration};
  transition-timing-function: ${props => props.theme.transitionCurve};
  font-family: ${props => props.theme.fontFamily};

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

  :after {
    content: "";
    position: absolute;
    opacity: ${props => props.checked ? '1.0' : '0.0'};
    box-sizing: border-box;
  }

  :after {
    transition-property: border-color, opacity;
    transition-duration: ${props => props.theme.transitionDuration};
    transition-timing-function: ${props => props.theme.transitionCurve};
    left: 35%;
    top: 12%;
    width: 30%;
    height: 60%;
    border: solid ${props => props.theme.controlAccentNormal};
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  :hover:after {
    border-color: ${props => props.theme.controlAccentHover}
  }
  
  :active:after {
    border-color: ${props => props.theme.controlAccentActive}
  }

  :disabled:after {
    border-color: ${props => props.theme.controlAccentDisabled};
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

StyledCheckbox.defaultProps = {
  theme: baseTheme
}


class Checkbox extends Component {
  render() {
    return <StyledCheckbox
      checked={this.props.checked}
      onClick={this.props.onClick}
      disabled={this.props.disabled}>
      <div className='button__splash'></div>
      <div className='checkmark'></div>
    </StyledCheckbox>;
  }
}

export default hot(module)(Checkbox);