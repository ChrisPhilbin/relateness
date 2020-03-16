import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmployeeList from './employee/EmployeeList'
import InterestList from './interest/InterestList'

class MainPage extends Component {

	render() {
		return (
			<div>
				<EmployeeList />
			</div>
		)
	}
}

export default MainPage