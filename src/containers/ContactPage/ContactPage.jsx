import React from 'react'
import PageHeader from '../../components/PageHeaderContent/PageHeader'
import { AiOutlineMail, AiOutlinePhone, AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import './ContactPage.scss'

function ContactPage() {
  return (
   <section>
      <PageHeader 
        headerText="Contact Page"
        icon={<AiOutlineMail size={40} />} // Information icon
      />
        <div className="contact-container">
            <div className="form-container">
                <form>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Your Name" />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Your Email" />

                    <label htmlFor="message">Share your thoughts</label>
                    <textarea id="message" placeholder="Share your thoughts"></textarea>

                    <button type="submit" className="submit-button">SHARE YOUR FEEDBACK</button>
                </form>
            </div>
            <div className="info-container">
                <h1>Connect With <span>Me</span></h1>
                <p>
                    It is very important for me to keep in touch with you, so I am always 
                    ready to answer any question that interests you. Shoot!
                </p>

                <div className="contact-details">
                    <div className="email">
                        <AiOutlineMail size={30} /> <span></span>nikhileshsk369@gmail.com
                    </div>
                    <div className="phone">
                        <AiOutlinePhone size={30} /> <span>9496614424</span>
                    </div>
                </div>

                <div className="social-links">
                    <a href="https://github.com/NikhileshSk" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub size={40} />
                    </a>
                    <a href="https://linkedin.com/in/nikhileshsk369" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size={40} />
                    </a>
                    <a href="https://instagram.com/nikhl.esh_" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram size={40} />
                    </a>
                </div>
            </div>
        </div>
   </section>
  )
}

export default ContactPage
