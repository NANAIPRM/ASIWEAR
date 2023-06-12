export default function OrderItem({ carts }) {
  return (
    <div className="flex gap-20  justify-center mt-10">
      <div className="">
        <img
          src={carts.Product.img2}
          alt=""
          className="w-[250px] h-[200px] shadow-lg rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-4 w-full  justify-around">
        <div className="flex justify-between w-full">
          <div>{carts.Product.productName}</div>
          <div className="flex gap-4">
            {carts.Product.discountPrice !== 0 ? (
              <>
                <p className="text-red-400">
                  {carts.Product.price - carts.Product.discountPrice}
                </p>
                <p className=" line-through">{carts.Product.price}</p>
              </>
            ) : (
              <p className="text-red-400">{carts.Product.price}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>Q'ty</div>
          <div className="flex gap-5 ">
            <span className="text-red-400">{carts.quantity}</span>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>SIZE</div>
          <div className="flex gap-5 ">
            <button>{carts.size}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
