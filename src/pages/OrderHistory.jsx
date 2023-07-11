import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderByUserId } from "../features/slice/order-slice";
import OrderHistoryItem from "./OrderHistoryItem";

export default function OrderHistory() {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(getAllOrderByUserId()).unwrap();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-16 w-[80vw] mx-auto">
      <div className="text-2xl flex items-center gap-4 mb-10">MY ORDER</div>
      {Array.isArray(orders) &&
        orders.map((el) => <OrderHistoryItem key={el.id} order={el} />)}
    </div>
  );
}
