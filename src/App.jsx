import React from 'react'
import Hero from './components/Hero-section'
import Category from './components/Category'
import Products from './components/Products'
import Newsletter from './components/Newsletter'
import Package from './components/Package'
import "./App.css"
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import Expendiency from './components/Expendiency'

function App() {
  return(
    <div>
      <Hero/>
      <Category/>
      <Products/>
      <Package/>
      <Expendiency/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  )
} 

export default App


{/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/}
