import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {hot} from "react-hot-loader";
import {baseTheme, splashAnimation} from '../Core/baseTheme.js';

const RaisedButton = styled.button`
  position: relative;
  box-sizing: border-box;
  background-color: ${props => props.theme.controlSurfaceNormal};
  color: ${props => props.theme.controlAccentNormal};
  padding: ${props => props.theme.buttonPadding};
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
`;

const FlatButton = styled(RaisedButton)`
  background-color: transparent;
  border: none;
  box-shadow: none;
  
  :hover {
    background-color: ${props => props.danger ? props.theme.controlSurfaceDanger : props.theme.controlSurfaceHover};
    color: ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
  }

  :active {
    background-color: ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
    color: ${props => props.danger ? props.theme.controlSurfaceDanger : props.theme.controlSurfaceHover};
  }

  :disabled {
    background-color: transparent;
    color: ${props => props.theme.controlAccentDisabled};
  }
`;

RaisedButton.defaultProps = {
  theme: baseTheme
}

FlatButton.defaultProps = {
  theme: baseTheme
}

class Button extends Component {
  render() {
    if (this.props.flat) {
      return <FlatButton
        danger={this.props.danger}
        disabled={this.props.disabled}
        onClick={this.props.onClick}>
          <div className='button__splash'></div>
          {this.props.children}
      </FlatButton>;
    }
    else {
      return <RaisedButton
        danger={this.props.danger}
        disabled={this.props.disabled}
        onClick={this.props.onClick}>
          <div className='button__splash'></div>
          {this.props.children}
      </RaisedButton>;
    }
  }
}

export default hot(module)(Button);