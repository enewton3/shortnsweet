import React from "react";
import Link from "next/link";
import styles from "../../styles/Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/">Short & Sweet*</Link>
    </div>
  );
}
