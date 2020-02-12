import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class InterestList extends Component {

	state = {
		interests: []
	}

	componentDidMount() {
		fetch('/v1/interests')
		.then(interests => interests.json())
		.then(interests => {
			this.setState({
				interests: interests
			})
		})
	}


end