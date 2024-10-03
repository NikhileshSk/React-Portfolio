import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGithub, faNodeJs, faDocker, faBootstrap, faFigma } from '@fortawesome/free-brands-svg-icons';
import './SkillsPage.scss'

function SkillsPage() {
  const skills = [
    { icon: faHtml5, label: "HTML" },
    { icon: faCss3Alt, label: "CSS" },
    { icon: faBootstrap, label: "BOOTSTRAP" },
    { icon: faJs, label: "JAVASCRIPT" },
    { icon: faReact, label: "REACT JS" },
    { icon: faGithub, label: "GITHUB" },
    { icon: faFigma, label: "FIGMA" },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>What I do</h2>
          <p>I am a passionate MERN stack intern at Luminar Technolabs, driven by my love for coding and problem-solving. My journey in web development allows me to bring creative ideas to life while honing my skills in building full-stack applications. Whether it's crafting dynamic user interfaces or optimizing back-end logic, I thrive on the challenge of making seamless digital experiences.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <FontAwesomeIcon icon={skill.icon} size="3x" />
              <p>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
