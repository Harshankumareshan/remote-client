import React from 'react'
import Home from './Home'
import Settings from './Settings'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes> 
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/Settings" element={<Settings/>}/>
    </Routes>
    </>
  )
}

export default App