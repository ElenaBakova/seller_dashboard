import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: 'light', primary: {
            main: '#292929',
        }, secondary: {
            main: '#00AAFF', contrastText: 'rgba(255,255,255,0.87)',
        },
    },
    components: {
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color: '#00AAFF',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                },
            },
        }
    }
});

export default theme;