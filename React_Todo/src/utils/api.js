import axios from 'axios';
import { API_BASE_URL } from "../config";

export const fetcher = (URL) =>
  axios.get(API_BASE_URL + URL).then((res) => res.data);
