import styles from "../../styles/Nav.module.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <Logo />
      <NavLinks />
    </nav>
  );
}
