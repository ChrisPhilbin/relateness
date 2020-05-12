import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {fetchSingleEmployee} from '../actions/employeesActions'
import {Link} from 'react-router-dom'

import Alert from 'react-bootstrap/Alert'

export const EmployeeDetails = (props) => {


	const dispatch = useDispatch()

	const employee_details =         useSelector(state => state.employees.employee_details)
	const employee_loading =         useSelector(state => state.employees.loading)
	const employee_hasErrors =       useSelector(state => state.employees.hasErrors)

	useEffect(() => {
		dispatch(fetchSingleEmployee(props.id))
	}, [])

	return(
		<div key={employee_details.id}>
			<br />
			<Alert key={employee_details.id} variant="primary">
				<strong>Viewing {employee_details.fullname}'s details</strong> - 
				<Link to={"/employees/" + props.id + "/edit"}>Edit details</Link>
			</Alert>
			<strong>Work anniversary:</strong><br />
			<strong>Birthday:</strong><br />
			<strong>Children:</strong><br />
			<strong>Pets:</strong>
		</div>
	)
}