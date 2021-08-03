import CopyrightIcon from "@material-ui/icons/Copyright";
import styles from "../../styles/Footer.module.css";

export default function Copyright() {
  return (
    <div className={styles.copyright}>
      <CopyrightIcon /> 2021 Short 'N' Sweet*
    </div>
  );
}
