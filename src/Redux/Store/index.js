import { createStore, combineReducers } from 'redux'
import Reducers from '../Reducers'

const rootReducer = combineReducers({
    calculator: Reducers
  })

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())