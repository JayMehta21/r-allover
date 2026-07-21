import React, { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'

const App = () => {
  const [activePage, setActivePage] = useState('home')

  const navItems = [
    { path: '/home', label: 'Home', key: 'home' },
    { path: '/about', label: 'About', key: 'about' },
    { path: '/service', label: 'Service', key: 'service' }
  ]

  return (
    <div className="app-shell">
      <nav className="navbar">
        <div className="brand">Route Demo</div>
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setActivePage(item.key)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <main className="page-content">
        <p className="page-status">Active section: {activePage}</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
