import axios, { AxiosError } from "axios";

import { URL_API } from "@/constants";

export const api = axios.create({
  baseURL: URL_API,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error(error.response?.data || error);
    return Promise.reject(error);
  }
);
