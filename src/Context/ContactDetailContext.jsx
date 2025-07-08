import react, { createContext } from "react"
import { getContactById } from "../Service/contactService"
import { useState } from "react"

export const ContactDetailContext = createContext({
    contactDetail: null,
    loadContact: (contact_id) => {},
    isLoadingDetail: true,
})

const ContactDetailContextProvider = ({children}) => {
    const [contactDetail, setContactDetail] = useState(null)
    const [isLoadingDetail, setIsLoadingDetail] = useState(true)

    const loadContact = (contact_id) => {
        setIsLoadingDetail(true)
        setTimeout(
            () => {
                const contactSelected = getContactById(contact_id)
                setContactDetail(contactSelected)
                setIsLoadingDetail(false)
            },
            1000
        )
        
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