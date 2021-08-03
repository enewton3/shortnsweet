import React, { useEffect, useState } from "react";
import { getMenu } from "../services/googleSheets";
import styles from "../styles/Menu.module.css";
import MenuSection from "../components/MenuSection";

export default function Menu() {
  const [menu, setMenu] = useState({
    flavors: [],
    shakes: [],
    pricing: [],
    sundaes: [],
    toppings: [],
  });

  const { flavors, shakes, pricing, sundaes, toppings } = menu;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getMenu();
    setMenu(response);
  };

  console.log(menu);

  return (
    <main className={styles.menu}>
      <h1 className={styles.menuHead}>Menu</h1>
      <div className={styles.menuContainer}>
        <MenuSection data={flavors} name={styles.flavors} />
        <MenuSection data={toppings} name={styles.toppings} />
        <MenuSection data={pricing} name={styles.pricing} />
        <MenuSection data={sundaes} name={styles.sundaes} />
        <MenuSection data={shakes} name={styles.shakes} />
      </div>
    </main>
  );
}
