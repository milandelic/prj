import React, { useState } from "react";
import './App.css';
import CalculatorInput from './CalculatorInput';
import CalculatorTable from './CalculatorTable';

function App(){
  const [ tableIsOpen, setTableIsOpen ] = useState(false);
  const [ salaryValue, setSalaryValue ] = useState(0);
  const [ salaryType, setSalaryType ] = useState(false);
  const [ salaryFrequency, setSalaryFrequency ] = useState(0);
  let inputTabActive = tableIsOpen ? '': 'active',
      tableTabActive = tableIsOpen ? 'active': '',
      brutoActive = salaryType ? '': 'active',
      netoActive = salaryType ? 'active': '';

  // Click event on "input" and "table" cards
  function switchViewHandler(event){
    let state = false;
    if(event.target.id == 'tableView' && salaryValue)
      state = true;
      setView(state);
  }

  // will set salary value on change input and "Calculate" btn and update view if needed
  function salaryValueHandler(value, updateView = false){
    let yearlySalaryValue = value;
    // converts salary value to yearly value if needed
    if(salaryFrequency){
      yearlySalaryValue = value * 12;
      if(salaryFrequency > 1)
        yearlySalaryValue = yearlySalaryValue * 4;
    }
    setSalaryValue(yearlySalaryValue);
    if(updateView)
      setView(true);
  }

  // set view. "input" or "table"
  function setView(state){
    setTableIsOpen(state);
  }

  // click event on "bruto", "neto"
  function switchTypeHandler(event){
    let state = false;
    if(event.target.id == 'neto')
      state = true;
    setSalaryType(state);
  }

  // change event that set salary type. "yearly", "monthly", "weekly"
  function salaryFrequencyHandler(value){
    setSalaryFrequency(value);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="headerContainer">
          <div id="inputView" className={inputTabActive} onClick={switchViewHandler}>Input</div>
          <div id="tableView" className={tableTabActive} onClick={switchViewHandler}>Table</div>
        </div>
        <div className="content">
          <div className="brutoNetoContainer">
            <div id="bruto" className={brutoActive} onClick={switchTypeHandler}>Bruto</div>
            <div id="neto" className={netoActive} onClick={switchTypeHandler}>Neto</div>
          </div>
          <div>
            {!tableIsOpen && <CalculatorInput salaryFrequencyHandler={salaryFrequencyHandler} salaryFrequency={salaryFrequency} salaryValueHandler={salaryValueHandler} inputValue={salaryValue} />}
            {tableIsOpen && <CalculatorTable salaryValue={salaryValue} type={salaryType} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;