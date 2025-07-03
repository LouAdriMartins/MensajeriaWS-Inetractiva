import React from 'react'
import Chat from '../../Components/Chat/Chat'
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"


export default function HomeScreen() {
    return (
        <div>
            <Chat/>
            <NewMessageForm/>
        </div>
    )
}
