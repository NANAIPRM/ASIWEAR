import Headers from "../layouts/Headers";
import AdminSidebar from "../layouts/AdminSidebar";
import { useNavigate } from "react-router-dom";

export default function AdminOrder() {
  const navigate = useNavigate();
  const handleOnClickSlip = (orderId) => {
    navigate(`/admin/order/confirmSlip/:${orderId}`);
  };

  return (
    <>
      <div>
        <Headers />
        <div className="flex mt-[-20px]">
          <AdminSidebar />
          <div className="w-[90vw]  max-h-min bg-green-200 flex flex-col justify-center gap-5 p-4 border-solid border-2 border-black ">
            <div className="flex grid-cols-3">
              <div className="bg-[#59FFC3] h-[15vh] w-1/3 flex flex-col justify-center items-center border-solid border-2 gap-5 border-black m-4">
                <h1 className="text-3xl">Total Order</h1>
                <p className="text-2xl">10</p>
              </div>
              <div className="bg-[#59FFC3] h-[15vh] w-1/3 flex flex-col justify-center items-center border-solid border-2 gap-5 border-black m-4">
                <h1 className="text-3xl">Success</h1>
                <p className="text-2xl">5</p>
              </div>
              <div className="bg-[#59FFC3] h-[15vh] w-1/3 flex flex-col justify-center items-center border-solid border-2 gap-5 border-black m-4">
                <h1 className="text-3xl">Waiting</h1>
                <p className="text-2xl">5</p>
              </div>
            </div>
            <div className="border-solid border-2 border-black">
              <div className="w-full grid grid-cols-8 bg-slate-300  text-center">
                <p>Order Number</p>
                <p>Date</p>
                <p>Name</p>
                <p>Order List</p>
                <p>Sale</p>
                <p>Status</p>
                <p>Slip</p>
              </div>
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <p>07/06/2023</p>
                <p>John Doe</p>
                <div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                </div>
                <p>1550</p>
                <button className="bg-green-400 m-4 rounded-lg">SUCESS</button>
                <p>xxxx.jpg</p>
                <button
                  className="bg-slate-400 m-4 rounded-lg"
                  onClick={handleOnClickSlip}
                >
                  CONFIRM SLIP
                </button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <p>07/06/2023</p>
                <p>John Doe</p>
                <div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                </div>
                <p>1550</p>
                <button className="bg-green-400 m-4 rounded-lg">SUCESS</button>
                <p>xxxx.jpg</p>
                <button
                  className="bg-slate-400 m-4 rounded-lg"
                  onClick={handleOnClickSlip()}
                >
                  CONFIRM SLIP
                </button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <p>07/06/2023</p>
                <p>John Doe</p>
                <div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                </div>
                <p>1550</p>
                <button className="bg-green-400 m-4 rounded-lg">SUCESS</button>
                <p>xxxx.jpg</p>
                <button
                  className="bg-slate-400 m-4 rounded-lg"
                  onClick={handleOnClickSlip}
                >
                  CONFIRM SLIP
                </button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <p>07/06/2023</p>
                <p>John Doe</p>
                <div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                </div>
                <p>1550</p>
                <button className="bg-green-400 m-4 rounded-lg">SUCESS</button>
                <p>xxxx.jpg</p>
                <button
                  className="bg-slate-400 m-4 rounded-lg"
                  onClick={handleOnClickSlip}
                >
                  CONFIRM SLIP
                </button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <p>07/06/2023</p>
                <p>John Doe</p>
                <div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                </div>
                <p>1550</p>
                <button className="bg-green-400 m-4 rounded-lg">SUCESS</button>
                <p>xxxx.jpg</p>
                <button
                  className="bg-slate-400 m-4 rounded-lg"
                  onClick={handleOnClickSlip}
                >
                  CONFIRM SLIP
                </button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <p>07/06/2023</p>
                <p>John Doe</p>
                <div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                </div>
                <p>1550</p>
                <button className="bg-green-400 m-4 rounded-lg">SUCESS</button>
                <p>xxxx.jpg</p>
                <button
                  className="bg-slate-400 m-4 rounded-lg"
                  onClick={handleOnClickSlip}
                >
                  CONFIRM SLIP
                </button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <p>07/06/2023</p>
                <p>John Doe</p>
                <div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                </div>
                <p>1550</p>
                <button className="bg-green-400 m-4 rounded-lg">SUCESS</button>
                <p>xxxx.jpg</p>
                <button
                  className="bg-slate-400 m-4 rounded-lg"
                  onClick={handleOnClickSlip}
                >
                  CONFIRM SLIP
                </button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <p>07/06/2023</p>
                <p>John Doe</p>
                <div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                </div>
                <p>1550</p>
                <button className="bg-green-400 m-4 rounded-lg">SUCESS</button>
                <p>xxxx.jpg</p>
                <button
                  className="bg-slate-400 m-4 rounded-lg"
                  onClick={handleOnClickSlip}
                >
                  CONFIRM SLIP
                </button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <p>07/06/2023</p>
                <p>John Doe</p>
                <div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <p>q'ty</p>
                    <p>name</p>
                    <p>size</p>
                  </div>
                </div>
                <p>1550</p>
                <button className="bg-green-400 m-4 rounded-lg">SUCESS</button>
                <p>xxxx.jpg</p>
                <button
                  className="bg-slate-400 m-4 rounded-lg"
                  onClick={handleOnClickSlip}
                >
                  CONFIRM SLIP
                </button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
