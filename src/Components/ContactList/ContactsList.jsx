import React, { useContext } from 'react'
import ContactItem from '../ContactItem/ContactItem'
import { HomeContactContext } from '../../Context/HomeContactContext'
import LoaderSpinner from '../LoaderSppiner/LoaderSpinner.jsx'

export default function Contacts() {
    const { contacts, isLoadingContacts } = useContext(HomeContactContext)
    
    if (isLoadingContacts === true) {
        return (
            <div>
                <LoaderSpinner />
            </div>
        )
    }

    return (
        <div>
            {contacts.map(contact => (
                <ContactItem key={contact.id} {...contact} />
            ))}
        </div>
    )
}