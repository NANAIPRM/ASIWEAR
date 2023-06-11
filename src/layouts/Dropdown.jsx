import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/slice/auth-slice";
import { updateProduct as resetProduct } from "../features/auth/slice/product-slice";
import { useSelector } from "react-redux";
export default function Dropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.user.isAdmin);
  const handleLogout = async () => {
    await dispatch(logout()).unwrap();
    dispatch(resetProduct()); // เรียกใช้งาน resetProduct จาก Slice productSlice
    navigate("/");
  };

  const handleClick = () => {
    navigate("/admin/order");
  };

  return isAdmin ? (
    <div className="bg-[#59FFC3] shadow-[0_0_15px_rgb(0_0_0_/0.2)] w-[100px] h-min-max p-4 rounded-lg flex flex-col justify-center items-center gap-5">
      <button onClick={handleClick}>Manage</button>
      <button onClick={handleLogout}>Logout</button>{" "}
    </div>
  ) : (
    <div className="bg-[#59FFC3] shadow-[0_0_15px_rgb(0_0_0_/0.2)] w-[100px] h-min-max p-4 rounded-lg flex flex-col justify-center items-center gap-5">
      <button>Account</button>
      <button onClick={handleLogout}>Logout</button>{" "}
    </div>
  );
}
