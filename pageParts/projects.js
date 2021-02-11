import Section from "../components/section";
import Project from "../components/project/project";

const Projects = () => {
  return (
    <Section title="Projects">
      <Project
        logoSrc="./static/images/nasalogo.png"
        logoWidth="350"
        logoHeight="262.5"
        title="Picture a Day"
        demoUrl="https://pictureaday.netlify.app/"
        codeUrl="https://github.com/Xrythidon/nasa-potd"
        alt="Nasa Picture a Day Logo"
        tags={[
          "HTML & CSS",
          "JavaScript",
          "SASS",
          "React",
          "React-Router",
          "Responsive",
          "Mobile-First",
          "NASA API",
        ]}
        summary={`An app that uses NASA APOD API to show interesting astronomical pictures with a description to understand more about space.
        
        The app features:
        •	Newly generated picture daily
        •	Allow users to save pictures locally
        •	Share links
        •	See astronomical pictures dated back until 1995
        
        The motivation behind this project was for a technical interview, however I fell in love with the idea of making a beautiful space gallery website. 
        `}
      />

      <Project
        logoSrc="./static/images/poetradelogo.png"
        logoWidth="350"
        logoHeight="262.5"
        alt="Path of Exile Trade Logo"
        title="PoE Trade"
        demoUrl="https://poe-trade.netlify.app/"
        codeUrl="https://github.com/Xrythidon/poe-trade"
        tags={[
          "HTML & CSS",
          "JavaScript",
          "SASS",
          "React",
          "Mobile-First",
          "Responsive",
          "PoE API",
        ]}
        summary={`PoE Trade is an app that enables players to trade between each other using PathofExile’s Trade API, and using a local API to cache all in-game items.
        
        How to use: Search up an item in the search bar i.e. “Headhunter”, and a list of the available items will be displayed. Click the whisper button to automatically add the player’s name to the clipboard and you are ready to message them in game.
        
        The app features:
        •	Autocomplete categorized search suggestions, which can be used with arrow keys
        •	Displays items with all notable data (affixes, ilvl, price, etc)
        •	Links/Socket connections
        •	Shows all items
        •	Clipboard message
        •	Live and usable on PoE Standard
        
        I made this website as a challenge to see if I can compete with the functionality of the most popular trading websites. 
        `}
      />

      <Project
        logoSrc="./static/images/logo.png"
        logoWidth="350"
        logoHeight="262.5"
        alt="Portfolio Logo"
        title="Portfolio"
        demoUrl="https://github.com/Xrythidon/Portfolio"
        codeUrl="https://github.com/Xrythidon/Portfolio"
        tags={[
          "HTML & CSS",
          "JavaScript",
          "SASS",
          "React",
          "Next.js",
          "Static Generated",
          "Responsive",
          "Mobile-First",
        ]}
        summary={`An app that shows the collection of my work. This app features Next.js’ statically generated app in order to optimize accessibility and SEO.
        
        The app features:
        •	Beautiful mobile-first design
        •	Accessibility & SEO
        •	Scalability
        
        I built this app for scalability, creating reusable React components. This will help as I continue to add new projects 
        `}
      />
    </Section>
  );
};

export default Projects;
