import React from 'react'
import './app.css'

import { Header } from './components/layout'
import { Dashboard } from './components/leads'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Dashboard />
      </div>
    </>
  )
}

export default App
