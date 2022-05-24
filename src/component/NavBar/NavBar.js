import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}></div>

      {/* <div className={styles.navbarLinks}>
        <p>Contact</p>

        <p className={styles.worksButton}>View Works</p>
      </div> */}
    </div>
  );
}

export default NavBar;
