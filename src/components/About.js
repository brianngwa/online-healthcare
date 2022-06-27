import React from 'react'
import avatar1 from '../images/avatar1.jpg'

function About() {
    return (
        <section id="about">
            <div className= "about wrapper">
                <div className ="content">
                    <h1>About Us</h1>
                    <p>We're a team of software engineers from EMU </p>
                </div>
                <div className='card'>
                    <div className="card-item">
                    <div className="card-top">
                    <img src={avatar1} alt="image1" width="450px" height ="310px" />
                    </div>
                    <div className="card-bottom">
                        <h2>Brian Ngwa</h2>
                        <h3>+90 539 103 78 76</h3>
                        <h3>Software Engineer</h3>
                    </div>
            
                </div>
                <div className="card-item">
                    <div className="card-top">
                    <img src={avatar1} alt="image1" width="450px" height ="310px" />
                    </div>
                    <div className="card-bottom">
                        <h2>Hamza Ahmad Ibrahim Al Mohammad</h2>
                        <h3>+962 7 9500 6915</h3>
                        <h3>Software Engineer</h3>
                    </div>
            
                </div>
                <div className="card-item">
                    <div className="card-top">
                    <img src={avatar1} alt="image1" width="450px" height ="310px" />
                    </div>
                    <div className="card-bottom">
                        <h2>Musa Idakwo Ibrahim</h2>
                        <h3>+234 808 098 1731</h3>
                        <h3>Software Engineer</h3>
                       
                    </div>
            
                </div>
                </div>
                <p>The Online Healthcare management app is an interface where patients can easily find doctors, hospitals and easily book appointments. The app was build by the three EMU students displayed above.</p>
                <p>Use their contact information to reach them in case you need any help navigating the application.</p>
                </div>
        
        </section>
    )
}

export default About
