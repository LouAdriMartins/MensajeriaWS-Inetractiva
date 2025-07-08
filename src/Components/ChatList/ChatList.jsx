import React, { useContext, useEffect } from 'react'
import Chat from "../Chat/Chat"
import NewMessageForm from "../NewMessageForm/NewMessageForm"
import LoaderSpinner from "../LoaderSppiner/LoaderSpinner"
import { useParams, Link } from 'react-router'
import { MessageContext } from "../../Context/MessageContext"

export default function MessageList() {
    const { contact_id } = useParams()
    const { loadMessages, isLoadingMessages } = useContext(MessageContext)

    useEffect(() => {
        loadMessages(contact_id)
    }, [contact_id])

    if (isLoadingMessages) {
        return <LoaderSpinner />
    }

    return (
        <div>
            <Link to={`/contact/${contact_id}/detail`}>Ir a detalle de contacto!</Link>
            <Chat />
            <NewMessageForm />
        </div>
    )
}