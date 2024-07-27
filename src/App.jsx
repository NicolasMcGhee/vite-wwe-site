import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Infomation from './components/Information/Infomation'

function App() {
  
  return (
    <>
      <Navbar />
      <Banner />
      <Infomation />
    </>
  )
}

export default App
