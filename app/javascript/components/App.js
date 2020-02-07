import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import EmployeeList from './EmployeeList'
import NewEmployee from './NewEmployee'
// import HelloWorld from './HelloWorld'
import configureStore from '../configureStore'

const store = configureStore()


class App extends React.Component {
  render () {
    return (
    	<Provider store={store}>
	      <BrowserRouter>
	      	<Switch>
	      		<Route exact path="/" render={ () => <EmployeeList /> } />
	      		<Route exact path="/employees/new" render={ () => <NewEmployee /> } />
	      	</Switch>
	      </BrowserRouter>
	    </Provider>
    );
  }
}

export default App
