import { CartIcon, UserIcon, WishListIcon } from "../icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickToLogin = () => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    setOpen(!open);
  };

  const handleClickToHome = () => {
    navigate("/");
  };

  return (
    <div className="relative top-0 z-10 min-h-max">
      <div className="flex justify-between items-center h-[5vh] w-[95vw] mx-auto  mt-5 mb-10 ">
        <div className="invisible">
          <button>SHOP</button>
          <button>WISHLISTS</button>
          <button>CART</button>
          <button>ACCOUNT</button>
        </div>
        <button className="flex gap-1" onClick={handleClickToHome}>
          <h1 className=" text-3xl bg-black text-white w-10 text-center">A</h1>
          <h1 className=" text-3xl">S I WEAR</h1>
        </button>
        <div className="flex  gap-10 items-center">
          <button>SHOP</button>
          <button>
            <WishListIcon />
          </button>
          <button>
            <CartIcon />
          </button>
          <button onClick={handleClickToLogin}>
            <UserIcon />
          </button>
        </div>
        {open && (
          <div className="absolute bottom-1 right-4 top-10">
            <Dropdown />
          </div>
        )}
      </div>
    </div>
  );
}
