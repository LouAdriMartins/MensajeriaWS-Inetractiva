import React, { useContext, useEffect } from 'react'
import Chat from '../../Components/Chat/Chat'
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"
import { useParams } from 'react-router'
import { MessageContext } from '../../Context/MessageContext'


export default function MessagesScreen() {
    const {contact_id} = useParams()
    const {loadMessages} = useContext(MessageContext)

    useEffect(
        () => {
            loadMessages(contact_id)
        },
        [contact_id]
    )
    return (
        <div>
            <Chat/>
            <NewMessageForm/>
        </div>
    )
}