import AdminSidebar from "../../layouts/AdminSidebar";
import { getAllOrder } from "../slice/order-slice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminOrderList from "../admin/AdminOrderList";
import Loading from "../../components/Loading";

export default function AdminOrder() {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);

  const successOrders = orders.filter(
    (order) => order.orderStatus === "SUCCESS"
  );
  const pendingOrders = orders.filter(
    (order) => order.orderStatus === "PENDING"
  );

  useEffect(() => {
    dispatch(getAllOrder()).unwrap();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <div className="flex max-h-max ">
          <AdminSidebar />
          <div className="w-[90vw]  h-[100vh] mt-5 bg-green-200 flex flex-col gap-5 p-4 border-solid border-2 border-black ">
            <div className="flex grid-cols-3">
              <div className="bg-[#59FFC3] h-[15vh] w-1/3 flex flex-col justify-center items-center border-solid border-2 gap-5 border-black m-4 mt-0">
                <h1 className="text-3xl">Total Order</h1>
                <p className="text-2xl">{orders.length}</p>
              </div>
              <div className="bg-[#59FFC3] h-[15vh] w-1/3 flex flex-col justify-center items-center border-solid border-2 gap-5 border-black m-4 mt-0">
                <h1 className="text-3xl">Success</h1>
                <p className="text-2xl">{successOrders.length}</p>
              </div>
              <div className="bg-[#59FFC3] h-[15vh] w-1/3 flex flex-col justify-center items-center border-solid border-2 gap-5 border-black m-4 mt-0">
                <h1 className="text-3xl">Pending</h1>
                <p className="text-2xl">{pendingOrders.length}</p>
              </div>
            </div>
            <div className="border-solid border-2 border-black">
              <div className="w-full grid grid-cols-8 bg-slate-300  text-center items-center">
                <p className="font-semibold">Order Number</p>
                <p className="font-semibold">Date</p>
                <p className="font-semibold">Name</p>
                <div className="col-span-2 mb-2">
                  <p className="font-semibold mb-2">Order List</p>
                  <hr className=" border-2 border-solid border-black" />
                  <div className="flex justify-between">
                    <p className="font-semibold">Q'ty</p>
                    <p className="font-semibold">Name</p>
                    <p className="font-semibold">Size</p>
                  </div>
                </div>
                <p className="font-semibold">Sale</p>
                <p className="font-semibold">Status</p>
              </div>
              {orders.map((el) => (
                <AdminOrderList key={el.id} orders={el} />
              ))}

              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
