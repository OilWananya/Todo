import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import ListView from './Pages/ListView';
import setAuthToken from './api/setAuthToken';

const token = localStorage.getItem("token");
 if (token) {
    setAuthToken(token);
 }

 const App = () => {
  return (
     <div className='App'>
        <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/list-view" element={<ListView/>}/>
        </Routes>
     </div>
  );
 };

export default App;
