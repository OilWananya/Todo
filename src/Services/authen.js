import Instance from '../instance';

const Auth = (props) =>{
  const data = { 
    username: props.username.value,
    password: props.password.value
  };
  Instance.post(`users/auth`, data)
  .then((res) => {
     if(res.status === 200){
      localStorage.setItem("token", res.data.token);
      window.location.href = "/list-view";
     }
   },error=>{
     alert("Username or Password is incorrect");
   });
}

export default Auth;
