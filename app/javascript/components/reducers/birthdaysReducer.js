import * as actions from '../actions/birthdayActions'

export const initialState = {
    loading: false,
    hasErrors: false,
    employees: []
}

export default function birthdayssReducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_BIRTHDAYS:
        return { ...state, loading: true }
      case actions.GET_BIRTHDAYS_SUCCESS: 
        return {...state, loading: false, hasErrors: false, employees: action.payload}
      case actions.GET_BIRTHDAYS_FAILURE:
        return {...state, loading: false, hasErrors: true}
      default:
        return state
    }
}