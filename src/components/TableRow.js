import React from "react";

function TableRow(props){
    let grossIncome = Math.round(props.income * 100) / 100,
        tax = Math.round(grossIncome * 0.3 * 100) / 100,
        netIncome = Math.round((grossIncome - tax) * 100) / 100;
        
    return (
        <div className="tableRowContainer">
            <div>{props.name}</div>
            <div>$ {grossIncome}</div>
            <div>$ {tax}</div>
            <div>$ {netIncome}</div>
        </div>
    );
}
        
export default TableRow;