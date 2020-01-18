import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HelloWorld from './HelloWorld'


class App extends React.Component {
  render () {
    return (
      <ReactRouter>
      	<Switch>
      		<Route exact path="/" render{ () => ("Home!")} />
      		<Route exact path="/hello" render{ () => <HelloWorld greeting="Friend"/> } />
      	</Switch
      </ReactRouter>
    );
  }
}

export default App
