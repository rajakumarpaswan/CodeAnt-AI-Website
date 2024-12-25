// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import UserSignin from "./pages/UserSignin"
import Repository from "./components/Repository"

// import Siderbar from "./components/Siderbar"
// import SignInOption from "./components/SignInOption"
// import SignInCard from "./components/SignInCard"

const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<UserSignin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/repository" element={<Repository/>}/>
      </Routes>
    </div>
  )
}

export default App