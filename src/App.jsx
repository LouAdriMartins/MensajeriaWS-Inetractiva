import React from "react"
import HomeScreen from "./Screens/HomeScreen/HomeScreen.jsx"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen.jsx"
import ContactDetailScreen from "./Screens/ContactDetailScreen/ContactDetailScreen.jsx"
import { Routes, Route } from "react-router"
import MessageContextProvider from './Context/MessageContext.jsx'
import HomeContactContextProvider from './Context/HomeContactContext.jsx'

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
          path="/contactDetail/:contact_id"
          element={<ContactDetailScreen />}
        />
      </Routes>
    </div>
  )
}

export default App

