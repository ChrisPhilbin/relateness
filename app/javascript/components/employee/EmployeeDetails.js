import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmployeeDetails extends Component {

	state = {
		employee: null
	}

	componentDidMount() {

		const { id } = this.props.match.params

		fetch('/v1/employees/${id}')
		.then(employee => employee.json())
		.then((employee) => {
			this.setState(() => ({ employee }))
		})
	}

	renderEmployee = () => {
		return(
			<div>
				{this.state.employee}<br />
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