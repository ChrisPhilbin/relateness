import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Select from 'react-select';
import makeAnimated from 'react-select/animated'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {fetchAllInterests} from '../actions/interestsActions'
import {addInterestsToEmployee} from '../actions/interestsActions'

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

    const csrf = document.querySelector('[name=csrf-token]').content
    const handleSubmit = (e) => {
        e.preventDefault()
        let interests_arr = selectedOptions.map( int => (int.value))
        let ee_interests = { interests: interests_arr }
        dispatch(addInterestsToEmployee(ee_interests, props.id, csrf))
        
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