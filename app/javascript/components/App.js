import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provicer } from 'react-redux'
import HelloWorld from './HelloWorld'
import configureStore from '../configureStore'

const store = configureStore()


class App extends React.Component {
  render () {
    return (
    	<Provider store={store}>
	      <ReactRouter>
	      	<Switch>
	      		<Route exact path="/" render{ () => ("Home!")} />
	      		<Route exact path="/hello" render{ () => <HelloWorld greeting="Friend"/> } />
	      	</Switch
	      </ReactRouter>
	    </Provider>
    );
  }
}

export default App
