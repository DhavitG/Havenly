import React from 'react'
import Navbar from './Components/Navbar'
import {useLocation} from "react-router-dom"

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar />}
    </div>
  )
}

export default App