//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';

//import {
//  BrowserRouter as Router,
//  Route,
//  Routes
//} from "react-router-dom";

//import { useState, useSyncExternalStore } from 'react';
import React, { useState } from 'react';

//import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
       setAlert({
        msg: message,
        type: type
       });
       setTimeout(() => {
        setAlert(null);
       }, 1500);
  };

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
//      setInterval(() => {
//        document.title = 'TextUtils is amazing ';
//      }, 2000);
//      setInterval(() => {
//        document.title = 'Install TextUtils now ';
//      }, 1500);

    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }
};
  return (
<>
{/*<Router>*/}
<Navbar title= "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />

<Alert alert={alert}/>
<div className= "container my-3">
{/*<Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
      
    </Routes>*/}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>

    </div>
    {/*</Router>*/}
{/*About/*/}

</>

 );
}

export default App;
