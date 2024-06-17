import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import AllProjects from './pages/AllProjects.jsx'
import NotFound from './pages/404.jsx'
import SearchFormPage from './pages/SearchFormPage.jsx'
import { PROJECTS } from './data/data.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/form-search-project' element={<SearchFormPage />} />
          <Route
            path='/projects'
            element={<AllProjects projects={PROJECTS} />}
          />
          <Route path='/project/:id' element={<Project />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
