import Image from "next/image";
import styles from "./Skill.module.css";

export default function Skill() {
  return (
    <section className={styles.skillSection}>
      <div className={styles.skillLeft}>
        <div className={styles.skillBlock}>
          <p className={styles.skillBlockTitle}>Core Stack</p>
          <div className={styles.skillIcons}>
            <div className={styles.iconWrapper}>
                <Image src="/assets/react.png" alt="react" width={50} height={50} />
                <span className={styles.iconLabel}>React</span>
            </div>
            <div className={styles.iconWrapper}>
                <Image src="/assets/nextjs.png" alt="nextjs" width={50} height={50} />
                <span className={styles.iconLabel}>Next.js</span>
            </div>
            <div className={styles.iconWrapper}>
                <Image src="/assets/node.png" alt="node" width={50} height={50} />
                <span className={styles.iconLabel}>Node.js</span>
            </div>

            <div className={styles.iconWrapper}>
                <Image src="/assets/typescript.png" alt="ts" width={50} height={50} />
                <span className={styles.iconLabel}>TypeScript</span>
            </div>

            <div className={styles.iconWrapper}>
                <Image src="/assets/python.png" alt="python" width={50} height={50} />
                <span className={styles.iconLabel}>Python</span>
            </div>

            <div className={styles.iconWrapper}>
                <Image src="/assets/csharp.svg" alt="csharp" width={50} height={50} />
                <span className={styles.iconLabel}>C#</span>
            </div>
          </div>
        </div>

        <div className={styles.skillBlock}>
          <p className={styles.skillBlockTitle}>UI & UX</p>
          <div className={styles.skillIcons}>
            <div className={styles.iconWrapper}>
                <Image src="/assets/tailwind.png" alt="tailwind" width={50} height={50} />
                <span className={styles.iconLabel}>Tailwind UI</span>
            </div>
            <div className={styles.iconWrapper}>
                <Image src="/assets/bootstrap.png" alt="bootstrap" width={50} height={50} />
                <span className={styles.iconLabel}>Bootstrap</span>
            </div>
            <div className={styles.iconWrapper}>
                <Image src="/assets/mantine.png" alt="mantine" width={50} height={50} />
                <span className={styles.iconLabel}>Mantine UI</span>
            </div>
          </div>
        </div>

        <div className={styles.skillBlock}>
          <p className={styles.skillBlockTitle}>Databases</p>
          <div className={styles.skillIcons}>
            <div className={styles.iconWrapper}>
                <Image src="/assets/mysql.png" alt="mysql" width={50} height={50} />
                <span className={styles.iconLabel}>My SQL</span>
            </div>
            <div className={styles.iconWrapper}>
                <Image src="/assets/firebase.png" alt="firebase" width={50} height={50} />
                <span className={styles.iconLabel}>Firebase</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.skillRight}>
        <h1>TECH <span className={styles.outlined}>SET</span></h1> 
      </div>
    </section>
  );
}
