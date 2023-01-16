import React, { useState} from "react";
import moment from 'moment'
import ModalUpdate from '../components/ModalUpdate';
import getTodoById from "../Services/getTodoById";
import Modal from 'react-modal'
import Button from './Button/Button'
import deleteTodoById from '../Services/deleteTodoById'

const TodoList = (props) => {
    const todoLists = props.listModel
    const [isOpenModal , setIsOpenModal ] = useState(false)
    const [isOpenModalDelete ,setIsOpenModalDelete ]  = useState(false)
    const [idDelete , setIdDelete ] =  useState();
    const [form, setForm] = useState({})
    const getById = async (el) => {
        const res = await getTodoById(el)
        const updateForm = {
            fields: {
                title: {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    value: res.title,
                    createdAt: res.createdAt,
                    description: res.description,
                    updatedAt: res.updatedAt,
                    user_id: res.user_id,
                    _id: res._id,
                    validation: {
                        required: true,
                        minLength: 0,
                        maxLength: 10
                    }
                },
                description: {
                    name: 'description',
                    label: 'Description',
                    type: 'description',
                    value: res.description,
                    title: res.title,
                    createdAt: res.createdAt,
                    description: res.description,
                    updatedAt: res.updatedAt,
                    user_id: res.user_id,
                    _id: res._id,
                    validation: {
                        required: true,
                        minLength: 0,
                        maxLength: 10
                    }
                }
            }
        }
        setForm(updateForm)
        setIsOpenModal(true)
    }

    const deleteTodo = (id) => {
        setIdDelete(id)
        setIsOpenModalDelete(true);
    }
    const closeDeleteModal = ()=> {
        setIsOpenModalDelete(false)
        setIdDelete(null)
    }
    const handleDeleteItem = () => {
        deleteTodoById({id: idDelete})
    }
    return (
        <div>
            {todoLists.map((element, index) => {
                return (
                    <div key={index} className="content">
                        <div className="icon-close t-30">
                            <button type="button" onClick={() => deleteTodo(element._id)}>x</button>
                        </div>
                        <button
                            className="block-view"
                            onClick={() => getById(element)}
                            type="button"
                        >
                            <div className="header-list">
                                <div className="fw">{element.title}</div>
                                <div>
                                    {element.description}
                                </div>
                                <div className="todo-date">{moment(element.createdAt).format('DD-MM-YYYY')}</div>
                            </div>
                        </button>
                     
                    </div>
                    
                )
                
            })}
             <Modal
                isOpen={isOpenModalDelete}
                onRequestClose={closeDeleteModal}
                style={{content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                  },}}
                ariaHideApp={false}
            
            >
                <div>
                    {props.listModel.map((el,index) => {
                        if(idDelete === el._id){
                            return(
                                <div key={index}>Want delete {el.title}?</div>
                            )
                        }
                    })}
                </div>
                <div className="model-delete">
                    <Button 
                        children="Confirm"
                        type={'button'}
                        onClick={closeDeleteModal}
                    >Cancel</Button>
                    <Button 
                        children="Confirm"
                        type={'button'}
                        onClick={handleDeleteItem}>
                    </Button>
                </div>
            </Modal>
            { isOpenModal ?
            <ModalUpdate 
                form={form} 
                isOpen={isOpenModal}
            /> : null }
            
        </div>
    )
}

export default TodoList;