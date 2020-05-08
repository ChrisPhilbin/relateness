import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {fetchSingleEmployee} from '../actions/employeesActions'
import {fetchEmployeeInterests} from '../actions/interestsActions'
import {fetchEmployeeInterestsNews} from '../actions/interestsActions'

import {EmployeeDetails} from './EmployeeDetails'
import {EmployeeInterest} from '../interests/EmployeeInterest'
import {DisplayInterestsNewsItems} from '../interests/DisplayInterestsNewsItems'

const ShowEmployeeDetails = (props) => {

	const dispatch = useDispatch()

	const employee_details =         useSelector(state => state.employees.employee_details)
	const employee_loading =         useSelector(state => state.employees.loading)
	const employee_hasErrors =       useSelector(state => state.employees.hasErrors)
	const interests =                useSelector(state => state.interests.interests)
	const interests_loading =        useSelector(state => state.interests.loading)
	const interests_hasErrors =      useSelector(state => state.interests.hasErrors)
	const interests_news =           useSelector(state => state.interests.interests_news.articles)
	const interests_news_loading =   useSelector(state => state.interests.interests_news_loading)
	const interests_news_hasErrors = useSelector(state => state.interests.interests_news_hasErrors)

	useEffect(() => {
		dispatch(fetchSingleEmployee(props.id))
		dispatch(fetchEmployeeInterests(props.id))
		dispatch(fetchEmployeeInterestsNews(props.id))
	}, [])

	const renderEmployeeDetails = () => {
		if (employee_loading)   return <p>Loading employee details...</p>
		if (employee_hasErrors) return <p>Something went wrong loading the employee details... please try again...</p>
		return <EmployeeDetails employee_details={employee_details} />
	}

	const renderEmployeeInterests = () => {
		if (interests_loading)   return <p>Loading employee's interests...</p>
		if (interests_hasErrors) return <p>Something went wrong loading the employee's interests... please try again...</p>
		return interests.map( interest => <EmployeeInterest interest={interest} key={interest.id} />)
	}

	const renderEmployeeInterestsNewsItems = () => {
		if (interests_news_loading) return <p>Loading interest news...</p>
		if (interests_news_hasErrors) return <p>Something went wrong loading the news... please try again...</p>
		if (interests_news.length > 1) return <DisplayInterestsNewsItems interests_news={interests_news} key={interests_news.length} />
	}

	return (
		<section>
			<div>
				{renderEmployeeDetails()}
				{renderEmployeeInterests()}
				{renderEmployeeInterestsNewsItems()}
			</div>
		</section>
	)

}

export default ShowEmployeeDetails