import React from 'react'
import './Button.css'


export default function Button(props) {
    
    const Propsclass = props.operation && `Button operation` || props.double && `Button double`
        || props.triple && `Button triple` || 'Button'
    return (
        <button onClick={(e) => props.onclick(e.currentTarget.innerText)} className={Propsclass}>{props.label}</button>
    )
}