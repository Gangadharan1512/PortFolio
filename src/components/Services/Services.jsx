import React from 'react'
import './Services.css'
import theme_pattern from '../../Portfolio_React_Assets/assets/theme_pattern.svg'
// import Services_Data from '../../Portfolio_React_Assets/assets/services_data'
import arrow_icon from '../../Portfolio_React_Assets/assets/arrow_icon.svg'
import interest from '../../assets/Interest'


const Services = () => {
  return (
    <div className='services' id='services'>
        <div className="services-title">
            <h1>My Interest</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {interest.map((intst, index)=>{
                return <div key={index} className="services-format">
                    <h3>{intst.s_no}</h3>
                    <h2>{intst.s_name}</h2>
                    <p>{intst.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services