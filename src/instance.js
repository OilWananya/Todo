import axios from "axios";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
export default axios.create({
  baseURL: `https://candidate.neversitup.com/todo/` , 
  headers : {
    "Content-Type": "application/json"
  }
});