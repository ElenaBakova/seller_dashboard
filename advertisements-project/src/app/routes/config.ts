import AllAdvertisementsPage from "../../pages/AllAdvertisementsPage/ui/AllAdvertisementsPage.tsx";
import AdvertisementPage from "../../pages/AdvertisementPage/ui/AdvertisementPage.tsx";
import OrdersPage from "../../pages/OrdersPage/ui/OrdersPage.tsx";
import AdvertisementEditPage from "../../pages/AdvertisementPage/ui/AdvertisementEditPage.tsx";

const routesConfig = {
  advertisements: {
    path: "/advertisements",
    element: AllAdvertisementsPage,
  },
  advertisement: {
    path: "/advertisements/:id",
    element: AdvertisementPage,
  },
  editAdvertisement: {
    path: "/advertisements/edit/:id",
    element: AdvertisementEditPage,
  },
  orders: {
    path: "/orders",
    element: OrdersPage,
  },
};

export default routesConfig;
