import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState('null');
  const showAlert=(message,type)=>{
           setAlert({
            msg : message,
            type : type
           })
           setTimeout(()=>{
            setAlert(null);
           },1500);
  }
  const toggleMode=()=>{
  if(mode==='light'){
    // document.body.style.backgroundColor="rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))"
    document.body.style.backgroundColor="black"
    setMode('dark')
    showAlert("Dark mode has been enabled" , "success");
  }
  else if(mode==='dark'){
    document.body.style.backgroundColor="white"
    setMode('light')
    showAlert("Light mode has been enabled" , "success");
  }
  }
  return (
  <>
<Navbar title="TextUtils" home="Home" utilities="Utilities" mode={mode} toggleMode={toggleMode}/>
 {alert!=null ? <Alert alert={alert}/>:<div/>}
<div className="container" >
<TextForm heading="Enter the text to analyse" showAlert={showAlert} mode={mode} />
</div>
</>
  );
}
export default App;
