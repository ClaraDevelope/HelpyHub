import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
