import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import fetchAllInterests from '../actions/interestsActions'

const ShowAllInterests = () => {

    const dispatch = useDispatch()

    useEffect = (() => {
        dispatch(fetchAllInterests())
    }, [])

    const interests               =  useSelector(state => state.interests.interests)
	const interests_loading       =  useSelector(state => state.interests.loading)
	const interests_hasErrors     =  useSelector(state => state.interests.hasErrors)


    if (interests_loading === "true") {
		return (<p>Loading all interests... please wait...</p>)
	}
	
	if (interests_hasErrors === "true") {
		return (<p>Something went wrong when trying to load interests... please try again...</p>)
	}

	if (interests.length == 0) {
		return(<p>It looks like you haven't created any interests yet.</p>)
	}

	if (interests.length >= 1) {
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

export default ShowAllInterests