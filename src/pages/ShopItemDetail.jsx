import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductById } from "../features/slice/product-slice";
import { Link } from "react-router-dom";
import { createCart } from "../features/slice/cart-slice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ShopItemDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product.productItem);
  const loading = useSelector((state) => state.product.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      const data = {
        size: size,
        quantity: quantity,
      };
      if (isAuthenticated) {
        await dispatch(createCart({ id: productId, input: data })).unwrap();
        toast.success("Add cart successfully");
        setQuantity(1);
        setSize("S");
        // window.location.reload();
      } else {
        navigate("/login");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col w-full border-opacity-50 h-[100vh] mt-16">
      <div className="flex flex-row gap-10 card justify-center">
        <img
          className="h-[565px] w-[450px] rounded-lg shadow-xl"
          src={product.img1}
          alt=""
        />
        <div className="w-1/2 h-[550px] flex flex-col">
          <div className="h-1/2 flex  gap-4">
            <div className="w-1/2">
              <img
                className="h-full w-full rounded-lg  shadow-xl object-cover"
                src={product.img2}
                alt=""
              />
            </div>
            <div className="w-1/2 ">
              <img
                className="h-full w-full rounded-lg shadow-xl object-cover"
                src={product.img3}
                alt=""
              />
            </div>
          </div>
          <div className="h-1/2">
            <img
              className="h-full mt-4 w-full rounded-lg shadow-xl object-cover"
              src={product.img2}
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <div className="flex min-h-max w-[83vw] mx-auto">
        <div className="bg-[#59FFC3]  w-full p-10 flex flex-col  border-solid border-2 border-black gap-10 rounded-lg shadow-xl mb-10">
          <div>
            <div className="flex justify-between items-center">
              <p className="mb-4 text-3xl ">{product.productName}</p>
              {product.discountPrice !== 0 ? (
                <p className="text-4xl mb-4 text-red-400">
                  {product.price - product.discountPrice} THB
                </p>
              ) : (
                <p className="text-4xl mb-4 text-red-400">
                  {product.price} THB
                </p>
              )}
            </div>
            <p className="mb-4 text-xl"> {product.description}</p>
            <div className="w-full ">
              <div className="flex gap-5 mb-4 ">
                <div className="text-xl text-center">
                  Q'ty
                  <div className="flex gap-5 text-xl">
                    <button onClick={() => setQuantity(quantity - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>

                <div className="text-xl text-center">
                  SIZE
                  <div className="flex gap-5 text-xl">
                    <button
                      className={`btn-size ${
                        size === "S" ? "text-red-400" : "text-black"
                      }`}
                      onClick={() => setSize("S")}
                    >
                      S
                    </button>
                    <button
                      className={`btn-size ${
                        size === "M" ? "text-red-400" : "text-black"
                      }`}
                      onClick={() => setSize("M")}
                    >
                      M
                    </button>
                    <button
                      className={`btn-size ${
                        size === "L" ? "text-red-400" : "text-black"
                      }`}
                      onClick={() => setSize("L")}
                    >
                      L
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <button
                  className="btn btn-neutral w-full flex-grow"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
                <Link to="/shop" className="btn btn-error w-full flex-grow">
                  BACK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
