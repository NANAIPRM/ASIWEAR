import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../components/Loading";
import OrderItem from "./Orderitem";
import { addAddress } from "../api/address-api";
import AddressLabel from "../features/auth/components/LabelForm";
import AddressInput from "../features/auth/components/InputForm";
import { getAllCartByUserId } from "../features/auth/slice/cart-slice";
import { toast } from "react-toastify";

export default function Information() {
  const user = useSelector((state) => state.auth.user);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAddress(addressData);
      toast.success("Add address successfully");
    } catch (error) {
      toast.error("Failed to add address");
    }
  };

  const carts = useSelector((state) => state.cart.carts);
  const loading = useSelector((state) => state.product.loading);
  const [totalPrice, setTotalPrice] = useState(0);
  const [yourSave, setYourSave] = useState(0);

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

  const dispatch = useDispatch();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex mx-auto w-[90vw] justify-center items-center mt-10 gap-20">
      <div className="w-2/4 flex flex-col gap-10">
        <div className="bg-[#59FFC3] rounded-lg shadow-lg px-10 flex-col items-center justify-center">
          <div className="text-5xl relative bottom-10">INFORMATION</div>
          <div className="text-xl">
            Name : {user.firstName} {user.lastName}
          </div>
          <div className="mb-10 text-xl">Email : {user.email} </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-full w-full flex flex-col gap-10"
        >
          <div>
            <div>
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
          <div>
            <button type="submit" className="btn btn-neutral w-full">
              CONTINUE PAYMENT
            </button>
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
            <div>{yourSave}</div>
          </div>
          <div className="flex justify-between">
            <div>TOTAL</div>
            <div>{totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
