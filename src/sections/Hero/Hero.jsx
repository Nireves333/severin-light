import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img-me.png';
import githubIcon from '../../assets/buttons/github.svg';
import linkedinIcon from '../../assets/buttons/linkedin.svg';
import aboutIcon from '../../assets/buttons/edit.svg';
import skillsIcon from '../../assets/buttons/code.svg';
import projectsIcon from '../../assets/buttons/book-open.svg';
import contactIcon from '../../assets/buttons/contact.svg';

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={styles.container}
    >
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture"
        />
      </div>
      <div className={styles.info}>
        <h1>Severin Light</h1>
        <hr />
        <button
          className={styles.button}
          onClick={() => scrollToSection('about')}
        >
          <img
            className={styles.icon}
            src={aboutIcon}
            alt="About Me Icon"
          />
          About Me
        </button>
        <button
          className={styles.button}
          onClick={() => scrollToSection('skills')}
        >
          <img
            className={styles.icon}
            src={skillsIcon}
            alt="Skills Icon"
          />
          Skills
        </button>
        <button
          className={styles.button}
          onClick={() => scrollToSection('projects')}
        >
          <img
            className={styles.icon}
            src={projectsIcon}
            alt="Projects Icon"
          />
          Projects
        </button>
        <a
          href="https://github.com/Nireves333"
          target="_blank"
          className={styles.button}
        >
          <img
            className={styles.icon}
            src={githubIcon}
            alt="GitHub Icon"
          />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/severin-light-0bb405130/"
          target="_blank"
          className={styles.button}
        >
          <img
            className={styles.icon}
            src={linkedinIcon}
            alt="LinkedIn Icon"
          />
          LinkedIn
        </a>
        <button
          className={styles.button}
          onClick={() => scrollToSection('contact')}
        >
          <img
            className={styles.icon}
            src={contactIcon}
            alt="Contact Form Icon"
          />
          Contact
        </button>
      </div>
    </section>
  );
}

export default Hero;
