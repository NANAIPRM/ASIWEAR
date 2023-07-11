import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import OrderDetailItem from "./OrderDetailItem";
import { useDispatch } from "react-redux";
import { getAllOrderByUserId } from "../features/slice/order-slice";
import { Link } from "react-router-dom";
export default function OrderDetail() {
  const [address, setAddress] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.order.orders);
  // console.log(user);
  // console.log(orders[0]?.id);

  // const getAddressByOrderId = async () => {
  //   const res = await axios.get("http://localhost:8888/address/order", {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("accessItem"),
  //     },
  //     data: {
  //       orderId: orders[0]?.id,
  //     },
  //   });
  //   setAddress(res.data);
  // };
  // useEffect(() => {
  //   getAddressByOrderId();
  // }, []);

  const lastAddress = address[address.length - 1];

  useEffect(() => {
    dispatch(getAllOrderByUserId());
  }, []);

  // console.log(orders);

  const lastOrder = orders[orders.length - 1];
  const lastOrderItem = lastOrder?.OrderItems;

  // console.log(lastOrderItem);
  return (
    <div>
      <div className="flex justify-between items-center w-[70vw] mx-auto mt-16 mb-10">
        <div className="text-2xl">ORDERNO : {lastOrder?.id}</div>
        <div className="bg-[#59FFC3] p-4  h-1/2 rounded-lg shadow-lg  flex-col items-center justify-center ">
          <div className="text-xl">SHIPPING</div>
          <div className="">
            Name : {user.firstName} {user.lastName}
          </div>
          <div className="">Email : {user.email}</div>
          <div className="">
            Address : 439 แขวง บางแค เขต บางแค กรุงเทพ 10160
          </div>
        </div>
      </div>
      <hr className="border-2 border-black border-solid w-3/4 mx-auto" />
      <div className="flex   justify-center items-center p-10 ">
        <div className="w-[50vw] mx-auto">
          {lastOrderItem?.map((el) => (
            <OrderDetailItem key={el.id} OrderDetailItem={el} />
          ))}
        </div>
      </div>
      <hr className="border-2 border-black border-solid w-3/4 mx-auto" />
      <div className="flex w-2/4 mx-auto justify-between mt-10">
        <p className="px-10">TOTAL</p>
        <p>{lastOrder?.totalAmount}</p>
      </div>
      <div className="flex w-[70vw] gap-20 mx-auto mt-10">
        <Link to="/" className="btn btn-neutral w-full mb-10">
          THANK YOU FOR YOUR ORDER
        </Link>
      </div>
    </div>
  );
}
