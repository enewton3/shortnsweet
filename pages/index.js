import styles from "../styles/Home.module.css";
import NavLinks from "../components/Nav/NavLinks";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <div> Short 'N' Sweet *</div>
        <div>At the Old South Chatham Schoolhouse</div>
        <div>Hours: 11am to 9:30pm daily</div>
        <div>Open from Mother's Day through Columbus Day</div>
        <div>CASH ONLY!</div>
        <div>{"(We have an ATM inside)"}</div>
        <div className={styles.linkContainer}>
          <div className={styles.menuLink}>
            <Link href="/menu">Menu</Link>
          </div>
          <div className={styles.aboutLink}>
            <Link href="/about">About Us</Link>
          </div>
          <div className={styles.contactLink}>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.directionsLink}>
            <Link href="/directions">Directions</Link>
          </div>
          <div className={styles.directionsLink}>
            <Link href="/gallery">Gallery</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
