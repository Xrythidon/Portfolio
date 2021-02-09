import homeStyles from "../../../styles/Home.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.about}>
        <div className={homeStyles.about__bar}>About</div>
        <div className={homeStyles.about__container}>
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
            priority
            className={homeStyles.about__logoImage}
          />
          <div className={homeStyles.about__subtitleContainer}>
            <h3 className={homeStyles.about__subtitleHeader}>
              Toronto, On. | Web Developer{" "}
            </h3>
            <p className={homeStyles.about__subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              impedit temporibus. Incidunt iure quasi eligendi aliquam illo,
              dolorem iusto, voluptatem quia non debitis omnis ducimus labore
              suscipit laudantium saepe rerum est commodi. Non nesciunt facilis,
              dignissimos deleniti earum provident unde dolore quaerat ipsum
              eaque placeat a. Et officiis consectetur debitis asperiores saepe.
              Optio ut esse excepturi placeat magni, maiores temporibus
              perferendis eos suscipit tenetur officia dolorem porro consequatur
              voluptates molestiae eius ex, quaerat repellat voluptatum laborum
              at. Ipsum, enim velit. Non accusantium quasi quaerat nihil
              nostrum? Aliquid accusantium praesentium saepe explicabo
              consequuntur distinctio sapiente. Repellat, delectus. Ab tempora
              maxime atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
