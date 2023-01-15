import React from 'react';
import Form from '../../components/Form';
// const login = {
//   fields:{
//     username: {
//       name: 'username',
//       label: 'Username',
//       type: 'text',
//       value: '',
//       validation: {
//         required: true,
//         minLength: 0,
//         maxLength: 10
//       }
//     },
//     password: {
//       name: 'password',
//       label: 'Password',
//       type: 'password',
//       value: '',
//       validation: {
//         required: true,
//         minLength: 0,
//         maxLength: 10
//       }
//     }
//   } 
// }
function Login() {
  return(
    <div className="login">
      <Form/>
    </div>
  )
}
export default Login;