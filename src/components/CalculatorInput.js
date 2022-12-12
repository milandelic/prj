import React, { useState, useRef } from "react";

function CalculatorInput(props){
  const inputSalary = useRef();
  let timer = null;

  // sending salary frequency(Weekly, Monthly, Yearly) 
  const optionHandler = (event) => {
    props.salaryFrequencyHandler(event.target.selectedIndex);
  }

  // send salary value on btn click
  const clickHandler = (event) => {
    if(inputSalary.current.value != '')
      props.salaryValueHandler(inputSalary.current.value, true);
  }
  
  // send salary value when typing in input
  const changeHandler = (event) => {
    if(timer)
      clearTimeout(timer);
    timer = setTimeout((value) => {
      if(inputSalary.current.value != '')
        props.salaryValueHandler(inputSalary.current.value);
    }, 500);
  }

  return (
    <div>
      <div className="salaryCaptionContainer">
        <div className="salaryCaption">Type your </div>
        <select className="salarySelectOption" onChange={optionHandler}>
          <option selected={props.salaryFrequency == 0 ? 'selected': ''}>Yearly</option>
          <option selected={props.salaryFrequency == 1 ? 'selected': ''}>Monthly</option>
          <option selected={props.salaryFrequency == 2 ? 'selected': ''}>Weekly</option>
        </select>
        <div className="salaryCaption"> salary</div>
      </div>
      <div className="salaryInputContainer">
        <div>$</div>
        <input type="number" className="salaryInput" placeholder="Type your salary" defaultValue={props.inputValue} ref={inputSalary} onChange={changeHandler}/>
      </div>
      <div>
        <input type="button" className="calculateBtn" value="Calculate" onClick={clickHandler} />
      </div>
    </div>
  );
}
  
export default CalculatorInput;