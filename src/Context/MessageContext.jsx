import React, { createContext } from "react"
import { useState } from "react"

export const MessageContext = createContext();

const MessageContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "Hola que tal?",
        status: "visto",
        },
        {
        emisor: "USUARIO",
        hora: "23:11",
        id: 2,
        texto: "Si, hoy aprendi estados",
        status: "visto",
        },
        {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "Eso que significa 🤓?",
        status: "no-visto",
        },
        {
        emisor: "YO",
        hora: "23:13",
        id: 4,
        texto: "Estas ahi?",
        status: "no-recibido",
        },
    ]);

    const handleDeleteMessages = (id_message) => {
        const NewMessageList = [];
        for (const message of messages) {
        if (message.id !== id_message) {
            NewMessageList.push(message)
        }
        }
        // Para actualizar nuevamente el estado de los mensajes llamo a la función setMessages
        setMessages(NewMessageList);
    };

    const AddNewMessage = (text) => {
        const newMessage = {
        emisor: "YO",
        hora: new Date().toLocaleTimeString(),
        id: messages.length + 1,
        texto: text,
        }
        const cloneMessages = [...messages]
        cloneMessages.push(newMessage)
        setMessages(cloneMessages)
    };
    return (
        <MessageContext.Provider
            value={{
                messages: messages,
                handleDeleteMessages: handleDeleteMessages,
                AddNewMessage: AddNewMessage
            }}
        >
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContextProvider
