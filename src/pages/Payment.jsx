import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import OrderItem from "./Orderitem";
import { getAllCartByUserId } from "../features/auth/slice/cart-slice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../features/auth/slice/order-slice";
import Loading from "../components/Loading";

export default function Payment() {
  const carts = useSelector((state) => state.cart.carts);
  const [totalPrice, setTotalPrice] = useState(0);
  const [yourSave, setYourSave] = useState(0);
  const [slipFile, setSlipFile] = useState(null);
  const loading = useSelector((state) => state.order.loading);
  // console.log(loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCartByUserId()).unwrap();
  }, []);

  useEffect(() => {
    let price = 0;
    let save = 0;

    carts.forEach((el) => {
      price += (el.Product.price - el.Product.discountPrice) * el.quantity;
      save += el.Product.discountPrice * el.quantity;
    });

    setTotalPrice(price);
    setYourSave(save);
  }, [carts]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (slipFile) {
        const formData2 = new FormData();
        formData2.append("image", slipFile);
        await dispatch(createOrder(formData2)).unwrap();
        toast.success("Order successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleFileChange = (e) => {
    setSlipFile(e.target.files[0]);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex mx-auto w-[90vw] justify-center items-start  gap-20">
      <div className="w-2/4 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center mt-10">
            <img
              src="https://getcodecamp.com/wp-content/plugins/seed-confirm-pro/img/scb.png"
              className="rounded-lg"
              alt=""
            />
            <p>ธนาคารไทยพาณิชย์</p>
          </div>
          <p>ACCOUNT NO : 168-230276-9</p>
          <p>สมาคมโปรแกรมเมอร์ไทย</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-full w-full flex flex-col gap-10"
        >
          <div className="flex gap-2 text-center items-center">
            <label htmlFor="slip">PAYMENT SLIP:</label>
            <input
              type="file"
              id="slip"
              name="slip"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex flex-col w-full gap-5">
            <button type="submit" className="btn btn-neutral w-full">
              CONFIRM ORDER
            </button>
            <Link to="/information" className="btn btn-error w-full">
              BACK
            </Link>
          </div>
        </form>
      </div>
      <div className="w-2/4">
        <div className="mb-10">
          {carts.map((el) => (
            <OrderItem key={el.id} carts={el} />
          ))}
        </div>
        <hr className="border-2 border-black border-solid w-full mb-10" />
        <div className="flex flex-col w-full mb-10 px-20">
          <div className="flex justify-between">
            <div>YOUR SAVE</div>
            <div>{yourSave} THB</div>
          </div>
          <div className="flex justify-between">
            <div>TOTAL</div>
            <div>{totalPrice} THB</div>
          </div>
        </div>
      </div>
    </div>
  );
}
