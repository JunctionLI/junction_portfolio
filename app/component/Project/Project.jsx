import styles from "./Project.module.css";

export default function Project(){
    return(
    <section className={styles.aboutSection}>
      <div className={styles.aboutLeft}>
        <h1>Featured <span className={styles.outlined}>Projects</span></h1>
      </div>

      <div className={styles.aboutRight}>


        {/* website design Block */}
        <div className={styles.contentBlock}>
          <p className={styles.contentBlockTitle}>Website Design</p>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>ME Permanent Aesthetics</p>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>MZS Beauty Salon</p>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>New Face Beauty Spa</p>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Hey Beauty Medi Spa&Wellness</p>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Harmony the Musical</p>
          </div>

           <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Tattooff Laser Removal</p>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Walk for Wing Kei 2025</p>
          </div>
        </div>

        
        {/* capstone project Block */}
        <div className={styles.contentBlock}>
          <p className={styles.contentBlockTitle}>Capstone Project</p>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Orbit Inventory Management System</p>
            <ul>
              <li>Designing the user experience (UX) for a client in the design phase using Figma involves creating wireframes, prototypes, and user flows to ensure an intuitive and visually appealing interface. </li>
              <li>Developed an inventory management solution using Next.js, React, and TypeScript for scalability and efficiency</li>
              <li>Designed and implemented RESTful APIs to enable seamless communication between the client and server.</li>
              <li>Built features like inventory tracking, role-based access control, and automated low-stock notifications. Ensured a user-friendly interface and optimized performance for streamlined inventory operations.</li>
            </ul>
          </div>    
        </div>

        {/* other projects Block */}
        <div className={styles.contentBlock}>
          <p className={styles.contentBlockTitle}>Other Projects</p>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Software Development Diploma</p>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Master of Accounting, Governance and Financial Management</p>
          </div>
        </div>
      </div>
    </section>
    );
}