import React, { useState, useEffect } from 'react';

import Alert from 'react-bootstrap/Alert'

import AlertComponent from './Alert'

const FlashMessages = (props) => {

    const [messages, setMessages] = useState(props.messages)

    return(
        <div>
            { messages.map(message =>
            <AlertComponent key={message.id} message={message} />) }
        </div>
    )

}

export default FlashMessages