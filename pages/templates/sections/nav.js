import Link from "next/Link";
import Image from "next/image";
import homeStyles from "../../../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";

//import logo from "../../images/logo_transparent.png";

const Nav = () => {
  return (
    <div>
      <nav className={homeStyles.nav}>
        <div className={homeStyles.nav__right}>
          <ul className={homeStyles.nav__items}>
            <li className={homeStyles.nav__item}>
              <Link href="/">
                <a target="_blank">
                  <button className="btn">Home</button>
                </a>
              </Link>
            </li>
            <li className={homeStyles.nav__item}>
              <Link href="/">
                <a target="_blank">
                  <button className="btn">Resume</button>
                </a>
              </Link>
            </li>
          </ul>
          <ul className={homeStyles.nav__medialinks}>
            <li className={homeStyles.nav__medialink}>
              <Link href="https://www.linkedin.com/in/alex-danisz-12436410a/">
                <a target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <span className={homeStyles.nav__mediatext}>
                    Alexdanisz@live.com
                  </span>
                </a>
              </Link>
            </li>
            <li className={homeStyles.nav__medialink}>
              <Link href="https://www.linkedin.com/in/alex-danisz-12436410a/">
                <a target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  <span className={homeStyles.nav__mediatext}>LinkedIn</span>
                </a>
              </Link>
            </li>
            <li className={homeStyles.nav__medialink}>
              <Link href="https://www.linkedin.com/in/alex-danisz-12436410a/">
                <a target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <span className={homeStyles.nav__mediatext}>Github</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
