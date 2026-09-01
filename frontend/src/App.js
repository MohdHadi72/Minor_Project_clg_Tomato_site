import React, { useState } from 'react'
import Navbar from '../src/components/nevbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer.js'
import LoginPopup from './components/LoginPopup/LoginPopup.js'
import ReactPractice from './components/ReactPractice/Counter'
const App = () => {
  const [ShowLogin, setShowLogin] = useState(false);
  return (
    <>
      {ShowLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ReactPractice" element={<ReactPractice />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
