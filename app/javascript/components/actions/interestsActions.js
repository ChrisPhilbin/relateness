export const GET_INTERESTS = 'GET_INTERESTS'
export const GET_INTERESTS_SUCCESS = 'GET_INTERESTS_SUCCESS'
export const GET_INTERESTS_FAILURE = 'GET_INTERESTS_FAILURE'
export const GET_EMPLOYEES_INTERESTS_NEWS = 'GET_EMPLOYEES_INTERESTS_NEWS'
export const GET_EMPLOYEES_INTERESTS_NEWS_SUCCESS = 'GET_EMPLOYEES_INTERESTS_NEWS_SUCCESS'
export const GET_EMPLOYEES_INTERESTS_NEWS_FAILURE = 'GET_EMPLOYEES_INTERESTS_NEWS_FAILURE'

export const getInterests = () => ({
	type: GET_INTERESTS,
})

export const getInterestsSuccess = (interests) => ({
	type: GET_INTERESTS_SUCCESS,
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

// export function fetchEmployeeInterests(id) {
// 	return async dispatch => {
// 		dispatch(getInterests())

// 	try {
// 		const response = await fetch('/v1/employees/' + id + '/interests')
// 		const data = await response.json()
// 		dispatch(getInterestsSuccess(data))
// 	} catch (error) {
// 		dispatch(getInterestsFailure())
// 	}
//   }
// }

// export function fetchEmployeeInterestsNews(id) {
// 	return async dispatch => {
// 			dispatch(getEmployeesInterestsNews())
// 		try {
// 			const response = await fetch('/v1/employees/' + id + '/interests/newsfeed')
// 			const data = await response.json()
// 			dispatch(getEmployeesInterestsNewsSuccess(data))
// 		} catch (error) {
// 			dispatch(getEmployeesInterestsNewsFailure())
// 		}
// 	}
// }


export function fetchEmployeeInterestsNews(id) {
	return (dispatch) => {
		dispatch(getEmployeesInterestsNews());
			fetch('/v1/employees/' + id + '/interests/newsfeed')
				.then(response => response.json())
				.then(data => dispatch(getEmployeesInterestsNewsSuccess(data)));
	}
}

export function fetchEmployeeInterests(id) {
	return (dispatch) => {
		dispatch(getInterests());
			fetch('/v1/employees/' + id + '/interests')
				.then(response => response.json())
				.then(data => dispatch(getInterestsSuccess(data)));
	}
}
