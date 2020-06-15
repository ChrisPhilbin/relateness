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
        return {...state, loading: false, hasErrors: false, employees: action.payload}
      case actions.GET_UPCOMING_BIRTHDAYS_FAILURE:
        return {...state, loading: false, hasErrors: true}
      default:
        return state
    }
}