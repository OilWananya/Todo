import React, { useState , useEffect } from "react";
import Input from "../components/Input/Input";
import Button from '../components/Button/Button';
import Authen from '../Services/authen';

const Form = (props) => {
  let { formModel } = props
  const fields = formModel.fields
  const [formModelState, setFormModelState] = useState(formModel)
  const [errorState , setErrorState ] = useState();

  useEffect(() => {
    setErrorState(fields)
  }, [fields])

  const handleSubmit = (event) => {
    event.preventDefault();
    let isFormError = false
    const fieldKeys = Object.keys(formModelState.fields)
    let formErrors = {}
    fieldKeys.forEach((fieldName) => {
      const field = formModelState.fields[fieldName]
      field.errors = []
      console.log(field.value)
      if (field.validation && field.validation.required && !field.value) {
        isFormError = true
        field.errors = ["This field is required"];
        formErrors[fieldName]= field.errors
      }
      if (field.validation && field.validation.minLength && field.value && field.value.length < field.validation.minLength) {
        isFormError = true
        field.errors = [`This field must be at least ${field.validation.minLength} characters`];
        formErrors[fieldName]= field.errors
      }
      if (field.validation && field.validation.maxLength && field.value && field.value.length > field.validation.maxLength) {
        isFormError = true
        field.errors = [`This field must be less than ${field.validation.maxLength} characters`];
        formErrors[fieldName]= field.errors
      }
    });
    Authen(formModel.fields)
    // onSubmit(formModel, formData, formErrors);
  }
  const renderInputs = (field) => {
    if (field.type === 'text' || field.type === 'password') {
      return (
        <Input
          require={field.validation.required}
          fieldModel={field}
          type={field.type}
          value={field.value}
          placeholder={field.label}
          name={field.name}
        >
        </Input>
      )
    }
  }
  return (
    <div>
      <form>
        {Object.keys(formModel.fields).map((fieldName, index) => {
          const field = fields[fieldName]
          console.log(field)
          return (
            <div key={index} >
              <div className="text-label"><span>{field.label}</span></div>
              <div>
                {renderInputs(field)}
              </div>
              <div style={{color: 'red'}} >
                {fields.errors}
              </div>
            </div>
          )
        })}
        <Button
          children="Login"
          type={'submit'}
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
