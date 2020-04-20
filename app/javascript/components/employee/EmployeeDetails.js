import React from 'react'
import {GetEmployeeDetails, GetEmployeeInterests} from './fetch/FetchEmployeeInfo'
// import ShowInterest from '../interest/ShowInterest'

// class EmployeeDetails extends React.Component {

	// state = {
	// 	employee: {},
	// 	interests: []
	// }

	// componentDidMount() {

	// 	const { id } = this.props.match.params

	// 	GetEmployeeDetails(id)

	// 	GetEmployeeInterests(id)

	// 	fetch('/v1/employees/' + id)
	// 	.then(employee_details => employee_details.json())
	// 	.then((employee_details) => {
	// 		this.setState(() => ( { employee: employee_details }))
	// 	})

	// 	fetch('/v1/employees/' + id + '/interests')
	// 	.then(employee_interests => employee_interests.json())
	// 	.then((employee_interests) => {
	// 		// console.log(employee_interests[0])
	// 		this.setState(() => ({ interests: employee_interests }))
	// 	})

	// }
const EmployeeDetails = () => (

	const ee = this.props.match.params;
	const employee_details = GetEmployeeDetails(ee);
	const employee_interests = GetEmployeeInterests(ee);
	console.log(employee_details)

	return(
		<div>
		{console.log('test')}
		Hello world!
		</div>
	)
)

export default EmployeeDetails