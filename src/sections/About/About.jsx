import React from 'react';
import styles from './AboutStyles.module.css';

function About() {
  return (
    <section
      id="about"
      className={styles.container}
    >
      <h1 className="sectionTitle">About Me</h1>
      <hr />
      <div className={styles.aboutContainer}>
        <p>
          Welcome! I'm a recent graduate from California State
          University, Monterey Bay, with a degree in Software
          Developing.
        </p>
        <p>
          Besides programming, I enjoy reading and playing video games. My
          favorite author is Jeff VanderMeer, the author of Annihilation, and my
          favorite video game is Undertale.
        </p>
      </div>
    </section>
  );
}

export default About;
