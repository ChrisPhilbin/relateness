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
					<a href={'/employees/' + employee.id}>{employee.fullname}</a>
				</div>
			)
		})
	}

	render () {
		return (
			<div>
				Listing all employees
				{this.renderEmployees()}
				[ <Link to="/employees/new">Add a new employee</Link> | <Link to="/interests/new">Add a new interest</Link> ]
			</div>
			)
	}

}

export default EmployeeList