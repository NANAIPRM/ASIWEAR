import { CartIcon } from "../icons";
import { getAllCartByUserId } from "../features/auth/slice/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const loading = useSelector((state) => state.product.loading);
  useEffect(() => {
    dispatch(getAllCartByUserId()).unwrap();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-16 w-[80vw] mx-auto">
      <div className="text-2xl flex items-center gap-4 mb-10">
        MY CART <CartIcon />
      </div>
      <hr className="border-2 border-black border-solid w-full" />
      {carts.length > 0 ? (
        <>
          <div className="mb-10">
            {carts.map((el) => (
              <CartItem key={el.id} carts={el} />
            ))}
          </div>
        </>
      ) : (
        <p className="flex items-center text-5xl h-[50vh]">
          Your Cart is empty.
        </p>
      )}
      <hr className="border-2 border-black border-solid w-full mb-10" />

      {carts.length > 0 ? (
        <div className="flex w-full gap-20 mb-10">
          <Link to="/shop" className="btn btn-error w-1/3">
            BACK TO SHOPPING
          </Link>
          <Link to="/payment" className="btn btn-neutral w-[700px]">
            CHECK OUT
          </Link>
        </div>
      ) : (
        <div className="flex w-full gap-20 mb-10">
          <Link to="/shop" className="btn btn-error w-full">
            BACK TO SHOPPING
          </Link>
        </div>
      )}
    </div>
  );
}
