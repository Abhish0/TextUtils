import React from 'react'

function Alert(props) {
    const capitalize= (word)=>{
        if(word!=null){
        const lower = word.toLowerCase();
        
       return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
        else{
            return word;
        }
    }
  return (
   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     {props.alert!=null?<div><strong>{capitalize(props.alert.type)}:</strong>{props.alert.msg}</div>:<div/>}
    </div>
  )
}

export default Alert
