import axios from 'axios';
import { API_BASE_URL } from '../config';

export const fetcher = (url) =>
  axios.get(API_BASE_URL + url).then((res) => res.data);
