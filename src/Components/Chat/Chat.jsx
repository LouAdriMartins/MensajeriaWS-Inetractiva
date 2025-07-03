import React from "react"
import Message from "../Message/Message"
import { useContext } from "react"
import { MessageContext } from "../../Context/MessageContext"

export default function Chat() {
    const {messages} = useContext(MessageContext)

    if (messages.length === 0) {
        return (
            <div>
                <span>No hay mensajes en la bandeja de entrada!</span>
            </div>
        )
    }
    return (
        <div>
        {messages.map((message) => {
            return (
            <Message
                key={message.id}
                id={message.id}
                emisor={message.emisor}
                hora={message.hora}
                texto={message.texto}
                status={message.status}
            />
            );
        })}
        </div>
    );
}
