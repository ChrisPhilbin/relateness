import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShowInterest from '../interest/ShowInterest'
import {GetEmployeeDetails, GetEmployeeInterests} from './fetch/FetchEmployeeInfo'

class EmployeeDetails extends Component {

	// state = {
	// 	employee: {},
	// 	interests: []
	// }

	// componentDidMount() {

	// 	const { id } = this.props.match.params

	// 	GetEmployeeDetails(id)

	// 	GetEmployeeInterests(id)

	// 	fetch('/v1/employees/' + id)
	// 	.then(employee_details => employee_details.json())
	// 	.then((employee_details) => {
	// 		this.setState(() => ( { employee: employee_details }))
	// 	})

	// 	fetch('/v1/employees/' + id + '/interests')
	// 	.then(employee_interests => employee_interests.json())
	// 	.then((employee_interests) => {
	// 		// console.log(employee_interests[0])
	// 		this.setState(() => ({ interests: employee_interests }))
	// 	})

	// }
const { id } = this.props.match.params;
const employee_details = GetEmployeeDetails(id);
const employee_interests = GetEmployeeInterests(id);
console.log(employee_details)

	render() {
		return(
			<div>
				{this.state.employee.fullname} <Link to={'/employees/' + this.state.employee.id + '/edit'}>Edit</Link><br />
				<ShowInterest interests={this.state.interests} />			
			</div>
		)
	}

}

export default EmployeeDetails