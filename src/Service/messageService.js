import mook_data from "../Data/contact-mook"

const getMessagesByContactId = (contact_id) => {
    for (const contact of mook_data.contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact.messages;
        }
    }
    // Si nungun elemento cumple con la condición devolvemos un null
    return null
}