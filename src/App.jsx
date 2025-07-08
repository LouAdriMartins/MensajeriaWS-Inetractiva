import React from "react"
import HomeScreen from "./Screens/HomeScreen/HomeScreen.jsx"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen.jsx"
import ContactDetailScreen from "./Screens/ContactDetailScreen/ContactDetailScreen.jsx"
import { Routes, Route } from "react-router"
import MessageContextProvider from './Context/MessageContext.jsx'
import HomeContactContextProvider from './Context/HomeContactContext.jsx'
import ContactDetailContextProvider from "./Context/ContactDetailContext.jsx"

function App() {
  return (
    <div>
      <Routes>
          <Route
            path="/home"
            element={
              <HomeContactContextProvider>
                <HomeScreen />
              </HomeContactContextProvider>}
          />
          <Route
            path="/contact/:contact_id/messages"
            element={
              <MessageContextProvider>
                <MessagesScreen />
              </MessageContextProvider>}
          />
        <Route
          path="/contact/:contact_id/detail"
          element={
            <ContactDetailContextProvider>
              <ContactDetailScreen />
            </ContactDetailContextProvider>}
        />
      </Routes>
    </div>
  )
}

export default App

