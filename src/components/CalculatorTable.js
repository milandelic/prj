import React from "react";
import TableHeader from "./TableHeader";
import TableRow from './TableRow';

function CalculatorTable(props){
    // if needed convert to bruto and calculate other salary frequencies
    let grossIncome = props.salaryValue,
        salaryType = 'BRUTO';
        
    if(props.type){
        grossIncome = Math.round(grossIncome * 1.4 * 100) / 100;
        salaryType = 'NETO';
    }

    let monthlyIncome = grossIncome / 12,
        weeklyIncome = monthlyIncome / 4.5,
        message = `Your ${salaryType} income`;

    return (
      <div>
        <div className="tableSalaryHighlightContainer">
          <div className="tableSalaryHighlight">$ {props.salaryValue}</div>
          <div>{message}</div>
        </div>
        <div>
            <TableHeader />
            <TableRow name={'Weekly'} income={weeklyIncome} />
            <TableRow name={'Monthly'} income={monthlyIncome} />
            <TableRow name={'Yearly'} income={grossIncome} />
        </div>
      </div>
    );
  }
    
  export default CalculatorTable;