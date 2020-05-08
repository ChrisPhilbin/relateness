import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import MainPage from './MainPage'
import NewEmployee from './employees/NewEmployee'
import ShowEmployeeDetails from './employees/ShowEmployeeDetails'
import TopNav from './navigation/TopNav'
import Container from 'react-bootstrap/Container'

const Index = () => {
  return(
	<Container>
		<TopNav />
		<Router>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route exact path="/employees/new" component={NewEmployee} />
				<Route exact path="/employees/:id" render={ (props) => <ShowEmployeeDetails id={props.match.params.id} />} />
			</Switch>
		</Router>
	</Container>
  )
}

export default Index

