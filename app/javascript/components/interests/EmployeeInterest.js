//component will return the interests assigned to the employee - accepts a single
//interest 

import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {fetchEmployeeInterests} from '../actions/interestsActions'


export const EmployeeInterest = (props) => {

	const dispatch = useDispatch()

	useEffect(() =>{
		dispatch(fetchEmployeeInterests(props.id))
	}, [])

	const interests               =  useSelector(state => state.interests.interests)
	const interests_loading       =  useSelector(state => state.interests.loading)
	const interests_hasErrors     =  useSelector(state => state.interests.hasErrors)


	if (interests_loading === "true") {
		return (<p>Loading their interests... please wait...</p>)
	}
	
	if (interests_hasErrors === "true") {
		return (<p>Something went wrong when trying to load their interests... please try again...</p>)
	}

	if (interests === '[]') {
		return(<p>It looks like you haven't assigned any interests yet...</p>)
	}

	if (interests != '[]') {
		return(
			<div>
				{ JSON.stringify(interests) != '[]' && 
					<>
					{interests.map( (interest) => (
						<div key={interest.id}>
							{interest.interest}
						</div>
					))}
					</>
				}
			</div>
		)
	}

}