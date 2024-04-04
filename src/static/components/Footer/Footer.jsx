/* eslint-disable */
import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span className="secondaryText">
                    Our vision is to clean every
                    <br />
                    form of information in the world.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span>Ilishan-remo, Ogun, Nigeria</span>

                <div className="flexCenter f-menu">
                    <span><a href="#services" className='li'>Services</a></span>
                    <span><a href="#value" className='li'>Our Values</a></span>
                    <span><a href="#contact" className='li'>Contact Us</a></span>
                </div>
            </div>
        </div>
    </section>
  )
}
