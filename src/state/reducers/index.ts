import { combineReducers } from 'redux'
import testReducer from './test'

const rootReducer = combineReducers({
  testState: testReducer,
})

export default rootReducer
