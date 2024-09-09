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
import Contentblock from './components/Content-block'

function App() {
  return(
    <div>
      <Hero/>
      <Category/>
      <Products/>
      <Package/>
      <Contentblock/>
      <Expendiency/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  )
} 

export default App


