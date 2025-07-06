import React, { useContext } from 'react'
import ContactItem from '../ContactItem/ContactItem'
import { HomeContactContext } from '../../Context/HomeContactContext'

export default function Contacts() {
    const { contacts } = useContext(HomeContactContext)

    return (
        <div>
            {contacts.map(contact => (
                <ContactItem key={contact.id} {...contact} />
            ))}
        </div>
    )
}