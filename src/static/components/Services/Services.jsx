/* eslint-disable */
import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import './Services.css'
import data from 'src/static/utils/slider.json'
import { sliderSettings } from 'src/static/utils/common'


const Services = () => {
  return (
    <section id='services' className="s-wrapper">
        <div className="paddings innerWidth s-container">
            <div className="s-head flexColStart">
                <span className='orangeText'>Our Services</span>
                <span className='primaryText'>Mind Blowing Deals</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((service, i) => (
                        <SwiperSlide>
                            <div className="flexColStart s-card">
                                <img src={service.image} alt="home" />
                                {/* <span className="secondaryText s-price">
                                    <span style={{color: 'orange'}}>₦</span><span>{service.price}</span>
                                </span> */}
                                <span className='primaryText'>{service.name}</span>
                                <span className='secondaryText'>{service.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Services

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter s-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}