import React , { useState , useEffect } from 'react';
import Instance from '../instance';
import TodoList from '../components/TodoList';
import Modal from '../components/Modal';

const createForm = {
  fields:{
    title: {
      name: 'title',
      label: 'Title',
      type: 'text',
      value: '',
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
      value: '',
      validation: {
        required: true,
        minLength: 0,
        maxLength: 10
      }
    }
  } 
}

function ListView () {
  const [Lists, setLists] = useState(null);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    Instance.get(`/todos`)
    .then((res) => {
      if(res.status === 200){
        setLists(res.data);
      }
    },error=>{
      alert(error);
    });
  }

  return(
    <div className="list-views">
      {/* <h1>ListView</h1> */}
      { Lists ? 
        <TodoList 
          listModel={Lists}
        /> : null
      }
      <Modal 
        form={createForm}
      />
    </div>
  )
}
export default ListView;