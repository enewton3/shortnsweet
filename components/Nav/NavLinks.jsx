import React from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";

export default function NavLinks() {
  return (
    <ul className={styles.navlinks}>
      <li className={styles.navlink}>
        <Link href="/menu">Menu</Link>
      </li>
      <li className={styles.navlink}>
        <Link href="/about">About Us</Link>
      </li>
      <li className={styles.navlink}>
        <Link href="/contact">Contact</Link>
      </li>
      <li className={styles.navlink}>
        <Link href="/directions">Directions</Link>
      </li>
    </ul>
  );
}
