import AboutMe from "./component/AboutMe/AboutMe";
import Head from "./component/Head/Head";
import Project from "./component/Project/Project";
import Skill from "./component/Skill/Skill";


export default function Home(){
  return(
    <main>

      <Head/>
      <AboutMe/>
      <Skill/>
      <Project/>
    </main>
  )
}