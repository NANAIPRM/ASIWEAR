import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByOrderId } from "../features/auth/slice/order-slice";
import OrderDetailItem from "./OrderDetailItem";
export default function OrderHistoryItemDetail() {
  const order = useSelector((state) => state.order.orders);
  const id = useParams();
  const dispatch = useDispatch();
  const orderId = id.orderId;
  const orderItem = order.OrderItems;
  useEffect(() => {
    dispatch(getOrderByOrderId(orderId)).unwrap();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center w-[70vw] mx-auto mt-16 mb-10">
        <div className="text-2xl mx-auto">ORDERNO : {order?.id}</div>
      </div>
      <hr className="border-2 border-black border-solid w-3/4 mx-auto" />
      <div className="flex   justify-center items-center p-10 ">
        <div className="w-[50vw] mx-auto">
          {orderItem?.map((el) => (
            <OrderDetailItem key={el.id} OrderDetailItem={el} />
          ))}
        </div>
      </div>
      <hr className="border-2 border-black border-solid w-3/4 mx-auto" />
      <div className="flex w-2/4 mx-auto justify-between mt-10">
        <p className="px-10">TOTAL</p>
        <p>{order?.totalAmount}</p>
      </div>
      <div className="flex w-[70vw] gap-20 mx-auto mt-10">
        <Link to="/orderHistory" className="btn btn-error w-full mb-10">
          BACK
        </Link>
      </div>
    </div>
  );
}
