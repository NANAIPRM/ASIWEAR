import AdminSidebar from "../../layouts/AdminSidebar";
import Header from "../../layouts/Headers";
import { useNavigate } from "react-router-dom";

export default function AdminConfirmSlip() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/order");
  };
  return (
    <div>
      <Header />
      <div className="flex mt-[-20px] h-[90vh]">
        <AdminSidebar />
        <div className="flex flex-col w-[90vw] bg-green-200  justify-center items-center p-2 border-solid border-2 border-black ">
          <img
            src="https://s.isanook.com/mn/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21uLzAvdWQvMTIxLzYwNjIxNy8zMzU0NDMuanBn.jpg"
            alt=""
            className="w-[500px] h-[500px] m-10 border-solid border-2 border-black"
          />
          <div className="w-full flex flex-col gap-4">
            <button className="text-xl text-white p-2 rounded-lg bg-black ">
              CONFIRM SLIP
            </button>
            <button
              className="text-xl text-white p-2 rounded-lg bg-red-500 "
              onClick={handleClick}
            >
              BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
