import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import MainPage from './MainPage'
import NewEmployee from './employees/NewEmployee'
import ShowEmployeeDetails from './employees/ShowEmployeeDetails'
import EditEmployee from './employees/EditEmployee'
import TopNav from './navigation/TopNav'
import Container from 'react-bootstrap/Container'
import ShowAllInterests from './interests/ShowAllInterests'

import 'bootstrap/dist/css/bootstrap.css'

const Index = () => {
  return(
	<Container>
		<Router>
			<TopNav />
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route exact path="/interests" component={ShowAllInterests} />
				<Route exact path="/employees/new" component={NewEmployee} />
				<Route exact path="/employees/:id" render={ (props) => <ShowEmployeeDetails id={props.match.params.id} />} />
				<Route exact path="/employees/:id/edit" render={ (props) => <EditEmployee id={props.match.params.id} />} />
			</Switch>
		</Router>
	</Container>
  )
}

export default Index

