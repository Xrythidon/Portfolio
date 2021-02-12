import homeStyles from "../styles/Home.module.scss";

const footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <footer className={homeStyles.footer}>
        <div className={homeStyles.footer__item}>
          © {year} Alex Danisz. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default footer;
