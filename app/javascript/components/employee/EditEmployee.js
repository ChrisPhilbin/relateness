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

	onChange(e) {

	}

}

export default EditEmployee