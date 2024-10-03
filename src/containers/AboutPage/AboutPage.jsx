import React from 'react';
import PageHeader from '../../components/PageHeaderContent/PageHeader';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Animate } from "react-simple-animate";
import './AboutPage.scss';


function AboutPage() {
  return (
    
   <div>
       <PageHeader 
        headerText="About Me"
        icon={<AiOutlineInfoCircle size={40} />} // Information icon
      />
     <section id='about' className='about'>
    <div className="about__content">
      <div className="about__text">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(-650px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}
        >
          <h3>Front-End Developer</h3>
          <p>Proficient in HTML, CSS, JavaScript, and API integration, with a focus on developing responsive web applications. Improved page load
            times by 30% and enhanced accessibility. Managed multiple projects, boosting user engagement by 25% and reducing bounce rates by 20%.
            Proven leader in delivering high-quality web solutions that drive performance and user satisfaction.
          </p>
        </Animate>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(1000px)"
        }}
        end={{
          transform: "translateX(0px)"
        }}>
      <div className="about__image">
        <img src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif" alt="Nikhilesh" />
      </div>
      </Animate>
    </div>
  </section>
   </div>
  );
}

export default AboutPage;
