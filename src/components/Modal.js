import React , { useState , useEffect } from 'react';
import Modal from 'react-modal';
import Input from '../components/Input/Input'
import TextArea from './Input/TextArea';
import Button from './Button/Button';
import createTodo from '../Services/createTodo';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const ModalCreate = (props) => {
    let { form } = props
    const fields = form.fields
    const [formModelState, setFormModelState] = useState(form)
    const [errorState , setErrorState ] = useState();
  
    useEffect(() => {
      setErrorState(fields)
    }, [fields])
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const renderInputs = (field) =>{
        if(field.name === "title" ){
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

    const renderTextArea = (field) =>{
        if(field.name === "description"){
            return(
                <TextArea
                    require={field.validation.required}
                    fieldModel={field}
                    type={field.type}
                    value={field.value}
                    placeholder={field.label}
                    name={field.name}
                    row="5"
                >
                </TextArea>
            )
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        createTodo(formModelState.fields)
    }
  
    return (
      <div>
        <button onClick={openModal}>+ Create</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          
        >
            <div className="icon-close">
                <button onClick={closeModal}>x</button>
            </div>
            <form>
                {Object.keys(form.fields).map((fieldName,index) => {
                    const fieldModel = fields[fieldName]
                    return(
                        <div key={index}>
                            <label>{fieldModel.label}</label>
                            <div>{renderInputs(fieldModel)}</div>
                            <div>{renderTextArea(fieldModel)}</div>
                        </div>
                    )
                })}
                <div className='text-center'>
                    <button>Cancel</button>
                    <Button 
                        children="Create"
                        type={'submit'}
                        onClick={handleSubmit}>
                    </Button>
                </div>
            </form>
        </Modal>
      </div>
    );
}

export default ModalCreate;