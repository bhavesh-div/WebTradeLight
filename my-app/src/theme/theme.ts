import { PaletteColorOptions, createTheme } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface PaletteOptions {
//     primaryLight: PaletteColorOptions;
//   }
// }

// declare module "@mui/material/AppBar" {
//   interface AppBarPropsColorOverrides {
//     primaryLight: true;
//   }
// }
declare module "@mui/material/styles" {
  interface TypographyVariants {
    bottomheadernav: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bottomheadernav?: React.CSSProperties;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bottomheadernav: true;
    h3: false;
  }
}

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "rgba(25, 27, 32, 1)",
      // dark: "#000",
      // light: "rgba(0, 0, 0, 0.6)",
      // contrastText: "#fff",
    },
    secondary: {
      main: "rgba(46, 48, 52, 1)",
      // dark: grey["500"],
      // contrastText: "rgba(0, 0, 0, 0.87)",
    },
    error: {
      // light: red[50],
      main: "rgba(237, 76, 92, 1)",
      // dark: red[700],
    },
    warning: {
      main: "rgba(231, 187, 65, 1)",
      // dark: "#C77700",
    },
    success: {
      // light: green[50],
      main: "#56B786",
      // dark: green[700],
    },
    info: {
      main: "rgba(0, 156, 214, 1)",
      // dark: blue[700],
      // light: blue[50],
    },
    background: {
      paper: "rgba(41, 43, 47, 1)",
      default: "rgba(41, 43, 47, 1)",
    },

    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(88, 94, 105, 1)",
      disabled: "rgba(255, 255, 255, 0.75)",
    },
  },

  typography: {
    fontFamily: "'Inter', DM Sans",
    h1: {
      fontWeight: "700",
      fontSize: "12px",
      lineHeight: "15px",
      color: "white",
    },
    h2: {
      fontFamily: "DM Sans",
      fontWeight: "400",
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "18px",
      color: "#fff",
      opacity: "0.5",
      textTransform: "uppercase",
      marginTop: "5px",
      letterSpacing: "0.055em",
    },
    h3: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "23px",
      color: "#56B786",
      letterSpacing: "-0.05em",
    },
    h4: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#BBBBBB",
    },
    h5: {
      fontFamily: "DM Sans",
      letterSpacing: "0.055em",
      textAlign: "justify",
    },
    h6: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "15px",
      lineHeight: "13px",
      paddingBottom: "4px",
      color: "#FFFFFF",
    },
    body1: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "23px",
      color: "#56B786",
      letterSpacing: "-0.05em",
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "12.1px",
      letterSpacing: "5.5%",
    },
    body3: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "17px",
      lineHeight: "21px",
      color: "#FFFFFF",
    },
  },

  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#979EB2",
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "21px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#191B20",
          border: "1px solid #3F4555",
          borderRadius: "2px",
          width: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: "rgba(245, 255, 250, 0.08)",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "rgba(177, 177, 177, 1)",
          padding: "0 4px",
          whiteSpace: "nowrap",
          minWidth: "auto",
          gap: "6px",
          "&:hover": {
            filter:
              "invert(62%) sepia(94%) saturate(288%) hue-rotate(6deg) brightness(98%) contrast(100%)",
            color: "text.warning",
          },
          "&.Mui-selected": {
            color: "rgba(231, 187, 65, 1)",
            filter:
              "invert(62%) sepia(94%) saturate(288%) hue-rotate(6deg) brightness(98%) contrast(100%)",
          },
          "& .css-g62626": {
            filter:
              "invert(58%) sepia(95%) saturate(16%) hue-rotate(164deg) brightness(96%) contrast(105%)",
          },
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

export default theme;
