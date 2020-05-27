//component will return the interests assigned to the employee - accepts a single
//interest 

import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button'

import {fetchEmployeeInterests, addInterestsToEmployee, deleteInterestFromEmployee} from '../actions/interestsActions'

import AddInterestsToEmployeeForm from './AddInterestsToEmployeeForm'


export const EmployeeInterest = (props) => {

	const dispatch = useDispatch()
	const csrf = document.querySelector('[name=csrf-token]').content

	useEffect(() =>{
		dispatch(fetchEmployeeInterests(props.id))
	}, [])

	const interests               =  useSelector(state => state.interests.employees_interests)
	const interests_loading       =  useSelector(state => state.interests.loading)
	const interests_hasErrors     =  useSelector(state => state.interests.hasErrors)

	if (interests_loading === "true") {
		return (<p>Loading their interests... please wait...</p>)
	}
	
	if (interests_hasErrors === "true") {
		return (<p>Something went wrong when trying to load their interests... please try again...</p>)
	}

	if (interests.length == 0) {
		return(
			<div>
				It looks like you haven't assigned any interests yet.<br />
				<AddInterestsToEmployeeForm id={props.id} />
			</div>
		)
	}

	if (interests.length >= 1) {
		return(
			<div>
				<AddInterestsToEmployeeForm id={props.id} />
				{ JSON.stringify(interests) != '[]' && 
					<>
					{interests.map( (interest) => (
						<div key={interest.id}>
							{interest.name} <Button variant="link" onClick={() => {dispatch(deleteInterestFromEmployee(props.id, interest.id, csrf))}}>remove</Button>
						</div>
					))}
					</>
				}
			</div>
		)
	}

}