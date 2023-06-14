import axios from "./axios";

const configWithAuthorization = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessItem"),
  },
};

export const createOrder = (input) => {
  return axios.post("order/create", input, configWithAuthorization);
};

export const getAllOrder = () => {
  return axios.get("order/allOrder");
};

export const UpdateStatus = (id) => {
  return axios.patch(`order/update/${id}`, configWithAuthorization);
};

export const getAllOrderByUserId = () => {
  return axios.get(`order/myorder`, configWithAuthorization);
};

export const getOrderByOrderId = (id) => {
  return axios.get(`order/${id}`, configWithAuthorization);
};
