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
import AddressLabel from "../features/auth/components/LabelForm";
import AddressInput from "../features/auth/components/InputForm";

export default function Payment() {
  const carts = useSelector((state) => state.cart.carts);
  const [totalPrice, setTotalPrice] = useState(0);
  const [yourSave, setYourSave] = useState(0);
  const [slipFile, setSlipFile] = useState(null);
  const loading = useSelector((state) => state.order.loading);
  // console.log(loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addressData, setAddressData] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
  });
  const handleInputChange = (e) => {
    setAddressData({
      ...addressData,
      [e.target.id]: e.target.value,
    });
  };

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
      const formData2 = new FormData();
      formData2.append("image", slipFile);
      formData2.append("addressLine1", addressData.addressLine1);
      formData2.append("addressLine2", addressData.addressLine2);
      formData2.append("city", addressData.city);
      formData2.append("province", addressData.province);
      formData2.append("postalCode", addressData.postalCode);
      formData2.append("country", addressData.country);
      await dispatch(createOrder(formData2)).unwrap();
      toast.success("Order successfully");
      navigate("/orderDetail");
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
    <div className="flex mx-auto w-[90vw] justify-center items-start  gap-20 mt-16">
      <div className="w-2/4 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
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
        <form onSubmit={handleSubmit} className="h-full w-full flex flex-col ">
          <div className="flex flex-col gap-2  ">
            <div>
              <label htmlFor="slip">PAYMENT SLIP:</label>
              <input
                type="file"
                id="slip"
                name="slip"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <div>
                <p className="text-3xl mt-10">SHIPPING ADDRESS</p>
                <AddressLabel id="addressLine1" text="Address Line 1" />
                <br />
                <AddressInput
                  id="addressLine1"
                  value={addressData.addressLine1}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <AddressLabel id="addressLine2" text="Address Line 2" />
                <br />
                <AddressInput
                  id="addressLine2"
                  value={addressData.addressLine2}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <AddressLabel id="city" text="City" />
                <br />
                <AddressInput
                  id="city"
                  value={addressData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <AddressLabel id="province" text="Province" />
                <br />
                <AddressInput
                  id="province"
                  value={addressData.province}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <AddressLabel id="postalCode" text="Postal Code" />
                <br />
                <AddressInput
                  id="postalCode"
                  value={addressData.postalCode}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <AddressLabel id="country" text="Country" />
                <br />
                <AddressInput
                  id="country"
                  value={addressData.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <button
              className="btn btn-neutral w-full mt-10"
              onClick={handleSubmit}
            >
              CONFIRM ORDER
            </button>
            <Link to="/information" className="btn btn-error w-full mb-10">
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
