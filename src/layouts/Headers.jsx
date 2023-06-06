import { CartIcon, UserIcon, WishListIcon } from "../icons";
export default function Header() {
  return (
    <div className="flex justify-between items-center h-[5vh] w-[95vw] mx-auto  mt-5 mb-10">
      <div className="invisible">
        <button>SHOP</button>
        <button>WISHLISTS</button>
        <button>CART</button>
        <button>ACCOUNT</button>
      </div>
      <div className="flex gap-1">
        <h1 className=" text-3xl bg-black text-white w-10 text-center">A</h1>
        <h1 className=" text-3xl">S I WEAR</h1>
      </div>
      <div className="flex  gap-10 items-center">
        <button>SHOP</button>
        <button>
          <WishListIcon />
        </button>
        <button>
          <CartIcon />
        </button>
        <button>
          <UserIcon />
        </button>
      </div>
    </div>
  );
}
