import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import'./Header.jsx'
import './Slider'
import { Link, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Slider from './Slider'




function App() {
 
  
  return (
    <div className="App">
      <Header/>
      <Slider></Slider>
    </div>
  )
}

export default App
