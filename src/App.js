import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor ='#200738'
     
    }
    
    else {
      setmode('light')
      document.body.style.backgroundColor ='white'
     
    }
  }
  return (
    <>
      < Navbar title='Textutils' aboutText='About-Me' mode={mode} toggleMode={toggleMode} />
      <TextForm heading='Enter the text to analyze below' mode={mode} />
      {/* <About heading='This is about Me' /> */}

    </>

  );
}

export default App;
