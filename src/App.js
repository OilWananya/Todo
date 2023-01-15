import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import setAuthToken from './api/setAuthToken';

const token = localStorage.getItem("token");
 if (token) {
    setAuthToken(token);
 }else{
    // window.location.href = "/login";
 }


 const App = () => {
  return (
     <div className='App'>
        <Routes>
           <Route path="/" element={<Login />} />
        </Routes>
     </div>
  );
 };

// function App() {
//   return (
//     <div className="App">
//       {/* <Routes>
//         <Route path="/login" element={<Login />} />
//       </Routes> */}
//     </div>
//   );
// }

export default App;
