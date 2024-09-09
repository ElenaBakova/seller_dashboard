import AllAdvertisementsPage from "../../pages/AllAdvertisementsPage/ui/AllAdvertisementsPage.tsx";
import AdvertisementPage from "../../pages/AdvertisementPage/ui/AdvertisementPage.tsx";
import OrdersPage from "../../pages/OrdersPage/OrdersPage.tsx";

const routesConfig = {
    "advertisements": {
        "path": "/advertisements",
        "element": AllAdvertisementsPage,
    },
    "advertisement": {
        "path": "/advertisements/:id",
        "element": AdvertisementPage,
    },
    "orders": {
        "path": "/orders",
        "element": OrdersPage,
    }
}

export default routesConfig;