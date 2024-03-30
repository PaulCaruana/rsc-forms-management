"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const standardFontFamily = [`NotoSansRegular`, `sans-serif`].join(`,`);

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 16,
  },
  components: {
    // Normalize typography - separate styles from semantic
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
  },
});

export default theme;
