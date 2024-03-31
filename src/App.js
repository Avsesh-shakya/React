import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (

    <div>
      < Navbar title ='Textutils' aboutText='About-Me'/>
      {/* <TextForm heading='Enter the text to analyze below'/> */}
      <About heading='This is about section'/>
    </div>
 
  );
}

export default App;
