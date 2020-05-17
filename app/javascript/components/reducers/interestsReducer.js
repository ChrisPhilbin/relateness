import * as actions from '../actions/interestsActions'

export const initialState = {
	interests: [],
	loading: false,
	hasErrors: false,
	interests_news: {},
	interests_news_loading: false,
	interests_news_hasErrors: false
}

export default function interestReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_INTERESTS:
        return { ...state, loading: true }
    case actions.GET_INTERESTS_SUCCESS:
    	return { ...state, interests: action.payload, loading: false, hasErrors: false}
    case actions.GET_INTERESTS_FAILURE:
    	return { ...state, loading: false, hasErrors: true}
    case actions.GET_EMPLOYEES_INTERESTS_NEWS:
    	return{ ...state, interests_news: action.payload, interests_news_loading: true, interests_news_hasErrors: false}
    case actions.GET_EMPLOYEES_INTERESTS_NEWS_SUCCESS:
    	return{ ...state, interests_news: action.payload, interests_news_loading: false, interests_news_hasErrors: false}
    case actions.GET_EMPLOYEES_INTERESTS_NEWS_FAILURE:
		return{...state, interests_news_loading: false, interests_news_hasErrors: true}
	case actions.INTEREST_CREATED_SUCCESS:
		return {...state, interests: action.payload, loading: false, hasErrors: false}
	case actions.DELETE_INTEREST_SUCCESS:
		return {...state, interests: state.interests.filter(interest => interest.id !== action.payload)}
     default:
     	return state
    }
}