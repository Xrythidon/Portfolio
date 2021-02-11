import React from "react";
import 'animate.css';

import sectionStyles from "../styles/Section.module.scss";


const Section = ({ children,title }) => {
  return (
    <div className={`${sectionStyles.container}`}>
      <div className={sectionStyles.section}>
        <div className={sectionStyles.section__bar}>{title}</div>
        <div className={sectionStyles.section__container}>
        {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
