import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode,setmode] = useState('dark');
  return (
    <>
        < Navbar title='Textutils' aboutText='About-Me' mode={mode} />
        <TextForm heading='Enter the text to analyze below'/>
        {/* <About heading='This is about Me' /> */}
      
    </>

  );
}

export default App;
