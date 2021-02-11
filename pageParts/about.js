import homeStyles from "../styles/Home.module.scss";

import Section from "../components/section";

const About = () => {
  return (
    <Section title="About">
      <div className={`${homeStyles.about__container}` } >
        <h1 className={homeStyles.about__title}>
          Alex <span className={homeStyles.about__title2}>Danisz</span>
        </h1>

        <img
          src="/static/images/logo.png"
          width={264}
          height={270}
          layout="Fixed"
          quality={100}
          alt="Cute cat logo"
          className={homeStyles.about__logoImage}
        />
        <div className={homeStyles.about__subtitleContainer}>
          <h2 className={homeStyles.about__subtitleHeader}>
            Toronto, On. | Web Developer{" "}
          </h2>
          <p className={homeStyles.about__subtitle}>
          Hey there! I’m Alex. I’m a professional developer specializing in web technologies.  I write code and make beautiful designed websites. I have been working with software since I was teenager from building all sorts of projects. I started from HTML, and made my way through different languages, Java for mobile apps, C# for Unity games, and finally settled into my favourite, JavaScript & React. I love learning, and I want to transition to a full stack developer once I master Node. 
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
