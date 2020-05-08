//should this be broken up into smaller pieces?

export const GET_EMPLOYEES = 'GET_EMPLOYEES'
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS'
export const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE'
export const GET_SINGLE_EMPLOYEE = 'GET_SINGLE_EMPLOYEE'
export const GET_SINGLE_EMPLOYEE_SUCCESS = 'GET_SINGLE_EMPLOYEE_SUCCESS'
export const GET_SINGLE_EMPLOYEE_FAILURE = 'GET_SINGLE_EMPLOYEE_FAILURE'
export const EMPLOYEE_CREATED_SUCCESS = 'EMPLOYEE_CREATED_SUCCESS'

export const getEmployees = () => ({
  type: GET_EMPLOYEES,
})

export const getEmployeesSuccess = employees => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload: employees,
})

export const getEmployeesFailure = () => ({
  type: GET_EMPLOYEES_FAILURE,
})

export const getSingleEmployee = () => ({
	type: GET_SINGLE_EMPLOYEE,
})

export const getSingleEmployeeSuccess = employee_details => ({
	type: GET_SINGLE_EMPLOYEE_SUCCESS,
	payload: employee_details,
})

export const getSingleEmployeeFailure = () => ({
	type: GET_SINGLE_EMPLOYEE_FAILURE,
})

export const employeeCreatedSucess = (employee_details) => ({
	type: EMPLOYEE_CREATED_SUCCESS,
	payload: employee_details
})

export function fetchEmployees() {
  return async dispatch => {
    dispatch(getEmployees())

    try {
      const response = await fetch('/v1/employees')
      const data = await response.json()
      dispatch(getEmployeesSuccess(data))
    } catch (error) {
      dispatch(getEmployeesFailure())
    }
  }
}

// export function fetchSingleEmployee(id) {
// 	return async dispatch => {
// 		dispatch(getSingleEmployee())

// 	try {
// 		const response = await fetch('/v1/employees/' + id)
// 		const data = await response.json()
// 		dispatch(getSingleEmployeeSuccess(data))
// 	} catch (error) {
// 		dispatch(getSingleEmployeeFailure())
// 	}
//   }
// }


export function fetchSingleEmployee(id) {
	return (dispatch) => {
		dispatch(getSingleEmployee());
			fetch('/v1/employees/' + id)
				.then(response => response.json())
				.then(data => dispatch(getSingleEmployeeSuccess(data)));
	}
}

export function createNewEmployee(data, csrf) {
	return dispatch => {
		let createEmployee = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
			'Content-Type': 'application/json',
			'X-CSRF-Token': csrf
		}

		}
		return (
			fetch('/v1/employees', createEmployee)
				.then (resp => resp.json())
				.then (employee => {
					dispatch(employeeCreatedSucess(employee))
				})
		)
	}
}