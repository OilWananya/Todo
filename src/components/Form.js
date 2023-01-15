import React, { useState } from "react";
import Input from "../components/Input/Input";
import Button from '../components/Button/Button';
import Authen from '../api/Services/Authen';
// import Button from 'react-bootstrap/Button';

const Form = () => {
  const [inputValue, setInputValue] = useState(
  { 
    username: "", password: "" 
  });
  const { username, password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () =>{
    const data = {
      "username" : inputValue.username,
      "password" : inputValue.password
    }
    Authen(data)
    console.log("data submit" , data)
  }

  return (
    <div>
      <form>
        <Input
          type="text"
          value={username}
          placeholder="Username"
          label="username"
          name="username"
          onChange={handleChange}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          label="password"
          name="password"
          onChange={handleChange}
        />
        <Button
          children="Login"
          onClick={handleSubmit}
        >
        </Button>
          {/* <Button color="primary">Add</Button>{" "}
          <Button color="secondary">Cancel</Button> */}
      </form>
     </div>
  );
};

export default Form;
