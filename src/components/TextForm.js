// import React,{useState} from 'react'
// // import PropTypes from 'prop-types';
// export default function TextForm(props){
//   const [text,setText] = useState("Enter text here");
//   const handleUpClick=()=>{
//     console.log("UpperCase was clicked"+text);
//     let newText = text.toUpperCase();
//     setText(newText);
//     props.showAlert("Converted to UpperCase" , "success");
//   }
//   const handleOnChange=(event)=>{
//     console.log("On change");
//     setText(event.target.value);
//   }
//   const handleClearClick=()=>{
//     console.log("on clear");
//     setText("");
//     props.showAlert("Text has been cleared!" , "success");

//   }
//   const handleLowClick=()=>{
//      console.log("LowerCase was clicked"+text);
//     let newText = text.toLowerCase();
//     setText(newText);
//     props.showAlert("Converted to LowerCase" , "success");

//   }
// return(
//       <>
//         <form>
//             <h1 style={{color:props.mode==='light'?'black':'white' }}>{props.heading}</h1>
//   <div className="form-group" style={{color:props.mode==='light'?'black':'white' }}>
//     <textarea className="form-control  " id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'black':'white' ,color:props.mode==='light'?'white':'black' }} value={text}></textarea>
//   </div>
// </form>
// <button className='btn btn-primary my-2' onClick={handleUpClick}>Convert to UpperCase</button>
// <button className='btn btn-primary my-2 m-2' onClick={handleLowClick}>Convert to LowerCase</button>
// <button className='btn btn-primary my-2 ' id="clear" onClick={handleClearClick}>Clear</button>
// <div className="conatiner" style={{color:props.mode==='light'?'black':'white' }}>Characters Count = {text.length}<br/>Words Count= {text.trimEnd().split(" ").length } <br/>
// Time to read = {((text.split(" ").length * 0.010) -0.01).toFixed(2) } minutes<br/>
// <h3>Text preview <br /></h3>
// {text}
// </div>
// </>
//     )
// }

import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text has been cleared!", "success");
  };

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  return (
    <>
      <form>
        <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
        <div className="form-group" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}
            value={text}
          ></textarea>
        </div>
      </form>
      <button className='btn btn-primary my-2' onClick={handleUpClick}>Convert to UpperCase</button>
      <button className='btn btn-primary my-2 m-2' onClick={handleLowClick}>Convert to LowerCase</button>
      <button className='btn btn-primary my-2 ' id="clear" onClick={handleClearClick}>Clear</button>
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        Characters Count = {text.length}<br />
        Words Count = {text.trim().split(/\s+/).filter(word => word !== '').length} <br />
        Time to read = {((text.trim().split(/\s+/).filter(word => word !== '').length * 0.010) - 0.01).toFixed(2)} minutes<br />
        <h3>Text preview <br /></h3>
        {text}
      </div>
    </>
  );
}
