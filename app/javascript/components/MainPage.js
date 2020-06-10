import React from 'react'
import ShowAllEmployees from './employees/ShowAllEmployees'
import ShowEmployeeUpcomingBirthdays from './employees/ShowEmployeeUpcomingBirthdays'

const MainPage = () => (
	<div class="container">
		<div class="row">
			<div class="col-sm">
				<ShowAllEmployees />
			</div>
			<div class="col-sm">
				<ShowEmployeeUpcomingBirthdays />
			</div>
			<div class="col-sm">
				<strong>Odds & Ends</strong>
			</div>
		</div>
	</div>
)


export default MainPage