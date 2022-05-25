import styles from "./Footer.module.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillBehanceSquare,
} from "react-icons/ai";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>Website made by copipastaguy with ReactJS</p>
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
  );
}

export default Footer;
