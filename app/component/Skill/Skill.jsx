import Image from "next/image";
import styles from "./Skill.module.css";
import { IconCloudDemo } from "./IconCloudDemo";

export default function Skill() {
  return (
    <section className={styles.skillSection}>
      <IconCloudDemo/>
    </section>
  );
}
