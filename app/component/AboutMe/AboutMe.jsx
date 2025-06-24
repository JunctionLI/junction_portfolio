"use client"

import { GlowCard } from "@/component/GlowCard/spotlight-card";
import Skill from "../Skill/Skill";
import styles from "./AboutMe.module.css";
import Image from "next/image";
import Introduction from "./Introduction";



export default function AboutMe() {



  return (
    <section className={styles.aboutSection}>  {/**use section instead of div, It represents a clearly defined section of content with semantic meaning. */}
      <div className={styles.aboutLeft}>
        <div className={styles.imageSection}>
          <Image className={styles.imageDetail} height={800} width={800} src="/assets/body.png" alt="ai generate"/>
        </div>
        
      </div>

      <div className={styles.aboutRight}>
        <GlowCard width="100%" customSize={true}>  
          <Introduction/>
          <Skill/>
        </GlowCard>
        
        </div>
    </section>
  );
}
