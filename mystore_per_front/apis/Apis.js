import axios from "axios";
export const BASE_URL = "http://localhost:8080";
export const CUSTOMER = "/customer";
export const PRODUCT = "/product";
export const GROUP="/group";


export const getCommonAxios = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};