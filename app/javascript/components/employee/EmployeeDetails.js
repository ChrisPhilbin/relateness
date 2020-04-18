import React, { Component } from 'react'
import {GetEmployeeDetails, GetEmployeeInterests} from './fetch/FetchEmployeeInfo'
import ShowInterest from '../interest/ShowInterest'

class EmployeeDetails extends Component {

	let ee = this.props.match.params;
	const employee_details = GetEmployeeDetails(ee);
	const employee_interests = GetEmployeeInterests(ee);
	console.log(employee_details);

	render() {
		return(
			<div>
			
			</div>
		)
	}

}

export default EmployeeDetails