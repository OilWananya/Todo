import Instance from '../instance';

const updateTodo = (props) =>{
  const data = { 
    title: props.title.value,
    description: props.description.value
  };
  Instance.put(`todos/${props.title._id}`, data)
  .then((res) => {
     if(res.status === 200){
      window.location.href = "/list-view";
     }
   },error=>{
     alert(error);
   });
}

export default updateTodo;
