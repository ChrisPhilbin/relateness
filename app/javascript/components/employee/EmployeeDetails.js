import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmployeeDetails extends Component {

	state = {
		employee: {}
	}

	componentDidMount() {

		const { id } = this.props.match.params

		fetch('/v1/employees/' + id)
		.then(employee_details => employee_details.json())
		.then((employee_details) => {
			this.setState(() => ( { employee: employee_details }))
		})
	}

	renderEmployee = () => {
		return(
			<div>
				{this.state.employee.fullname} <Link to={'/employees/' + this.state.employee.id + '/edit'}>Edit</Link><br />
			</div>
		)
	}

	render() {
		return(
			<div>
				{this.renderEmployee()}
			</div>
		)
	}

}

export default EmployeeDetails