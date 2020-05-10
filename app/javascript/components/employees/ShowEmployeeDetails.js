import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {fetchSingleEmployee} from '../actions/employeesActions'

import {EmployeeDetails} from './EmployeeDetails'
import {EmployeeInterest} from '../interests/EmployeeInterest'
import {DisplayInterestsNewsItems} from '../interests/DisplayInterestsNewsItems'

const ShowEmployeeDetails = (props) => {

	const dispatch = useDispatch()

	const employee_details =         useSelector(state => state.employees.employee_details)
	const employee_loading =         useSelector(state => state.employees.loading)
	const employee_hasErrors =       useSelector(state => state.employees.hasErrors)

	useEffect(() => {
		dispatch(fetchSingleEmployee(props.id))
	}, [])

	const renderEmployeeDetails = () => {
		if (employee_loading)   return <p>Loading employee details...</p>
		if (employee_hasErrors) return <p>Something went wrong loading the employee details... please try again...</p>
		return <EmployeeDetails employee_details={employee_details} />
	}

	return (
		<section>
			<div>
				{renderEmployeeDetails()}
				<EmployeeInterest id={props.id} />
				<DisplayInterestsNewsItems id={props.id} />
			</div>
		</section>
	)

}

export default ShowEmployeeDetails