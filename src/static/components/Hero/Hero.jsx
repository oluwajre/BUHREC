/* eslint-disable */
import React from 'react'
import './Hero.css'
import { HiDocument } from "react-icons/hi2";
import CountUp from 'react-countup';


export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">

        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>Un-parralled <br/> Reviewing of all<br />Researches.</h1>
          </div>

          <div className="flexColStart hero-des">
            <span className='secondaryText'>Let's make Researching more enjoyable and</span>
            <span className='secondaryText'>Reviewing Cormfortable</span>
          </div>

          <div className="flexCenter discover-bar">
          <HiDocument color='var(--blue)' size={25}/>
          <input type="text" name="" />
          <button className="button">Discover</button>
          </div>

          <div className="flexCenter stats"> 
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4}/><span>+</span>
                </span>
              <span className='secondaryText'>Researchers</span> 
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1891} end={2000} duration={4}/><span>+</span>
                </span>
              <span className='secondaryText'>Reviewers</span> 
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={22} end={30} duration={4}/><span>+</span>
                </span>
              <span className='secondaryText'>Award Winnings</span> 
            </div>
          </div>

        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
