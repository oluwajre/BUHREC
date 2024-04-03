/* eslint-disable */
import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter} from 'react-icons/hi2'
// import { Link } from 'react-router-dom'


const Contact = () => {
  const emailAddress = 'oluwajre2412@gmail.com';
  const phoneNumber = '+2349137819540';

  return (
    <section id="contact" className="co-wrapper">
        <div className="paddings innerWidth flexCenter co-container">
            <div className="flexColStart co-left">
                <span className='orangeText'>Contact Us</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText' style={{width: '80%'}}>We always ready to help by providijng the best services for you. We available 24/7 for any information</span>
                
                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        {/* first box */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>+234 913 7819 540</span>
                                </div>
                            </div>
                            <div className="flexCenter button"><a href= {`tel:${phoneNumber}`} className='li'>Call Now</a></div>

                        </div>
                        {/* second box */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>+234 913 7819 540</span>
                                </div>
                            </div>
                            <div className="flexCenter button"><a href="https://wa.link/oqk49y" target={'_blank'} className='li'>Chat Now</a></div>

                        </div>
                    </div>

                    <div className="flexStart row">
                        {/* first box */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>+234 913 7819 540</span>
                                </div>
                            </div>
                            <div className="flexCenter button"><a href="https://wa.link/oqk49y" target={'_blank'} className='li'>Video Call Now</a></div>

                        </div>
                        {/* second box */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>+234 913 7819 540</span>
                                </div>
                            </div>
                            <div className="flexCenter button"><a href= {`mailto:${emailAddress}`} className='li'>Message Now</a></div>

                        </div>
                    </div>
     
                </div>
            </div>

            <div className="co-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Contact