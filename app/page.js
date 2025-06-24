import VerticalMenu from "./component/VerticalMenu/VerticalMenu";
import Squares from "./component/Background/Squares";
import AboutMe from "./component/AboutMe/AboutMe";
import Project  from "./component/Project/Project";
import { HeroScrollDemo } from "./component/ScrollImage/ScrollImage";
import { CarouselDemo } from "./component/Carousel/CarouselDemo";
import { MarqueeEffectDoubleExample } from "./component/Marquee/MarqueEffectDouble";
import { DemoOne } from "./component/ScrollAnimation/ScrollAnimation";


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
          <DemoOne/>
          

        </section>


        <section id="About Me">
          <AboutMe />
        </section>
        <MarqueeEffectDoubleExample/>        


        <section id="Projects">
          <HeroScrollDemo/>

          <CarouselDemo/>
          <Project />
        </section>
      </main>
    </>
  );
}
