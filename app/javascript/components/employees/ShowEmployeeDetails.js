import React from 'react'

import {EmployeeDetails} from './EmployeeDetails'
import {EmployeeInterest} from '../interests/EmployeeInterest'
import {DisplayInterestsNewsItems} from '../interests/DisplayInterestsNewsItems'

const ShowEmployeeDetails = (props) => {

	return (
		<section>
			<div>
				<EmployeeDetails id={props.id} />
				<EmployeeInterest id={props.id} />
				<DisplayInterestsNewsItems id={props.id} />
			</div>
		</section>
	)

}

export default ShowEmployeeDetails