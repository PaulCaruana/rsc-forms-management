"use client";
import { Components, createTheme, PaletteOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const lightPalette = {
  common: {
    black: "#000",
    white: "#fff",
  },
  type: "light",
  primary: {
    main: "#9c27b0",
    light: "#ab47bc",
    dark: "#8e24aa",
    contrastText: "#fff",
  },
  secondary: {
    main: "#e91e63",
    light: "#ec407a",
    dark: "#d81b60",
    contrastText: "#fff",
  },
  error: {
    main: "#f44336",
    light: "#ef5350",
    dark: "#e53935",
    contrastText: "#fff",
  },
  warning: {
    main: "#ff9800",
    light: "#ffa726",
    dark: "#fb8c00",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  info: {
    main: "#00acc1",
    light: "#26c6da",
    dark: "#00acc1",
    contrastText: "#fff",
  },
  success: {
    main: "#4caf50",
    light: "#66bb6a",
    dark: "#43a047",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  grey: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#fff",
    default: "#fafafa",
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
} as PaletteOptions;

const typography = {
  h1: {
    fontSize: "3em",
    fontWeight: 600,
    letterSpacing: "0.25px",
    lineHeight: 1,
  },
  h2: {
    fontSize: "2em",
    fontWeight: 600,
    letterSpacing: "0.15px",
    lineHeight: 1,
  },
  h3: {
    fontSize: "1.5em",
    fontWeight: 500,
    letterSpacing: "0.15px",
    lineHeight: 1,
  },
  h4: {
    fontSize: "1.25em",
    letterSpacing: "0.15px",
    fontWeight: 500,
    lineHeight: 1,
  },
  h5: {
    fontSize: "1em",
    fontWeight: 600,
    letterSpacing: "0.15px",
    lineHeight: 1,
  },
  h6: {
    fontSize: "0.85em",
    fontWeight: 600,
    letterSpacing: "0.15px",
    lineHeight: 1,
  },
  subtitle1: {
    fontSize: "1.5em",
    fontWeight: 400,
    letterSpacing: "0.15px",
    lineHeight: 1,
  },
  subtitle2: {
    fontSize: "0.7em",
    fontWeight: 400,
    lineHeight: 1,
  },
  body1: {
    fontSize: "1em",
    fontWeight: 400,
    lineHeight: 1,
  },
  body2: {
    fontSize: "1em",
    fontWeight: 400,
    letterSpacing: "-0.1px",
    lineHeight: 1,
  },
  button: {
    fontSize: "1em",
    fontWeight: 600,
  },
  overline: {
    fontWeight: 600,
    textTransform: "uppercase",
  },
} as TypographyOptions;

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      h1: {
        fontSize: "3em",
        fontWeight: 600,
        letterSpacing: "0.25px",
        lineHeight: 1,
      },
      h2: {
        fontSize: "2em",
        fontWeight: 600,
        letterSpacing: "0.15px",
        lineHeight: 1,
      },
      h3: {
        fontSize: "1.5em",
        fontWeight: 500,
        letterSpacing: "0.15px",
        lineHeight: 1,
      },
      h4: {
        fontSize: "1.25em",
        letterSpacing: "0.15px",
        fontWeight: 500,
        lineHeight: 1,
      },
      h5: {
        fontSize: "1em",
        fontWeight: 600,
        letterSpacing: "0.15px",
        lineHeight: 1,
      },
      h6: {
        fontSize: "0.85em",
        fontWeight: 600,
        letterSpacing: "0.15px",
        lineHeight: 1,
      },
      subtitle1: {
        fontSize: "1.5em",
        fontWeight: 400,
        letterSpacing: "0.15px",
        lineHeight: 1,
      },
      subtitle2: {
        fontSize: "0.7em",
        fontWeight: 400,
        lineHeight: 1,
      },
      body1: {
        fontSize: "1em",
        fontWeight: 400,
        lineHeight: 1,
      },
      body2: {
        fontSize: "1em",
        fontWeight: 400,
        letterSpacing: "-0.1px",
        lineHeight: 1,
      },
      button: {
        fontSize: "1em",
        fontWeight: 600,
      },
      overline: {
        fontWeight: 600,
        textTransform: "uppercase",
      },
    },
  },
} as Components;

export const lightTheme = createTheme({
  palette: lightPalette,
  typography,
  components,
});
