import Link from "next/link";
import homeStyles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";


const Nav = () => {
  return (
    <div>
      <nav className={homeStyles.nav}>
        <div className={homeStyles.nav__right}>
          <ul className={homeStyles.nav__items}>
            <li className={homeStyles.nav__item}>
              <Link href="/">
                  <button className="btn">Home</button>
              </Link>
            </li>
            <li className={homeStyles.nav__item}>
              <Link href="/static/resume/Alex-Danisz-FrontEnd.pdf">
                <a target="_blank">
                  <button className="btn">Resume</button>
                </a>
              </Link>
            </li>
          </ul>
          <ul className={homeStyles.nav__medialinks}>
            <li className={homeStyles.nav__medialink}>
                <a href="mailto:alexdanisz@live.com?subject=Portfolio" alt="Mail me at alexdanisz@live.com" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <span className={homeStyles.nav__mediatext}>
                    Alexdanisz@live.com
                  </span>
                </a>
            </li>
            <li className={homeStyles.nav__medialink}>
                <a href="https://www.linkedin.com/in/alex-danisz-12436410a/" alt="LinkedIn button" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  <span className={homeStyles.nav__mediatext}>LinkedIn</span>
                </a>
            </li>
            <li className={homeStyles.nav__medialink}>
                <a href="https://github.com/Xrythidon" alt="Github button" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <span className={homeStyles.nav__mediatext}>Github</span>
                </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
