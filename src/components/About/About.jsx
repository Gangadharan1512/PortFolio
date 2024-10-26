import React from 'react'
import './About.css'
import theme_pattern from '../../Portfolio_React_Assets/assets/theme_pattern.svg'
import profile_img from '../../1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Highly motivated and eager to learn new concepts and implement them in new projects.</p>
                    <p>My passion for FrontEnd Development is not only reflected but also in the enthusiasm and dedication I bring to each project</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>0-</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>CERTIFICATIONS</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About