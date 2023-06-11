import axios from "./axios";

const configWithAuthorization = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessItem"),
  },
};

export const createCart = (id, input) => {
  return axios.post(`/cart/create/${id}`, input, configWithAuthorization);
};
