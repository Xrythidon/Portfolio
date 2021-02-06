import homeStyles from "../../styles/Home.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const index = () => {
  return (
    <div>
      <div className={homeStyles.hero}>
        <div className="hero__container">
          <h1 className="hero__title">Front End Developer</h1>
          <p className="hero__subtitle">
            I'm Alex, a web developer with brilliant projects
          </p>
          <button className="btn hero__btn">Hire Me</button>
        </div>
        <div className="hero__icons">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
    </div>
  );
};

export default index;
