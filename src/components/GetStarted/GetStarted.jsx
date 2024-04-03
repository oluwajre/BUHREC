/* eslint-disable */
import React from 'react'
import './GetStarted.css'
import { Link } from 'react-router-dom'

export const GetStarted = () => {
  return (
    <section id='getStarted' className="g-wrapper">

        <div className="paddings innerWidth g-container">

            <div className="flexColCenter inner-container">
            <span className='primaryText'>Get Started with Homzy</span>
                <span className='secondaryText'>
                    Register and join the new world or Researches and Reviews.
                    <br />
                    Let us help you finish your Research.
                </span>
                <button className='button'><Link to='/signup' className='li'>Get Started</Link></button>
            </div>
               
        </div>
    </section>
  )
}
