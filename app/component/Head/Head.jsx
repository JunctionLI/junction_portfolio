"use client"
import Image from "next/image";
import styles from "./Head.module.css";
import { useState } from "react";
import RotatingText from './RotatingText';
import { HandWrittenTitle } from "@/component/HandWriting/hand-writing-text"


export default function Head() {

    const [isHovered, setIsHovered] = useState(false);
  return (
    <section className={styles.container}>

      <div className={styles.textSection}>

        <div className={styles.portraitContainer}>
          <HandWrittenTitle title="Junction Li" className={styles.name} />
          <Image
            alt="LinkedIn"
            src={isHovered ? "/assets/portrait2.gif" : "/assets/portrait1.gif"}
            width={300}
            height={300}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.image}
            style={{ maxWidth: "90vw", height: "auto" }}
            unoptimized 
          />
        </div>

        <div className={styles.titleLineContainer}>
          <p className={styles.title}>Software Developer </p>
          <p className={styles.line}> ——————</p>
        </div>


      <span className={styles.rotateTextContainer}>
        <RotatingText
          texts={['+ Designer', '+ Photographer', '+ Creator']}
          className={styles.rotateText}
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </span>

        <div className={styles.buttonContainer}>
              <a href="/assets/junction-cv.pdf" download className={styles.downloadBtn}>
                Download CV
              </a>
        </div>

      </div>


    </section>
    

  );
}
