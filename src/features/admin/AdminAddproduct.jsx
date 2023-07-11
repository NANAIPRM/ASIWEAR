import AdminSidebar from "../../layouts/AdminSidebar";
import LabelForm from "../auth/components/LabelForm";
import InputForm from "../auth/components/InputForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addProducts } from "../slice/product-slice";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";

const initialInput = {
  productName: "",
  price: "",
  discountPrice: "",
  description: "",
  sizeS: 0,
  sizeM: 0,
  sizeL: 0,
  img1: null,
  img2: null,
  img3: null,
  gender: "male",
};

export default function AdminAddProduct() {
  const [input, setInput] = useState(initialInput);
  const loading = useSelector((state) => state.product.loading);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("productName", input.productName);
      formData.append("price", input.price);
      formData.append("discountPrice", input.discountPrice);
      formData.append("description", input.description);
      formData.append("sizeS", input.sizeS);
      formData.append("sizeM", input.sizeM);
      formData.append("sizeL", input.sizeL);
      formData.append("img1", input.img1);
      formData.append("img2", input.img2);
      formData.append("img3", input.img3);
      formData.append("gender", input.gender);

      if (
        input.productName &&
        input.price &&
        input.discountPrice &&
        input.description &&
        input.img1 &&
        input.img2 &&
        input.img3 &&
        input.gender
      ) {
        await dispatch(addProducts(formData)).unwrap();
        toast.success("Add product successfully");
      } else {
        toast.error("Please fill in all required fields");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex  max-h-max">
        <AdminSidebar />
        <div className="flex w-[90vw] mt-5 h-full bg-green-200 justify-center items-center p-2 border-solid border-2 border-black">
          <div className="w-full flex items-center">
            <form
              className="h-full flex flex-col gap-5 justify-center w-full"
              onSubmit={handleSubmit}
              id="formproduct"
              encType="multipart/form-data"
            >
              <div className="w-full flex items-end  gap-10 h-full">
                <div className="flex gap-2 text-center items-center">
                  <label htmlFor="img1">IMG 1:</label>
                  <input
                    type="file"
                    id="img1"
                    name="img1"
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="flex gap-2 text-center items-center">
                  <label htmlFor="img2">IMG 2:</label>
                  <input
                    type="file"
                    id="img2"
                    name="img2"
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="flex gap-2 text-center items-center">
                  <label htmlFor="img3">IMG 3:</label>
                  <input
                    type="file"
                    id="img3"
                    name="img3"
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <LabelForm id="productName" text="Product Name" />
              <div>
                <InputForm
                  id="productName"
                  name="productName"
                  value={input.productName}
                  onChange={handleChangeInput}
                />
              </div>

              <LabelForm id="description" text="Product Description" />
              <div>
                <InputForm
                  id="description"
                  name="description"
                  value={input.description}
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

              <LabelForm id="discountPrice" text="Product Discount Price" />
              <div>
                <InputForm
                  name="discountPrice"
                  id="discountPrice"
                  value={input.discountPrice}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-10">
                STOCK SIZE
                <br />
                <div className="flex items-center gap-5">
                  <div className="pt-2">
                    <LabelForm id="sizeS" text="S" />
                  </div>
                  <div>
                    <InputForm
                      name="sizeS"
                      id="sizeS"
                      value={input.sizeS}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="pt-2">
                    <LabelForm id="sizeM" text="M" />
                  </div>
                  <div>
                    <InputForm
                      name="sizeM"
                      id="sizeM"
                      value={input.sizeM}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="pt-2">
                    <LabelForm id="sizeL" text="L" />
                  </div>
                  <div>
                    <InputForm
                      name="sizeL"
                      id="sizeL"
                      value={input.sizeL}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="pt-2">
                    <label htmlFor="gender" className="block">
                      GENDER
                    </label>
                  </div>
                  <select
                    id="gender"
                    name="gender"
                    className="rounded-lg p-1 w-1/2 mt-2 border-soild border-2 border-black"
                    value={input.gender}
                    onChange={handleChangeInput}
                  >
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                  </select>
                </div>
              </div>

              <button className="text-xl text-white p-2 rounded-lg bg-black">
                ADD PRODUCT
              </button>

              <Link
                to={"/admin/product"}
                className="text-xl text-white p-2 rounded-lg bg-red-500 text-center"
              >
                BACK
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
