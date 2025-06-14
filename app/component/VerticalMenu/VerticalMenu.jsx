"use client";

import { useState } from "react";
import styles from "./VerticalMenu.module.css";
import Image from "next/image";

const menuItems = ["Home", "About Me", "Skills", "Projects"];

export default function VerticalMenu() {
  const [active, setActive] = useState("Home");

  const handleClick = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src="/assets/logo.png" alt="logo" width={32} height={32} />
      </div>

      {/* Middle Navigation */}
    <nav className={styles.nav}>
      {menuItems.map(item => (
        <div
          key={item}
          className={`${styles.navItem} ${active === item ? styles.active : ''}`}
          onClick={() => handleClick(item)}
        >
          {item}
        </div>
      ))}
    </nav>

      {/* Bottom Social Icons */}
      <div className={styles.socials}>
           <a href="https://www.linkedin.com/in/junxian-li-junction/" target="_blank" rel="noopener noreferrer">
             <Image alt="LinkedIn" src="/assets/linkedin.png" width={40} height={40}/>
           </a>

            <a href="https://www.instagram.com/junction_photograph/" target="_blank" rel="noopener noreferrer">
             <Image alt="Instagram" src="/assets/insta.png" width={40} height={40} />
           </a>

           <a href="https://github.com/JunctionLI" target="_blank" rel="noopener noreferrer">  {/**no opener, no referrer when open new page, current page information would be forward to new page */}
           <Image alt="GitHub" src="/assets/github.png" width={40} height={40} />
           </a> 
      </div>
    </div>
  );
}
