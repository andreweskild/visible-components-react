import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {hot} from "react-hot-loader";
import {baseTheme, splashAnimation} from './Core/baseTheme.js';

const StyledRadioButton = styled.button`
  height: ${props => props.theme.smallRoundControlHeight};
  width: ${props => props.theme.smallRoundControlHeight};
  user-select: none;
  position: relative;
  box-sizing: border-box;
  background-color: ${props => props.theme.controlSurfaceNormal};
  color: ${props => props.theme.controlAccentNormal};
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.controlAccentNormal};
  border-radius: 50%;
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
    opacity: ${props => props.value == props.groupValue ? '1.0' : '0.0'};
    box-sizing: border-box;
  }

  :after {
    transition-property: background-color, opacity;
    transition-duration: ${props => props.theme.transitionDuration};
    transition-timing-function: ${props => props.theme.transitionCurve};
    left: 25%;
    top: 25%;
    width: 50%;
    height: 50%;
    background-color: ${props => props.theme.controlAccentNormal};
    border-radius: 50%;
  }

  :hover:after {
    background-color: ${props => props.theme.controlAccentHover}
  }
  
  :active:after {
    background-color: ${props => props.theme.controlAccentActive}
  }

  :disabled:after {
    background-color: ${props => props.theme.controlAccentDisabled};
  }

  .button__splash {
    position: absolute;
    left: -1px;
    top: -1px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
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

  .material-icons {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

StyledRadioButton.defaultProps = {
  theme: baseTheme
}


class RadioButton extends Component {
  render() {
    return <StyledRadioButton
      value={this.props.value}
      groupValue={this.props.groupValue}
      onClick={this.props.onChanged}
      disabled={this.props.disabled}>
      <div className='button__splash'></div>
    </StyledRadioButton>;
  }
}

export default hot(module)(RadioButton);