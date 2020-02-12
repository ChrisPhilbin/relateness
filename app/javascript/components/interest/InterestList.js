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

	renderInterests = () => {
		return this.state.interests.map(interest => {
			return (
				<div key={interest.id}>
					{interest.interest}
				</div>
			)
		})
	}

	render () {
		return (
			<div>
				Listing all interests
				{this.renderInterests()}
				<Link to="/interests/new">Add a new interest</Link>
			</div>
			)
	}

}

export default InterestList