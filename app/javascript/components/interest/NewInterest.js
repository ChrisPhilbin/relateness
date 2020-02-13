import React, { Component } from 'react'

class NewInterest extends Component {
	state = {
		interest: ''
	}

	handleChange = e => {
		let newValue = e.target.value
		let key = e.target.name
		this.setState({
			[key]: newValue
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let data = {interest: this.state}
		let token = document.querySelector('meta[name="csrf-token"]').content
		fetch('/v1/interests', {
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
			<form onSubmit={this.handleSubmit.bind(this)}>
				<p>
					<label for="interest">Add new interest:</label>
					<input type="text" name="interest" onChange={this.handleChange} />
				</p>

				<input type="submit" value="Add interest" />
			</form>
		)
	}

}