import homeStyles from "../../../styles/Home.module.scss";
import Section from "../components/section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFileCode } from "@fortawesome/free-regular-svg-icons";

const Projects = () => {
  return (
    <Section title="Projects">
      <div className={homeStyles.project__container}>
        <div className={homeStyles.project__logoBox}>
          <img
            src="./static/images/nasalogo.png"
            layout="fixed"
            alt="Project Image"
            className={homeStyles.project__logo}
          />
        </div>
        <div className={homeStyles.project__descBox}>
          <h3 className={homeStyles.project__title}>Nasa Space API</h3>
          <ul className={homeStyles.project__tags}>
            <li className={homeStyles.project__tag}>HTML & CSS</li>
            <li className={homeStyles.project__tag}>JavaScript</li>
            <li className={homeStyles.project__tag}>SASS</li>
            <li className={homeStyles.project__tag}>React</li>
            <li className={homeStyles.project__tag}>Responsive</li>
            <li className={homeStyles.project__tag}>Nasa API</li>
          </ul>
          <h4 className={homeStyles.project__label}>About</h4>
          <p
            className={homeStyles.project__summary}
          >{`For this project I worked with things like Authentication with OAuth2, PayPal API, Database Design, UI & UX, and I used Vue and Vuex to make the project a Single Page Application.

          Victor from Adventure Cord approached me to develop a website for his Discord bot where users can log in with their Discord accounts and view their profile stats, view other users's stats, read news and updates for the bot directly from the team and purchase products to use within the bot. Since I had a lot of time to build the project and wanted to learn as much as possible, I decided to build everything from scratch.`}</p>
          <div className={homeStyles.project__btnContainer}>
            <button className="btn btn--large">
              <FontAwesomeIcon icon={faEye} size="sm" /> Demo
            </button>
            <button className="btn btn--large">
              <FontAwesomeIcon icon={faFileCode} size="sm" /> Code
            </button>
          </div>
        </div>
      </div>

      <div className={homeStyles.project__container}>
        <div className={homeStyles.project__logoBox}>
          <img
            src="./static/images/poetradelogo.png"
            layout="fixed"
            alt="Project Image"
            className={homeStyles.project__logo}
          />
        </div>
        <div className={homeStyles.project__descBox}>
          <h3 className={homeStyles.project__title}>PoE Trade</h3>
          <ul className={homeStyles.project__tags}>
            <li className={homeStyles.project__tag}>HTML & CSS</li>
            <li className={homeStyles.project__tag}>JavaScript</li>
            <li className={homeStyles.project__tag}>SASS</li>
            <li className={homeStyles.project__tag}>React</li>
            <li className={homeStyles.project__tag}>Responsive</li>
            <li className={homeStyles.project__tag}>Nasa API</li>
          </ul>
          <h4 className={homeStyles.project__label}>About</h4>
          <p
            className={homeStyles.project__summary}
          >{`For this project I worked with things like Authentication with OAuth2, PayPal API, Database Design, UI & UX, and I used Vue and Vuex to make the project a Single Page Application.

          Victor from Adventure Cord approached me to develop a website for his Discord bot where users can log in with their Discord accounts and view their profile stats, view other users's stats, read news and updates for the bot directly from the team and purchase products to use within the bot. Since I had a lot of time to build the project and wanted to learn as much as possible, I decided to build everything from scratch.`}</p>
          <div className={homeStyles.project__btnContainer}>
            <button className="btn btn--large">
              <FontAwesomeIcon icon={faEye} size="sm" /> Demo
            </button>
            <button className="btn btn--large">
              <FontAwesomeIcon icon={faFileCode} size="sm" /> Code
            </button>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Projects;
