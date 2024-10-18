'use client'
import React from 'react'
import Home from './component/home/Home'
import About from './component/about/About'
import Service from './component/service/Service'
import './page.css'

const page = () => {
  return (
    <div className="container">
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="service" className="section">
        <Service />
      </div>
    </div>
  );
}



export default page