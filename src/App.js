import { useState } from 'react';
import './App.css';
import Naber from './component/Naber';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
// import About from './component/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode]=useState('light');

  const [alert, setAlert]=useState(null);  
  
  const showAlert =(message, type)=>{
       setAlert({
        msg: message,
        type:type
       })
       setTimeout(() => {
        setAlert(null);
       }, 2000);
  }
  const toggleMode=()=>{

   if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#1a426e';
    showAlert("Dark mode has been enable","success");

   } else{
    setMode('light');
   document.body.style.backgroundColor = 'white';
   showAlert("Light mode has been enable","success");
   }
  }
 
  return (
    <>
      {/* <BrowserRouter> */}
        <Naber title="TextUtilities" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
           <TextForm mode={mode} showAlert={showAlert} />
          {/* <Routes> */}
            {/* <Route path="/about" element={<About  mode={mode}/>}> */}
            {/* </Route> */}
            {/* <Route path="/home" element={<TextForm mode={mode} showAlert={showAlert}/>}> */}
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}
export default App; 
