import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      
    </div>
  )
}

export default App
