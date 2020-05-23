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
			<div className="container">
				<div className="row">
					<div className="col">
						<p className="employee-name-lg">{employee_details.fullname}</p><br />
						Job title | Email@email.com | (555)-867-5309
					</div>
				</div>
				<div className="row">
					<div className="col">
						half width
					</div>
					<div className="col">
						Half width
					</div>
				</div>
			</div>
			<br />
			<strong>Work anniversary:</strong><br />
			<strong>Email address:</strong><br />
			<strong>Title:</strong><br />
			<strong>Phone number:</strong><br />
			<strong>Address:</strong><br />
			<strong>Birthday:</strong><br />
			<strong>Children:</strong><br />
			<strong>Pets:</strong>
		</div>
	)
}