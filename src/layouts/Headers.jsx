import { CartIcon, UserIcon, WishListIcon } from "../icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { getAllCartByUserId } from "../features/slice/cart-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart.carts);
  const loading = useSelector((state) => {
    state.cart.loading;
  });

  useEffect(() => {
    dispatch(getAllCartByUserId()).unwrap();
  }, []);

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
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative top-0 z-10 h-full">
      <div className="flex justify-between items-center h-[5vh] w-[95vw] mx-auto pt-10 mb-10">
        <div className="invisible">
          <button>SHOP</button>
          <button>WISHLISTS</button>
          <button>CART</button>
          <button>ACCOUNT</button>
        </div>
        <button className="flex gap-1" onClick={handleClickToHome}>
          <h1 className="text-3xl bg-black text-white w-10 text-center">A</h1>
          <h1 className="text-3xl">S I WEAR</h1>
        </button>
        <div className="flex gap-10 items-center">
          <button onClick={handleChickToShop}>SHOP</button>
          {user?.isAdmin ? (
            <button className="hidden">
              <WishListIcon />
            </button>
          ) : (
            <button>
              <WishListIcon />
            </button>
          )}
          {user?.isAdmin ? (
            <Link to="/cart" className="hidden">
              <CartIcon />
            </Link>
          ) : (
            <Link to="/cart" className="relative">
              <CartIcon />
              {carts?.length > 0 && isAuthenticated && (
                <div className="absolute top-[-10px] right-[-12px] bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {carts?.length}
                </div>
              )}
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
        </div>
      </div>
    </div>
  );
}
