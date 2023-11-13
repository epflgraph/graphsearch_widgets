import axios from "axios";

import { URL_API } from "@/constants";

export const api = axios.create({
  baseURL: URL_API,
});
