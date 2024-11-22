import React from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from './components/Navigation'
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navigation></Navigation>
    <main>
      <Outlet></Outlet>
    </main>
    </div>
  )
}

export default App
