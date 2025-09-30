import VerticalMenu from "./component/VerticalMenu/VerticalMenu";
import Squares from "./component/Background/Squares";
import AboutMe from "./component/AboutMe/AboutMe";
import Project  from "./component/Project/Project";
import { HeroScrollDemo } from "./component/ScrollImage/ScrollImage";
import { CarouselDemo } from "./component/Carousel/CarouselDemo";
import GraphicDesign from './component/GraphicDesign/GraphicDesign';
import { MarqueeEffectDoubleExample } from "./component/Marquee/MarqueEffectDouble";
import { DemoOne } from "./component/ScrollAnimation/ScrollAnimation";
import { ContactMe } from "./component/ContactMe/ContactMe";
import Footer from "./component/Footer/Footer";


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
        

        <section id="home">
          <DemoOne/>
        </section>


        <section id="about-me">
          <AboutMe />
        </section>
        <MarqueeEffectDoubleExample/>        


        <section id="projects">
          <Project />
          <CarouselDemo/>
          <HeroScrollDemo/>
          
          <GraphicDesign/>
        </section>

          


        <section id="contact">
          <ContactMe/>
        </section>
        <Footer/>
      </main>
    </>
  );
}
