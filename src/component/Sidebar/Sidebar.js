import styles from "./Sidebar.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <a href="https://www.linkedin.com/in/alfredchor">
        <BsLinkedin fontSize="2em" />
      </a>

      <a href="https://github.com/copipastaguy">
        <BsGithub fontSize="2em" />
      </a>
    </div>
  );
}

export default Sidebar;
