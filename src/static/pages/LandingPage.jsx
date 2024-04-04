/* eslint-disable */
import React from 'react'
import Header from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import './App.css'
import Companies from '../components/Companies/Companies';
import Services from '../components/Services/Services';
import Value from '../components/Value/Value';
import Contact from '../components/Contact/Contact';
import { GetStarted } from '../components/GetStarted/GetStarted';
import { Footer } from '../components/Footer/Footer';

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