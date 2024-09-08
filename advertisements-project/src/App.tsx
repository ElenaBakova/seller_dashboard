import Navbar from "./widgets/Navbar/Navbar.tsx";

import './App.css'
import {StyledEngineProvider, ThemeProvider} from '@mui/material/styles';
import AppRoutes from "./app/routes/AppRoutes.tsx";
import theme from "./shared/ui/theme/theme.ts";


function App() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <Navbar/>
                    <AppRoutes/>
                </ThemeProvider>
            </StyledEngineProvider>
        </>
    )
}

export default App
