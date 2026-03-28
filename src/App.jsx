import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './components/navigation/Sidebar'
import Navbar from './components/navigation/Navbar'
import MainLayout from './layout/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<MainLayout/>
    </>
  )
}

export default App
