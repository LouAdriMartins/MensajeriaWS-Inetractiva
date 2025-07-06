import React from "react"
import HomeScreen from "./Screens/HomeScreen/HomeScreen.jsx"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen.jsx"
import ContactDetailScreen from "./Screens/ContactDetailScreen/ContactDetailScreen.jsx"
import { Routes, Route } from "react-router"

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={<HomeScreen />}
        />
        <Route
          path="/message/:contactId"
          element={<MessagesScreen />}
        />
        <Route
          path="/contactDetail/:contactId"
          element={<ContactDetailScreen />}
        />
      </Routes>
    </div>
  )
}

export default App

