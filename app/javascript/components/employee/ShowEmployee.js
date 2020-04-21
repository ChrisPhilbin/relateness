import React from 'react'
import EmployeeDetails from './EmployeeDetails'
import {UpdateAllInterests, UpdateSingleInterest} from '../interest/fetch/FetchInterestInfo'


export default function ShowEmployee(props) {

	// const news = UpdateAllInterests(props)
	// console.log(news);

	return(
		<div>
			<EmployeeDetails {...props}/>

		</div>
	)
}