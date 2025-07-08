import React from 'react'
import ContactSearch from '../../Components/ContactSearch/ContactSearch'
import ContactsList from '../../Components/ContactList/ContactsList'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ChatFilter from '../../Components/ChatFilter/ChatFilter'
import { FaEdit, FaEllipsisV } from 'react-icons/fa'
import './HomeScreen.css'

export default function HomeScreen() {
    return (
        <div className="main-layout">
            <Sidebar />
            <div className="main-layout-principal">
                <div className="top-bar">
                    <h1 className="top-bar-title">WhatsApp</h1>
                    <div className="top-bar-icons">
                        <FaEdit className="top-bar-icon" title="Nuevo chat" />
                        <FaEllipsisV className="top-bar-icon" title="Menú" />
                    </div>
                </div>
                <ContactSearch />
                <ChatFilter />
                <ContactsList />
            </div>
        </div>
    )
}