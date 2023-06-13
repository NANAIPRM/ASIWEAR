import AdminSidebar from "../layouts/AdminSidebar";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "../features/auth/slice/product-slice";
import AdminProductList from "./AdminProductList";
import Loading from "../components/Loading";

export default function AdminProduct() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/handleproduct");
  };

  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <div className="flex max-h-max">
          <AdminSidebar />
          <div className="w-[90vw] mt-5 bg-green-200 flex flex-col  gap-5 p-4 border-solid border-2 border-black  ">
            <button
              className="text-xl text-white p-2 rounded-lg bg-black w-1/6"
              onClick={handleClick}
            >
              ADD PRODUCT
            </button>
            <div className="border-solid border-2 border-black">
              <div className="w-full grid grid-cols-8 bg-slate-300  text-center pt-4">
                <br />
                <br />
                <p className=" font-semibold">Product Name</p>
                <p className=" font-semibold">Price/pcs</p>
                <p className=" font-semibold">S</p>
                <p className=" font-semibold">M</p>
                <p className=" font-semibold">L</p>
              </div>
              <AdminProductList products={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
