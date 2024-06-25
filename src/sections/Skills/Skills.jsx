import React from 'react';
import styles from './SkillsStyles.module.css';
import jsLogo from '../../assets/logos/logo-javascript.svg';
import htmlLogo from '../../assets/logos/html-1.svg';
import cssLogo from '../../assets/logos/css-3.svg';
import reactLogo from '../../assets/logos/react-2.svg';
import cPlusPlusLogo from '../../assets/logos/c.svg';
import javaLogo from '../../assets/logos/java-4.svg';
import nodeLogo from '../../assets/logos/nodejs-1.svg';
import pythonLogo from '../../assets/logos/python-5.svg';
import mysqlLogo from '../../assets/logos/mysql-logo.svg';

function Skills() {
  return (
    <section
      id="skills"
      className={styles.container}
    >
      <h1 className="sectionTitle">Skills</h1>
      <hr />
      <div className={styles.skillsContainer}>
        <img
          src={jsLogo}
          alt="JavaScript Logo"
          className={styles.logo}
        />
        <img
          src={htmlLogo}
          alt="HTML Logo"
          className={styles.logo}
        />
        <img
          src={cssLogo}
          alt="CSS Logo"
          className={styles.logo}
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className={styles.logo}
        />
        <img
          src={cPlusPlusLogo}
          alt="C++ Logo"
          className={styles.logo}
        />
        <img
          src={javaLogo}
          alt="Java Logo"
          className={styles.logo}
        />
        <img
          src={nodeLogo}
          alt="Node.js Logo"
          className={styles.logo}
        />
        <img
          src={pythonLogo}
          alt="Python Logo"
          className={styles.logo}
        />
        <img
          src={mysqlLogo}
          alt="MySQL Logo"
          className={styles.logo}
        />
      </div>
    </section>
  );
}

export default Skills;
