export default function AdminOrderItem({ orderitem }) {
  return (
    <div className="flex justify-between  items-center w-full gap-2.5">
      <p>{orderitem.quantity}</p>
      <p>{orderitem.Product.productName}</p>
      <p>{orderitem.size}</p>
    </div>
  );
}
