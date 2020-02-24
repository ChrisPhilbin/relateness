import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmployeeDetails extends Component {

	state = {
		employee: {}
	}

	componentDidMount() {
		fetch('/v1/employees/${handle}')
		.then(employee => employee.json())
		.then(employee => {
			this.setState({
				employee: employee
			})
		})
	}

}