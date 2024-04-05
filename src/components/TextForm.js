import React, { useState } from 'react'
export default function TextForm(props) {

  // let myStyle = {
  //   color: 'black',
  //   backgraundColor: 'black',

  // }
  let button = { margin: '5px 10px' }



  const handleUpClick = () => {
    // console.log("upper")
    let newText = text.toUpperCase();
    setText(newText)

  }
  const handleLowClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2)

  }
  const handleCopyClick = () => {
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);

  }     
  
   

      
  const handleOnChange = (event) => {
    console.log("upper")
    setText(event.target.value)

  }


  const [text, setText] = useState("")
  // setText('new text')
  return (
    <>
      <center>
        <div >
          <div className='container' style={{color: props.mode==='light'?'black':'white'}} >
            <h1>{props.heading} </h1>
            <div className="textbox">
              <textarea name="text" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#200738',color:props.mode=='dark'?'white':'black' }} cols="86" rows="10"></textarea>
            </div>

            <button type="button" class="btn btn-outline-primary" onClick={handleUpClick} style={button}>Convert to UpperCase</button>
            <button type="button" class="btn btn-outline-primary" onClick={handleLowClick} style={button}>Convert to LowarCase</button>
            <button type="button" class="btn btn-outline-primary" onClick={handleCopyClick} style={button}>Copy Text</button>
            <button type="button" class="btn btn-outline-primary" style={button}>Sumbit</button>
           
            <div className="container" style={{color:props.mode==='light'?'black':'white'}} >
              <h1>Your Text Summary</h1>
              <p>{text.split(" ").length} words and {text.length} Charecters</p>
              <h1>preview</h1>
              <p>{text.length>0?text:'Your Enter text here'}</p>
            </div>
          </div>
        </div>
      </center>
    </>
  )
}
