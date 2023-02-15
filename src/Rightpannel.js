import React, { useState } from "react";
import InputField from "./InputField"
import "./components.css"
import Chip from "./Chip"

const Rightpannel = () => {
  var [buttonIsEnable, setButtonIsEnable] = useState(false);
  var [chipData, setChipData] = useState([
    "HTML", "CSS", "JS"
  ]);

  var [val, setVal] = useState({
    Name: false,
    Email: false,
    Password: false,

  });
  const CardHandler = (e) => {
    setChipData([...chipData, e]);
  }
  const removeChip = (e) => {
    setChipData(chipData.filter(item => item !== e));
  }

  const check = () => {
    var flag = true;
    for (var i in val) {
      if (val[i] === false) {
        flag = false;
      }
    }
    if (flag)
      setButtonIsEnable(true);
    else
      setButtonIsEnable(false);
  }

  const onInputChange = (value, element) => {

    if (value.length > 0) {
      setVal(
        (val) => (
          {
            ...val,
            [element]: true
          }
        )
      )
    }
    check();
  }


  return (
    <div className="rightpane flex flex-column">
      {
        buttonIsEnable === true ? <button className="btn-blue"><span className="btn-text1">You have successfully subscribed to our plan ✔</span></button>
          :
          <button className="btn"><span className="btn-text1">Try it free 7 days</span>
            <span className="btn-text2"> then ₹180/mo. thereafter</span></button>
      }
      <div className="form-container">
        <InputField className="inpp inp-name" field="Name" name="Name" validate={onInputChange}></InputField>
        <InputField className="inpp inp-email" field="Email" name="Email Address" type="email" validate={onInputChange}></InputField>
        <InputField className="inpp inp-pass" field="Password" name="Password" type="password" validate={onInputChange}></InputField>


        <InputField className="inpp inp-pass"
          KeyDown={CardHandler}
          name="Choose your skills" type="text"></InputField>


        <div className="flex-row chips-container">
          {chipData.map((item, index) => {
            return <Chip onCancel={removeChip} name={item}></Chip>
          })}
        </div>
        {
          buttonIsEnable === true ? <button className="btn btn-bottom"><span className="btn-text1 ">CLAIM YOUR FREE TRIAL</span></button>
            :
            <button className="btn btn-disabled btn-bottom"><span className="btn-text1 ">CLAIM YOUR FREE TRIAL</span></button>
        }
        <br />
        <br />
        <p className="bottom-txt">
          By clicking the button you are agreeing to our <span className="lal">Terms and Services</span>
        </p>


      </div>
    </div >
  )
}
export default Rightpannel;