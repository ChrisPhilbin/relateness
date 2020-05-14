import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { render } from 'react-dom'

const NewInterest = () => {
    return(
        <section>
            <div>
                <Form>
                    <Form.Group controlId="formNewInterest">
                        <Form.Label>Add new interest:</Form.Label>
                        <Form.Control type="text" name="interest" placeholder="Enter interest..." />
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