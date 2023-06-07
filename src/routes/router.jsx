import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AdminAddProduct from "../features/admin/AdminAddproduct";
import AdminProduct from "../pages/AdminProduct";
import AdminOrder from "../pages/AdminOrder";
import AdminUser from "../pages/AdminUser";
import AdminConfirmSlip from "../features/admin/AdminConfirmSlip";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/admin/order",
    element: <AdminOrder />,
  },
  {
    path: "/admin/order/confirmSlip/:orderId",
    element: <AdminConfirmSlip />,
  },
  {
    path: "/admin/handleproduct",
    element: <AdminAddProduct />,
  },
  {
    path: "/admin/product",
    element: <AdminProduct />,
  },
  {
    path: "/admin/user",
    element: <AdminUser />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
