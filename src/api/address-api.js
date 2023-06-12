import axios from "axios";

const configWithAuthorization = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessItem"),
  },
};

export const addAddress = (input) => {
  return axios.post("address/create", input, configWithAuthorization);
};
