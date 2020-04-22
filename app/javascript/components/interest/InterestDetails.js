import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class InterestDetails extends Component {

	state = {
		interest_news: []
	}

	componentDidMount() {
		const { id } = this.props.match.params

		fetch('/v1/employees/' + id + '/interests/newsfeed')
			.then(news => news.json())
			.then((news) => {
		this.setState(() => ({ interest_news: news }))
		})
	}

	render(){
		return(
			<div>
				{console.log(this.state.interest_news)}
			</div>
		)
	}
}

export default InterestDetails