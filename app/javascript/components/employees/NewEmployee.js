import React from 'react'
import {connect} from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import {createNewEmployee} from '../actions/employeesActions'


class NewEmployee extends React.Component {

	state = {
		fullname: '',
		hiredate:  new Date(),
		date: new Date()
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	onHireChange = (date) => {
		this.setState({hiredate: date})
	}

	onDateChange = (date) => {
		this.setState({date: date})
	}

	onSubmit = (e, csrf = document.querySelector('[name=csrf-token]').content) => {
		e.preventDefault()

		let formData = {employee: this.state}

		this.props.createNewEmployee(formData, csrf)
		this.props.history.push('/')
	}

	render(){
		return(

			<section>
				<Form>
					<Form.Group controlId="formEmployeeFullname">
						<Form.Label>Employee's fullname:</Form.Label>
						<Form.Control type="text" name="fullname" placeholder="Samantha Smith" autoFocus value={this.state.fullname} onChange={this.onChange} />
					</Form.Group>

					<Form.Group controlId="formEmployeeHiredate">
						<Form.Label>Hire date: </Form.Label>
						<DatePicker selected={this.state.hiredate} onChange={this.onHireChange} />
						{/* <Form.Control type="text" name="hiredate" placeholder="mm/dd/yy" value={this.state.hiredate} onChange={this.onChange} /> */}
					</Form.Group>

					<Form.Group controlId="formEmployeeBirthday">
						<Form.Label>Birthday: </Form.Label>
						<DatePicker selected={this.state.date} onChange={this.onDateChange} />
					</Form.Group>

					<Button variant="primary" type="submit" onClick={this.onSubmit}>
						Create
					</Button>
				</Form>
			</section>
		)
	}
}

export default connect(null,{createNewEmployee})(NewEmployee)