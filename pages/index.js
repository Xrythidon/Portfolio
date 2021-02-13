import Nav from "../pageParts/nav";
import About from "../pageParts/about";
import Projects from "../pageParts/projects";
import Footer from "../pageParts/footer";
import Head from "next/head";

const index = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Alex Danisz | Web Developer</title>
      </Head>
      <Nav />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default index;
