import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState('Enable Dark Mode');

  

    const showAlert = (message, type) =>{
      setAlert ({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2500);
    }
  const toggleMode = () =>{
    if (mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = 'rgb(7, 15, 43)';
     showAlert("Dark Mode has been enabled", "Success");
     setText("Enable Light Mode");
    }
      else {
       setMode('light');
       document.body.style.backgroundColor ='white';
       showAlert("Light Mode has been enabled", "Success");
       setText("Enable Dark Mode");
      }
    }
  return (
    <>
    <BrowserRouter>
    <Navbar title = "Sen-Tence" mode = {mode} toggleMode = {toggleMode} text = {text}></Navbar>
    {/* <Navbar ></Navbar> */}
    <Alert alert = {alert} mode = {mode}></Alert>
    <div className="container my-4">
      <Routes>
      <Route exact path='/' element = {<TextForm heading = "Enter the text to analyze" mode = {mode} showAlert = {showAlert}   ></TextForm>}></Route>
      <Route exact path = "/about" element = {<About/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}


export default App;
