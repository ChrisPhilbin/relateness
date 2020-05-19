import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchEmployees} from '../actions/employeesActions'
import {deleteEmployee} from '../actions/employeesActions'

const ShowAllEmployees = () => {

	const dispatch = useDispatch()
	const csrf = document.querySelector('[name=csrf-token]').content

	useEffect(() => {
		dispatch(fetchEmployees())
	}, [])

	const employees               =  useSelector(state => state.employees.employees)
	const loading                 =  useSelector(state => state.employees.loading)
	const hasErrors               =  useSelector(state => state.employees.hasErrors)

	const renderEmployees = () => {
		if (loading) return <p>Loading employee list...</p>
		if (hasErrors) return <p>Something went wrong... try again</p>
		return(
			<div>
				{employees.map( (employee) => (
					<div key={employee.id}>
						<strong><Link to={'/employees/' + employee.id}>{employee.fullname}</Link></strong>
						<a href="#" onClick={() => {dispatch(deleteEmployee(employee, csrf))}}> Delete</a>
					</div>
					)
				)}
			</div>
		)
	}

	return(
		<section>
			<strong>Your team</strong> - <Link to="/employees/new">add new employee</Link><br />
			{renderEmployees()}
		</section>
	)

}

export default ShowAllEmployees