/* eslint-disable no-unused-vars */
import axios from "axios";
const baseURL = "https://api.themoviedb.org/";
const api_key = "5b86e1eed20a73b8766e07d21a423011";
const getPopular = axios.get(
  "https://api.themoviedb.org/3/movie/popular?api_key=5b86e1eed20a73b8766e07d21a423011"
);

export default {
  getPopular,
};
