import ShopItem from "./ShopItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../features/auth/slice/product-slice";

export default function Shop() {
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col w-full border-opacity-50 mt-16">
      <div className="grid h-50 card bg-base-300 rounded-lg place-items-center w-[93vw] mx-auto mb-10">
        <img
          src="https://sv1.picz.in.th/images/2023/06/11/Iwz59e.png"
          className="rounded-lg"
        />
      </div>

      <div className="grid grid-cols-3 card  rounded-box place-items-center">
        {products?.map((el) => (
          <ShopItem key={el.id} products={el} />
        ))}
      </div>
    </div>
  );
}
