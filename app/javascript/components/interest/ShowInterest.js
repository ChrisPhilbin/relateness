// import React, { Component } from 'react'

// class ShowInterest extends Component {

// 	render(){
// 		return(
// 			<div>
// 				{this.props.interests.map((interest) => {
// 				<div id={interest.id}>{interest.interest} - [remove]<br /></div>
// 				})}
// 			</div>	
// 		)
// 	}
// }

// export default ShowInterest

import React from 'react'

const ShowInterest = (props) => {
	return(
		<div>
			{props.interests.map((interest) => {
			<div id={interest.id}>{interest.interest} - [remove]<br /></div>
			})}
		</div>
	)
}

export default ShowInterest