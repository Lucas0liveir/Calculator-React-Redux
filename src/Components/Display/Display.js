import React from "react";
import './Display.css'
import { connect } from "react-redux";

function Display ({displayValue}){
    const result = displayValue
    return(
        <div className="Display">{result}</div>
    )
}
const mapToStateProps = (state) => ({
    displayValue: state.calculator.displayValue
})

export default connect(mapToStateProps)(Display)