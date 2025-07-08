import React from 'react'
import { useContext } from 'react'
import { MessageContext } from '../../Context/MessageContext'
import './NewMessageForm.css'

export default function NewMessageForm() {
    const { AddNewMessage } = useContext(MessageContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = event.target.newMessage.value;
        if (newMessage.trim() === "") {
            alert("El mensaje no puede estar vacío.")
            return;
        }
        AddNewMessage(newMessage);
        event.target.reset();
    }
    
    return (
        <div className="new-message-form-container">
            <form onSubmit={handleSubmit}>
                <textarea name="newMessage" id="newMessage" placeholder="Escribe un mensaje..."></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}