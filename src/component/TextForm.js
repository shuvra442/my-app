import React,{useState} from 'react'

export default function TextForm(props) {

  const upperCase= () => {
    console.log("Yes it's work")
    let setText = text.toUpperCase();
    updateText(setText)
    props.showAlert("Upper case enable","success");
  } 
  const lowerCase = () => {
    console.log("Yes it's work")
    let setText = text.toLowerCase();
    updateText(setText)
    props.showAlert("Lower case enable","success");
  } 

  const ClearText = () => {
    console.log("Yes it's work")
    let setText ='';
    updateText(setText)
    props.showAlert("Clear all text","success");
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy text","success");
}

const handleExtraSpaces =()=>{
  let setText =text.split(/[ ]+/);
  updateText(setText.join(" "));
  props.showAlert("Remove Extra Spaces","success");
  };

  const handelOnChange = (event) => {
    // it's function basically used to write text to the text-box
    updateText(event.target.value)
  }



 const [text, updateText]=useState('')
  return (
    <>
      <div className='container' style={{color : props.mode ==='dark'? 'white':'#1a426e'}}>
        <h1>Enter any text </h1>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handelOnChange} style={{backgroundColor : props.mode ==='dark'? 'grey':'white',color : props.mode ==='dark'? 'white':'#1a426e'}}  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-2" onClick={upperCase}>ConverToUpper</button>

        <button className="btn btn-primary mx-3 my-2" onClick={lowerCase}>ConverToLower</button>

        <button className="btn btn-primary mx-3 my-2" onClick={ClearText}>Clear Text</button>

        <button className="btn btn-primary mx-3 my-2" onClick={copyText}>Copy Text</button>

        <button className="btn btn-primary mx-3 my-2" onClick={handleExtraSpaces}> Remove space </button>

      </div>

      <div className="container" style={{color : props.mode ==='dark'? 'white':'#1a426e'}}>
        <h1>Your text summary </h1>
        <p>{text.split(" ").length}Word and {text.length} Character </p>
        <p>{0.0008 * text.split(" ").length}Miniute Read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : 'Enter the text above'}</p>
      </div>


    </>
  )
}
