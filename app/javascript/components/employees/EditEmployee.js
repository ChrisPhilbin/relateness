import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch, connect} from 'react-redux'
import { parseISO, format } from 'date-fns'

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
    const fullname  = useSelector(state => state.employees.employee_details.fullname)
    const hiredate  = useSelector(state => state.employees.employee_details.hiredate)
    const date = useSelector(state => state.employees.employee_details.date)

    //set local state to the values that were in the redux store/returned by the fetchSingleEmployee function
    let [localFullname, setLocalFullname]   = useState(fullname)
    let [localHiredate, setLocalHiredate]   = useState(hiredate)
    let [localDate, setLocalDate] = useState(date)

    const onSubmit = (e, csrf = document.querySelector('[name=csrf-token]').content) => {
		e.preventDefault()

		let formData = {employee: ''}

		props.updateEmployee(formData, csrf)
		props.history.push('/')
    }

    const onLocalFullnameChange = (e) => setLocalFullname({
        [localFullname]: e.currentTarget.value
    })

    const onLocalHireChange = (date) => setLocalHiredate({
        [localHiredate]: date
    })

    const onLocalDateChange = (date) => setLocalDate(date)

    debugger;

	return(

		<section>
            <Form>
                <Form.Group controlId="formEmployeeFullname">
                    <Form.Label>Employee's fullname:</Form.Label>
                    <Form.Control type="text" name="fullname" placeholder="Samantha Smith" autoFocus value={localFullname} onChange={onLocalFullnameChange} />
                </Form.Group>

                <Form.Group controlId="formEmployeeHiredate">
                    <Form.Label>Hire date: </Form.Label>
                    <DatePicker selected={parseISO(localHiredate)} onChange={onLocalHireChange} />
                </Form.Group>

                <Form.Group controlId="formEmployeeBirthday">
                    <Form.Label>Birthday: </Form.Label>
                    <DatePicker selected={parseISO(localDate)} onChange={onLocalDateChange} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Update details
                </Button>
            </Form>
		</section>

	)

}
export default connect(null, {fetchSingleEmployee, updateEmployee})(EditEmployee)