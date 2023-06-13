import axios from "axios";

const configWithAuthorization = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessItem"),
  },
};

export const addAddress = (input) => {
  return axios.post("address/create", input, configWithAuthorization);
};

export const getAddressByUserId = () => {
  return axios.get("address/me", configWithAuthorization);
};
