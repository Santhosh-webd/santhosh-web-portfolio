import React, { useEffect } from 'react'
import line from "./images/Line.png"
import singlepage from "./images/frontendproj/singlepage.png"
import multipage from "./images/frontendproj/multipage.png"
import react from "./images/frontendproj/reactproject.png"
import wpsinglebountravel from "./images/frontendproj/wpsinglebountravel.png"
import wpmultibuildex from "./images/frontendproj/wpmultibuildex.png"
import dashboard from "./images/frontendproj/dashboard.png"
import todolist from "./images/backendproj/todolist.png"
import qrcode from "./images/backendproj/qrcodeproject.png"
import withdata from "./images/backendproj/withdataproject.png"
import withoutdata from "./images/backendproj/withoutdataproject.png"
import loginproject from "./images/backendproj/loginproject.png"
import merncrud from "./images/merncrudproject.png"


export const Projects = () => {

    useEffect(() => {
        const carousels = document.querySelectorAll(".portfolio-box");

        carousels.forEach((carouselBox) => {
            let localIndex = 0;
            const arrowRight = carouselBox.querySelector(".arrow-right");
            const arrowLeft = carouselBox.querySelector(".arrow-left");
            const imgSlide = carouselBox.querySelector(".img-slide");
            const portfolioDetails = carouselBox.parentElement.querySelectorAll(".portfolio-detail");

            const updateCarousel = () => {
  if (imgSlide) {
    // Calculate the exact translation without gaps
    imgSlide.style.transform = `translateX(${localIndex * -100}%)`;
    
    // Force a reflow to prevent animation glitches
    void imgSlide.offsetWidth;
  }
  
  if (portfolioDetails.length > 0) {
    portfolioDetails.forEach(detail => detail.classList.remove("active"));
    if (portfolioDetails[localIndex]) {
      portfolioDetails[localIndex].classList.add("active");
    }
  }

  // Toggle button states
  arrowLeft.classList.toggle("disabled", localIndex === 0);
  arrowRight.classList.toggle("disabled", localIndex === portfolioDetails.length - 1);
};

            const handleRightClick = () => {
                if (localIndex < portfolioDetails.length - 1) {
                    localIndex++;
                    updateCarousel();
                }
            };

            const handleLeftClick = () => {
                if (localIndex > 0) {
                    localIndex--;
                    updateCarousel();
                }
            };

            if (arrowRight && arrowLeft) {
                arrowRight.addEventListener("click", handleRightClick);
                arrowLeft.addEventListener("click", handleLeftClick);
            }

            // Cleanup
            return () => {
                if (arrowRight && arrowLeft) {
                    arrowRight.removeEventListener("click", handleRightClick);
                    arrowLeft.removeEventListener("click", handleLeftClick);
                }
            };
        });
    }, []);

    return (
        <div>
            <section>
            <div className="mainprojectsec">
                <div className="projsecheader">
                    <h2 data-aos="fade-down">PROJECTS</h2>
                    <img src={line} alt="line" data-aos="fade-left" />
                </div>
                <div className="portfolio-container">
                    <div className="portfolio-box" >
                        <div className="portfolio-detail active">
                            <h2 data-aos="fade-right">FRONTEND PROJECTS</h2>
                            <img src={line} data-aos="fade-up"  alt="line" className='line' />
                            <p data-aos="flip-left" className="numb">01</p>
                            <h3 data-aos="fade-right">Meat Shopping</h3>
                            <p data-aos="fade-right">Built a responsive meat shopping website using React, featuring categorized product listings for chicken, mutton, fish, and more. Showcases interactive UI, dynamic product filtering, and cart functionality.</p>
                            <div className="tech">
                                <p data-aos="fade-right">ReactJs, API</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://meatify-shopping.netlify.app/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/Meatify-Shopping" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>

                        <div className="portfolio-detail">
                            <h2 data-aos="fade-right">FRONTEND PROJECTS</h2>
                            <img src={line} data-aos="fade-up" alt="line" className='line' />
                            <p data-aos="flip-left" className="numb">02</p>
                            <h3 data-aos="fade-right">Gardening Business</h3>
                            <p data-aos="fade-right">Developed a responsive multi-page website using HTML, CSS, and JavaScript, featuring structured navigation and clean UI design. Demonstrates strong front-end development skills with smooth transitions across pages.</p>
                            <div className="tech">
                                <p data-aos="fade-right">HTML5, CSS3</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://santhosh-webd.github.io/Multi-Page/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/Multi-Page" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>
                        
                        <div className="portfolio-detail ">
                            <h2 data-aos="fade-right">FRONTEND PROJECTS</h2>
                            <img data-aos="fade-up" src={line} alt="line" className='line' />
                            <p data-aos="flip-left" className="numb">03</p>
                            <h3 data-aos="fade-right">Signage Business</h3>
                            <p data-aos="fade-right">Designed and developed a responsive single-page website using HTML, CSS, and JavaScript. Showcased smooth scrolling, clean UI, and interactive sections to highlight front-end development skills and creativity.</p>
                            <div className="tech">
                                <p data-aos="fade-right">HTML5, CSS3</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://santhosh-webd.github.io/Single-Page-Project/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/Single-Page-Project" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                                
                        </div>

                        

                        

                        <div className="portfolio-detail">
                            <h2 data-aos="fade-right">FRONTEND PROJECTS</h2>
                            <img src={line} data-aos="fade-up"  alt="line" className='line' />
                            <p data-aos="flip-left" className="numb">04</p>
                            <h3 data-aos="fade-right">Law Firm Dashboard</h3>
                            <p data-aos="fade-right">Created a law firm admin dashboard using the Bootstrap and Javascript, enabling dynamic client and case management through full CRUD functionality. Focused on clean UI and efficient data handling.</p>
                            <div className="tech">
                                <p data-aos="fade-right">Bootstrap, CSS3, Javascript</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://santhosh-webd.github.io/Law-Firm-Dashboard/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/Law-Firm-Dashboard" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>

                        <div className="portfolio-detail">
                            <h2 data-aos="fade-right">FRONTEND PROJECTS</h2>
                            <img src={line} data-aos="fade-up"  alt="line" className='line' />
                            <p data-aos="flip-left" className="numb">05</p>
                            <h3 data-aos="fade-right">Travel Agency</h3>
                            <p data-aos="fade-right">Designed a responsive single-page travel website using WordPress, showcasing destinations, services, and contact details. Focused on smooth navigation and modern layout using customizable themes and plugins.</p>
                            <div className="tech">
                                <p data-aos="fade-right">WordPress</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://santhosh-webd.github.io/Bounty-Travel/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/Bounty-Travel" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>

                        <div className="portfolio-detail">
                            <h2 data-aos="fade-right">FRONTEND PROJECTS</h2>
                            <img src={line} data-aos="fade-up"  alt="line" className='line' />
                            <p data-aos="flip-left" className="numb">06</p>
                            <h3 data-aos="fade-right">Home Builders</h3>
                            <p data-aos="fade-right">Developed a multi-page construction company website using WordPress, featuring detailed service pages, project galleries, and a contact form. Emphasized user-friendly navigation and responsive design for a professional online presence.</p>
                            <div className="tech">
                                <p data-aos="fade-right">WordPress</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://santhosh-webd.github.io/Buildex/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/Buildex" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <div className="portfolio-carousel">
                            <div className="img-slide"  >
                                <div className="img-item">
                                    <img src={react} alt="" data-aos="flip-left"/>
                                </div>
                                
                                <div className="img-item">
                                    <img src={multipage} alt="" data-aos="flip-left"/>
                                </div>
                                <div className="img-item">
                                    <img src={singlepage} alt="" data-aos="flip-left" />
                                </div>
                                <div className="img-item">
                                    <img src={dashboard} alt="" data-aos="flip-left" />
                                </div>
                                <div className="img-item">
                                    <img src={wpsinglebountravel} alt="" data-aos="flip-left"/>
                                </div>
                                <div className="img-item">
                                    <img src={wpmultibuildex} alt="" data-aos="flip-left"/>
                                </div>
                            </div>
                        </div>
                        <div className="navigation" >
                            <button className="arrow-left disabled" data-aos="flip-left"><i class='bx bx-chevron-left'></i></button>
                            <button className="arrow-right" data-aos="flip-left"><i class='bx bx-chevron-right'></i></button>
                        </div>
                    </div>
                </div>
                <div className="portfolio-container">
                    <div className="portfolio-box backend-carousel-box">
                        <div className="portfolio-carousel backend-carousel">
                            <div className="img-slide">
                                <div className="img-item">
                                    <img src={todolist} alt="" data-aos="flip-right"/>
                                </div>
                                <div className="img-item">
                                    <img src={qrcode} alt="" data-aos="flip-right"/>
                                </div>
                                <div className="img-item">
                                    <img src={withdata} alt="" data-aos="flip-right"/>
                                </div>
                                <div className="img-item">
                                    <img src={withoutdata} alt="" data-aos="flip-right"/>
                                </div>
                                <div className="img-item">
                                    <img src={loginproject} alt="" data-aos="flip-right"/>
                                </div>
                            </div>
                        </div>
                        <div className="navigation backend-navigation">
                            <button data-aos="flip-right" className="arrow-left disabled"><i class='bx bx-chevron-left' ></i></button>
                            <button data-aos="flip-right" className="arrow-right"><i class='bx bx-chevron-right' ></i></button>
                        </div>
                    </div>
                    <div className="portfolio-box backend-box backend-detail">
                        <div className="portfolio-detail active ">
                            <h2 data-aos="fade-in">BACKEND PROJECTS</h2>
                            <img src={line} data-aos="fade-up"  alt="line" className='line' />
                            <p data-aos="flip-right" className="numb">01</p>
                            <h3 data-aos="fade-in">To-Do-List</h3>
                            <p data-aos="fade-in">A real-time task management web application developed using Firebase for backend services along with HTML, CSS, and JavaScript. It showcases Firebase’s capabilities for storing, updating, and syncing tasks instantly across sessions.</p>
                            <div className="tech">
                                <p data-aos="fade-in">Firebase, HTML5, CSS3 & Javascript</p>
                            </div>
                           <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://santhosh-webd.github.io/To-Do-List/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/To-Do-List" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>

                        <div className="portfolio-detail">
                            <h2 data-aos="fade-left">BACKEND PROJECTS</h2>
                            <img src={line} data-aos="fade-up"  alt="line" className='line' />
                            <p data-aos="flip-right"  className="numb">02</p>
                            <h3 data-aos="fade-left">QR Code Generator</h3>
                            <p data-aos="fade-left">A Node.js and Express-based web application that generates QR codes dynamically from user input. It demonstrates backend processing and integrates QR code generation libraries for instant download or display.</p>
                            <div className="tech">
                                <p data-aos="fade-left">Node.js, Express.js & Nodemon</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://qr-code-3xtn.onrender.com/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/qr-code" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>

                        <div className="portfolio-detail">
                            <h2 data-aos="fade-left">BACKEND PROJECTS</h2>
                            <img src={line} data-aos="fade-up"  alt="line" className='line' />
                            <p data-aos="flip-right"  className="numb">03</p>
                            <h3 data-aos="fade-left">Cricket Tournament Registration</h3>
                            <p data-aos="fade-left">A full-stack web application for managing cricket team registrations, built using Node.js, Express, MongoDB, and EJS. It features team registration forms, data storage, and dynamic display of registered teams.</p>
                            <div className="tech">
                                <p data-aos="fade-left">Nodejs, Express, MongoDB</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://crikit-with-data.onrender.com/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/Crikit-With-Data" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>

                        <div className="portfolio-detail">
                            <h2 data-aos="fade-left">BACKEND PROJECTS</h2>
                            <img src={line} data-aos="fade-up"  alt="line" className='line' />
                            <p data-aos="flip-right"  className="numb">04</p>
                            <h3 data-aos="fade-left">Contact Us Backend Project</h3>
                            <p data-aos="fade-left"> A full-stack contact form built using Node.js, Express, and MongoDB. Users can submit messages through the form, which are stored in a MongoDB database. After submission, all users are redirected to a common thank-you page.</p>
                            <div className="tech">
                                <p data-aos="fade-left">Nodejs, Express, MongoDB</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://contact-us-without-data.onrender.com/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/Contact-Us-Without-Data-" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>

                        <div className="portfolio-detail">
                            <h2 data-aos="fade-left">BACKEND PROJECTS</h2>
                            <img src={line} data-aos="fade-up"  alt="line" className='line' />
                            <p data-aos="flip-right"  className="numb">05</p>
                            <h3 data-aos="fade-left">Log in / Sign Up</h3>
                            <p data-aos="fade-left">A modern authentication interface built with React and Firebase. It features secure user login and signup functionality, designed for a meat delivery service app with smooth UI transitions and Firebase-backed user management.</p>
                            <div className="tech">
                                <p data-aos="fade-left">React, Firebase</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://meatify-login-signup.netlify.app/" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/login-signup" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-container final-container">
                    <div className="portfolio-box">
                        <div className="portfolio-detail active">
                            <h2 data-aos="fade-right">MERN PROJECTS</h2>
                            <img src={line} data-aos="fade-up"  alt="line" className='line' />
                            {/* <p className="numb">01</p> */}
                            <h3 data-aos="fade-right">MERN CRUD</h3>
                            <p data-aos="fade-right">A full-stack web application that allows users to create, read, update, and delete book reviews. Built using React, CSS, and JavaScript on the frontend, with Node.js, Express, and MongoDB handling the backend and database operations.</p>
                            <div className="tech">
                                <p data-aos="fade-right">React,Express,Nodejs & MongoDB</p>
                            </div>
                            <div className="liveandgitdiv">
                                <a data-aos="flip-left" href="https://littlereviewmain.netlify.app" target="_blank"><button className="liveproject">Live Project</button></a>
                            <div className="live-github">
                                <a data-aos="flip-left" href="https://github.com/Santhosh-webd/mern-crud-main" target="_blank"><i class='bx bxl-github' ></i><span>Github Repostiory</span></a>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <div className="portfolio-carousel">
                            <div className="img-slide">
                                <div className="img-item">
                                    <img src={merncrud} alt=""  data-aos="flip-left" />
                                </div>
                            </div>
                        </div>
                        <div className="navigation">
                            <button data-aos="flip-left" className="arrow-left disabled"><i class='bx bx-chevron-left' ></i></button>
                            <button data-aos="flip-left" className="arrow-right"><i class='bx bx-chevron-right' ></i></button>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            
        </div>
    )
}
