export const GET_INTERESTS                        = 'GET_INTERESTS'
export const GET_EMPLOYEES_INTERESTS_SUCCESS      = 'GET_EMPLOYEES_INTERESTS_SUCCESS'
export const GET_INTERESTS_SUCCESS                = 'GET_INTERESTS_SUCCESS'
export const GET_INTERESTS_FAILURE                = 'GET_INTERESTS_FAILURE'
export const GET_EMPLOYEES_INTERESTS_NEWS         = 'GET_EMPLOYEES_INTERESTS_NEWS'
export const GET_EMPLOYEES_INTERESTS_NEWS_SUCCESS = 'GET_EMPLOYEES_INTERESTS_NEWS_SUCCESS'
export const GET_EMPLOYEES_INTERESTS_NEWS_FAILURE = 'GET_EMPLOYEES_INTERESTS_NEWS_FAILURE'
export const INTEREST_CREATED_SUCCESS             = 'INTEREST_CREATED_SUCCESS'
export const DELETE_INTEREST_SUCCESS              = 'DELETE_INTEREST_SUCCESS'

export const getInterests = () => ({
	type: GET_INTERESTS,
})

export const getInterestsSuccess = (interests) => ({
	type: GET_INTERESTS_SUCCESS,
	payload: interests,
})

export const getEmployeesInterestsSuccess = (interests) => ({
	type: GET_EMPLOYEES_INTERESTS_SUCCESS,
	payload: interests,
})

export const getInterestsFailure = () => ({
	type: GET_INTERESTS_FAILURE,
})

export const getEmployeesInterestsNews = () => ({
	type: GET_EMPLOYEES_INTERESTS_NEWS,
	payload: {},
})

export const getEmployeesInterestsNewsSuccess = (interest_news) => ({
	type: GET_EMPLOYEES_INTERESTS_NEWS_SUCCESS,
	payload: interest_news,
})

export const getEmployeesInterestsNewsFailure = () => ({
	type: GET_EMPLOYEES_INTERESTS_NEWS_FAILURE,
})

export const interestCreatedSucess = (interest) => ({
	type: INTEREST_CREATED_SUCCESS,
	payload: interest,
})

export const deleteInterestSuccess = (id) => ({
	type: DELETE_INTEREST_SUCCESS,
	payload: id,
})

export function fetchEmployeeInterestsNews(id) {
	return (dispatch) => {
		dispatch(getEmployeesInterestsNews());
			fetch('/v1/employees/' + id + '/interests/newsfeed')
				.then(response => response.json())
				.then(data => dispatch(getEmployeesInterestsNewsSuccess(data)))
	}
}

export function fetchEmployeeInterests(id) {
	return (dispatch) => {
		dispatch(getInterests());
			fetch('/v1/employees/' + id + '/interests')
				.then(response => response.json())
				.then(data => dispatch(getEmployeesInterestsSuccess(data)));
	}
}

export function createNewInterest(data, csrf) {
	return dispatch => {
		let createInterest = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
			'Content-Type': 'application/json',
			'X-CSRF-Token': csrf
		}

		}
		return (
			fetch('/v1/interests', createInterest)
				.then (resp => resp.json())
				.then (interest => {
					dispatch(interestCreatedSucess(interest))
				})
		)
	}
}

export function fetchAllInterests() {
	return (dispatch) => {
		dispatch(getInterests());
			fetch('/v1/interests')
				.then(response => response.json())
				.then(data => dispatch(getInterestsSuccess(data)));
	}
}

export function deleteInterest(interest, csrf) {
	return dispatch => {
		let id = interest.id
		let deleted = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRF-Token': csrf
			}

		}
		return (
			fetch('/v1/interests/' + id, deleted)
				.then (dispatch(deleteInterestSuccess(id)))
		)
	}
}