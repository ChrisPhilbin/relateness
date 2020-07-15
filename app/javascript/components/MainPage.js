import React from 'react'
import ShowAllEmployees from './employees/ShowAllEmployees'
import ShowEmployeeUpcomingBirthdays from './employees/ShowEmployeeUpcomingBirthdays'

const MainPage = () => (
	<div className="container">
		<div className="row">
			<div className="col-sm show-employees">
				<ShowAllEmployees />
			</div>
			<div className="col-sm show-birthdays">
				<ShowEmployeeUpcomingBirthdays />
			</div>
			<div className="col-sm show-odds-ends">
				<strong>Odds & Ends</strong>
			</div>
		</div>
	</div>
)


export default MainPage