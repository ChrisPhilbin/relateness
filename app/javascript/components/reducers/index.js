import { combineReducers } from 'redux'

import employeesReducer from './employeesReducer'
import interestsReducer from './interestsReducer'
import birthdaysReducer from './birthdaysReducer'

const rootReducer = combineReducers({
  employees: employeesReducer,
  interests: interestsReducer,
  birthdays: birthdaysReducer
})

export default rootReducer