import VerticalMenu from "./component/VerticalMenu/VerticalMenu";
import Squares from "./component/Background/Squares";
import Head from "./component/Head/Head";
import AboutMe from "./component/AboutMe/AboutMe";
import Skill from "./component/Skill/Skill";
import Project from "./component/Project/Project";

export default function Home() {
  return (
    <>
      <VerticalMenu />

      <Squares
        className="square-canvas"
        speed={0.5}
        squareSize={40}
        direction="down"
        borderColor="#c2c2c2"
        hoverFillColor="#f2f2f2"
      />

      <main className="ml-[130px] p-8 max-[768px]:ml-0">

        <section id="Home">
          <Head />
        </section>

        <section id="About Me">
          <AboutMe />
        </section>

        <section id="Skills">
          <Skill />
        </section>

        <section id="Projects">
          <Project />
        </section>
      </main>
    </>
  );
}
