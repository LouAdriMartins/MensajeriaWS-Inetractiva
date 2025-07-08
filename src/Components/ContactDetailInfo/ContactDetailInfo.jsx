import React, { useContext, useEffect } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { useParams } from 'react-router'
import LoaderSpinner from '../LoaderSppiner/LoaderSpinner'

export default function ContactDetailInfo() {
    const { contact_id } = useParams()
    const { loadContact, isLoadingDetail, contactDetail } = useContext(ContactDetailContext)

    useEffect(() => {
        loadContact(contact_id)
    }, [contact_id])

    if (isLoadingDetail || !contactDetail) {
        return <LoaderSpinner />
    }

    return (
        <div>
            <img 
                src={contactDetail.image_route} 
                alt={`Imagen de ${contactDetail.name}`} 
                style={{ width: '100px' }} 
            />
            <h1>{contactDetail.name}</h1>
            <span>{contactDetail.phone}</span>
            <span>{contactDetail.info}</span>
            <span>{contactDetail.info_date}</span>
        </div>
    )
}