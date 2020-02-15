import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import MainPage from './MainPage'
import NewEmployee from './employee/NewEmployee'
import NewInterest from './interest/NewInterest'
import configureStore from '../configureStore'

const store = configureStore()


class App extends React.Component {
  render () {
    return (
    	<Provider store={store}>
	      <BrowserRouter>
	      	<Switch>
	      		<Route exact path="/" render={ () => <MainPage /> } />
	      		<Route exact path="/interests" render={ () => <InterestList /> } />
	      		<Route exact path="/interests/new" render={ () => <NewInterest /> } />
	      		<Route exact path="/employees/new" render={ () => <NewEmployee /> } />
	      	</Switch>
	      </BrowserRouter>
	    </Provider>
    );
  }
}

export default App
