import React from 'react'
import './HomePage.scss'
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate('./ContactPage')
  }

  return (
   <section id='home' className='home'>
      <div className="home__text-wrapper">
        <h1>Hello I'm  <span>NIKHILESH</span> 
        <br />
        Im' A Front-End Developer
        </h1>
      </div>
      <div className="home__contact-me">
        <button onClick={handleNavigate}>Hire Me</button>
      </div>
   </section>
  )
}

export default HomePage
