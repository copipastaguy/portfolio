import styles from "./Cookie.module.css";
import { useState } from "react";

function Cookie() {
  // initial state of cookie = display block
  const [cookie, setCookie] = useState(false);

  return (
    //   if true display block, false display none
    <div className={`cookie ${styles.hide} ? ${styles.cookie}  `} id="cookie">
      <p>This website does not collect any cookies from you</p>

      <div className={styles.cookieBtn}>
        <p onClick={() => setCookie(true)}>Accept no cookies</p>
      </div>
    </div>
  );
}

export default Cookie;
