import { combineReducers } from 'redux'

import employeesReducer from './employeesReducer'
import interestsReducer from './interestsReducer'

const rootReducer = combineReducers({
  employees: employeesReducer,
  interests: interestsReducer
})

export default rootReducer