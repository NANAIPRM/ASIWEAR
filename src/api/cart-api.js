import axios from "./axios";

const configWithAuthorization = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessItem"),
  },
};

export const createCart = (id, input) => {
  return axios.post(`cart/create/${id}`, input, configWithAuthorization);
};

export const getAllCartByUserId = () => {
  return axios.get("cart/allcart", configWithAuthorization);
};

export const deleteCartItem = (id) => {
  return axios.delete(`cart/delete/${id}`, configWithAuthorization);
};

export const updateCartItem = (id, input) => {
  return axios.patch(`cart/update/${id}`, input, configWithAuthorization);
};
