import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  getAllCartByUserId,
  updateCartItem,
} from "../features/auth/slice/cart-slice";
import { useState } from "react";
import { useEffect } from "react";

export default function CartItem({ carts }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(
    carts.quantity >= 1 ? carts.quantity : 1
  );
  const [size, setSize] = useState(carts.size);
  const handleRemove = async (cartItemId) => {
    await dispatch(deleteCartItem(cartItemId)).unwrap();
    dispatch(getAllCartByUserId());
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  useEffect(() => {
    dispatch(updateCartItem({ id: carts.id, input: { quantity, size } }));
  }, [quantity, size]);
  return (
    <div className="flex gap-20 w-[70vw] justify-center mt-10">
      <div className="">
        <img
          src={carts.Product.img2}
          alt=""
          className="w-[250px] h-[200px] shadow-lg rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-4 w-full  justify-around">
        <div className="flex justify-between w-full">
          <div>{carts.Product.productName}</div>
          <div className="flex gap-4">
            {carts.Product.discountPrice !== 0 ? (
              <>
                <p className="text-red-400">
                  {carts.Product.price - carts.Product.discountPrice}
                </p>
                <p className=" line-through">{carts.Product.price}</p>
              </>
            ) : (
              <p className="text-red-400">{carts.Product.price}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>Q'ty</div>
          <div className="flex gap-5 ">
            <button onClick={decreaseQuantity}>-</button>
            <span className="text-red-400">{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>SIZE</div>
          <div className="flex gap-5 ">
            <button
              className={`btn-size ${
                size === "S" ? "text-red-400" : "text-black"
              }`}
              onClick={() => setSize("S")}
            >
              S
            </button>
            <button
              className={`btn-size ${
                size === "M" ? "text-red-400" : "text-black"
              }`}
              onClick={() => setSize("M")}
            >
              M
            </button>
            <button
              className={`btn-size ${
                size === "L" ? "text-red-400" : "text-black"
              }`}
              onClick={() => setSize("L")}
            >
              L
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="invisible">SIZE</div>
          <div className="flex gap-5 ">
            <button onClick={() => handleRemove(carts.id)}>REMOVE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
