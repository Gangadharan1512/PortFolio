import React from 'react'
import './Hero.css'
import profile_img from '../../1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Gangadharan R P </span>FrontEnd Developer</h1>
        <p>I am a FrontEnd Developer from TamilNadu, India with 0 years experience in multiple companies like Google and Microsoft.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero 