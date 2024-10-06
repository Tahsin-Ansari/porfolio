import styles from './ProjectsStyles.module.css';
import ToDo from '../../assets/To-Do list.png';
import Pong from '../../assets/pong-game.png';
import calculator from '../../assets/calculator.png';
import Snake from '../../assets/snake-game.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ToDo}
          link="https://github.com/Tahsin-Ansari/To-Do-list.git"
          h3="ToDo"
          p="List App"
        />
        <ProjectCard
          src={Pong}
          link="https://github.com/Tahsin-Ansari/Pong-game.git"
          h3="Ping Pong"
          p="Game App"
        />
        <ProjectCard
          src={calculator}
          link="https://github.com/Tahsin-Ansari/Calculator.git"
          h3="Calcs"
          p="Calculation App"
        />
        <ProjectCard
          src={Snake}
          link="https://github.com/Tahsin-Ansari/snake-game.git"
          h3="Snake"
          p="Game App"
        />
      </div>
    </section>
  );
}

export default Projects;
