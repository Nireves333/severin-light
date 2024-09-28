import React from 'react';
import styles from './ProjectsStyles.module.css';
import Emporium from '../../assets/projects/Villagers-Vibe-Emporium.png';
import PhotoPort from '../../assets/projects/PhotoPort.png';
import Microplastics from '../../assets/projects/microplastics.png';
import DbPharma from '../../assets/projects/DatabaseDesign.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section
      id="projects"
      className={styles.container}
    >
      <h1 className="sectionTitle">Projects</h1>
      <hr />
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={PhotoPort}
          link="https://nireves333.github.io/sample-web-photo"
          h3="Mike Brahn's Portfolio Website"
          p="Mock photogrophy portoflio"
        />
        <ProjectCard
          src={Emporium}
          link="https://github.com/Nireves333/Vibe-Emporium"
          h3="Villagers Vibe Emporium"
          p="Mock E-Store based around the IP, Animal Crossing"
        />
        <ProjectCard
          src={DbPharma}
          link="https://github.com/Nireves333/DrugstoreDB"
          h3="Pharmacy Database"
          p="MySQL database for a hypothetical drugstore chain"
        />
        <ProjectCard
          src={Microplastics}
          link="https://github.com/Nireves333/Data_Wranglers_Microplastics_Dataset_Project"
          h3="Microplastic in Drinking Water"
          p="Machine learning program made to predict the levels of microplastics in drinking water"
        />
      </div>
    </section>
  );
}

export default Projects;
