//will display all news for interests that are owned by a particular employee
//must take in an employee ID in order to obtain array of all interests

import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {fetchEmployeeInterestsNews} from '../actions/interestsActions'
import {DisplayInterestsNewsItems} from './DisplayInterestsNewsItems'

const ShowEmployeesInterestsNews = ({dispatch, interest_news, loading, hasErrors, id}) => {

	const ee_id = id

	useEffect(() => {
		dispatch(fetchEmployeeInterestsNews(ee_id))
	}, [dispatch])

	const renderEmployeeInterestsNewsItems = () => {
		if (loading) return <p>Loading interest news... please wait...</p>
		if (hasErrors) return <p>Something went wrong loading the news... please try again...</p>
		return interest_news.articles.map(news => <DisplayInterestsNewsItems news={news} />)		
	}

	return(
		<section>
			<div>
				<DisplayInterestsNewsItems />
			</div>
		</section>
	)

	const mapStateToProps = (state, ownProps) => ({
		interest_news: state.interests.interests_news,
		loading:       state.interests.interests_news_loading,
		hasErrors:     state.interests.interests_news_hasErrors,
		id:            ownProps.id
	})

}

export default connect(mapStateToProps)(ShowEmployeesInterestsNews)