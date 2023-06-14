import { useNavigate } from "react-router-dom";
export default function OrderHistoryItem({ order }) {
  const formattedDate = new Date(order.createdAt).toLocaleDateString();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/orderDetail/${order.id}`);
  };
  return (
    <>
      {order.orderStatus === "SUCCESS" ? (
        <div
          className="bg-[#59FFC3] rounded-lg w-1/2 flex flex-col gap-5 p-4 m-10"
          onClick={handleClick}
        >
          <div className="flex justify-between">
            <div>STATUS : {order.orderStatus}</div>
            <div>{formattedDate}</div>
          </div>
          <div className="flex justify-between">
            <div>ORDER NUMBER : {order.id}</div>
            <div>TOTAL : {order.totalAmount} THB</div>
          </div>
        </div>
      ) : (
        <div
          className=" bg-yellow-200 rounded-lg w-1/2 flex flex-col gap-5 p-4 m-10"
          onClick={handleClick}
        >
          <div className="flex justify-between">
            <div>STATUS : {order.orderStatus}</div>
            <div>{formattedDate}</div>
          </div>
          <div className="flex justify-between">
            <div>ORDER NUMBER : {order.id}</div>
            <div>TOTAL : {order.totalAmount} THB</div>
          </div>
        </div>
      )}
    </>
  );
}
