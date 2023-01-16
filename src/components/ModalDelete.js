import React , { useState , useEffect } from 'react';
import Modal from 'react-modal';
import deleteTodo from '../Services/deleteTodoById';
import Button from '../components/Button/Button';
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

const ModalDelete = (props) => {
    let { form, isOpen } = props
    const fields = form
    const fieldId = props.id
    const [formModelState, setFormModelState] = useState(form)
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [isClose ,setIsClose ]  = useState(false)
    const [errorState , setErrorState ] = useState();

    useEffect(() => {
      setErrorState(fields)
    //   openModal(true)
    }, [fields])
    useEffect(()=>{
        setIsOpen(isOpen)
    },[isOpen, props, props.isOpen])
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const isCloseModal = () => {
        console.log(true)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        deleteTodo(props)
    }
  
    return (
      <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            
            >
                <div>
                    {fields.map((el,index) => {
                        if(fieldId === el._id){
                            return(
                                <div>Want delete {el.title}?</div>
                            )
                        }
                    })}
                </div>
            </Modal>

      </div>
    );
}

export default ModalDelete;