import React, { useState } from 'react';
import Form from '../components/Form';
const loginForm = {
  fields:{
    username: {
      name: 'username',
      label: 'Username',
      type: 'text',
      value: '',
      validation: {
        required: true,
        minLength: 0,
        maxLength: 10
      }
    },
    password: {
      name: 'password',
      label: 'Password',
      type: 'password',
      value: '',
      validation: {
        required: true,
        minLength: 0,
        maxLength: 10
      }
    }
  } 
}
function Login() {
  const[ username, setUsername] = useState()
  const[ password, setPassword] = useState()
  return(
    <div className="login">
      {/* <h1>LOGIN</h1> */}
      <Form 
        formModel={loginForm}
      />
    </div>
  )
}
export default Login;