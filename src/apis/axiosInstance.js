import axios from "axios";

import { BASE_URL, ADMIN_BASE_URL, HTTP_STATUS_CODE } from "@apis/apiConstants";
const GOOGLE_LOGIN_URL = import.meta.env.VITE_GOOGLE_LOGIN_URL;
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

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (
      (error.response.status === HTTP_STATUS_CODE.UNAUTHORIZED &&
        error.response.data.message === "쿠키에 엑세스 토큰이 없습니다.") ||
      error.response.data.message === "리프레시 토큰이 만료되었습니다."
    ) {
      location.href = GOOGLE_LOGIN_URL;
    }
    return Promise.reject;
  }
);

adminInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (
      (error.response.status === HTTP_STATUS_CODE.UNAUTHORIZED &&
        error.response.data.message === "쿠키에 엑세스 토큰이 없습니다.") ||
      error.response.data.message === "리프레시 토큰이 만료되었습니다."
    ) {
      location.href = GOOGLE_LOGIN_URL;
    }
    return Promise.reject;
  }
);
