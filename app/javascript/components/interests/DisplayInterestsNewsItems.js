//presentation component will take in a JSON object and will render the headline,
//description and other details to the DOM

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

// import React from 'react'
// import Accordion from 'react-bootstrap/Accordion'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

// export const DisplayInterestsNewsItems = ({interests_news}) => (
// 	<div>
// 		<Accordion>
// 			{interests_news.map( (article) => (
// 				<>
// 					<Card>
//     					<Card.Header>
//       						<Accordion.Toggle as={Button} variant="link" eventKey="0">
//         						{article.title}
// 							</Accordion.Toggle>
//     					</Card.Header>
//     					<Accordion.Collapse eventKey="0">
//       						<Card.Body>{article.description}... (<a href={article.url}>read more</a>) </Card.Body>
//     					</Accordion.Collapse>
//   					</Card>
// 				</>
// 			))}
// 		</Accordion>
// 	</div>
// )