import React  from "react";

const Input = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    <div>
      {label && <label htmlFor="input-field">{label}</label>}
    </div>
    <input
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default Input;

// import React,  { useState , useEffect } from 'react';

// const Input = (props) => {
//     const [data,setData] = useState(props.fieldValue);

//     useEffect(() => {
//         console.log(data)
//     },[setData]);

//     const handleChange = event => {
//         setFields(event, field);
    
//         if (typeof onChange === "function") {
//           onChange({
//             ...field,
//             value: event.target.value
//           });
//         }
//     };

//     const handleChange = (e) => {
//         const { name , value } = e.target;
//         setData((data) => ({
//             ...data,
//             [name]: value
//         }));
//     }
    
//     return(
//         <div>
//             <label>{data.label}</label>
//             <input
//                 type={data.type}
//                 name={data.name}
//                 onChange={handleChange}
//             ></input>
//         </div>
//     )
// }
// export default Input;