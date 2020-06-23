import React from 'react'
import ShowAllEmployees from './employees/ShowAllEmployees'
import ShowEmployeeUpcomingBirthdays from './employees/ShowEmployeeUpcomingBirthdays'

const MainPage = () => (
	<div className="container">
		<div className="row">
			<div className="col-sm">
				<ShowAllEmployees />
			</div>
			<div className="col-sm">
				<ShowEmployeeUpcomingBirthdays />
			</div>
			<div className="col-sm">
				<strong>Odds & Ends</strong>
			</div>
		</div>
	</div>
)


export default MainPage