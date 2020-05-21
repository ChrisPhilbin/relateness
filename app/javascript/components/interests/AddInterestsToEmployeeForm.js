import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Select from 'react-select';
import makeAnimated from 'react-select/animated'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {fetchAllInterests} from '../actions/interestsActions'
import {addInterestsToEmployee} from '../actions/employeesActions'

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

    const [selectedOptions, setSelectedOptions] = useState([])

    const handleChange = options => {
        setSelectedOptions(options)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        let ee_interests = selectedOptions.map( int => (int.value))
        dispatch(addInterestsToEmployee(ee_interests))
        
    }

    const animatedComponents = makeAnimated()

    return (
        <Form onSubmit={handleSubmit}>
            <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            value={selectedOptions}
            options={options}
            onChange={handleChange}
            />

            <Button variant="primary" type="submit">Assign</Button>
        </Form>
    );
}

export default AddInterestsToEmployeeForm