import axios from "axios";
import { BASE_URL } from "../constants";
axios.defaults.baseURL = BASE_URL;

const setHeader = () => {
  let token = "";
  typeof localStorage !== "undefined" &&
    (token = `${localStorage.getItem("token")}`);

  axios.defaults.headers.common["token"] = token;
};

export const request = async (method, endPoint, data, isImageData = false) => {
  try {
    let headerDict = {};
    if (isImageData) {
      headerDict = {
        accept: "application/json",
        "Content-Type": "multipart/form-data",
      };
    } else {
      headerDict = {
        "Content-Type": "application/json",
      };
    }

    setHeader();
    const res = await axios({
      method: method,
      url: endPoint,
      ...(data && { data }),
      headers: headerDict,
    });
    return res.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
export const logOut = () => {
  localStorage.clear();
};
