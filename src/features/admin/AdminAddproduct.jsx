import Headers from "../../layouts/Headers";
import AdminSidebar from "../../layouts/AdminSidebar";
import LabelForm from "../auth/components/LabelForm";
import InputForm from "../auth/components/InputForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialInput = {
  name: "",
  desciption: "",
  size: "",
  price: "",
  discountPrice: "",
  stock: "",
};
export default function AdminAddProduct() {
  const [input, setInput] = useState(initialInput);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/product");
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Headers />
      <div className="flex mt-[-20px] h-[90vh]">
        <AdminSidebar />
        <div className="flex w-[90vw] bg-green-200  justify-center items-center p-2 border-solid border-2 border-black ">
          <div className="w-full  flex items-center   ">
            <form
              action=""
              className="h-full flex flex-col gap-5 justify-center w-full"
            >
              <div className="w-full flex justify-center items-center gap-10 h-full">
                <div>
                  <label id="img1">IMG 1:</label>
                  <InputForm
                    type="file"
                    id="img1"
                    name="img1"
                    accept="image/png, image/jpeg"
                  />
                </div>
                <div>
                  <label id="img2">IMG 2:</label>
                  <InputForm
                    type="file"
                    id="img2"
                    name="img2"
                    accept="image/png, image/jpeg"
                  />
                </div>
                <div>
                  <label id="img1">IMG 3:</label>
                  <InputForm
                    type="file"
                    id="img3"
                    name="img3"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <LabelForm id="productname" text="Product Name" />
              <div>
                <InputForm
                  id="productname"
                  onChange={handleChangeInput}
                  name="name"
                  value={input.name}
                />
              </div>
              <LabelForm id="productdes" text="Product Desciption" />
              <div>
                <InputForm
                  id="productdes"
                  name="desciption"
                  value={input.desciption}
                  onChange={handleChangeInput}
                />
              </div>
              <LabelForm id="size" text="Product Size" />
              <div>
                <InputForm
                  name="size"
                  id="size"
                  value={input.size}
                  onChange={handleChangeInput}
                />
              </div>
              <LabelForm id="price" text="Product Price" />
              <div>
                <InputForm
                  name="price"
                  id="price"
                  value={input.price}
                  onChange={handleChangeInput}
                />
              </div>
              <LabelForm id="discountprice" text="Product Discount Price" />
              <div>
                <InputForm
                  name="discountPrice"
                  id="discountprice"
                  value={input.discountPrice}
                  onChange={handleChangeInput}
                />
              </div>

              <button className="text-xl text-white p-2 rounded-lg bg-black">
                ADD PRODUCT
              </button>
              <button
                className="text-xl text-white p-2 rounded-lg bg-red-500"
                onClick={handleClick}
              >
                BACK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
