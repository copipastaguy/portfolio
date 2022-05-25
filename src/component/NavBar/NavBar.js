import styles from "./NavBar.module.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillBehanceSquare,
} from "react-icons/ai";
function NavBar() {
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.logo}></div> */}
      <a href="https://linkedin.com/in/copipastaguy">
        <AiFillLinkedin fontSize="2em" />
      </a>

      <a href="https://github.com/copipastaguy">
        <AiFillGithub fontSize="2em" />
      </a>

      <a href="https://www.behance.net/alfredchor">
        <AiFillBehanceSquare fontSize="2em" />
      </a>
      {/* <div className={styles.navbarLinks}>
        <p>Contact</p>

        <p className={styles.worksButton}>View Works</p>
      </div> */}
    </div>
  );
}

export default NavBar;
