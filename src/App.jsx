import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Layout from './components/Layout'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {

  return (<>
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Start page */}
        <Route index element={ <Home /> } />
        
        {/* About page */}
        <Route path='/about' element={ <About /> } />

        {/* Everything else */}
        <Route path='/*' element={ <NotFound /> } />
      </Route>
    </Routes>
  </>)
}

export default App
