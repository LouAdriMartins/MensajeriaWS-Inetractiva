import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MessageContextProvider from './Context/MessageContext.jsx'

createRoot(document.getElementById('root')).render(
    <MessageContextProvider>
        <App />
    </MessageContextProvider>
)
