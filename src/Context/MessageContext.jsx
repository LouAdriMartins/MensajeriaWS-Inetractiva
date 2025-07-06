//--------------------------------------------CREACIÓN DE CONTEXTO-MENSAJES----------------------------------------------------------
/* Archivo: src/Context/MessageContext.jsx
    Este archivo contiene la función de estado que renderiza los mensajes en la pantalla de chat. En este caso, se simula una llamada a un servicio getMessagesByContactId que retorna una lista de mensajes para un contacto específico. Además, se usa la función setTimeout para simular un retraso en la carga de los mensajes, para lo cual se creo un spinner de carga de WhatsApp.

- Componentes que consumen este contexto: 
    Chat, Message, NewMessageForm, MessagesScreen */
//------------------------------------------------------------------------------------------------------------------------------------
import React, { createContext } from "react"
import { useState } from "react"
import { getMessagesByContactId } from "../Service/messageService"

export const MessageContext = createContext(
    {
        messages: [],
        handleDeleteMessages: (id_message) => {},
        AddNewMessage: (text) => {},
        loadMessages: (contact_id) => {}
    }
);

const MessageContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([])

    const loadMessages = (contact_id) => {
        const messagesList = getMessagesByContactId(contact_id)
        setMessages(messagesList)
    }

    const handleDeleteMessages = (id_message) => {
        const NewMessageList = [];
        for (const message of messages) {
        if (message.id !== id_message) {
            NewMessageList.push(message)
        }
        }
        setMessages(NewMessageList);
    };

    const AddNewMessage = (text) => {
        const newMessage = {
        emisor: "YO",
        hora: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }),
        id: Date.now(),
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
                AddNewMessage: AddNewMessage,
                loadMessages: loadMessages,
            }}
        >
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContextProvider
