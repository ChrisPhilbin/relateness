import React, { useState } from 'react'
import { connect } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { createNewInterest } from '..interests/interestsActions'

const NewInterest = () => {


    //initialize interest to be a blank string
    let [interest, setInterest] = useState('')

    const onInterestSubmit = (e, csrf = document.querySelector('[name=csrf-token]').content) => {
        e.preventDefault()
        createNewInterest(e.target.value, csrf)
    }

    return(
        <section>
            <div>
                <Form>
                    <Form.Group controlId="formNewInterest">
                        <Form.Label>Add new interest:</Form.Label>
                        <Form.Control type="text" name="interest" placeholder="Enter interest..." value={interest} onChange={(e) => setInterest(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={onInterestSubmit}>
                        Create
                    </Button>

                </Form>
            </div>
        </section>
    )
}

export default NewInterest