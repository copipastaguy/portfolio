import styles from "./NavBar.module.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillBehanceSquare,
} from "react-icons/ai";
import memoji from "../../files/memoji/sticker02.png";

function NavBar() {
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.logo}>
        <img src={memoji} />
      </div> */}

      <div className={styles.social}>
        <a href="https://linkedin.com/in/copipastaguy">
          <AiFillLinkedin fontSize="2em" />
        </a>

        <a href="https://github.com/copipastaguy">
          <AiFillGithub fontSize="2em" />
        </a>

        <a href="https://www.behance.net/alfredchor">
          <AiFillBehanceSquare fontSize="2em" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
