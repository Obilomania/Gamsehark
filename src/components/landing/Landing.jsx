import React from 'react'
import "./Landing.css"
import "./Slider.jsx"
import Slider from './Slider.jsx'
import Cards from './Cards'
import Table from "./SideTable"
import Navigation from '../navigation/Navigation'


const Landing = () => {
  return (
      <div className='landingPage'> 
          <Navigation/>      
          <Table/>
          <Slider />
          <Cards/>
    </div>
  )
}

export default Landing