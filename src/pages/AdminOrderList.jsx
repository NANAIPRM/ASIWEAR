import AdminOrderItem from "./AdminOrderItem";
import { useNavigate } from "react-router-dom";
export default function AdminOrderList({ orders }) {
  const orderItem = orders.OrderItems;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/admin/order/confirmSlip/${orders.id}`);
  };

  const formattedDate = new Date(orders.createdAt).toLocaleDateString();
  return (
    <div className="w-full grid grid-cols-8 bg-slate-300 justify-center max-h-max text-center items-center">
      <p>{orders.id}</p>
      <p>{formattedDate}</p>
      <p>{orders.User.firstName}</p>
      <div className="flex flex-col items-center col-span-2">
        {orderItem.map((el) => (
          <AdminOrderItem key={el.id} orderitem={el} />
        ))}
      </div>
      <p>{orders.totalAmount}</p>
      <button className="bg-green-400 m-4 rounded-lg">
        {orders.orderStatus}
      </button>
      <button onClick={handleClick} className="bg-slate-400 m-4 rounded-lg">
        CONFIRM SLIP
      </button>
    </div>
  );
}
