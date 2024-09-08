import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AdvertisementPage from "../../pages/AdvertisementPage/ui/AdvertisementPage.tsx";
import AllAdvertisementsPage from "../../pages/AllAdvertisementsPage/ui/AllAdvertisementsPage.tsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ADTEST" element={<AdvertisementPage></AdvertisementPage>}/>
                <Route path="/" element={<Navigate to="/allAdvertisements" replace/>}/>
                <Route path="/allAdvertisements" element={<AllAdvertisementsPage></AllAdvertisementsPage>}/>
                <Route path="/orders" element={<div>Заказы</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;