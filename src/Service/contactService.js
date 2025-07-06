//---------------------------------------------------PSEUDO SERVICIO CONTACT---------------------------------------------------------
// Archivo: src/Service/contactService.js
// En este archivo se tiene la función que retorna la lista de contactos. Trabaja sobre el mook de datos de contactos.
//------------------------------------------------------------------------------------------------------------------------------------
import mook_data from "../Data/contact-mook"

export const getContactList = () => {
    return mook_data.contacts
}