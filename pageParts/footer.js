import Link from "next/Link";
import Image from "next/image";
import homeStyles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";

const footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <footer className={homeStyles.footer}>
        <div className={homeStyles.footer__item}>
          © {year} Alex Danisz. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default footer;
