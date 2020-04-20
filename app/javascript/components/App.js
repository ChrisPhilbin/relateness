import 'bootstrap/dist/css/bootstrap.css';
import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import TopNav from './navigation/TopNav'
import MainPage from './MainPage'
import NewEmployee from './employee/NewEmployee'
import NewInterest from './interest/NewInterest'
import ShowEmployee from './employee/ShowEmployee'
import EditEmployee from './employee/EditEmployee'
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
		      		<Route exact path="/interests/new" render={ () => <NewInterest /> } />
		      		<Route exact path="/employees/new" render={ () => <NewEmployee /> } />
		      		<Route exact path="/employees/:id" component={ShowEmployee} />
		      		<Route exact path="/employees/:id/edit" component={EditEmployee} />
		      	</Switch>
		      </BrowserRouter>
		    </Provider>
		</div>
    );
  }
}

export default App
