import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';

import {fetchAllInterests} from '../actions/interestsActions'

const NewInterestForm = () => {

    dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchAllInterests)
    }, [])

    const interests = useSelector(state => state.interests.interests)

    const options = []

    interests.map( (interest) => (
        options.push({ value: interest.name, label: interest.name })
    ))

    const [selectedOption, setSelectedOption] = useState(null)

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption)
    };

    return (
        <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        />
    );
}

export default NewInterestForm