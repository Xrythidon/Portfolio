import homeStyles from "../../../styles/Home.module.scss";
import Section from "../components/section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <Section title="Skills">
      <div className={`${homeStyles.skills__container}`}>
        <div className={homeStyles.skills__list}>
          <div className={homeStyles.skills__listItem}>
            <FontAwesomeIcon icon={faReact} className={homeStyles.skills__icon} size="3x" />
            <h3 className={homeStyles.skills__listTitle}>React</h3>
            <p className={homeStyles.skills__listSubtitle}>Redux, Next.js, Router</p>
          </div>
          <div className={homeStyles.skills__listItem}>
            <FontAwesomeIcon icon={faReact} className={homeStyles.skills__icon} size="3x" />
            <h3 className={homeStyles.skills__listTitle}>React</h3>
            <p className={homeStyles.skills__listSubtitle}>Redux, Next.js, Router</p>
          </div>
          <div className={homeStyles.skills__listItem}>
            <FontAwesomeIcon icon={faReact} className={homeStyles.skills__icon} size="3x" />
            <h3 className={homeStyles.skills__listTitle}>React</h3>
            <p className={homeStyles.skills__listSubtitle}>Redux, Next.js, Router</p>
          </div>
          <div className={homeStyles.skills__listItem}>
            <FontAwesomeIcon icon={faReact} className={homeStyles.skills__icon} size="3x" />
            <h3 className={homeStyles.skills__listTitle}>React</h3>
            <p className={homeStyles.skills__listSubtitle}>Redux, Next.js, Router</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
