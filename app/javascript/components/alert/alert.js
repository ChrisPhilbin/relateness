import React from 'react'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const Alert = (props) => {


    const alertClass = (type) => {
        let classes = {
            error: 'alert-danger',
            alert: 'alert-warning',
            notice: 'alert-info',
            success: 'alert-success'
        }
        return classes[type] || classes.success
    }

    const message = props.message
    const alertClassName = 'alert ${ alertClass(message.type) } fade in'

    return(
        <div clasName={ alertClassName }>
            <Button className="close"
            data-dismiss="alert">
                &times;
            </Button>
            {message.text}
        </div>
    )
}

export default Alert