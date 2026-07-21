import React from 'react'
import Navbar from './components/Navbar'
import About from '../../../react-7/react-router/src/pages/About'
import Contact from './pages/Contact'
import Service from '../../../react-7/react-router/src/pages/Service'

import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/detail/:id" element={<ProductDetail />}/>
      </Routes>

    </div>
  )
}

export default App
