// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '../public/vite.svg'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import History from './pages/History.jsx'
import Vision from './pages/Vision.jsx'
import Projects from './pages/Projects.jsx'
import Recruit from './pages/Recruit.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/history" element={<History />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/recruit" element={<Recruit />} />
    </Routes>
  )
}

export default App
