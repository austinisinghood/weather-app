import React from "react";

// Styles
import styles from "./styles/loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
