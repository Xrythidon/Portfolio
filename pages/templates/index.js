import homeStyles from "../../styles/Home.module.scss";
import Nav from "./pageParts/nav";
import About from "./pageParts/about";
import Projects from "./pageParts/projects";
import Footer from "./pageParts/footer";
import Skills from "./pageParts/skills";

const index = () => {
  return (
    <div className="animate__animated animate__fadeIn">
    <Nav/>
   <About/>
   <Projects/>
   <Footer/>


   
    </div>
  );
};

export default index;

/* 

   <button className={`${homeStyles.about__btn} .btn`}>Hire Me</button>
*/
