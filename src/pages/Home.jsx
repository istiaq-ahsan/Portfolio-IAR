import AboutMe from "../components/HomeComponents/AboutMe";
import Banner from "../components/HomeComponents/Banner";
import Contact from "../components/HomeComponents/Contact";
import Education from "../components/HomeComponents/Education";
import Extra from "../components/HomeComponents/Extra";
import Projects from "../components/HomeComponents/Projects";
import Skill from "../components/HomeComponents/Skill";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Extra></Extra>
    </div>
  );
};

export default Home;
