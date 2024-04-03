/* eslint-disable */
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';




const Header = () => {

  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

            <img src="./logo.png" alt=""  width={100}/>

            <div className="flexCenter h-menu">
                <a href="#services" className='li'>Services</a>
                <a href="#value" className='li'>Our Value</a>
                <a href="#contact" className='li'>Contact Us</a>
                <Link to="/signup" className='li'>Get Started</Link>
                <button className='button'>
                  <Link to="/login" className='li'>Login</Link>
                </button>
                
            </div>
        </div>
    </section>
  )
}
 
export default Header