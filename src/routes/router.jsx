import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AdminAddProduct from "../features/admin/AdminAddproduct";
import AdminProduct from "../pages/AdminProduct";
import AdminOrder from "../pages/AdminOrder";
import AdminConfirmSlip from "../features/admin/AdminConfirmSlip";
import AdminEditProduct from "../features/admin/AdminEditProduct.jsx";
import Container from "../layouts/Container";
import AdminProtectedRoute from "../features/auth/components/AdminProtectedRoute";
import Shop from "../pages/Shop";
import ShopItemDetail from "../pages/ShopItemDetail";
import Cart from "../pages/Cart";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Information from "../pages/Information";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/productdetail/:productId",
        element: <ShopItemDetail />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/information",
        element: (
          <ProtectedRoute>
            <Information />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/order",
        element: (
          <AdminProtectedRoute>
            <AdminOrder />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/admin/order/confirmSlip/:orderId",
        element: (
          <AdminProtectedRoute>
            <AdminConfirmSlip />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/admin/handleproduct",
        element: (
          <AdminProtectedRoute>
            <AdminAddProduct />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/admin/product",
        element: (
          <AdminProtectedRoute>
            <AdminProduct />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/admin/edit/:productId",
        element: <AdminEditProduct />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
