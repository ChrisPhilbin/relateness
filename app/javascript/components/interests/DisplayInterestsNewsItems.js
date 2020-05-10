import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import {fetchEmployeeInterestsNews} from '../actions/interestsActions'

export const DisplayInterestsNewsItems = (props) => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchEmployeeInterestsNews(props.id))
	}, [])

	const interests_news_loading   = useSelector(state => state.interests.interests_news_loading)
	const interests_news_hasErrors = useSelector(state => state.interests.interests_news_hasErrors) 	
	const interests_news           = useSelector(state => state.interests.interests_news)

	if (interests_news_loading === "true") {
		return (<p>Loading news... please wait....</p>)
	}

	if (interests_news_hasErrors === "true") {
		return (<p>Something went wrong when loading the latest news.... please try again...</p>)
	}

	return(
		<div>
			{ JSON.stringify(interests_news) != '{}' && 
			
			<Accordion>
				{interests_news.articles.map( (article) => (
					<>
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="0">
									{article.title}
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0">
								<Card.Body>{article.description}... (<a href={article.url}>read more</a>) </Card.Body>
							</Accordion.Collapse>
						</Card>
					</>
				))}
			</Accordion>
			
			}
		</div>
	)
}