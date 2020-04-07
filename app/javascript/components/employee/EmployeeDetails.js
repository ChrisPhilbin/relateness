import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import ShowInterest from './interest/ShowInterest'

class EmployeeDetails extends Component {

	state = {
		employee: {},
		interests: {}
	}

	componentDidMount() {

		const { id } = this.props.match.params

		fetch('/v1/employees/' + id)
		.then(employee_details => employee_details.json())
		.then((employee_details) => {
			this.setState(() => ( { employee: employee_details }))
		})

		fetch('/v1/employees/' + id + '/interests')
		.then(employee_interests => employee_interests.json())
		.then((employee_interests) => {
			// console.log(employee_interests[0])
			this.setState(() => ({ interests: {employee_interests} }))
		console.log(this.state.interests)
		})

	}

	render() {
		return(
			<div>
				{this.state.employee.fullname} <Link to={'/employees/' + this.state.employee.id + '/edit'}>Edit</Link><br />
			</div>
		)
	}

}

export default EmployeeDetails