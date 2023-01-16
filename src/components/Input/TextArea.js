import React , { useState }  from "react";

const TextArea = ({  fieldModel , value, label, name, placeholder, type, onCustomChange , require , row }) => {
  const [textAreaVal, settextAreaVal] = useState(value);
  const onChange = (event) => {
    value = event.target.value
    fieldModel.value = value
    settextAreaVal(value)
  }

  return (
  <div className="form-group">
    <div>
      {label && <label htmlFor="input-field">{label}</label>}
    </div>
    <textarea
      required={require}
      type={type}
      name={name}
      rows={row}
      value={textAreaVal}
      className="form-control w-100"
      placeholder={placeholder}
      onChange={onCustomChange || onChange}
    />
  </div>
);
}
export default TextArea;