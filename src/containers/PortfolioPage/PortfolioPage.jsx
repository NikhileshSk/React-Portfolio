import React from 'react';
import './PortfolioPage.scss';
import mediaPlayer from '../../images/mediaPlayer.jpeg'; // Make sure this path is correct
import discountCalculator from '../../images/discount-calculator.png'; // Add appropriate paths for your images
import bankSite from '../../images/bankWebsite.png';   // Add appropriate paths for your images
import budgetCalculator from '../../images/budgetCalculator.png'; // Add appropriate paths for your images
import bmiCalculator from '../../images/bmiCalculator.webp'; // Add appropriate paths for your images
import weatherForcaster from '../../images/weatherForcaster.jpg'; // Add appropriate paths for your images
import travelWeb from '../../images/travelWeb.webp'; // Add appropriate paths for your images
import netflix from '../../images/netflixClone.webp'; // Add appropriate paths for your images

function PortfolioPage() {
  const projectData = [
    {
      title: 'Media-Player App',
      type: 'Web App Development',
      imgSrc: mediaPlayer, // Assign the imported image here
      liveLink: 'https://media-player-app-mu.vercel.app/',
      sourceCode: 'https://github.com/NikhileshSk/MediaPlayer-App.git',
    },
    {
      title: 'Discount Calculator',
      type: 'Web App Development',
      imgSrc: discountCalculator, // Make sure you import this image at the top
      liveLink: 'https://react-discount-calculator.vercel.app/',
      sourceCode: 'https://github.com/NikhileshSk/React-Discount-Calculator.git',
    },
    {
        title: 'Weather Forcasting App',
        type: 'Web App Development',
        imgSrc: weatherForcaster, // Make sure you import this image at the top
        liveLink: 'https://weather-app-omega-sooty.vercel.app/',
        sourceCode: 'https://github.com/NikhileshSk/WeatherApp.git',
      },
    {
      title: 'Yello-Bank',
      type: 'Web App Development',
      imgSrc: bankSite, // Make sure you import this image at the top
      liveLink: 'https://yello-bank.vercel.app',
      sourceCode: 'https://github.com/NikhileshSk/Yello-Bank.git',
    },
    {
      title: 'Netflix Clone',
      type: 'Web App Development',
      imgSrc: netflix, // Make sure you import this image at the top
      liveLink: 'https://netflik-clone.vercel.app/',
      sourceCode: 'https://github.com/NikhileshSk/NetflikClone.git',
    },
    {
      title: 'Budget Calculator',
      type: 'Web App Development',
      imgSrc: budgetCalculator, // Make sure you import this image at the top
      liveLink: 'https://budget-calculator-eta.vercel.app/',
      sourceCode: 'https://github.com/NikhileshSk/BUDGET-calculator.git',
    },
    {
      title: 'BMI Calculator',
      type: 'Web App Development',
      imgSrc: bmiCalculator, // Make sure you import this image at the top
      liveLink: 'https://bmi-calculator-dun-seven.vercel.app/',
      sourceCode: 'https://github.com/NikhileshSk/BMI-Calculator.git',
    },
    {
      title: 'Travel Website clone',
      type: 'Web App Development',
      imgSrc: travelWeb, // Make sure you import this image at the top
      liveLink: 'https://clone-vagabond.vercel.app/',
      sourceCode: 'https://github.com/NikhileshSk/CloneVagabond.git',
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-header">My Projects</h2>
      <p className="projects-subheader">Some Of My Distinguished Works</p>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imgSrc} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-type">{project.type}</p>
              <div className="project-buttons">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-live">Live Link</a>
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn-code">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
