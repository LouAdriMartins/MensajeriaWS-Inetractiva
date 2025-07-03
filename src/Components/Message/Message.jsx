import React, { use } from 'react'
import { useContext } from 'react'
import { MessageContext } from '../../Context/MessageContext'

export default function Message({ emisor, hora, id, texto, status }) {
    const {handleDeleteMessages} = useContext(MessageContext)
    
    const className = {
        message: 'chat-dialog',
        status: 'chat-dialog--status',
        hora: 'chat-dialog--hora',
        eliminar: 'chat-dialog--eliminar',
    }
    if (emisor === "YO") {
        className.message = className.message + ' chat-dialog--emisor';
    }

    return (
        <div className={className.message}>
            <span>{texto}</span>
            <div>
                <span>{hora}</span>
                <span>{status}</span>
                <button onClick = {() => handleDeleteMessages(id)}>Eliminar</button>
            </div>
        </div>
    )
}
