import React from "react"
import "./LoaderSpinner.css"
import WhatsAppIcon from "./WhatsAppIcon"

export default function Component() {
    return (
        <div className="loading-container">
            <div className="loading-content">
                {/* Logo de WhatsApp con animaciones */}
                <div className="logo-container">
                <div className="logo-wrapper">
                    <div className="logo-background">
                    <WhatsAppIcon className="logo-icon" />
                    </div>
                    {/* Efecto de pulso adicional */}
                    <div className="pulse-effect" />
                </div>
                </div>

                {/* Texto de carga */}
                <div className="text-container">
                <h2 className="title">WhatsApp</h2>
                <p className="subtitle">Cargando...</p>
                </div>

                {/* Puntos de carga animados */}
                <div className="dots-container">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
                </div>

                {/* Spinner circular */}
                <div className="spinner-circle"></div>
            </div>
        </div>
    )
}