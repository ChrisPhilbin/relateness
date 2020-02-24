import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmployeeDetails extends Component {

	state = {
		employee: {}
	}

	componentDidMount() {

		const { id } = this.props.match.id

		fetch('/v1/employees/${id}')
		.then(employee => employee.json())
		.then(employee => {
			this.setState({
				employee: { employee }
			})
		})
	}

	renderEmployee = () => {
		return(
			<div>
				{this.state.employee.id}<br />
				{this.state.employee.fullname}
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