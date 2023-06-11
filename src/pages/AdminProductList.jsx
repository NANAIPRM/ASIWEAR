import AdminProductItem from "./AdminProductItem";

export default function AdminProductList({ products }) {
  return (
    <>
      <div className="">
        {products.map((el) => (
          <AdminProductItem key={el.id} products={el} />
        ))}
      </div>
      <hr />
    </>
  );
}
