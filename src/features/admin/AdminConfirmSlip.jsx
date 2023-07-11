import AdminSidebar from "../../layouts/AdminSidebar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllOrder } from "../../features/slice/order-slice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateStatus } from "../../features/slice/order-slice";
export default function AdminConfirmSlip() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);
  const param = useParams();

  const id = param.orderId;
  const order = orders.find((order) => order.id === +id);

  useEffect(() => {
    dispatch(getAllOrder()).unwrap();
  }, []);

  const handleConfirmPayment = async () => {
    try {
      await dispatch(updateStatus(id));
      toast.success("Confirm order successfully");
    } catch (error) {
      toast.error(error);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex mt-[-20px] max-h-max">
        <AdminSidebar />
        <div className="flex flex-col w-[90vw] h-[100vh] mt-5 bg-green-200  justify-center items-center p-2 border-solid border-2 border-black ">
          <img
            src={order.payment}
            alt=""
            className="w-[500px] h-[500px] m-10 border-solid border-2 border-black"
          />
          <div className="w-full flex flex-col gap-4">
            <button
              className="text-xl text-white p-2 rounded-lg bg-black "
              onClick={handleConfirmPayment}
            >
              CONFIRM SLIP
            </button>
            <Link
              to={"/admin/order"}
              className="text-xl text-white p-2 rounded-lg bg-red-500  text-center"
            >
              BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
