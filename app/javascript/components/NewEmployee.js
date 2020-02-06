import React, { Component } from 'react'

class NewEmployee extends Component {
		state = {
			fullname: ''
		}


	handleChange = e => {
		let newValue = e.target.value
		let key = e.target.name
		this.setState({
			[key]: newValue
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		let data = {employee: this.state}
		let token = document.querySelector('meta[name="csrf-token"]').content
		fetch('/v1/employees', {
			method: 'POST',
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
		return (
			<form>
				<p>
					<label for="fullname">Employee full name:</label>
					<input type="text" name="fullname" onChange={this.handleChange} />
				</p>

				<input type="submit" value="Create" />
			</form>
		)
	}
}
export default NewEmployee