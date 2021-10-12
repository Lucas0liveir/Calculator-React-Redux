import React from 'react'
import Button from '../Button/Button'
import Display from '../Display/Display'
import './Calculator.css'
import { connect } from 'react-redux'
import { addDigit, clearDisplay, setOperator } from '../../Redux/Actions'


function Calculator({ displayValue, myAddDigit, clear, mySetOperator }) {

    return (
        <div className="Calculator">
            <Display />
            <Button onclick={clear} triple label="AC" />
            <Button onclick={mySetOperator} operation label="/" />
            <Button onclick={myAddDigit} label="7" />
            <Button onclick={myAddDigit} label="8" />
            <Button onclick={myAddDigit} label="9" />
            <Button onclick={mySetOperator} operation="operation" label="*" />
            <Button onclick={myAddDigit} label="4" />
            <Button onclick={myAddDigit} label="5" />
            <Button onclick={myAddDigit} label="6" />
            <Button onclick={mySetOperator} operation="operation" label="-" />
            <Button onclick={myAddDigit} label="1" />
            <Button onclick={myAddDigit} label="2" />
            <Button onclick={myAddDigit} label="3" />
            <Button onclick={mySetOperator} operation label="+" />
            <Button onclick={myAddDigit} double label="0" />
            <Button onclick={myAddDigit} label="." />
            <Button onclick={mySetOperator} operation label="=" />

        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    myAddDigit: (n) => dispatch(addDigit(n)),
    clear: () => dispatch(clearDisplay()),
    mySetOperator: (n) => dispatch(setOperator(n))
})

export default connect(null, mapDispatchToProps)(Calculator)
