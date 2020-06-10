import React from 'react'
import ShowAllEmployees from './employees/ShowAllEmployees'

const MainPage = () => (
	<div class="container">
		<div class="row">
			<div class="col-sm">
				<ShowAllEmployees />
			</div>
			<div class="col-sm">
				<strong>Upcoming birthdays...</strong>
			</div>
			<div class="col-sm">
				<strong>Odds & Ends</strong>
			</div>
		</div>
	</div>
)


export default MainPage