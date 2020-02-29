import React, { Component } from 'react'

class EditEmployee extends Component {

	state = {
		employee: null
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
		e.preventDefault()
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<p>
						<label for="fullname">Employee full name:</label>
						<input type="text" name="fullname" onChange={this.handleChange} />
					</p>

					<input type="submit" value="Update" />
				</form>
			</div>
		)
	}

}

export default EditEmployee