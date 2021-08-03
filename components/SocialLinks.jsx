import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import styles from "../styles/Footer.module.css";

export default function SocialLinks() {
  return (
    <ul className={styles.sociallinks}>
      <li>
        <a href="https://www.facebook.com/shortnsweetchatham/">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/shortnsweet_official/">
          <InstagramIcon />
        </a>
      </li>
    </ul>
  );
}
