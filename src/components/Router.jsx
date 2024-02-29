import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'
import MainPage from '../pages/Main/MainPage'
import HistoryPage from '../pages/History/HistoryPage.tsx'
import VisionPage from '../pages/Vision/VisionPage'
import ProjectsPage from '../pages/Projects/ProjectsPage'
import RecruitPage from '../pages/Recruit/RecruitPage'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderBanner from '../components/HeaderBanner'
const Layout = () => {
  return (
    <>
      <Header />
      <HeaderBanner />
      <Outlet />
      <Footer />
    </>
  )
}
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
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/recruit" element={<RecruitPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
