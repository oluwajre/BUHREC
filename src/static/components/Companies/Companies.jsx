/* eslint-disable */
import React from 'react'
import './Companies.css'

const Companies = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexColCenter c-container">
            <div className="c-head">
                <span className='primaryText'>Top Customers</span>
            </div>
            <div className="flexCenter c-images">
            <img src="./prologis.png" alt="" />
            <img src="./tower.png" alt="" />
            <img src="./equinix.png" alt="" />
            <img src="./realty.png" alt="" />
            </div>
            
        </div>
    </section>
  )
}

export default Companies