import React, { Component } from 'react'

class EditEmployee extends Component {

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

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let data = {employee: this.state}
		let token = document.querySelector('meta[name="csrf-token"]').content
		fetch('/v1/employees/' + this.props.match.params, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
				'X-Requested-With': "XMLHttpRequest",
				'X-CSRF-Token': token
			},
			redirect: "error",
			body: JSON.stringify(data)
		})
		.then(resp => {
			resp.json()
		})
		.then(post => {
			this.props.history.push('/')
		})
	}

	render() {
		return(
			<div>
				<p><h3>Editing details for {this.state.employee.fullname}</h3></p>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<p>
						<label for="fullname">Employee full name:</label>
						<input type="text" name="fullname" onChange={this.handleChange} placeholder={this.state.employee.fullname}/>
					</p>

					<input type="submit" value="Update" />
				</form>
			</div>
		)
	}

}

export default EditEmployee