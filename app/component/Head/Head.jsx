"use client"
import Image from "next/image";
import styles from "./Head.module.css";
import { useState } from "react";
import RotatingText from './RotatingText';
import Aurora from './Aurora';
import ProfileCard from './ProfileCard'

export default function Head() {

    const [hovered, setHovered] = useState(false);
  return (
    <section className={styles.container}>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
  
      <div className={styles.textSection}>
        <p className={styles.title}>Hi, I'm</p>
        <p className={styles.name}> Junction Li </p>
        <RotatingText
          texts={['A Web&Graphic Designer', 'A Photographer', 'A Social Media Creator']}
          mainClassName="h-[40px] min-w-[280px] text-lg text-white sm:text-xl md:text-2xl text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        <div className={styles.socialIcons}>

          <a href="https://github.com/JunctionLI" target="_blank" rel="noopener noreferrer">  {/**no opener, no referrer when open new page, current page information would be forward to new page */}
          <Image alt="GitHub" src="/assets/github.png" width={40} height={40} />
          </a> 
          <a href="https://www.instagram.com/junction_photograph/" target="_blank" rel="noopener noreferrer">
            <Image alt="Instagram" src="/assets/insta.png" width={40} height={40} />
          </a>

          <a href="https://www.linkedin.com/in/junxian-li-junction/" target="_blank" rel="noopener noreferrer">
            <Image alt="LinkedIn" src="/assets/linkedin.png" width={40} height={40}/>
          </a>

        </div>

        <div className={styles.buttonContainer}>
              <a href="/assets/junction-cv.pdf" download className={styles.downloadBtn}>
                Download CV
              </a>
        </div>

      </div>

      <div className={styles.imageSection}>

          <ProfileCard
            name="Junction Li"
            title="Web&Graphic Designer / Photographer"
            handle="junctionphoto_ca"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/portrait3.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />

      </div>
        


    </section>

  );
}
