import axios from "axios";
export const axiosRequest = axios.create({
  baseUrl: "https://candidate.neversitup.com/todo/"
});