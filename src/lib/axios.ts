import axios from "axios";

import { URL_API } from "@/shared/constants";

export const api = axios.create({
  baseURL: URL_API,
  withCredentials: true,
});
