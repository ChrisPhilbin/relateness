import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Select from 'react-select';
import makeAnimated from 'react-select/animated'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {fetchAllInterests} from '../actions/interestsActions'
// import {addInterestsToEmployee} from '../actions/employeesActions'

const AddInterestsToEmployeeForm = (props) => {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchAllInterests())
    }, [])

    const interests = useSelector(state => state.interests.interests)

    const options = []

    interests.map( (interest) => (
        options.push({ value: interest.name, label: interest.name })
    ))

    const [selectedOption, setSelectedOption] = useState("test...")

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        debugger;
    }

    const animatedComponents = makeAnimated()

    return (
        <Form onSubmit={handleSubmit}>
            <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            onChange={handleChange}
            options={options}
            />

            <Button variant="primary" type="submit">Assign</Button>
        </Form>
    );
}

export default AddInterestsToEmployeeForm