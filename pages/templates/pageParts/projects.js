import homeStyles from "../../../styles/Home.module.scss";
import Section from "../components/section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFileCode } from "@fortawesome/free-regular-svg-icons";

import Project from "../components/project/project";

const Projects = () => {
  return (
    <Section title="Projects">
      <Project
        logoSrc="./static/images/nasalogo.png"
        title="Picture a Day"
        tags={[
          "HTML & CSS",
          "JavaScript",
          "SASS",
          "React",
          "Responsive",
          "NASA API",
        ]}
        summary={`For this project I worked with things like Authentication with OAuth2, PayPal API, Database Design, UI & UX, and I used Vue and Vuex to make the project a Single Page Application.

  Victor from Adventure Cord approached me to develop a website for his Discord bot where users can log in with their Discord accounts and view their profile stats, view other users's stats, read news and updates for the bot directly from the team and purchase products to use within the bot. Since I had a lot of time to build the project and wanted to learn as much as possible, I decided to build everything from scratch.`}
      />

      <Project
        logoSrc="./static/images/poetradelogo.png"
        title="PoE Trade"
        demoUrl="https://poe-trade.netlify.app/"
        codeUrl="https://github.com/Xrythidon/poe-trade"
        tags={[
          "HTML & CSS",
          "JavaScript",
          "SASS",
          "React",
          "Responsive",
          "NASA API",
        ]}
        summary={`For this project I worked with things like Authentication with OAuth2, PayPal API, Database Design, UI & UX, and I used Vue and Vuex to make the project a Single Page Application.

      Victor from Adventure Cord approached me to develop a website for his Discord bot where users can log in with their Discord accounts and view their profile stats, view other users's stats, read news and updates for the bot directly from the team and purchase products to use within the bot. Since I had a lot of time to build the project and wanted to learn as much as possible, I decided to build everything from scratch.`}
      />

      <Project
        logoSrc="./static/images/logo.png"
        title="Portfolio"
        tags={[
          "HTML & CSS",
          "JavaScript",
          "SASS",
          "React",
          "Responsive",
          "NASA API",
        ]}
        summary={`For this project I worked with things like Authentication with OAuth2, PayPal API, Database Design, UI & UX, and I used Vue and Vuex to make the project a Single Page Application.

      Victor from Adventure Cord approached me to develop a website for his Discord bot where users can log in with their Discord accounts and view their profile stats, view other users's stats, read news and updates for the bot directly from the team and purchase products to use within the bot. Since I had a lot of time to build the project and wanted to learn as much as possible, I decided to build everything from scratch.`}
      />
    </Section>
  );
};

export default Projects;