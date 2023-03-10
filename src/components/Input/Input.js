import React , { useState } from "react";

const Input = ({  fieldModel, value, label, name, placeholder, type, onCustomChange , require }) => {
  const [inputValue, setinputValue] = useState(value);
  const onChange = (event) => {
    value = event.target.value
    fieldModel.value = value
    setinputValue(value)
  }

  return (
  <div className="form-group">
    <div>
      {label && <label htmlFor="input-field">{label}</label>}
    </div>
    <input
      required={require}
      type={type}
      name={name}
      value={inputValue}
      className="form-control w-100 h-30"
      placeholder={placeholder}
      onChange={onCustomChange || onChange}
    />
  </div>
);
}
export default Input;