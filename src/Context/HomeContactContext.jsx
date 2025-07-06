//--------------------------------------------CREACIÓN DE CONTEXTO-CONTACTOS---------------------------------------------------------
/* Archivo: src/Context/HomeContactContext.jsx

    Este archivo contiene la función de estado que renderiza los contactos en la pantalla de inicio. En este caso, se simula una llamada a un servicio getContactList que retorna una lista de contactos. Además, se usa la función setTimeout para simular un retraso en la carga de los contactos, para lo cual se creo un spinner de carga de WhatsApp.

- Componentes que consumen este contexto: 
    ContactList, ContactItem, ContactSearch, HomeScreen (Como componente padre y Pantalla de inicio de la App).*/
//------------------------------------------------------------------------------------------------------------------------------------
import React, { createContext } from 'react'
import { useState } from 'react'
import { getContactList } from '../Service/contactService'

export const HomeContactContext = createContext({
    contacts: [],
    isLoadingContacts: true,
})

const HomeContactContextProvider = ({ children }) => {
    const contactList =  getContactList()
    const [contacts, setContacts] = useState([])
    const [isLoadingContacts, setIsLoadingContacts] = useState(true)

    setTimeout(() => {
        setContacts(contactList)
        setIsLoadingContacts(false)
    }, 2000)

    return (
        <HomeContactContext.Provider value={{
                contacts: contacts,
                isLoadingContacts: isLoadingContacts
            }}
        >
            {children}
        </HomeContactContext.Provider>
    )
}
export default HomeContactContextProvider