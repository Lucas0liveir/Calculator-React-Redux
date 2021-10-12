const INITIAL_STATE = {
    displayValue: "0",
    operation: null,
    clearDisplay: false,
    values: [0, 0],
    current: 0
}

export default function (state = INITIAL_STATE, actions) {
    switch (actions.type) {
        case 'CLEAR_DISPLAY':
            return { ...state, displayValue: actions.payload }
        case 'ADD_NUM':
            if (actions.payload === '.' && state.displayValue.includes('.')) {
                return { ...state }
            }
            let myClearDisplay = state.displayValue === "0" || state.clearDisplay
            const currentValue = myClearDisplay ? '' : state.displayValue
            const newDisplayValue = (currentValue + actions.payload)
            const i = state.current
            const newValue = parseFloat(newDisplayValue)
            const myValues = [...state.values]
            myValues[i] = newValue
            return {
                ...state, displayValue: newDisplayValue,
                values: actions.payload !== '.' ? myValues : state.values,
                clearDisplay: false
            }
        case 'SET_OPERATOR':
            if (state.values[0] === 0) {
                return { ...state }
            }
            if (state.current === 0) {
                return { ...state, operation: actions.payload, current: 1, clearDisplay: true }
            } else {
                const equals = actions.payload === '='
                const currentOperation = state.operation
                const myValues = [...state.values]
                try {
                    myValues[0] = eval(`${myValues[0]} ${currentOperation} ${myValues[1]}`)
                } catch (e) {
                    myValues[0] = state.values[0]
                }
                myValues[1] = 0
                return {
                    ...state, displayValue: myValues[0],
                    operation: equals ? null : actions.payload,
                    current: equals ? 0 : 1,
                    clearDisplay: !equals,
                    values: myValues
                }
            }

        default: return state
    }

}