import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmployeeList extends Component {

	state = {
		posts: []
	}

	componentDidMount() {
		fetch('/v1/employees')
		.then(posts => posts.json())
		.then(posts => {
			this.setState({
				posts: posts
			})
		})
	}

	renderEmployees = () => {
		return this.state.posts.map(employee => {
			return (
				<div key={employee.id}>
					{employee.fullname}
				</div>
			)
		})
	}

	render () {
		return (
			<div>
				Listing all employees
				{this.renderEmployees()}
				<Link to="/employees/new">Add a new employee</Link>
			</div>
			)
	}

}

export default EmployeeList