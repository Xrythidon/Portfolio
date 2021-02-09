import homeStyles from "../../../styles/Home.module.scss";

const Projects = () => {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.about}>
        <div className={homeStyles.about__bar}>Projects</div>
        <div className={homeStyles.about__container}>
          <h1 className={homeStyles.about__title}>
            Alex <span className={homeStyles.about__title2}>Danisz</span>
          </h1>
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

export default Projects;
