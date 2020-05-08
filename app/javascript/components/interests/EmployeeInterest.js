//component will return the interests assigned to the employee - accepts a single
//interest 

import React from 'react'

export const EmployeeInterest = ({interest}) => (
	<div key={interest.id}>
		{interest.interest}
	</div>
)
