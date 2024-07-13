import axios from "axios";

import { BASE_URL, ADMIN_BASE_URL } from "@apis/apiConstants";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Credentials": "true",
  },
  withCredentials: true, //요청에 쿠키담기
});

export const adminInstance = axios.create({
  baseURL: ADMIN_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});
