import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmployeeList extends Component {

	state = {
		posts: []
	}

	componentDidMount() {
		fetch('/v1/employees')
		.then(posts => posts.json())
		then(posts => {
			this.setState({
				posts: posts
			})
		})
	}

	

}