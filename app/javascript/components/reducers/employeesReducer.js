//should this reducer be broken up into smaller parts to allow for better
//readability?

import * as actions from '../actions/employeesActions'

export const initialState = {
  employees: [],
  employee_details: {},
  loading: false,
  hasErrors: false,
}

export default function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_EMPLOYEES:
      return { ...state, loading: true }
    case actions.GET_EMPLOYEES_SUCCESS:
      return { ...state, employees: action.payload, loading: false, hasErrors: false }
    case actions.GET_EMPLOYEES_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actions.GET_SINGLE_EMPLOYEE:
      return { ...state, loading: true }
    case actions.GET_SINGLE_EMPLOYEE_SUCCESS:
      return { ...state, employee_details: action.payload, loading: false, hasErrors: false }
    case actions.GET_SINGLE_EMPLOYEE_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actions.EMPLOYEE_CREATED_SUCCESS:
      return {...state, loading: false, hasErrors: false}
    default:
      return state
  }
}