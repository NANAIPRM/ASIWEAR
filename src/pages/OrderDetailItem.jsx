export default function OrderDetailItem({ OrderDetailItem }) {
  // console.log(OrderDetailItem);
  return (
    <div className="flex gap-20  justify-center mb-10">
      <div className="">
        <img
          src={OrderDetailItem?.Product?.img2}
          alt=""
          className="w-[250px] h-[200px] shadow-lg rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-4 w-full  justify-around">
        <div className="flex justify-between w-full">
          <div>{OrderDetailItem?.Product?.productName}</div>
          {OrderDetailItem?.Product?.discountPrice ? (
            <div className="flex gap-4 ">
              {OrderDetailItem?.Product?.price -
                OrderDetailItem?.Product?.discountPrice}{" "}
              THB
            </div>
          ) : (
            <div className="flex gap-4 ">
              {OrderDetailItem?.Product?.price} THB
            </div>
          )}
        </div>
        <div className="flex justify-between w-full">
          <div>Q'ty</div>
          <div className="flex gap-5 ">
            <span className="">{OrderDetailItem?.quantity}</span>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>{OrderDetailItem?.size}</div>
          <div className="flex gap-5 ">
            <button>S</button>
          </div>
        </div>
      </div>
    </div>
  );
}
