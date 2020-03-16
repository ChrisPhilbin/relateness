import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmployeeList extends Component {

	state = {
		employees: []
	}

	componentDidMount() {
		fetch('/v1/employees')
		.then(employees => employees.json())
		.then(employees => {
			this.setState({
				employees: employees
			})
		})
	}

	renderEmployees = () => {
		return this.state.employees.map(employee => {
			return (
				<div key={employee.id}>
					<Link to={'/employees/' + employee.id}>{employee.fullname}</Link>
				</div>
			)
		})
	}

	render () {
		return (
			<div>
				Your team members - <Link to="/employees/new">Add a new team member</Link>
				{this.renderEmployees()}
			</div>
			)
	}

}

export default EmployeeList