import Header from "../layouts/Headers";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  const handleToShop = () => {
    navigate("/shop");
  };
  return (
    <div className="">
      <Header />
      <div className="flex w-[95vw] mx-auto h-[90vh] items-center">
        <div className="w-1/2 flex justify-center items-center ">
          <div className="flex flex-col gap-5">
            <p className="text-[#E54D4D] text-3xl">PROMOTION</p>
            <p className="text-5xl">WITHIN THIS MONTH</p>
            <div className="flex gap-3 items-center">
              <p className="text-[#E54D4D] text-3xl">THB 3,500</p>
              <p className="text-xl line-through ">THB 5,000</p>
            </div>
            <div>
              <button
                className="text-xl text-white p-2 rounded-lg bg-black"
                onClick={handleToShop}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div className=" w-1/2  h-1/2 bg-[url(https://wallpaperaccess.com/full/512763.jpg)] flex items-center justify-center  rounded-md">
          <img
            src="https://sv1.picz.in.th/images/2023/06/07/ISlBbS.png"
            alt="ISlBbS.png"
            border="0"
            className=" w-[500px] h-[700px]"
          />
        </div>
      </div>
    </div>
  );
}
