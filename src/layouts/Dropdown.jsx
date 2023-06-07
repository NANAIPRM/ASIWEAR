import { useNavigate } from "react-router-dom";
export default function Dropdown() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/order");
  };

  return (
    <div className="bg-[#59FFC3] shadow-[0_0_15px_rgb(0_0_0_/0.2)] w-[100px] h-min-max p-4 rounded-lg flex flex-col justify-center items-center gap-5">
      <button onClick={handleClick}>Manage</button>
      <button>Logout</button>
    </div>
  );
}
