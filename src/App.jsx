import React, { useState } from 'react'
import Nav_bar from './Components/Nav_bar/Nav_bar'
import { Route, Routes } from 'react-router-dom'
import Place_order from './Pages/Place_order/Place_order'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import { AppDownload } from './Components/AppDownload/AppDownload'
import LoginPop from './Components/LoginPop/LoginPop'

const App = () => {
  const [ShowLogin,setShowLogin]=useState(false)
  return (
    <>
    {ShowLogin?<LoginPop setShowLogin={setShowLogin} />:<></>}
      <div className='App'>
        <Nav_bar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Place_order />} />
        </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>
  )
}

export default App
