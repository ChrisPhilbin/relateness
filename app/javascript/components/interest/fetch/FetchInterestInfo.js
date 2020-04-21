import React from 'react'

export const UpdateAllInterests = (props) => (

	const { id } = this.props.match.params

	fetch('/v1/employees/' + id + "/interests/newsfeed")
	.then(employee_interests => employee_interests.json())
	.then((employee_interests) => {
		this.setState(() => ( { newsfeed: employee_interests }))
	})
)

export const UpdateSingleInterest = (interest) => (

	fetch('/v1/interests/' + id + "/newsfeed")
	.then(interest_news => interest_news.json())
	.then((interest_news) => {
		this.setState(() => ( { news: interest_news }))
	})

)
