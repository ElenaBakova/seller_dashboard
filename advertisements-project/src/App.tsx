import Navbar from "./components/Navbar/Navbar.tsx";

import './App.css'
import {createTheme, StyledEngineProvider, ThemeProvider} from '@mui/material/styles';

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";


const theme = createTheme({
    palette: {
        mode: 'light', primary: {
            main: '#292929',
        }, secondary: {
            main: '#00AAFF', contrastText: 'rgba(255,255,255,0.87)',
        },
    },
});

function App() {
    return (<>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/allAdvertisements" replace />} />
                        <Route path="/allAdvertisements" element={<div>Всё</div>}/>
                        <Route path="/orders" element={<div>Заказыы</div>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </StyledEngineProvider>
    </>)
}

export default App
