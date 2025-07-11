//----------------------------------------CREACIÓN DE CONTEXTO-DETALLE DE CONTACTO----------------------------------------
/* Archivo: src/Context/ContactDetailContext.jsx

    Este archivo contiene la función de estado que renderiza a cada contacto según corresponda en la pantalla. En este caso, se simula una llamada a un servicio getContactById que retorna los contactos por su id. Además, se usa la función setTimeout para simular un retraso en la carga de los contactos, para lo cual se creo un spinner de carga de WhatsApp.*/
//------------------------------------------------------------------------------------------------------------------------------------
import React, { createContext, useState } from "react"
import { getContactById } from "../Service/contactService"

export const ContactDetailContext = createContext({
    contactDetail: null,
    loadContact: () => {},
    isLoadingDetail: true,
})

const ContactDetailContextProvider = ({ children }) => {
    const [contactDetail, setContactDetail] = useState(null)
    const [isLoadingDetail, setIsLoadingDetail] = useState(true)

    const loadContact = (contact_id) => {
        setIsLoadingDetail(true)
        setTimeout(() => {
            const contactSelected = getContactById(contact_id)
            if (contactSelected) {
                setContactDetail(contactSelected)
            } else {
                setContactDetail(null)
            }
            setIsLoadingDetail(false)
        }, 1000)
    }

    return (
        <ContactDetailContext.Provider value={{
            loadContact: loadContact,
            isLoadingDetail: isLoadingDetail,
            contactDetail: contactDetail
        }}>
            {children}
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider