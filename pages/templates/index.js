import homeStyles from "../../styles/Home.module.scss";
import Nav from "./sections/nav";
import About from "./sections/about";
import Projects from "./sections/projects";

const index = () => {
  return (
    <>
    <Nav/>
   <About/>
   <Projects/>
   
    </>
  );
};

export default index;

/* 

   <button className={`${homeStyles.about__btn} .btn`}>Hire Me</button>
*/
