import React from 'react'

const ShowInterest = () => (

	{this.props.interests.map((interest) => {
		return <div id={interest.id}>{interest.interest} - [remove]<br /></div>
	})}	

	)

export default ShowInterest