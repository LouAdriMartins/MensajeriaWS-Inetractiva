import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import { getContactById } from "../../Service/contactService"
import { IoArrowBack } from "react-icons/io5"
import './ContactDetailHeader.css'

export default function ContactDetailHeader() {
    const { contact_id } = useParams()
    const [contactDetail, setContactDetail] = useState(null)

    useEffect(() => {
        const selectedContact = getContactById(contact_id)
        setContactDetail(selectedContact)
    }, [contact_id])

    if (!contactDetail) {
        return null
    }

    return (
        <div className='contact-detail-header'>
            <Link to="/" className='back-home'>
                <IoArrowBack className='back-home-icon' />
            </Link>
            <Link to={`/contact/${contact_id}/detail`} className='contact-detail-header-link'>
                <img 
                    src={contactDetail.image_route || "/placeholder.svg"} 
                    alt={`Foto de ${contactDetail.name}`} 
                    className='contact-detail-header-image'
                />
                <h2 className='contact-detail-header-name'>{contactDetail.name}</h2>
            </Link>
        </div>
    )
}