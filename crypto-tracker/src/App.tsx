import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexView from './components/IndexView'

import logo from './logo.svg'
import './App.css'

function App() {

  return (
    <div className="bg-gray-100">
      <header className="App-header">
        
      </header>
      <div className='bg-black text-white p-2'><h1 className='text-2xl text-center font-bold mb-2'>Crypto <span className='text-yellow-500'>Tracker</span>.</h1></div>
      < IndexView />
    </div>
  )
}

export default App
