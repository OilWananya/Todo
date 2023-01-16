import Instance from '../instance';

const deleteTodo = (props) =>{
  console.log(props)
  Instance.delete(`/todos/${props.id}`)
  .then((res) => {
    if(res.status === 200){
      window.location.href ="/list-view"
    }
   },error=>{
     alert(error);
   });
}

export default deleteTodo;
