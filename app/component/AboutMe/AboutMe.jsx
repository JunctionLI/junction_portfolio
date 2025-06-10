import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.aboutSection}>  {/**use section instead of div, It represents a clearly defined section of content with semantic meaning. */}
      <div className={styles.aboutLeft}>
        <h1>ABOUT <span className={styles.outlined}>ME</span></h1>
      </div>

      <div className={styles.aboutRight}>

    {/* Self-introduction Block*/}
    <div className={styles.contentBlock}>
      <div className={styles.selfIntroCard}>
        <p>
            Hi, I'm Junction Li, a former bond trader turned web developer. After five years in finance, I moved to Canada and discovered my passion for coding. 
            Now, I build websites and also work as an event and product photographer. 
            I create visual content for social media that tells a story and drives engagement. Combining my analytical mindset with creativity, I bring a unique edge to every project.
        </p>
      </div>
      </div>
        {/* Experience Block */}
        <div className={styles.contentBlock}>
          <p className={styles.contentBlockTitle}>Experience</p>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Event and Fund Development Assistant</p>
            <p className={styles.contentSmallBlockSubTitle}>Wing Kei Care Centres (Calgary, Canada) | 2025.04 - PRESENT</p>
            <ul>
              <li>Redesigned website by using Wix to improve usability and mobile responsiveness.</li>
              <li>Designed posters, brochures, and digital graphics for major events like the Golf Tournament.</li>
              <li>Created newsletter layouts and visuals to enhance readability and branding.</li>
              <li>Produced social media calendar for graphics and videos to support outreach and engagement.</li>
            </ul>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Web Designer</p>
            <p className={styles.contentSmallBlockSubTitle}>Junction Photography (Calgary, Canada) | 2024.04 - PRESENT</p>
            <ul>
              <li>Developed websites and executed tailored marketing and communication strategies for local businesses.</li>
              <li>Created and managed branding materials and custom logo/poster designs.</li>
              <li>Optimized online visibility by improving SEO through keyword analysis and better structure.</li>
            </ul>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Multimedia Assistant</p>
            <p className={styles.contentSmallBlockSubTitle}>Harmony the Musical (Calgary, Canada) | 2024.04 - 2024.12</p>
            <ul>
              <li>Regularly updated and maintained website content using WordPress.</li>
              <li>Conducted professional photo and video shoots for rehearsals, interviews, and performances.</li>
              <li>Set up cloudHQ to manage email subscribers and streamline communication.</li>
              <li>Produced optimized YouTube video content to boost search performance and branding.</li>
            </ul>
          </div>
        </div>

        {/* Certification Block */}
        <div className={styles.contentBlock}>
          <p className={styles.contentBlockTitle}>Certification</p>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Meta Front-End Developer Specialization</p>
            <p className={styles.contentSmallBlockSubTitle}>META | Issued May 2024</p>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>AWS Cloud Support Associate Specialization</p>
            <p className={styles.contentSmallBlockSubTitle}>Amazon Web Services | Issued Jul 2024</p>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Google Digital Marketing & E-commerce Specialization</p>
            <p className={styles.contentSmallBlockSubTitle}>Google | Issued Feb 2025</p>
          </div>
        </div>

        {/* Education Block */}
        <div className={styles.contentBlock}>
          <p className={styles.contentBlockTitle}>Education</p>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Software Development Diploma</p>
            <p className={styles.contentSmallBlockSubTitle}>Southern Alberta Institute of Technology | 2023.09 - 2025.04</p>
          </div>

          <div className={styles.contentSmallBlock}>
            <p className={styles.contentSmallBlockTitle}>Master of Accounting, Governance and Financial Management</p>
            <p className={styles.contentSmallBlockSubTitle}>The University of Sheffield | 2017.09 - 2018.11</p>
          </div>
        </div>
      </div>
    </section>
  );
}
