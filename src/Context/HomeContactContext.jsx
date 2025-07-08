//--------------------------------------------CREACIÓN DE CONTEXTO-CONTACTOS---------------------------------------------------------
/* Archivo: src/Context/HomeContactContext.jsx

    Este archivo contiene la función de estado que renderiza los contactos en la pantalla de inicio. En este caso, se simula una llamada a un servicio getContactList que retorna una lista de contactos. Además, se usa la función setTimeout para simular un retraso en la carga de los contactos, para lo cual se creo un spinner de carga de WhatsApp.*/
//------------------------------------------------------------------------------------------------------------------------------------
import React, { createContext, useState, useEffect } from 'react'
import { getContactList } from '../Service/contactService'

export const HomeContactContext = createContext({
    contacts: [],
    isLoadingContacts: true,
    filteredContacts: [],
    searchContacts: () => {},
    clearSearch: () => {},
    filter: 'todos',
    setFilter: () => {},
})

const HomeContactContextProvider = ({ children }) => {
    const initialContacts = getContactList()
    const [contacts, setContacts] = useState([])
    const [isLoadingContacts, setIsLoadingContacts] = useState(true)
    const [filteredContacts, setFilteredContacts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('todos')

    useEffect(() => {
        // Simulamos carga
        setTimeout(() => {
        setContacts(initialContacts)
        setIsLoadingContacts(false)
        }, 2000)
    }, [])

    useEffect(() => {
        let filtered = contacts
        // Filtro búsqueda
        if (searchTerm.trim() !== '') {
        filtered = filtered.filter(c =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        )
        }
        // Filtro categoría
        if (filter === 'no-leidos') {
        filtered = filtered.filter(c => c.unread_messages > 0)
        } else if (filter === 'favoritos') {
        filtered = filtered.filter(c => c.isFavorite)
        } else if (filter === 'grupos') {
        filtered = filtered.filter(c => c.isGroup)
        }
        setFilteredContacts(filtered)
    }, [contacts, searchTerm, filter])

    const searchContacts = (term) => {
        setSearchTerm(term)
    }

    const clearSearch = () => {
        setSearchTerm('')
    }

    return (
        <HomeContactContext.Provider value={{
                contacts: contacts,
                isLoadingContacts: isLoadingContacts,
                filteredContacts: filteredContacts,
                searchContacts: searchContacts,
                clearSearch: clearSearch,
                filter: filter,
                setFilter: setFilter,
            }}>
            {children}
        </HomeContactContext.Provider>
    )
}

export default HomeContactContextProvider