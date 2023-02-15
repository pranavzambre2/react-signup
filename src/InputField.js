import React, { useState } from "react";
import "./subComponents.css"



const InputField = (props) => {

  var [textValue, setTextValue] = useState("");
  const verify = (e) => {
    setTextValue(e.target.value);
    if (props.name !== "Choose your skills") {


      props.validate(e.target.value, props.field);

    }
  }

  const validateEnterKey = (e) => {
    if (e.key === 'Enter') {
      console.log("Enter key pressed");
      if (props.name === "Choose your skills") {
        var skill = textValue;
        setTextValue("");
        props.KeyDown(skill);


      }
    }

  }


  return (

    <div className="btn-conatiner" >
      <input onKeyDown={validateEnterKey} type={props.type} onChange={verify} placeholder={props.name} className='inp' value={textValue} />
    </div >

  )
}

export default InputField;