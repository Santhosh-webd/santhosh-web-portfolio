import React from 'react'
import github from "./images/herocornergithub.png"
import linkedin from "./images/herocornerlinkedin.png"
import whatsapp from "./images/herocornerwhatsapp.png"
import personimage from "./images/mainmyimage.png"
import resume from "./images/Santhosh_D_Resume.pdf"

export const Home = () => {
  return (
    <div>
      <section>
        <div className="mainhomediv">
          <div className="leftsideimage">
            <div className="linkitems">
              <a href="https://github.com/Santhosh-webd" target="_blank">
                <img src={github} alt="github" width={"100%"} data-aos="flip-left" data-aos-duration="1500" />
              </a>
              <a href="https://www.linkedin.com/in/santhosh-d-202595353/" target="_blank">
                <img src={linkedin} alt="linkedin" width={"100%"} data-aos="flip-left" data-aos-duration="1500" />
              </a>
              <a href="https://wa.me/916381284335" target="_blank">
                <img src={whatsapp} alt="whatsapp" width={"100%"} data-aos="flip-left" data-aos-duration="1500" />
              </a>
            </div>
          </div>
          <div className="bothmaindiv">
            <div className="centermaincontentdiv">
              <div className="mainheadingherosec">
                <h3 data-aos="fade-down">HI, THERE</h3>
                <h1 data-aos="zoom-in">I'M SANTHOSH D</h1>
                <h2 data-aos="fade-left">FULL STACK DEVELOPER</h2>
                <p data-aos="fade-left">I build modern web experiences through clean code and creative design.</p>
                <p data-aos="fade-left">I focus on solving problems with clarity, style, and purpose.</p>
                <p data-aos="fade-left">Let’s bring your next idea to life.</p>
                <a href={resume} download="Santhosh_D_Resume.pdf" >
                  <button className='downloadbutton' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">DOWNLOAD CV</button>
                </a>
              </div>
            </div>
            <div className="rightmyimage" >
              <div className="img-box" data-aos="zoom-in">
                <div className="img-item">
                  <img src={personimage} alt="myimage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
