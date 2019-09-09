import styled, { keyframes } from 'styled-components'

export const baseTheme = {
    controlSurfaceNormal: "white",
    controlAccentNormal: "#636363",
    controlSurfaceHover: "#F5FFF2",
    controlAccentHover: "#42AC1C",
    controlSurfaceActive: "#42AC1C",
    controlAccentActive: "#F5FFF2",
    controlSurfaceDisabled: "#E0E0E0",
    controlAccentDisabled: "#CBCBCB",
    controlSurfaceDanger: "#FFF1EF",
    controlAccentDanger: "#F22A0F",
    shadow: "0 8px 8px -6px rgba(0, 0, 0, 0.2)",
    borderWidth: "1px",
    borderRadius: "5px",
    splashBorderRadius: "6px",
    transitionDuration: "0.2s",
    transitionCurve: "ease",
    buttonPadding: "0.45em 1.45em",
    fontFamily: "'IBM Plex Sans', sans-serif",
};

export const splashAnimation = keyframes`
    0% {padding: 0px; margin: 0px;}
    50%  {opacity: 1.0;}
    100% {opacity: 0.0; padding: 6px; margin: -6px;}
`;