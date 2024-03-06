import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Outlet, useLocation } from 'react-router-dom'

import MainPage from '../pages/Main/MainPage'
import HistoryPage from '../pages/History/HistoryPage'
import VisionPage from '../pages/Vision/VisionPage'
import ProjectsPage from '../pages/Projects/ProjectsPage'
import ProjectPage from '../pages/Projects/ProjectPage'
import RecruitPage from '../pages/Recruit/RecruitPage'

import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderBanner from '../components/HeaderBanner'

const Layout = () => {
  return (
    <>
      <Header />
      {useLocation().pathname != '/' && useLocation().pathname != '/recruit' ? <HeaderBanner /> : <></>}
      <Outlet />
      <Footer />
    </>
  )
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/projects" element={<ProjectsPage />}>
            <Route path=":id" element={<ProjectPage />} />
          </Route>
          <Route path="/recruit" element={<RecruitPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
