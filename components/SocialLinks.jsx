import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import styles from "../styles/Footer.module.css";

export default function SocialLinks() {
  return (
    <ul className={styles.sociallinks}>
      <li>
        <a href="">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="">
          <InstagramIcon />
        </a>
      </li>
    </ul>
  );
}
