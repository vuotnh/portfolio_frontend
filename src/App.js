import React from 'react'

import { About, Header, Work, Skills, Footer } from './container'
import { Navbar } from './components'
import './App.scss';
import './i18n';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  )
}

export default App