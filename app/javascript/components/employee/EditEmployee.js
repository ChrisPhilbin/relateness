import React, { Component } from 'react'

class EditEmployee extends Component {

	state = {
		fullname: ''
	}

	componentDidMount() {

		const { id } = this.props.match.params

		fetch('/v1/employees/' + id)
		.then(employee_details => employee_details.json())
		.then((employee_details) => {
			this.setState(() => ( { employee: employee_details }))
		})
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit = (e) => {
		e.preventDefault()
	}

	render() {
		<div>

		</div>
	}

}

export default EditEmployee