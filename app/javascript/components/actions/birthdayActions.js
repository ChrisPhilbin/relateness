export const GET_BIRTHDAYS         = 'GET_BIRTHDAYS'
export const GET_BIRTHDAYS_SUCCESS = 'GET_BIRTHDAYS_SUCCESS'
export const GET_BIRTHDAYS_FAILURE = 'GET_BIRTHDAYS_FAILURE'



export const getBirthdays = () => ({
    type: GET_UPCOMING_BIRTHDAYS,
})

export const getBirthdaysSuccess = (employees) => ({
    type: GET_UPCOMING_BIRTHDAYS_SUCCESS,
    payload: employees,
})

export const getBirthdaysFailure = () => ({
    type: GET_UPCOMING_BIRTHDAYS_FAILURE,
})


export function fetchBirthdays() {
	return (dispatch) => {
		dispatch(getBirthdays());
			fetch('/v1/employees/birthdays')
				.then(response => response.json())
				.then(data => dispatch(getBirthdaysSuccess(data)));
	}
}

export function fetchTodaysBirthdays() {

}