import axios from 'axios';
import { axiosRequest } from '../setApi';
const Auth = (props) =>{
    axios.post(axiosRequest + `/users/auth`, {
        props
    })
   .then((res) => {
     // then print response status
    console.log(res)
    //  this.setState({ responseArray: res.data });
    //  this.resetFile();
   },error=>{
     alert(error);
   });
}

export default Auth;