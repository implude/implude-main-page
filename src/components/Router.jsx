import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import MainPage from '../pages/Main/MainPage'
import HistoryPage from '../pages/History/HistoryPage'
import VisionPage from '../pages/Vision/VisionPage'
import ProjectsPage from '../pages/Projects/ProjectsPage'
import RecruitPage from '../pages/Recruit/RecruitPage'

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        {/* class에 함수 넣는거 수정해야 함 */}
        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' click' : '')} to="/">
          MainPage
        </NavLink>
        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' click' : '')} to="/history">
          HistoryPage
        </NavLink>
        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' click' : '')} to="/vision">
          VisionPage
        </NavLink>
        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' click' : '')} to="/projects">
          ProjectsPage
        </NavLink>
        <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' click' : '')} to="/recruit">
          RecruitPage
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
      </Routes>
    </BrowserRouter>
  )
}
