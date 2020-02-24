import 'bootstrap/dist/css/bootstrap.css';
import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import TopNav from './navigation/TopNav'
import MainPage from './MainPage'
import NewEmployee from './employee/NewEmployee'
import NewInterest from './interest/NewInterest'
import configureStore from '../configureStore'

const store = configureStore()


class App extends React.Component {
  render () {
    return (
    	<div>
	    	<Provider store={store}>
		      <BrowserRouter>
		      	<TopNav />
		      	<Switch>
		      		<Route exact path="/" render={ () => <MainPage /> } />
		      		<Route exact path="/interests" render={ () => <InterestList /> } />
		      		<Route exact path="/interests/new" render={ () => <NewInterest /> } />
		      		<Route exact path="/employees/new" render={ () => <NewEmployee /> } />
		      		<Route exact path="/employees/:id" render={ () => <EmployeeDetails /> } />
		      	</Switch>
		      </BrowserRouter>
		    </Provider>
		</div>
    );
  }
}

export default App
