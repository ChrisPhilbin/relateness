import React from 'react'
import EmployeeDetails from './EmployeeDetails'
import InterestDetails from '../interest/InterestDetails'

export default function ShowEmployee(props) {

	return(
		<div>
			<EmployeeDetails {...props}/>
			<InterestDetails {...props}/>
		</div>
	)
}