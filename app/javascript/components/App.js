import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import Index from './Index'
import { Alert } from './helpers/notifications'
import rootReducer from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

const App = () => {

	return(
	  <div>
		  <Provider store={store}>
		    <Index />
			<Alert stack={ { limit: 3 } } />
		  </Provider>
	  </div>
	)
}

export default App