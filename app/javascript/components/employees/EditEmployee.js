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
    const fullname     = useSelector(state => state.employees.employee_details.fullname)
    const hiredate     = useSelector(state => state.employees.employee_details.hiredate)
    const date         = useSelector(state => state.employees.employee_details.date)
    const primaryemail = useSelector(state => state.employees.employee_details.primaryemail)
    const nickname     = useSelector(state => state.employees.employee_details.nickname)
    const homephone    = useSelector(state => state.employees.employee_details.homephone)
    const workphone    = useSelector(state => state.employees.employee_details.workphone)
    const eenumber     = useSelector(state => state.employees.employee_details.eenumber)
    const pets         = useSelector(state => state.employees.employee_details.pets)

    //set local state to the values that were in the redux store/returned by the fetchSingleEmployee function
    let [localFullname, setLocalFullname]   = useState(fullname)
    let [localHiredate, setLocalHiredate]   = useState(hiredate)
    let [localDate, setLocalDate] = useState(date)
    let [localPrimaryemail, setLocalPrimaryemail] = useState(primaryemail)
    let [localNickname, setLocalNickname] = useState(nickname)
    let [localHomephone, setLocalHomephone] = useState(homephone)
    let [localWorkphone, setLocalWorkphone] = useState(workphone)
    let [localEenumber, setLocalEenumber] = useState(eenumber)
    let [localPets,setLocalPets] = useState(pets)

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

        <div className="container-fluid">
                <Form>
                    <Form.Row>
                        <Form.Group controlId="formEmployeeFullname">
                            <Form.Label>Employee's fullname</Form.Label>
                            <Form.Control type="text" name="fullname" placeholder="Samantha Smith" autoFocus value={localFullname} onChange={onLocalFullnameChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmployeePrimaryEmail">
                            <Form.label>Primary Email</Form.label>
                            <Form.Control type="email" name="primaryemail" placeholder="email@email.com" value={localPrimaryemail} onChange={onLocalPrimaryemailChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="formEmployeeNickname">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control type="text" name="nickname" placeholder="Sam" value={localNickname} onChange={onLocalNicknameChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmployeeHomePhone">
                            <Form.Label>Primary home phone</Form.Label>
                            <Form.Control type="text" name="homephone" placeholder="(123)-456-7890" value={localHomephone} onChange={onLocalHomephoneChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="formEmployeeNumber">
                            <Form.Label>Employee number</Form.Label>
                            <Form.Control type="text" name="employeenumber" placeholder="####" value={localEmployeenumber} onChange={onLocalEmployeenumberChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmployeeWorkPhone">
                            <Form.Label>Primary work phone</Form.Label>
                            <Form.Control type="text" name="workphone" placeholder="(123)-456-7890" value={localWorkphone} onChange={onLocalWorkphoneChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="formAnniversary">
                            <Form.Label>Work Anniversary</Form.Label>
                            <Form.Control type="text" name="workanniversary" placeholder="11/20/2017" value={localWorkanniversary} onChange={onLocalWorkanniversaryChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmployeePets">
                            <Form.Label>Pets</Form.Label>
                            <Form.Control type="text" name="Pets" placeholder="Shelly, Abby, Delta" value={localPets} onChange={onLocalPetsChange} />
                        </Form.Group>
                    </Form.Row>

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
        </div>

	)

}
export default connect(null, {fetchSingleEmployee, updateEmployee})(EditEmployee)