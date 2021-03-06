import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import {fetchAllInterests} from '../actions/interestsActions'
import {deleteInterest} from '../actions/interestsActions'
import NewInterestForm from './NewInterestForm'

export const ShowAllInterests = () => {

    const dispatch = useDispatch()
    const csrf = document.querySelector('[name=csrf-token]').content

    useEffect(() => {
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
                <NewInterestForm interests={interests} />
				<Table striped borderless>
					{ JSON.stringify(interests) != '[]' && 
						<>
						{interests.map( (interest) => (
							<tr>
								<td>
									<div key={interest.id}>
										{interest.name}
									</div>
								</td>

								<td>
										<Button onClick={ () => {dispatch(deleteInterest(interest, csrf))} }>
											&times;
										</Button>
								</td>
							</tr>
						))}
						</>
					}
				</Table>
			</div>
		)
	}
}
export default ShowAllInterests