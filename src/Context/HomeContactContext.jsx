import React, { createContext } from 'react'
import { useState } from 'react'
//-------------------------------------------------------------------------------------------------------------------
// Importación de imágenes para los contactos
//-------------------------------------------------------------------------------------------------------------------
import bombonImg from '../Components/Images/bombon.webp'
import burbujaImg from '../Components/Images/burbuja.png'
import bellotaImg from '../Components/Images/bellota.jpg'
import plutonioImg from '../Components/Images/plutonio.jpg'
import alcaldeImg from '../Components/Images/alcalde.jpg'
import mojoJojoImg from '../Components/Images/mojo-jojo.jpg'
import beloImg from '../Components/Images/belo.jpg'
import elImg from '../Components/Images/el.jpg'

export const HomeContactContext = createContext({
    contacts: [] //Esto hace al contexto más fiable, ya que si no se inicializa, puede dar error al intentar acceder a contacts
})

const HomeContactContextProvider = ({ children }) => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: 'Bombon',
            image_route: bombonImg,
            last_message_date: '01/06/2025',
            last_message: {
                id: 1,
                emisor: 'YO',
                text: 'Hola Bombon, como estas?',
                status: true,
            },
            unread_messages: 2,
        },
        {
            id: 2,
            name: 'Burbuja',
            image_route: burbujaImg,
            last_message_date: '02/07/2025',
            last_message: {
                id: 2,
                emisor: 'Burbuja',
                text: 'Hola, qué tal?',
                status: false,
            },
            unread_messages: 1,
        },
        {
            id: 3,
            name: 'Bellota',
            image_route: bellotaImg,
            last_message_date: '05/05/2025',
            last_message: {
                id: 3,
                emisor: 'YO',
                text: 'Hola, te extraño 😿',
                status: false,
            },
            unread_messages: 0,
        },
        {
            id: 4,
            name: 'Prof. Plutonio',
            image_route: plutonioImg,
            last_message_date: '25/06/2025',
            last_message: {
                id: 4,
                emisor: 'YO',
                text: 'Tanto tiempo!!!',
                status: true,
            },
            unread_messages: 2,
        },
    ])
    return (
        <HomeContactContext.Provider value={{
                contacts: contacts,
            }}
        >
            {children}
        </HomeContactContext.Provider>
    )
}
export default HomeContactContextProvider