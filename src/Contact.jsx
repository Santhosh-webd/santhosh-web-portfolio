import React from 'react'
import contactimg from "./images/contactusimg.png"
import line from "./images/Line.png"
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

export const Contact = () => {


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_srsr0p2', 'template_s7d698l', e.target, 'DSMcOUT0CQ_p_U7-I')
            .then((result) => {
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thanks for reaching out. I’ll get back to you shortly.',
                    icon: 'success',
                    timer: 2500,
                    showConfirmButton: false,
                    color: "#000"
                })
            }, (error) => {
                Swal.fire({
                    title: 'Send Failed',
                    text: 'Please try again later.',
                    icon: 'error',
                    timer: 3000,
                    showConfirmButton: false,
                    color: "#000"
                })
            });

        e.target.reset();
    };

    return (
        <div>
            <section id='contact'>
                <div className='maincontactsec'>
                    <div className="headercontactsec">
                        <h2 data-aos="fade-down">CONTACT <span>ME</span></h2>
                        <img src={line} alt="" data-aos="fade-left" />
                        <p data-aos="fade-up">Feel free to drop me an email at <a href="#">dbsanthosh1506@gmail.com</a></p>
                    </div>
                    <div className="contactdetailsmainsec">
                        <div className="formmaindiv">
                            <form id='contactform' onSubmit={sendEmail}>
                                <label htmlFor="" data-aos="fade-up">Email Address</label>
                                <input type="email" name="user_email" data-aos="fade-up" placeholder='Enter your email' required />
                                <label htmlFor="" data-aos="fade-up">Your Name</label>
                                <input type="text" data-aos="fade-up" name="user_name" placeholder='Enter your name' required />
                                <label htmlFor="" data-aos="fade-up">Your Message</label>
                                <textarea data-aos="fade-up" id="" name="message" cols="" rows="4" placeholder='Enter your Message' required></textarea>
                                <button type='submit' data-aos="fade-up" className='contactbutton'>SUBMIT</button>
                            </form>
                        </div>
                        <div className="sideimgdiv">
                            <img src={contactimg} alt="Contact Image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
