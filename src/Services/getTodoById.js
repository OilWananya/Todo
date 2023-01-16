import Instance from '../instance';
import ModalCreate from '../components/Modal';
import { Modal } from 'bootstrap';

const getTodoById = async (props) =>{
    let updateForm = {}
    const res = await Instance.get(`todos/${props._id}`)
    .then((res) => {
    if(res.status === 200){
        return res.data
    }
    ModalCreate(updateForm)
   },error=>{
     alert(error);
   });
   return res
}

export default getTodoById;
