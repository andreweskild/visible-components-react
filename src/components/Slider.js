import React, { Component } from 'react';
import ReactSlider from 'react-slider';
import styled, { ThemeProvider } from 'styled-components'
import {hot} from "react-hot-loader";
import {baseTheme, splashAnimation} from './Core/baseTheme.js';

// const StyledSlider = styled.div`
//   position: relative;
//   display: inline-block;
//   transition-property: background-color, color, box-shadow, border;
//   transition-duration: ${props => props.theme.transitionDuration};
//   transition-timing-function: ${props => props.theme.transitionCurve};
//   font-family: ${props => props.theme.fontFamily};

//   input {
//     appearance: none;
//     padding: 0;
//     margin: 0;
//     background-color: transparent;
//     outline: none;
//     -webkit-transition: .2s;
//     transition: opacity .2s;
//   }

//   input::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     appearance: none;
//     width: 16px;
//     height: 16px;
//     opacity: 0;
//   }

//   input::-moz-range-thumb {
//     width: 16px;
//     height: 16px;
//     opacity: 0;
//   }

//   .button__splash {
//     position: absolute;
//     left: -1px;
//     top: -1px;
//     width: 100%;
//     height: 100%;
//     border-radius: ${props => props.theme.splashBorderRadius};
//     box-sizing: content-box;
//     pointer-events: none;
//     z-index: -1;
//   }

//   :active:enabled .button__splash {
//     animation-name: ${splashAnimation};
//     animation-duration: ${props => props.theme.transitionDuration};
//     animation-fill-mode: forwards;
//     border: ${props => props.theme.borderWidth} solid ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
//   }

//   .background {
//     position: absolute;
//     box-sizing: border-box;
//     top: 37.5%;
//     width: 100%;
//     height: 25%;
//     border: 1px solid black;
//     border-radius: 8px;
//     z-index: -2;
//     background-color: ${props => props.theme.controlSurfaceDisabled};
//   }

//   #splash-box {
//     background-color: red;
//     width: 24px;
//     height: 24px;
//     left: this.props.value;
//   }
// `;


const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: ${props => props.theme.smallRoundControlHeight};

  
`;


const StyledThumb = styled.div`
    height: ${props => props.theme.smallRoundControlHeight};
    width: ${props => props.theme.smallRoundControlHeight};
    box-sizing: border-box;
    box-shadow: ${props => props.theme.shadow};
    border-radius: 50%;
    transition-property: background-color, color, box-shadow, border;
    transition-duration: ${props => props.theme.transitionDuration};
    transition-timing-function: ${props => props.theme.transitionCurve};
    background-color: white;
    border: ${props => props.theme.borderWidth} solid ${props => props.theme.controlAccentNormal};
    outline: none;

    ${StyledSlider}:hover & {
      background-color: ${props => props.theme.controlSurfaceHover};
      color: ${props => props.theme.controlAccentHover};
      border-color: ${props => props.theme.controlAccentHover};
    }
    ${StyledSlider}:active & {
      background-color: ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
      color: ${props => props.danger ? props.theme.controlSurfaceDanger : props.theme.controlSurfaceHover};
      border-color: ${props => props.danger ? props.theme.controlAccentDanger : props.theme.controlAccentHover};
      box-shadow: none;
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
    }

    ${StyledSlider}:active &>.button__splash {
      animation-name: ${splashAnimation};
      animation-duration: ${props => props.theme.transitionDuration};
      animation-fill-mode: forwards;
      border: ${props => props.theme.borderWidth} solid ${props => props.theme.controlAccentHover};
    }
`;

const Thumb = (props, state) => <StyledThumb {...props}><div className='button__splash'></div></StyledThumb>;

const StyledTrack = styled.div`
    box-sizing: border-box;
    background-color: ${props => props.theme.controlSurfaceDisabled};
    top: 36%;
    bottom: 36%;
    background: ${props => props.index === 2 ? '#f00' : props.index === 1 ? props.theme.controlSurfaceDisabled : props.theme.controlSurfaceNormal};
    border: ${props => props.theme.borderWidth} solid ${props => props.index === 2 ? '#f00' : props.index === 1 ? props.theme.controlAccentDisabled : props.theme.controlAccentNormal};
    border-radius: 999px;
    transition-property: background-color, color, box-shadow, border;
    transition-duration: ${props => props.theme.transitionDuration};
    transition-timing-function: ${props => props.theme.transitionCurve};

    ${StyledSlider}:hover & {
      background-color: ${props => props.index === 1 ? props.theme.controlSurfaceDisabled : props.theme.controlSurfaceHover};
      color: ${props => props.theme.controlAccentHover};
      border-color: ${props => props.index === 1 ? props.theme.controlAccentDisabled : props.theme.controlAccentHover};
    }
    ${StyledSlider}:active & {
      background-color: ${props => props.index === 1 ? props.theme.controlSurfaceDisabled : props.theme.controlAccentHover};
      color: ${props => props.danger ? props.theme.controlSurfaceDanger : props.theme.controlSurfaceHover};
      border-color: ${props => props.index === 1 ? props.theme.controlAccentDisabled : props.theme.controlAccentHover};
      box-shadow: none;
    }
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

StyledSlider.defaultProps = {
  theme: baseTheme
}

StyledThumb.defaultProps = {
  theme: baseTheme
}

StyledTrack.defaultProps = {
  theme: baseTheme
}

class Slider extends Component {
  render() {
    return <StyledSlider
      defaultValue={50}
      renderTrack={Track}
      renderThumb={Thumb}
    />
  }
}

export default hot(module)(Slider);