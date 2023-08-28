import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <input type="checkbox" name="" id="checkbox" />
        <label htmlFor="checkbox"></label>
      </div>
      <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      <button title="Apagar task">
        <Trash weight="bold" size={24} />
      </button>
    </div>
  );
}
