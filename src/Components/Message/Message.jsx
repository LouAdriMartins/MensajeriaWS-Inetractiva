import React, { useContext } from 'react'
import { MessageContext } from '../../Context/MessageContext'
import { IoCheckmarkDoneSharp, IoCheckmarkOutline } from 'react-icons/io5'
import { AiOutlineDelete } from 'react-icons/ai'
import './Message.css'

export default function Message({ emisor, hora, id, text, status }) {
    const { handleDeleteMessages } = useContext(MessageContext);

    const isMine = emisor === "YO";
    const messageClass = isMine ? "my-message" : "their-message";

    return (
        <div className={`chat-dialog ${messageClass}`}>
            <span className="message-text">{text}</span>
            <div className="message-meta">
                <span className="hora">{hora}</span>
                {isMine && (
                    <span className="status-icon">
                        {status
                            ? <IoCheckmarkDoneSharp color="#25D366" size={16} title="Visto" />
                            : <IoCheckmarkOutline color="#6b7280" size={16} title="No visto" />
                        }
                    </span>
                )}
                {isMine && (
                    <button
                        onClick={() => handleDeleteMessages(id)}
                        className="delete-btn"
                        aria-label="Eliminar mensaje"
                    >
                        <AiOutlineDelete size={18} color="inherit" />
                    </button>
                )}
            </div>
        </div>
    );
}