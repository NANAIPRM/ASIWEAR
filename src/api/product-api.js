import axios from "./axios";

const configWithAuthorization = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessItem"),
  },
};

export const addProduct = (product) => {
  return axios.post("/product/addProduct", product, configWithAuthorization);
};

export const getAllProducts = () =>
  axios.get("/product/allProduct", configWithAuthorization);

export const getProductById = (id) =>
  axios.get(`/product/${id}`, configWithAuthorization);

export const deleteProductById = (id) =>
  axios.delete(`/product/${id}`, configWithAuthorization);

export const editProductById = (id, input) =>
  axios.patch(`/product/${id}`, input, configWithAuthorization);
