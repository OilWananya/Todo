import Instance from '../instance';

const createTodo = (props) =>{
  const data = { 
    title: props.title.value,
    description: props.description.value
  };
  Instance.post(`todos`, data)
  .then((res) => {
     if(res.status === 200){
      window.location.href = "/list-view";
     }
   },error=>{
     alert(error);
   });
}

export default createTodo;
