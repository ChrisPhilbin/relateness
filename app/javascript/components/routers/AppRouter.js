import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopNav from '../navigation/TopNav'
import MainPage from '../MainPage'

const AppRouter = () => (

    <BrowserRouter>
    	<div>
	      	<TopNav />
	      	<Switch>
	      		<Route path="/" exact component={MainPage} />
	      	</Switch>
      	</div>
    </BrowserRouter>

);

export default AppRouter