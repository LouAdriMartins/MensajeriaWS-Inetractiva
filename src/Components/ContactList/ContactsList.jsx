import React, { useContext } from 'react'
import ContactItem from '../ContactItem/ContactItem'
import { HomeContactContext } from '../../Context/HomeContactContext'
import LoaderSpinner from '../LoaderSppiner/LoaderSpinner.jsx'
import './ContactsList.css'

export default function ContactsList() {
    const { filteredContacts, isLoadingContacts } = useContext(HomeContactContext)

    if (isLoadingContacts) {
        return <LoaderSpinner />
    }

    const parseDate = (dateStr) => {
        if (!dateStr) return new Date(0) // si no tiene fecha, enviarlo al final
        const [day, month, year] = dateStr.split("/")
        return new Date(`${year}-${month}-${day}`)
    }

    // Ordenar contactos por fecha descendente comparandolos
    const sortedContacts = [...filteredContacts].sort(
        (contact_a, contact_b) => parseDate(contact_b.hora) - parseDate(contact_a.hora)
    )

    // Contacto ficticio "Archivados" al inicio
    const archivedContact = {
        id: "archived",
        name: "Archivados",
        image_route: "",
        last_message: { text: "", status: "" },
        hora: "",
        unread_messages: 0,
        is_archived: true
    }

    return (
        <div className="contacts-list">
            <ContactItem {...archivedContact} />
            {sortedContacts.length === 0 ? (
                <div className="no-chats-message">No se encontraron contactos con este nombre!</div>
            ) : (
                sortedContacts.map(contact => (
                    <ContactItem key={contact.id} {...contact} />
                ))
            )}
        </div>
    )
}