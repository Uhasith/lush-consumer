import { useRoutes } from "react-router-dom";
import { PrimaryLayout } from "src/layouts";
import {
  FarmersMarketPage,
  FarmerPage,
  LandingPage,
  SearchResultPage,
  ProductDetailsPage,
  CartPage,
  PaymentPage,
  PaymentSuccessPage,
} from "src/pages";

import Myorders from "../src/components/Myorders/Myorders"

const RouteLayout = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <PrimaryLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/search", element: <SearchResultPage /> },
        { path: "/farmers/:farmId", element: <FarmerPage /> },
        { path: "/farms/:farmId", element: <FarmersMarketPage /> },
        { path: "/products/:productId", element: <ProductDetailsPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/payment/:paymentMethod", element: <PaymentPage /> },
        { path: "/orderhistory", element: <Myorders/> },
        { path: "/success", element: <PaymentSuccessPage /> },
      ],
    },
  ]);

  return routes;
};
export default RouteLayout;
