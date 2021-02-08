import homeStyles from "../../styles/Home.module.scss";
import Nav from "./nav";

const index = () => {
  return (
    <div>
      <Nav />
      <div className={homeStyles.about}>
        <div className={homeStyles.about__bar}>About</div>
        <div className={homeStyles.about__container}>
          <h1 className={homeStyles.about__title}>Alex Danisz</h1>
          <p className={homeStyles.about__subtitle}>
            I'm Alex, a web developer with brilliant projects
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default index;


/* 

   <button className={`${homeStyles.about__btn} .btn`}>Hire Me</button>
*/
