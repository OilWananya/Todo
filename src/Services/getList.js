import Instance from '../instance';

const getList = () =>{
  Instance.get(`/todos`)
  .then((res) => {
    if(res.status === 200){
      console.log(res.data)
    }
   },error=>{
     alert(error);
   });
}

export default getList;
