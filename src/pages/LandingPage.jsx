/* eslint-disable */
import React from 'react'
import Header from 'src/components/Header/Header'
import { Hero } from 'src/components/Hero/Hero';
import './App.css'
import Companies from 'src/components/Companies/Companies';
import Services from 'src/components/Services/Services';
import Value from 'src/components/Value/Value';
import Contact from 'src/components/Contact/Contact';
import { GetStarted } from 'src/components/GetStarted/GetStarted';
import { Footer } from 'src/components/Footer/Footer';

const LandingPage = () => {
  return (
    <div className="App">
      <div>
        <div className='white-gradient' />
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Services/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default LandingPage