import { useState } from 'react';
import './App.css';
import Navbar from './navbar'; 
import Allbtnn from './allbtn';
import Alert from './alert';

function App() {
  const [textareaa, setTextarea] = useState("Enter your text here");
  const [alet, setAlet] = useState("none");
  const [aletmsg, setAletMsg] = useState("none");

  const handleTextareaChange = (event) => {
    setTextarea(event.target.value);
  };

  const forUpperCase = () => {
    setTextarea(textareaa.toUpperCase());
    showAlert("Text converted to Uppercase");
  };

  const forLowerCase = () => {
    setTextarea(textareaa.toLowerCase());
    showAlert("Text converted to Lowercase");
  };

  const textCopy = () => {
    const copyText = document.getElementById("tetxtt");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    showAlert("Text copied");
  };

  const showAlert = (message) => {
    setAletMsg(message);
    setAlet("block");
    setTimeout(() => {
      setAlet("none");
    }, 600);
  };

  return (
    <>
      <Navbar />
      <Alert clsname={alet} message={aletmsg} />
      <div className='maindeiv'>
        <textarea
          id='tetxtt'
          className='txtarea'
          style={{
            marginTop: "10px",
            color: "#212529",
            backgroundColor: 'white'
          }}
          onChange={handleTextareaChange}
          value={textareaa}
        />
        <div style={{ width: "100%", height: "10%", marginTop: "10px", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "20%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <Allbtnn txthead={'Upper Case'} onClick={forUpperCase} bgcolorr={'light'} />
            <Allbtnn txthead={'Lower Case'} onClick={forLowerCase} bgcolorr={'light'} />
            <Allbtnn txthead={'Copy'} onClick={textCopy} bgcolorr={'light'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
