import styles from "./NavBar.module.css";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}></div>
      </Link>

      <div className={styles.navbarLinks}>
        <Link to="/contact">
          <p>Contact</p>
        </Link>

        <Link to="/works">
          <p className={styles.worksButton}>View Works</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
