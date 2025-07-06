import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MessageContextProvider from './Context/MessageContext.jsx'
import HomeContactContextProvider from './Context/HomeContactContext.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <HomeContactContextProvider>
            <MessageContextProvider>
                <App />
            </MessageContextProvider>
        </HomeContactContextProvider>
    </BrowserRouter>
)
