import homeStyles from "../../../../styles/Home.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFileCode } from "@fortawesome/free-regular-svg-icons";

const Project = ({ logoSrc, title, tags, summary, demoUrl, codeUrl }) => {
  return (
    <div className={homeStyles.project__container}>
      <div className={homeStyles.project__logoBox}>
        <img
          src={logoSrc}
          layout="fixed"
          alt="Project Image"
          className={homeStyles.project__logo}
        />
      </div>
      <div className={homeStyles.project__descBox}>
        <h3 className={homeStyles.project__title}>{title}</h3>
        <ul className={homeStyles.project__tags}>
          {tags.map((tag) => (
            <li key={tag} className={homeStyles.project__tag}>{tag}</li>
          ))}
        </ul>
        <h4 className={homeStyles.project__label}>About</h4>
        <p className={homeStyles.project__summary}>{summary}</p>
        <div className={homeStyles.project__btnContainer}>
          <a href={demoUrl} target="_blank" className="btn btn--large">
              {" "}
              <FontAwesomeIcon className="btn--icon" icon={faEye} size="sm" /> Demo
          </a>
          <a href={codeUrl} target="_blank" className="btn btn--large">
              <FontAwesomeIcon className="btn--icon" icon={faFileCode} size="sm" /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
