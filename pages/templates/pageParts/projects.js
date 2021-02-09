import homeStyles from "../../../styles/Home.module.scss";

import Section from "../components/section";

const Projects = () => {
  return (
    <Section title="Projects">
      <div className={homeStyles.project__container}>
        <div className={homeStyles.project__logoBox}>
          <img src="./static/images/nasalogo.png" layout="fixed" alt="Project Image" className={homeStyles.project__logo}/>
        </div>
        <div className={homeStyles.project__descBox}></div>
      </div>

      
      <div className={homeStyles.project__container}>
        <div className={homeStyles.project__logoBox}>
          <img src="./static/images/poetradelogo.png" alt="Project Image" className={homeStyles.project__logo}/>
        </div>
        <div className={homeStyles.project__descBox}></div>
      </div>
    </Section>
  );
};

export default Projects;
