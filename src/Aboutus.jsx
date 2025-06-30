import React from 'react'
import aboutusimg from "./images/aboutme.png"   
import line from "./images/Line.png"
import toprightscrible from "./images/aboutusposit.png"
import resume from "./images/Santhosh_D_Resume.pdf"


export const Aboutus = () => {
  return (
    <div>
        <section>
        <div className="mainaboutussec">
            <div className="leftsidepersonimage">
                <img src={aboutusimg} alt="about us image" data-aos="flip-left" />
            </div>
            <div className="righsidemainsec">
                <div className="aboutusheadingdiv">
                    <h2 data-aos="fade-down">ABOUT ME</h2>
                    <img src={line} data-aos="fade-left" alt="line" />
                </div>
                
                <h3 data-aos="flip-up">FULL STACK DEVELOPER</h3>
                <p className="aboutusfirstpara" data-aos="zoom-in">
                Hi, I’m Santhosh — a passionate MERN stack developer with a strong grip on JavaScript, React, Node.js, and MongoDB. I enjoy building clean, responsive, and user-friendly web applications that offer a seamless experience.
                </p>
                <p className="aboutussecondpara" data-aos="zoom-in">
                I’m a quick learner and a team player who’s always eager to explore new technologies. Writing clean, efficient code and constantly improving my skills is what drives me every day.
                </p>
                <a href="#contact">
                <button className="hiremebutton" data-aos="fade-up">HIRE ME</button>
                </a>
                <a href={resume} target="_blank">
                <button className="resumebutton" data-aos="fade-up">RESUME</button>
                </a>
            </div>
            <div className="scrible">
            <img src={toprightscrible} alt="" data-aos="flip-right"/>
        </div>
        </div>
        </section>
        
        
    </div>
  )
}
