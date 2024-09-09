import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import routesConfig from "./config.ts";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={routesConfig["advertisements"].path} replace/>}/>
                {Object.entries(routesConfig).map(([_, value], index) => (
                    <Route key={index} path={value.path} element={<value.element/>}></Route>
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;