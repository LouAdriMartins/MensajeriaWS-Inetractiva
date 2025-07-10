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