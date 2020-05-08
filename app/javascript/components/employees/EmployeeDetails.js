import React from 'react'
import Alert from 'react-bootstrap/Alert'

export const EmployeeDetails = ({employee_details}) => (
	<div key={employee_details.id}>
		<br />
		<Alert key={employee_details.id} variant="primary">
			<strong>Viewing {employee_details.fullname}'s details</strong>
		</Alert>
		<strong>Work anniversary:</strong><br />
		<strong>Birthday:</strong><br />
		<strong>Children:</strong><br />
		<strong>Pets:</strong>
	</div>
)