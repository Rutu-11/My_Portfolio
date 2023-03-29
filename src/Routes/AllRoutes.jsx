import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from '../Components/About'
import Home from '../Components/Home'
import Skills from '../Components/Skills'
function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/skills' element={<Skills/>} />
    </Routes>
  )
}

export default AllRoutes
