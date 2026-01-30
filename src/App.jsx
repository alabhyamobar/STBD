import React from 'react'
import NavBar from './components/NavBar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Home from './pages/Home/Home'
const App = () => {
  return (
    <>
      <NavBar/>

      <Routes>
        <Route path='STBD/' element={<Home/>}/>
        <Route path='STBD/products' element={<Products/>}/>
        <Route path='STBD/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App