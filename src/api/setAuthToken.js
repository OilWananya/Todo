import axios from 'axios';
export const setAuthToken = token => {
   if (token) {
       axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
   }
   else
       delete axios.defaults.headers.common["Authorization"];
}
export default setAuthToken;