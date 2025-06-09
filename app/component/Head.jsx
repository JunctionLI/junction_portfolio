"use client"
import Image from "next/image";
import styles from "./Head.module.css";
import { useState } from "react";

export default function Head() {

    const [hovered, setHovered] = useState(false);
  return (
    <div className={styles.container}>

      <div className={styles.textSection}>
        <p className={styles.title}>Hi! I'm Junction Li</p>
        <p className={styles.subtitle}>
          A Web & Graphic Designer, Photographer, and Social Media Creator.
        </p>
        <div className={styles.socialIcons}>

          <a href="https://github.com/JunctionLI" target="_blank" rel="noopener noreferrer">
          <Image alt="GitHub" src="/assets/github.png" width={40} height={40} />
          </a> 
          <a href="https://www.instagram.com/junction_photograph/" target="_blank" rel="noopener noreferrer">
            <Image alt="Instagram" src="/assets/insta.png" width={40} height={40} />
          </a>

          <a href="https://www.linkedin.com/in/junxian-li-junction/" target="_blank" rel="noopener noreferrer">
            <Image alt="LinkedIn" src="/assets/linkedin.png" width={40} height={40}/>
          </a>

        </div>
        <a href="/assets/junction-cv.pdf" download className={styles.downloadBtn}>
          Download CV
        </a>

      </div>

      <div className={styles.imageSection}>
        <Image
            src={hovered ? "/assets/portrait2.png" : "/assets/portrait.png"}
            alt="Junction Li portrait"
            width={600}
            height={800}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            />
      </div>
    </div>
  );
}
