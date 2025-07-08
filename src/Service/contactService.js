//---------------------------------------------------PSEUDO SERVICIO CONTACT---------------------------------------------------------
// Archivo: src/Service/contactService.js
// En este archivo se tiene la función que retorna la lista de contactos. Trabaja sobre el mook de datos de contactos.
//------------------------------------------------------------------------------------------------------------------------------------
import mook_data from "../Data/contact-mook"

export const getContactList = () => {
    return mook_data.contacts
}

export const getContactById = (contact_id) => {
    for (const contact of mook_data.contacts) {
        if (Number(contact.id) === Number(contact_id)){
            return contact
        }
    }
    return
}