//component will just return back the name of an employee with an href tag linking
//to a page that displays all the details of the linked employee / their profile page
//func takes in an individual employee object

import React from 'react'
import {Link} from 'react-router-dom'

export const Employee = ({employee}) => (

	<div id={employee.id}>
		<strong><Link to={'/employees/' + employee.id}>{employee.fullname}</Link></strong>
	</div>

)
