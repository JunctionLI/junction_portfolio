"use client";

import { useState, useEffect } from "react";
import styles from "./VerticalMenu.module.css";
import Image from "next/image";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about-me", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function VerticalMenu() {
  const [active, setActive] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Resize check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto highlight based on scroll (IntersectionObserver)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setActive(id);
        }
      });
    }, observerOptions);

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isMobile ? (
        <div className={styles.mobileWrapper}>
          <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
            <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
            <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
          </div>

          {menuOpen && (
            <div className={styles.mobileMenu}>
              <div className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✕</div>

              {menuItems.map(item => (
                <div
                  key={item.id}
                  className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </div>
              ))}

              <div className={styles.mobileSocials}>
                <a href="https://www.linkedin.com/in/junxian-li-junction/" target="_blank" rel="noopener noreferrer">
                  <Image alt="LinkedIn" src="/assets/linkedin.png" width={32} height={32} />
                </a>
                <a href="https://www.instagram.com/junction_photograph/" target="_blank" rel="noopener noreferrer">
                  <Image alt="Instagram" src="/assets/insta.png" width={32} height={32} />
                </a>
                <a href="https://github.com/JunctionLI" target="_blank" rel="noopener noreferrer">
                  <Image alt="GitHub" src="/assets/github.png" width={32} height={32} />
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.sidebar}>
          <div
            className={styles.logo}
            onClick={() => handleClick("home")}
            style={{ cursor: "pointer" }}
          >
            <Image src="/assets/logo.png" alt="logo" width={32} height={32} />
          </div>

          <nav className={styles.nav}>
            {menuItems.map(item => (
              <div
                key={item.id}
                className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </div>
            ))}
          </nav>

          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/junxian-li-junction/" target="_blank" rel="noopener noreferrer">
              <Image alt="LinkedIn" src="/assets/linkedin.png" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/junction_photograph/" target="_blank" rel="noopener noreferrer">
              <Image alt="Instagram" src="/assets/insta.png" width={40} height={40} />
            </a>
            <a href="https://github.com/JunctionLI" target="_blank" rel="noopener noreferrer">
              <Image alt="GitHub" src="/assets/github.png" width={40} height={40} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
