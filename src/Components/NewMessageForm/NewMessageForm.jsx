import React from 'react'
import { useContext } from 'react'
import { MessageContext } from '../../Context/MessageContext'

export default function NewMessageForm() {
    const { AddNewMessage } = useContext(MessageContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = event.target.newMessage.value;
        if (newMessage.length < 5) {
            alert("El mensaje debe tener al menos 5 caracteres.")
            return
        }
        AddNewMessage(newMessage)
        event.target.reset()
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="newMessage">Nuevo Mensaje</label>
                    <textarea name="newMessage" id="newMessage" minLength={5} required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
