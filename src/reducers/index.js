import { combineReducers } from 'redux'
import leadReducer from './leads/reducers'
// import { errorReducer } from './errors/reducers'

const rootReducer = combineReducers({
  leads: leadReducer,
  // errors: errorReducer,
})

export default rootReducer
