import homeStyles from "../../styles/Home.module.scss";
import Nav from "./pageParts/nav";
import About from "./pageParts/about";
import Projects from "./pageParts/projects";

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
