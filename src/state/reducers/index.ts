import { combineReducers } from 'redux'
import gameCollectionReducer from './gameCollection'
import loginReducer from './login'

const rootReducer = combineReducers({
  gameCollection: gameCollectionReducer,
  login: loginReducer,
})

export default rootReducer
