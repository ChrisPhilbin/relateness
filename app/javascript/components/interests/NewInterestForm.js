import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { createNewInterest } from '../actions/interestsActions'

const NewInterestForm = () => {

    const dispatch = useDispatch()

    let [interest, setInterest] = useState('')

    const onInterestSubmit = (e, csrf = document.querySelector('[name=csrf-token]').content) => {
        e.preventDefault()
        let new_interest = {name: interest}
        dispatch(createNewInterest(new_interest, csrf))
    }

    return(
        <section>
            <div>
                <Form>
                    <Form.Group controlId="formNewInterest">
                        <Form.Label>Add new interest:</Form.Label>
                        <Form.Control type="text" name="interest" placeholder="Enter interest..." value={interest} onChange={(e) => setInterest(e.target.value)} />

                        <Button variant="primary" type="submit" onClick={onInterestSubmit}>
                            Add
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </section>
    )
}

export default NewInterestForm