// component will render a list of all employees
//associated with the current logged in user

import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchEmployees} from '../actions/employeesActions'
import {Employee} from './Employee'

const ShowAllEmployees = ({dispatch, employees, loading, hasErrors}) => {

	useEffect(() => {
		dispatch(fetchEmployees())
	}, [dispatch])

	const renderEmployees = () => {
		if (loading) return <p>Loading employee list...</p>
		if (hasErrors) return <p>Something went wrong... try again</p>
		return employees.map(employee => <Employee key={employee.id} employee={employee} />)		
	}

	return(
		<section>
			<strong>Your team</strong> - <Link to="/employees/new">add new employee</Link><br />
			{renderEmployees()}
		</section>
	)

}

const mapStateToProps = (state) => ({
	employees: state.employees.employees,
	loading:   state.employees.loading,
	hasErrors: state.employees.hasErrors
})

export default connect(mapStateToProps)(ShowAllEmployees)