import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch, connect} from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


import {fetchSingleEmployee} from '../actions/employeesActions'
import {updateEmployee} from '../actions/employeesActions'

const EditEmployee = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingleEmployee(props.id))
    }, [])

    //get initial values from redux store
    const fullnane  = useSelector(state => state.employees.employee_details.fullname)
    const hiredate  = useSelector(state => state.employees.employee_details.hiredate)
    const birthdate = useSelector(state => state.employees.employee_details.birthdate)

    //set local state to the values that were in the redux store/returned by the fetchSingleEmployee function
    const [fullname, setFullname]   = useState(fullname)
    const [hiredate, setHiredate]   = useState(hiredate)
    const [birthdate, setBirthdate] = useState(birthdate)

    onSubmit = (e, csrf = document.querySelector('[name=csrf-token]').content) => {
		e.preventDefault()

		let formData = {employee: this.state}

		this.props.updateEmployee(formData, csrf)
		this.props.history.push('/')
		debugger;
    }

    onChange = (e) => setFullname({
        [e.currentTarget.fullname]: e.currentTarget.value
    })

    }
    
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
                </Form.Group>

                <Form.Group controlId="formEmployeeBirthday">
                    <Form.Label>Birthday: </Form.Label>
                    <DatePicker selected={this.state.birthdate} onChange={this.onBirthdateChange} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                    Update details
                </Button>
            </Form>
		</section>

	)

}
export default connect(null, {fetchSingleEmployee, updateEmployee})(EditEmployee)