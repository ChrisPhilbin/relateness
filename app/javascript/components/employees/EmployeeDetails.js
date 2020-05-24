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
					<div className="ee-personal-info-intro">
						<p className="employee-name-lg">{employee_details.fullname}</p>
						Job title | Email@email.com | (555)-867-5309
					</div>
				</div>

				<div className="row">
					<div className="ee-personal-info-header">
						Personal Information
					</div>
				</div>

				<div className="row">
					<div className="ee-details-info">
						Name<br />
						{employee_details.fullname}
					</div>
					<div className="ee-details-info">
						Primary email<br />
						email@email.com
					</div>
				</div>

				<div className="row">
					<div className="ee-details-info">
						Nickname<br />
						Preferred_name
					</div>
					<div className="ee-details-info">
						Primary home phone<br />
						(555)-867-5309
					</div>
				</div>

				<div className="row">
					<div className="ee-details-info">
						Employee number<br />
						123456
					</div>
					<div className="ee-details-info">
						Primary work phone<br />
						(555)-867-5309
					</div>
				</div>

				<div className="row">
					<div className="ee-details-info">
						Work anniversary<br />
						{employee_details.hiredate}
					</div>
					<div className="ee-details-info">
						Pets<br />
						List_of_pets
					</div>
				</div>
			</div>
		</div>
	)
}