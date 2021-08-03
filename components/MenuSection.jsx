import React from "react";
import styles from "../styles/Menu.module.css";

export default function MenuSection({ data, name }) {
  const header = (element) => (
    <h3 key={element} className={styles.menuHeader}>
      {element}
    </h3>
  );
  const menuItem = (element) => (
    <li key={element} className={styles.menuItem}>
      {element}
    </li>
  );

  return (
    <div className={name}>
      {data?.map((item) => {
        if (item.length) {
          return (
            <div className={styles.pairContainer}>
              {header(item[0])}
              <ul className={styles.menuList}>
                {item.map((element, index) => {
                  return index === 0 ? null : menuItem(element);
                })}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
}
