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