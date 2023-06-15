import { CartIcon, UserIcon, WishListIcon } from "../icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { getAllCartByUserId } from "../features/auth/slice/cart-slice";

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart.carts);

  useEffect(() => {
    dispatch(getAllCartByUserId()).unwrap();
  }, []);

  console.log(carts);
  const handleClickToLogin = () => {
    if (!isAuthenticated) {
      navigate("/login");
    }

    setOpen(!open);
  };

  const handleClickToHome = () => {
    navigate("/");
  };

  const handleChickToShop = () => {
    navigate("/shop");
  };

  return (
    <div className="relative top-0 z-10 h-full">
      <div className="flex justify-between items-center h-[5vh] w-[95vw] mx-auto  pt-10 mb-10 ">
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
          <button onClick={handleChickToShop}>SHOP</button>
          {user?.isAdmin ? (
            <button className=" hidden">
              <WishListIcon />
            </button>
          ) : (
            <button>
              <WishListIcon />
            </button>
          )}
          {user?.isAdmin ? (
            <Link to="/cart" className=" hidden">
              <CartIcon />
            </Link>
          ) : (
            <Link to="/cart">
              <CartIcon />
            </Link>
          )}
          {isAuthenticated ? (
            <button onClick={handleClickToLogin}>{user.firstName}</button>
          ) : (
            <button onClick={handleClickToLogin}>
              <UserIcon />
            </button>
          )}

          {isAuthenticated && open && (
            <div className="absolute bottom-1 right-4 top-14">
              <Dropdown setOpen={setOpen} />
            </div>
          )}
          <div className="absolute top-4  right-20 bg-red-300 p-3 w-1 h-1 flex items-center justify-center rounded-full">
            1
          </div>
        </div>
      </div>
    </div>
  );
}
