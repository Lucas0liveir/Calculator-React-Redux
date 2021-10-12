export function addDigit(n){
    return{
        type: 'ADD_NUM',
        payload: n
    }
}
export function clearDisplay(){
    return {
        type: 'CLEAR_DISPLAY',
        payload: "0"
    }
}

export function setOperator(n){
    return {
        type: 'SET_OPERATOR',
        payload: n
    }
}