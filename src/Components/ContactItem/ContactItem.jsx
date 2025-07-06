import React from 'react'
import { Link } from 'react-router'

export default function ContactItem({ id, name, image_route, last_message, last_message_date, unread_messages }) {
    return (
        <div>
            <Link to={`/contact/${id}/messages`}>
                <img src={image_route} alt={`Imagen de contacto ${name}`} />
                <div>
                    <h3>{name}</h3>
                    <span>{last_message.status ? "Visto" : "No Visto"}</span>
                    <p>{last_message.text}</p>
                </div>
                <div>
                    <span>{last_message_date}</span>
                    {unread_messages > 0 && (
                        <span className="unread-messages">
                            {unread_messages}
                        </span>
                    )}
                </div>
            </Link>
            <hr />
        </div>
    )
}