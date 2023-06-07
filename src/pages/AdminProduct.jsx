import AdminSidebar from "../layouts/AdminSidebar";
import Headers from "../layouts/Headers";
import { useNavigate } from "react-router-dom";

export default function AdminProduct() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/handleproduct");
  };
  return (
    <>
      <div>
        <Headers />
        <div className="flex mt-[-20px] ">
          <AdminSidebar />
          <div className="w-[90vw]  max-h-min bg-green-200 flex flex-col justify-center gap-5 p-4 border-solid border-2 border-black ">
            <button
              className="text-xl text-white p-2 rounded-lg bg-black w-1/6"
              onClick={handleClick}
            >
              ADD PRODUCT
            </button>
            <div className="border-solid border-2 border-black">
              <div className="w-full grid grid-cols-8 bg-slate-300  text-center">
                <p>Product Id</p>
                <p>Product Name</p>
                <p>Price/pcs</p>
                <p>Size</p>
                <p>Stock</p>
                <p>Sale(pcs)</p>
              </div>
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <div className="flex justify-center items-center">
                  <img
                    src="https://sv1.picz.in.th/images/2023/06/07/ISlBbS.png"
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                  <p>Product Name</p>
                </div>
                <p>300</p>
                <p>S</p>
                <p>30</p>
                <p>22</p>
                <button className="bg-slate-400 m-4 rounded-lg">EDIT</button>
                <button className="bg-red-400 m-4 rounded-lg">DELETE</button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <div className="flex justify-center items-center">
                  <img
                    src="https://sv1.picz.in.th/images/2023/06/07/ISlBbS.png"
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                  <p>Product Name</p>
                </div>
                <p>300</p>
                <p>S</p>
                <p>30</p>
                <p>22</p>
                <button className="bg-slate-400 m-4 rounded-lg">EDIT</button>
                <button className="bg-red-400 m-4 rounded-lg">DELETE</button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <div className="flex justify-center items-center">
                  <img
                    src="https://sv1.picz.in.th/images/2023/06/07/ISlBbS.png"
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                  <p>Product Name</p>
                </div>
                <p>300</p>
                <p>S</p>
                <p>30</p>
                <p>22</p>
                <button className="bg-slate-400 m-4 rounded-lg">EDIT</button>
                <button className="bg-red-400 m-4 rounded-lg">DELETE</button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <div className="flex justify-center items-center">
                  <img
                    src="https://sv1.picz.in.th/images/2023/06/07/ISlBbS.png"
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                  <p>Product Name</p>
                </div>
                <p>300</p>
                <p>S</p>
                <p>30</p>
                <p>22</p>
                <button className="bg-slate-400 m-4 rounded-lg">EDIT</button>
                <button className="bg-red-400 m-4 rounded-lg">DELETE</button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <div className="flex justify-center items-center">
                  <img
                    src="https://sv1.picz.in.th/images/2023/06/07/ISlBbS.png"
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                  <p>Product Name</p>
                </div>
                <p>300</p>
                <p>S</p>
                <p>30</p>
                <p>22</p>
                <button className="bg-slate-400 m-4 rounded-lg">EDIT</button>
                <button className="bg-red-400 m-4 rounded-lg">DELETE</button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <div className="flex justify-center items-center">
                  <img
                    src="https://sv1.picz.in.th/images/2023/06/07/ISlBbS.png"
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                  <p>Product Name</p>
                </div>
                <p>300</p>
                <p>S</p>
                <p>30</p>
                <p>22</p>
                <button className="bg-slate-400 m-4 rounded-lg">EDIT</button>
                <button className="bg-red-400 m-4 rounded-lg">DELETE</button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <div className="flex justify-center items-center">
                  <img
                    src="https://sv1.picz.in.th/images/2023/06/07/ISlBbS.png"
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                  <p>Product Name</p>
                </div>
                <p>300</p>
                <p>S</p>
                <p>30</p>
                <p>22</p>
                <button className="bg-slate-400 m-4 rounded-lg">EDIT</button>
                <button className="bg-red-400 m-4 rounded-lg">DELETE</button>
              </div>
              <hr />
              <div className="w-full grid grid-cols-8 bg-slate-300 justify-center text-center items-center">
                <p>1</p>
                <div className="flex justify-center items-center">
                  <img
                    src="https://sv1.picz.in.th/images/2023/06/07/ISlBbS.png"
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                  <p>Product Name</p>
                </div>
                <p>300</p>
                <p>S</p>
                <p>30</p>
                <p>22</p>
                <button className="bg-slate-400 m-4 rounded-lg">EDIT</button>
                <button className="bg-red-400 m-4 rounded-lg">DELETE</button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
