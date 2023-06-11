import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchAllProducts,
  removeProductById,
} from "../features/auth/slice/product-slice";
export default function AdminProductItem({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickEdit = () => {
    navigate(`/admin/edit/${products.id}`);
  };

  const handleClickDelete = async (id) => {
    await dispatch(removeProductById(id));
    await dispatch(fetchAllProducts());
  };

  return (
    <div className="w-full grid grid-cols-8 bg-slate-300  text-center items-center pb-4">
      <div className="flex justify-center items-center">
        <img
          src={products.img1}
          alt=""
          className="w-[100px] h-[100px] rounded-lg"
        />
      </div>
      <p>{products.productName}</p>
      <p>{products.price}</p>
      <p>{products.sizeS}</p>
      <p>{products.sizeM}</p>
      <p>{products.sizeL}</p>
      {/* <p>22</p> */}
      <button className="bg-slate-400 m-4 rounded-lg" onClick={handleClickEdit}>
        EDIT
      </button>
      <button
        className="bg-red-400 m-4 rounded-lg"
        onClick={() => handleClickDelete(products.id)}
      >
        DELETE
      </button>
    </div>
  );
}
