import React, { useContext, useState } from 'react'
import { HomeContactContext } from '../../Context/HomeContactContext'
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import './ContactSearch.css'

export default function ContactSearchInput() {
    const { searchContacts, clearSearch } = useContext(HomeContactContext)
    const [localTerm, setLocalTerm] = useState('')

    const handleChange = (e) => {
        const val = e.target.value
        setLocalTerm(val)
        searchContacts(val)
    }

    const handleClear = () => {
        setLocalTerm('')
        clearSearch()
    }

    return (
        <div className="search-container">
            <div className="search-input-wrapper">
                <AiOutlineSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Buscar contactos..."
                    value={localTerm}
                    onChange={handleChange}
                    className="search-input"
                />
                {localTerm && (
                <button
                    onClick={handleClear}
                    className="clear-button"
                    aria-label="Limpiar búsqueda"
                >
                    <AiOutlineCloseCircle />
                </button>
                )}
            </div>
        </div>
    )
}