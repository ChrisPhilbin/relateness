import * as actions from '../actions/birthdayActions'

export const initialState = {
    loading: false,
    hasErrors: false,
    employees: []
}

export default function birthdaysReducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_UPCOMING_BIRTHDAYS:
        return { ...state, loading: true }
      case actions.GET_UPCOMING_BIRTHDAYS_SUCCESS: 
        return {...state, employees: state.employees.concat(action.payload), loading: false, hasErrors: false}
      case actions.GET_UPCOMING_BIRTHDAYS_FAILURE:
        return {...state, loading: false, hasErrors: true}
      default:
        return state
    }
}