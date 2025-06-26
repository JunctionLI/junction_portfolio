import { SparklesText } from "../SparkleText/sparkles-text";
import { Capstone } from "./Capstone";
import { AIProject} from "./AIProject";
import styles from "./Project.module.css";


export default function Project(){
    return(
    <section>
      <h1 className="text-4xl font-semibold text-black dark:text-white align-middle justify-center text-center py-20">
              <span className="text-4xl md:text-[6rem] sm:text-[4rem] font-bold mt-1 leading-none align-middle justify-center text-center">
                Feature Projects 
              </span>
      </h1>
      <Capstone/>
      <AIProject/>
    </section>
    );
}