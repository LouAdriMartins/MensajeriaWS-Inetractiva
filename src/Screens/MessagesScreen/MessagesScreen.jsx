import React from 'react'
import Chat from '../../Components/Chat/Chat'
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"


export default function MessagesScreen() {
    return (
        <div>
            <Chat/>
            <NewMessageForm/>
        </div>
    )
}