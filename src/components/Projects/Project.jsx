import React, { useRef } from 'react'
import './Project.css'
import theme_pattern from '../../Portfolio_React_Assets/assets/theme_pattern.svg'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'



const Project = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }




    return (
        <><div className='projects' id='projects'>
            <div className="projects-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
        </div>
        <div className='project'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="projects-container">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="pj-info">
                                <h3>Marksheet Management System</h3>
                                <p>Application that allows to manage all students marksheet information
                                    in a centralized database where user can view their marks with login
                                    credentials .Developed using python and MySql as Database</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="pj-info">
                                <h3>Sports Billing System</h3>
                                <p>Developed a billing interface for sports shop to manage billing process,
                                    by managing the goods available with its cost which promotes efficient
                                    billing process.
                                    Developed in java programing</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="pj-info">
                                <h3>Video Dubbing Application</h3>
                                <p>Developed a billing interface for sports shop to manage billing process,
                                    by managing the goods available with its cost which promotes efficient
                                    billing process.
                                    Developed in java programing</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="pj-info">
                                <h3>Food Ordering Website</h3>
                                <p>Developed a website that performs the operations of ordering a food online, where food are listed out and they can be added to cart and process with ordering those items. This is a Frontend Project developed using ReactJs</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Project