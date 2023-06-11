import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="bg-[#59FFC3]  w-[10vw] flex flex-col gap-5 items-center border-solid border-2 border-r-0 border-black mt-5 h-max-content">
      <div className="flex flex-col gap-5 mt-10">
        <Link
          to="/admin/order"
          className={`${
            location.pathname === "/admin/order" ||
            location.pathname.includes("/admin/order/confirmSlip/")
              ? "text-red-500"
              : ""
          }`}
        >
          Orders
        </Link>
        <Link
          to="/admin/product"
          className={`${
            location.pathname === "/admin/product" ||
            location.pathname === "/admin/handleproduct"
              ? "text-red-500"
              : ""
          }`}
        >
          Products
        </Link>
        {/* <Link
          to="/admin/user"
          className={`${
            location.pathname === "/admin/user" ? "text-red-500" : ""
          }`}
        >
          Users
        </Link> */}
      </div>
    </div>
  );
}
