import React from 'react'

import { Header, Alerts } from './components/layout'
import { Dashboard } from './components/leads'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Alerts />
        <Dashboard />
      </div>
    </>
  )
}

export default App
