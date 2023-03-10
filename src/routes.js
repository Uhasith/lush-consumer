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
} from "src/pages";

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
      ],
    },
  ]);

  return routes;
};
export default RouteLayout;