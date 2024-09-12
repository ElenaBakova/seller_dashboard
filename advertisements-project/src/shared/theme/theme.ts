import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#292929",
    },
    secondary: {
      main: "#00AAFF",
      contrastText: "rgba(255,255,255,0.87)",
    },
  },
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#00AAFF",
          position: "absolute",
          top: "50%",
          left: "50%",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-contained": {
            backgroundColor: "#00AAFF",
          },
          "&.MuiButton-outlined": {
            borderColor: "#00AAFF",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.searchIcon": {
            color: "#00AAFF",
          },
        },
      },
    },
  },
});

export default theme;
