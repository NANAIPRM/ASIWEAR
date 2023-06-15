import { useNavigate } from "react-router-dom";
export default function ShopItem({ products }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/productdetail/${products.id}`);
  };
  return (
    <button
      className="mb-10 card w-96 bg-base-100 shadow-xl h-[500px]"
      onClick={handleClick}
    >
      <figure className="overflow-hidden">
        <img src={products.img2} className=" object-fill  relative top-24" />
      </figure>

      <div className="card-body flex flex-col justify-between w-full">
        {products.discountPrice !== 0 ? (
          <button className="btn btn-error cursor-auto w-full">SALE</button>
        ) : (
          <button></button>
        )}

        <p className="card-title">{products.productName}.</p>

        <div className="flex gap-4 items-center">
          {products.discountPrice !== 0 ? (
            <>
              <div className="flex gap-2">
                <p className="text-xl">
                  {products.price - products.discountPrice}{" "}
                </p>
                <p className="text-xl">THB</p>
              </div>
              <div className="flex gap-2 line-through text-red-400">
                <p>{products.price} THB</p>
              </div>
            </>
          ) : (
            <div className="flex gap-2">
              <p className="text-xl">{products.price}</p>
              <p className="text-xl">THB</p>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
