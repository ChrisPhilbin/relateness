import React from 'react'

const ShowInterest = (props) => (
		<div>
			{props.interests.map((interest) => {
			return <div id={interest.id}>{interest.interest} - [remove]<br /></div>
			})}
		</div>
)

export default ShowInterest