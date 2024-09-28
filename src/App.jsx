import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HowSec from './components/HowSec/HowSec'
import FindSec from './components/FindSec/FindSec'
import TrendingSec from './components/TrendingSec/TrendingSec'
import BestDealsSec from './components/BestDealsSec/BestDealsSec'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <HowSec />
      <FindSec />
      <TrendingSec />
      <BestDealsSec />
      <Footer />

    </>
  )
}

export default App
