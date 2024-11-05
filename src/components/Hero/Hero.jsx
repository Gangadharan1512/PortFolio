import React from 'react'
import './Hero.css'
import profile_img from '../../1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Hero = () => {

  const resumeLink = () =>{
    window.open("https://drive.google.com/file/d/1354_mh2hjrOi_Wq1CP58Sc714_Iaape7/view?usp=sharing")
  }


  return (
    <div id='home' className='hero'>
        {/* <img src={profile_img} alt="" /> */}
        <h1><span>Gangadharan R P </span></h1>
        <p>I am a currently graduating Bachelor's Degree in Computer Science and Engineering at Sona College of Technology, Salem.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={100} href='#contact'>Connect With Me</AnchorLink></div>
            <div onClick={resumeLink} className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero 