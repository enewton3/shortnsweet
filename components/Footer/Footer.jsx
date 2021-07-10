import SocialLinks from "../SocialLinks";
import Copyright from "./Copyright";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <SocialLinks />
      <Copyright />
    </div>
  );
}
